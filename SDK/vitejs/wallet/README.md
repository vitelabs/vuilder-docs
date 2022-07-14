---
order: 1
parent:
    title: Wallet
    order: 7
---

# Module

Vite wallet adopts [BIP-39](https://github.com/bitcoin/bips/blob/master/bip-0039.mediawiki) that uses the PBKDF2 function to generate a wallet's seed from a mnemonic phrase (i.e. password) and an optional passphrase (i.e. salt). From this seed, public and private keys are derived. Losing the mnemonic phrase or the passphrase will result in the loss of a wallet's seed and private keys. For more information about key derivation on Vite, see [Address Derivation](../../../vite-basics/cryptography/address-derivation.md).

## Module Import

```js
import { wallet } from '@vite/vitejs';
```

## Methods

### `createWallet`
Create a new `Wallet` instance. See [Wallet Class](wallet-class.md)
- **Parameters** 
	- `strength: number = 256` Bits of entropy. A 256-bit entropy will generate 24-word mnemonic phrase while 128 bits entropy will give 12-word mnemonics.
	- `wordlist: string[] = bip39.wordlists.EN`
	- `passphrase: string = ''` Optional passphrase
- **Returns**
	- `Wallet` instance
- **Example**
	```js
	const myWallet = wallet.createWallet();
	console.log(myWallet.rootPath);
	console.log(myWallet.mnemonics);
	console.log(myWallet.entropy);
	console.log(myWallet.seedHex);
	const firstAddress = myWallet.deriveAddress(0);
	const { originalAddress, publicKey, privateKey, address, path } = firstAddress;
	const myWallet2 = wallet.createWallet(256, bip39.wordlists.EN, 'myPassword');
	```

### `getWallet`
Restore `Wallet` instance from a mnemonic phrase. See [Wallet Class](wallet-class.md)
- **Parameters** 
	- `mnemonic: string` Mnemonic phrase
	- `wordlist: string[] = bip39.wordlists.EN`
	- `passphrase: string = ''` Optional passphrase
- **Returns**
	- `Wallet` instance
- **Example**
	```js
	const mnemonics = wallet.createMnemonics();
	const myWallet = wallet.getWallet(mnemonics);
	const myWallet2 = wallet.getWallet(mnemonics, bip39.wordlists.EN, 'myPassword');
	```

### `createMnemonics`
Create a random mnemonic phrase
- **Parameters** 
	- `strength: number = 256` Bits of entropy. A 256-bit entropy will generate 24-word mnemonic phrase while 128 bits entropy will give 12-word mnemonics.
	- `wordlist: string[] = bip39.wordlists.EN`
- **Returns**
	- `mnemonic: string`
- **Example**
	```js
	const english24Words = wallet.createMnemonics();
	const portuguese12Words = wallet.createMnemonics(128, bip39.wordlists.portuguese);
	const japaneseMnemonics = wallet.createMnemonics(256, bip39.wordlists.japanese)
	```

### `validateMnemonics`
Determine if the input is a valid mnemonic phrase
- **Parameters** 
	- `mnemonic: string`
	- `wordlist: string[] = bip39.wordlists.EN`
- **Returns**
	- `boolean` If `true`, the mnemonic phrase is valid.
- **Example**
	```js
	const result = wallet.validateMnemonics(mnemonic);
	const result = wallet.validateMnemonics(japanMnemonic, bip39.wordlists.japanese);
	```

### `deriveAddress`
Generate address from a combination of mnemonic phrase, index, and optional passphrase
- **Parameters** 
	- `object`
		- `mnemonics: string` Mnemonic phrase
		- `index: number = 0` Address index
		- `wordlist: string[] = bip39.wordlists.EN`
		- `passphrase: string = ''`
- **Returns**
	- `AddressObj`
		- `originalAddress: Hex` Original address
		- `publicKey: Hex` Public key
		- `privateKey: Hex` Private key
		- `address: Address` Vite address
- **Example**
```js
const mnemonics = wallet.createMnemonics();
const { privateKey, publicKey, address, originalAddress } = wallet.deriveAddress({ 
	mnemonics,
	index: 0 
});
```

### `deriveAddressList`
Derive a list of addresses from a combination of mnemonic phrase, index range, and optional passphrase 
- **Parameters** 
	- `object`
		- `mnemonics: string` Mnemonic phrase
		- `startIndex: number` Start index (inclusive)
		- `endIndex: number` End index (inclusive)
		- `wordlist: string[] = bip39.wordlists.EN`
		- `passphrase: string = ''`
- **Returns**
	- `AddressObj[]`
		- `originalAddress: Hex` Original address
		- `publicKey: Hex` Public key
		- `privateKey: Hex` Private key
		- `address: Address` Vite address
- **Example**
```js
const mnemonics = wallet.createMnemonics();
const addressList = wallet.deriveAddressList({
	mnemonics,
	startIndex: 0,
	endIndex: 9,
});
```

### `isValidAddress`
Determine if the input is a valid Vite address
- **Parameters** 
	- `string` Address
- **Returns**
	- `0 | 1 | 2` 0: Illegal. 1: User Address. 2: Contract Address.
- **Example**
```js
const mnemonics = wallet.createMnemonics();
const { address, originalAddress } = wallet.deriveAddress({ mnemonics, index: 0 });
wallet.isValidAddress(address); // 1
wallet.isValidAddress(originalAddress); // 0
```

## More Methods

The following methods are for advanced usage.

### `getEntropyFromMnemonics`
Get entropy from a mnemonic phrase
- **Parameters** 
	- `mnemonic: string`
	- `wordlist: string[] = bip39.wordlists.EN`
- **Returns**
	- `Hex` Entropy with length of 16 bytes (12-word mnemonics) or 32 bytes (24-word mnemonics)
- **Example**
	```js
	const mnemonics = wallet.createMnemonics();
	const entropy = wallet.getEntropyFromMnemonics(mnemonics);
	```

### `createSeed`
Create a random seed for deriving addresses from
- **Parameters** 
	- `strength: number = 256` Bits of entropy. A 256-bit entropy will generate 24-word mnemonic phrase while 128 bits entropy will give 12-word mnemonic phrase.
	- `passphrase: string = ''` Optional passphrase
	- `wordlist: string[] = bip39.wordlists.EN`
- **Returns**
	- `object`
		- `mnemonic: string` Mnemonic phrase
		- `seed: Buffer` 64-bytes seed
		- `seedHex: Hex` Seed as a hex string
- **Example**
	```js
	const { mnemonic, seed, seedHex } = wallet.createSeed();
	```

### `getSeedFromMnemonics`
Derive seed from a mnemonic phrase
- **Parameters** 
	- `mnemonic: string` Mnemonic phrase
	- `passphrase: string = ''` Optional passphrase
	- `wordlist: string[] = bip39.wordlists.EN`
- **Returns**
	- `object`
		- `seed: Buffer` 64-bytes seed
		- `seedHex: Hex` Seed as a hex string
- **Example**
	```js
	const mnemonics = wallet.createMnemonics();
	const { seed, seedHex } = wallet.getSeedFromMnemonics(mnemonics);
	```

### `getMnemonicsFromEntropy`
Get mnemonic phrase from an entropy
- **Parameters** 
	- `entropy: Hex` Entropy as a 32-bytes hex string
	- `wordlist: string[] = bip39.wordlists.EN`
- **Returns**
	- `mnemonic: string` Mnemonic phrase
- **Example**
	```js
	const mnemonics = wallet.createMnemonics();
	const entropy = wallet.getEntropyFromMnemonics(mnemonics);
	const mnemonics2 = wallet.getMnemonicsFromEntropy(entropy);
	console.log(mnemonics === mnemonics2); // true
	```

### `getPath`
Get derivation path
- **Parameters** 
	- `index: number` Address index 
- **Returns**
	- `string` Derivation path
- **Example**
	```js
	const derivationPath = wallet.getPath();
	```

### `deriveKeyPairByPath`
Derive keypair from a seed and derivation path
- **Parameters** 
	- `seed: Hex` Seed as a hex string
	- `path: string` Derivation path of address
- **Returns**
	- `Object` Key pair
		- `privateKey: Hex`
		- `publicKey: Hex`
- **Example**
	```js
	const mnemonics = wallet.createMnemonics();
	const { seedHex } = wallet.getSeedFromMnemonics(mnemonics);
	const { privateKey, publicKey } = wallet.deriveKeyPairByPath(seedHex, wallet.getPath(0));
	```

### `deriveKeyPairByIndex`
Derive keypair from a seed and derivation index
- **Parameters** 
	- `seed: Hex` Seed as a hex string
	- `number` Address index
- **Returns**
	- `Object` Key pair
		- `privateKey: Hex`
		- `publicKey: Hex`
- **Example**
	```js
	const mnemonics = wallet.createMnemonics();
	const { seedHex } = wallet.getSeedFromMnemonics(mnemonics);
	const { privateKey, publicKey } = wallet.deriveKeyPairByIndex(seedHex, 0);
	```

### `createAddressByPrivateKey`
Get address from a private key
- **Parameters** 
	- `privateKey?: Hex` The private key will be generated in method if not provided
- **Returns**
	- `AddressObj`
		- `originalAddress: Hex` Original address
		- `publicKey: Hex` Public key
		- `privateKey: Hex` Private key
		- `address: Address` Vite address
- **Example**
	```js
	const { originalAddress, publicKey, privateKey, address } = wallet.createAddressByPrivateKey();
	```

### `getAddressFromPublicKey`
Get address from a public key
- **Parameters** 
	- `Hex` Public key
- **Returns**
	- `Address` Address
- **Example**
	```js
	const { publicKey, address } = wallet.createAddressByPrivateKey();
	const viteAddress = wallet.getAddressFromPublicKey(publicKey);
	console.log(address === viteAddress); // true
	```

### `getOriginalAddressFromAddress`
Get original address from an address. 

> An original address is the initial address without `vite_` prefix and checksum. See [Original Address](../../../vite-basics/cryptography/address-derivation.md#original-address) for details.
- **Parameters** 
	- `hexAddr: Hex`
- **Returns**
	- `Hex` Original address
- **Example**
	```js
	const { publicKey, originalAddress } = wallet.createAddressByPrivateKey();
	const viteAddress = wallet.getAddressFromPublicKey(publicKey);
	console.log(originalAddress === wallet.getOriginalAddressFromAddress(viteAddress)); // true
	```

### `getAddressFromOriginalAddress`
Get address from an original address

> An original address is the initial address without `vite_` prefix and checksum. See [Original Address](../../../vite-basics/cryptography/address-derivation.md#original-address) for details.
- **Parameters** 
	- `originalAddress` Original address
- **Returns**
	- `Address` Address
- **Example**
	```js
	const { originalAddress, address } = wallet.createAddressByPrivateKey();
	const viteAddress = wallet.getAddressFromOriginalAddress(originalAddress);
	console.log(address === viteAddress); // true
	```
