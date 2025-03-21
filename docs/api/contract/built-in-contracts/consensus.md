---
order: 2
title: Consensus
---

# Consensus Built-in Contract
## Contract Address
`vite_0000000000000000000000000000000000000004d28108e76b`

## ABI
```json
[
  // Register block producer
  {"type":"function","name":"RegisterSBP", "inputs":[{"name":"sbpName","type":"string"},{"name":"blockProducingAddress","type":"address"},{"name":"rewardWithdrawAddress","type":"address"}]},
  // Update block producing address
  {"type":"function","name":"UpdateSBPBlockProducingAddress", "inputs":[{"name":"sbpName","type":"string"},{"name":"blockProducingAddress","type":"address"}]},
  // Update reward withdrawal address
  {"type":"function","name":"UpdateSBPRewardWithdrawAddress", "inputs":[{"name":"sbpName","type":"string"},{"name":"rewardWithdrawAddress","type":"address"}]},
  // Cancel block producer
  {"type":"function","name":"RevokeSBP","inputs":[{"name":"sbpName","type":"string"}]},
  // Withdraw block producing reward
  {"type":"function","name":"WithdrawSBPReward","inputs":[{"name":"sbpName","type":"string"},{"name":"receiveAddress","type":"address"}]},
  // Vote for block producer
  {"type":"function","name":"VoteForSBP", "inputs":[{"name":"sbpName","type":"string"}]},
  // Cancel voting
  {"type":"function","name":"CancelSBPVoting","inputs":[]}
]
```

:::warning
Due to historical reason, this contract also contains a number of other ABIs that are NOT listed in this page. These functions are deprecated and no longer in use. Do NOT use them in your code.
:::

### `RegisterSBP`

Register a new SBP. This operation will lock up 1 million Vite coins for 7,776,000 snapshot blocks (3 months). 

- **Parameters**: 
  * `sbpName`: `string` [SBP name](../../../vite-basics/consensus/snapshot-block-producer.md)
  * `blockProducingAddress`: `address` [Block creation address](../../../vite-basics/consensus/snapshot-block-producer.md)
  * `rewardWithdrawAddress`: `address` [Reward withdrawal address](../../../vite-basics/consensus/snapshot-block-producer.md)

### `UpdateSBPBlockProducingAddress`

Update an SBP's block creation address

- **Parameters**: 
  * `sbpName`: `string` SBP name
  * `blockProducingAddress`: `address` New block creation address
  
### `UpdateSBPRewardWithdrawAddress`

Update an SBP's reward withdrawal address

- **Parameters**: 
  * `sbpName`: `string` SBP name
  * `rewardWithdrawAddress`: `address` New reward withdrawal address

### `RevokeSBP`

Cancel an SBP registration after the lockup period expires

- **Parameters**: 
  * `sbpName`: `string` SBP name

### `WithdrawSBPReward`

Withdraw SBP reward. See [Rewards Withdrawal](../../../vite-basics/consensus/snapshot-block-producer.md#rewards-withdrawal) for more information.

- **Parameters**: 
  * `sbpName`: `string` SBP name
  * `receiveAddress`: `address` Address to receive reward

### `VoteForSBP`

Vote for an SBP. See [Voting](../../../vite-basics/consensus/voting.md) for more information.

- **Parameters**: 
  * `sbpName`: `string` SBP name

### `CancelSBPVoting`

Withdraw vote

- **Parameters**: none
