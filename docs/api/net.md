---
order: 5
title: Net
---

# Net API

!!! tip
    To enable the Net RPC API on a node, add `"net"` to the `PublicModules` section in `node_config.json`.

Definitions:
* **Node ID**: A 32-byte Ed25519 public key derived from the 64-byte private key stored in `~/.gvite/maindata/net/peerKey` or specified as `PeerKey` in `node_config.json`.
* **Node Name**: A human-readable name specified as `Identity` in `node_config.json`.
* **Node Address**: The IP address and port of the node.
* **Network ID**: Configured as `NetID` in `node_config.json`. `1` represents the mainnet.
* **Block Propagation Delay**: The time difference, in milliseconds, between the broadcast of a snapshot block and its timestamp.
* **Reliable Node**: A node is considered reliable if its height does not exceed the maximum height in the `WhiteBlockList` by more than 86400 and all snapshot blocks in the list are validated by the node. If `BlackBlockHashList` is configured and a node provides a block in the blacklist, it is deemed unreliable. By default, all nodes are considered reliable.
* **Sync Start Height**: The starting height of the current sync cycle, calculated as the node's current height rounded down to the nearest 100 plus 1. If the snapshot block at this height cannot be retrieved, the synchronizer will attempt up to 100 blocks backward or start from the node's irreversible height. For new nodes, this value is `0`.
* **Sync End Height**: The ending height of the current sync cycle, determined as the median height of all connected nodes. For new nodes, this value is `0`.
* **Irreversible Height**: The height at which more than two-thirds of SBPs have produced blocks in a [round](../vite-basics/consensus/snapshot-block-producer.md). This height is considered irreversible.
* **Block Segment**: A continuous range of snapshot blocks represented by a start and end block.

!!! note
    For fully synced nodes (state = 2), the sync start and end heights remain unchanged.

## `net_syncInfo`
Retrieve the sync status of the node.

- **Parameters**: None

- **Returns**: `SyncInfo`
    - `from`: `string` The sync start height.
    - `to`: `string` The sync end height.
    - `current`: `string` The current height of the node.
    - `state`: `uint` The sync state: 0 - Not started, 1 - Syncing, 2 - Completed, 3 - Error, 4 - Canceled.
    - `status`: `string` A description of the sync state.

- **Example**:

!!! example
    === "Request"
        ```json
        {
            "jsonrpc": "2.0",
            "id": 2,
            "method": "net_syncInfo",
            "params": null
        }
        ```

    === "Response"
        ```json
        {
            "jsonrpc": "2.0",
            "id": 2,
            "result": {
                "from": "100917901",
                "to": "100918103",
                "current": "100917954",
                "state": 1,
                "status": "Syncing"
            }
        }
        ```

## `net_syncDetail`
Retrieve the detailed sync status of the node.

- **Parameters**: None

- **Returns**: `SyncDetail`
    - `from`: `string` The sync start height.
    - `to`: `string` The sync end height.
    - `current`: `string` The current height of the node.
    - `state`: `string` The sync state. This field returns the same value as `status`.
    - `status`: `string` A description of the sync state.
    - `tasks`: `Array<string>` The current download tasks. Only nodes in the syncing state have download tasks.
    - `connections`: `Array<SyncConnectionStatus>`
        - `address`: `string` The address of the connected node, composed of the first 16 bytes of the node ID + "@" + the node's IP address and port.
        - `speed`: `string` The download speed from the node.
        - `task`: `string` The current download task.
    - `chunks`: `Array<SnapshotRange>` Verified snapshot block segments waiting to be inserted into the local ledger.
        - `height`: `uint64` The height of the snapshot block.
        - `hash`: `hash` The hash of the snapshot block.
    - `caches`: `Array<Segment>` Unverified snapshot block segments stored in the cache.
        - `From`: `uint64` The starting height of the snapshot block segment.
        - `To`: `uint64` The ending height of the snapshot block segment.
        - `Hash`: `hash` The hash of the block segment.
        - `PreHash`: `hash` The hash of the previous block segment.
        - `Points`: `Array<HashHeight>` The hash height points contained in the block segment.
            - `height`: `uint64` The height of the snapshot block.
            - `hash`: `hash` The hash of the snapshot block.

- **Example**:

