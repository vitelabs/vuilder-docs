---
order: 1
parent:
    title: Account Block
    order: 8
---

# Module

## What is Account Block?

Vite adopts the ledger structure of DAG (Directed Acyclic Graph). Each account has a chain composed of a list of account blocks.

Let's look at the process that account A sends a transaction to account B. First, account A creates an `AccountBlock` instance with `toAddress` set to the address of account B; account A signs the transaction and sends it; when the transaction is confirmed, the transfer is done.

The most common `AccountBlock` must contain four pieces of information as follows:
1. The recipient's address
2. The token id
3. The amount of token to send
4. The hash of last account block so that the current account block can link to it

> Note: for response transactions, the recipient's address is not required, instead, you need to provide the send block hash.

See [here](../../vite-basics/ledger/account-chains.md) for more information about account block and account chain.

## Module Import
```js
import { accountBlock } from '@vite/vitejs';
const { createAccountBlock, utils, AccountBlock } = accountBlock;
```

## Methods

### `createAccountBlock`
Create an `AccountBlock` instance with a given type
- **Parameters** 
	- `transactionType: string` See [Transaction Types](#transaction-types) below for possible transaction types
	- `params: object` See [Transaction Types](#transaction-types) below for possible parameters
- **Returns**
	- `AccountBlock` instance
- **Example**
	```js
	const block = createAccountBlock('receive', {
		address: account.address,
		sendBlockHash: '44e69ea04fe830c9075c01e46f102d0c543b4119ce13ec575aee2e96501049fc',
	});
	block.setProvider(viteApi);
	block.setPrivateKey(account.privateKey);
	await block.autoSetPreviousAccountBlock();
	block.sign(account.privateKey);
	await block.autoSend();
	```

## Transaction Types

The possible transaction types that are accepted by `createAccountBlock` method are listed below. In fact, they are methods of `Account` class that we will cover in [Account Class](./account.md) chapter.

### `receive`
Transaction type for receiving unreceived transactions
- **Parameters** 
	- `object`
		- `address: Address` Address of account
		- `sendBlockHash: Hex` Hash of the request transaction
- **Returns**
	- `AccountBlock` instance
- **Example**
	```js
	const block = createAccountBlock('receive', { // blockType: 4
		address: 'vite_553462bca137bac29f440e9af4ab2e2c1bb82493e41d2bc8b2',
		sendBlockHash: '156a47de8b5a690562278360e41e337ee4f1b4aa8d979f377beb0cc70f939032'
	});
	```

### `send`
Transaction type for sending a transaction
- **Parameters** 
	- `object`
		- `address: Address` Address of account
		- `toAddress: Address` Transaction recipient's address
		- `tokenId: TokenId = Vite_TokenId` Token id. The default token is VITE
		- `amount: BigInt = '0'` Amount of tokens to send (in base unit, e.g. `1000000000000000000` stands for 1 VITE)
		- `data?: Base64` Additional data
- **Returns**
	- `AccountBlock` instance
- **Example**
	```js
	const block = createAccountBlock('send', { // blockType: 2
		address: 'vite_553462bca137bac29f440e9af4ab2e2c1bb82493e41d2bc8b2',
		toAddress: 'vite_553462bca137bac29f440e9af4ab2e2c1bb82493e41d2bc8b2',
		tokenId: 'tti_5649544520544f4b454e6e40',
		amount: '1000000000000000000',
		data: 'pinFMQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB'
	});
	```

### `createContract`
Block type for creating a smart contract
- **Parameters** 
	- `object`
		- `address: Address` Address of account
		- `code: Hex` Complied code of contract in hex format
		- `responseLatency: Uint8 = '0'` See [Response Latency](../../../vite-basics/smart-contract.md#response-latency)
		- `quotaMultiplier: Uint8 = '10'` See [Quota Multiplier](../../../vite-basics/smart-contract.md#quota-multiplier)
		- `randomDegree: Uint8 = '0'` See [Random Degree](../../../vite-basics/smart-contract.md#random-degrees)
		- `abi?: object | Array<object>` ABI of the constructor. If your contract doesn't have a constructor, ignore this field.
		- `params?: string | Array<string | boolean>` Passed-in parameter(s) of the constructor. If your contract doesn't have a constructor, ignore this field.
- **Returns**
	- `AccountBlock` instance
- **Example**
	```js
	const block = createAccountBlock('createContract', { // blockType: 1
		address: 'vite_553462bca137bac29f440e9af4ab2e2c1bb82493e41d2bc8b2',
		abi:{"inputs":[{"name": "addr","type": "address"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},
		code: '608060405234801561001057600080fd5b50610141806100206000396000f3fe608060405260043610610041576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806391a6cb4b14610046575b600080fd5b6100896004803603602081101561005c57600080fd5b81019080803574ffffffffffffffffffffffffffffffffffffffffff16906020019092919050505061008b565b005b8074ffffffffffffffffffffffffffffffffffffffffff164669ffffffffffffffffffff163460405160405180820390838587f1505050508074ffffffffffffffffffffffffffffffffffffffffff167faa65281f5df4b4bd3c71f2ba25905b907205fce0809a816ef8e04b4d496a85bb346040518082815260200191505060405180910390a25056fea165627a7a7230582023e9669dd6fec3b6b2a84a1fd7c9939f49197203d0e1db312278e633c219c2480029',
		responseLatency: 2,
		params: ['vite_13f1f8e230f2ffa1e030e664e525033ff995d6c2bb15af4cf9']
	});
	```

### `callContract`
Block type for calling a contract
- **Parameters** 
	- `object`
		- `address: Address` Address of account
		- `toAddress: Address` Address of contract
		- `abi: object | Array<object>` ABI
		- `methodName?: string` Name of the method to call
		- `params?: any = []` Passed-in parameters
		- `tokenId: TokenId = Vite_TokenId` Token id
		- `amount: BigInt = '0'` Amount of tokens to send (in base unit, e.g. `1000000000000000000` stands for 1 VITE)
		- `fee: BigInt = '0'` Transaction fee
- **Returns**
	- `AccountBlock` instance
- **Example**
	```js
	import { constant } from '~@vite/vitejs';
	const { Contracts, Vite_TokenId } = constant;

	const block = createAccountBlock('callContract', {
		address: 'vite_553462bca137bac29f440e9af4ab2e2c1bb82493e41d2bc8b2',
		abi: Contracts.RegisterSBP.abi,
		toAddress: Contracts.RegisterSBP.contractAddress,
		params: ['sbpName', blockProducingAddress, rewardWithdrawAddress],
		tokenId: Vite_TokenId,
		amount: '1000000' + '0'.repeat(18),
	});
	```

### `registerSBP`
Block type for registering an SBP

> Note: To register an SBP node, transferring 1,000,000 `VITE` is required. The transferred VITE will be locked for 7,776,000 snapshot blocks (about 3 months), after which it can be withdrawn if you choose to cancel your SBP.
- **Parameters** 
	- `object`
		- `address: Address` Address of account (i.e. SBP Registration Address)
		- `sbpName: string` See [SBP name](../../../vite-basics/consensus/snapshot-block-producer.md)
		- `blockProducingAddress: Address` See [Block Creation Address](../../../vite-basics/consensus/snapshot-block-producer.md)
		- `rewardWithdrawAddress: Address` See [Reward Withdrawal Address](../../../vite-basics/consensus/snapshot-block-producer.md)
		- `amount: BigInt = '1000000000000000000000000'` A default amount of 1M VITE is required for SBP registration.
- **Returns**
	- `AccountBlock` instance
- **Example**
	```js
		const block = createAccountBlock('registerSBP', { // blockType: 2
		address: 'vite_553462bca137bac29f440e9af4ab2e2c1bb82493e41d2bc8b2',
		sbpName: 'TEST_NODE',
		blockProducingAddress: 'vite_553462bca137bac29f440e9af4ab2e2c1bb82493e41d2bc8b2',
		rewardWithdrawAddress: 'vite_5e8d4ac7dc8b75394cacd21c5667d79fe1824acb46c6b7ab1f',
	});
	```

### `updateSBPBlockProducingAddress`
Block type for updating an SBP's block producing address
- **Parameters** 
	- `object`
		- `address: Address` Address of account - must be the SBP's registration address.
		- `sbpName: string` Name of the SBP
		- `blockProducingAddress: Address` New block producing address
- **Returns**
	- `AccountBlock` instance
- **Example**
	```js
	const block = createAccountBlock('updateSBPBlockProducingAddress', { // blockType: 2
		address: 'vite_553462bca137bac29f440e9af4ab2e2c1bb82493e41d2bc8b2',
		sbpName: 'TEST_NODE',
		blockProducingAddress: 'vite_5e8d4ac7dc8b75394cacd21c5667d79fe1824acb46c6b7ab1f',
	});
	```

### `revokeSBP`
Block type for cancelling an SBP
- **Parameters** 
	- `object`
		- `address: Address` Address of account - must be the SBP's registration address.
		- `sbpName: string` Name of the SBP
- **Returns**
	- `AccountBlock` instance
- **Example**
	```js
	const block = createAccountBlock('revokeSBP', { // blockType: 2
		address: 'vite_553462bca137bac29f440e9af4ab2e2c1bb82493e41d2bc8b2',
		sbpName: 'TEST_NODE'
	});
	```

### `withdrawSBPReward`
Block type for withdrawing an SBP's mining rewards
- **Parameters** 
	- `object`
		- `address: Address` Address of account - must be the SBP's registration address.
		- `sbpName: string` Name of the SBP
		- `receiveAddress: Address` An address to receive rewards
- **Returns**
	- `AccountBlock` instance
- **Example**
	```js
	const block = createAccountBlock('withdrawSBPReward', { // blockType: 2
		address: 'vite_553462bca137bac29f440e9af4ab2e2c1bb82493e41d2bc8b2',
		sbpName: 'TEST_NODE',
		receiveAddress: 'vite_553462bca137bac29f440e9af4ab2e2c1bb82493e41d2bc8b2',
	});
	```

### `voteForSBP`
Block type for voting for an SBP
- **Parameters** 
	- `object`
		- `address: Address` Address of account
		- `sbpName: string` Name of the SBP
- **Returns**
	- `AccountBlock` instance
- **Example**
	```js
	const block = createAccountBlock('voteForSBP', { // blockType: 2
		address: 'vite_553462bca137bac29f440e9af4ab2e2c1bb82493e41d2bc8b2',
		sbpName: 'TEST_NODE'
	});
	```

### `cancelSBPVoting`
Block type for cancelling voting
- **Parameters** 
	- `object`
		- `address: Address` Address of account
- **Returns**
	- `AccountBlock` instance
- **Example**
	```js
	const block = createAccountBlock('cancelSBPVoting', {
		address: 'vite_553462bca137bac29f440e9af4ab2e2c1bb82493e41d2bc8b2'
	});
	```

### `stakeForQuota`
Block type for supply a beneficiary address with quota
- **Parameters** 
	- `object`
		- `address: Address` Address of account
		- `beneficiaryAddress: Address` Address of quota beneficiary
		- `amount: BigInt` Amount of VITE to lock (in base unit, e.g. `134000000000000000000` stands for 134 VITE)
	> Note: the minimum locking amount is 134 VITE.
- **Returns**
	- `AccountBlock` instance
- **Example**
	```js
	const block = createAccountBlock('stakeForQuota', { // blockType: 2
		address: 'vite_553462bca137bac29f440e9af4ab2e2c1bb82493e41d2bc8b2',
		beneficiaryAddress: 'vite_553462bca137bac29f440e9af4ab2e2c1bb82493e41d2bc8b2',
		amount: '134' + '0'.repeat(18),
	});
	```

### `cancelQuotaStake`
Block type for cancelling locking for quota and withdrawing the locked tokens.
- **Parameters** 
	- `object`
		- `address: Address` Address of account
		- `id: string` Locking id - referring to the hash of the locking transaction.
- **Returns**
	- `AccountBlock` instance
- **Example**
	```js
	const block = createAccountBlock('cancelQuotaStake', { // blockType: 2
		address: 'vite_553462bca137bac29f440e9af4ab2e2c1bb82493e41d2bc8b2',
		id: '401d46c2330d3c76c8f0da6be2a24b17c5e3ece9c28d80a74e91146d1f95ad2e'
	});
	```

### `issueToken`
Block type for creating a new token

> Note: An issuance fee of 1,000 VITE will be charged from the account of the owner who will subsequently receive an amount of issued tokens equivalent to the total initial supply. The token owner in the context of issuing a new token will not have control of the tokens sent to other accounts. See [here](../../../vite-basics/token-model.md#ownership-transfer) for more information.

- **Parameters** 
	- `object`
		- `address: Address` Address of account (i.e. token owner)
		- `tokenName: string` Name of token in 1-40 characters. See [Token Name](../../../vite-basics/token-model.md#minting).
		- `tokenSymbol: string` Symbol of token in 1-10 characters. See [Token Symbol](../../../vite-basics/token-model.md#minting).
		- `decimals: Uint8` See [Decimals](../../../vite-basics/token-model.md#minting)
		- `maxSupply: Uint256` See [Max Supply](../../../vite-basics/token-model.md#minting). For non-reissuable token, fill in `0`.
		- `totalSupply: Uint256` See [Total Supply](../../../vite-basics/token-model.md#minting). For re-issuable tokens, this is the initial supply
		- `isReIssuable: boolean` See [ReIssuable Flag](../../../vite-basics/token-model.md#minting)
		- `isOwnerBurnOnly: boolean` Only applies to re-issuable token. If `true`, the token can only burned by owner. For non-re-issuable token, fill in `false`.
	> Note: `isOwnerBurnOnly` is deprecated and removed from the latest go-vite release.
- **Returns**
	- `AccountBlock` instance
- **Example**
	```js
	const block = createAccountBlock('issueToken', { // blockType: 2
		address: 'vite_553462bca137bac29f440e9af4ab2e2c1bb82493e41d2bc8b2',
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
Block type for re-issuing additional amount of tokens

> Note: A re-issuable token's owner can mint additional amount of tokens by re-issuance - not applicable to non-re-issuable tokens and only the owner of the token can do this.
- **Parameters** 
	- `object`
		- `address: Address` Address of account (i.e. token owner)
		- `tokenId: TokenId` Token id
		- `amount: BigInt` Amount of tokens to mint (in base unit, e.g. `1000000000000000000000` stands for `1000` for a 18-decimal token)
		- `receiveAddress: Address` Address to receive newly minted tokens
- **Returns**
	- `AccountBlock` instance
- **Example**
	```js
	const block = createAccountBlock('reIssueToken', { // blockType: 2
		address: 'vite_553462bca137bac29f440e9af4ab2e2c1bb82493e41d2bc8b2',
		tokenId: 'tti_f1fdb1fce23ca4a2c760012c',
		amount: '1000000000000000000000',
		receiveAddress: 'vite_553462bca137bac29f440e9af4ab2e2c1bb82493e41d2bc8b2'
	});
	```

### `burnToken`
Block type for burning tokens

> Note: Re-issuable tokens can be burned by sending the amount of tokens to the built-in token issuance contract - not applicable to non-re-issuable tokens.
- **Parameters** 
	- `object`
		- `address: Address` Address of account
		- `tokenId: TokenId` Token id
		- `amount: BigInt` Amount of tokens to mint (in base unit, e.g. `1000000000000000000000` stands for `1000` for a 18-decimal token)
- **Returns**
	- `AccountBlock` instance
- **Example**
	```js
	const block = createAccountBlock('burnToken', { // blockType: 2
		address: 'vite_553462bca137bac29f440e9af4ab2e2c1bb82493e41d2bc8b2',
		tokenId: 'tti_5649544520544f4b454e6e40',
		amount: '1000000000000000000000'
	});
	```

### `disableReIssueToken`
Block type for changing a re-issuable token to non-re-issuable

> Note: only the owner of the token can do this.

:::warning
This action cannot be reversed
:::
- **Parameters** 
	- `object`
		- `address: Address` Address of account (i.e. token owner)
		- `tokenId: TokenId` Token id
- **Returns**
	- `AccountBlock` instance
- **Example**
	```js
	const block = createAccountBlock('disableReIssueToken', { // blockType: 2
		address: 'vite_553462bca137bac29f440e9af4ab2e2c1bb82493e41d2bc8b2',
		tokenId: 'tti_5649544520544f4b454e6e40'
	});
	```

### `transferTokenOwnership`
Block type for transferring a token's ownership

> Note: only applicable to re-issuable tokens and only the owner of the token can do this.
- **Parameters** 
	- `object`
		- `address: Address` Address of account (i.e. token owner)
		- `tokenId`: `string tokenId` Token id
		- `newOwnerAddress`: `string address` Address of new owner
- **Returns**
	- `AccountBlock` instance
- **Example**
	```js
	const block = createAccountBlock('transferTokenOwnership', { // blockType: 2
		address: 'vite_553462bca137bac29f440e9af4ab2e2c1bb82493e41d2bc8b2',
		tokenId: 'tti_5649544520544f4b454e6e40',
		newOwnerAddress: 'vite_869a06b8963bd5d88a004723ad5d45f345a71c0884e2c80e88'
	});
	```

## `utils` Methods

### `isValidAccountBlockWithoutHash`
Determine if an account block is valid regardless of block hash
- **Parameters** 
	- `accountBlock: object` Fields are described above in [Properties](account-block-class.md#properties)
		- `blockType: BlockType`
		- `address: Address`
		- `height: Uint64`
		- `previousHash: Hex`
		- `fee?: BigInt`
		- `amount?: BigInt`
		- `toAddress?: Address`
		- `tokenId?: TokenId`
		- `data?: Base64`
		- `sendBlockHash?: Hex`
		- `difficulty?: BigInt`
		- `nonce?: Base64`
- **Returns**
	- `boolean` If `true`, the account block is valid
- **Example**
	```js
	const isValid = utils.isValidAccountBlockWithoutHash({
		address: 'vite_553462bca137bac29f440e9af4ab2e2c1bb82493e41d2bc8b2',
		amount: '1000000000000000000',
		blockType: 2,
		data: 'pinFMQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB',
		fee: '0',
		height: '105',
		previousHash: '558c6873d27c903ec9067cf54432e9d16d9b31474adab165ad1f6cc392beeb8d',
		toAddress: 'vite_0000000000000000000000000000000000000004d28108e76b',
		tokenId: 'tti_5649544520544f4b454e6e40',
	}); // true
	```

### `isValidAccountBlockWithoutSignature`
Determine if an account block is valid regardless of signature
- **Parameters** 
	- `accountBlock: object` Fields are described above in [Properties](account-block-class.md#properties)
		- `blockType: BlockType`
		- `address: Address`
		- `height: Uint64`
		- `previousHash: Hex`
		- `hash: Hex`
		- `fee?: BigInt`
		- `amount?: BigInt`
		- `toAddress?: Address`
		- `tokenId?: TokenId`
		- `data?: Base64`
		- `sendBlockHash?: Hex`
		- `difficulty?: BigInt`
		- `nonce?: Base64`
- **Returns**
	- `boolean` If `true`, the account block is valid
- **Example**
	```js
	const isValid = utils.isValidAccountBlockWithoutSignature({
		address: 'vite_553462bca137bac29f440e9af4ab2e2c1bb82493e41d2bc8b2',
		amount: '1000000000000000000',
		blockType: 2,
		data: 'pinFMQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB',
		fee: '0',
		hash: '156a47de8b5a690562278360e41e337ee4f1b4aa8d979f377beb0cc70f939032',
		height: '105',
		previousHash: '558c6873d27c903ec9067cf54432e9d16d9b31474adab165ad1f6cc392beeb8d',
		toAddress: 'vite_0000000000000000000000000000000000000004d28108e76b',
		tokenId: 'tti_5649544520544f4b454e6e40',
	}); // true
	```

### `isValidAccountBlock`
Determine if an account block is complete and ready to be sent 
- **Parameters** 
	- `accountBlock: object` Fields are described above in [Properties](account-block-class.md#properties)
		- `blockType: BlockType`
		- `address: Address`
		- `height: Uint64`
		- `previousHash: Hex`
		- `hash: Hex`
		- `signature: Base64`
		- `publicKey: Base64`
		- `fee?: BigInt`
		- `amount?: BigInt`
		- `toAddress?: Address`
		- `tokenId?: TokenId`
		- `data?: Base64`
		- `sendBlockHash?: Hex`
		- `difficulty?: BigInt`
		- `nonce?: Base64`
- **Returns**
	- `boolean` If `true`, the account block is valid.
- **Example**
	```js
	const { address, privateKey } = wallet.createAddressByPrivateKey();
	const block = createAccountBlock('receive', {
		address,
		sendBlockHash: '558c6873d27c903ec9067cf54432e9d16d9b31474adab165ad1f6cc392beeb8d',
	});
	block.setProvider(viteApi);
	block.setPrivateKey(privateKey);
	await block.autoSetPreviousAccountBlock();
	block.sign(privateKey);
	const isValid = utils.isValidAccountBlock(block); // true
	```

### `getAccountBlockHash`
Calculate the hash of an account block

:::tip
Prefer using `block.hash` as this will give you the hash of a valid account block. If a block is invalid, `block.hash` will return `null`.
:::

- **Parameters**
	- `accountBlock: object` Fields are described above in [Properties](account-block-class.md#properties)
		- `blockType: BlockType`
		- `address: Address`
		- `hash?: Hex`
		- `height?: Uint64`
		- `previousHash?: Hex`
		- `fromAddress?: Address`
		- `toAddress?: Address`
		- `sendBlockHash?: Hex`
		- `tokenId?: TokenId`
		- `amount?: BigInt`
		- `fee?: BigInt`
		- `data?: Base64`
		- `difficulty?: BigInt`
		- `nonce?: Base64`
		- `vmlogHash?: Hex`
		- `triggeredSendBlockList?: AccountBlockType[]`
- **Returns**
	- `Hex` Hash of AccountBlock
- **Example**
	```js
	const hash = utils.getAccountBlockHash({
		address: 'vite_ab24ef68b84e642c0ddca06beec81c9acb1977bbd7da27a87a',
		blockType: 2,
		previousHash: 'd517e8d4dc9c676876b72ad0cbb4c45890804aa438edd1f171ffc66276202a95',
		height: '2',
		tokenId: 'tti_5649544520544f4b454e6e40',
		toAddress: 'vite_13f1f8e230f2ffa1e030e664e525033ff995d6c2bb15af4cf9',
		amount: '1000000000000000000000000',
	});

	const block = createAccountBlock('receive', {
		address,
		sendBlockHash: '558c6873d27c903ec9067cf54432e9d16d9b31474adab165ad1f6cc392beeb8d',
	});
	const hash = utils.getAccountBlockHash(block);
	console.log('hash:', hash); // b8db850e1a71d028e5e0e24045bce033b5e430e3da84b524de254a2a6f61fc1d
	console.log('block.hash:', block.hash); // null
	```

### `signAccountBlock`
Calculate the signature of a signed account block. 

:::tip
Use the `block.sign` method to automatically set the signature and public key of the block. See [here](account-block-class.md#sign) for details.
:::

- **Parameters**
	- `accountBlock: object` Fields are described above in [Properties](account-block-class.md#properties)
		- `address: Address`
		- `blockType: BlockType`
		- `hash: Hex`
		- `height: Uint64`
		- `previousHash: Hex`
		- `toAddress?: Address`
		- `tokenId?: TokenId`
		- `amount?: BigInt`
		- `sendBlockHash?: Hex`
		- `data?: Base64`
		- `fee?: BigInt`
		- `difficulty?: BigInt`
		- `nonce?: Base64`
	- `privateKey: Hex` 
- **Returns**
	- `object`
		- `signature: Base64`
		- `publicKey: Base64`
- **Example**
	```js
	const { address, privateKey } = wallet.createAddressByPrivateKey();
	const blockProps = {
		address,
		blockType: 2,
		previousHash: 'd517e8d4dc9c676876b72ad0cbb4c45890804aa438edd1f171ffc66276202a95',
		height: '2',
		tokenId: 'tti_5649544520544f4b454e6e40',
		toAddress: 'vite_13f1f8e230f2ffa1e030e664e525033ff995d6c2bb15af4cf9',
		amount: '1000000000000000000000000',
	};
	const hash = utils.getAccountBlockHash(blockProps);
	const { signature, publicKey } = utils.signAccountBlock(
		{
			hash,
			...blockProps,
		},
		privateKey,
	);
	```

### `messageToData`
Encode a message string into base64 format according to [VEP-8](https://docs.vite.org/vite-docs/vep/vep-8.html).

- **Parameters**
	- `message: string` Message
- **Returns**
	- `Base64` Base64 encoded message
- **Example**
	```js
	const data = utils.messageToData('1212hhhh');
	```

### `isRequestBlock`
Determine if an account block is request transaction based on its `blockType`
- **Parameters**
	- `blockType: BlockType` See [Block Type](account-block-class.md#block-types)
- **Returns**
	- `boolean` If `true`, the block is a request transaction.
- **Example**
	```js
	const block = createAccountBlock('send', {
		address: 'vite_553462bca137bac29f440e9af4ab2e2c1bb82493e41d2bc8b2',
		toAddress: 'vite_553462bca137bac29f440e9af4ab2e2c1bb82493e41d2bc8b2',
		tokenId: 'tti_5649544520544f4b454e6e40',
		amount: '1000000000000000000',
	});
	console.log(utils.isRequestBlock(block.blockType)); // true
	```

### `isResponseBlock`
Determine if an account block is response transaction based on its `blockType`
- **Parameters**
	- `blockType: BlockType` See [Block Type](account-block-class.md#block-types)
- **Returns**
	- `boolean` If `true`, the block is a response transaction.
- **Example**
	```js
	const block = createAccountBlock('receive', {
		address: 'vite_553462bca137bac29f440e9af4ab2e2c1bb82493e41d2bc8b2',
		sendBlockHash: '156a47de8b5a690562278360e41e337ee4f1b4aa8d979f377beb0cc70f939032',
	});
	console.log(utils.isResponseBlock(block.blockType)); // true
	```

### `getCreateContractData`
Generate data of `AccountBlock` for creating smart contract
- **Parameters**
	- `object`
		- `code: Hex` Complied code of contract in hex format
		- `responseLatency: Uint8 = '0'` See [Response Latency](../../../vite-basics/smart-contract.md#response-latency)
		- `quotaMultiplier: Uint8 = '10'` See [Quota Multiplier](../../../vite-basics/smart-contract.md#quota-multiplier)
		- `randomDegree: Uint8 = '0'` See [Random Degree](../../../vite-basics/smart-contract.md#random-degrees)
		- `abi?: object | Array<object>` ABI of the constructor. If your contract doesn't have a constructor, ignore this field.
		- `params?: string | Array<string | boolean>` Passed-in parameter(s) of the constructor. If your contract doesn't have a constructor, ignore this field.
- **Returns**
	- `Base64`: Encoded data string
- **Example**
	```js
	const data = utils.getCreateContractData({
		responseLatency: '2',
		randomDegree: '1',
		quotaMultiplier: '10',
		code: '608060405234801561001057600080fd5b506101ca806100206000396000f3fe608060405260043610610041576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806380ae0ea114610046575b600080fd5b6100bd6004803603602081101561005c57600080fd5b810190808035906020019064010000000081111561007957600080fd5b82018360208201111561008b57600080fd5b803590602001918460208302840111640100000000831117156100ad57600080fd5b90919293919293905050506100bf565b005b60006002838390508115156100d057fe5b061415156100dd57600080fd5b600080905060008090505b8383905081101561018a576000848483818110151561010357fe5b9050602002013590506000858560018501818110151561011f57fe5b905060200201359050808401935080841015151561013c57600080fd5b600081111561017d578173ffffffffffffffffffffffffffffffffffffffff164669ffffffffffffffffffff168260405160405180820390838587f1505050505b50506002810190506100e8565b50348114151561019957600080fd5b50505056fea165627a7a723058203cef4a3f93b33e64e99e0f88f586121282084394f6d4b70f1030ca8c360b74620029',
		params: '',
	});
	```

### `getCallContractData`
Generate data of `AccountBlock` for calling a contract
- **Parameters**
	- `object`
		- `abi: object | Array<object>` ABI
		- `methodName?: string` Name of the method to call
		- `params?: any = []` Passed-in parameters
- **Returns**
	- `Base64`: Encoded data string
- **Example**
	```js
	import { constant } from '~@vite/vitejs';
	const { Contracts, Snapshot_Gid } = constant;

	const params = [ Snapshot_Gid, 'SBP Name', 'vite_553462bca137bac29f440e9af4ab2e2c1bb82493e41d2bc8b2' ];
	const abi = Contracts.RegisterSBP.abi;
	// It's ok to omit methodName only if the abi contains one method
	const data = utils.getCallContractData({ params, abi });
	```

### `getTransactionType`
Return the [Transaction Type](#transaction-types) of a contract call
- **Parameters**
	- `object`
		- `toAddress?: Address` Address of contract
		- `data?: Base64` Data of the account block
		- `blockType: BlockType` Block type
- **Returns**
	- `txType : TxType` Transaction type
- **Example**
	```js
	const block = accountBlock.createAccountBlock('cancelSBPVoting', {
		address: 'vite_553462bca137bac29f440e9af4ab2e2c1bb82493e41d2bc8b2',
	});
	console.log(accountBlock.utils.getTransactionType(block));
	// {
	// 	transactionType: 'CancelSBPVoting',
	// 	contractAddress: 'vite_0000000000000000000000000000000000000004d28108e76b',
	// 	abi: { type: 'function', name: 'CancelSBPVoting', inputs: [] }
	// }
	```
