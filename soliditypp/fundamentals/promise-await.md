---
order: 6
---

# Promise and Await

As briefly mentioned in the [Sync / Async Functions](sync-async-functions.md) chapter, Vite is a completely asynchronous blockchain with an asynchronous virtual machine (VM). All message calls on Vite are fully asynchronous.

An asynchronous call is not blocked when waiting for the called function to return. The caller cannot get the return data immediately after the call. Instead, it gets a promise of return types. 

> The promise syntax is not implemented in the current version.

In order to make contracts written in Solidity++ as simple and straightforward as those written in Solidity, the await operator is introduced which is very similar to other modern programming languages such as JavaScript and C#.

> Awaiting a promise with `await` will be supported in v0.8.1.

Await operator suspends evaluation of the enclosing async function until the asynchronous operation represented by its operand completes. When the asynchronous operation completes, it returns the result of the operation, if any.

It helps you write synchronous-looking Solidity++ code that works asynchronously.

When the example introduced in the [Callback](./callbacks.md) chapter is implemented with the await operator, the code will be as straightforward and concise as in Solidity:

```solidity
// SPDX-License-Identifier: GPL-3.0
pragma soliditypp ^0.8.1;

contract A {
    function add(uint a, uint b) external pure returns(uint) {
        return a + b;
    }
}

contract B {
    A contractA;
    constructor (address addr) {
        contractA = A(addr);
    }

    function sum(uint a, uint b, uint c) external view returns(uint) {
        uint partialResult = await contractA.add(a, b);
        return await contractA.add(partialResult, c);
    }
}


contract C {
    B contractB;
    uint public data;
    
    constructor (address addr) {
        contractB = B(addr);
    }

    function test() external {
        data = await contractB.sum(1, 2, 3);
    }
}
```
