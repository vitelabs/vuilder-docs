---
order: 1
title: Overview
parent:
    title: Contract
    order: 3
---

# Get Started

:::tip Tip
It is easier to use an SDK. e.g. [Vite.js](../../SDK/vitejs/README.md) or ViteJ to create or call smart contracts
:::

## How to Create Contract

To create a contract, one needs to send a transaction with block type 1 in following steps:

1. Call [`contract_createContractToAddress`](contract.md#contract-createcontractaddress) to generate a new contract address;
2. If the contract constructor has input parameters, encode the arguments according to ABI;
3. Compose block data. The data consists of a prefix of 14 bytes (10-byte consensus group id + 1-byte contract type + 1-byte response latency + 1-byte random degree + 1-byte quota multiplier), contract's compiled code and encoded arguments.
4. Create an account block and set all necessary fields. Note that `toAddress` is the contract address generated in step 1. Set `blockType` = 1 and `fee` as 10 VITE, also set `amount` and `tokenId` if you want to transfer some tokens to the contract (the constructor must be payable).
5. Call [`ledger_sendRawTransaction`](../ledger.md#ledger-sendrawtransaction) to send the transaction.

See [here](../../vite-basics/smart-contract.md) for more information.

## How to Call Contract

To call a contract, one needs to send a transaction to the smart contract with encoded method name and arguments, as in following steps:

1. Encode the function call according to ABI;
2. Create an account block and set all necessary fields. Note that `toAddress` is the contract address and `data` is the output in step 1. Set `blockType` = 2, also set `amount` and `tokenId` if you want to transfer some tokens (the calling function must be payable).
3. Call [`ledger_sendRawTransaction`](../ledger.md#ledger-sendrawtransaction) to send the transaction.

## How to Read Contract States

A contract's public states can be accessed off-chain through API `contract_query` (or `contract_callOffChainMethod` in Solidity++ 0.4) with following steps:

1. Encode the view function call (or off-chain method in Solidity++ 0.4) according to ABI.
2. Call [`contract_query`](contract.md#contract-query) or [`contract_callOffChainMethod`](contract.md#contract-calloffchainmethod) to read contract states.

## How to Call Built-in Contract

Calling built-in contract is exactly the same as calling an ordinary contract.

Vite has three built-in contracts: Built-in Quota Contract, Built-in Asset Contract and Built-in Consensus Contract, which will be covered in next chapters.

> Note: ViteX is also implemented as built-in contracts.

## Built-in Contract Callbacks

Some built-in contracts have declared callbacks. The callbacks are used to receive async calling results, and should be implemented by the contract who calls the built-in contract.
For example, the following ABI declares a function `StakeForQuotaWithCallback` with a callback with the same name. 
Let's assume a contract A calls the function to acquire quota for beneficiary B. In order to receive staking result, A implements the callback so the built-in Quota contract can send the result back in.

:::tip
In Vite's VM, callbacks are implemented as external functions adding a tailing "Callback" to the original name.
:::

```json
[
  {"type":"function","name":"StakeForQuotaWithCallback", "inputs":[{"name":"beneficiary","type":"address"},{"name":"stakeHeight","type":"uint64"}]},
  {"type":"callback","name":"StakeForQuotaWithCallback", "inputs":[{"name":"id","type":"bytes32"},{"name":"success","type":"bool"}]}
]
```

```solidity
// SPDX-License-Identifier: GPL-3.0
pragma soliditypp >=0.8.0;

interface IQuotaBuiltIn {
    function StakeForQuotaWithCallback(address beneficiary, uint64 stakeHeight) payable external;
}

contract A {
    IQuotaBuiltIn constant Contract = IQuotaBuiltIn("vite_0000000000000000000000000000000000000003f6af7459b9");

    event StakeSuccess(bytes32 indexed id);

    function requestForQuota(address beneficiary) external payable {
        Contract.StakeForQuotaWithCallback{value: 134 vite}(beneficiary, 259200); 
    }

    // Will be called back by quota contract
    function StakeForQuotaWithCallbackCallback(bytes32 id, bool success) external {
        require(msg.sender == address("vite_0000000000000000000000000000000000000003f6af7459b9"));
        if (success) {
            emit StakeSuccess(id);
        } 
    }
}
```

In this example, `StakeForQuotaWithCallbackCallback` is the callback of function `StakeForQuotaWithCallback`.
