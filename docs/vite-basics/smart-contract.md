---
order: 6
title: Smart Contract
parent:
    title: Vite Basics
    order: 1
---

# Smart Contracts

Smart contracts are immutable programs deployed on the blockchain.

## Consensus Groups

Each smart contract can have its own group of nodes ("Delegated Consensus Group") that take turns confirming the transactions sent/received by said contract.

Similar to Snapshot Consensus Group, all delegated nodes will be publicly elected according to the election rules defined in the delegated consensus group. The number of delegated nodes is defined by the group upon creation, and there is no limit to the number of such consensus groups in the network.

These delegated consensus groups allow for faster confirmation of transactions, because the nodes are only responsible for executing transactions for the said smart contract, not the entire network.

By default, the consensus group for smart contracts is the Snapshot Consensus Group (aka Global Consensus Group).

## Response Latency

To throttle response transactions, a smart contract can set up the Response Latency parameter when it is deployed. The response latency parameter specifies, for any incoming request transaction, the number of snapshot blocks that need to be confirmed before the contract responds. That is, the contract will wait at least that many snapshot blocks before producing a response block.

The value of this parameter is a number between 0 and 75, inclusive. 0 means there is no waiting period and a response block will be produced immediately. If the contract makes uses of timestamp, snapshot block height or random number, this parameter must be positive.

Generally speaking, a bigger response latency means slower contract response, and the response transaction will consume more quota.

## Random Degrees

When deploying a smart contract, the Random Degree parameter specifies the degree of confidence in the randomness being generated. The bigger random degree, the more secure the random number generation process, and the slower the contract producing response block. The value of random degree is between 0 and 75. If your contract uses random numbers, this parameter must be positive. Select a random degree that befits your contract's needs.

There are two functions for getting random numbers in Solidity++.

```
// return a random number. The value returned does not change if called within the same transaction
uint64 random = random64();
// return a random number. The value returned is different with each call
uint64 random = nextrandom();
```

For any given contract, it must hold $0 \le RandomDegree \le ResponseLatency \le 75$

Refer to [VEP 12: The Implementation of Random Numbers in Vite](../../vep/vep-12.html) for details of random numbers.

## Quota Multiplier

Sometimes the deployer of a smart contract may want contract callers to spend more than the usual amount of quota, perhaps for anti-spamming purposes. The Quota Multiplier parameter facilitates this, and is specified at contract deployment. The value ranges from 10 to 100, equivalent to 1-10x quota consumption. For example, 15 means that 1.5x quota will be charged for any address that calls the contract.

See [here](./quota/quota.md) for rules on quota consumption.

## Library Linking

Libraries in Solidity++ retain the same syntax and usage as in Solidity. In most cases, libraries are pieces of reusable code that consist of functions used by other contracts. They help prevent code duplication and can effectively reduce the size of code.

In the Vite network, libraries are a special form of contracts that:

* Are singletons
* Do not allow any storage or state variables that change
* Cannot have fallback functions
* Have no event logs
* Are stateless
* Cannot inherit or be inherited

Libraries allow adding functionality to types. For example, one can use the SafeMath library to enhance the functionality of a `uint` variable in a contract.

```solidity
using SafeMath for uint;
```

Using a library in the smart contract is called library linking. The following example shows Contract A using a library L to compute $2\times a$

```solidity
// SPDX-License-Identifier: GPL-3.0
pragma soliditypp >=0.8.0;

library L { 
    function double(uint self) public returns (uint) { 
        // do something with side effects
        return 2 * self;
    }
}

contract A {
    using L for uint;
    uint public data;

    function f(uint a) public returns (uint) {
        data = a.double();
        return data;
    }
}
```
