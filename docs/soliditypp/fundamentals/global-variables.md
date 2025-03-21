---
order: 11
---

# Global Variables, Functions and Members

There are special variables and functions which always exist in the global namespace and are mainly used to provide information about the blockchain or are general-use utility functions. 

## Block and Transaction Properties

- ``block.number`` (``uint``): current snapshot block height
- ``block.timestamp`` (``uint``): current snapshot block timestamp as seconds since unix epoch
- ``msg.data`` (``bytes calldata``): complete calldata
- ``msg.sender`` (``address``): sender of the message (current call)
- ``msg.sig`` (``bytes4``): first four bytes of the calldata (i.e. function identifier)
- ``msg.value`` (``uint``): amount of a specific token sent with the message
- ``tx.origin`` (``address``): sender of the transaction (full call chain)

> Strictly speaking, due to the asynchronous nature of Vite, `block.number` and `block.timestamp` returns the result of the snapshot block that the request transaction was included in, NOT precisely the current snapshot block.  

The following are available in Solidity but not in Solidity++:

```solidity
blockhash(_blockNumber);
block.chainid;
block.coinbase;
block.difficulty;
block.gaslimit;
blockhash(param);
gasleft();
msg.gas;
tx.gasprice;
selfdestruct(_owner);
suicide(_addr);
```

To support additional Vite features, Solidity++ has been extended with the following functions and members:

- ``fromhash() returns (bytes32)``: hash of the request transaction
- ``prevhash() returns (bytes32)``: hash of the latest block on the contract's account chain
- ``accountheight() returns (uint)``: height of the latest block on the contract's account chain
- ``random64() returns (uint64)``: random number (returns the same random number in one transaction)
- ``nextrandom() returns (uint64)``: random number (can be called multiple times to obtain different random numbers in one transaction)
- ``balance(vitetoken) returns (uint256)``: balance of the contract for the specified vitetoken
- ``msg.token`` (``vitetoken``): token identifier sent with the message
- ``payable(address).transfer(vitetoken, uint256)``: sends some amount of a specific token to an address
- ``blake2b(bytes memory) returns (bytes32)``: computes the BLAKE2b hash of the input

For a complete list please refer to <https://docs.soliditylang.org/en/v0.8.1/units-and-global-variables.html#special-variables-and-functions>