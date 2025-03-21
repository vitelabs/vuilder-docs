---
order: 7
title: Util / Dashboard
---

# Util and Dashboard API

:::tip
To enable Util and (or) Dashboard RPC API on the node, add "util" and (or) "dashboard" namespace in "PublicModules" in node_config.json
:::

## `util_getPoWNonce`
Calculate PoW nonce according to difficulty. See [here](../vite-basics/quota/quota.md#calculating-pow-puzzle) for more information.

- **Parameters**: 
    * `difficulty`: `bigint string`  PoW difficulty
    * `hash`: `hash`  32 byte $Blake2b(address + previousHash)$ hash
    
> For example, if address is "vite_ab24ef68b84e642c0ddca06beec81c9acb1977bbd7da27a87a", previousHash is "0000000000000000000000000000000000000000000000000000000000000000", then the hash is "8689fc3e7d0bcad0a1213fd90ab53437ce745408750f7303a16c75bad28da8c3"

- **Returns**: 
    - `base64`:  nonce
    
- **Example**:
::: demo
```json tab:Request
{
    "jsonrpc": "2.0",
    "id": 1,
    "method": "util_getPoWNonce",
    "params": [
        "67108863",
        "35c82fe515c2982c5ef75226eab35f3fb14952f8ef59005f02893cd3dca4db09"
    ]
}
```
```json tab:Response
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": "e5WeaVy7tSs="
}
```
:::

## `dashboard_processInfo`
Get go-vite information

- **Parameters**:
    * `id`: `string`  Optional request id

- **Returns**: 
    - `reqId`: `string`  Request id
    - `build_version`: `string`  Go-vite version
    - `commit_version`: `string`  Go-vite commit id
    - `nodeName`: `string`  Node name
    - `rewardAddress`: `string`  If the node has registered for full node reward program, this field is the address to receive rewards, otherwise returns an empty string.
    - `pid`: `int`  Go-vite process id
    
- **Example**:
::: demo
```json tab:Request
{
    "jsonrpc": "2.0",
    "id": 0,
    "method": "dashboard_processInfo",
    "params": ["233"]
}
```
```json tab:Response
{
    "jsonrpc": "2.0",
    "id": 0,
    "result": {
        "build_version": "v2.11.3-nightly-202207201142",
        "commit_version": "af5b3bf85a76212304872b6c60381df5b50e6532",
        "nodeName": "s1",
        "pid": 1,
        "reqId": "233",
        "rewardAddress": ""
    }
}
```
:::

## `dashboard_runtimeInfo`
Get go-vite runtime information

- **Parameters**:
    * `id`: `string`  Optional request id

- **Returns**: 
    - `reqId`: `string`  Request id
    - `peersNum`: `int`  Number of connected peers
    - `snapshotPendingNum`: `uint64 string`  Number of snapshot blocks in mempool
    - `accountPendingNum`: `bigint string`  Number of account blocks in mempool
    - `latestSnapshot`: `hashHeightTime`
        - `Hash`: `string`  Current snapshot block hash
        - `Height`: `uint64`  Current snapshot block height
        - `Time`: `int64`  Current snapshot block timestamp. In milliseconds.
    - `updateTime`: `int64`  Node's time. In milliseconds.
    - `delayTime`: `Array<int>`  Block Propagate Latency. See [`net_nodeInfo`](net.md#net-nodeinfo) for details
    - `producer`: `address`  Block creation address if the node is SBP. Optional
    - `signData`: `hex`  64 byte signature of the current snapshot block hash signed by node's PeerKey 
    
- **Example**:
::: demo
```json tab:Request
{
    "jsonrpc": "2.0",
    "id": 0,
    "method": "dashboard_runtimeInfo",
    "params": ["56678abcd"]
}
```
```json tab:Response
{
    "jsonrpc": "2.0",
    "id": 0,
    "result": {
        "accountPendingNum": "0",
        "delayTime": [
            11659,
            12311,
            0,
            0
        ],
        "latestSnapshot": {
            "Hash": "405ff8f0c48b838e293a640eccc13e3ce150fe7e472d8ccf6c87c09ff448a816",
            "Height": 22655149,
            "Time": 1661708711000
        },
        "peersNum": 2,
        "producer": "vite_360232b0378111b122685a15e612143dc9a89cfa7e803f4b5a",
        "reqId": "56678abcd",
        "signData": "0x30b146b755c1b29ff3492df0ab079875a585fb4aa3080306149cfa1ef997f39f412f592058ed6b561f860300997c8620828d4830041a58177c760faed14af808",
        "snapshotPendingNum": 0,
        "updateTime": 1661708719144
    }
}
```
:::

## `dashboard_osInfo`
Get node's operating system information

- **Parameters**:
    * `id`: `string`  Optional request id

- **Returns**: 
    - `reqId`: `string`  Request id
    - `os`: `string`  Node's operating system
    - `platform`: `string`  Operating system platform
    - `platformFamily`: `string`  Operating system family
    - `platformVersion`: `string`  Operating system version
    - `kernelVersion`: `string`  Operating system kernel version
    - `memTotal`: `uint64`  Total memory. In bytes
    - `memFree`: `uint64`  Free memory. In bytes
    - `cpuNum`: `int`  Number of CPU cores
    - `gorountine`: `int`  Number of Go routines
    
- **Example**:
::: demo
```json tab:Request
{
    "jsonrpc": "2.0",
    "id": 0,
    "method": "dashboard_osInfo",
    "params": ["111"]
}
```
```json tab:Response
{
    "jsonrpc": "2.0",
    "id": 0,
    "result": {
        "cpuNum": 4,
        "gorountine": 106,
        "kernelVersion": "5.4.0-70-generic",
        "memFree": 5318713344,
        "memTotal": 8348397568,
        "os": "linux",
        "platform": "ubuntu",
        "platformFamily": "debian",
        "platformVersion": "20.04",
        "reqId": "111"
    }
}
```
:::

## `dashboard_netId`
Get network id

- **Parameters**:  none

- **Returns**: 
    - `string`  Vite Network id. 1 is the mainnet.
    
- **Example**:
::: demo
```json tab:Request
{
    "jsonrpc": "2.0",
    "id": 0,
    "method": "dashboard_netId",
    "params": []
}
```
```json tab:Response
{
    "jsonrpc": "2.0",
    "id": 0,
    "result": 1
}
```
:::
