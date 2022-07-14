---
order: false
parent:
    title: Best Practices
    order: 5
---

# Best Practices

This document aims to provide the best practices of smart contract development for Vite developers, including common functional practices for smart contracts, and a few examples of pitfalls that must be avoided.

Before starting, we assume you have a good understanding of Vite's [asynchronous architecture](../vite-basics/README.md), the foundation for many features of Vite's smart contracts. 

## Transferable by Default for Contract

```solidity
// SPDX-License-Identifier: GPL-3.0
pragma soliditypp >=0.8.0;

contract Hello {
   // Receive Token
   receive() external payable {
   }
}
```

## Transfer to Other Addresses in the Vite Contract
```solidity
// SPDX-License-Identifier: GPL-3.0
pragma soliditypp >=0.8.0;

contract Hello {
   vitetoken public constant VITE = "tti_5649544520544f4b454e6e40";

   function transferTo(address payable to, uint256 num) payable external {
      require(msg.token == VITE, "require vite");
      require(msg.value >= num, "enough to transfer");

      // send VITE to `to`
      to.transfer(VITE, num);
   }
}

```

## Emit an Event in the Vite Contract
```solidity
// SPDX-License-Identifier: GPL-3.0
pragma soliditypp >=0.8.0;

contract Hello {
   // declare event
   event SayHello(address to, bytes message);

   function sayHello(address to, bytes memory message) external {
	   // trigger event
	   emit SayHello(to, message);
   }
}
```

## Using the `indexed` in the Vite contract event (todo)

## Getting Random Numbers
```solidity
// SPDX-License-Identifier: GPL-3.0
pragma soliditypp >=0.8.0;

contract Hello {

   event SayHello(address to, uint64 i, uint256 num);

   function randomEvent(address to) external {
	   emit SayHello(to, 0, random64()); // get random number
	   emit SayHello(to, 1, random64()); // get same random number
	   emit SayHello(to, 2, nextrandom()); // get different random number
	   emit SayHello(to, 4, nextrandom()); // get different random number
   }
}
```

## Calling Other Contracts Asynchronously

```solidity
// SPDX-License-Identifier: GPL-3.0
pragma soliditypp >=0.8.0;

interface Callee {
    function invoke(uint num) external;
}

contract Hello {
    function callTo(address to, uint num) external {
        Callee callee = Callee(to);
        callee.invoke(num);
    }
}

contract HelloCallee is Callee {
   event CallEvent(address from, uint256 num);

   function invoke(uint num) external override {
	   emit CallEvent(msg.sender, num); 
   }
}
```
