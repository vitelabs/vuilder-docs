---
order: 1
parent:
    title: API
    order: 2
---

# Overview

Each Vite node provides a JSON-RPC API that allows applications to connect to the blockchain. 
Developers can interact with on-chain data and send various types of transactions to the network by utilizing the endpoints provided by the API. 
The API follows the JSON-RPC standard, a stateless, lightweight, remote procedure call (RPC) protocol commonly used when interacting with blockchains.

## Protocol

| JSON-RPC 2.0 | HTTP | Publish–Subscribe | WebSocket |
|:------------:|:------------:|:------------:|:------------:|
| &#x2713; | &#x2713; | &#x2713; | &#x2713;|

| Protocol | Default Port |
|:-------:|:------:|
| HTTP | 48132 |
| WebSocket | 41420 |

!!! tip 
    On Vite, **a transaction is equivalent to an account block**. When we mention a transaction, it also refers to an account block, and vice versa.

## Type Conversion
* Bytes (`byte[]`) are converted to a base64 string.
* `hash` is a 32-byte hex string.
* `hex` and `base64` are strings in hex or base64 format.
* For numeric types such as `uint64`, `float`, and `bigint`, when they are suffixed with the `string` type, it means they should be passed as strings.
* `address` and `tokenId` are passed in as strings.

## Common Models

