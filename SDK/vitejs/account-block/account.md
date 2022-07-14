---
order: 3
---

# `Account` Instance

Instance of `Account` represents a user account on the Vite blockchain. 

> Note: NOT applicable to smart contract accounts. 

## `Constructor`
- **Constructor**
	- `object`
		- `address: Address` Address of account
- **Example**
	```js
	import { accountBlock } from '@vite/vitejs';
	const { Account } = accountBlock;
	const account = new Account(address);
    account.setProvider(viteApi);
    account.setPrivateKey(privateKey);
	```

## Methods

### `receive`
Receive a transaction
- **Parameters** 
	- `object`
		- `sendBlockHash: Hex` Hash of the request transaction
- **Example**
	```js
    account.receive({ // blockType: 4
		sendBlockHash: '156a47de8b5a690562278360e41e337ee4f1b4aa8d979f377beb0cc70f939032'
	});
	```

### `send`
Send a transaction
- **Parameters** 
	- `object`
		- `toAddress: Address` Transaction recipient's address
		- `tokenId: TokenId = Vite_TokenId` Token id. The default token is VITE
		- `amount: BigInt = '0'` Amount of tokens to send (in base unit, e.g. `1000000000000000000` stands for 1 VITE)
		- `data?: Base64` Additional data
- **Example**
	```js
	account.send({ // blockType: 2
		toAddress: 'vite_553462bca137bac29f440e9af4ab2e2c1bb82493e41d2bc8b2',
		tokenId: 'tti_5649544520544f4b454e6e40',
		amount: '1000000000000000000',
		data: 'pinFMQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB'
	});
	```

