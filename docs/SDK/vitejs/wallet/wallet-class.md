---
order: 2
---

# `Wallet` Instance

An instance of `Wallet` is a BIP-44 HD wallet that holds a BIP-39 mnemonic phrase and is capable of deriving addresses and Ed25519 keypairs with BIP-32 paths. 

!!! tip
	The `Wallet` class doesn't expose constructor. Use [`createWallet`](./README.md#createwallet) or [`getWallet`](./README.md#getwallet) to get a wallet instance.

The class has the following properties:

## Properties
|  Name  | Type | Description |
|-|:-:|-:|
| rootPath | `string` | BIP-32 root path, read-only. For Vite the root path is `'m/44\'/666666\''` |
| mnemonics | `string` | Mnemonic phrase |
| entropy | `Hex` | Entropy of mnemonics |
| wordlist | `string[]` | Wordlist |
| passphrase | `string` | Passphrase, optional. Default empty string |
| seed | `Buffer` | Seed |
| seedHex | `Hex` | Seed in hex string |
| id | `Hex` | BLAKE2b hash at Address 0. This property is used to uniquely tag a wallet instance. |

## Methods

### `deriveAddress`
Get address from a `Wallet` instance and index
- **Parameters**
	- `number` Address index
- **Returns**
	- `AddressObj`
- **Example**
	```js
	const myWallet = wallet.createWallet();
	const addressObj = myWallet.deriveAddress(0);
	console.log(addressObj.address)
	console.log(addressObj.originalAddress)
	console.log(addressObj.privateKey)
	console.log(addressObj.publicKey)
	console.log(addressObj.path)
	```

### `deriveAddressList`
Derive a list of addresses from the start index to end
- **Parameters**
	- `startIndex: number` Start index, inclusive
	- `endIndex: number` End index, inclusive
- **Returns**
	- `AddressObj[]`
- **Example**
	```js
	const myWallet = wallet.createWallet();
	const addressObjList = myWallet.deriveAddressList(0, 9);
	```

### `getAddressList`
Get all the addresses that a `Wallet` instance has derived
- **Returns**
	- `object`
		- `[index: string]: AddressObj`
- **Example**
	```js
	const myWallet = wallet.createWallet();
	const { address } = myWallet.deriveAddress(0);
	const currentAddressList = myWallet.getAddressList();
	console.log(address === currentAddressList['0'].address); // true
	```