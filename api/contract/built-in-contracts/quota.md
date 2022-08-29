---
order: 1
title: Quota
---

# Quota Built-in Contract

## Contract Address
`vite_0000000000000000000000000000000000000003f6af7459b9`

## Staking Id
The staking transaction (request) hash is used as **Staking Id** to cancel the staking (unlock) after the lockup period expires.

## ABI
```json
[
  // Stake for quota
  {"type":"function","name":"StakeForQuota", "inputs":[{"name":"beneficiary","type":"address"}]},
  // Cancel staking
  {"type":"function","name":"CancelQuotaStaking","inputs":[{"name":"id","type":"bytes32"}]},
  // Stake for quota with callback
  {"type":"function","name":"StakeForQuotaWithCallback", "inputs":[{"name":"beneficiary","type":"address"},{"name":"stakeHeight","type":"uint64"}]},
  // Cancel quota staking with callback
  {"type":"function","name":"CancelQuotaStakingWithCallback","inputs":[{"name":"id","type":"bytes32"}]},
  // Callback function for stake for quota
  {"type":"callback","name":"StakeForQuotaWithCallback", "inputs":[{"name":"id","type":"bytes32"},{"name":"success","type":"bool"}]},
  // Callback function for cancel quota staking
  {"type":"callback","name":"CancelQuotaStakingWithCallback","inputs":[{"name":"id","type":"bytes32"},{"name":"success","type":"bool"}]}
]
```

:::warning
Due to historical reason, this contract also contains a number of other ABIs that are NOT listed in this page. These functions are deprecated and no longer in use. Do NOT use them in your code.
:::

### `StakeForQuota`

Lock VITE for quota. The minimum locking amount is 134 VITE. The locked coins can be retrieved after 259,200 snapshot blocks (3 days). 

> Note: multiple records will be created if one account stakes for the same beneficiary more than once.  

- **Parameters**: 
  * `beneficiary`: `address` Address of quota beneficiary

### `CancelQuotaStaking`

Cancel a staking, retrieve locked VITE after the lock-up expires and release quota.

- **Parameters**: 
  * `id`: `bytes32` Staking id

### `StakeForQuotaWithCallback`

Lock VITE for quota. This function is designed for calling from a contract. The contract should implement the callback in order to receive the staking result. The minimum locking amount is 134 VITE. 

- **Parameters**: 
  * `beneficiary`: `address` Address of quota beneficiary
  * `stakeHeight`: `uint64` Lock-up period in the numbers of snapshot blocks. The minimum lock-up height is 259,200.

### Callback `StakeForQuotaWithCallback`

The callback function of `StakeForQuotaWithCallback`. This callback will be called by Quota contract to notify staking result.
 
- **Parameters**: 
  * `id`: `bytes32`   Staking id 
  * `success`: `bool` This flag is used to indicate whether the staking is successful

#### `CancelQuotaStakingWithCallback`

Cancel a staking, retrieve locked VITE after the lock-up expires and release quota. This function is designed for calling from a contract. The contract should implement the callback in order to receive the cancel staking result.

- **Parameters**: 
  * `id`: `bytes32` Staking id 

### Callback `CancelQuotaStakingWithCallback`

The callback function of `CancelQuotaStakingWithCallback`. This callback will be called by Quota contract to notify cancel staking result.

- **Parameters**: 
  * `id`: `bytes32`   Staking id 
  * `success`: `bool` This flag is used to indicate whether the staking is cancelled
