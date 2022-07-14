---
order: 2
---

# Snapshot

## Snapshot Block and Snapshot Chain

Per definitions in the Vite whitepaper,
> A snapshot block stores a snapshot of the ledger's state. This includes the balance of the account, the Merkle root of the contract state, and the hash of the last block in each account chain. The snapshot chain is a chain structure composed of snapshot blocks, and each snapshot block refers to the hash of the previous snapshot block. The state of each user account contains the account balance and the hash of the last block of the account chain. In addition to the aforementioned two fields, the state of a contract account also contains its own Merkle root hash.

The structure of account state and snapshot block is as follows: 

```
struct AccountState { 
    map<uint32, uint256> balances;
    optional uint256 storageRoot; 
    uint256 lastTransaction; 
} 

struct SnapshotBlock { 
    uint256 prevHash;
    map<address, AccountState> snapshot;
    uint256 signature; 
}
```

The first snapshot block in the snapshot chain is called **Genesis Snapshot**, which saves the initial states of all the accounts on the blockchain. 

## Snapshot Chain and Consensus

The snapshot chain is a novel blockchain structure composed of snapshot blocks, which are produced by a group of delegated nodes following DPoS consensus algorithm. These nodes are called Snapshot Block Producers (SBP). 

Since each snapshot block in the snapshot chain corresponds to a particular state of the Vite ledger, one can obtain the post-consensus ledger solely from the relevant snapshot block, as long as there is no fork in the network.

When a delegated node sees forks on any account chain, the delegated node will be responsible for selecting the "correct" account chain and reach consensus with other delegated nodes.

If there is a fork in the snapshot chain, the longest branch will be chosen as the correct chain. As appropriate, the snapshot blocks on the original branch will be discarded, and the transactions in these blocks will be reverted. **The snapshot chain is the keystone of Vite's consensus**. 

More information about the snapshot chain [here](../ledger/snapshot-chain.md).

## Snapshot Compression

Saving account states in every snapshot block may consume considerable storage space, hence the necessity for data compression. 

The basic approach of compression is an incremental storage scheme, in which a snapshot block only stores state changes for accounts with new transactions since the previous snapshot block. This means that if an account incurs no transactions between snapshot blocks, the later snapshot block won't include that account's state. Thus, when recovering ledger states, one cannot rely on a single snapshot block, but must traverse from the first snapshot block to the current. The longer time needed for ledger recovery is a reasonable tradeoff for storage saving, since ledger recovery is an uncommon operation.

## Engineering Implementation

In the implementation of `go-vite`, we simplify the `AccountState` into `SnapshotData` to reduce block size for better network propogation.

```
struct SnapshotData { 
    uint256 height; // account block height
    uint256 hash; // account block hash
} 

struct SnapshotBlock { 
    uint256 prevHash;
    map<address, SnapshotData> snapshot;
    uint256 signature; 
}
```

:::tip Note
For each snapshotted account, if more than one transaction took place during the snapshot, only the last transaction is included in the snapshot block, while the previous transactions can be fetched through a ledger API.
:::
