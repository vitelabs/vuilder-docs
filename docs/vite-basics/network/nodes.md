---
order: 2
---

# Node Types

## Full Node

In Vite network, a full node is responsible for maintaining a complete copy of ledger, sending or receiving transactions, and verifying all transactions in the network. Full nodes can also participate in SBP election and voting. A full node can expose HTTP/WebSocket APIs externally and has a command line interface locally.

### Registration

Registering a full node is permission-less. The registration address shall have **10,000 VITE** for staking, then send a [registration transaction](https://x.vite.net/walletFullNode) and wait until the transaction is confirmed.

The 10k VITE will be locked up for **30 days (2592000 snapshot blocks)**.

After the lock-up period expires, the node owner (registration address) can cancel the registration and retrieve the locked fund through a Cancel Registration transaction. The cancelled full node will be removed from the network list after the transaction is confirmed. 

For safety purpose, node owners are recommended to use 2 separate Vite addresses for registration and withdrawing rewards respectively.

![](./assets/nodes-01.png)

## Snapshot Block Producer

A Snapshot Block Producer (SBP) is a delegated node in the Vite network. The primary function of SBP is to secure the network by producing snapshot blocks that store a state snapshot of the Vite ledger. This includes the balance of the account, the Merkle root of the contract state, and the hash of the last block of each account chain. To find out how an SBP works, please refer to [Consensus](../consensus/snapshot-block-producer.md#how-an-sbp-works).

!!! tip
  Before continue reading, please see the [setup guide](./setup.md) on how to install gvite.

### Terminology of SBP Addresses

There are three addresses associated with the operation of an SBP.

* **Block Creation Address**: The SBP will be signing blocks from this address.
* **Staking Address**: Each SBP is required to stake 1M (1,000,000) VITE to be eligible for producing blocks and earning rewards.
* **Reward Withdraw Address**: Block rewards can be retrieved at this address.

Theoretically, all three addresses can be one and the same. But it is **STRONGLY RECOMMENDED** that the **Block Creation Address** be different from the **Staking Address**.

Also, the owner of the **Block Creation Address** and the owner of the **Staking Address** can be different. This means the operator of the SBP can ask someone else to stake the 1M VITE on their behalf. The staking process (aka registration process) is described in a later section.

### Configuration

To reate the **Block Creation Address**, follow instructions [here](./rpc-ipc.md#create-wallet). Take the output from the wallet creation process and append the below 4 properties in **node_config.json**:

* Set `Miner` as `true`
* Set `CoinBase` to the **Block Creation Address**, in the format of `index:address`. For example: `0:vite_f1c2d944b1e5b8cbfcd5f90f94a0e877beafeced1f331d9acf`.
* Set `EntropyStorePath` to the **Block Creation Address**. For example: `vite_f1c2d944b1e5b8cbfcd5f90f94a0e877beafeced1f331d9acf`.
* Set `EntropyStorePassword` as the password you used to generate the **Block Creation Address**
  * Note: This password is sometimes referred to as the "keystore password" corresponding to the **Block Creation Address**.
  * Note: This password, when combined with `EntropyStorePath`, can derive the SBP's private key for signing blocks produced

### Registration

!!! tip
  Registering a new SBP requires staking 1M (1,000,000) VITE. Please make sure you have at least this amount in your account.

Log in [Vite Web Wallet](https://x.vite.net/) and navigate to **SBP Registration** page.

Fill in **Node Name** and **Block Creation Address**. 

Please note that **Block Creation Address** is the CoinBase address you configured above and is only responsible for producing new blocks. Do NOT use your **Staking Address** as **Block Creation Address**.

![](./assets/nodes-03.png)

After registration of the SBP, you may change the **Reward Withdraw Address** (as well as the **Block Creation Address**) via the following screens.

![](./assets/nodes-04.jpg)
![](./assets/nodes-05.jpg)

**SBP Name**

Please choose your SBP name carefully. Once registered the SBP name cannot be changed anymore. Use an interesting name to gain recognition from the community and draw votes.

**SBP Ranking List**

Visit [https://vitescan.io/sbps](https://vitescan.io/sbps) for the ranking list.
