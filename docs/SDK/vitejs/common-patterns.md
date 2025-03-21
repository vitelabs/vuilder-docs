---
order: 12
---

# Common Patterns

In this chapter, we will cover the common use cases for ViteJS with examples, but first, in order to interact with the Vite network, you will need to create a connection.

```js
import { ViteAPI } from '@vite/vitejs';
import WS_RPC from '@vite/vitejs-ws';
const providerWsURLs = {
	localnet: 'ws://localhost:23457',
	testnet: 'wss://buidl.vite.net/gvite/ws',
	mainnet: 'wss://node.vite.net/gvite/ws',
};
const provider = new WS_RPC(providerWsURLs.mainnet);
const viteApi = new ViteAPI(provider, () => {
	console.log('connected');
});
```

## How to build a transaction
The first step in building a transaction is to create a send block with the account you intend to send from. In this example, we are making a block to issue a new token and signing it with an existing account (with at least 1000 VITE already in it as token issuance fee).

```js
import { wallet, accountBlock } from '@vite/vitejs';
const myWallet = wallet.getWallet(mnenomics);
// or if you need to create a new wallet
// const myWallet = wallet.createWallet();

const account = myWallet.deriveAddress(0);

const block = accountBlock.createAccountBlock('issueToken', {
	address: account.address,
	tokenName: "Test Token",
	isReIssuable: true,
	maxSupply: 100000000,
	totalSupply: 100000000,
	isOwnerBurnOnly: false,
	decimals: 2,
	tokenSymbol: "TEST",
});
block.setProvider(viteApi); // this allow ViteJS to interact with the network
block.setPrivateKey(account.privateKey);
await block.autoSend();
```

## How to stake for quota
[Quota](../../vite-basics/quota/quota.md) is used for "paying" transaction fees instead of spending additional funds; this is how Vite transactions are fee-less. Quota is consumed when sending account blocks. An account's quota recharges over time and you can get a higher quota limit by staking more Vite tokens. It's possible to send transactions without having any quota by using proof of work, but this is not recommended.

```js
const block = accountBlock.createAccountBlock('stakeForQuota', {
	address: account.address,
	beneficiaryAddress: account.address, // or any other address that you want to give quota to
	// 134 Vite is the minimum staking amount for quota
	amount: '134000000000000000000',
});
block.setProvider(viteApi); // this allows ViteJS to interact with the network
block.setPrivateKey(account.privateKey);
await block.autoSend();

// Check quota of the account
viteApi.request('contract_getQuotaByAccount', address)
	.then(result => {
		console.log(result);
	})
	.catch(err => {
		console.warn(err);
	});
```

