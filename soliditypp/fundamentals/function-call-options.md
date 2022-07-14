---
order: 7
---

# Function Call Options

When calling functions of other contracts, you can specify the amount of a specific token to send, with the call options: `{token: "tti_564954455820434f494e69b5", value: 1e18}`.

```solidity
// SPDX-License-Identifier: GPL-3.0
pragma soliditypp >=0.8.0;

contract InfoFeed {
    function getBalance(vitetoken token) external view returns (uint256) {
        return balance(token);
    }

    function info() external payable returns (uint ret) {
        return 42;
    }
}

contract Consumer {
    InfoFeed feed;

    constructor (address payable addr) {
        feed = InfoFeed(addr);
    }

    function callFeed() external {
        // send 1 VX with the call
        feed.info{token: "tti_564954455820434f494e69b5", value: 1e18}();
    }
}
```

If the `token` call option is omitted, the *VITE* token is sent by default.

The following code:
```solidity
feed.info{value: 1e18}();
```
is equivalent to:
```solidity
feed.info{token: "tti_5649544520544f4b454e6e40", value: 1e18}();
```

::: tip Notice
The `gas`,`salt` keys in a call option are not supported in Solidity++.
:::