### `createContract`
Deploy a smart contract
- **Parameters** 
	- `object`
		- `code: Hex` Complied code of contract in hex format
		- `responseLatency: Uint8 = '0'` See [Response Latency](../../../vite-basics/smart-contract.md#response-latency)
		- `quotaMultiplier: Uint8 = '10'` See [Quota Multiplier](../../../vite-basics/smart-contract.md#quota-multiplier)
		- `randomDegree: Uint8 = '0'` See [Random Degree](../../../vite-basics/smart-contract.md#random-degrees)
		- `abi?: object | Array<object>` ABI of the constructor. If your contract doesn't have a constructor, ignore this field.
		- `params?: string | Array<string | boolean>` Passed-in parameter(s) of the constructor. If your contract doesn't have a constructor, ignore this field.
- **Example**
	```js
	account.createContract({ // blockType: 1
		abi:{"inputs":[{"name": "addr","type": "address"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},
		code: '608060405234801561001057600080fd5b50610141806100206000396000f3fe608060405260043610610041576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806391a6cb4b14610046575b600080fd5b6100896004803603602081101561005c57600080fd5b81019080803574ffffffffffffffffffffffffffffffffffffffffff16906020019092919050505061008b565b005b8074ffffffffffffffffffffffffffffffffffffffffff164669ffffffffffffffffffff163460405160405180820390838587f1505050508074ffffffffffffffffffffffffffffffffffffffffff167faa65281f5df4b4bd3c71f2ba25905b907205fce0809a816ef8e04b4d496a85bb346040518082815260200191505060405180910390a25056fea165627a7a7230582023e9669dd6fec3b6b2a84a1fd7c9939f49197203d0e1db312278e633c219c2480029',
		responseLatency: 2,
		params: ['vite_13f1f8e230f2ffa1e030e664e525033ff995d6c2bb15af4cf9']
	});
	```

### `callContract`
Call smart contract
- **Parameters** 
	- `object`
		- `toAddress: Address` Address of contract
		- `abi: object | Array<object>` ABI
		- `methodName?: string` Name of the method to call
		- `params?: any = []` Passed-in parameters
		- `tokenId: TokenId = Vite_TokenId` Token id
		- `amount: BigInt = '0'` Amount of tokens to send (in base unit, e.g. `1000000000000000000` stands for 1 VITE)
		- `fee: BigInt = '0'` Transaction fee
- **Example**
	```js
	import { constant } from '~@vite/vitejs';
	const { Contracts, Vite_TokenId } = constant;

	account.callContract({
		abi: Contracts.RegisterSBP.abi,
		toAddress: Contracts.RegisterSBP.contractAddress,
		params: ['sbpName', blockProducingAddress, rewardWithdrawAddress],
		tokenId: Vite_TokenId,
		amount: '1000000' + '0'.repeat(18),
	});
	```

### `registerSBP`
Register an new SBP

**Note**: To register an SBP node, transferring 1,000,000 `VITE` is required. The transferred VITE will be locked for 7,776,000 snapshot blocks (about 3 months), after which it can be withdrawn if you choose to cancel your SBP.
- **Parameters** 
	- `object`
		- `sbpName: string` See [SBP name](../../../vite-basics/consensus/snapshot-block-producer.md)
		- `blockProducingAddress: Address` See [Block Creation Address](../../../vite-basics/consensus/snapshot-block-producer.md)
		- `rewardWithdrawAddress: Address` See [Reward Withdrawal Address](../../../vite-basics/consensus/snapshot-block-producer.md)
		- `amount: BigInt = '1000000000000000000000000'` A default amount of 1M VITE is required for SBP registration.
- **Example**
	```js
	account.registerSBP({ // blockType: 2
		sbpName: 'TEST_NODE',
		blockProducingAddress: 'vite_553462bca137bac29f440e9af4ab2e2c1bb82493e41d2bc8b2',
		rewardWithdrawAddress: 'vite_5e8d4ac7dc8b75394cacd21c5667d79fe1824acb46c6b7ab1f',
	});
	```

### `updateSBPBlockProducingAddress`
Update an SBP's block producing address
- **Parameters** 
	- `object`
		- `sbpName: string` See [SBP name](../../../vite-basics/consensus/snapshot-block-producer.md)
		- `blockProducingAddress: Address` New block producing address
- **Example**
	```js
	account.updateSBPBlockProducingAddress({ // blockType: 2
		sbpName: 'TEST_NODE',
		blockProducingAddress: 'vite_5e8d4ac7dc8b75394cacd21c5667d79fe1824acb46c6b7ab1f',
	});
	```

### `revokeSBP`
Cancel an SBP's registration
- **Parameters** 
	- `object`
		- `sbpName: string` Name of the SBP
- **Example**
	```js
	account.revokeSBP({ // blockType: 2
		sbpName: 'TEST_NODE'
	});
	```

### `withdrawSBPReward`
Withdraw an SBP's mining rewards
- **Parameters** 
	- `object`
		- `sbpName: string` Name of the SBP
		- `receiveAddress: Address` An address to receive rewards
- **Example**
	```js
	account.withdrawSBPReward({ // blockType: 2
		sbpName: 'TEST_NODE',
		receiveAddress: 'vite_553462bca137bac29f440e9af4ab2e2c1bb82493e41d2bc8b2',
	});
	```

### `voteForSBP`
Vote for an SBP
- **Parameters** 
	- `object`
		- `sbpName: string` Name of the SBP
- **Example**
	```js
	account.voteForSBP({ // blockType: 2
		sbpName: 'TEST_NODE'
	});
	```

### `cancelSBPVoting`
Cancel voting
- **Parameters** 
	- none
- **Example**
	```js
	account.cancelSBPVoting();
	```

### `stakeForQuota`
Supply a beneficiary address with quota
- **Parameters** 
	- `object`
		- `beneficiaryAddress: Address` Address of quota beneficiary
		- `amount: BigInt` Amount of VITE to lock (in base unit, e.g. `134000000000000000000` stands for 134 VITE)
> Note: the minimum locking amount is 134 VITE.
- **Example**
	```js
	account.stakeForQuota({ // blockType: 2
		beneficiaryAddress: 'vite_553462bca137bac29f440e9af4ab2e2c1bb82493e41d2bc8b2',
		amount: '134' + '0'.repeat(18),
	});
	```

### `cancelQuotaStake`
Cancel locking for quota and withdraw the locked tokens.
- **Parameters** 
	- `object`
		- `id: string` Locking id - referring to the hash of the locking transaction.
- **Example**
	```js
	account.cancelQuotaStake({ // blockType: 2
		id: '401d46c2330d3c76c8f0da6be2a24b17c5e3ece9c28d80a74e91146d1f95ad2e'
	});
	```

### `issueToken`
Create a new token
- **Parameters** 
	- `object`
		- `tokenName: string` Name of token in 1-40 characters. See [Token Name](../../../vite-basics/token-model.md#minting).
		- `tokenSymbol: string` Symbol of token in 1-10 characters. See [Token Symbol](../../../vite-basics/token-model.md#minting).
		- `decimals: Uint8` See [Decimals](../../../vite-basics/token-model.md#minting)
		- `maxSupply: Uint256` See [Max Supply](../../../vite-basics/token-model.md#minting). For non-reissuable token, fill in `0`.
		- `totalSupply: Uint256` See [Total Supply](../../../vite-basics/token-model.md#minting). For re-issuable tokens, this is the initial supply
		- `isReIssuable: boolean` See [ReIssuable Flag](../../../vite-basics/token-model.md#minting)
		- `isOwnerBurnOnly: boolean` Only applies to re-issuable token. If `true`, the token can only burned by owner. For non-re-issuable token, fill in `false`.
	> Note: `isOwnerBurnOnly` is deprecated and removed from the latest go-vite release.
- **Example**
	```js
	account.issueToken({ // blockType: 2
		tokenName: 'TestCoin', 
		isReIssuable: true, 
		maxSupply: '10000000000000000000000000', 
		isOwnerBurnOnly: false, 
		totalSupply: '100000000000000000000000', 
		decimals: 2, 
		tokenSymbol: 'TEST'
	});
	```

### `reIssueToken`
Re-issue additional amount of tokens

> Note: A re-issuable token's owner can mint additional amount of tokens by re-issuance - not applicable to non-re-issuable tokens and only the owner of the token can do this.
- **Parameters** 
	- `object`
		- `tokenId: TokenId` Token id
		- `amount: BigInt` Amount of tokens to mint (in base unit, e.g. `1000000000000000000000` stands for `1000` for a 18-decimal token)
		- `receiveAddress: Address` Address to receive newly minted tokens
- **Example**
	```js
	account.reIssueToken({ // blockType: 2
		tokenId: 'tti_f1fdb1fce23ca4a2c760012c',
		amount: '1000000000000000000000',
		receiveAddress: 'vite_553462bca137bac29f440e9af4ab2e2c1bb82493e41d2bc8b2'
	});
	```

### `burnToken`
Burn tokens

> Note: Re-issuable tokens can be burned by sending the amount of tokens to the built-in token issuance contract - not applicable to non-re-issuable tokens.
- **Parameters** 
	- `object`
		- `tokenId: TokenId` Token id
		- `amount: BigInt` Amount of tokens to mint (in base unit, e.g. `1000000000000000000000` stands for `1000` for a 18-decimal token)
- **Example**
	```js
	account.burnToken({ // blockType: 2
		tokenId: 'tti_5649544520544f4b454e6e40',
		amount: '1000000000000000000000'
	});
	```

### `disableReIssueToken`
Change a re-issuable token to non-re-issuable

> Note: only the owner of the token can do this.

:::warning
This action cannot be reversed
:::
- **Parameters** 
	- `object`
		- `tokenId: TokenId` Token id
- **Example**
	```js
	account.disableReIssueToken({ // blockType: 2
		tokenId: 'tti_5649544520544f4b454e6e40'
	});
	```

### `transferTokenOwnership`
Block type for transferring a token's ownership

> Note: only applicable to re-issuable tokens and only the owner of the token can do this.
- **Parameters** 
	- `object`
		- `tokenId`: `string tokenId` Token id
		- `newOwnerAddress`: `string address` Address of new owner
- **Example**
	```js
	account.transferTokenOwnership({ // blockType: 2
		tokenId: 'tti_5649544520544f4b454e6e40',
		newOwnerAddress: 'vite_869a06b8963bd5d88a004723ad5d45f345a71c0884e2c80e88'
	});
	```
