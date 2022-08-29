---
order: 5
title: Token Model
parent:
    title: Vite Basics
    order: 1
---

# Token Model

A token is a digital asset created on a blockchain. Below we'll cover a number of operations related to token management, including: minting (creating tokens), burning (destroying tokens), re-issuance (follow-on mintings), and ownership transfers.

## Token design

The Vite network allows users to issue tokens natively. This means a user can send a mintage transaction to issue a new token, and token balances are maintained in each Vite address. Token transfers will change balances in respective users' accounts. This is different from Ethereum's popular token design (ERC20), where each token is represented by a smart contract that maintains a holder-amount mapping, and token transfers don't change the status of user's accounts.

There are at least four reasons for choosing to design Vite tokens this way:
1. **Security**: Users control their own assets. There is no danger of accidentally approving malicious third-parties in sending tokens from your account, [unlike in ERC20](https://medium.com/mycrypto/bad-actors-abusing-erc20-approval-to-steal-your-tokens-c0407b7f7c7c)
2. **Uniformity**: Different assets follow the same protocol and the same algebra. So issues such as over-issuance, underflow or overflow.
3. **User-friendliness**: No code needs to be written for token issuance, and no contracts need to be deployed, unlike ERC20.
4. **Fair-fees**: Users pay for storage of their own assets only. In contrast, when a user transfers ERC20 assets to a new address, they will be charged an additional gas fee to create a new balance mapping entry in the contract for that address.

## Token ID

The type of token (e.g., "VITE," "VX," "VCP") is represented by a Token Type ID (TTI or Token ID), which is a unique 28 chars hex string consisting of three parts:

* "tti_": 4-char fixed prefix
* TTI<sub>body</sub>: a 10 bytes array, also called **Original Token ID**
* Checksum: a 2-byte BLAKE2b checksum of TTI<sub>body</sub>

The TTI<sub>body</sub> or original token id is derived as:

$$TTI_{body} = blake2b(IssuerAddress + MintageBlockHeight + PrevBlockHash)$$

## Minting

Anyone can send a mintage transaction to issue an new token. The sender's address will subsequently receive the new token in an amount equivalent to the specified total supply in said mintage transaction. 

Issuing a new token will cost ***1,000 VITE***. These tokens will be burned.

Parameters for the mintage transaction: 

* Token Name: 1-40 characters, including uppercase/lowercase letters, spaces and underscores. Consecutive spaces or starting/ending with space is not allowed.
* Token Symbol: 1-10 characters, including uppercase/lowercase letters, spaces and underscores. Cannot use `VITE`, `VCP` or `VX`.
* Total Supply: A number between 0 and 2<sup>256</sup>-1. For re-issuable tokens this is the initial total supply.
* Decimals: Decimal places. It must hold $10^{Decimals} \leq TotalSupply$. Enter 0 if the token has no decimal places.
* ReIssuable Flag: If set, minting additional tokens is possible after the token is issued.
* Max Supply: Specify the maximum supply of the token. This must hold: $TotalSupply \leq MaxSupply \leq 2^{256}-1$. For non-reissuable tokens, this parameter should be set to zero.

## Burning

A burn transaction can be initiated to destroy tokens and reduce the total supply accordingly.

Parameters for the burn transaction:
* Token ID
* Burning Amount: the burning amount will be deducted from the address that sends the burn transaction. After the transaction is confirmed, the total supply of the token is reduced.

Only re-issuable tokens can be burned.

## Ownership Transfer

Note this ownership transfer refers to a change in certain rights to the token. For instance, only the current owner of a re-issuable token is allowed to mint tokens. This concept of ownership transfer is different from the idea of moving units of tokens from one address to another (e.g., sending 50 VITE to another address).

Owner has rights to perform the following operations:

* Re-issue
* Burn
* Transfer token ownership
* Disable re-issuance
* Open new market in ViteX

**Only re-issuable tokens can be transferred**. To effect the transfer, the current owner should send an ownership transfer transaction. A token can only have one owner.

Parameters for the ownership transfer transaction:
* Token ID
* New Owner: Address of the new owner

## Re-issuance

After the initial minting, the owner can mint additional units of re-issuable tokens by sending a re-issuance transaction.

Parameters for the re-issuance transaction:

* Token ID
* Amount: Additional amount to issue
* Receive Address: Address to receive newly minted tokens

## Disabling Re-issuance

The owner of a re-issuable token can initiate a transaction to make the token non-reissuable. Note this operation cannot be reversed, and the token's supply will be permanently capped.

Parameters for the transaction to disable re-issuance:
* Token ID

## Token Index

Token can have the same symbol, e.g. "BTC". In order to distinguish tokens with the same symbol, a distinct index from `000` to `999` is allocated when the token is issued. Token index cannot exceed 999.

Built-in tokens VITE, VX and VCP do not have index.

## Built-in Tokens on Vite

**VITE** (Vite's native coin), **VX** (ViteX Coin -- the token for [ViteX](https://x.vite.net), a decentralized exchange on Vite) and **VCP** (Vite Community Points -- used for purchasing merch at the Vite store) are the initial set of tokens on Vite.

| Token ID | Token Name | Token Symbol | Total Supply | Decimals |
|:------------:|:-----------:|:-----------:|:-----------:|:-----------:|
| tti_5649544520544f4b454e6e40 | Vite Coin | VITE | 1 billion (initial) | 18 |
| tti_251a3e67a41b5ea2373936c8 | Vite Community Point | VCP | 10 billion | 0 |
| tti_564954455820434f494e69b5 | ViteX Coin | VX | 10 million | 18 |
