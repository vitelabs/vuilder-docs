---
order: 2
title: RPC API
---

# Contract API

!!! tip
    To enable the Contract RPC API on the node, add the "contract" namespace in "PublicModules" in node_config.json

## `contract_createContractAddress`

Create a new contract address

- **Parameters**: 
    * `address`: `address`  Account address
    * `height`: `uint64 string`  Height of the account block
    * `previousHash`: `hash`  Hash of the previous account block

- **Returns**: 
    - `address`  New contract address

!!! example
    === "Request"
        ```json
        {
            "jsonrpc": "2.0",
            "id": 1,
            "method": "contract_createContractAddress",
            "params": [
                "vite_a5a7f08011c2f0e40ccd41b5b79afbfb818d565f566002d3c6",
                "2",
                "3a56babeb0a8140b12ac55e91d2e05c41f908ebe99767b0e4aa5cd7af22d6de7"
            ]
        }
        ```
    === "Response"
        ```json
        {
            "jsonrpc": "2.0",
            "id": 1,
            "result": "vite_96a7911037179451bada2ab05ee070ba83dcfa2fac2ad6d770"
        }
        ```

## `contract_getContractInfo`
Get contract information by address

- **Parameters**: 
    * `address`: `address`  Address of the contract
  
- **Returns**: `ContractInfo`
    - `code`: `base64`  Binary code of the contract
    - `gid`: `gid`  Consensus group id. Default is `00000000000000000002`
    - `responseLatency`: `uint8`  [Response latency](../../vite-basics/smart-contract.md#response-latency)
    - `randomDegree`: `uint8` [Random degree](../../vite-basics/smart-contract.md#random-degrees)
    - `quotaMultiplier`: `uint8` [Quota multiplier](../../vite-basics/smart-contract.md#quota-multiplier)

!!! example
    === "Request"
        ```json
        {
            "jsonrpc": "2.0",
            "id": 1,
            "method": "contract_getContractInfo",
            "params": ["vite_22f4f195b6b0f899ea263241a377dbcb86befb8075f93eeac8"]
        }
        ```
    === "Response"        
        ```json
        {
            "jsonrpc": "2.0",
            "id": 1,
            "result": {
                "code": "AWCAYEBSYAQ2EGEAQVdgADV8AQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACQBGP/////FoBjkabLSxRhAEZXW2AAgP1bYQCJYASANgNgIIEQFWEAXFdgAID9W4EBkICANXT///////////////////////////8WkGAgAZCSkZBQUFBhAItWWwBbgHT///////////////////////////8WRmn/////////////FjRgQFFgQFGAggOQg4WH8VBQUFCAdP///////////////////////////xZ/qmUoH130tL08cfK6JZBbkHIF/OCAmoFu+OBLTUlqhbs0YEBRgIKBUmAgAZFQUGBAUYCRA5CiUFb+oWVienpyMFgg5BEYZploBADsJutGp1y0+UwegyI5VjOkuA+v2lg7JFoAKQ==",
                "gid": "00000000000000000002",
                "responseLatency": 2,
                "randomDegree": 1,
                "quotaMultiplier": 10
            }
        }
        ```

## `contract_callOffChainMethod`

Call an offchain method in Solidity++ 0.4

- **Parameters**: `CallOffChainMethodParam`
    * `address`:`address` Contract address
    * `code`:`base64` Binary code of the offchain method
    * `data`:`base64` Encoded arguments
    
- **Returns**: 
    - `base64` Encoded calling result in base64 format
  
> Note: Offchain method has been replaced by view functions in Solidity++ 0.8

!!! example
    === "Request"
        ```json
        {
            "jsonrpc": "2.0",
            "id": 1,
            "method": "contract_callOffChainMethod",
            "params": [{
            "address": "vite_22f4f195b6b0f899ea263241a377dbcb86befb8075f93eeac8",
            "code": "YIBgQFJgBDYQYEJXYAA1fAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkARj/////xaAY8GjSGUUYERXYEJWWwBbYEpgYFZbYEBRgIKBUmAgAZFQUGBAUYCRA5DzW2AAYABgAFBUkFBgblZbkFb+oWVienpyMFggSaCBXUGf/Mh5lfHDLvGQt9g3K+aLjE2PrRxcLb6RSWQAKQ==",
            "data": "waNIZQ=="
            }]
        }
        ```
    === "Response"
        ```json
        {
            "jsonrpc": "2.0",
            "id": 1,
            "result": "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA="
        }
        ```

## `contract_query`

Call a view function in Solidity++ 0.8

- **Parameters**: `QueryParam`
    * `address`:`address`  Contract address
    * `data`:`base64`  Encoded arguments
    
- **Returns**: 
    - `base64`  Encoded calling result in base64 string

!!! example
    === "Request"
        ```json
        {
            "jsonrpc": "2.0",
            "id": 1,
            "method": "contract_query",
            "params": [{
            "address": "vite_22f4f195b6b0f899ea263241a377dbcb86befb8075f93eeac8",
            "data": "waNIZQ=="
            }]
        }
        ```
    === "Response"
        ```json
        {
            "jsonrpc": "2.0",
            "id": 1,
            "result": "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA="
        }
        ```


## `contract_getContractStorage`

Query for a contract's states by search key

- **Parameters**: 
    * `addr`: `address`  Address of the contract
    * `prefix`: `hex`  Search key or prefix of the search key of the state. An empty string means to fetch all states.
    
- **Returns**: 
    - `map<hex, hex>`  Map of key-state in hex format

!!! example
    === "Request"
        ```json
        {
            "jsonrpc": "2.0",
            "id": 0,
            "method": "contract_getContractStorage",
            "params": ["vite_8cf2663cc949442db2d3f78f372621733292d1fb0b846f1651","ffe6859e"]
        }
        ```
    === "Response"
        ```json
        {
            "jsonrpc": "2.0",
            "id": 0,
            "result": {
                "ffe6859e4c369fdb232c625fc49ab073dc558f710b2b46f15e2387418b70b2c5": "10a160f67e2e49af69dbe44e1836a68eaf63942000",
                "ffe6859e4c369fdb232c625fc49ab073dc558f710b2b46f15e2387418b70b2c6": "057dc3fa",
                "ffe6859e4c369fdb232c625fc49ab073dc558f710b2b46f15e2387418b70b2c7": "021e19e0c9bab2400000"
            }
        }
        ```

## `contract_getQuotaByAccount`
Get the quota of an account. The returned result is in raw quota.

- **Parameters**: 
    * `addr`: `address`  Address of the account

- **Returns**: `QuotaInfo`
    - `currentQuota`: `uint64 string`  Account's available quota
    - `maxQuota`: `uint64 string`  Account's maximum quota. It refers to the maximum quota the account can use in an [Epoch](../../vite-basics/quota/quota.md#epoch)
    - `stakeAmount`: `bigint string`  Amount of VITE coins staked for the account
  
!!! example
    === "Request"
        ```json
        {
            "jsonrpc": "2.0",
            "id": 1,
            "method": "contract_getQuotaByAccount",
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
            "result": {
                "currentQuota": "1554000",
                "maxQuota": "1575000",
                "stakeAmount": "10000000000000000000000"
            }
        }
        ```

## `contract_getStakeList`
Get the staking records of an account. The returned result is in ascending order by expiration height

> Note: This method does not return legacy delegated staking records. To get an old delegated staking record, use [`contract_getDelegatedStakeInfo`](#contract-getdelegatedstakeinfo)

- **Parameters**: 
    * `address`: `address`  Address of the account
    * `pageIndex`: `int`  Page index, starting with 0
    * `pageSize`: `int`  Page size. Maximum 1000.

- **Returns**: `StakeInfoList`
    - `totalStakeAmount`: `bigint string`  Total staking amount
    - `totalStakeCount`: `int`  Total staking records
    - `stakeList`: `Array<StakeInfo>`
        - `stakeAddress`: `address`  Address of the staking account
        - `stakeAmount`: `bigint string`  Staking amount
        - `expirationHeight`: `uint64 string`  Lock-up expiration height
        - `beneficiary`: `address`  Quota beneficiary
        - `expirationTime`: `int64`  Estimated lock-up expiration time. In seconds.
        - `id`: `hash` [Staking Id](built-in-contracts/quota.md#staking-id). For legacy staking, this field is null.
        - `isDelegated`: `bool`  Deprecated. Returns false for all records
        - `delegateAddress`: `address`  Deprecated. Returns "vite_0000000000000000000000000000000000000000a4f3a0cb58" (zero address) for all records
        - `bid`: `uint8`  Deprecated. Returns 0 for all records
      
> Note: `isDelegated`, `delegateAddress` and `bid` are deprecated
    
!!! example
    === "Request"
        ```json
        {
            "jsonrpc": "1.0",
            "id": 1,
            "method": "contract_getStakeList",
            "params": [
                "vite_ab24ef68b84e642c0ddca06beec81c9acb1977bbd7da27a87a",
                0,
                10
            ]
        }
        ```
    === "Response"
        ```json
        {
            "jsonrpc": "2.0",
            "id": 1,
            "result": {
                "totalStakeAmount": "1000000000000000000000",
                "totalStakeCount": 1,
                "stakeList": [
                    {
                        "stakeAmount": "1000000000000000000000",
                        "beneficiary": "vite_bd756f144d6aba40262c0d3f282b521779378f329198b591c3",
                        "expirationHeight": "1360",
                        "expirationTime": 1567490923,
                        "isDelegated": false,
                        "delegateAddress": "vite_0000000000000000000000000000000000000000a4f3a0cb58",
                        "stakeAddress": "vite_ab24ef68b84e642c0ddca06beec81c9acb1977bbd7da27a87a",
                        "bid": 0,
                        "id": "349ec3cec028b9768b05d75a384402dfbd790d406b1d2e54841f5bd3b8bdbf67"
                    }
                ]
            }
        }
        ```

## `contract_getRequiredStakeAmount`
Calculate the minimum required staking amount of Vite coins in order to obtain the quota

- **Parameters**: 
    * `uint64 string`: Per-second raw quota supply. For example, in order to send a transaction that consumes 21,000 raw quota, a minimum of 280 (=21000/75) raw quota supply for every second in an epoch is required

- **Returns**: 
    - `string bigint`: Minimum staking amount
    
!!! example
    === "Request"
        ```json
        {
            "jsonrpc": "2.0",
            "id": 1,
            "method": "contract_getRequiredStakeAmount",
            "params": [
                "280"
            ]
        }
        ```
    === "Response"
        ```json
        {
            "jsonrpc": "2.0",
            "id": 1,
            "result": "134000000000000000000"
        }
        ```

## `contract_getDelegatedStakeInfo`
Get a legacy delegated staking record. 

> Note: Delegated staking is deprecated

- **Parameters**: `StakeQueryParams`
    * `stakeAddress`: `address`  Original staking address
    * `delegateAddress`: `address`  Delegate address. This often is the contract address that stakes on behalf of the original address
    * `beneficiary`: `address`  Quota beneficiary
    * `bid`: `uint8`   Business id, used to mark different staking purposes.

- **Returns**: `StakeInfo`
    - `stakeAddress`: `address`  Address of the staking account
    - `stakeAmount`: `bigint string`  Staking amount
    - `expirationHeight`: `uint64 string`  Lock-up expiration height
    - `beneficiary`: `address`  Quota beneficiary
    - `expirationTime`: `int64`  Estimated lock-up expiration time. In seconds.
    - `id`: `hash`  For delegated staking, the staking id is null.
    - `isDelegated`: `bool`  `true` means it is delegated staking  
    - `delegateAddress`: `address`  Delegate address
    - `bid`: `uint8`  Business id
    
!!! example
    === "Request"
        ```json
        {
            "jsonrpc": "2.0",
            "id": 17,
            "method": "contract_getDelegatedStakeInfo",
            "params": [
                {
                    "stakeAddress": "vite_56d8bd5c897ebd7e606c23b392d4a336222dd908437565a43c",
                    "delegateAddress": "vite_0000000000000000000000000000000000000006e82b8ba657",
                    "beneficiary": "vite_0000000000000000000000000000000000000006e82b8ba657",
                    "bid": 1
                }
            ]
        }
        ```
    === "Response"
        ```json
        {
            "jsonrpc": "2.0",
            "id": 17,
            "result": {
                "stakeAmount": "502000000000000000000",
                "beneficiary": "vite_0000000000000000000000000000000000000006e82b8ba657",
                "expirationHeight": "9503969",
                "expirationTime": 1570194042,
                "isDelegated": true,
                "delegateAddress": "vite_0000000000000000000000000000000000000006e82b8ba657",
                "stakeAddress": "vite_56d8bd5c897ebd7e606c23b392d4a336222dd908437565a43c",
                "bid": 1,
                "id": null
            }
        }
        ```

## `contract_getSBPList`
Get all SBPs registered by address. The returned result also includes the ones that have been cancelled in history

- **Parameters**: 
    * `address`: `address`  SBP registration address

- **Returns**: `Array<SBPInfo>`
    - `name`: `string`  SBP name
    - `blockProducingAddress`: `address`  Block creation address
    - `rewardWithdrawAddress`: `address`  Reward withdrawal address
    - `stakeAddress`: `address`  Registration address
    - `stakeAmount`: `bigint string`  Staking amount. In the mainnet, it is 1 million VITE.
    - `expirationHeight`: `uint64 string`  Lock-up expiration height
    - `expirationTime`: `int64`  Estimated lock-up expiration time. In seconds.
    - `revokeTime`: `int64`  The timestamp when the SBP was canceled. For valid SBP this field is 0.

!!! example
    === "Request"
        ```json
        {
            "jsonrpc": "2.0",
            "id": 1,
            "method": "contract_getSBPList",
            "params": [
                "vite_e41be57d38c796984952fad618a9bc91637329b5255cb18906"
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
                    "name": "s1",
                    "blockProducingAddress": "vite_e41be57d38c796984952fad618a9bc91637329b5255cb18906",
                    "rewardWithdrawAddress": "vite_e41be57d38c796984952fad618a9bc91637329b5255cb18906",
                    "stakeAddress": "vite_e41be57d38c796984952fad618a9bc91637329b5255cb18906",
                    "stakeAmount": "1000000000000000000000000",
                    "expirationHeight": "7776000",
                    "expirationTime": 1575266076,
                    "revokeTime": 0
                }
            ]
        }
        ```

## `contract_getSBPRewardPendingWithdrawal`
Query for an SBP's unclaimed rewards

- **Parameters**: 
    * `name`: `string`  SBP name

- **Returns**: `SBPReward`
    - `totalReward`: `bigint string`  Total unclaimed rewards
    - `blockProducingReward`: `bigint string`  Block creation rewards
    - `votingReward`: `bigint string`  Candidate additional rewards (voting rewards)
    - `producedBlocks`: `uint64 string`  Not implemented. Returns "0"
    - `targetBlocks`: `uint64 string`  Not implemented. Returns "0"
    - `allRewardWithdrawed`: `bool`  `true` means the SBP has been cancelled and there is no unclaimed rewards left

!!! example
    === "Request"
        ```json
        {
            "jsonrpc": "2.0",
            "id": 1,
            "method": "contract_getSBPRewardPendingWithdrawal",
            "params": [
                "s1"
            ]
        }
        ```
    === "Response"
        ```json
        {
            "jsonrpc": "2.0",
            "id": 1,
            "result": {
                "blockProducingReward": "1499714611872146118517",
                "votingReward": "746306845207209076970",
                "totalReward": "2246021457079355195487",
                "producedBlocks": "0",
                "targetBlocks": "0",
                "allRewardWithdrawed": false
            }
        }
        ```

## `contract_getSBPRewardByTimestamp`
Query for all SBP rewards according to the cycle of the timestamp. The method maps the given timestamp to the cycle and returns the SBP rewards generated in the cycle. 

- **Parameters**: 
    * `timestamp`: `int64`  Timestamp. In seconds

- **Returns**: `SBPRewardInfo` 
    - `rewardMap`: `map<string, SBPReward>`
        - `totalReward`: `bigint string`  Total rewards
        - `blockProducingReward`: `bigint string`  Block creation rewards
        - `votingReward`: `bigint string`  Candidate additional rewards (voting rewards)
        - `producedBlocks`: `uint64 string`  Actual blocks produced in the cycle
        - `targetBlocks`: `uint64 string`  Blocks should be produced in the cycle
    - `startTime`: `int64`  Cycle start time. In seconds
    - `endTime`: `int64`  Cycle end time. In seconds
    - `cycle`: `uint64 string`  Cycle index

!!! example
    === "Request"
        ```json
        {
            "jsonrpc": "2.0",
            "id": 1,
            "method": "contract_getSBPRewardByTimestamp",
            "params": [
                1567440000
            ]
        }
        ```
    === "Response"
        ```json
        {
            "jsonrpc": "2.0",
            "id": 1,
            "result": {
                "rewardMap": {
                    "s1": {
                        "blockProducingReward": "1499714611872146118517",
                        "votingReward": "746306845207209076970",
                        "totalReward": "2246021457079355195487",
                        "producedBlocks": "3153",
                        "targetBlocks": "3168",
                        "allRewardWithdrawed": false
                    },
                    "s2": {
                        "blockProducingReward": "0",
                        "votingReward": "0",
                        "totalReward": "0",
                        "producedBlocks": "0",
                        "targetBlocks": "3168",
                        "allRewardWithdrawed": false
                    }
                },
                "startTime": 1567396800,
                "endTime": 1567483200,
                "cycle": "104"
            }
        }
        ```


## `contract_getSBPRewardByCycle`
Query for all SBP rewards by cycle

- **Parameters**: 
    * `cycle`: `uint64 string`  Cycle index

- **Returns**: `SBPRewardInfo` 
    - `rewardMap`: `map<string, SBPReward>`
        - `totalReward`: `bigint string`  Total rewards
        - `blockProducingReward`: `bigint string`  Block creation rewards
        - `votingReward`: `bigint string`  Candidate additional rewards (voting rewards)
        - `producedBlocks`: `uint64 string`  Actual blocks produced in the cycle
        - `targetBlocks`: `uint64 string`  Blocks should be produced in the cycle
    - `startTime`: `int64`  Cycle start time. In seconds
    - `endTime`: `int64`  Cycle end time. In seconds
    - `cycle`: `uint64 string`  Cycle index

!!! example
    === "Request"
        ```json
        {
            "jsonrpc": "2.0",
            "id": 1,
            "method": "contract_getSBPRewardByCycle",
            "params": [
                "104"
            ]
        }
        ```
    === "Response"
        ```json
        {
            "jsonrpc": "2.0",
            "id": 1,
            "result": {
                "rewardMap": {
                    "s1": {
                        "blockProducingReward": "1499714611872146118517",
                        "votingReward": "746306845207209076970",
                        "totalReward": "2246021457079355195487",
                        "producedBlocks": "3153",
                        "targetBlocks": "3168",
                        "allRewardWithdrawed": false
                    },
                    "s2": {
                        "blockProducingReward": "0",
                        "votingReward": "0",
                        "totalReward": "0",
                        "producedBlocks": "0",
                        "targetBlocks": "3168",
                        "allRewardWithdrawed": false
                    }
                },
                "startTime": 1567396800,
                "endTime": 1567483200,
                "cycle": "104"
            }
        }
        ```


## `contract_getSBP`
Get SBP information by name

- **Parameters**: 
    * `name`: `string`  SBP name

- **Returns**: `SBPInfo`
    - `name`: `string`  SBP name
    - `blockProducingAddress`: `address`  Block creation address
    - `rewardWithdrawAddress`: `address`  Reward withdrawal address
    - `stakeAddress`: `address`  Registration address
    - `stakeAmount`: `bigint string`  Staking amount. In the mainnet, it is 1 million VITE.
    - `expirationHeight`: `uint64 string`  Lock-up expiration height
    - `expirationTime`: `int64`  Estimated lock-up expiration time. In seconds.
    - `revokeTime`: `int64`  The timestamp when the SBP was canceled. For valid SBP this field is 0.

!!! example
    === "Request"
        ```json
        {
            "jsonrpc": "2.0",
            "id": 1,
            "method": "contract_getSBP",
            "params": [
                "s1"
            ]
        }
        ```
    === "Response"
        ```json
        {
            "jsonrpc": "2.0",
            "id": 1,
            "result": {
                "name": "s1",
                "blockProducingAddress": "vite_e41be57d38c796984952fad618a9bc91637329b5255cb18906",
                "rewardWithdrawAddress": "vite_e41be57d38c796984952fad618a9bc91637329b5255cb18906",
                "stakeAddress": "vite_e41be57d38c796984952fad618a9bc91637329b5255cb18906",
                "stakeAmount": "500000000000000000000000",
                "expirationHeight": "7776000",
                "expirationTime": 1575268146,
                "revokeTime": 0
            }
        }
        ```

## `contract_getSBPVoteList`
Get all SBP's current votes

- **Parameters**: none

- **Returns**: `Array<SBPVoteInfo>`
    - `sbpName`: `string`  SBP name
    - `blockProducingAddress`: `address`  Block creation address
    - `votes`: `bigint string`  Number of votes

!!! example
    === "Request"
        ```json
        {
            "jsonrpc": "2.0",
            "id": 1,
            "method": "contract_getSBPVoteList",
            "params": []
        }
        ```
    === "Response"
        ```json
        {
            "jsonrpc": "2.0",
            "id": 1,
            "result": [
                {
                    "sbpName": "s1",
                    "blockProducingAddress": "vite_e41be57d38c796984952fad618a9bc91637329b5255cb18906",
                    "votes": "100000000000000000000"
                },
                {
                    "sbpName": "s2",
                    "blockProducingAddress": "vite_0acbb1335822c8df4488f3eea6e9000eabb0f19d8802f57c87",
                    "votes": "50000000000000000000"
                }
            ]
        }
        ```

## `contract_getVotedSBP`
Get the current voted SBP by account

- **Parameters**: 
    * `address`: `address`  Address of the account

- **Returns**: `VotedSBPInfo`
    - `blockProducerName`: `string`  SBP name
    - `status`: `uint8`  SBP status. `2` - the SBP is cancelled, `1` - SBP is valid
    - `votes`: `bigint string`  Number of votes. This also refers to the account's available VITE balance
  
!!! example
    === "Request"
        ```json
        {
            "jsonrpc": "1.0",
            "id": 1,
            "method": "contract_getVotedSBP",
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
            "result": {
                "blockProducerName": "s1",
                "status": 1,
                "votes": "599960989999999999999999997"
            }
        }
        ```

## `contract_getSBPVoteDetailsByCycle`
Get the voting details of all SBPs by cycle

- **Parameters**: 
    * `cycle`: `uint64 string`  Cycle index

- **Returns**: `Array<VoteDetail>`
    - `blockProducerName`: `string`  SBP name
    - `totalVotes`: `bigint string`  Total votes
    - `blockProducingAddress`: `address`  Block creation address
    - `historyProducingAddresses`: `Array<address>`  Block creation addresses used by the SBP in history
    - `addressVoteMap`: `map<address, bigint string>`  Address-votes map

!!! example
    === "Request"
        ```json
        {
            "jsonrpc": "1.0",
            "id": 1,
            "method": "contract_getSBPVoteDetailsByCycle",
            "params": [
                "104"
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
                    "blockProducerName": "s1",
                    "totalVotes": "100000000000000000000",
                    "blockProducingAddress": "vite_e41be57d38c796984952fad618a9bc91637329b5255cb18906",
                    "historyProducingAddresses": [
                        "vite_e41be57d38c796984952fad618a9bc91637329b5255cb18906"
                    ],
                    "addressVoteMap": {
                        "vite_ab24ef68b84e642c0ddca06beec81c9acb1977bbd7da27a87a": "100000000000000000000"
                    }
                },
                {
                    "blockProducerName": "s2",
                    "totalVotes": "50000000000000000000",
                    "blockProducingAddress": "vite_0acbb1335822c8df4488f3eea6e9000eabb0f19d8802f57c87",
                    "historyProducingAddresses": [
                        "vite_0acbb1335822c8df4488f3eea6e9000eabb0f19d8802f57c87"
                    ],
                    "addressVoteMap": {
                        "vite_56fd05b23ff26cd7b0a40957fb77bde60c9fd6ebc35f809c23": "50000000000000000000"
                    }
                }
            ]
        }
        ```

## `contract_getTokenInfoList`
Get all tokens

- **Parameters**: 
    * `pageIndex`: `int`  Page index, starting with 0
    * `pageSize`: `int`  Page size. Maximum 1000

- **Returns**: `TokenInfoList`
    - `totalCount`: `int`  Total number of tokens
    - `tokenInfoList`: `Array<TokenInfo>`  See [TokenInfo](../README.md#tokeninfo)
        - `tokenName`: `string`  Token name
        - `tokenSymbol`: `string`  Token symbol
        - `totalSupply`: `big.Int` Total supply
        - `decimals`: `uint8`  Decimal places
        - `owner`: `Address`  Token owner
        - `isReIssuable`: `bool`  `true` means the token can be re-issued
        - `maxSupply`: `big.Int`  Maximum supply
        - `isOwnerBurnOnly`: `bool`  `true` means only the token owner can burn the tokens. Deprecated
        - `tokenId`: `TokenId`  Token ID
        - `index`: `uint16`  Token index
  
!!! example
    === "Request"
        ```json
        {
            "jsonrpc": "2.0",
            "id": 1,
            "method": "contract_getTokenInfoList",
            "params": [
                0,
                10
            ]
        }
        ```
    === "Response"
        ```json
        {
            "jsonrpc": "2.0",
            "id": 1,
            "result": {
                "totalCount": 1,
                "tokenInfoList": [
                    {
                        "tokenName": "Vite Token",
                        "tokenSymbol": "VITE",
                        "totalSupply": "1000000000000000000000000000",
                        "decimals": 18,
                        "owner": "vite_0000000000000000000000000000000000000004d28108e76b",
                        "tokenId": "tti_5649544520544f4b454e6e40",
                        "maxSupply": "115792089237316195423570985008687907853269984665640564039457584007913129639935",
                        "isReIssuable": true,
                        "index": 0,
                        "isOwnerBurnOnly": false
                    }
                ]
            }
        }
        ```

## `contract_getTokenInfoById`
Get token by id

- **Parameters**: 
    * `tokenId`: `tokenId`  Token id

- **Returns**: [`TokenInfo`](../README.md#tokeninfo)
    - `tokenName`: `string`  Token name
    - `tokenSymbol`: `string`  Token symbol
    - `totalSupply`: `big.Int` Total supply
    - `decimals`: `uint8` Decimal places
    - `owner`: `Address` Token owner
    - `isReIssuable`: `bool`  `true` means the token can be re-issued
    - `maxSupply`: `big.Int`  Maximum supply
    - `isOwnerBurnOnly`: `bool`  `true` means only the token owner can burn the tokens. Deprecated
    - `tokenId`: `TokenId` Token ID
    - `index`: `uint16` Token index
  
!!! example
    === "Request"
        ```json
        {
            "jsonrpc": "2.0",
            "id": 1,
            "method": "contract_getTokenInfoById",
            "params": [
                "tti_5649544520544f4b454e6e40"
            ]
        }
        ```
    === "Response"
        ```json
        {
            "jsonrpc": "2.0",
            "id": 1,
            "result": {
                "tokenName": "VITE",
                "tokenSymbol": "VITE",
                "totalSupply": "999369292029736282857580488",
                "decimals": 18,
                "owner": "vite_0000000000000000000000000000000000000004d28108e76b",
                "tokenId": "tti_5649544520544f4b454e6e40",
                "maxSupply": "115792089237316195423570985008687907853269984665640564039457584007913129639935",
                "isReIssuable": true,
                "index": 0,
                "isOwnerBurnOnly": false
            }
        }
        ```

## `contract_getTokenInfoListByOwner`
Get tokens issued by owner

- **Parameters**: 
    * `address`: `address`  Address of the owner account

- **Returns**: `Array<TokenInfo>` See [TokenInfo](../README.md#tokeninfo)
    - `tokenName`: `string`  Token name
    - `tokenSymbol`: `string`  Token symbol
    - `totalSupply`: `big.Int` Total supply
    - `decimals`: `uint8` Decimal places
    - `owner`: `Address` Token owner
    - `isReIssuable`: `bool`  `true` means the token can be re-issued
    - `maxSupply`: `big.Int`  Maximum supply
    - `isOwnerBurnOnly`: `bool`  `true` means only the token owner can burn the tokens. Deprecated
    - `tokenId`: `TokenId` Token ID
    - `index`: `uint16` Token index
  
!!! example
    === "Request"
        ```json
        {
            "jsonrpc": "2.0",
            "id": 1,
            "method": "contract_getTokenInfoListByOwner",
            "params": [
                "vite_0000000000000000000000000000000000000004d28108e76b"
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
                    "tokenName": "VITE",
                    "tokenSymbol": "VITE",
                    "totalSupply": "999411106171319027184734227",
                    "decimals": 18,
                    "owner": "vite_0000000000000000000000000000000000000004d28108e76b",
                    "tokenId": "tti_5649544520544f4b454e6e40",
                    "maxSupply": "115792089237316195423570985008687907853269984665640564039457584007913129639935",
                    "isReIssuable": true,
                    "index": 0,
                    "isOwnerBurnOnly": false
                }
            ]
        }
        ```
