---
order: 10
---

# ABI

The Contract Application Binary Interface (ABI) is the standard way to interact with contracts in the Vite ecosystem, both from outside the blockchain and for contract-to-contract interaction. Data is encoded according to its type, as described in this specification. The encoding is not self describing and thus requires a schema in order to decode.

We assume the interface functions of a contract are strongly typed, known at compilation time and static. We assume that all contracts will have the interface definitions of any contracts they call available at compile-time.

This specification does not address contracts whose interface is dynamic or otherwise known only at run-time.

## Function Selector

The first four bytes of the call data for a function call specifies the function to be called. It is the first (left, high-order in big-endian) four bytes of the blake2b hash of the signature of the function. The signature is defined as the canonical expression of the basic prototype without data location specifier, i.e. the function name with the parenthesised list of parameter types. Parameter types are split by a single comma - no spaces are used.

```solidity
// SPDX-License-Identifier: GPL-3.0
pragma soliditypp ^0.8.0;

contract Foo {
    function baz(uint32 x, bool y) public pure returns (bool r) { r = x > 32 || y; }
}
```

Given the contract above the `baz` function would be represented as `0x921bcc0e` which is the so called Method ID. This is derived as the first 4 bytes of the blake2b hash of the ASCII form of the signature `baz(uint32,bool)`.

## Argument Encoding

Starting from the fifth byte, the encoded arguments follow. This encoding is also used in other places, e.g. the return values and also event arguments are encoded in the same way, without the four bytes specifying the function.

* `address`: equivalent to `uint168`, except for the assumed interpretation and language typing.
* `vitetoken`: equivalent to `uint80`, except for the assumed interpretation and language typing.
* `tokenId`: alias of `vitetoken`

For a complete list of types please refer to <https://docs.soliditylang.org/en/v0.8.1/abi-spec.html#types>

### Mapping Solidity++ to ABI types
Solidity++ supports all the types of Solidity with the same names. As with Solidity, some Solidity++ types are not supported by the ABI. The following table shows on the left column Solidity++ types that are not part of the ABI, and on the right column the ABI types that represent them.

| Solidity++ | ABI |
| --- | --- |
| address payable | ``address`` |
| contract | ``address`` |
| enum | ``uint8`` |
| struct | ``tuple`` |

## Example

Given the contract:

```solidity
// SPDX-License-Identifier: GPL-3.0
pragma soliditypp ^0.8.0;

contract Foo {
    function bar(uint32 x, vitetoken t) public pure returns (bool r) { r = x > 32; }
}
```

Thus for our ``Foo`` example if we wanted to call ``bar`` with the parameters ``123`` and
``tti_564954455820434f494e69b5``, we would pass 68 bytes total, which can be broken down into:

- ``0x176d9ecf``: the Method ID. This is derived as the first 4 bytes of the blake2b hash of
the ASCII form of the signature ``bar(uint32,vitetoken)``.
- ``0x000000000000000000000000000000000000000000000000000000000000007B``: the first parameter,
  a uint32 value ``123`` padded to 32 bytes
- ``0x00000000000000000000000000000000000000000000564954455820434f494e``: the second parameter, 
  a uint80 value ``0x564954455820434f494e`` padded to 32 bytes

In total:

```
0x176d9ecf000000000000000000000000000000000000000000000000000000000000007B00000000000000000000000000000000000000000000564954455820434f494e
```

It returns a single ``bool``. If, for example, it were to return ``false``, its output would be
the single byte array ``0x0000000000000000000000000000000000000000000000000000000000000000``, a single bool.

For more examples please refer to <https://docs.soliditylang.org/en/v0.8.1/abi-spec.html>