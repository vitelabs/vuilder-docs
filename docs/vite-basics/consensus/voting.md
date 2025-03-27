---
order: 3
---

# Voting

Definitions:
* **Voting**：An on-chain governance behavior by calculating the VITE coins (or other possible tokens) held by voters to elect SBP (or delegate nodes in consensus groups).
* **Consensus group**: A group of nodes that are selected to produce snapshot blocks (Snapshot consensus group), send/receive transactions (Private consensus group) or execute smart contracts (Delegated consensus group) through voting.
* **SBP**：The delegate node in snapshot consensus group and eligible for producing snapshot blocks.
* **Delegate node**：The node in a consensus group and eligible for producing certain blocks for the consensus group.

## Voting and Consensus Group

There are two kinds of voting on Vite.

* Voting for SBP
* Voting for delegate node in a delegated consensus group

Smart contract may assign a delegated consensus group to execute. One can vote for the node in the group with any token the consensus group has specified.

Snapshot consensus group has id "00000000000000000001". It consists of the top 100 SBPs. The same SBPs also comprise the default delegated consensus group for all smart contracts that don't assign a consensus group. The default delegated consensus group id is "00000000000000000002".

The default delegated consensus group is also called global consensus group.

Private consensus group doesn't need vote because it is always composed of the node/account itself. 

> Note: The feature of consensus group will be fully opened in a future version

## Voting Rules

One can
* Vote for an SBP at any time
* Re-vote for a different SBP at any time
* Withdraw vote at any time (voting has no locking period)
* Vote for multiple consensus groups at the same time

One can NOT
* Vote for multiple SBPs at the same time
* Vote for multiple delegate nodes in the same consensus group at the same time
* Vote for delegate node in global consensus group since they must be the same nodes in snapshot consensus group

## Voting Rewards

Voting can or cannot have rewards. Distributing voting rewards to individual voters is not built in Vite's protocol. Thus, it is completely the responsibility of every SBP (or delegate node in delegated consensus group) to decide whether (and how) to distribute voting rewards to the voters.

!!! tip "List of SBPs that distribute rewards"
    Vite community maintains a list on which the SBPs distribute voting rewards to supporters. Ask the CM for the list!
