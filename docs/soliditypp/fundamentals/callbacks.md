---
order: 5
---

# Callbacks

Composability is one of the core features of a decentralized ecosystem, that is, one smart contract can interact with others in unlimited combinations. So that developers can stack smart contracts on top of one another like Lego.

To achieve composability, smart contract programming languages must be designed to make it easier for contracts to talk to each other.

Solidity on EVM makes contracts inherently composable through synchronous external function calls and the ABI specification.

But for Solidity++ on Vite, things are not that simple. Because Vite is an asynchronous blockchain, calls to smart contracts on Vite are also asynchronous, that is, the return value cannot be obtained immediately after the call. Therefore, the composability can only be achieved through the callback functions in the early version of Solidity++ (before 0.8.1).

Let's examine the following example:
* Contract `A` has an `add()` method that returns the sum of two unsigned integers.
* Contract `B` has a `test()` method that calculates the sum of `1` and `2` by calling `A.add()`, and stores the result in the storage variable `data`.

```solidity
// SPDX-License-Identifier: GPL-3.0
pragma soliditypp ^0.8.0;

contract A {
    function add(uint a, uint b, function(uint) external callback) external {
        if (callback.address != address(0)) {
            // send callback to return data to the caller
            callback(a + b);
        }
    }
}

contract B {
    A contractA;
    uint public data;

    constructor (address addr) {
        contractA = A(addr);
    }

    function test() external {
        contractA.add(1, 2, this.callback_onAdd);
    }

    function callback_onAdd(uint result) external {
        // receive data from the called contract
        require(msg.sender == address(contractA));
        data = result;
    }
}
```

We add an additional parameter `callback` of type `function(uint) external` to `A.add()`.

When contract `B` calls contract `A`, it needs to pass the callback function `this.callback_onAdd` as an argument of `A.add()`.

Contract `A` can obtain the address of the caller and the selector of the callback function through the `callback` parameter. It puts the result of `a + b` in the first argument and initiates a call to the `callback` function to return data to `B`.

In the callback function `callback_onAdd()` of contract `B`, it gets the result of `A.add()` from the parameter `result` and assigns it to the storage variable `data`.

The next example is the same as introduced in the Sync / Async Functions chapter but using a callback function:

```solidity
// SPDX-License-Identifier: GPL-3.0
pragma soliditypp ^0.8.0;

contract A {
    function add(uint a, uint b, function(uint) external callback) external {
        if (callback.address != address(0)) {
            // send callback to return data to the caller
            callback(a + b);
        }
    }
}

contract B {
    A contractA;
    uint public total;

    constructor (address addr) {
        contractA = A(addr);
    }

    function invoke(uint a, uint b) external {
        contractA.add(a, b, this.sum);
    }

    function sum(uint result) external {
        total += result;
    }
}
```

It works fine and the code doesn't look too complicated, no pain at all, right? Once the call stack gets deeper, you will find yourself in the *Callback Hell*: Using low-level callbacks makes code difficult to write and understand. It also increases the difficulty of identifying the control flow for a contract.

> The maximum depth of call stack for Solidity++ is **512**.