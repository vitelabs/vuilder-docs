---
order: 2
title: Ledger
---

# Ledger API

!!! tip
    To enable the Ledger RPC API on a node, add `"ledger"` to the `PublicModules` section in `node_config.json`.

## `ledger_getAccountBlocks`
Retrieve account blocks based on address, Token ID, and/or account block hash.

- **Parameters**:
    * `address`: `address` The account address.
    * `startBlockHash`: `hash` Optional. The starting block hash. Results are sorted in descending order by height. Use `null` to start from the latest block.
    * `tokenId`: `tokenId` Optional. The Token ID for filtering transactions. Use `null` to return all account blocks.
    * `count`: `uint64` The number of blocks to retrieve, with a maximum value of 1000.

- **Returns**:
    * `Array<AccountBlock>` See [AccountBlock](README.md#accountblock) for details.

!!! example
    === "Request"
        ```json
        {
            "jsonrpc": "2.0",
            "id": 17,
            "method": "ledger_getAccountBlocks",
            "params": [
                "vite_0b573f9d1fca7d830fc0d1552e3ff7b7f44455e38c8218fd10",
                null,
                null,
                3
            ]
        }
        ```

    === "Response"
        ```json
        {
            "jsonrpc": "2.0",
            "id": 17,
            "result": [
                {
                    "blockType": 4,
                    "height": "21846",
                    "hash": "7c534db9946950197dbce8654c0538278ec38e2b1bb3e229c84df26cf936a739",
                    "previousHash": "5a78365f4f7e9c29d57c8f087c9691bfff63a4889cde5d03a89cb24d34abbdf3",
                    "address": "vite_0b573f9d1fca7d830fc0d1552e3ff7b7f44455e38c8218fd10",
                    "publicKey": "dTwfba0WWN2amkGLuMaanCNiGgJsT0ArM//zaDO3Mro=",
                    "producer": "vite_8370865362e739fb71615b8b33f9e394d85743093bdfaede6c",
                    "fromAddress": "vite_ea6a2f80f3469a001586cca12ac1676bb24484153c419d3db9",
                    "toAddress": "vite_0b573f9d1fca7d830fc0d1552e3ff7b7f44455e38c8218fd10",
                    "sendBlockHash": "37702663fbad5d405d78b9c53bd3206f4040ac17843852fef0d125973030318c",
                    "tokenId": "tti_5649544520544f4b454e6e40",
                    "amount": "0",
                    "fee": "0",
                    "data": "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
                    "difficulty": null,
                    "nonce": null,
                    "signature": "FLPFkplSkoq31iJpYeNho2MyZR1BKmOD3V54U9XV3PTRWnjm5e7sOnCNWW8EgCMPbK+WYImxPueYfnZXEcnDAw==",
                    "quotaByStake": "33184",
                    "totalQuota": "33184",
                    "vmLogHash": null,
                    "triggeredSendBlockList": [
                        {
                            "blockType": 2,
                            "height": "0",
                            "hash": "dda7b2c0d2d6c1c1ca3c9bdb061dd4a14ee892d29ab0cdd7fc552c1e57d6f0d2",
                            "previousHash": "0000000000000000000000000000000000000000000000000000000000000000",
                            "address": "vite_0b573f9d1fca7d830fc0d1552e3ff7b7f44455e38c8218fd10",
                            "publicKey": null,
                            "producer": "vite_3345524abf6bbe1809449224b5972c41790b6cf2e22fcb5caf",
                            "fromAddress": "vite_0b573f9d1fca7d830fc0d1552e3ff7b7f44455e38c8218fd10",
                            "toAddress": "vite_ea6a2f80f3469a001586cca12ac1676bb24484153c419d3db9",
                            "sendBlockHash": "0000000000000000000000000000000000000000000000000000000000000000",
                            "tokenId": "tti_5649544520544f4b454e6e40",
                            "amount": "61984000000000000000000",
                            "fee": "0",
                            "data": null,
                            "difficulty": null,
                            "nonce": null,
                            "signature": null,
                            "quotaByStake": "0",
                            "totalQuota": "0",
                            "vmLogHash": null,
                            "triggeredSendBlockList": null,
                            "tokenInfo": {
                                "tokenName": "VITE",
                                "tokenSymbol": "VITE",
                                "totalSupply": "999344176075854028300627070",
                                "decimals": 18,
                                "owner": "vite_0000000000000000000000000000000000000004d28108e76b",
                                "tokenId": "tti_5649544520544f4b454e6e40",
                                "maxSupply": "115792089237316195423570985008687907853269984665640564039457584007913129639935",
                                "ownerBurnOnly": false,
                                "isReIssuable": true,
                                "index": 0,
                                "isOwnerBurnOnly": false
                            },
                            "confirmations": "3605345",
                            "firstSnapshotHash": "33d527c8f6ba7fdef69a6bf6171b53ae000460e08486bb25fb88d44f4c789147",
                            "receiveBlockHeight": "38",
                            "receiveBlockHash": "7a6e4ab1420c3a1d319431ba77757f780578622c938afd1eb7bc8bdc4fe947fc",
                            "timestamp": 1562208615
                        }
                    ],
                    "tokenInfo": {
                        "tokenName": "VITE",
                        "tokenSymbol": "VITE",
                        "totalSupply": "999344176075854028300627070",
                        "decimals": 18,
                        "owner": "vite_0000000000000000000000000000000000000004d28108e76b",
                        "tokenId": "tti_5649544520544f4b454e6e40",
                        "maxSupply": "115792089237316195423570985008687907853269984665640564039457584007913129639935",
                        "ownerBurnOnly": false,
                        "isReIssuable": true,
                        "index": 0,
                        "isOwnerBurnOnly": false
                    },
                    "confirmations": "3605345",
                    "firstSnapshotHash": "33d527c8f6ba7fdef69a6bf6171b53ae000460e08486bb25fb88d44f4c789147",
                    "receiveBlockHeight": null,
                    "receiveBlockHash": null,
                    "timestamp": 1562208615
                },
                {
                    "blockType": 4,
                    "height": "21845",
                    "hash": "5a78365f4f7e9c29d57c8f087c9691bfff63a4889cde5d03a89cb24d34abbdf3",
                    "previousHash": "4d2c1bc90e235b5a5fdec69bda0ebe6494f0c01b2af53accaa1beff00b9fa976",
                    "address": "vite_0b573f9d1fca7d830fc0d1552e3ff7b7f44455e38c8218fd10",
                    "publicKey": "1cgxEjT1L3x+mPzKsBnV4DSPiU+RTmY7akbrTCxcArE=",
                    "producer": "vite_165a295e214421ef1276e79990533953e901291d29b2d4851f",
                    "fromAddress": "vite_f74d18fc6431cb9d813c62a47a9063c4b9488219dc22c2736d",
                    "toAddress": "vite_0b573f9d1fca7d830fc0d1552e3ff7b7f44455e38c8218fd10",
                    "sendBlockHash": "fc2c937d542fd5b02aeadb0acb3a2f015e1cc92b94873304ab8642f703e4c059",
                    "tokenId": "tti_5649544520544f4b454e6e40",
                    "amount": "16000000000000000000",
                    "fee": "0",
                    "data": "eo15oJWpGqoIm4hP9riEZRvcSXLUs8QKC7XBStD6yyAA",
                    "difficulty": null,
                    "nonce": null,
                    "signature": "XccA38Yxcgt1EZDdSNrgcZNC3YJ088HKNBdTt72noa1F+SbEBxmWnUjSKj5h/FlO/3SXrYnt0rU97L8JkY3lBA==",
                    "quotaByStake": "105710",
                    "totalQuota": "105710",
                    "vmLogHash": "56d05270b0d62a8dac3a01908177ed6e47899eced76bc9fa7716e808d6068705",
                    "triggeredSendBlockList": [
                        {
                            "blockType": 2,
                            "height": "0",
                            "hash": "6cb62e1576bfc6652251a89b540972aceaa678f51ef4b92156b5d1a387f8b178",
                            "previousHash": "0000000000000000000000000000000000000000000000000000000000000000",
                            "address": "vite_0b573f9d1fca7d830fc0d1552e3ff7b7f44455e38c8218fd10",
                            "publicKey": null,
                            "producer": "vite_3345524abf6bbe1809449224b5972c41790b6cf2e22fcb5caf",
                            "fromAddress": "vite_0b573f9d1fca7d830fc0d1552e3ff7b7f44455e38c8218fd10",
                            "toAddress": "vite_f74d18fc6431cb9d813c62a47a9063c4b9488219dc22c2736d",
                            "sendBlockHash": "0000000000000000000000000000000000000000000000000000000000000000",
                            "tokenId": "tti_5649544520544f4b454e6e40",
                            "amount": "30000000000000000000",
                            "fee": "0",
                            "data": null,
                            "difficulty": null,
                            "nonce": null,
                            "signature": null,
                            "quotaByStake": "0",
                            "totalQuota": "0",
                            "vmLogHash": null,
                            "triggeredSendBlockList": null,
                            "tokenInfo": {
                                "tokenName": "VITE",
                                "tokenSymbol": "VITE",
                                "totalSupply": "999344176075854028300627070",
                                "decimals": 18,
                                "owner": "vite_0000000000000000000000000000000000000004d28108e76b",
                                "tokenId": "tti_5649544520544f4b454e6e40",
                                "maxSupply": "115792089237316195423570985008687907853269984665640564039457584007913129639935",
                                "ownerBurnOnly": false,
                                "isReIssuable": true,
                                "index": 0,
                                "isOwnerBurnOnly": false
                            },
                            "confirmations": "3607047",
                            "firstSnapshotHash": "462da9711b54219036d26b6cf8533a510e75680089a2a1ec54201bf14bdce16c",
                            "receiveBlockHeight": "547",
                            "receiveBlockHash": "3536cd55cb61723bf29d1ac193d39e6f049c2475370a91b8a68a7750e5d57bf5",
                            "timestamp": 1562206877
                        }
                    ],
                    "tokenInfo": {
                        "tokenName": "VITE",
                        "tokenSymbol": "VITE",
                        "totalSupply": "999344176075854028300627070",
                        "decimals": 18,
                        "owner": "vite_0000000000000000000000000000000000000004d28108e76b",
                        "tokenId": "tti_5649544520544f4b454e6e40",
                        "maxSupply": "115792089237316195423570985008687907853269984665640564039457584007913129639935",
                        "ownerBurnOnly": false,
                        "isReIssuable": true,
                        "index": 0,
                        "isOwnerBurnOnly": false
                    },
                    "confirmations": "3607047",
                    "firstSnapshotHash": "462da9711b54219036d26b6cf8533a510e75680089a2a1ec54201bf14bdce16c",
                    "receiveBlockHeight": null,
                    "receiveBlockHash": null,
                    "timestamp": 1562206877
                },
                {
                    "blockType": 4,
                    "height": "21844",
                    "hash": "4d2c1bc90e235b5a5fdec69bda0ebe6494f0c01b2af53accaa1beff00b9fa976",
                    "previousHash": "b91ce0f015e7d89e87925762a8996326a979b27f7d2d7ed8d22c327937584ee4",
                    "address": "vite_0b573f9d1fca7d830fc0d1552e3ff7b7f44455e38c8218fd10",
                    "publicKey": "O4QZHbAsZQ4KHHzxEPuLdnVT+DiJomRrG6+zYSUSZRc=",
                    "producer": "vite_10513d54e0c38a304ad9e7902c82277328b4df76dd31871f37",
                    "fromAddress": "vite_f74d18fc6431cb9d813c62a47a9063c4b9488219dc22c2736d",
                    "toAddress": "vite_0b573f9d1fca7d830fc0d1552e3ff7b7f44455e38c8218fd10",
                    "sendBlockHash": "080b41f1cb5194df8d5b8903a6ed987f36291d172f93a8c67c75a87a3769308d",
                    "tokenId": "tti_5649544520544f4b454e6e40",
                    "amount": "16000000000000000000",
                    "fee": "0",
                    "data": "wao4N2P26LmbJEmmYuINTMJoQ1MX0+EWEXSTK5CHCh4A",
                    "difficulty": null,
                    "nonce": null,
                    "signature": "RUo6punEG3XzqO/2bL3vOlOMXM9xpvUxToEBgqtP7GLYYr/9ZxrK5GamaaUHA/OyXq8jwrrX5hf1z/F8nT1BCw==",
                    "quotaByStake": "116522",
                    "totalQuota": "116522",
                    "vmLogHash": "e449ac3a53689813ef73d149f8ebb83f3fdc77812d21aaf399575dca353de895",
                    "triggeredSendBlockList": [
                        {
                            "blockType": 2,
                            "height": "0",
                            "hash": "1a92be3b93725056f9df1906e1fcd1fc123f704d879b020f836daa41eacc42dd",
                            "previousHash": "0000000000000000000000000000000000000000000000000000000000000000",
                            "address": "vite_0b573f9d1fca7d830fc0d1552e3ff7b7f44455e38c8218fd10",
                            "publicKey": null,
                            "producer": "vite_3345524abf6bbe1809449224b5972c41790b6cf2e22fcb5caf",
                            "fromAddress": "vite_0b573f9d1fca7d830fc0d1552e3ff7b7f44455e38c8218fd10",
                            "toAddress": "vite_f74d18fc6431cb9d813c62a47a9063c4b9488219dc22c2736d",
                            "sendBlockHash": "0000000000000000000000000000000000000000000000000000000000000000",
                            "tokenId": "tti_5649544520544f4b454e6e40",
                            "amount": "4000000000000000000",
                            "fee": "0",
                            "data": null,
                            "difficulty": null,
                            "nonce": null,
                            "signature": null,
                            "quotaByStake": "0",
                            "totalQuota": "0",
                            "vmLogHash": null,
                            "triggeredSendBlockList": null,
                            "tokenInfo": {
                                "tokenName": "VITE",
                                "tokenSymbol": "VITE",
                                "totalSupply": "999344176075854028300627070",
                                "decimals": 18,
                                "owner": "vite_0000000000000000000000000000000000000004d28108e76b",
                                "tokenId": "tti_5649544520544f4b454e6e40",
                                "maxSupply": "115792089237316195423570985008687907853269984665640564039457584007913129639935",
                                "ownerBurnOnly": false,
                                "isReIssuable": true,
                                "index": 0,
                                "isOwnerBurnOnly": false
                            },
                            "confirmations": "3607067",
                            "firstSnapshotHash": "dd23c7d1c866311a41977fc008830558ad34d9bcd790ce4dad6367ee52dfedc6",
                            "receiveBlockHeight": "545",
                            "receiveBlockHash": "6172267c757d6234c833aaa05f393ba4a733e584a83ac8c43acf2c6c2da8510f",
                            "timestamp": 1562206856
                        }
                    ],
                    "tokenInfo": {
                        "tokenName": "VITE",
                        "tokenSymbol": "VITE",
                        "totalSupply": "999344176075854028300627070",
                        "decimals": 18,
                        "owner": "vite_0000000000000000000000000000000000000004d28108e76b",
                        "tokenId": "tti_5649544520544f4b454e6e40",
                        "maxSupply": "115792089237316195423570985008687907853269984665640564039457584007913129639935",
                        "ownerBurnOnly": false,
                        "isReIssuable": true,
                        "index": 0,
                        "isOwnerBurnOnly": false
                    },
                    "confirmations": "3607067",
                    "firstSnapshotHash": "dd23c7d1c866311a41977fc008830558ad34d9bcd790ce4dad6367ee52dfedc6",
                    "receiveBlockHeight": null,
                    "receiveBlockHash": null,
                    "timestamp": 1562206856
                }
            ]
        }
        ```

## `ledger_getAccountBlockByHash`
Retrieve an account block by its hash.

- **Parameters**:
    * `blockHash`: `hash` The hash of the account block.

- **Returns**:
    * [`AccountBlock`](README.md#accountblock)

!!! example
    === "Request"
        ```json
        {
            "jsonrpc": "2.0",
            "id": 17,
            "method": "ledger_getAccountBlockByHash",
            "params": [
                "7c534db9946950197dbce8654c0538278ec38e2b1bb3e229c84df26cf936a739"
            ]
        }
        ```

    === "Response"
        ```json
        {
            "jsonrpc": "2.0",
            "id": 17,
            "result": {
                "blockType": 4,
                "height": "21846",
                "hash": "7c534db9946950197dbce8654c0538278ec38e2b1bb3e229c84df26cf936a739",
                "previousHash": "5a78365f4f7e9c29d57c8f087c9691bfff63a4889cde5d03a89cb24d34abbdf3",
                "address": "vite_0b573f9d1fca7d830fc0d1552e3ff7b7f44455e38c8218fd10",
                "publicKey": "dTwfba0WWN2amkGLuMaanCNiGgJsT0ArM//zaDO3Mro=",
                "producer": "vite_8370865362e739fb71615b8b33f9e394d85743093bdfaede6c",
                "fromAddress": "vite_ea6a2f80f3469a001586cca12ac1676bb24484153c419d3db9",
                "toAddress": "vite_0b573f9d1fca7d830fc0d1552e3ff7b7f44455e38c8218fd10",
                "sendBlockHash": "37702663fbad5d405d78b9c53bd3206f4040ac17843852fef0d125973030318c",
                "tokenId": "tti_5649544520544f4b454e6e40",
                "amount": "0",
                "fee": "0",
                "data": "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
                "difficulty": null,
                "nonce": null,
                "signature": "FLPFkplSkoq31iJpYeNho2MyZR1BKmOD3V54U9XV3PTRWnjm5e7sOnCNWW8EgCMPbK+WYImxPueYfnZXEcnDAw==",
                "quotaByStake": "33184",
                "totalQuota": "33184",
                "vmLogHash": null,
                "triggeredSendBlockList": [
                    {
                        "blockType": 2,
                        "height": "0",
                        "hash": "dda7b2c0d2d6c1c1ca3c9bdb061dd4a14ee892d29ab0cdd7fc552c1e57d6f0d2",
                        "previousHash": "0000000000000000000000000000000000000000000000000000000000000000",
                        "address": "vite_0b573f9d1fca7d830fc0d1552e3ff7b7f44455e38c8218fd10",
                        "publicKey": null,
                        "producer": "vite_3345524abf6bbe1809449224b5972c41790b6cf2e22fcb5caf",
                        "fromAddress": "vite_0b573f9d1fca7d830fc0d1552e3ff7b7f44455e38c8218fd10",
                        "toAddress": "vite_ea6a2f80f3469a001586cca12ac1676bb24484153c419d3db9",
                        "sendBlockHash": "0000000000000000000000000000000000000000000000000000000000000000",
                        "tokenId": "tti_5649544520544f4b454e6e40",
                        "amount": "61984000000000000000000",
                        "fee": "0",
                        "data": null,
                        "difficulty": null,
                        "nonce": null,
                        "signature": null,
                        "quotaByStake": "0",
                        "totalQuota": "0",
                        "vmLogHash": null,
                        "triggeredSendBlockList": null,
                        "tokenInfo": {
                            "tokenName": "VITE",
                            "tokenSymbol": "VITE",
                            "totalSupply": "999369292029736282857580488",
                            "decimals": 18,
                            "owner": "vite_0000000000000000000000000000000000000004d28108e76b",
                            "tokenId": "tti_5649544520544f4b454e6e40",
                            "maxSupply": "115792089237316195423570985008687907853269984665640564039457584007913129639935",
                            "ownerBurnOnly": false,
                            "isReIssuable": true,
                            "index": 0,
                            "isOwnerBurnOnly": false
                        },
                        "confirmations": "3622745",
                        "firstSnapshotHash": "33d527c8f6ba7fdef69a6bf6171b53ae000460e08486bb25fb88d44f4c789147",
                        "receiveBlockHeight": "38",
                        "receiveBlockHash": "7a6e4ab1420c3a1d319431ba77757f780578622c938afd1eb7bc8bdc4fe947fc",
                        "timestamp": 1562208615
                    }
                ],
                "tokenInfo": {
                    "tokenName": "VITE",
                    "tokenSymbol": "VITE",
                    "totalSupply": "999369292029736282857580488",
                    "decimals": 18,
                    "owner": "vite_0000000000000000000000000000000000000004d28108e76b",
                    "tokenId": "tti_5649544520544f4b454e6e40",
                    "maxSupply": "115792089237316195423570985008687907853269984665640564039457584007913129639935",
                    "ownerBurnOnly": false,
                    "isReIssuable": true,
                    "index": 0,
                    "isOwnerBurnOnly": false
                },
                "confirmations": "3622745",
                "firstSnapshotHash": "33d527c8f6ba7fdef69a6bf6171b53ae000460e08486bb25fb88d44f4c789147",
                "receiveBlockHeight": null,
                "receiveBlockHash": null,
                "timestamp": 1562208615
            }
        }
        ```

## `ledger_getAccountBlockByHeight`
Retrieve an account block by its height.

> Note: The height is the account block height, not the snapshot block height.

- **Parameters**:
    * `address`: `address` The account address.
    * `height`: `uint64 string` The account block height.

- **Returns**:
    * [`AccountBlock`](README.md#accountblock)

!!! example
    === "Request"
        ```json
        {
            "jsonrpc": "2.0",
            "id": 17,
            "method": "ledger_getAccountBlockByHeight",
            "params": [
                "vite_0b573f9d1fca7d830fc0d1552e3ff7b7f44455e38c8218fd10",
                21846
            ]
        }
        ```

    === "Response"
        ```json
        {
            "jsonrpc": "2.0",
            "id": 17,
            "result": {
                "blockType": 4,
                "height": "21846",
                "hash": "7c534db9946950197dbce8654c0538278ec38e2b1bb3e229c84df26cf936a739",
                "previousHash": "5a78365f4f7e9c29d57c8f087c9691bfff63a4889cde5d03a89cb24d34abbdf3",
                "address": "vite_0b573f9d1fca7d830fc0d1552e3ff7b7f44455e38c8218fd10",
                "publicKey": "dTwfba0WWN2amkGLuMaanCNiGgJsT0ArM//zaDO3Mro=",
                "producer": "vite_8370865362e739fb71615b8b33f9e394d85743093bdfaede6c",
                "fromAddress": "vite_ea6a2f80f3469a001586cca12ac1676bb24484153c419d3db9",
                "toAddress": "vite_0b573f9d1fca7d830fc0d1552e3ff7b7f44455e38c8218fd10",
                "sendBlockHash": "37702663fbad5d405d78b9c53bd3206f4040ac17843852fef0d125973030318c",
                "tokenId": "tti_5649544520544f4b454e6e40",
                "amount": "0",
                "fee": "0",
                "data": "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
                "difficulty": null,
                "nonce": null,
                "signature": "FLPFkplSkoq31iJpYeNho2MyZR1BKmOD3V54U9XV3PTRWnjm5e7sOnCNWW8EgCMPbK+WYImxPueYfnZXEcnDAw==",
                "quotaByStake": "33184",
                "totalQuota": "33184",
                "vmLogHash": null,
                "triggeredSendBlockList": [
                    {
                        "blockType": 2,
                        "height": "0",
                        "hash": "dda7b2c0d2d6c1c1ca3c9bdb061dd4a14ee892d29ab0cdd7fc552c1e57d6f0d2",
                        "previousHash": "0000000000000000000000000000000000000000000000000000000000000000",
                        "address": "vite_0b573f9d1fca7d830fc0d1552e3ff7b7f44455e38c8218fd10",
                        "publicKey": null,
                        "producer": "vite_3345524abf6bbe1809449224b5972c41790b6cf2e22fcb5caf",
                        "fromAddress": "vite_0b573f9d1fca7d830fc0d1552e3ff7b7f44455e38c8218fd10",
                        "toAddress": "vite_ea6a2f80f3469a001586cca12ac1676bb24484153c419d3db9",
                        "sendBlockHash": "0000000000000000000000000000000000000000000000000000000000000000",
                        "tokenId": "tti_5649544520544f4b454e6e40",
                        "amount": "61984000000000000000000",
                        "fee": "0",
                        "data": null,
                        "difficulty": null,
                        "nonce": null,
                        "signature": null,
                        "quotaByStake": "0",
                        "totalQuota": "0",
                        "vmLogHash": null,
                        "triggeredSendBlockList": null,
                        "tokenInfo": {
                            "tokenName": "VITE",
                            "tokenSymbol": "VITE",
                            "totalSupply": "999998383901711633310557566",
                            "decimals": 18,
                            "owner": "vite_0000000000000000000000000000000000000004d28108e76b",
                            "tokenId": "tti_5649544520544f4b454e6e40",
                            "maxSupply": "115792089237316195423570985008687907853269984665640564039457584007913129639935",
                            "ownerBurnOnly": false,
                            "isReIssuable": true,
                            "index": 0,
                            "isOwnerBurnOnly": false
                        },
                        "confirmations": "4299959",
                        "firstSnapshotHash": "33d527c8f6ba7fdef69a6bf6171b53ae000460e08486bb25fb88d44f4c789147",
                        "receiveBlockHeight": "38",
                        "receiveBlockHash": "7a6e4ab1420c3a1d319431ba77757f780578622c938afd1eb7bc8bdc4fe947fc",
                        "timestamp": 1562208615
                    }
                ],
                "tokenInfo": {
                    "tokenName": "VITE",
                    "tokenSymbol": "VITE",
                    "totalSupply": "999998383901711633310557566",
                    "decimals": 18,
                    "owner": "vite_0000000000000000000000000000000000000004d28108e76b",
                    "tokenId": "tti_5649544520544f4b454e6e40",
                    "maxSupply": "115792089237316195423570985008687907853269984665640564039457584007913129639935",
                    "ownerBurnOnly": false,
                    "isReIssuable": true,
                    "index": 0,
                    "isOwnerBurnOnly": false
                },
                "confirmations": "4299954",
                "firstSnapshotHash": "33d527c8f6ba7fdef69a6bf6171b53ae000460e08486bb25fb88d44f4c789147",
                "receiveBlockHeight": null,
                "receiveBlockHash": null,
                "timestamp": 1562208615
            }
        }
        ```

## `ledger_getAccountBlocksByAddress`
Retrieve account blocks by page number, sorted in descending order by account block height.

- **Parameters**:
    * `address`: `address` The account address.
    * `pageIndex`: `uint64` The page number, starting from 0.
    * `pageSize`: `uint64` The page size, with a maximum value of 1000.

- **Returns**:
    * `List<AccountBlock>` See [AccountBlock](README.md#accountblock) for details.

!!! example
    === "Request"
        ```json
        {
            "jsonrpc": "2.0",
            "id": 17,
            "method": "ledger_getAccountBlocksByAddress",
            "params": [
                "vite_0b573f9d1fca7d830fc0d1552e3ff7b7f44455e38c8218fd10",
                0,
                3
            ]
        }
        ```

    === "Response"
        ```json
        {
            "jsonrpc": "2.0",
            "id": 17,
            "result": [
                {
                    "blockType": 4,
                    "height": "21846",
                    "hash": "7c534db9946950197dbce8654c0538278ec38e2b1bb3e229c84df26cf936a739",
                    "previousHash": "5a78365f4f7e9c29d57c8f087c9691bfff63a4889cde5d03a89cb24d34abbdf3",
                    "address": "vite_0b573f9d1fca7d830fc0d1552e3ff7b7f44455e38c8218fd10",
                    "publicKey": "dTwfba0WWN2amkGLuMaanCNiGgJsT0ArM//zaDO3Mro=",
                    "producer": "vite_8370865362e739fb71615b8b33f9e394d85743093bdfaede6c",
                    "fromAddress": "vite_ea6a2f80f3469a001586cca12ac1676bb24484153c419d3db9",
                    "toAddress": "vite_0b573f9d1fca7d830fc0d1552e3ff7b7f44455e38c8218fd10",
                    "sendBlockHash": "37702663fbad5d405d78b9c53bd3206f4040ac17843852fef0d125973030318c",
                    "tokenId": "tti_5649544520544f4b454e6e40",
                    "amount": "0",
                    "fee": "0",
                    "data": "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
                    "difficulty": null,
                    "nonce": null,
                    "signature": "FLPFkplSkoq31iJpYeNho2MyZR1BKmOD3V54U9XV3PTRWnjm5e7sOnCNWW8EgCMPbK+WYImxPueYfnZXEcnDAw==",
                    "quotaByStake": "33184",
                    "totalQuota": "33184",
                    "vmLogHash": null,
                    "triggeredSendBlockList": [
                        {
                            "blockType": 2,
                            "height": "0",
                            "hash": "dda7b2c0d2d6c1c1ca3c9bdb061dd4a14ee892d29ab0cdd7fc552c1e57d6f0d2",
                            "previousHash": "0000000000000000000000000000000000000000000000000000000000000000",
                            "address": "vite_0b573f9d1fca7d830fc0d1552e3ff7b7f44455e38c8218fd10",
                            "publicKey": null,
                            "producer": "vite_3345524abf6bbe1809449224b5972c41790b6cf2e22fcb5caf",
                            "fromAddress": "vite_0b573f9d1fca7d830fc0d1552e3ff7b7f44455e38c8218fd10",
                            "toAddress": "vite_ea6a2f80f3469a001586cca12ac1676bb24484153c419d3db9",
                            "sendBlockHash": "0000000000000000000000000000000000000000000000000000000000000000",
                            "tokenId": "tti_5649544520544f4b454e6e40",
                            "amount": "61984000000000000000000",
                            "fee": "0",
                            "data": null,
                            "difficulty": null,
                            "nonce": null,
                            "signature": null,
                            "quotaByStake": "0",
                            "totalQuota": "0",
                            "vmLogHash": null,
                            "triggeredSendBlockList": null,
                            "tokenInfo": {
                                "tokenName": "VITE",
                                "tokenSymbol": "VITE",
                                "totalSupply": "1000032113155962510026863838",
                                "decimals": 18,
                                "owner": "vite_0000000000000000000000000000000000000004d28108e76b",
                                "tokenId": "tti_5649544520544f4b454e6e40",
                                "maxSupply": "115792089237316195423570985008687907853269984665640564039457584007913129639935",
                                "ownerBurnOnly": false,
                                "isReIssuable": true,
                                "index": 0,
                                "isOwnerBurnOnly": false
                            },
                            "confirmations": "4368185",
                            "firstSnapshotHash": "33d527c8f6ba7fdef69a6bf6171b53ae000460e08486bb25fb88d44f4c789147",
                            "receiveBlockHeight": "38",
                            "receiveBlockHash": "7a6e4ab1420c3a1d319431ba77757f780578622c938afd1eb7bc8bdc4fe947fc",
                            "timestamp": 1562208615
                        }
                    ],
                    "tokenInfo": {
                        "tokenName": "VITE",
                        "tokenSymbol": "VITE",
                        "totalSupply": "1000032113155962510026863838",
                        "decimals": 18,
                        "owner": "vite_0000000000000000000000000000000000000004d28108e76b",
                        "tokenId": "tti_5649544520544f4b454e6e40",
                        "maxSupply": "115792089237316195423570985008687907853269984665640564039457584007913129639935",
                        "ownerBurnOnly": false,
                        "isReIssuable": true,
                        "index": 0,
                        "isOwnerBurnOnly": false
                    },
                    "confirmations": "4368185",
                    "firstSnapshotHash": "33d527c8f6ba7fdef69a6bf6171b53ae000460e08486bb25fb88d44f4c789147",
                    "receiveBlockHeight": null,
                    "receiveBlockHash": null,
                    "timestamp": 1562208615
                },
                {
                    "blockType": 4,
                    "height": "21845",
                    "hash": "5a78365f4f7e9c29d57c8f087c9691bfff63a4889cde5d03a89cb24d34abbdf3",
                    "previousHash": "4d2c1bc90e235b5a5fdec69bda0ebe6494f0c01b2af53accaa1beff00b9fa976",
                    "address": "vite_0b573f9d1fca7d830fc0d1552e3ff7b7f44455e38c8218fd10",
                    "publicKey": "1cgxEjT1L3x+mPzKsBnV4DSPiU+RTmY7akbrTCxcArE=",
                    "producer": "vite_165a295e214421ef1276e79990533953e901291d29b2d4851f",
                    "fromAddress": "vite_f74d18fc6431cb9d813c62a47a9063c4b9488219dc22c2736d",
                    "toAddress": "vite_0b573f9d1fca7d830fc0d1552e3ff7b7f44455e38c8218fd10",
                    "sendBlockHash": "fc2c937d542fd5b02aeadb0acb3a2f015e1cc92b94873304ab8642f703e4c059",
                    "tokenId": "tti_5649544520544f4b454e6e40",
                    "amount": "16000000000000000000",
                    "fee": "0",
                    "data": "eo15oJWpGqoIm4hP9riEZRvcSXLUs8QKC7XBStD6yyAA",
                    "difficulty": null,
                    "nonce": null,
                    "signature": "XccA38Yxcgt1EZDdSNrgcZNC3YJ088HKNBdTt72noa1F+SbEBxmWnUjSKj5h/FlO/3SXrYnt0rU97L8JkY3lBA==",
                    "quotaByStake": "105710",
                    "totalQuota": "105710",
                    "vmLogHash": "56d05270b0d62a8dac3a01908177ed6e47899eced76bc9fa7716e808d6068705",
                    "triggeredSendBlockList": [
                        {
                            "blockType": 2,
                            "height": "0",
                            "hash": "6cb62e1576bfc6652251a89b540972aceaa678f51ef4b92156b5d1a387f8b178",
                            "previousHash": "0000000000000000000000000000000000000000000000000000000000000000",
                            "address": "vite_0b573f9d1fca7d830fc0d1552e3ff7b7f44455e38c8218fd10",
                            "publicKey": null,
                            "producer": "vite_3345524abf6bbe1809449224b5972c41790b6cf2e22fcb5caf",
                            "fromAddress": "vite_0b573f9d1fca7d830fc0d1552e3ff7b7f44455e38c8218fd10",
                            "toAddress": "vite_f74d18fc6431cb9d813c62a47a9063c4b9488219dc22c2736d",
                            "sendBlockHash": "0000000000000000000000000000000000000000000000000000000000000000",
                            "tokenId": "tti_5649544520544f4b454e6e40",
                            "amount": "30000000000000000000",
                            "fee": "0",
                            "data": null,
                            "difficulty": null,
                            "nonce": null,
                            "signature": null,
                            "quotaByStake": "0",
                            "totalQuota": "0",
                            "vmLogHash": null,
                            "triggeredSendBlockList": null,
                            "tokenInfo": {
                                "tokenName": "VITE",
                                "tokenSymbol": "VITE",
                                "totalSupply": "1000032113155962510026863838",
                                "decimals": 18,
                                "owner": "vite_0000000000000000000000000000000000000004d28108e76b",
                                "tokenId": "tti_5649544520544f4b454e6e40",
                                "maxSupply": "115792089237316195423570985008687907853269984665640564039457584007913129639935",
                                "ownerBurnOnly": false,
                                "isReIssuable": true,
                                "index": 0,
                                "isOwnerBurnOnly": false
                            },
                            "confirmations": "4369892",
                            "firstSnapshotHash": "462da9711b54219036d26b6cf8533a510e75680089a2a1ec54201bf14bdce16c",
                            "receiveBlockHeight": "547",
                            "receiveBlockHash": "3536cd55cb61723bf29d1ac193d39e6f049c2475370a91b8a68a7750e5d57bf5",
                            "timestamp": 1562206877
                        }
                    ],
                    "tokenInfo": {
                        "tokenName": "VITE",
                        "tokenSymbol": "VITE",
                        "totalSupply": "1000032113155962510026863838",
                        "decimals": 18,
                        "owner": "vite_0000000000000000000000000000000000000004d28108e76b",
                        "tokenId": "tti_5649544520544f4b454e6e40",
                        "maxSupply": "115792089237316195423570985008687907853269984665640564039457584007913129639935",
                        "ownerBurnOnly": false,
                        "isReIssuable": true,
                        "index": 0,
                        "isOwnerBurnOnly": false
                    },
                    "confirmations": "4369891",
                    "firstSnapshotHash": "462da9711b54219036d26b6cf8533a510e75680089a2a1ec54201bf14bdce16c",
                    "receiveBlockHeight": null,
                    "receiveBlockHash": null,
                    "timestamp": 1562206877
                },
                {
                    "blockType": 4,
                    "height": "21844",
                    "hash": "4d2c1bc90e235b5a5fdec69bda0ebe6494f0c01b2af53accaa1beff00b9fa976",
                    "previousHash": "b91ce0f015e7d89e87925762a8996326a979b27f7d2d7ed8d22c327937584ee4",
                    "address": "vite_0b573f9d1fca7d830fc0d1552e3ff7b7f44455e38c8218fd10",
                    "publicKey": "O4QZHbAsZQ4KHHzxEPuLdnVT+DiJomRrG6+zYSUSZRc=",
                    "producer": "vite_10513d54e0c38a304ad9e7902c82277328b4df76dd31871f37",
                    "fromAddress": "vite_f74d18fc6431cb9d813c62a47a9063c4b9488219dc22c2736d",
                    "toAddress": "vite_0b573f9d1fca7d830fc0d1552e3ff7b7f44455e38c8218fd10",
                    "sendBlockHash": "080b41f1cb5194df8d5b8903a6ed987f36291d172f93a8c67c75a87a3769308d",
                    "tokenId": "tti_5649544520544f4b454e6e40",
                    "amount": "16000000000000000000",
                    "fee": "0",
                    "data": "wao4N2P26LmbJEmmYuINTMJoQ1MX0+EWEXSTK5CHCh4A",
                    "difficulty": null,
                    "nonce": null,
                    "signature": "RUo6punEG3XzqO/2bL3vOlOMXM9xpvUxToEBgqtP7GLYYr/9ZxrK5GamaaUHA/OyXq8jwrrX5hf1z/F8nT1BCw==",
                    "quotaByStake": "116522",
                    "totalQuota": "116522",
                    "vmLogHash": "e449ac3a53689813ef73d149f8ebb83f3fdc77812d21aaf399575dca353de895",
                    "triggeredSendBlockList": [
                        {
                            "blockType": 2,
                            "height": "0",
                            "hash": "1a92be3b93725056f9df1906e1fcd1fc123f704d879b020f836daa41eacc42dd",
                            "previousHash": "0000000000000000000000000000000000000000000000000000000000000000",
                            "address": "vite_0b573f9d1fca7d830fc0d1552e3ff7b7f44455e38c8218fd10",
                            "publicKey": null,
                            "producer": "vite_3345524abf6bbe1809449224b5972c41790b6cf2e22fcb5caf",
                            "fromAddress": "vite_0b573f9d1fca7d830fc0d1552e3ff7b7f44455e38c8218fd10",
                            "toAddress": "vite_f74d18fc6431cb9d813c62a47a9063c4b9488219dc22c2736d",
                            "sendBlockHash": "0000000000000000000000000000000000000000000000000000000000000000",
                            "tokenId": "tti_5649544520544f4b454e6e40",
                            "amount": "4000000000000000000",
                            "fee": "0",
                            "data": null,
                            "difficulty": null,
                            "nonce": null,
                            "signature": null,
                            "quotaByStake": "0",
                            "totalQuota": "0",
                            "vmLogHash": null,
                            "triggeredSendBlockList": null,
                            "tokenInfo": {
                                "tokenName": "VITE",
                                "tokenSymbol": "VITE",
                                "totalSupply": "1000032113155962510026863838",
                                "decimals": 18,
                                "owner": "vite_0000000000000000000000000000000000000004d28108e76b",
                                "tokenId": "tti_5649544520544f4b454e6e40",
                                "maxSupply": "115792089237316195423570985008687907853269984665640564039457584007913129639935",
                                "ownerBurnOnly": false,
                                "isReIssuable": true,
                                "index": 0,
                                "isOwnerBurnOnly": false
                            },
                            "confirmations": "4369916",
                            "firstSnapshotHash": "dd23c7d1c866311a41977fc008830558ad34d9bcd790ce4dad6367ee52dfedc6",
                            "receiveBlockHeight": "545",
                            "receiveBlockHash": "6172267c757d6234c833aaa05f393ba4a733e584a83ac8c43acf2c6c2da8510f",
                            "timestamp": 1562206856
                        }
                    ],
                    "tokenInfo": {
                        "tokenName": "VITE",
                        "tokenSymbol": "VITE",
                        "totalSupply": "1000032113155962510026863838",
                        "decimals": 18,
                        "owner": "vite_0000000000000000000000000000000000000004d28108e76b",
                        "tokenId": "tti_5649544520544f4b454e6e40",
                        "maxSupply": "115792089237316195423570985008687907853269984665640564039457584007913129639935",
                        "ownerBurnOnly": false,
                        "isReIssuable": true,
                        "index": 0,
                        "isOwnerBurnOnly": false
                    },
                    "confirmations": "4369913",
                    "firstSnapshotHash": "dd23c7d1c866311a41977fc008830558ad34d9bcd790ce4dad6367ee52dfedc6",
                    "receiveBlockHeight": null,
                    "receiveBlockHash": null,
                    "timestamp": 1562206856
                }
            ]
        }
        ```

## `ledger_getAccountBlocksByHeightRange`
Retrieve account blocks by height range, sorted in descending order by height.

- **Parameters**:
    * `address`: `address` The account address.
    * `startHeight`: `uint64` The starting height, inclusive.
    * `endHeight`: `uint64` The ending height, inclusive. Must satisfy $endHeight-StartHeight \le 1000$.

- **Returns**:
    * `List<AccountBlock>` See [AccountBlock](README.md#accountblock) for details.

!!! example
    === "Request"
        ```json
        {
            "jsonrpc": "2.0",
            "id": 17,
            "method": "ledger_getAccountBlocksByHeightRange",
            "params": [
                "vite_8cf2663cc949442db2d3f78f372621733292d1fb0b846f1651",
                2,
                3
            ]
        }
        ```

    === "Response"
        ```json
        {
            "jsonrpc": "2.0",
            "id": 17,
            "result": [
                {
                    "blockType": 4,
                    "height": "3",
                    "hash": "77a73b411c8c91018f17f4b5009f275aaa88ec2c0f99b9e3afd7fca4926838d8",
                    "previousHash": "8d3c065c82d3a9641fef93cc3bf03d8a15481ccdd6dc52f3d9ef059defd45e17",
                    "address": "vite_8cf2663cc949442db2d3f78f372621733292d1fb0b846f1651",
                    "publicKey": "nnm7Tj1o/2MFDqPquG4NRZBVzilImBmaP3XstaOx/rg=",
                    "producer": "vite_e7a01e66d920c6c5ce82e9353ca57267f6534e357bbee63063",
                    "fromAddress": "vite_4bbc86782244caef6ba50ebc9418777a3abf2de4de527acbf4",
                    "toAddress": "vite_8cf2663cc949442db2d3f78f372621733292d1fb0b846f1651",
                    "sendBlockHash": "e050c1ca6d740098696b9c0442f57ce2163b70cd93109461ca2693cde3fbdafb",
                    "tokenId": "tti_5649544520544f4b454e6e40",
                    "amount": "0",
                    "fee": "0",
                    "data": "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
                    "difficulty": null,
                    "nonce": null,
                    "signature": "rHGYUV+yBPlfCfTFGlace288E5Y07WQNTvZ2R5jJ7Z9Qo0SGoZE7JkV6c9TMEWF9PSIuDv18kDibAntEnQswAw==",
                    "quotaByStake": "92012",
                    "totalQuota": "92012",
                    "vmLogHash": null,
                    "triggeredSendBlockList": [
                        {
                            "blockType": 2,
                            "height": "0",
                            "hash": "fe79d57a6f5f943993428c8b9730dde3980925e88a7caf1833e570a2e3f812b3",
                            "previousHash": "0000000000000000000000000000000000000000000000000000000000000000",
                            "address": "vite_8cf2663cc949442db2d3f78f372621733292d1fb0b846f1651",
                            "publicKey": null,
                            "producer": "vite_3345524abf6bbe1809449224b5972c41790b6cf2e22fcb5caf",
                            "fromAddress": "vite_8cf2663cc949442db2d3f78f372621733292d1fb0b846f1651",
                            "toAddress": "vite_0000000000000000000000000000000000000004d28108e76b",
                            "sendBlockHash": "0000000000000000000000000000000000000000000000000000000000000000",
                            "tokenId": "tti_2445f6e5cde8c2c70e446c83",
                            "amount": "0",
                            "fee": "0",
                            "data": "QvLu5AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAApWaXRlX1NCUDAzAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==",
                            "difficulty": null,
                            "nonce": null,
                            "signature": null,
                            "quotaByStake": "0",
                            "totalQuota": "0",
                            "vmLogHash": null,
                            "triggeredSendBlockList": null,
                            "tokenInfo": null,
                            "confirmations": "42727483",
                            "firstSnapshotHash": "136db1f87a0614b9ea95f02c3fe48797b308d9b0480276b62c79c62a71a31538",
                            "firstSnapshotHeight": "57514560",
                            "receiveBlockHeight": "82378",
                            "receiveBlockHash": "94aea19bf80ae3da9848b323d53f0a3a4193f6607b6562599c20ec0484071cf2",
                            "timestamp": 1617288661
                        }
                    ],
                    "tokenInfo": {
                        "tokenName": "VITE",
                        "tokenSymbol": "VITE",
                        "totalSupply": "1046262261897786596300087194",
                        "decimals": 18,
                        "owner": "vite_0000000000000000000000000000000000000004d28108e76b",
                        "tokenId": "tti_5649544520544f4b454e6e40",
                        "maxSupply": "115792089237316195423570985008687907853269984665640564039457584007913129639935",
                        "ownerBurnOnly": false,
                        "isReIssuable": true,
                        "index": 0,
                        "isOwnerBurnOnly": false
                    },
                    "confirmations": "42727483",
                    "firstSnapshotHash": "136db1f87a0614b9ea95f02c3fe48797b308d9b0480276b62c79c62a71a31538",
                    "firstSnapshotHeight": "57514560",
                    "receiveBlockHeight": null,
                    "receiveBlockHash": null,
                    "timestamp": 1617288661
                },
                {
                    "blockType": 4,
                    "height": "2",
                    "hash": "8d3c065c82d3a9641fef93cc3bf03d8a15481ccdd6dc52f3d9ef059defd45e17",
                    "previousHash": "b28f2fc25e64fd1ae15eaefcc6c75aefe5455ccccf3e87efedc2789230f8b5ea",
                    "address": "vite_8cf2663cc949442db2d3f78f372621733292d1fb0b846f1651",
                    "publicKey": "Xxb2uqw1KnkjQDAs9IODnPIze8GKmras7xf/rBUxudI=",
                    "producer": "vite_5e9ba7ab0a8144717de75bb93b32322bef00a3b42ff35efca2",
                    "fromAddress": "vite_4bbc86782244caef6ba50ebc9418777a3abf2de4de527acbf4",
                    "toAddress": "vite_8cf2663cc949442db2d3f78f372621733292d1fb0b846f1651",
                    "sendBlockHash": "829fa207fe4c26610520034848b5664f66615e09b17dc023b795f13e0cfe63c1",
                    "tokenId": "tti_5649544520544f4b454e6e40",
                    "amount": "0",
                    "fee": "0",
                    "data": "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
                    "difficulty": null,
                    "nonce": null,
                    "signature": "cNratdbDlM1Bwc4TbqFh07HFhVFhSeb6Se/bgj6ZY66fl5AY1BIJG96yoK5sXJq2yo3NXdQ/aUC0+y8ZMLW0Cg==",
                    "quotaByStake": "92012",
                    "totalQuota": "92012",
                    "vmLogHash": null,
                    "triggeredSendBlockList": [
                        {
                            "blockType": 2,
                            "height": "0",
                            "hash": "5c5cd3ea5c919746d4d73108e1481139557bd8421dc439ea64114867a4fd7155",
                            "previousHash": "0000000000000000000000000000000000000000000000000000000000000000",
                            "address": "vite_8cf2663cc949442db2d3f78f372621733292d1fb0b846f1651",
                            "publicKey": null,
                            "producer": "vite_3345524abf6bbe1809449224b5972c41790b6cf2e22fcb5caf",
                            "fromAddress": "vite_8cf2663cc949442db2d3f78f372621733292d1fb0b846f1651",
                            "toAddress": "vite_0000000000000000000000000000000000000004d28108e76b",
                            "sendBlockHash": "0000000000000000000000000000000000000000000000000000000000000000",
                            "tokenId": "tti_2445f6e5cde8c2c70e446c83",
                            "amount": "0",
                            "fee": "0",
                            "data": "QvLu5AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAxGdWxsTm9kZVBvb2wAAAAAAAAAAAAAAAAAAAAAAAAAAA==",
                            "difficulty": null,
                            "nonce": null,
                            "signature": null,
                            "quotaByStake": "0",
                            "totalQuota": "0",
                            "vmLogHash": null,
                            "triggeredSendBlockList": null,
                            "tokenInfo": null,
                            "confirmations": "42727593",
                            "firstSnapshotHash": "4b0ed157a1e09e468fa36215284046ae9891161bf01e1c5be01bf2e2e9ac7d34",
                            "firstSnapshotHeight": "57514450",
                            "receiveBlockHeight": "82377",
                            "receiveBlockHash": "8a598e294b665621a6b8bc7c8dc2e0b6f50e818fd43c13a96cb3e8620d4b10da",
                            "timestamp": 1617288551
                        }
                    ],
                    "tokenInfo": {
                        "tokenName": "VITE",
                        "tokenSymbol": "VITE",
                        "totalSupply": "1046262261897786596300087194",
                        "decimals": 18,
                        "owner": "vite_0000000000000000000000000000000000000004d28108e76b",
                        "tokenId": "tti_5649544520544f4b454e6e40",
                        "maxSupply": "115792089237316195423570985008687907853269984665640564039457584007913129639935",
                        "ownerBurnOnly": false,
                        "isReIssuable": true,
                        "index": 0,
                        "isOwnerBurnOnly": false
                    },
                    "confirmations": "42727593",
                    "firstSnapshotHash": "4b0ed157a1e09e468fa36215284046ae9891161bf01e1c5be01bf2e2e9ac7d34",
                    "firstSnapshotHeight": "57514450",
                    "receiveBlockHeight": null,
                    "receiveBlockHash": null,
                    "timestamp": 1617288551
                }
            ]
        }
        ```

## `ledger_getCompleteBlockByHash`
Retrieve an [RS block](../soliditypp/fundamentals#rs-receive-send-blocks) containing the response block by account block hash.

> Note: If the given account block is not an RS block, the result will be the same as [ledger_getAccountBlockByHash](#ledger-getaccountblockbyhash).

- **Parameters**:

- **Returns**:
    * [`AccountBlock`](README.md#accountblock)

!!! example
    === "Request"
        ```json
        {
            "jsonrpc": "2.0",
            "id": 17,
            "method": "ledger_getCompleteBlockByHash",
            "params": [
                "dda7b2c0d2d6c1c1ca3c9bdb061dd4a14ee892d29ab0cdd7fc552c1e57d6f0d2"
            ]
        }
        ```

    === "Response"
        ```json
        {
            "jsonrpc": "2.0",
            "id": 17,
            "result": {
                "blockType": 4,
                "height": "21846",
                "hash": "7c534db9946950197dbce8654c0538278ec38e2b1bb3e229c84df26cf936a739",
                "previousHash": "5a78365f4f7e9c29d57c8f087c9691bfff63a4889cde5d03a89cb24d34abbdf3",
                "address": "vite_0b573f9d1fca7d830fc0d1552e3ff7b7f44455e38c8218fd10",
                "publicKey": "dTwfba0WWN2amkGLuMaanCNiGgJsT0ArM//zaDO3Mro=",
                "producer": "vite_8370865362e739fb71615b8b33f9e394d85743093bdfaede6c",
                "fromAddress": "vite_ea6a2f80f3469a001586cca12ac1676bb24484153c419d3db9",
                "toAddress": "vite_0b573f9d1fca7d830fc0d1552e3ff7b7f44455e38c8218fd10",
                "sendBlockHash": "37702663fbad5d405d78b9c53bd3206f4040ac17843852fef0d125973030318c",
                "tokenId": "tti_5649544520544f4b454e6e40",
                "amount": "0",
                "fee": "0",
                "data": "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
                "difficulty": null,
                "nonce": null,
                "signature": "FLPFkplSkoq31iJpYeNho2MyZR1BKmOD3V54U9XV3PTRWnjm5e7sOnCNWW8EgCMPbK+WYImxPueYfnZXEcnDAw==",
                "quotaByStake": "33184",
                "totalQuota": "33184",
                "vmLogHash": null,
                "triggeredSendBlockList": [
                    {
                        "blockType": 2,
                        "height": "0",
                        "hash": "dda7b2c0d2d6c1c1ca3c9bdb061dd4a14ee892d29ab0cdd7fc552c1e57d6f0d2",
                        "previousHash": "0000000000000000000000000000000000000000000000000000000000000000",
                        "address": "vite_0b573f9d1fca7d830fc0d1552e3ff7b7f44455e38c8218fd10",
                        "publicKey": null,
                        "producer": "vite_3345524abf6bbe1809449224b5972c41790b6cf2e22fcb5caf",
                        "fromAddress": "vite_0b573f9d1fca7d830fc0d1552e3ff7b7f44455e38c8218fd10",
                        "toAddress": "vite_ea6a2f80f3469a001586cca12ac1676bb24484153c419d3db9",
                        "sendBlockHash": "0000000000000000000000000000000000000000000000000000000000000000",
                        "tokenId": "tti_5649544520544f4b454e6e40",
                        "amount": "61984000000000000000000",
                        "fee": "0",
                        "data": null,
                        "difficulty": null,
                        "nonce": null,
                        "signature": null,
                        "quotaByStake": "0",
                        "totalQuota": "0",
                        "vmLogHash": null,
                        "triggeredSendBlockList": null,
                        "tokenInfo": {
                            "tokenName": "VITE",
                            "tokenSymbol": "VITE",
                            "totalSupply": "999369292029736282857580488",
                            "decimals": 18,
                            "owner": "vite_0000000000000000000000000000000000000004d28108e76b",
                            "tokenId": "tti_5649544520544f4b454e6e40",
                            "maxSupply": "115792089237316195423570985008687907853269984665640564039457584007913129639935",
                            "ownerBurnOnly": false,
                            "isReIssuable": true,
                            "index": 0,
                            "isOwnerBurnOnly": false
                        },
                        "confirmations": "3622745",
                        "firstSnapshotHash": "33d527c8f6ba7fdef69a6bf6171b53ae000460e08486bb25fb88d44f4c789147",
                        "receiveBlockHeight": "38",
                        "receiveBlockHash": "7a6e4ab1420c3a1d319431ba77757f780578622c938afd1eb7bc8bdc4fe947fc",
                        "timestamp": 1562208615
                    }
                ],
                "tokenInfo": {
                    "tokenName": "VITE",
                    "tokenSymbol": "VITE",
                    "totalSupply": "999369292029736282857580488",
                    "decimals": 18,
                    "owner": "vite_0000000000000000000000000000000000000004d28108e76b",
                    "tokenId": "tti_5649544520544f4b454e6e40",
                    "maxSupply": "115792089237316195423570985008687907853269984665640564039457584007913129639935",
                    "ownerBurnOnly": false,
                    "isReIssuable": true,
                    "index": 0,
                    "isOwnerBurnOnly": false
                },
                "confirmations": "3622745",
                "firstSnapshotHash": "33d527c8f6ba7fdef69a6bf6171b53ae000460e08486bb25fb88d44f4c789147",
                "receiveBlockHeight": null,
                "receiveBlockHash": null,
                "timestamp": 1562208615
            }
        }
        ```

## `ledger_getLatestAccountBlock`
Fetch the latest account block by address.

- **Parameters**:
    * `address`: `address` The account address.

- **Returns**:
    * [`AccountBlock`](README.md#accountblock)

!!! example
    === "Request"
        ```json
        {
            "jsonrpc": "2.0",
            "id": 17,
            "method": "ledger_getLatestAccountBlock",
            "params": [
                "vite_0b573f9d1fca7d830fc0d1552e3ff7b7f44455e38c8218fd10"
            ]
        }
        ```

    === "Response"
        ```json
        {
            "jsonrpc": "2.0",
            "id": 17,
            "result": {
                "blockType": 4,
                "height": "21846",
                "hash": "7c534db9946950197dbce8654c0538278ec38e2b1bb3e229c84df26cf936a739",
                "previousHash": "5a78365f4f7e9c29d57c8f087c9691bfff63a4889cde5d03a89cb24d34abbdf3",
                "address": "vite_0b573f9d1fca7d830fc0d1552e3ff7b7f44455e38c8218fd10",
                "publicKey": "dTwfba0WWN2amkGLuMaanCNiGgJsT0ArM//zaDO3Mro=",
                "producer": "vite_8370865362e739fb71615b8b33f9e394d85743093bdfaede6c",
                "fromAddress": "vite_ea6a2f80f3469a001586cca12ac1676bb24484153c419d3db9",
                "toAddress": "vite_0b573f9d1fca7d830fc0d1552e3ff7b7f44455e38c8218fd10",
                "sendBlockHash": "37702663fbad5d405d78b9c53bd3206f4040ac17843852fef0d125973030318c",
                "tokenId": "tti_5649544520544f4b454e6e40",
                "amount": "0",
                "fee": "0",
                "data": "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
                "difficulty": null,
                "nonce": null,
                "signature": "FLPFkplSkoq31iJpYeNho2MyZR1BKmOD3V54U9XV3PTRWnjm5e7sOnCNWW8EgCMPbK+WYImxPueYfnZXEcnDAw==",
                "quotaByStake": "33184",
                "totalQuota": "33184",
                "vmLogHash": null,
                "triggeredSendBlockList": [
                    {
                        "blockType": 2,
                        "height": "0",
                        "hash": "dda7b2c0d2d6c1c1ca3c9bdb061dd4a14ee892d29ab0cdd7fc552c1e57d6f0d2",
                        "previousHash": "0000000000000000000000000000000000000000000000000000000000000000",
                        "address": "vite_0b573f9d1fca7d830fc0d1552e3ff7b7f44455e38c8218fd10",
                        "publicKey": null,
                        "producer": "vite_3345524abf6bbe1809449224b5972c41790b6cf2e22fcb5caf",
                        "fromAddress": "vite_0b573f9d1fca7d830fc0d1552e3ff7b7f44455e38c8218fd10",
                        "toAddress": "vite_ea6a2f80f3469a001586cca12ac1676bb24484153c419d3db9",
                        "sendBlockHash": "0000000000000000000000000000000000000000000000000000000000000000",
                        "tokenId": "tti_5649544520544f4b454e6e40",
                        "amount": "61984000000000000000000",
                        "fee": "0",
                        "data": null,
                        "difficulty": null,
                        "nonce": null,
                        "signature": null,
                        "quotaByStake": "0",
                        "totalQuota": "0",
                        "vmLogHash": null,
                        "triggeredSendBlockList": null,
                        "tokenInfo": {
                            "tokenName": "VITE",
                            "tokenSymbol": "VITE",
                            "totalSupply": "1000045942413038967590996145",
                            "decimals": 18,
                            "owner": "vite_0000000000000000000000000000000000000004d28108e76b",
                            "tokenId": "tti_5649544520544f4b454e6e40",
                            "maxSupply": "115792089237316195423570985008687907853269984665640564039457584007913129639935",
                            "ownerBurnOnly": false,
                            "isReIssuable": true,
                            "index": 0,
                            "isOwnerBurnOnly": false
                        },
                        "confirmations": "4420249",
                        "firstSnapshotHash": "33d527c8f6ba7fdef69a6bf6171b53ae000460e08486bb25fb88d44f4c789147",
                        "receiveBlockHeight": "38",
                        "receiveBlockHash": "7a6e4ab1420c3a1d319431ba77757f780578622c938afd1eb7bc8bdc4fe947fc",
                        "timestamp": 1562208615
                    }
                ],
                "tokenInfo": {
                    "tokenName": "VITE",
                    "tokenSymbol": "VITE",
                    "totalSupply": "1000045942413038967590996145",
                    "decimals": 18,
                    "owner": "vite_0000000000000000000000000000000000000004d28108e76b",
                    "tokenId": "tti_5649544520544f4b454e6e40",
                    "maxSupply": "115792089237316195423570985008687907853269984665640564039457584007913129639935",
                    "ownerBurnOnly": false,
                    "isReIssuable": true,
                    "index": 0,
                    "isOwnerBurnOnly": false
                },
                "confirmations": "4420245",
                "firstSnapshotHash": "33d527c8f6ba7fdef69a6bf6171b53ae000460e08486bb25fb88d44f4c789147",
                "receiveBlockHeight": null,
                "receiveBlockHash": null,
                "timestamp": 1562208615
            }
        }
        ```

## `ledger_getSnapshotChainHeight`
Get the current snapshot chain height.

- **Parameters**: none

- **Returns**:
    * `height`: `uint64 string` The current snapshot chain height.

!!! example
    === "Request"
        ```json
        {
            "jsonrpc": "2.0",
            "id": 1,
            "method": "ledger_getSnapshotChainHeight",
            "params": null
        }
        ```

    === "Response"
        ```json
        {
            "jsonrpc": "2.0",
            "id": 1,
            "result": "1816565"
        }
        ```

## `ledger_getSnapshotBlockByHash`
Fetch a snapshot block by its hash.

- **Parameters**:
    * `blockHash`: `hash` The hash of the snapshot block.

- **Returns**:
    * [`SnapshotBlock`](README.md#snapshotblock)

!!! example
    === "Request"
        ```json
        {
            "jsonrpc": "2.0",
            "id": 2,
            "method": "ledger_getSnapshotBlockByHash",
            "params": [
                "579db20cb0ef854bba4636d6eaff499ae106ecd918826072a75d47f3e7cbe857"
            ]
        }
        ```

    === "Response"
        ```json
        {
            "jsonrpc": "2.0",
            "id": 2,
            "result": {
                "producer": "vite_94badf80abab06dc1cdb4d21038a6799040bb2feb154f730cb",
                "hash": "579db20cb0ef854bba4636d6eaff499ae106ecd918826072a75d47f3e7cbe857",
                "previousHash": "18cf03a6c5d5128bc0a419f23713689cb279165d057759640c700c28c9315470",
                "height": 1807756,
                "publicKey": "zpwPhKs0jClH2JYqn3HieI3SPqm97PMKZlsive8PjBw=",
                "signature": "EzgWq2h2h+qkIHhsKSHK7IMIn3M9bAVR3Sy8ZpaLx2U7BJ6mjVhKIuerEKLcEsY9qbPfc9IYgJ9YYpd1uVK4Dw==",
                "seed": 15994478024988707574,
                "nextSeedHash": "360f20aa86891f67fdab4da09fc4068521c7ffb581f54761f602c2771ecdb097",
                "snapshotData": {
                    "vite_61088b1d4d334271f0ead08a1eec17b08e7ef25141dd427787": {
                        "height": 9596,
                        "hash": "b8a272bcebb5176fc5b918b6d1e4fc9aca5fd6a0be1fcea99386c6f8ae98a5c1"
                    },
                    "vite_866d14993fd17f8090d1b0b99e13318c0f99fdd180d3b6cca9": {
                        "height": 777,
                        "hash": "c78843e347f5927d255f4b57704335dc43222041bf5f27d45980ac83fcf1dbb3"
                    }
                },
                "timestamp": 1560422154,
                "version": 9
            }
        }
        ```

## `ledger_getSnapshotBlockByHeight`
Fetch a snapshot block by its height.

- **Parameters**:
    * `height`: `uint64` The height of the snapshot block.

- **Returns**:
    * [`SnapshotBlock`](README.md#snapshotblock)

!!! example
    === "Request"
        ```json
        {
            "jsonrpc": "2.0",
            "id": 2,
            "method": "ledger_getSnapshotBlockByHeight",
            "params": [
                6363411
            ]
        }
        ```

    === "Response"
        ```json
        {
            "jsonrpc": "2.0",
            "id": 17,
            "result": {
                "hash": "1cf965e7b9a8ab4a3758e7c2fa97890ce8724cfd071cd0b0966c1be17cfc48ad",
                "previousHash": "ce0e8595aace97b2732126afd104c889d71f87586740f401135f1ff58309363e",
                "height": 6363411,
                "publicKey": "uPBd4umnBsp0rGrKQWWsabcawNYEjPh3MKXnGNVTMWs=",
                "signature": "JcYfU1LWuZTgKgpMrQ1T6uUuw3krUImikmgTqoyEDXubYt00ND/loABQ7KoQkBh8PYQOvVrPZtBjVlTGWJx6DQ==",
                "timestamp": "1558012705",
                "seed": 15994478024988707574,
                "nextSeedHash": "360f20aa86891f67fdab4da09fc4068521c7ffb581f54761f602c2771ecdb097",
                "snapshotData": {
                    "vite_56fd05b23ff26cd7b0a40957fb77bde60c9fd6ebc35f809c23": {
                        "height": 31578,
                        "hash": "91fa958eb01f82b93ef4077a938fe9f9b5e1c2555979045e0a3c3b06721e69cc"
                    },
                    "vite_eef384a5fc40e0fbe282411e1d8e70c0f3c0e4a4f783448780": {
                        "height": 894,
                        "hash": "347a08b2e7666db832b1e0f69972f9dd1875fe6c1d3fc03aa55ab07e9a4858ae"
                    }
                },
                "version": 9
            }
        }
        ```

## `ledger_getSnapshotBlocks`
Fetch a number of snapshot blocks by start height and count in descending order.

- **Parameters**:
    * `height`: `uint64 string` The start block height.
    * `count`: `uint64` The number of blocks to fetch. Maximum 1000.

- **Returns**:
    * `List<SnapshotBlock>` See [SnapshotBlock](README.md#snapshotblock) for details.

!!! example
    === "Request"
        ```json
        {
            "jsonrpc": "2.0",
            "id": 0,
            "method": "ledger_getSnapshotBlocks",
            "params": [100, 2]
        }
        ```

    === "Response"
        ```json
        {
            "jsonrpc": "2.0",
            "id": 0,
            "result": [
                {
                    "producer": "vite_c1d11e6eda9a9b80e388a38e0ac541cbc3333736233b4eaaab",
                    "hash": "ca09e12f7a14bce2d22cfe87f557536fd3a4d77d1b3e84e6a46dd0820d9d3c58",
                    "height": 100,
                    "publicKey": "h3B0rM7qM8ZZzfLwFxfmrEFlO8J4X7dP8j+TDxfEgyc=",
                    "signature": "9INk9B3b3ZF3iOCU9mY2RYy0kEpGMSxx/ohiDwPqz9MLOA7R7C4Lo5ioROXV5DdhRhaEm+xca2RApmoM9vfrAA==",
                    "seed": 0,
                    "version": 0,
                    "previousHash": "75e9e5212729d9df18a402166b7125a5b0557bd3485d21d61ec146f07309a539",
                    "nextSeedHash": null,
                    "snapshotData": null,
                    "timestamp": 1558458875
                },
                {
                    "producer": "vite_c1d11e6eda9a9b80e388a38e0ac541cbc3333736233b4eaaab",
                    "hash": "75e9e5212729d9df18a402166b7125a5b0557bd3485d21d61ec146f07309a539",
                    "height": 99,
                    "publicKey": "h3B0rM7qM8ZZzfLwFxfmrEFlO8J4X7dP8j+TDxfEgyc=",
                    "signature": "Fjtf1gSpmyhAYtbK7B8P3aJahxbvzTTpAu/MbUOAtGJscY5IeBDDi8MWpiQEUD7iWOR1Fuk9c/rgUAElxz2UBw==",
                    "seed": 0,
                    "version": 0,
                    "previousHash": "f2fd5242876461a625e18fb26ab48e011a0fa6bf3002796d3417a3a09365f376",
                    "nextSeedHash": null,
                    "snapshotData": null,
                    "timestamp": 1558458874
                }
            ]
        }
        ```

## `ledger_getChunks`
Fetch a number of snapshot blocks with snapshotted account blocks by height range.

- **Parameters**:
    * `startHeight`: `uint64 string` The start height, inclusive.
    * `endHeight`: `uint64 string` The end height, inclusive. Must satisfy $\le StartHeight + 1000$.

- **Returns**:
    * `List<SnapshotChunk>`
        * `SnapshotBlock` See [SnapshotBlock](README.md#snapshotblock)
        * `List<AccountBlock>` See [AccountBlock](README.md#accountblock)

!!! example
    === "Request"
        ```json
        {
            "jsonrpc": "2.0",
            "id": 1,
            "method": "ledger_getChunks",
            "params": [
                "100",
                "101"
            ]
        }
        ```

    === "Response"
        ```json
        {
            "jsonrpc": "2.0",
            "id": 1,
            "result": [
                {
                    "AccountBlocks": null,
                    "SnapshotBlock": {
                        "producer": "vite_c1d11e6eda9a9b80e388a38e0ac541cbc3333736233b4eaaab",
                        "hash": "ca09e12f7a14bce2d22cfe87f557536fd3a4d77d1b3e84e6a46dd0820d9d3c58",
                        "height": 100,
                        "publicKey": "h3B0rM7qM8ZZzfLwFxfmrEFlO8J4X7dP8j+TDxfEgyc=",
                        "signature": "9INk9B3b3ZF3iOCU9mY2RYy0kEpGMSxx/ohiDwPqz9MLOA7R7C4Lo5ioROXV5DdhRhaEm+xca2RApmoM9vfrAA==",
                        "seed": 0,
                        "version": 0,
                        "previousHash": "75e9e5212729d9df18a402166b7125a5b0557bd3485d21d61ec146f07309a539",
                        "nextSeedHash": null,
                        "snapshotData": null,
                        "timestamp": 1558458875
                    }
                },
                {
                    "AccountBlocks": [
                        {
                            "blockType": 2,
                            "hash": "603e64f972960cd886a1dc77308b9a7d127cb462567b1ecd2ef68b4330a6d0c0",
                            "prevHash": "592a1e46ad746fd7d0b12b6e51ad62ffaea42574e494f8ffeab611f11021efc0",
                            "height": 4,
                            "accountAddress": "vite_483eed4ba0b5cd984d480ca048d5ee8ef5fa6b0ae23774c09b",
                            "publicKey": "oDxoxc75R4NnzWb4Vj3P9kmSercIquNzZlPlDnhRN2M=",
                            "toAddress": "vite_0000000000000000000000000000000000000003f6af7459b9",
                            "amount": 1000000000000000000000,
                            "tokenId": "tti_5649544520544f4b454e6e40",
                            "fromBlockHash": "0000000000000000000000000000000000000000000000000000000000000000",
                            "data": "jefc/QAAAAAAAAAAAAAA14lDHx2CBQbIP9U5oK6YY9aWE4IB",
                            "quota": 82000,
                            "fee": 0,
                            "logHash": null,
                            "difficulty": null,
                            "nonce": null,
                            "sendBlockList": [],
                            "signature": "hWfLf7vXqIevTPdu6acc0PVVyNYxGtN9OU73F7Vn8+ZJ5vN6Lo76q1yalt5+OdqDRA4IzlQ8ruTNgvuwT0ooCw=="
                        },
                        {
                            "blockType": 2,
                            "hash": "76840a3fd02e42d3d141d740c68739f5bec13a9acbc5d78e64777e6965df382c",
                            "prevHash": "c28bdd238e71dec3c86110d95f5a4d091ea8573242535d75e212aa1613ce2fc9",
                            "height": 21,
                            "accountAddress": "vite_a78e37a7212980a20c9d9e0c59463f1cb10f344555510a70ff",
                            "publicKey": "HDfU0xOGFVuvdvluB498hPgB8vMbK/ONUQyE3qGb82E=",
                            "toAddress": "vite_a9226a1f7bd6d97950f694c2de815573326528bfe0680495f3",
                            "amount": 0,
                            "tokenId": "tti_5649544520544f4b454e6e40",
                            "fromBlockHash": "0000000000000000000000000000000000000000000000000000000000000000",
                            "data": null,
                            "quota": 0,
                            "fee": 0,
                            "logHash": null,
                            "difficulty": 67108863,
                            "nonce": "Vn6bHNt5P34=",
                            "sendBlockList": [],
                            "signature": "p+Bb5JjLFT8NyZ3grmHZN42n5iZ5Erru8e8l/++UPX60QmG+JbLT946ZNf9tSJxKQhq6J85GmCjnmm+PGHZRBg=="
                        },
                        {
                            "blockType": 4,
                            "hash": "3a92628fdff90bf3b597f7f293f77ed8f722753e6f904475fe2c47f772569ad5",
                            "prevHash": "3fe8600baef2c93b3ac4744c775f4abb956bd5e70cea749bc653501582febdb1",
                            "height": 2,
                            "accountAddress": "vite_a9226a1f7bd6d97950f694c2de815573326528bfe0680495f3",
                            "publicKey": "h8odG95Y8cUuxzTO7Z5UTssVIYxyBi7vEAT5SGdPjCs=",
                            "toAddress": "vite_0000000000000000000000000000000000000000a4f3a0cb58",
                            "amount": null,
                            "tokenId": "tti_000000000000000000004cfd",
                            "fromBlockHash": "76840a3fd02e42d3d141d740c68739f5bec13a9acbc5d78e64777e6965df382c",
                            "data": null,
                            "quota": 0,
                            "fee": 0,
                            "logHash": null,
                            "difficulty": 67108863,
                            "nonce": "smmvZ4YAbt0=",
                            "sendBlockList": [],
                            "signature": "JeI89sAgiuuPKRwDrrtRU+A7zMyNMp82rzfxllB/+r3sGm8rhs0qu6sxMY9a3qtIjo7N0A/rlldJYFTi9ImEDg=="
                        }
                    ],
                    "SnapshotBlock": {
                        "producer": "vite_995769283a01ba8d00258dbb5371c915df59c8657335bfb1b2",
                        "hash": "a5ff0bfb140599d4509ec33b122ff0902b4f528d78b6d95c6805789f4480bba5",
                        "height": 101,
                        "publicKey": "OIlqJYQZ4AEMjdU1qjQDFOeSph5Alnk4tkYE78I+Cg4=",
                        "signature": "F9uB7hr+rgBFLEzjM7Y1DWhXTfn5NueHRwQiojwRraGJ14/OARMSVZME6/v+59P/fcuV5Id2Y/AAUdXGLZQ6BQ==",
                        "seed": 16825645928731316356,
                        "version": 0,
                        "previousHash": "ca09e12f7a14bce2d22cfe87f557536fd3a4d77d1b3e84e6a46dd0820d9d3c58",
                        "nextSeedHash": "5196cce99462b1b80c988b3a787077897d5a517822095db8ce8e98f5f6fe1f90",
                        "snapshotData": {
                            "vite_483eed4ba0b5cd984d480ca048d5ee8ef5fa6b0ae23774c09b": {
                                "height": 4,
                                "hash": "603e64f972960cd886a1dc77308b9a7d127cb462567b1ecd2ef68b4330a6d0c0"
                            },
                            "vite_a78e37a7212980a20c9d9e0c59463f1cb10f344555510a70ff": {
                                "height": 21,
                                "hash": "76840a3fd02e42d3d141d740c68739f5bec13a9acbc5d78e64777e6965df382c"
                            },
                            "vite_a9226a1f7bd6d97950f694c2de815573326528bfe0680495f3": {
                                "height": 2,
                                "hash": "3a92628fdff90bf3b597f7f293f77ed8f722753e6f904475fe2c47f772569ad5"
                            }
                        },
                        "timestamp": 1558458924
                    }
                }
            ]
        }
        ```

## `ledger_getAccountInfoByAddress`
Get account information by address.

- **Parameters**:
    * `address`: `address` The account address.

- **Returns**:
    * [`AccountInfo`](README.md#accountinfo)

!!! example
    === "Request"
        ```json
        {
            "jsonrpc": "2.0",
            "id": 17,
            "method": "ledger_getAccountInfoByAddress",
            "params": [
                "vite_0b573f9d1fca7d830fc0d1552e3ff7b7f44455e38c8218fd10"
            ]
        }
        ```

    === "Response"
        ```json
        {
            "jsonrpc": "2.0",
            "id": 17,
            "result": {
                "address": "vite_0b573f9d1fca7d830fc0d1552e3ff7b7f44455e38c8218fd10",
                "blockCount": "21846",
                "balanceInfoMap": {
                    "tti_5649544520544f4b454e6e40": {
                        "tokenInfo": {
                            "tokenName": "VITE",
                            "tokenSymbol": "VITE",
                            "totalSupply": "1001699224353751966255398604",
                            "decimals": 18,
                            "owner": "vite_0000000000000000000000000000000000000004d28108e76b",
                            "tokenId": "tti_5649544520544f4b454e6e40",
                            "maxSupply": "115792089237316195423570985008687907853269984665640564039457584007913129639935",
                            "ownerBurnOnly": false,
                            "isReIssuable": true,
                            "index": 0,
                            "isOwnerBurnOnly": false
                        },
                        "balance": "0"
                    }
                }
            }
        }
        ```

## `ledger_getLatestSnapshotHash`
Get the current snapshot block hash.

- **Parameters**: none

- **Returns**:
    * `hash` The hash of the current snapshot block.

!!! example
    === "Request"
        ```json
        {
            "jsonrpc": "2.0",
            "id": 17,
            "method": "ledger_getLatestSnapshotHash",
            "params": null
        }
        ```

    === "Response"
        ```json
        {
            "jsonrpc": "2.0",
            "id": 17,
            "result": "d580deefe3ce5ec9340d163543f93130f2e40ccd4546da8246baba6d0dc25d1f"
        }
        ```

## `ledger_sendRawTransaction`
Send a raw transaction.

- **Parameters**:
    * `block`: `AccountBlock` The account block to send.

|  Field  | Type | Description |
|:------------:|:-----------:|:-----:|
| `blockType` |  Mandatory | See [`AccountBlock`](README.md#accountblock) |
| `height` |  Mandatory | See [`AccountBlock`](README.md#accountblock) |
| `hash` |  Mandatory | See [`AccountBlock`](README.md#accountblock) |
| `previousHash` |  Mandatory | See [`AccountBlock`](README.md#accountblock) |
| `address` |  Mandatory | See [`AccountBlock`](README.md#accountblock) |
| `publicKey` |  Mandatory | See [`AccountBlock`](README.md#accountblock) |
| `signature` |  Mandatory | See [`AccountBlock`](README.md#accountblock) |
| `difficulty` |  Mandatory for using PoW | See [`AccountBlock`](README.md#accountblock) |
| `nonce` |  Mandatory for using PoW | See [`AccountBlock`](README.md#accountblock) |
| `sendBlockHash` |  Mandatory for response | See [`AccountBlock`](README.md#accountblock) |
| `toAddress` |  Mandatory for request | See [`AccountBlock`](README.md#accountblock) |
| `tokenId` |  Mandatory for request | See [`AccountBlock`](README.md#accountblock) |
| `amount` |  Mandatory for request | See [`AccountBlock`](README.md#accountblock) |
| `fee` |  Mandatory for request | Use "10000000000000000000" (10 VITE) for deploying a contract. For other cases, use "0" |
| `data` |  Optional | A base64 encoding string used as comment/memo or encoded function call/result of a smart contract |

- **Returns**: none

!!! example
    === "Request"
        ```json
        {
            "jsonrpc": "2.0",
            "id": 17,
            "method": "ledger_sendRawTransaction",
            "params": [{
                "blockType": 2,
                "height": "2",
                "hash": "67f4d528a5194c46d594221d3d992257a3004ccdee7c5d7b2748d77e06a80caf",
                "previousHash": "d517e8d4dc9c676876b72ad0cbb4c45890804aa438edd1f171ffc66276202a95",
                "address": "vite_ab24ef68b84e642c0ddca06beec81c9acb1977bbd7da27a87a",
                "publicKey": "WHZinxslscE+WaIqrUjGu2scOvorgD4Q+DQOOcDBv4M=",
                "toAddress": "vite_0000000000000000000000000000000000000003f6af7459b9",
                "sendBlockHash": "0000000000000000000000000000000000000000000000000000000000000000",
                "tokenId": "tti_5649544520544f4b454e6e40",
                "amount": "1000000000000000000000000",
                "fee": "0",
                "data": "jefc/QAAAAAAAAAAAAAAqyTvaLhOZCwN3KBr7sgcmssZd7sA",
                "signature": "F5VzYwsNSr6ex2sl9hDaX67kP9g4TewMWcw7Tp57VkE1LQZO0i1toYEsXJ3MgcZdsvP67EymXXn1wpwhxnS3CQ=="
            }]
        }
        ```

    === "Response"
        ```json
        {
            "jsonrpc": "2.0",
            "id": 17,
            "result": null
        }
        ```

## `ledger_getUnreceivedBlocksByAddress`
Fetch a number of unreceived blocks by address.

- **Parameters**:
    * `address`: `address` The account address.
    * `pageIndex`: `uint64` The page index, starting from 0.
    * `pageSize`: `uint64` The page size. Maximum 1000.

- **Returns**:
    * `List<AccountBlock>` See [AccountBlock](README.md#accountblock) for details.

!!! example
    === "Request"
        ```json
        {
            "jsonrpc": "2.0",
            "id": 2,
            "method": "ledger_getUnreceivedBlocksByAddress",
            "params": [
                "vite_0b573f9d1fca7d830fc0d1552e3ff7b7f44455e38c8218fd10",
                0, 
                1
            ]
        }
        ```

    === "Response"
        ```json
        {
            "jsonrpc": "2.0",
            "id": 2,
            "result": [
                {
                    "blockType": 2,
                    "height": "556",
                    "hash": "12ec1d40a6c7560ba77b3764977c609189299dcf63d6586b50374714d0b8e013",
                    "previousHash": "9a6c20d7d7fc927d89de6d9991a7904330007751f9d7d24dec141cbdb8b9e5ef",
                    "address": "vite_f74d18fc6431cb9d813c62a47a9063c4b9488219dc22c2736d",
                    "publicKey": "yNr85NJpkjKoaobFuWwIcoIdQR+ZRPrG5myrBhGxG5Q=",
                    "producer": "vite_f74d18fc6431cb9d813c62a47a9063c4b9488219dc22c2736d",
                    "fromAddress": "vite_f74d18fc6431cb9d813c62a47a9063c4b9488219dc22c2736d",
                    "toAddress": "vite_0b573f9d1fca7d830fc0d1552e3ff7b7f44455e38c8218fd10",
                    "sendBlockHash": "0000000000000000000000000000000000000000000000000000000000000000",
                    "tokenId": "tti_5649544520544f4b454e6e40",
                    "amount": "16000000000000000000",
                    "fee": "0",
                    "data": "9HgjCQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABvBbWdOyAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAG8FtZ07IAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAbwW1nTsgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABvBbWdOyAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAG8FtZ07IAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAbwW1nTsgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABvBbWdOyAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAG8FtZ07IAAA=",
                    "difficulty": "124419654",
                    "nonce": "QxyYTRkNbco=",
                    "signature": "sgcYMzD3L0KsEOeA9DckCPcOHeC7tTjiJdEcjS97guMKkOqHznnZ1naWkmDFJrtaNij1weRWMZ/27Y4rYc/DAw==",
                    "quotaByStake": "0",
                    "totalQuota": "38680",
                    "vmLogHash": null,
                    "triggeredSendBlockList": null,
                    "tokenInfo": {
                        "tokenName": "VITE",
                        "tokenSymbol": "VITE",
                        "totalSupply": "1001186579383872099206960787",
                        "decimals": 18,
                        "owner": "vite_0000000000000000000000000000000000000004d28108e76b",
                        "tokenId": "tti_5649544520544f4b454e6e40",
                        "maxSupply": "115792089237316195423570985008687907853269984665640564039457584007913129639935",
                        "ownerBurnOnly": false,
                        "isReIssuable": true,
                        "index": 0,
                        "isOwnerBurnOnly": false
                    },
                    "confirmations": "5345754",
                    "firstSnapshotHash": "ab88339a58d481a3b132f5c3c69ba14ab5b31d77b8860985b17951e990e190b4",
                    "receiveBlockHeight": null,
                    "receiveBlockHash": null,
                    "timestamp": 1562219525
                }
            ]
        }
        ```

## `ledger_getUnreceivedBlocksInBatch`
Fetch unreceived blocks in batch.

- **Parameters**: `Array<PagingQueryBatch>`
    * `address`: `address` The account address.
    * `pageIndex`: `uint64` The page index, starting from 0.
    * `pageSize`: `uint64` The page size. Maximum 1000.

- **Returns**:
    * `map<Address, List<AccountBlock>>` See [AccountBlock](README.md#accountblock) for details.

!!! example
    === "Request"
        ```json
        {
            "jsonrpc": "2.0",
            "id": 2,
            "method": "ledger_getUnreceivedBlocksInBatch",
            "params": [
                [
                    {
                        "address": "vite_00000000000000000000000000000000000000042d7ef71894",
                        "pageNumber": 0,
                        "pageCount": 1
                    },
                    {
                        "address": "vite_68c5edf9069efe327e01e925790d868c7f7972d815016cf18a",
                        "pageNumber": 0,
                        "pageCount": 1
                    }
                ]
            ]
        }
        ```

    === "Response"
        ```json
        {
            "jsonrpc": "2.0",
            "id": 2,
            "result": {
                "vite_68c5edf9069efe327e01e925790d868c7f7972d815016cf18a": [
                    {
                        "blockType": 2,
                        "height": "170",
                        "hash": "81a9a5e2747e28584db752a814bde0ee8894604df3707a9067e13f8297a090d5",
                        "previousHash": "55e7088d3405aebed75c9e311303f52bbbc1827b11d86fd7840406e4f4bc42f8",
                        "address": "vite_ba2ae946be1f56a8c83ce3e1d80a53d8137c264684d5dd7610",
                        "publicKey": "u7OxKqv0EqysClekERWf8FK3NgsEVnS6dq0Cu53en4o=",
                        "producer": "vite_ba2ae946be1f56a8c83ce3e1d80a53d8137c264684d5dd7610",
                        "fromAddress": "vite_ba2ae946be1f56a8c83ce3e1d80a53d8137c264684d5dd7610",
                        "toAddress": "vite_68c5edf9069efe327e01e925790d868c7f7972d815016cf18a",
                        "sendBlockHash": "0000000000000000000000000000000000000000000000000000000000000000",
                        "tokenId": "tti_5649544520544f4b454e6e40",
                        "amount": "0",
                        "fee": "0",
                        "data": "6SXjDQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAbwW1nTsgAAA",
                        "difficulty": null,
                        "nonce": null,
                        "signature": "8qNYBI2+rQOH6LmS+Skl5/lXCLaW3bZHVGfS8IFraol5LiGuukmjfzsiNGQTDpB7MN006K9VcCGE05eZKeyVAg==",
                        "quotaByStake": "23448",
                        "totalQuota": "23448",
                        "vmLogHash": null,
                        "triggeredSendBlockList": null,
                        "tokenInfo": {
                            "tokenName": "VITE",
                            "tokenSymbol": "VITE",
                            "totalSupply": "1001186579383872099206960787",
                            "decimals": 18,
                            "owner": "vite_0000000000000000000000000000000000000004d28108e76b",
                            "tokenId": "tti_5649544520544f4b454e6e40",
                            "maxSupply": "115792089237316195423570985008687907853269984665640564039457584007913129639935",
                            "ownerBurnOnly": false,
                            "isReIssuable": true,
                            "index": 0,
                            "isOwnerBurnOnly": false
                        },
                        "confirmations": "5257692",
                        "firstSnapshotHash": "9c9a436d1d8b06c8a9955955890877b40c5e493c4054f59d36a3bfabf315772f",
                        "receiveBlockHeight": null,
                        "receiveBlockHash": null,
                        "timestamp": 1562309573
                    }
                ]
            }
        }
        ```

## `ledger_getUnreceivedTransactionSummaryByAddress`
Get unreceived transaction summary by address.

- **Parameters**:
    * `address`: `address` The account address.

- **Returns**:
    * [`AccountInfo`](README.md#accountinfo)

!!! example
    === "Request"
        ```json
        {
            "jsonrpc": "2.0",
            "id": 2,
            "method": "ledger_getUnreceivedTransactionSummaryByAddress",
            "params": [
                "vite_0b573f9d1fca7d830fc0d1552e3ff7b7f44455e38c8218fd10"
            ]
        }
        ```

    === "Response"
        ```json
        {
            "jsonrpc": "2.0",
            "id": 2,
            "result": {
                "address": "vite_0b573f9d1fca7d830fc0d1552e3ff7b7f44455e38c8218fd10",
                "blockCount": "6",
                "balanceInfoMap": {
                    "tti_5649544520544f4b454e6e40": {
                        "tokenInfo": {
                            "tokenName": "VITE",
                            "tokenSymbol": "VITE",
                            "totalSupply": "1001186579383872099206960787",
                            "decimals": 18,
                            "owner": "vite_0000000000000000000000000000000000000004d28108e76b",
                            "tokenId": "tti_5649544520544f4b454e6e40",
                            "maxSupply": "115792089237316195423570985008687907853269984665640564039457584007913129639935",
                            "ownerBurnOnly": false,
                            "isReIssuable": true,
                            "index": 0,
                            "isOwnerBurnOnly": false
                        },
                        "balance": "96000000000000000000",
                        "transactionCount": "6"
                    }
                }
            }
        }
        ```

## `ledger_getUnreceivedTransactionSummaryInBatch`
Get unreceived transaction summary in batch.

- **Parameters**:
    * `addressList`: `Array<address>` An array of account addresses.

- **Returns**:
    * `Array<AccountInfo>` See [AccountInfo](README.md#accountinfo) for details.

!!! example
    === "Request"
        ```json
        {
            "jsonrpc": "2.0",
            "id": 2,
            "method": "ledger_getUnreceivedTransactionSummaryInBatch",
            "params": [
                [
                    "vite_0b573f9d1fca7d830fc0d1552e3ff7b7f44455e38c8218fd10",
                    "vite_68c5edf9069efe327e01e925790d868c7f7972d815016cf18a"
                ]
            ]
        }
        ```

    === "Response"
        ```json
        {
            "jsonrpc": "2.0",
            "id": 2,
            "result": [
                {
                    "address": "vite_0b573f9d1fca7d830fc0d1552e3ff7b7f44455e38c8218fd10",
                    "blockCount": "6",
                    "balanceInfoMap": {
                        "tti_5649544520544f4b454e6e40": {
                            "tokenInfo": {
                                "tokenName": "VITE",
                                "tokenSymbol": "VITE",
                                "totalSupply": "1001186579383872099206960787",
                                "decimals": 18,
                                "owner": "vite_0000000000000000000000000000000000000004d28108e76b",
                                "tokenId": "tti_5649544520544f4b454e6e40",
                                "maxSupply": "115792089237316195423570985008687907853269984665640564039457584007913129639935",
                                "ownerBurnOnly": false,
                                "isReIssuable": true,
                                "index": 0,
                                "isOwnerBurnOnly": false
                            },
                            "balance": "96000000000000000000",
                            "transactionCount": "6"
                        }
                    }
                },
                {
                    "address": "vite_68c5edf9069efe327e01e925790d868c7f7972d815016cf18a",
                    "blockCount": "1",
                    "balanceInfoMap": {
                        "tti_5649544520544f4b454e6e40": {
                            "tokenInfo": {
                                "tokenName": "VITE",
                                "tokenSymbol": "VITE",
                                "totalSupply": "1001186579383872099206960787",
                                "decimals": 18,
                                "owner": "vite_0000000000000000000000000000000000000004d28108e76b",
                                "tokenId": "tti_5649544520544f4b454e6e40",
                                "maxSupply": "115792089237316195423570985008687907853269984665640564039457584007913129639935",
                                "ownerBurnOnly": false,
                                "isReIssuable": true,
                                "index": 0,
                                "isOwnerBurnOnly": false
                            },
                            "balance": "0",
                            "transactionCount": "1"
                        }
                    }
                }
            ]
        }
        ```

## `ledger_getVmLogs`
Get event logs by account block hash.

- **Parameters**:
    * `blockHash`: `hash` The hash of the account block.

- **Returns**:
    * `Array<VmLog>` See [VmLog](README.md#vmlog) for details.

!!! example
    === "Request"
        ```json
        {
            "jsonrpc": "2.0",
            "id": 17,
            "method": "ledger_getVmLogs",
            "params": [
                "5a78365f4f7e9c29d57c8f087c9691bfff63a4889cde5d03a89cb24d34abbdf3"
            ]
        }
        ```

    === "Response"
        ```json
        {
            "jsonrpc": "2.0",
            "id": 17,
            "result": [
                {
                    "topics": [
                        "00d73e74672366b05e8980c144e4c523f171cee9fcae60041d97ae1f540a4de5",
                        "0000000000000000000000f74d18fc6431cb9d813c62a47a9063c4b948821900"
                    ],
                    "data": "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABoFVpDZ24AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=="
                }
            ]
        }
        ```

## `ledger_getVmLogListByHash`
Get event logs by log hash.

- **Parameters**:
    * `logHash`: `hash` The log hash.

- **Returns**:
    * `Array<VmLog>` See [VmLog](README.md#vmlog) for details.

!!! example
    === "Request"
        ```json
        {
            "jsonrpc": "2.0",
            "id": 17,
            "method": "ledger_getVmLogListByHash",
            "params": [
                "56d05270b0d62a8dac3a01908177ed6e47899eced76bc9fa7716e808d6068705"
            ]
        }
        ```

    === "Response"
        ```json
        {
            "jsonrpc": "2.0",
            "id": 17,
            "result": [
                {
                    "topics": [
                        "00d73e74672366b05e8980c144e4c523f171cee9fcae60041d97ae1f540a4de5",
                        "0000000000000000000000f74d18fc6431cb9d813c62a47a9063c4b948821900"
                    ],
                    "data": "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABoFVpDZ24AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=="
                }
            ]
        }
        ```

## `ledger_getVmLogsByFilter`
Get event logs by account address, account block height range, and topics.

- **Parameters**: `FilterParam`
    * `addressHeightRange`: `map[address]Range` A map of contract address and height range. At least one address must be specified.
        * `fromHeight`: `uint64 string` The start height. `0` means starting from the latest account block.
        * `toHeight`: `uint64 string` The end height. `0` means fetching till the latest account block (no ending height).
    * `topics`: `<Array<Array<hash>>` Event topics, optional. See [here](subscribe.md#topics) for details.
    * `pageIndex`: `uint64` The page index.
    * `pageSize`: `uint64` The page size. Maximum 1000.

- **Returns**:
    * `Array<Logs>` See [Logs](README.md#logs) for details.

!!! example
    === "Request"
        ```json
        {
            "jsonrpc": "2.0",
            "id": 1,
            "method": "ledger_getVmLogsByFilter",
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
            "result": [
                {
                    "vmlog": {
                        "topics": [
                            "1d8e14596183a6d73bc8760a43cdaf6992e6cb318cecec67f4b6bcb31fe039d5",
                            "91ac0b2bf8c6dc8d37d0bc48a0eacaf6a7ed5bec9be59086116c6f23eca8aaf0"
                        ],
                        "data": null
                    },
                    "accountBlockHash": "24d9700990ce9a503736b0a0504bbabf6e36c0228ef73c06344089a630971f02",
                    "accountBlockHeight": "1",
                    "address": "vite_79ac3daebdfed6947c0aaeacd418eadf38a94dddefbd4acec1"
                },
                {
                    "vmlog": {
                        "topics": [
                            "360bba44e4490fae37d6444482aa67cf5ec7418850531522450c3805b8e5425c",
                            "3adaf70d6a60eba6aaa6a1884c382ae32b223557ccaa2f3fcab6aec6c2fca21f"
                        ],
                        "data": null
                    },
                    "accountBlockHash": "24d9700990ce9a503736b0a0504bbabf6e36c0228ef73c06344089a630971f02",
                    "accountBlockHeight": "1",
                    "address": "vite_79ac3daebdfed6947c0aaeacd418eadf38a94dddefbd4acec1"
                }
            ]
        }
        ```

## `ledger_getPoWDifficulty`
Get PoW difficulty for sending the transaction.

> Note: This method will calculate the required amount of quota according to transaction parameters and check whether the account has enough quota. If not, it returns the difficulty for the transaction; otherwise, it returns an empty string.

!!! warning
    Can NOT use PoW twice in one snapshot block!
    
    If the method returns with an error, it is usually because the transaction data is too long, or the transaction cannot obtain quota through PoW. 
    For example, if PoW was once used for a previous transaction, the account is not allowed to use PoW twice within the same snapshot block.

- **Parameters**: `GetPoWDifficultyParams`
    * `address`: `address` The address of the account.
    * `previousHash`: `hash` The hash of the previous account block.
    * `blockType`: `byte` The block type.
    * `toAddress`: `address` The address of the recipient, required for request transactions.
    * `data`: `base64` Additional block data.

- **Returns**: `GetPoWDifficultyResult`
    * `requiredQuota`: `uint64 string` The raw quota required for sending the transaction.
    * `difficulty`: `bigint string` The PoW difficulty. Returns an empty string if sending the transaction does not need PoW.
    * `qc`: `bigint string` The congestion factor, in 18 decimals.
    * `isCongestion`: `bool` `true` means sending the transaction will consume more quota.

!!! example
    === "Request"
        ```json
        {
            "jsonrpc": "2.0",
            "id": 1,
            "method": "ledger_getPoWDifficulty",
            "params": [
                {
                    "address": "vite_ab24ef68b84e642c0ddca06beec81c9acb1977bbd7da27a87a",
                    "previousHash": "7b5dcb470889997100e0e09cd292d221ad1c11bb0daf8b9fa39a2d1f90210aa0",
                    "blockType": 2,
                    "toAddress": "vite_0000000000000000000000000000000000000004d28108e76b",
                    "data": "8pxs4gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGAAAAAAAAAAAAAAAAAICy1ooG9SwPu0VPZ17lQ1+3hyUgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFc3VwZXIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=",
                }
            ]
        }
        ```

    === "Response"
        ```json
        {
            "jsonrpc": "2.0",
            "id": 1,
            "result": {
                "requiredQuota": 32152,
                "difficulty": "102920708",
                "qc": "1000000000000000000",
                "isCongestion": false
            }
        }
        ```

## `ledger_getRequiredQuota`
Calculate the quota required for sending the transaction.

- **Parameters**: `GetPoWDifficultyParams`
    * `address`: `address` The address of the account.
    * `previousHash`: `hash` The hash of the previous account block.
    * `blockType`: `byte` The block type.
    * `toAddress`: `address` The address of the recipient, required for request transactions.
    * `data`: `base64` Additional block data.

- **Returns**:
    * `requiredQuota`: `uint64 string` The raw quota required for sending the transaction.

!!! example
    === "Request"
        ```json
        {
            "jsonrpc": "2.0",
            "id": 1,
            "method": "ledger_getPoWDifficulty",
            "params": [
                {
                    "address": "vite_ab24ef68b84e642c0ddca06beec81c9acb1977bbd7da27a87a",
                    "previousHash": "7b5dcb470889997100e0e09cd292d221ad1c11bb0daf8b9fa39a2d1f90210aa0",
                    "blockType": 2,
                    "toAddress": "vite_0000000000000000000000000000000000000004d28108e76b",
                    "data": "8pxs4gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGAAAAAAAAAAAAAAAAAICy1ooG9SwPu0VPZ17lQ1+3hyUgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFc3VwZXIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=",
                }
            ]
        }
        ```

    === "Response"
        ```json
        {
            "jsonrpc": "2.0",
            "id": 1,
            "result": {
                "requiredQuota": "168000"
            }
        }
        ```

## `ledger_getSeed`
Get a random seed in the snapshot block according to the seed hash.

- **Parameters**:
    * `snapshotHash`: `hash` The snapshot block hash.
    * `seedHash`: `hash` The seed hash.

- **Returns**:
    * `uint64` The random seed contained in the snapshot block.

!!! example
    === "Request"
        ```json
        {
            "jsonrpc": "2.0",
            "id": 0,
            "method": "ledger_getSeed",
            "params": [
                "c072c35dcf8a677f0e12c595c8e947b1635b5990ae95433bb693675d4a6ca2e0",
                "8d9f30cdc6cd3f36faf473337c66049035345b0f2c27a8689796db3ce15b00bf"
            ]
        }
        ```

    === "Response"
        ```json
        {
            "jsonrpc": "2.0",
            "id": 0,
            "result": 10204928941006602038
        }
        ```

