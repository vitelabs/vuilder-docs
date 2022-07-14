---
order: 13
---

# Inline Assembly

Since v0.8.0 inline assembly and Yul are available in Solidity++. You can interleave statements with inline assembly in a language close to the one of the Vite virtual machine. This gives you more fine-grained control, which is especially useful when you would like to reduce the quota consumed to execute a transaction or if you are enhancing the language by writing libraries.

The language used for inline assembly in Solidity++ is called Yul and it is documented [here](https://docs.soliditylang.org/en/v0.8.1/yul.html#yul). This section will only cover how the inline assembly code can interface with the surrounding Solidity++ code.

> Inline assembly is a way to access the Vite Virtual Machine at a low level. This bypasses several important safety features and checks of Solidity. You should only use it for tasks that need it, and only if you are confident with using it.

An inline assembly block is marked by `assembly { ... }`, where the code inside the curly braces is code in the Yul language.

The inline assembly code can access local Solidity variables as explained below.

Different inline assembly blocks share no namespace, i.e. it is not possible to call a Yul function or access a Yul variable defined in a different inline assembly block.

The following example multiplies the provided variable `x` with `b = 2` and returns the result:

```solidity
// SPDX-License-Identifier: GPL-3.0
pragma soliditypp ^0.8.0;

contract C {
    uint b = 2;
    function f(uint x) public view returns (uint r) {
        assembly {
            // We ignore the storage slot offset, we know it is zero
            // in this special case.
            r := mul(x, sload(b.slot))
        }
    }
}
```

For more examples please refer to <https://docs.soliditylang.org/en/v0.8.1/assembly.html>