## How to send funds to an address
Creating other kinds of transactions is fairly similar to the previous example. The main difference is the method name as the first argument and the parameters as the second argument. For the full list of methods and corresponding parameters, read the section on [Transaction Types](../ViteJS/account-block/8.%20Account%20Blocks.md#transaction-types).

```js
const block = accountBlock.createAccountBlock('send', {
	address: account.address,
	toAddress: 'vite_553462bca137bac29f440e9af4ab2e2c1bb82493e41d2bc8b2',
	tokenId: 'tti_5649544520544f4b454e6e40',
	amount: '1000000000000000000', // equal to 1 VITE since the Vite coin has 18 decimal points
});
block.sign(account.privateKey);
await block.autoSend();
```

## How to receive a transaction
There are two main ways of receiving transactions. The first way is to sign and send each receive block individually.

```js
const block = accountBlock.createAccountBlock('receive', {
	address: account.address,
	sendBlockHash: '44e69ea04fe830c9075c01e46f102d0c543b4119ce13ec575aee2e96501049fc',
});
block.setProvider(viteApi);
block.setPrivateKey(account.privateKey);
await block.autoSetPreviousAccountBlock();
block.sign(account.privateKey);
await block.autoSend();
```

The second and much simpler way is to create and start a `ReceiveAccountBlockTask`.

```js
const receiveTask = new accountBlock.ReceiveAccountBlockTask({
	address: account.address,
	privateKey: account.privateKey,
	provider: viteApi,
});
receiveTask.start();
```

## How to sign a transaction
As you may have noticed in previous examples, there are two main ways to sign a transaction (i.e. block). The first way is to set the private key of the block and call certain methods that sign the block for you. The second way is to call the `sign` method which will sign the transaction, but won't send the block to the network.

```js
block.setPrivateKey(privateKey);
// This sets the block's previous block hash and other parameters needed to make a valid block
await block.autoSetPreviousAccountBlock();

block.sign(privateKey);
await block.autoSend();
```

## How to deploy a contract
Deploying a contract is just like making any other transaction. For the parameters, the easiest way to get them is through the [Solidity++ 0.8 Preview](https://marketplace.visualstudio.com/items?itemName=ViteLabs.solppdebugger) VS Code extension.

```js
const block = accountBlock.createAccountBlock('createContract',{
	abi:[{"constant":false,"inputs":[{"name":"addr","type":"address"}],"name":"SayHello","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"anonymous":false,"inputs":[{"indexed":true,"name":"addr","type":"address"},{"indexed":false,"name":"amount","type":"uint256"}],"name":"transfer","type":"event"}],
	code: '608060405234801561001057600080fd5b50610141806100206000396000f3fe608060405260043610610041576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806391a6cb4b14610046575b600080fd5b6100896004803603602081101561005c57600080fd5b81019080803574ffffffffffffffffffffffffffffffffffffffffff16906020019092919050505061008b565b005b8074ffffffffffffffffffffffffffffffffffffffffff164669ffffffffffffffffffff163460405160405180820390838587f1505050508074ffffffffffffffffffffffffffffffffffffffffff167faa65281f5df4b4bd3c71f2ba25905b907205fce0809a816ef8e04b4d496a85bb346040518082815260200191505060405180910390a25056fea165627a7a7230582023e9669dd6fec3b6b2a84a1fd7c9939f49197203d0e1db312278e633c219c2480029',
	responseLatency: 2,
	params: ['vite_13f1f8e230f2ffa1e030e664e525033ff995d6c2bb15af4cf9'] // passed to the contract's constructor
});
block.sign(account.privateKey);
await block.autoSend();
```

## How to call a contract
Calling a contract's methods is just like sending funds, but with the addition of the contract's abi, method name, and arguments to pass.

```js
let block = await accountBlock.createAccountBlock('callContract', {
	address: account.address,
	abi: contract.abi,
	toAddress: contract.address,
	params: ['method', 'params'],
	methodName: 'methodName',
	amount: '1000000000000000000',
	tokenId: 'tti_5649544520544f4b454e6e40',
});
block.sign(account.privateKey);
await block.autoSend();
```

## How to read contract event logs
Getting a contract's event log first involves fetching them from a Vite node's [RPC API](https://docs.vite.org/vite-docs/api/rpc/ledger_v2.html). Then decoding them into a human-readable format.

> Note: The following example has been adapted from the [Vuilder Kit](https://github.com/vitelabs/vuilder/blob/master/src/contract.ts#L227).

```js
import { abi } from '@vite/vitejs';
// ...
const getPastEvents = async (
	eventName: string = 'allEvents',
	{
		fromHeight = 0,
		toHeight = 0,
	}: {
		filter?: Object;
		fromHeight?: Number;
		toHeight?: Number;
	}
) => {
	let result: any[] = [];
	let logs = await viteApi.request('ledger_getVmLogsByFilter', {
		addressHeightRange: {
			[contract.address!]: {
				fromHeight: fromHeight.toString(),
				toHeight: toHeight.toString(),
			},
		},
	});
	const filteredAbi =
		eventName === 'allEvents'
			? contract.abi
			: contract.abi.filter((a: any) => {
					return a.name === eventName;
			  });
	if (logs) {
		for (let log of logs) {
			let vmLog = log.vmlog;
			let topics = vmLog.topics;
			for (let abiItem of filteredAbi) {
				let signature = abi.encodeLogSignature(abiItem);
				if (abiItem.type === 'event' && signature === topics[0]) {
					let dataHex;
					if (vmLog.data) {
						dataHex = Buffer.from(vmLog.data, 'base64').toString('hex');
					}
					let returnValues = abi.decodeLog(abiItem, dataHex, topics);
					let item = {
						returnValues: returnValues,
						event: abiItem.name,
						raw: {
							data: dataHex,
							topics: topics,
						},
						signature: signature,
						accountBlockHeight: log.accountBlockHeight,
						accountBlockHash: log.accountBlockHash,
						address: log.address,
					};
					result.push(item);
					break;
				}
			}
		}
	}
	return result;
};
```

## How to read contract state
Prior to Solidity++ 0.8, contracts had "off-chain" functions. These were used for querying the contracts written in Solidity++ 0.4. Starting in Solidity++ 0.8, off-chain methods were deprecated. Because of this, the RPC method for querying contracts written in 0.4 vs 0.8 are different - `contract_callOffChainMethod` and `contract_query` respectively.

> Note: The following example has been adapted from the [Vuilder Kit](https://github.com/vitelabs/vuilder/blob/master/src/contract.ts#L169).

```js
import { abi, utils } from '@vite/vitejs';
// ...
const queryContract = async (methodName: string, params: any[]) => {
	const methodAbi = contract.abi.find((x: { name: string }) => {
		return x.name === methodName;
	});
	if (!methodAbi) {
		throw new Error('method not found:' + methodName);
	}
	let data = abi.encodeFunctionCall(methodAbi, params);
	let dataBase64 = utils._Buffer.from(data, 'hex').toString('base64');
	let codeBase64;
	if (contract.offchainCode && contract.offchainCode.length > 0)
		codeBase64 = utils._Buffer.from(contract.offchainCode, 'hex').toString('base64');
	while (true) {
		let result = codeBase64
			? await viteApi.request('contract_callOffChainMethod', {
					address: contract.address,
					code: codeBase64,
					data: dataBase64,
			  })
			: await viteApi.request('contract_query', {
					address: contract.address,
					data: dataBase64,
			  });
		// parse result
		if (result) {
			let resultBytes = utils._Buffer.from(result, 'base64').toString('hex');
			let outputs = [];
			for (let i = 0; i < methodAbi.outputs.length; i++) {
				outputs.push(methodAbi.outputs[i].type);
			}
			return abi.decodeParameters(outputs, resultBytes);
		}
		console.log('Query failed, try again.');
		await utils.sleep(500);
	}
};
```

:::tip Tips
You can also use `callOffChainContract` and `queryContractState` in [ViteAPI](6.%20Vite%20API.md) class.
:::