!!! example
    === "Request"
        ```json
        {
            "jsonrpc": "2.0",
            "id": 2,
            "method": "net_syncDetail",
            "params": null
        }
        ```

    === "Response"
        ```json
        {
            "jsonrpc": "2.0",
            "id": 4,
            "result": {
                "from": 692001,
                "to": 727000,
                "current": 692084,
                "state": "Syncing",
                "status": "Syncing",
                "tasks": [
                    "692001-693000 Completed",
                    "693001-694000 Pending"
                ],
                "connections": [
                    {
                        "address": "24a160122317e6e4940ef2a91242b07f@118.25.49.80:8484",
                        "speed": "0.00 Byte/s",
                        "task": ""
                    },
                    {
                        "address": "04508fbe0512c01a48c8a450425547de@118.24.112.185:8484",
                        "speed": "0.00 Byte/s",
                        "task": ""
                    }
                ],
                "chunks": [
                    [
                        {
                            "height": 692000,
                            "hash": "74add6f7f61c33dd741276d97d8ade4456c47485da78752587aef8a209fe7e88"
                        },
                        {
                            "height": 693000,
                            "hash": "b6af1c6fb3b502268b17928b1d91206e71003f614c134f8865bf6886d88d8e30"
                        }
                    ]
                ],
                "caches": [
                    {
                        "From": 691001,
                        "To": 693000,
                        "Hash": "b6af1c6fb3b502268b17928b1d91206e71003f614c134f8865bf6886d88d8e30",
                        "PrevHash": "028e2730c8fad34b53b8d8f5a41881024fa8b87a97a9cfc61f0e0c83984336a0"
                    },
                    {
                        "From": 694001,
                        "To": 696000,
                        "Hash": "e14662c3e9a9751b28822f2640be79cf13bd778c6b3158c8f6ff584fbf89fa24",
                        "PrevHash": "c6cd65717345f017309ee961a6bcda9ba021e0ed5913d8111471ff09fc95590c"
                    },
                    {
                        "From": 698001,
                        "To": 699000,
                        "Hash": "4e067e54b9e966b264053c271c7d976065b8a0796d6995b9dda45e11339e0b57",
                        "PrevHash": "26a6bdcfd3d9f58951eb76ebd4784160e98098564cc31e236618f045cb90f365"
                    }
                ]
            }
        }
        ```

## `net_nodeInfo`
Retrieve detailed information about the node and its connected peers.

- **Parameters**: None

- **Returns**: `NodeInfo`
    - `id`: `string` The node ID.
    - `name`: `string` The node name.
    - `netId`: `int` The network ID.
    - `version`: `int` The node version. All nodes return `0`.
    - `address`: `string` The node address. Not implemented. Currently returns an empty string.
    - `peerCount`: `int` The number of connected peers.
    - `peers`: `Array<PeerInfo>` The connected peers.
        - `id`: `string` The peer ID.
        - `name`: `string` The peer name.
        - `version`: `int` The peer version. All peers return `0`.
        - `height`: `int` The current height of the peer.
        - `address`: `string` The IP address and port of the peer.
        - `flag`: `byte` The connection type. `0` - Inbound, `1` - Outbound.
        - `superior`: `bool` `true` if the peer is an SBP.
        - `reliable`: `bool` `true` if the peer is reliable.
        - `createAt`: `string` The time the peer connected.
        - `readQueue`: `int` The current length of the peer's message read queue.
        - `writeQueue`: `int` The current length of the peer's message write queue.
        - `peers`: `Array<string>` The list of peer IDs currently connected to the peer.
    - `height`: `uint64` The node height.
    - `nodes`: `int` The size of the node table. Not implemented. Currently returns `0`.
    - `latency`: `Array<int>` An array of four integers representing the current block broadcast delay, the average block broadcast delay over the past hour, the average block broadcast delay over the past 12 hours, and the average block broadcast delay over the past 24 hours, respectively. The unit is milliseconds.
    - `broadCheckFailedRatio`: `float32` The ratio of accounts that received more than 100 confirmations within 16 seconds.
    - `server`: `Array<SyncConnectionStatus>` Not implemented. Currently returns an empty array.

- **Example**:

