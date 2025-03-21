---
order: 4
---

# Sync / Async Functions

In this chapter, we focus on the aspect of ***asynchronous communication between smart contracts***.

In synchronous architecture, when a process executes a request, it waits until the execution is complete and then returns the result. The process pauses during that time. After the request is sent, the asynchronous process (usually a thread) runs in the back and the main process goes ahead to handle other executions. When the asynchronous process completes, the main process will receive a notification with the return result.

The advantages of asynchronous architecture are obvious — it will be much faster when running a batch of executions. Vite adopts a DAG-based ledger, where each address has a separate account chain. A transaction only changes the state of one account chain, so transactions of multiple addresses can be executed in parallel to achieve higher throughput.

Unlike Ethereum, Vite is an asynchronous blockchain, calls to smart contracts on Vite are also asynchronous, that is, the return value cannot be obtained immediately after the call.

The following is a simple example to introduce the asynchronous syntax in Solidity++.

```solidity
// SPDX-License-Identifier: GPL-3.0
pragma soliditypp >=0.8.0 <0.9.0;

contract SimpleStorage {
    uint storedData;

    function set(uint x) external {
        storedData = x;
    }

    function get() external view returns (uint) {
        return storedData;
    }
}
```

There are two functions in the **SimpleStorage** contract. The syntax of function declarations is the same as Solidity, but the semantics are different. 

A function of a Vite contract is an *async function*.

> An *async function* does not execute or return result in the request transaction but in a subsequent response transaction.

Let's dive deeper with a more advanced example.

```solidity
// SPDX-License-Identifier: GPL-3.0
pragma soliditypp ^0.8.0;

interface Listener {
    // declare a callback to receive the result
    function sum(uint result) external;
}

contract A {
    uint public last;

    function add(uint a, uint b) external {
        last = a + b;
        Listener sender = Listener(msg.sender);
        // send message to the caller
        sender.sum(last);
    }
}

contract B is Listener {
    A contractA;
    uint public total;

    constructor (address addr) {
        contractA = A(addr);
    }

    function test(uint a, uint b) external {
        contractA.add(a, b);
    }

    function sum(uint result) external override {
        total += result;
    }

    function getViteBalance() external view returns(uint256) {
        return balance("tti_5649544520544f4b454e6e40");
    }
}
```

1. When the client invokes `B.test()`, a request transaction S1 (client -> contract B) is initiated.
2. Vite is listening for all open request transactions to the address of contract B. Once the S1 is discovered, Vite VM is activated and the code of `B.test()` is executed. A response transaction R1 will be initiated after the execution.
3. When the `contractA.add(a, b)` statement is executed, a new request transaction S2 (contract B -> contract A) is triggered and merged into R1.
4. When the S2 is accepted by contract A, the code of `A.add(uint a, uint b)` is executed and a response transaction R2 will be initiated after the execution.
5. When the `sender.sum(last)` statement is executed, a new request transaction S3 (contract A -> contract B) is triggered to send the result back to B. (S3 will be merged into R2).
6. When S3 is accepted by contract B, the code of `B.sum(uint result)` is executed. The value of storage variable `total` is increased by the value from the calldata of S3. After the execution, a response transaction R3 will be initiated.

:::tip Notice
Retrieving the last value with `contractA.last()` in contract B will be possible when the `async` keyword is be introduced with v0.8.1 of Solidity++. Refer to [Promise and Await](promise-await.md) for details.
:::
