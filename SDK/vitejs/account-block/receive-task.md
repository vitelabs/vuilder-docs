---
order: 4
---

# `ReceiveAccountBlockTask`
`ReceiveAccountBlockTask` is a timed task which polls for unreceived transactions for an account and receives the transactions automatically.

## `Constructor`
- **Constructor**
	- `object`
		- `address: Address` Address of account
		- `provider: ViteAPI` `ViteAPI` instance
		- `privateKey: Hex`
		- `sign?: Function` Set the signature when the private key can not be obtained, e.g. using a hardware wallet.
- **Example**
	- With a private key:
	```js
	import { wallet, accountBlock } from '@vite/vitejs';
	const { ReceiveAccountBlockTask } = accountBlock;

	const { address, privateKey } = wallet.createAddressByPrivateKey();
	const receiveTask = new ReceiveAccountBlockTask({
		address,
		privateKey,
		provider: viteApi,
	});
	```

	- Without a private key - using a hardware wallet:
	```js
	import { accountBlock } from '@vite/vitejs';
	const { ReceiveAccountBlockTask } = accountBlock;
	const signWithHardWallet = async () => {
		let signature = '';
		// Sign with a hardware wallet and return the signature
		return signature;
	}

	const receiveTask = new ReceiveAccountBlockTask({
		address,
		provider: viteApi,
		sign: async (block) => {
			let signature = await signWithHardWallet();
			// Set publicKey if it isn't set already
			block.setPublicKey(this.publicKey);
			// Set signature; this is required.
			block.setSignature(signature);
		}
	});
	```

## `Methods`

### `start`
Start receiving transactions on an account
- **Parameters** 
	- `object`
		- `checkTime: number = 3000` Polling interval (in milliseconds)
		- `transactionNumber: number = 5` Maximum transactions to process in each poll
        - `gapTime: number = 1000` Transaction processing interval (in milliseconds)
- **Example**
	```js
	receiveTask.start({
		checkTime: 3000,
		transactionNumber: 10
	});
	```

### `stop`
Stop receiving transactions on an account
- **Parameters** 
	- None
- **Example**
	```js
	receiveTask.start({
		checkTime: 3000,
		transactionNumber: 10
	});
	receiveTask.stop();
	```

### `onError`
Set up a callback function which will be triggered when failed to receive a transaction
- **Parameters** 
	- `errorCB: (error) => void` Callback function
		- `error` object
			- `status: 'error'`
			- `timestamp: number` Timestamp
			- `message: string` Error message
			- `unreceivedHash?: Hex` Hash of account block that failed to receive
			- `error: any` RPC error message
- **Example**
	```js
	receiveTask.start({
		checkTime: 3000,
		transctionNumber: 10
	});
	receiveTask.onError((error) => {
		console.log('error', error);
	});
	```

### `onSuccess`
Set up a callback function which will be triggered when a batch of transactions is successfully received
- **Parameters** 
	- `successCB: Function` Callback function
		- `success` object
			- `status: 'ok'`
			- `message: string` Success message
			- `timestamp: number` Timestamp
			- `accountBlockList?: AccountBlock[]` A list of `AccountBlock` that has been received
- **Example**
	```js
	receiveTask.start({
		checkTime: 3000,
		transctionNumber: 10
	});
	receiveTask.onSuccess((result) => {
		console.log('success', result);
	});
	```