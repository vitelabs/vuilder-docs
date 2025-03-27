---
order: 6
title: Subscription
---

# Subscription API

Vite nodes provide two types of subscription RPC APIs: **Polling API** and **WebSocket API**.

* **Polling API** returns a subscription filter. The client must periodically call [`subscribe_getChangesByFilterId`](#subscribe-getchangesbyfilterid) with the filter ID to fetch new events. If no new events have occurred since the last request, the server returns `null`.

> Note: Filters expire if unused for more than 5 minutes. If the client does not send a request within this time, the subscription will close, and the client must re-subscribe.

Polling APIs include:
- [`subscribe_newSnapshotBlockFilter`](#subscribe-newsnapshotblockfilter)
- [`subscribe_newAccountBlockFilter`](#subscribe-newaccountblockfilter)
- [`subscribe_newAccountBlockByAddressFilter`](#subscribe-newaccountblockbyaddressfilter)
- [`subscribe_newUnreceivedBlockByAddressFilter`](#subscribe-newunreceivedblockbyaddressfilter)
- [`subscribe_newVmLogFilter`](#subscribe-newvmlogfilter)
- [`subscribe_uninstallFilter`](#subscribe-uninstallfilter)
- [`subscribe_getChangesByFilterId`](#subscribe-getchangesbyfilterid)

* **WebSocket API** subscribes to new events via a WebSocket connection. When a new event occurs, it is automatically pushed to the client through callbacks. The subscription ends if the connection is broken.

!!! note
    WebSocket APIs require "ws" or "wss" RPC endpoints and cannot be used with HTTP.

The WebSocket API [`subscribe_subscribe`](#subscribe-subscribe) supports the following events:
- [`newSnapshotBlock`](#newsnapshotblock)
- [`newAccountBlock`](#newaccountblock)
- [`newAccountBlockByAddress`](#newaccountblockbyaddress)
- [`newUnreceivedBlockByAddress`](#newunreceivedblockbyaddress)
- [`newVmLog`](#newvmlog)

Note: Events may be reverted. If an event is reverted, the `removed` field of the event is set to `true`.

!!! tip
    Add the "subscribe" namespace to "PublicModules" and set `"SubscribeEnabled": true` in `node_config.json` to enable subscription APIs

## Topics
Topics are 32-byte event signatures or indexed parameters of a smart contract. For a non-anonymous Solidity++ event, the first topic is the event signature, and the rest (if any) are encoded indexed fields.

Topics are often used to search for specific event logs.

### Topic Matching Rules
* `[]` matches all event logs
* `[[A]]` matches event logs with "A" as the first topic
* `[[], [B]]` matches event logs with "B" as the second topic
* `[[A], [B]]` matches event logs with "A" as the first topic and "B" as the second topic
* `[[A, B], [C, D]]` matches event logs with "A" or "B" as the first topic, and "C" or "D" as the second topic
* `[[A, B], [C, D], [E]]` matches event logs with "A" or "B" as the first topic, "C" or "D" as the second topic, and "E" as the third topic
* `[[T11, T12, ... , T1M], [T21, T22, ... , T2M], ... , [TN1, TN2, ... , TNM]]` matches event logs with T<sub>11</sub>, T<sub>12</sub> ... or T<sub>1M</sub> as the first topic, T<sub>21</sub>, T<sub>22</sub> ... or T<sub>2M</sub> as the second topic, ... and T<sub>N1</sub>, T<sub>N2</sub> ... or T<sub>NM</sub> as the N topic (N <= 4)

!!! note
    Solidity++ allows a maximum of 4 topics, including one event signature and three indexed parameters 

!!! tip
    Use an SDK like Vite.js to generate topic filters

## Example

Assume address "vite_f48f811a1800d9bde268e3d2eacdc4b4f8b9110e017bd7a76f" is a smart contract and we want to obtain its event logs.

### Using WebSocket API

Create a `newVmLog` subscription on the contract address by calling `subscribe_subscribe` with event type `newVmLog`. 
```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "method": "subscribe_subscribe",
    "params": [
        "newVmLog",
        {
            "addressHeightRange": {
                "vite_f48f811a1800d9bde268e3d2eacdc4b4f8b9110e017bd7a76f": {
                    "fromHeight": "0",
                    "toHeight": "0"
                }
            }
        }
    ]
}
```
It returns a subscription id "0x4b97e0674a5ebef942dbb07709c4a608"
```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": "0x4b97e0674a5ebef942dbb07709c4a608"
}
```
When a new event log is generated, it will be returned in a callback named `subscribe_subscription`
```json
{
    "jsonrpc": "2.0",
    "method": "subscribe_subscription",
    "params": {
        "subscription": "0x4b97e0674a5ebef942dbb07709c4a608",
        "result": [
            {
                "vmlog": {
                    "topics": [
                        "aa65281f5df4b4bd3c71f2ba25905b907205fce0809a816ef8e04b4d496a85bb",
                        "000000000000000000000000bb6ad02107a4422d6a324fd2e3707ad53cfed935"
                    ],
                    "data": "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAo="
                },
                "accountBlockHash": "23ea04b0dea4b9d0aa4d1f84b246b298a30faba753fa48303ad2deb29cd27f40",
                "accountBlockHeight": "10",
                "address": "vite_f48f811a1800d9bde268e3d2eacdc4b4f8b9110e017bd7a76f",
                "removed": false
            }
        ]
    }
}
```

!!! tip
    A broken network connection may cause the WebSocket subscription to close accidentally. In this situation, you should resume the subscription first. To get the missing blocks or events, call the corresponding Ledger API [`ledger_getSnapshotBlocks`](ledger.md#ledger-getsnapshotblocks), [`ledger_getAccountBlocks`](ledger.md#ledger-getaccountblocks), [`ledger_getUnreceivedBlocksByAddress`](ledger.md#ledger-getunreceivedblocksbyaddress), or [`ledger_getVmLogsByFilter`](ledger.md#ledger-getvmlogsbyfilter) to fetch the missing blocks during the downtime.

### Using Polling API

First, create a filter for the contract address
```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "method": "subscribe_newVmLogFilter",
    "params": [
        {
            "addressHeightRange": {
                "vite_f48f811a1800d9bde268e3d2eacdc4b4f8b9110e017bd7a76f": {
                    "fromHeight": "0",
                    "toHeight": "0"
                }
            }
        }
    ]
}
```
It returns a filter id "0x61d780619649fb0872e1f94a40cec713"
```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": "0x61d780619649fb0872e1f94a40cec713"
}
```
We call `subscribe_getChangesByFilterId` to poll for new events with the filter id
```json
{
    "jsonrpc": "2.0",
    "id": 2,
    "method": "subscribe_getChangesByFilterId",
    "params": [
        "0x61d780619649fb0872e1f94a40cec713"
    ]
}
```
If there are new event logs generated since the last polling, the logs will be returned
```json
{
    "jsonrpc": "2.0",
    "id": 2,
    "result": {
        "result": [
            {
                "vmlog": {
                    "topics": [
                        "96a65b1cd08da045d0318cafda7b8c8436092851d5a4b7e75054c005a296e3fb",
                        "0000000000000000000000ab24ef68b84e642c0ddca06beec81c9acb1977bb00"
                    ],
                    "data": "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHsAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAN4Lazp2QAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
AAAAAAAAAAAAAF"
                },
                "accountBlockHash": "802b82821ec52bdadb8b79a53363bf2f90645caef95a83c34af20c640a6c320b",
                "accountBlockHeight": "10",
                "address": "vite_f48f811a1800d9bde268e3d2eacdc4b4f8b9110e017bd7a76f",
                "removed": false
            }
        ],
        "subscription": "0x61d780619649fb0872e1f94a40cec713"
    }
}
```
Note that if `subscribe_getChangesByFilterId` is not called for more than 5 minutes, the filter will expire. Always remember to call the API within every 5 minutes to keep it alive.

Additionally, we can call `subscribe_uninstallFilter` to stop a filter if necessary. 
```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "method": "subscribe_uninstallFilter",
    "params": [
        "0x61d780619649fb0872e1f94a40cec713"
    ]
}
```

---

## `subscribe_newSnapshotBlockFilter`
Create a filter for new snapshot blocks.

- **Parameters**: none
  
- **Returns**:  
	- `string` Filter Id

!!! example
    === "Request"
        ```json
        {
            "jsonrpc": "2.0",
            "id": 1,
            "method": "subscribe_newSnapshotBlockFilter",
            "params": []
        }
        ```
    === "Response"
        ```json
        {
            "jsonrpc": "2.0",
            "id": 1,
            "result": "0xf90906914486a9c22d620e50022b38d5"
        }
        ```

## `subscribe_newAccountBlockFilter`
Create a filter for new transactions (account blocks) for all accounts

- **Parameters**: none

- **Returns**:  
	- `string` Filter Id

!!! example
    === "Request"
        ```json
        {
            "jsonrpc": "2.0",
            "id": 1,
            "method": "subscribe_newAccountBlockFilter",
            "params": []
        }
        ```
    === "Response"
        ```json
        {
            "jsonrpc": "2.0",
            "id": 1,
            "result": "0xf90906914486a9c22d620e50022b38d5"
        }
        ```

## `subscribe_newAccountBlockByAddressFilter`
Create a filter for new account blocks by address

- **Parameters**:
    * `address`: `address`  Address of account

- **Returns**:  
	- `string` Filter Id

!!! example   
    === "Request"
        ```json
        {
            "jsonrpc": "2.0",
            "id": 1,
            "method": "subscribe_newAccountBlockByAddressFilter",
            "params": [
                "vite_ab24ef68b84e642c0ddca06beec81c9acb1977bbd7da27a87a"
            ]
        }
        ```
    === "Response"
        ```json
        {
            "jsonrpc": "2.0",
            "id": 1,
            "result": "0x4f18a08c6e6801aeb7a8cfbad0ca90af"
        }
        ```

## `subscribe_newUnreceivedBlockByAddressFilter`
Create a filter for new unreceived blocks by address

- **Parameters**:
    * `address`: `address`  Address of account

- **Returns**:  
	- `string` Filter Id

!!! example  
    === "Request"
        ```json
        {
            "jsonrpc": "2.0",
            "id": 1,
            "method": "subscribe_newUnreceivedBlockByAddressFilter",
            "params": [
                "vite_ab24ef68b84e642c0ddca06beec81c9acb1977bbd7da27a87a"
            ]
        }
        ```
    === "Response"
        ```json
        {
            "jsonrpc": "2.0",
            "id": 1,
            "result": "0x64e1eb3d26517a0d736b3d85ae9ce299"
        }
        ```

## `subscribe_newVmLogFilter`
Create a filter for new event logs

- **Parameters**:
    * `VmLogFilterParam`
        * `addressHeightRange`: `map<address, Range>`  Map of address and account block height range. At least one address should be specified.
            * `fromHeight`: `uint64 string`  Start height. `0` means starting from the latest account block
            * `toHeight`: `uint64 string`  End height. `0` means no ending account block height
        * `topics`: `Array<Array<hash>>` Event topics to match. See [here](#topics) for details.

- **Returns**:  
	- `string` Filter Id
	
!!! example
    === "Request"
        ```json
        {
            "jsonrpc": "2.0",
            "id": 1,
            "method": "subscribe_newVmLogFilter",
            "params": [
                {
                    "addressHeightRange": {
                        "vite_79ac3daebdfed6947c0aaeacd418eadf38a94dddefbd4acec1": {
                            "fromHeight": "1",
                            "toHeight": "0"
                        }
                    },
                    "topics": [
                        [
                            "360bba44e4490fae37d6444482aa67cf5ec7418850531522450c3805b8e5425c",
                            "1d8e14596183a6d73bc8760a43cdaf6992e6cb318cecec67f4b6bcb31fe039d5"
                        ],
                        [
                            "91ac0b2bf8c6dc8d37d0bc48a0eacaf6a7ed5bec9be59086116c6f23eca8aaf0",
                            "3adaf70d6a60eba6aaa6a1884c382ae32b223557ccaa2f3fcab6aec6c2fca21f"
                        ]
                    ]
                }
            ]
        }
        ```
    === "Response"
        ```json
        {
            "jsonrpc": "2.0",
            "id": 1,
            "result": "0x8f34ddeb22b87fdfd2acb6c9f5a2b50d"
        }
        ```

## `subscribe_uninstallFilter`
Uninstall the filter and stop subscription

- **Parameters**:
    * `string`  Filter id

- **Returns**:  
	- `bool`  `true` means the subscription is stopped

!!! example
    === "Request"
        ```json
        {
            "jsonrpc": "2.0",
            "id": 1,
            "method": "subscribe_uninstallFilter",
            "params": [
                "0x8f34ddeb22b87fdfd2acb6c9f5a2b50d"
            ]
        }
        ```
    === "Response"
        ```json
        {
            "jsonrpc": "2.0",
            "id": 1,
            "result": true
        }
        ```

## `subscribe_getChangesByFilterId`
Poll for new snapshot blocks, account blocks, unreceived blocks, or event logs by filter id. Returns an empty array if no update.

- **Parameters**:
    * `string`  Filter id

- **Returns for case `subscribe_newSnapshotBlockFilter`**: 
    * `subscription`: `string`  Filter id
    * `result`: `Array<SnapshotBlockMessage>`
        * `hash`: `hash`  Hash of snapshot block
        * `height`: `uint64 string`  Height of snapshot block
        * `removed`: `bool`  `true` means the snapshot block was reverted. For new snapshot blocks, the field is `false`

- **Returns for case `subscribe_newAccountBlockFilter`**: 
    * `subscription`: `string`  Filter id
    * `result`: `Array<AccountBlockMessage>`
        * `hash`: `hash`  Hash of account block
        * `removed`: `bool`  `true` means the account block was reverted. For new account block, the field is `false`

- **Returns for case `subscribe_newAccountBlockByAddressFilter`**: 
    * `subscription`: `string`  Filter id
    * `result`: `Array<AccountBlockWithHeightMessage>`
        * `hash`: `hash`  Hash of account block
        * `height`: `uint64 string`  Height of account block
        * `removed`: `bool`  `true` means the account block was reverted. For new account block, the field is `false`

- **Returns for case `subscribe_newUnreceivedBlockByAddressFilter`**: 
    * `subscription`: `string`  Filter id
    * `result`: `Array<UnreceivedBlockMessage>`
        * `hash`: `hash`  Hash of unreceived block
        * `received`: `bool`  `true` means the block has been received
        * `removed`: `bool`  `true` means the unreceived block was reverted. For new unreceived blocks, both `removed` and `received` is `false`. 

- **Returns for case `subscribe_newVmLogFilter`**:
    * `subscription`: `string`  Filter id
    * `result`: `Array<VmlogMessage>`
        * `accountBlockHash`: `hash`  Hash of account block
        * `accountBlockHeight`: `uint64 string`  Height of account block
        * `address`: `address`  Address of account
        * `vmlog`: `VmLog`  Event logs
            * `topics`: `Array<hash>`  Event signature and indexed fields
            * `data`: `base64`  Encoded non-indexed parameters in base64 format
        * `removed`: `bool`  `true` means the event log was reverted

!!! example
    === "Request"
        ```json
        {
            "jsonrpc": "2.0",
            "id": 1,
            "method": "subscribe_getChangesByFilterId",
            "params": [
                "0xf90906914486a9c22d620e50022b38d5"
            ]
        }
        ```
    === "subscribe_newSnapshotBlockFilter"
        ```json
        {
            "jsonrpc": "2.0",
            "id": 1,
            "result": {
            "result": [
                {
                    "hash": "5d47f2e0a532923f7ee53e7b465381f197a669e86155d541b3b7f3d63f07a0e2",
                    "height": "124",
                    "removed": false
                },
                {
                    "hash": "78b19cb84ac293d4af3f36e741938929f6d3311362e1265e87bbaa74e5fcef09",
                    "height": "125",
                    "removed": false
                },
                {
                    "hash": "94437996b3e70afd5d8593e2020ae56f63dbbc538df1ead1633340393bd52c1a",
                    "height": "126",
                    "removed": false
                }
            ],
            "subscription": "0xf90906914486a9c22d620e50022b38d5"
            }
        }
        ```
    === "subscribe_newAccountBlockFilter"
        ```json
        {
            "jsonrpc": "2.0",
            "id": 1,
            "result": {
            "result": [
                {
                    "hash": "9cc9ba996a4192e35ddbfe3ba448611fc06f6342463e21d3300e58e9772b348f",
                    "removed": false
                },
                {
                    "hash": "8b9f8067ef09aa09c8f9d652f0d9ac5e99d083722089a6d91323cffd8b2dcf08",
                    "removed": false
                }
            ],
            "subscription": "0xf90906914486a9c22d620e50022b38d5"
            }
        }
        ```
    === "subscribe_newAccountBlockByAddressFilter"
        ```json
        {
            "jsonrpc": "2.0",
            "id": 1,
            "result": {
            "result": [
                {
                    "hash": "72ec861cb2f6c32a48632407f3aa1b05d5ad450ef75fa7660dd39d7be6d3ab68",
                    "height": "15",
                    "removed": false
                }
            ],
            "subscription": "0xf90906914486a9c22d620e50022b38d5"
            }
        }
        ```
    === "subscribe_newUnreceivedBlockByAddressFilter"
        ```json
        {
            "jsonrpc": "2.0",
            "id": 1,
            "result": {
            "result": [
                {
                    "hash": "72ec861cb2f6c32a48632407f3aa1b05d5ad450ef75fa7660dd39d7be6d3ab68",
                    "received": false,
                    "removed": false
                },
                {
                    "hash": "72ec861cb2f6c32a48632407f3aa1b05d5ad450ef75fa7660dd39d7be6d3ab68",
                    "received": true,
                    "removed": false
                },
                {
                    "hash": "72ec861cb2f6c32a48632407f3aa1b05d5ad450ef75fa7660dd39d7be6d3ab68",
                    "received": false,
                    "removed": true
                }
            ],
            "subscription": "0xf90906914486a9c22d620e50022b38d5"
            }
        }
        ```
    === "subscribe_newVmLogFilter"
        ```json
        {
            "jsonrpc": "2.0",
            "id": 1,
            "result": {
            "result": [
                {
                    "vmlog": {
                        "topics": [
                            "aa65281f5df4b4bd3c71f2ba25905b907205fce0809a816ef8e04b4d496a85bb",
                            "000000000000000000000000bb6ad02107a4422d6a324fd2e3707ad53cfed935"
                        ],
                        "data": "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAo="
                    },
                    "accountBlockHash": "de8cd1dc188fd4bf44c0cb90958ffbcccab5766840d56f7b35443a1a1c5c9d3e",
                    "accountBlockHeight": "10",
                    "address": "vite_78926f48bccef67a3b9cc64fdfe864f2a708ebce1d0bbe9aef",
                    "removed": false
                }
            ],
            "subscription": "0xf90906914486a9c22d620e50022b38d5"
            }
        }
        ```

## `subscribe_subscribe`

This WebSocket API should be used with the following event types. A single callback returns up to 128 blocks or logs.

### `newSnapshotBlock`
Subscribe to new snapshot blocks. New snapshot blocks will be returned in callback

- **Parameters**: none
  
- **Returns**:  
	- `string`  Subscription id
	
- **Callback**:  
    * `subscription`: `string`  Subscription id
    * `result`: `Array<SnapshotBlockMessage>`
        * `hash`: `hash`  Hash of snapshot block
        * `height`: `uint64 string`  Height of snapshot block
        * `removed`: `bool`  `true` means the snapshot block was reverted. For new snapshot block, the field is `false`

!!! example
    === "Request"
        ```json
        {
            "jsonrpc": "2.0",
            "id": 1,
            "method": "subscribe_subscribe",
            "params": ["newSnapshotBlock"]
        }
        ```
    === "Response"
        ```json
        {
            "jsonrpc": "2.0",
            "id": 1,
            "result": "0xa809145803ebb2a52229aefcbd52a99d"
        }
        ```
    === "Callback"
        ```json
        {
            "jsonrpc": "2.0",
            "method": "subscribe_subscription",
            "params": {
                "subscription": "0xa809145803ebb2a52229aefcbd52a99d",
                "result": [
                    {
                        "hash": "22c38acb79e2de0de3c5a09618054b93ac7c7e82f41f9e15d754e58694eefe16",
                        "height": "250", 
                        "removed": false
                    }
                ]
            }
        }
        ```

### `newAccountBlock`
Subscribe to new account blocks. New account blocks will be returned in callback

- **Parameters**: none
  
- **Returns**:  
	- `string`  Subscription id
	
- **Callback**:  
    * `subscription`: `string`  Subscription id
    * `result`: `Array<AccountBlockMessage>`
        * `hash`: `hash`  Hash of account block
        * `removed`: `bool`  `true` means the account block was reverted. For new account block, the field is `false`

!!! example
    === "Request"
        ```json
        {
            "jsonrpc": "2.0",
            "id": 1,
            "method": "subscribe_subscribe",
            "params": ["newAccountBlock"]
        }
        ```
    === "Response"
        ```json
        {
            "jsonrpc": "2.0",
            "id": 1,
            "result": "0xa809145803ebb2a52229aefcbd52a99d"
        }
        ```
    === "Callback"
        ```json
        {
            "jsonrpc": "2.0",
            "method": "subscribe_subscription",
            "params": {
                "subscription": "0xa809145803ebb2a52229aefcbd52a99d",
                "result": [
                    {
                        "hash": "20009ee78d5f77122d215c3021f839b4024e4f2701e57bdb574e0cae1ae44e6c",
                        "removed": false
                    }
                ]
            }
        }
        ```

### `newAccountBlockByAddress`
Subscribe to new account blocks by address. New account blocks will be returned in callback

- **Parameters**:
  * `address`  Address of account

- **Returns**:  
	- `string`  Subscription id
	
- **Callback**:  
    * `subscription`: `string`  Subscription id
    * `result`: `Array<AccountBlockWithHeightMessage>`
        * `hash`: `hash`  Hash of account block
        * `height`: `uint64 string`  Height of account block
        * `removed`: `bool`  `true` means the account block was reverted. For new account block, the field is `false`

!!! example
    === "Request"
        ```json
        {
            "jsonrpc": "2.0",
            "id": 1,
            "method": "subscribe_subscribe",
            "params": ["newAccountBlockByAddress", "vite_ab24ef68b84e642c0ddca06beec81c9acb1977bbd7da27a87a"]
        }
        ```
    === "Response"
        ```json
        {
            "jsonrpc": "2.0",
            "id": 1,
            "result": "0xa809145803ebb2a52229aefcbd52a99d"
        }
        ```
    === "Callback"
        ```json
        {
            "jsonrpc": "2.0",
            "method": "subscribe_subscription",
            "params": {
                "subscription": "0xa809145803ebb2a52229aefcbd52a99d",
                "result": [
                    {
                        "hash": "20009ee78d5f77122d215c3021f839b4024e4f2701e57bdb574e0cae1ae44e6c",
                        "height": "1",
                        "removed": false
                    }
                ]
            }
        }
        ```

### `newUnreceivedBlockByAddress`
Subscribe to unreceived blocks by address. New unreceived blocks will be returned in callback

- **Parameters**:
  * `address`  Address of account

- **Returns**:  
	- `string`  Subscription id
	
- **Callback**:  
    * `subscription`: `string`  Subscription id
    * `result`: `Array<UnreceivedBlockMessage>`
        * `hash`: `string hash`  Hash of unreceived block
        * `received`: `bool`  `true` means the block was received
        * `removed`: `bool`  `true` means the unreceived block was reverted. For new unreceived blocks, both `removed` and `received` is `false`. 

!!! example
    === "Request"
        ```json
        {
            "jsonrpc": "2.0",
            "id": 1,
            "method": "subscribe_subscribe",
            "params": ["newUnreceivedBlockByAddress", "vite_ab24ef68b84e642c0ddca06beec81c9acb1977bbd7da27a87a"]
        }
        ```
    === "Response"
        ```json
        {
            "jsonrpc": "2.0",
            "id": 1,
            "result": "0xa809145803ebb2a52229aefcbd52a99d"
        }
        ```
    === "Callback"
        ```json
        {
            "jsonrpc": "2.0",
            "method": "subscribe_subscription",
            "params": {
                "subscription": "0xa809145803ebb2a52229aefcbd52a99d",
                "result": [
                    {
                        "hash": "20009ee78d5f77122d215c3021f839b4024e4f2701e57bdb574e0cae1ae44e6c",
                        "received": false,
                        "removed": false
                    }
                ]
            }
        }
        ```

### `newVmLog`
Subscribe to smart contract event logs. New event logs will be returned in callback

- **Parameters**:
    * `VmLogFilterParam`
        * `addressHeightRange`: `map<address, Range>`  Map of address and account block height range. At least one address should be specified.
            * `fromHeight`: `uint64 string`  Start height. `0` means starting from the latest account block
            * `toHeight`: `uint64 string`  End height. `0` means no ending account block height
        * `topics`: `Array<Array<hash>>` Event topics to match. See [here](#topics) for details.

- **Returns**:  
	- `string`  Subscription id
	
- **Callback**:  
    * `subscription`: `string`  Subscription id
    * `result`: `Array<VmlogMessage>`
        * `accountBlockHash`: `hash`  Hash of account block
        * `accountBlockHeight`: `uint64 string`  Height of account block
        * `address`: `address`  Address of account
        * `vmlog`: `VmLog`  Event logs
            * `topics`: `Array<hash>`  Event signature and indexed fields
            * `data`: `base64`  Encoded non-indexed parameters in base64 string
        * `removed`: `bool`  `true` means the event log was reverted

!!! example
    === "Request"
        ```json
        {
            "jsonrpc": "2.0",
            "id": 1,
            "method": "subscribe_subscribe",
            "params": [
                "newVmLog",
                {
                    "addressHeightRange": {
                        "vite_f48f811a1800d9bde268e3d2eacdc4b4f8b9110e017bd7a76f": {
                            "fromHeight": "0",
                            "toHeight": "0"
                        }
                    }
                }
            ]
        }
        ```
    === "Response"
        ```json
        {
            "jsonrpc": "2.0",
            "id": 1,
            "result": "0x4b97e0674a5ebef942dbb07709c4a608"
        }
        ```
    === "Callback"
        ```json
        {
            "jsonrpc": "2.0",
            "method": "subscribe_subscription",
            "params": {
                "subscription": "0x4b97e0674a5ebef942dbb07709c4a608",
                "result": [
                    {
                        "vmlog": {
                            "topics": [
                                "aa65281f5df4b4bd3c71f2ba25905b907205fce0809a816ef8e04b4d496a85bb",
                                "000000000000000000000000bb6ad02107a4422d6a324fd2e3707ad53cfed935"
                            ],
                            "data": "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAo="
                        },
                        "accountBlockHash": "23ea04b0dea4b9d0aa4d1f84b246b298a30faba753fa48303ad2deb29cd27f40",
                        "accountBlockHeight": "10",
                        "address": "vite_f48f811a1800d9bde268e3d2eacdc4b4f8b9110e017bd7a76f",
                        "removed": false
                    }
                ]
            }
        }
        ```