### `AccountInfo`
|  Name  | Type | Description |
|:------------:|:-----------:|:-----:|
| address | address | Account address |
| blockCount | uint64 string | The total number of transactions |
| balanceInfoMap | map<tokenId, [BalanceInfo](#balanceinfo)> | Account balance |

### `BalanceInfo`
|  Name  | Type | Description |
|:------------:|:-----------:|:-----:|
| tokenInfo | [TokenInfo](#tokeninfo) | Token information |
| balance | bigint string | Token balance |
| transactionCount | uint64 string | The total number of transactions for this token |

### `TokenInfo`
|  Name  | Type | Description |
|:------------:|:-----------:|:-----:|
| tokenName |  string | Token name |
| tokenSymbol | string | Token symbol |
| totalSupply | bigint string | Token total supply |
| decimals | uint8 | Decimal places |
| owner | address | Token owner |
| tokenId | tokenId | Token ID |
| isReIssuable | bool | `true` means the token can be re-issued |
| maxSupply | bigint string | The maximum supply of the token. 0 for non-reissuable tokens |
| isOwnerBurnOnly | bool | `true` means only the token owner can burn the tokens. Deprecated |
| index | uint16 | A number between 0-999 to distinguish tokens with the same symbol |

### `AccountBlock`
|  Name  | Type | Description |
|:------------:|:-----------:|:-----:|
| blockType | byte | Block type. 1 - request (create contract), 2 - request (send transaction), 3 - request (mint token), 4 - response (receive transaction), 5 - response (execute contract failed), 6 - request (refund), 7 - response (genesis). |
| height | uint64 string | Account block height |
| hash | hash | 32-byte block hash |
| previousHash | hash | The hash of the previous account block. For the first transaction in an account, the value is a string of 64 zeros |
| address| address | Account address |
| publicKey| base64 | Producer's public key |
| producer | address | Block producer address. For user accounts, the producer is the account address itself; for contract accounts, the address is the delegate node of the consensus group |
| fromAddress | address | The address of the account the transaction is sent from |
| toAddress| address | The address of the account the transaction is sent to |
| sendBlockHash | hash | The hash of the corresponding request transaction. For request transactions, the value is a string of 64 zeros |
| tokenId | tokenId | Token ID |
| amount | bigint string | Transfer amount |
| tokenInfo | [TokenInfo](#tokeninfo) | Transferred token information |
| fee | bigint string | Transaction fee |
| data | base64 | Additional block data |
| difficulty | bigint string | PoW difficulty |
| nonce | base64 | PoW nonce |
| signature | base64 | Block signature |
| quotaByStake | uint64 string | Quota consumed by the transaction, excluding quota obtained through PoW |
| totalQuota | uint64 string | Total quota consumed by the transaction |
| vmLogHash | hash | The hash of the event log generated in the smart contract response |
| triggeredSendBlockList | Array<[AccountBlock](#accountblock)> | A list of request transactions sent within this block. [RS blocks](../soliditypp/fundamentals/request-response-model.md#rs-receive-send-blocks) only. |
| confirmations | uint64 string | Confirmation number |
| firstSnapshotHash | hash | The hash of the snapshot block that snapshots the transaction |
| timestamp | int64 | The timestamp (in seconds) when the transaction is snapshotted |
| receiveBlockHeight | uint64 string | The height of the corresponding response transaction. Request block only |
| receiveBlockHash | hash | The hash of the corresponding response transaction. Request block only |

### `SnapshotBlock`
|  Name  | Type | Description |
|:------------:|:-----------:|:-----:|
| producer |  address | Block producer address |
| hash | hash | Snapshot block hash |
| previousHash | hash | The hash of the previous snapshot block |
| height | uint64 | Snapshot block height |
| publicKey | base64 | Producer's public key |
| signature | base64 | Block signature |
| timestamp | int64 | The timestamp (in seconds) when the block is produced |
| seed | uint64 | Random seed generated by the same producer in the previous round |
| nextSeedHash | hash | Hash of the random seed generated in the current round |
| snapshotData | SnapshotContent | Content of the snapshot |
| version | uint32 | Snapshot version |

### VmLog
|  Name  | Type | Description |
|:------------:|:-----------:|:-----:|
| topics | Array\<hash\> | Event topics |
| data | base64 | Event log data |

### Logs
|  Name  | Type | Description |
|:------------:|:-----------:|:-----:|
| vmlog | [VmLog](#vmlog) | Event log |
| accountBlockHash | hash | The hash of the account block that contains the log |
| accountBlockHeight | uint64 string | The height of the account block that contains the log |
| address | address | Contract address |

## Common RPC Errors

|  Description | Code | Example |
|:------------:|:-----------:|:-----:|
| Failed to parse JSON string | `-32700` | `{"code":-32700,"message":"missing request id"}` |
| Invalid JSON request	| `-32600` | `{"code":-32600,"message":"Unable to parse subscription request"}` |
| Method not found. Please check if the corresponding namespace has been added in `PublicModules` | `-32601` |`{"code":-32601,"message":"The method tx_sendRawTx does not exist/is not available"}`|
| Parameter type error | `-32602` |`{"code":-32602,"message":"missing value for required argument"}`|
| Service stopped | `-32000` |`{"code":-32000,"message":"server is shutting down"}`|
| Service temporarily unavailable. Please try again later | `-32001` |`{"code":-32001,"message":"server execute panic"}`|
| Callback error | `-32002` |`{"code":-32002,"message":"notifications not supported"}`|

## Common Errors

|  Description | Code | Example |
|:------------:|:-----------:|:-----:|
| Wrong password | `-34001` |`{"code":-34001,"message":"error decrypting key"}`|
| Insufficient balance | `-35001` |`{"code":-35001,"message":"insufficient balance for transfer"}`|
| Insufficient quota | `-35002` |`{"code":-35002,"message":"out of quota"}`|
| Invalid parameter | `-35004` |`{"code":-35004,"message":"invalid method param"}`|
| Too many PoW requests | `-35005` |`{"code":-35005,"message":"calc PoW twice referring to one snapshot block"}`|
| ABI not found | `-35006` |`{"code":-35006,"message":"abi: method not found"}`|
| Invalid response latency | `-35007` |`{"code":-35007,"message":"invalid confirm time"}`|
| Contract not found | `-35008` |`{"code":-35008,"message":"contract not exists"}`|
| Invalid quota multiplier | `-35010` |`{"code":-35010,"message":"invalid quota ratio"}`|
| PoW not available due to network congestion | `-35011` |`{"code":-35011,"message":"PoW service not supported"}`|
| Maximum quota for a single transaction reached | `-35012` |`{"code":-35012,"message":"quota limit for block reached"}`|
| Invalid block producing address | `-36001` |`{"code":-36001, "message":"general account's sendBlock.Height must be larger than 1"}`|
| Hash verification failure | `-36002` | `{"code":-36002,"message":"verify hash failed"}` |
| Signature verification failure | `-36003` | `{"code":-36003,"message":"verify signature failed"}` |
| Invalid PoW nonce | `-36004` | `{"code":-36004,"message":"check pow nonce failed"}` |
| Hash verification failure for the previous block | `-36005` | `{"code":-36005,"message":"verify prevBlock failed, incorrect use of prevHash or fork happened"}` |
| Waiting for block | `-36006` | `{"code":-36006,"message":"verify referred block failed, pending for them"}` |
