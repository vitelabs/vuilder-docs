---
order: 3
title: Asset
---

# Asset Built-in Contract
## Contract Address
`vite_000000000000000000000000000000000000000595292d996d`

## ABI
```json
[
  // Issue new token
  {"type":"function","name":"IssueToken","inputs":[{"name":"isReIssuable","type":"bool"},{"name":"tokenName","type":"string"},{"name":"tokenSymbol","type":"string"},{"name":"totalSupply","type":"uint256"},{"name":"decimals","type":"uint8"},{"name":"maxSupply","type":"uint256"},{"name":"isOwnerBurnOnly","type":"bool"}]},
  // Re-issue. Mint additional tokens
  {"type":"function","name":"ReIssue","inputs":[{"name":"tokenId","type":"tokenId"},{"name":"amount","type":"uint256"},{"name":"receiveAddress","type":"address"}]},
  // Burn
  {"type":"function","name":"Burn","inputs":[]},
  // Transfer ownership of re-issuable token
  {"type":"function","name":"TransferOwnership","inputs":[{"name":"tokenId","type":"tokenId"},{"name":"newOwner","type":"address"}]},
  // Change token type from re-issuable to non-reissuable
  {"type":"function","name":"DisableReIssue","inputs":[{"name":"tokenId","type":"tokenId"}]},
  // Get token information
  {"type":"function","name":"GetTokenInformation","inputs":[{"name":"tokenId","type":"tokenId"}]},
  // Token issuance event
  {"type":"event","name":"issue","inputs":[{"name":"tokenId","type":"tokenId","indexed":true}]},
  // Token re-issuance event
  {"type":"event","name":"reIssue","inputs":[{"name":"tokenId","type":"tokenId","indexed":true}]},
  // Burn event
  {"type":"event","name":"burn","inputs":[{"name":"tokenId","type":"tokenId","indexed":true},{"name":"burnAddress","type":"address"},{"name":"amount","type":"uint256"}]},
  // Ownership transfer event
  {"type":"event","name":"transferOwnership","inputs":[{"name":"tokenId","type":"tokenId","indexed":true},{"name":"owner","type":"address"}]},
  // Token type change event
  {"type":"event","name":"disableReIssue","inputs":[{"name":"tokenId","type":"tokenId","indexed":true}]},
  // Callback for GetTokenInformation
  {"type":"callback","name":"GetTokenInformation","inputs":[{"name":"id","type":"bytes32"},{"name":"tokenId","type":"tokenId"},{"name":"exist","type":"bool"},{"name":"isReIssuable","type":"bool"},{"name":"tokenName","type":"string"},{"name":"tokenSymbol","type":"string"},{"name":"totalSupply","type":"uint256"},{"name":"decimals","type":"uint8"},{"name":"maxSupply","type":"uint256"},{"name":"isOwnerBurnOnly","type":"bool"},{"name":"index","type":"uint16"},{"name":"ownerAddress","type":"address"}]}
]
```

:::warning
Due to historical reason, this contract also contains a number of other ABIs that are NOT listed in this page. These functions are deprecated and no longer in use. Do NOT use them in your code.
:::

### `IssueToken`

Mint a new token with initial supply. The minted token will be sent to the issuer's account. The cost to mint a token is 1,000 VITE

- **Parameters**: 
  * `tokenName`: `string` [Token name](../../../vite-basics/token-model.md#minting)
  * `tokenSymbol`: `string` [Token symbol](../../../vite-basics/token-model.md#minting)
  * `totalSupply`: `bigint` [Total initial supply](../../../vite-basics/token-model.md#minting)
  * `decimals`: `uint8` [Token decimals](../../../vite-basics/token-model.md#minting)
  * `maxSupply`: `bigint` [Maximum supply](../../../vite-basics/token-model.md#minting)
  * `isReIssuable`: `bool` [Reissuable flag](../../../vite-basics/token-model.md#minting)
  * `isOwnerBurnOnly`: `bool` `true` means the token can only be burned by the owner. **Deprecated**
  
### `ReIssue`

Mint additional units of a re-issuable token and increase the token's total supply. Tokens with fixed supply cannot be reissued.

> Note: Only the token owner can perform this operation.

- **Parameters**: 
  * `tokenId`: `tokenId` [Token id](../../../vite-basics/token-model.md#re-issuance)
  * `amount`: `bigint` [Reissue amount](../../../vite-basics/token-model.md#re-issuance)
  * `receiveAddress`: `address` [Receive Address](../../../vite-basics/token-model.md#re-issuance)

### `Burn`

Burn units of a re-issuable token and reduce the total supply. Tokens with fixed supply cannot be burned.

- **Parameters**: none

### `TransferOwnership`

Transfer a re-issuable token's ownership to another account

> Note: Only the token owner can perform this operation.

- **Parameters**: 
  * `tokenId`: `tokenId` [Token id](../../../vite-basics/token-model.md#ownership-transfer)
  * `newOwner`: `address` [New Owner](../../../vite-basics/token-model.md#ownership-transfer)

### `DisableReIssue`

Permanently change a re-issuable token to non-reissuable

> Note: Only the token owner can perform this operation.

- **Parameters**: 
  * `tokenId`: `tokenId` [Token id](../../../vite-basics/token-model.md#disabling-re-issuance)

### `GetTokenInformation`

Get a token's information. This function is provided for another contract to get a token's information within the contract. For client program you should call RPC `contract_getTokenInfoById`

- **Parameters**: 
  * `tokenId`: `tokenId` Token id

### Callback `GetTokenInformation`

The callback function of `GetTokenInformation`. This will be called back by Asset contract to return result.

> Note: The current Solidity++ 0.8.0 does not support for more than 9 arguments. Solidity++ 0.8.2 will expand this limit to 16.

- **Parameters**: 
  * `id`: `bytes32` Hash of `GetTokenInformation` transaction
  * `tokenId`: `tokenId` Token id
  * `exist`: `bool` `true` means the token exists
  * `isReIssuable`: `bool` `true` means the token is re-issuable
  * `tokenName`: `string` Token name
  * `tokenSymbol`: `string` Token symbol
  * `totalSupply`: `bigint` Total supply
  * `decimals`: `uint8` Token decimals
  * `maxSupply`: `bigint` Maximum supply
  * `isOwnerBurnOnly`: `bool` `true` means the token can only be burned by the owner. **Deprecated**
  * `index`: `uint16` [Token index](../../../vite-basics/token-model.md#token-index)
  * `ownerAddress`: `address` Address of token owner