!!! example
    === "Request"
        ```json
        {
            "jsonrpc": "2.0",
            "id": 3,
            "method": "net_nodeInfo",
            "params": null
        }
        ```

    === "Response"
        ```json
        {
            "jsonrpc": "2.0",
            "id": 0,
            "result": {
                "id": "91590a7475ec17834eae6119afe750f11c4e103e2fb78d1986bdd86a8980de43",
                "name": "ESP-FullNode.001",
                "netId": 1,
                "version": 0,
                "address": "",
                "peerCount": 3,
                "peers": [
                    {
                        "id": "8d8b0b17411b85e943043759ddca4e641a8cc9f6ae47d4b3f767635358c42e76",
                        "name": "MIK33",
                        "version": 0,
                        "height": 100933254,
                        "address": "173.212.248.239:56996",
                        "flag": 0,
                        "superior": false,
                        "reliable": true,
                        "createAt": "2022-08-19 16:07:16",
                        "readQueue": 0,
                        "writeQueue": 0,
                        "peers": [
                            "836c6ccf6582a9c8d2bc96aa7d2aed8e8e693e4050af0b4f01ad7375d9739aac",
                            "918a47b9b0958412659723a3459c50e0197dc4239eafa57e540cacd2ab418f96",
                            "8e1521741c92b2b9c502996d3c7424c6e500e52ed1c065ffa0378b2835a12dc1",
                            "aa0e28a73212030ce62cf2c2090134ca90fb5e5a37e98513266551462e0dcf25",
                            "bf14738360ff11517769b3a6f09fc41f81be77f8d8e4494cba9a7a5ddd845929",
                            "9e41b1a3ff686074515db5fdf7de9515d04adc110b4ceefaa84409dfa5bc759e",
                            "91590a7475ec17834eae6119afe750f11c4e103e2fb78d1986bdd86a8980de43",
                            "e3245a342927df824aa72ec392a74ea5312f165700552057c9f40a9ff22f0589",
                            "9a85aa364ae14c6b9c64180ce1fb97d0debd1b433f5aa734f42d73feeba52b6c"
                        ]
                    },
                    {
                        "id": "9402381bbdc2cbc3280e38dbcbb76cc293f802789e6c4fcb0f339f540ba47548",
                        "name": "concat0",
                        "version": 0,
                        "height": 100933253,
                        "address": "144.91.84.68:39782",
                        "flag": 0,
                        "superior": false,
                        "reliable": true,
                        "createAt": "2022-03-01 14:05:47",
                        "readQueue": 0,
                        "writeQueue": 0,
                        "peers": [
                            "a5df8cab8c6996322553c360f490adca265bdbaccf964425f8137283d7f89272",
                            "db9ec3aa4c8637c2dadb8f2898e84d91ab29795ae56b2b2b05dd5a8b39d977df",
                            "9e067c62c8bf64322a039165eb2431a3b5c6405faf5dfe9133d147a6752eac08",
                            "e2c87c9eb5966f1d7de679bc9d72abdd19557c6ca235b85de38565a4e7cca7e7",
                            "a15e0067d90ff678052ebe55fbbf89468b1d80e8ffc1b76cd0d6e0285117f70d",
                            "9c560323d72b643742f120f498791cc7a0d107e55e632d3dc8244f3feba95833",
                            "89d433317c349235a429966a47b17039708429b3ab06283e6ad43af1312e0ab9",
                            "91590a7475ec17834eae6119afe750f11c4e103e2fb78d1986bdd86a8980de43",
                            "d13da3047b319c7da19f96200473a8cd08e43641081d37a93691ff38c13587e2",
                            "9ffb393ba09f56db9aea74300562360911b64fddfdc463b262dbc37ecad6fb86"
                        ]
                    },
                    {
                        "id": "9508ce5c35989d6df24757f5c14cfe775449fe03fae69da4a96e001aacd4a426",
                        "name": "nimu",
                        "version": 0,
                        "height": 100933253,
                        "address": "207.180.250.64:51858",
                        "flag": 0,
                        "superior": false,
                        "reliable": true,
                        "createAt": "2022-08-19 06:46:23",
                        "readQueue": 0,
                        "writeQueue": 0,
                        "peers": [
                            "91590a7475ec17834eae6119afe750f11c4e103e2fb78d1986bdd86a8980de43",
                            "8e20a38270d2e19c186d37f113f075bf6cd6b6949ffa9790b4c0281e215de1b2",
                            "99f746721c7aeacfb3587859e0cdfae1049b7b0875400e58c7d476fefa7155c8",
                            "9dc1ba02d3592de3f1506a09c4c416b7e6cb4ffae5fc8654432b3efcedf799f7",
                            "08e69aca38eb71c155234a93a32a7a642f4bb2efebd9837227dcf57892ff1d26",
                            "0f6c334025afa0db6583f1d86b314ed0778031b9e42a5f6bf834ef4e102feb70",
                            "96feeb78b2bcd4fd55bc47b4fb49f039e12e3a68a7acac78b909dbace39f0954",
                            "97266099862560c6cde73e767add04e391e37fc86fe52fdd9372b01ac9e4af38",
                            "805dcb1cdc2514b4fdecfd9cbfd2291e2bfb17a75fcad46153703db08fdbd341",
                            "97275bef2b7dcaf023c75fa5b8fea4fb9550d6b74b7a18faa9b4e12caf33df49"
                        ]
                    }
                ],
                "height": 100933262,
                "nodes": 0,
                "latency": [
                    23,
                    77,
                    74,
                    72
                ],
                "broadCheckFailedRatio": 0.027027028,
                "server": {
                    "connections": []
                }
            }
        }
        ```

