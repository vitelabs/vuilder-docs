---
order: 8
title: Error Handling
---

# Error Handling (assert / require / revert / try-catch)

Solidity++ uses state-reverting exceptions to handle errors. Such an exception undoes all changes made to the state in the current call (and all its sub-calls) and flags an error to the caller.

> Error propagation through `revert` and `try/catch` will be supported in v0.8.1.

**`assert(bool condition)`**

causes a Panic error and thus state change reversion if the condition is not met - to be used for internal errors.

**`require(bool condition)`**

reverts if the condition is not met - to be used for errors in inputs or external components.

**`require(bool condition, string memory message)`**

reverts if the condition is not met - to be used for errors in inputs or external components. Also provides an error message.

**`revert()`**

abort execution and revert state changes

**`revert(string memory reason)`**

abort execution and revert state changes, providing an explanatory string

---

The following example shows how to use an error string together with `revert` and the equivalent `require`:

```solidity
// SPDX-License-Identifier: GPL-3.0
pragma soliditypp ^0.8.0;

contract VendingMachine {
    function buy(uint amount) public payable {
        if (amount > msg.value)
            revert("Not enough Vite provided.");
        // Alternative way to do it:
        require(
            amount <= msg.value,
            "Not enough Vite provided."
        );
        // Perform the purchase.
    }
}
```

If you provide the reason string directly, then the two syntax options are equivalent, it is the developer's preference which one to use.

For more examples please refer to <https://docs.soliditylang.org/en/v0.8.1/control-structures.html?highlight=panic#error-handling-assert-require-revert-and-exceptions>