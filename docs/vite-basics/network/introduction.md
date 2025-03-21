---
order: 1
---

# Introduction

Vite is a decentralized network consisting of many nodes run by independent individuals. But what are nodes exactly and why are they needed? First we need to understand the difference between a client and a node. In the computing world, a "client" refers to any type of software that is downloaded onto your computer and helps you interact with another type of software or service provided by a server. For example, Thunderbird is a software client that connects to an email server and allows users to send and receive emails.

A Vite client is the software needed to allow Vite nodes to process data on the Vite blockchain. The data stored by each node includes transactions (Transaction/AccountBlock), snapshots (SnapshotBlock), account states (AccountState), and virtual machine states (VmState). A "node" is the running piece of the client software. In order to run a node, you have to first download a Vite client application. Vite Labs maintains a client written in Go which can be found [here](https://github.com/vitelabs/go-vite).

## Nodes

A "node" is a computer that performs a certain function on the Vite network and runs client software in order to do so. Depending on what your specific needs are, whether it be a decentralized application (dApp) or a wallet, there are two different types of nodes that can be run by the client: full nodes and snapshot block producers. Both node types have different requirements in terms of hardware but also different purposes in the Vite network. You can find a dedicated chapter for each node type:

- [Full Node](./nodes.md#full-node)
- [Snapshot Block Producer](./nodes.md#snapshot-block-producer)

## Networks

Since Vite is a protocol, this means there can be multiple independent "networks" conforming to this protocol that do not interact with each other.

Networks are different Vite environments you can access for development, testing, or production use cases. Your Vite account will work across the different networks but your account balance and transaction history won't carry over. We distinguish between public and private networks. Public networks are accessible to anyone in the world with an internet connection. Anyone can read or create transactions on a public blockchain and validate the transactions being executed. Agreement on transactions and the state of the network is decided by the consensus mechanism. A network is private if its nodes are not connected to a public network (i.e. mainnet or testnet). In this context, private only means reserved or isolated, rather than protected or secure.

### Mainnet

Mainnet is the primary public Vite production blockchain, where actual-value transactions occur on the distributed ledger.

When people and exchanges discuss $VITE prices, they're talking about Vite mainnet.

### Testnet

Testnet is a public network for testing purposes. It is used by protocol developers or smart contract developers to test both protocol upgrades as well as potential smart contracts in a production-like environment before deployment to mainnet. 

$VITE on testnet has no real value but you still need it to actually interact with the network. To get testnet $VITE you can use the `testnet-faucet` channel in our Discord or message the bot `faucet#9018` directly by writing `!send vite_...`.

### Canary

First piloted by the Polkadot team with the Kusama network, a canary network is a stand-alone public network whose primary function is to serve as a testing network. Unlike a traditional testnet, a canary network has real value and projects can be tested and launched on top of it.

Although the canary network is not live yet, in the future it might be used for high-stakes applications that require extensive testing for security e.g. ViteBridge.

### Local

To develop a Vite application, you'll want to run it on a private network to see how it works before deploying it. Similar to how you create a local server on your computer for web development, you can create a local blockchain instance to test your dapp. This allows for much faster iteration than on a public testnet.

There are projects and tools dedicated to assist with this. Learn more about Visual Studio Code Solidity++ [Extension](https://marketplace.visualstudio.com/search?term=Soliditypp&target=VSCode&category=All%20categories&sortBy=Relevance).
