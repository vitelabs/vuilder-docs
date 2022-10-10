---
order: 1
---

# Snapshot Block Producer

Snapshot Block Producer, also known as SBP, is a delegated node in the Vite network. The SBP's primary function is to secure the network. It does so by producing blocks ("snapshot blocks") that each stores a snapshot of the ledger. This snapshot includes the balance of the account, the Merkle root of the contract state, and the hash of the last block of each account chain. 

Definitions:
* **SBP Name**: A string of 1-40 characters, including alphabet characters, numbers, underscores, dots and space. The SBP name must be unique. Consecutive spaces and initial/trailing spaces are not allowed. SBP name must be assigned at registration and cannot be changed afterwards.
* **A Round**: approximately 75 seconds, in which votes of SBPs are re-calculated. Ideally, 75 snapshot blocks are produced in a round.
* **A Cycle**: Equivalent to 1152 rounds, approximately one day.
* **Registration Address**: Also known as **SBP Owner**. This is the address where the SBP is registered.
* **Block Creation Address**: The address on the SBP node used for producing snapshot blocks.
* **Reward Withdrawal Address**: The SBP owner can designate a separate address eligible for retrieving SBP rewards on the owner's behalf.

## SBP Registration

Registering SBP is a permissionless process. The registration address must stake **1,000,000 VITE**, send an [SBP Registration transaction](https://x.vite.net/walletSBP), and wait till its confirmation.

The 1 million VITE will be locked for **3 months (7776000 snapshot blocks)**.

After the lock-up period expires, the SBP owner (registration address) can cancel the registration and retrieve the locked fund through a Cancel Registration transaction. The canceled SBP will be removed from the list of SBPs after confirmation of the cancel transaction.

For safety, SBP owners are advised to use three different Vite addresses for registration, block production and rewards retrieval.

## How an SBP Works

Each SBP is responsible for maintaining consensus of the ledger by recording the ledger state in snapshot blocks. The snapshot blocks are chained together, where each block refers to the hash of the previous snapshot block, forming the Snapshot Chain.

**In each round of 75 seconds,** 25 SBPs are selected to produce new blocks, and each selected SBP will get to produce 3 consecutive blocks.

Rules for the selection process:
* 23 SBPs are randomly selected from the top 25 SBPs.
* 2 SBPs are randomly selected from the SBPs ranking from 26 to 100.

The SBPs are ranked by votes from VITE holders. In each round, votes are re-calculated to rank the SBPs for the following round.

## SBP Rewards

*VITE* has a fixed annual inflation of 30 million coins. As a percentage of the total supply, the inflation starts at 3% and declines steadily every year. All the inflated amounts are distributed to SBPs as rewards. On the Vite Mainnet, the reward for each snapshot block is ${0.951293759512937595}$ VITE.

The rewards are equally split into two parts:

* 50% goes to SBPs, proportionate to the number of blocks each produced (**Block Creation Reward**).

* 50% goes to the top 100 SBPs (**Candidate Additional Reward**), per rules below.

Distributing Candidate Additional Reward:

* Distribute proportionately to the votes each SBP received in the last round of the cycle.
* Rewards are generated daily, precisely in every 1152 rounds.
* In each cycle, the SBP's up-time is calculated as $\frac{Total Blocks Produced}{Total Blocks On Target}$.

## Rewards Calculation

There are 1152 rounds in **a cycle**. On the Vite Mainnet, the first cycle started at 04:00 UTC, May 21, 2019.

Total eligible rewards for an SBP (S) in one cycle (Q) is calculated as:

$$Q = 0.5*\frac{n}{m}\frac{V}{W}XR + 0.5*nR$$

Here:
* `n`: the number of blocks produced by the SBP S in one cycle
* `m`: the number of blocks expected to be produced by the SBP S in one cycle. If no SBP successfully produces blocks in a round, m should be reduced by the target number of blocks produced for SBP S in that round.
* `X`: the total number of blocks produced by all the SBPs in one cycle
* `W`: the total votes received by the top 100 SBPs in the last round of a cycle, plus the total staked VITE for registration of all the top 100 SBPs (1M VITE for each SBP in the Mainnet)
* `V`: the votes received by the SBP in the last round of a cycle, plus the staked VITE for registration of this node (1M VITE for each SBP in the Mainnet)
* `R`: Block Creation Reward, 0.951293759512937595 VITE per block.

Note:

* Per the formula above, if an SBP ranks below top 100 in the last round of a cycle, the reward for that SBP in this cycle is 0
* There is no reward for the first cycle after the SBP is registered.
* There is no reward for the last cycle when the SBP is canceled.
* If all SBPs produced zero block in aggregate in a round, this round will be excluded from reward calculation (total target blocks of this round will be set to zero)

## Rewards Withdrawal

Rules:

* A reward withdrawal transaction must be initiated from the registration address, or a reward withdrawal address (as designated by the registration address).
* When withdrawing rewards, only blocks generated 48 rounds (1 hour) or earlier is eligible for rewards calculation. Blocks that were generated in the recent 48 rounds will not be included in the calculation. 
* Rewards can be withdrawn to any valid Vite address.
