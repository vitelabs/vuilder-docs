---
title: Vite Documentation
description: Zero-Fee Blockchain for the World's Decentralized Economy
footer:
  newsletter: false
aside: true
---

# What Is Vite And What Makes Vite Different

Blockchain is a technology that allows users to trust that the Internet computer programs they interact with will operate "as is." This means the blockchain gives assurance that the programs will be executed according to the associated open source code. This is made possible due to the tamper-resistant nature of the data and code instructions ("smart contracts") stored on the blockchain. Any attacker will have a hard time altering said data and smart contracts once they have been added to the blockchain.

There are many approaches to designing a blockchain. In general, a _practically usable_ blockchain should have the following features:

* **Scalability**: The chain should be able to process large number of transactions per unit of time to accommodate real-world applications.
* **Fast finality**: It doesn't take too long for a transaction to be considered irreversable, otherwise crippling practical commerce.
* **Affordability**: The fees for using a blockchain should not be prohibitively expensive.
* **Security**: The potential power to reverse transactions should be distributed widely to avoid attacks by a small group of colluders.


Vite was designed to take all the above features into account. In particular, Vite shines in facilitating **fast-finality** transactions at **exactly zero fees**. Vite is able to accomplish this with the following designs:

* **Token locking model**: Instead of requiring fees (e.g., gas for Ethereum), Vite users lock VITE tokens to secure the resources needed for transactions.
* **Asynchronous architecture**: Allow parallel processing for both payment transactions and smart contract calls. De-couple a send from a receive for payment transactions. De-couple invocation and execution for smart contract calls.
* **Directed Acyclic Graph ledger**: Each account has its own blockchain, and transactions are confirmed as they are appended to the respective individual chains.
* **Hierarchical Delegated Proof of Stake**: The basic version of Delegated Proof Of Stake (DPOS) lets a set of voted-in validators take turns validating the network. "Hierarchical" allows each contract to specify its own group of such validators (aka "consensus group"), which defaults to the global consensus group (or snapshot consensus group)

Read the [Whitepaper](https://github.com/vitelabs/whitepaper/blob/master/vite_en.pdf) for more details.

Now that you have a basic idea for what Vite does and how it's different, you may want to learn more about various components of the Vite stack. You can also begin developing on the Vite chain by checking out [Solidity++](../soliditypp/fundamentals/), [the front-end](../SDK/ViteJS/), [common patterns](../common-patterns/), and [Vite Express](../vite-express/).

