---
order: 2
---

# `AccountBlock` Instance

Instance of `AccountBlock` represents an account block on the Vite blockchain. 

:::tip Account Block and Transaction
On Vite, usually one account block contains only one transaction. So in many cases when we say account block, it also refers to a transaction, and vise versa. However, this rule doesn't apply to RS blocks, which are special account blocks produced by smart contracts containing more than one transaction. See [RS Blocks](../../../soliditypp/fundamentals/request-response-model.md#rs-receive-send-blocks) for details.
:::

## Block Types

There are a total of seven block types on Vite.

| Block Type | ID | Description | Type |
|:-|:-:|-:|:-:|
| `CreateContractRequest` | 1 | Create Contract | Request |
| `TransferRequest` | 2 | Send Transaction / Call Contract | Request |
| `ReIssueRequest` | 3 | Mint Token | Request |
| `Response` | 4 | Receive Transaction / Execute Contract | Response |
| `ResponseFail` | 5 | Execute Contract Failed | Response |
| `RefundByContractRequest` | 6 | Refund | Request |
| `GenesisResponse` | 7 | Genesis | Response |

## Properties
| Name | Type | Description |
|-|:-:|-:|
| blockType | `BlockType` | See [Block Types](#block-types) for possible account block types on Vite |
| address | `Address` | Address of this account. For request transaction, this is `fromAddress`; for response transaction, this is `toAddress` |
| fee | `BigInt` | Transaction fee |
| data | `Base64` | Optional data field in Base64 format |
| sendBlockHash | `Hex` | Hash of the request transaction. For response transaction only |
| toAddress | `Address` | Transaction receiving address |
| tokenId | `TokenId` | Token id |
| amount | `BigInt` | The amount of tokens to send (in base unit, e.g. `1000000000000000000` stands for 1 VITE) |
| height | `Uint64` | Height of this account block |
| previousHash | `Hex` | Hash of the previous account block |
| difficulty | `BigInt` | PoW difficulty |
| nonce | `Base64` | PoW nonce |
| hash | `Hex` | Hash of this account block |
| signature | `Base64` | Signature |
| publicKey | `Base64` | Public key of this account |
| originalAddress | `originalAddress` | Original address |
| isRequestBlock | `boolean` | If `true`, the block is a request transaction |
| isResponseBlock | `boolean` | If `true`, the block is a response transaction |

- **Constructor**
	- `object` Fields are described above in [Properties](#properties)
		- `blockType: BlockType`
		- `address: Address`
		- `fee?: BigInt`
		- `data?: Base64`
		- `sendBlockHash?: Hex`
		- `amount?: BigInt`
		- `toAddress?: Address`
		- `tokenId?: TokenId`
	- `provider?: ProviderType` `ViteAPI` instance
	- `privateKey?: Hex` Private key used for signing the block
- **Example**
	```js
	import { wallet, accountBlock } from '@vite/vitejs';
	const { AccountBlock } = accountBlock;

	const myWallet = wallet.createWallet();
	const { address } = myWallet.deriveAddress(0);

	// block for sending 1 VITE
	const block = new AccountBlock({
		blockType: 2,
		address,
		toAddress: 'vite_5e8d4ac7dc8b75394cacd21c5667d79fe1824acb46c6b7ab1f',
		tokenId: 'tti_5649544520544f4b454e6e40',
		amount: '1' + '0'.repeat(18),
	});
	```

## Methods

### `setProvider`
Set the `ViteAPI` instance of an `AccountBlock` instance for making requests to go-vite RPC API
- **Parameters**:
	- `ViteAPI` `ViteAPI` instance
- **Returns**:
	- this `AccountBlock` instance
- **Example**
	```js
	import { wallet, ViteAPI, accountBlock } from '@vite/vitejs';
	const { AccountBlock } = accountBlock;
	import WS_RPC from '@vite/vitejs-ws';

	const providerWsURLs = {
		localnet: 'ws://localhost:23457',
		testnet: 'wss://buidl.vite.net/gvite/ws',
		mainnet: 'wss://node.vite.net/gvite/ws',
	};
	const provider = new WS_RPC(providerWsURLs.testnet);
	const viteApi = new ViteAPI(provider, () => {});

	const myWallet = wallet.createWallet();
	const { address } = myWallet.deriveAddress(0);

	const block = new AccountBlock({
		blockType: 2,
		address,
		toAddress: 'vite_5e8d4ac7dc8b75394cacd21c5667d79fe1824acb46c6b7ab1f',
		tokenId: 'tti_5649544520544f4b454e6e40',
		amount: '1' + '0'.repeat(18),
	}).setProvider(viteApi);
	```

### `setPrivateKey`
Set the private key of an `AccountBlock` instance for signing
- **Parameters**:
	- `Hex` private key
- **Returns**:
	- this `AccountBlock` instance
- **Example**
	```js
	const myWallet = wallet.createWallet();
	const { address, privateKey } = myWallet.deriveAddress(0);
	block.setPrivateKey(privateKey);
	```

### `getPreviousAccountBlock`
Get the previous block of an `AccountBlock` instance
- **Parameters**:
	- None
- **Returns**:
	- `Promise<AccountBlockType>`
- **Example**
	```js
    block.setProvider(viteApi);
	const lastBlock = await block.getPreviousAccountBlock();
	```
> Note: `ViteAPI` must exist on the `AccountBlock` before calling this method on it; one way to do this is to call its `setProvider` method first.

### `setPreviousAccountBlock`
Set the `previousHash` of an `AccountBlock` instance to the hash of the block passed in as an argument. If the block passed in as an argument has no `hash`, the `previousHash` will be set to `0000000000000000000000000000000000000000000000000000000000000000`.
- **Parameters**:
	- `previousAccountBlock: AccountBlockType`
- **Returns**:
	- this `AccountBlock` instance
- **Example**
	```js
	block.setProvider(viteApi);
	block.setPreviousAccountBlock(await block.getPreviousAccountBlock());
	```

### `autoSetPreviousAccountBlock`
Get and set the `previousHash` of an `AccountBlock` instance. This combines the `getPreviousAccountBlock` and `setPreviousAccountBlock` methods.
- **Parameters**:
	- None
- **Returns**:
	- `Promise<{ height: Uint64; previousHash: Hex }>`
- **Example**
	```js
    block.setProvider(viteApi);
	block.autoSetPreviousAccountBlock().then(({ height, previousHash }) => {
		console.log('height', height);
		console.log('previousHash', previousHash);
	});
	```

### `getDifficulty`
Get the PoW difficulty for sending an `AccountBlock` instance. If the sending `address` of the `AccountBlock` instance has sufficient quota to send the block, the returned `Promise` will resolve with `''`.

> Note: `previousHash` must exist on the `AccountBlock` instance before calling this method on it; one way to do this is to call its `autoSetPreviousAccountBlock` method first.
- **Parameters**:
	- None
- **Returns**
	- `Promise<BigInt>` PoW difficulty
- **Example**
	```js
	block.setProvider(viteApi);
	await block.autoSetPreviousAccountBlock();
	const difficulty = await block.getDifficulty();
	```

### `setDifficulty`
Set the PoW difficulty for an `AccountBlock` instance
- **Parameters**:
	- `difficulty: BigInt` PoW difficulty
- **Returns**:
	- this `AccountBlock` instance
- **Example**
	```js
	block.setProvider(viteApi);
	await block.autoSetPreviousAccountBlock();
	const difficulty = await block.getDifficulty();
	block.setDifficulty(difficulty);
	```

### `autoSetDifficulty`
Get and set the PoW difficulty for an `AccountBlock` instance. This combines the `getDifficulty` and `setDifficulty` methods.

> Note: `previousHash` must exist on the `AccountBlock` instance before calling this method on it; one way to do this is to call its `autoSetPreviousAccountBlock` method first.
- **Parameters**:
	- None
- **Returns**:
	- `Promise<BigInt>` PoW difficulty
- **Example**
	```js
	await block.autoSetPreviousAccountBlock();
	await block.autoSetDifficulty();
	console.log(block.difficulty);
	```

### `getNonce`
Get the PoW nonce for an `AccountBlock` instance

> Note: `difficulty` must exist on the `AccountBlock` instance before calling this method on it; one way to do this is to call its `autoSetDifficulty` method first.
- **Parameters**:
	- None
- **Returns**:
	- `Promise<Base64>` Nonce
- **Example**
	```js
	block.setProvider(viteApi);
	await block.autoSetPreviousAccountBlock();
	await block.autoSetDifficulty();
	const nonce = await block.getNonce();
	```

### `setNonce`
Set the PoW nonce for an `AccountBlock` instance
- **Parameters**:
	- `nonce: Base64`
- **Returns**:
	- this `AccountBlock` instance
- **Example**
	```js
	block.setProvider(viteApi);
	await block.autoSetPreviousAccountBlock();
	await block.autoSetDifficulty();
	const nonce = await block.getNonce();
	block.setNonce(nonce);
	console.log(block.nonce);
	```

### `setPublicKey`
Set the public key of an `AccountBlock` instance
- **Parameters**:
	- `publicKey: Hex | Base64` Public key in Hex or Base64 format
- **Returns**:
	- this `AccountBlock` instance
- **Example**
	```js
	const myWallet = wallet.createWallet();
	const { address, publicKey } = myWallet.deriveAddress(0);
	const block = new AccountBlock({
		blockType: 2,
		address,
	}).setProvider(viteApi);
	console.log('block.address:', block.address === wallet.getAddressFromPublicKey(publicKey)); // true
	block.setPublicKey(publicKey);
  // or
	block.setPublicKey(utils._Buffer.from(publicKey, 'hex').toString('base64'));
	```

### `sign`
Sign account block

> Note: Make sure to set all necessary block properties before calling this method. Calling `autoSetPreviousAccountBlock` can help. For what qualifies as all the necessary block properties, please view the [source code](https://github.com/vitelabs/vite.js/blob/28aadc5424397e167d0f8e6c2589b8d3a826c9b2/src/accountBlock/utils.ts#L43) for the checks done on a block before signing.
- **Parameters**:
	- `privateKey: Hex = this.privateKey` Private key used to sign the account block. If not present, `privateKey` must exist on the `AccountBlock` instance before calling this method.
- **Returns**:
	- this `AccountBlock` instance
- **Example**
	```js
	await block.autoSetPreviousAccountBlock();
	block.sign(privateKey);
	```

### `setSignature`
Set the signature of an `AccountBlock` instance.
- **Parameters**:
	- `signature: Hex | Base64` Signature in Hex or Base64 format
- **Returns**:
	- this `AccountBlock` instance
- **Example**
	```js
	block.setSignature(yourSignature);
	```

### `send`
Send account block. The account block must be complete and signed.
- **Parameters**:
	- None
- **Returns**:
	- `Promise<AccountBlockBlock>` instance of account block type
- **Example**
	```js
	block.setProvider(viteApi);
	await block.autoSetPreviousAccountBlock();
	block.sign(privateKey);
	const result = await block.send();

	console.log('send success', result);
	```

### `autoSend`
Sign and send the account block. This combines the `autoSetPreviousAccountBlock`, `sign`, and `send` methods.
- **Parameters**:
	- `privateKey: Hex = this.privateKey` Private key used to sign the account block. If not present, `privateKey` must exist on the `AccountBlock` instance before calling this method.
- **Returns**:
	- `Promise<AccountBlock>` instance of account block type
- **Example**
	```js
	const result = await block.autoSend();
	```