## `net_nodes`
Retrieve all live nodes in the node table.

> Note: Live nodes are not necessarily connected nodes. Live nodes are those stored in the node table and reachable via ping.

- **Parameters**: None

- **Returns**:
    - `Count`: `int` The number of live nodes.
    - `Nodes`: `Array<Node>`
        - `id`: `string` The node ID.
        - `address`: `string` The IP address and port of the node.
        - `net`: `int` The network ID.
        - `ext`: `Array<byte>` Additional information. Defaults to null.

- **Example**:

!!! example
    === "Request"
        ```json
        {
            "jsonrpc": "2.0",
            "id": 0,
            "method": "net_nodes",
            "params": null
        }
        ```

    === "Response"
        ```json
        {
            "jsonrpc": "2.0",
            "id": 0,
            "result": {
                "Count": 13,
                "Nodes": [
                    {
                        "id": "95d52a0b506cd29a8153b4777a9c1d3852a15ae604daeb3376260201661c0259",
                        "address": "173.249.53.109:8483",
                        "net": 1,
                        "ext": null
                    },
                    {
                        "id": "c537033862e4a4178260536bfebfc5898d94dcde0a2c7c894df341c6871974dd",
                        "address": "144.91.86.89:8483",
                        "net": 1,
                        "ext": null
                    },
                    {
                        "id": "e9dcad1603c29de4fb636707d60c76c9f1ff28eb4040d5602576aab78c94db69",
                        "address": "161.35.129.182:8483",
                        "net": 1,
                        "ext": "3MLy0o+z4lmDN4NrF8yK65PFtM9A683ElMU7Y55bXY2w4oNw9O3aGQQ5r+8Bf8E91lFATMrT1DrD4spEmHgRs/GoSCdKX16t8d3TU9oBVgrQW2Hk6QQ4gh2dHBLzb9QC"
                    },
                    {
                        "id": "f738db16fb0b8b15efff3e367c05d49d3993b67b2cd3b8ddd96a6b01cf6a7af7",
                        "address": "163.47.117.157:8483",
                        "net": 1,
                        "ext": null
                    },
                    {
                        "id": "8ff65551f0dbe604f8cf9c18322cd85ddf5bfc0362e1df3e426d3032fd843b94",
                        "address": "173.249.45.46:8483",
                        "net": 1,
                        "ext": null
                    },
                    {
                        "id": "874c9e4f5b34d0c26b7e6ad27bec231948c11157f1dc2977dffed88361280d31",
                        "address": "95.216.50.183:8483",
                        "net": 1,
                        "ext": null
                    },
                    {
                        "id": "9fb855389ddb6fb9b3a3e6ec4f3121e2216354a12203581105889323518ba812",
                        "address": "161.97.153.45:8483",
                        "net": 1,
                        "ext": null
                    },
                    {
                        "id": "993d43801d63433657cb35d4f5c75bdd92a62f646e19ef961a193a558c4ab007",
                        "address": "173.249.5.87:8483",
                        "net": 1,
                        "ext": null
                    },
                    {
                        "id": "9c724d1179c5b6e09733651ff83a61227320bee604d6cd220d67799556b8f19f",
                        "address": "5.189.150.247:8483",
                        "net": 1,
                        "ext": null
                    },
                    {
                        "id": "9d1bfbbdd92e8c520703a4f76da9ce8cc5954dc584eb21663606cfbc78d381bd",
                        "address": "3.143.25.47:8483",
                        "net": 1,
                        "ext": null
                    },
                    {
                        "id": "9e067c62c8bf64322a039165eb2431a3b5c6405faf5dfe9133d147a6752eac08",
                        "address": "161.97.118.202:8483",
                        "net": 1,
                        "ext": null
                    },
                    {
                        "id": "9d0f2f7545c0f997cc752d72c2a1f37bb294bd9293e2ff489c4a31fe646cfaff",
                        "address": "62.171.182.175:8483",
                        "net": 1,
                        "ext": null
                    },
                    {
                        "id": "99c52026f5469c95c85796c4495c5e804ec57fbfc306f09a512d83fdfdb9ab93",
                        "address": "135.181.51.68:8483",
                        "net": 1,
                        "ext": null
                    }
                ]
            }
        }
        ```

## `net_peerCount`
Retrieve the number of connected peers.

- **Parameters**: None

- **Returns**:
    - `int` The number of connected peers.

- **Example**:

!!! example
    === "Request"
        ```json
        {
            "jsonrpc": "2.0",
            "id": 0,
            "method": "net_peerCount",
            "params": null
        }
        ```

    === "Response"
        ```json
        {
            "jsonrpc": "2.0",
            "id": 0,
            "result": 8
        }
        ```
