---
order: 1
parent:
    title: Vite.js
    order: 1
---

# Overview

Vite.js is a collection of Javascript libraries that allows you to interact with a local or remote Vite node using HTTP, IPC or WebSocket.

Vite.js mainly provides:

* Basic functions, such as network connection, abi resolution, data encoding/decoding, address derivation, etc.
* Wrapped full node RPC API, such as event monitoring, fetching transactions, sending various types of transactions, etc.
* Utility functions, such as generating wallets with mnemonic phrases, validating an Ed25519 signature, etc.
* Advanced usage, including auto-receiving transactions, subscriptions, batch transactions, etc.

With Vite.js, you can easily generate or restore wallets, send or receive transactions, read data from the blockchain, call smart contracts, interact with dapps, and more.

## Installation

Vite.js is broken up into a few modules. Many of these can be imported from the top package `@vite/vitejs`; however some require you to install a separate package. Run the following command in your terminal to install the packages used in this documentation.

```bash
npm i @vite/vitejs
```

> Starting from 2.3.19, all the modules are consolidated into `@vite/vitejs`.

> Starting from 2.4.0, the following packages will no longer be published. The related resources should be imported from `@vite/vitejs` instead.
> * @vite/vitejs-abi
> * @vite/vitejs-accountblock
> * @vite/vitejs-communication
> * @vite/vitejs-constant
> * @vite/vitejs-error
> * @vite/vitejs-http
> * @vite/vitejs-ipc
> * @vite/vitejs-utils
> * @vite/vitejs-viteapi
> * @vite/vitejs-wallet
> * @vite/vitejs-ws
