---
order: 6
---

# ViteAPI Class

## `ViteAPI`
Class of `ViteAPI`, along with the inherited `Provider` class, wraps and extends the full node's [RPC API](https://docs.vite.org/vite-docs/api/rpc/)

:::tip
Do NOT confuse the Provider class with Connection Providers we covered in last chapter. `Provider` wraps an instance of Connection Provider and provides a few convenient methods to interact with full node through the connection provider.
:::

- **Constructor**
	- `provider: Connection Provider` Learn more in [Connection Providers](./5.%20Providers.md)
	- `onInitCallback: Function` Callback function that will be called when connection is established
	- `onConnectCallback?: ConnectHandler` Optional ConnectHandler instance. See [here](./5.%20Providers.md#reconnecthandler-and-subscription-renewal) for details
- **Example**
	```js
	import { ViteAPI } from '@vite/vitejs';
	// use http
	// import HTTP_RPC from '@vite/vitejs-http'
	// const provider = new HTTP_RPC('https://buidl.vite.net/gvite');

	// use websocket
	import WS_RPC from '@vite/vitejs-ws';
	const provider = new WS_RPC('wss://buidl.vite.net/gvite/ws');

	const viteApi = new ViteAPI(provider, () => {
		// Connected
	});
	```

> Note: `onConnectCallback` is added in 2.3.19.

## Methods

### `getBalanceInfo`
Fetch an address's balance (i.e. spendable assets) and unreceived balance (i.e. assets that cannot be spent yet because they do not have a receive block)
- **Parameters**
	- `address: Address`
- **Returns**
	- `Promise<object>`
		- `Record<'balance' | 'unreceived', object>`
			- `address: string`
			- `blockCount: string`
			- `balanceInfoMap?: object`
				- `[tokenId: string]: object`
					- `tokenInfo: TokenInfo`
					- `balance: string`
- **Example**
```js
const address = 'vite_5e8d4ac7dc8b75394cacd21c5667d79fe1824acb46c6b7ab1f';
viteApi.getBalanceInfo(address).then(({ balance, unreceived }) => {
	console.log(balance, unreceived);
});
```

### `getTransactionList`
Fetch an address's transaction history
- **Parameters**
	- `object`
		- `address: Address`
		- `pageSize: number = 50` The number of transactions in the transaction list
		- `pageIndex: number` The multiple of `pageSize` to offset the transaction list (i.e. `pageIndex = n` will give you the last transactions starting from `n * pageSize` to `n * pageSize + pageSize`)
	- `decodeTxTypeList: 'all' | string[] = 'all'` The transaction types to decode the `contractParams` of. For default, all `contractParams` are decoded.
- **Returns**:
	- `Promise<Transaction[]>` If this `Promise` resolves, the `Transaction` array is ordered from newest to oldest transactions.
- **Example**
```js
viteApi
	.getTransactionList(
		{
			address: 'vite_5e8d4ac7dc8b75394cacd21c5667d79fe1824acb46c6b7ab1f',
			pageIndex: 0,
			pageSize: 10,
		},
		['WithdrawSBPReward']
	)
	.then((txs) => {
		console.log(txs);
	});
```

### `addTransactionType`
Extend the default [contract methods](https://github.com/vitelabs/vite.js/blob/master/src/constant/index.ts#L36) - useful for when you want to tag the transactions of your own smart contract with a certain customized types.
- **Parameters**
	- `{ [transactionTypeName: string]: object }`
		- `contractAddress: Address`
		- `abi` ABI
- **Example**
	```js
	const abi = { methodName: 'hello', inputs: [] };
	const contractAddress = 'vite_0000000000000000000000000000000000000003f6af7459b9';
	viteAPI.addTransactionType({ helloWorld: { contractAddress, abi }});
	```

### `callOffChainContract`
Call an offchain function of the contract.

> Note: Offchain function is deprecated and replaced by view function in Solidity++ 0.8. If your contract is written with 0.8 or above version, use `queryContractState` instead.

- **Parameters** 
    * `object`
        - `address: Address` Address of contract
        - `abi` ABI of the offchain function
        - `code` Base64 encoded offchain code
        - `params: any[]` Base64 encoded passed-in parameters
- **Return**:
    * `Promise<any>` Decoded calling result
- **Example**
	```js
	const methodAbi = abiUtil.getAbiByName(contractAbi, 'get');
    viteApi.callOffChainContract({address: contractAddress, abi: methodAbi, code, params: ["734782968573636608","tti_5649544520544f4b454e6e40"]})
	.then((result) => {
		console.log(result);
	});
	```

### `queryContractState`
Call a view function or query a public state of the contract.

> Note: Added in 2.3.18.

- **Parameters** 
    * `object`
        - `address: Address` Address of contract
        - `abi` ABI of the offchain function
        - `methodName` view functions's name
        - `params: any[]` Base64 encoded passed-in parameters
- **Return**:
    * `Promise<any>` Decoded calling result
- **Example**
	```js
	const methodName = 'tokenMap';
    viteApi.queryContractState({ address: contractAddress, abi: contractAbi, methodName, params: ['tti_30831c79099bbe5af0b037b1'] })
	.then((result) => {
		console.log(result);
	});
	```

### `getNonce`
Return PoW nonce for the given difficulty, previous block hash and account address.

- **Parameters** 
    * `object`
        - `difficulty: BigInt` PoW difficulty
        - `previousHash: Hex` Hash of previous account block
        - `address: Address` Address
- **Return**:
    * `Promise<Base64>` Nonce
- **Example**
	```js
    viteApi.getNonce({ difficulty: 67108863, previousHash: '0000000000000000000000000000000000000000000000000000000000000000', address: 'vite_ab24ef68b84e642c0ddca06beec81c9acb1977bbd7da27a87a' })
	.then((nonce) => {
		console.log(nonce);
	});
	```

### `setProvider`
Update the Connection Provider of a `ViteAPI` instance.
- **Parameters**
	- `provider: Connection Provider` New provider
	- `onInitCallback: Function` Called when connection is established
	- `abort: boolean` If `true`, the ongoing request connection of original provider will be interrupted.
- **Example**
	```js
	const newProvider = new HTTP_RPC('https://buidl.vite.net/gvite')
	viteApi.setProvider(newProvider, () => {
		// Connected
	}, true)
	```

### `request`
Call a method in the go-vite [RPC API](https://docs.vite.org/vite-docs/api/rpc/).
- **Parameters**
	- `methods: string` Name of API method
	- `...args: any[]` API method arguments
- **Returns**:
	- `Promise<any>` RPC response
- **Example**
	```js
	const address = 'vite_5e8d4ac7dc8b75394cacd21c5667d79fe1824acb46c6b7ab1f';
	viteApi.request('ledger_getLatestAccountBlock', address).then((block) => {
		console.log(block);
	});
	```

### `sendNotification`
Call RPC API and do not return response - one use case is when calling [ledger_sendRawTransaction](https://docs.vite.org/vite-docs/api/rpc/ledger_v2.html#ledger-sendrawtransaction).
- **Parameters**
	- `methods: string` Name of API method
	- `...args: any[]` API method arguments
- **Returns**:
	- `Promise<any>` RPC response
- **Example**
	```js
	viteApi.sendNotification('ledger_sendRawTransaction').then((requestObj) => {
		console.log('requestObj:', requestObj)
	});
	```

### `batch`
Call multiple RPC API methods at once

- **Parameters**
- `object[]`
	- `type: 'request' | 'notification'`
	- `methodName: string` Name of API method
	- `params: any` API method arguments
- **Returns**:
	- `Promise<any[]>` RPC responses
- **Example**
	```js
	const address = 'vite_5e8d4ac7dc8b75394cacd21c5667d79fe1824acb46c6b7ab1f';
	viteApi
		.batch([
			{
				type: 'request',
				methodName: 'ledger_getSnapshotChainHeight',
				params: [],
			},
			{
				type: 'request',
				methodName: 'ledger_getLatestAccountBlock',
				params: [address],
			},
		])
		.then((data) => {
			console.log(data);
		})
	```

### `subscribe`
Subscribe to events according to the [subscription RPC API](https://docs.vite.org/vite-docs/api/rpc/subscribe_v2.html)

>Note: Polling will be used by this method if the RPC API connection was established with `HTTP_RPC`, otherwise a websocket subscription will be used for `WS_RPC`.

- **Parameters**
	- `methodName: string`
		- `'newSnapshotBlock'`
		- `'newAccountBlock'`
		- `'newAccountBlockByAddress'`
		- `'newUnreceivedBlockByAddress'`
		- `'newVmLog'`
		> **Note**: Vite.js will automatically add prefixes/suffixes if necessary
	- `...args` Passed-in parameters
- **Returns**:
	- `Promise<EventEmitter>`
		- The most useful method for external use in `EventEmitter` object is `EventEmitter.on`. Call this method to pass in a callback how subscription events should be handled.
- **Example**
	```js
	const address = 'vite_5e8d4ac7dc8b75394cacd21c5667d79fe1824acb46c6b7ab1f';
	viteApi
		.subscribe('newAccountBlockByAddress', address)
		.then((event) => {
			event.on((result) => {
				console.log(result);
			});
			// event.off();
		})
		.catch((e) => {
			console.log('e:', e);
		});
	```

### `unsubscribe`
Cancel a subscription by `event` reference
- **Parameters**
	- `event: EventEmitter` Resolved by the `Promise` `ViteAPI.subscribe` returns

- **Example**
	```js
	let event
	viteApi.subscribe('newAccountBlock').then((e) => {
		event = e;
	})

	const unsubscribe = () => {
		viteApi.unsubscribe(event);
	}
	```

### `unsubscribeAll`
Cancel all subscriptions
- **Parameters**
	- None
- **Example**
	```js
	viteApi.unsubscribeAll();
	```
