---
order: 1
title: Get Started
parent:
    title: Contract
    order: 3
---

# Get Started

!!! tip
    It is easier to use an SDK, such as [Vite.js](../../SDK/vitejs/README.md) or [ViteJ](../../SDK/vitej/README.md), to create or call smart contracts.

## Create Smart Contract

To create a contract, follow these steps to send a transaction with block type 1:

1. Call [`contract_createContractToAddress`](contract.md#contract-createcontractaddress) to generate a new contract address.
2. If the contract constructor has input parameters, encode the arguments according to ABI.
3. Compose block data. The data consists of a prefix of 14 bytes (10-byte consensus group id + 1-byte contract type + 1-byte response latency + 1-byte random degree + 1-byte quota multiplier), the contract's compiled code, and encoded arguments.
4. Create an account block and set all necessary fields. Note that `toAddress` is the contract address generated in step 1. Set `blockType` to 1 and `fee` to 10 VITE. Also, set `amount` and `tokenId` if you want to transfer some tokens to the contract (the constructor must be payable).
5. Call [`ledger_sendRawTransaction`](../ledger.md#ledger-sendrawtransaction) to send the transaction.

See [here](../../vite-basics/smart-contract.md) for more information.

## Call Contract

To call a contract, follow these steps to send a transaction to the smart contract with the encoded method name and arguments:

1. Encode the function call according to ABI.
2. Create an account block and set all necessary fields. Note that `toAddress` is the contract address and `data` is the output from step 1. Set `blockType` to 2. Also, set `amount` and `tokenId` if you want to transfer some tokens (the calling function must be payable).
3. Call [`ledger_sendRawTransaction`](../ledger.md#ledger-sendrawtransaction) to send the transaction.

## Read Contract States

A contract's public states can be accessed off-chain through the API `contract_query` (or `contract_callOffChainMethod` in Solidity++ 0.4) with the following steps:

1. Encode the view function call (or off-chain method in Solidity++ 0.4) according to ABI.
2. Call [`contract_query`](contract.md#contract-query) or [`contract_callOffChainMethod`](contract.md#contract-calloffchainmethod) to read contract states.

## Call Built-in Contract

Calling a built-in contract is exactly the same as calling an ordinary contract.

Vite has three built-in contracts: Built-in Quota Contract, Built-in Asset Contract, and Built-in Consensus Contract, which will be covered in the next chapters.

!!! note
    ViteX is also implemented as built-in contracts.

## Built-in Contract Callbacks

Some built-in contracts have declared callbacks. The callbacks are used to receive async calling results and should be implemented by the contract that calls the built-in contract.
For example, the following ABI declares a function `StakeForQuotaWithCallback` with a callback of the same name. 
Let's assume a contract A calls the function to acquire quota for beneficiary B. To receive the staking result, A implements the callback so the built-in Quota contract can send the result back.

!!! tip
    In Vite's VM, callbacks are implemented as external functions by adding a trailing "Callback" to the original name.

```json
[
  {"type":"function","name":"StakeForQuotaWithCallback", "inputs":[{"name":"beneficiary","type":"address"},{"name":"stakeHeight","type":"uint64"}]},
  {"type":"callback","name":"StakeForQuotaWithCallback", "inputs":[{"name":"id","type":"bytes32"},{"name":"success","type":"bool"}]}
]
```
!!! example
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

In this example, `StakeForQuotaWithCallbackCallback` is the callback for the function `StakeForQuotaWithCallback`.
