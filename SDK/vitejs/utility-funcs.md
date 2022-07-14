---
order: 10
---

# Utility Functions

## Module Import

```js
import { utils } from '@vite/vitejs';
```

## Methods

### `uriStringify`
Generate a [VEP-6](https://docs.vite.org/vite-docs/vep/vep-6.html) compatible Vite URI based on the given parameters
- **Parameters**
	- `object`
		- `schema: string = 'vite'`
		- `prefix: string = ''`
		- `target_address: string = ''` Transaction recipient address
		- `chain_id: number = ''` Network id. Default is the mainnet
		- `function_name: string = ''` Method name of contract to call
		- `params: Object` Additional parameters
			- `amount: number` Amount to transfer. The unit is **VITE**. e.g. `1` stands for 1 VITE. Default is 0.
			- `data: Base64` Optional data in Base64 format
			- `fee: number` Transaction fee. The unit is **VITE**. Default is 0.
			- `tti: TokenId` Token id. Default is Vite.
- **Returns**
	- `uri : string` Vite URI string
- **Example**
	```js
	console.log(
		utils.uriStringify({
			target_address: 'vite_fa1d81d93bcc36f234f7bccf1403924a0834609f4b2e9856ad',
			params: { amount: 1, data: 'MTIzYWJjZA' },
			function_name: 'echo',
		})
	); // vite:vite_fa1d81d93bcc36f234f7bccf1403924a0834609f4b2e9856ad/echo?amount=1&data=MTIzYWJjZA
	```

### `isValidTokenId`
Determine if a token id is valid
- **Parameters**
	- `tokenId: string` Token id
- **Returns**
	- `boolean` If `true`, the token id is valid.
- **Example**
	```js
	const viteTokenId = 'tti_5649544520544f4b454e6e40';
	console.log(utils.isValidTokenId(viteTokenId)); // true
	```

### `getOriginalTokenIdFromTokenId`
Get [Original Token ID](../../vite-basics/token-model.md#token-id) from a token id
- **Parameters**
	- `tokenId: string` Token id
- **Returns**
	- `Hex` Original token id
- **Example**
	```js
	const viteTokenId = 'tti_5649544520544f4b454e6e40';
	console.log(utils.getOriginalTokenIdFromTokenId(viteTokenId)); // 5649544520544f4b454e
	```

### `getTokenIdFromOriginalTokenId`
Get token id from [Original Token ID](../../vite-basics/token-model.md#token-id)
- **Parameters**
	- `originalTokenId: string` Original token id
- **Returns**
	- `TokenId` Token id
- **Example**
	```js
	console.log(utils.getTokenIdFromOriginalTokenId('5649544520544f4b454e')); // tti_5649544520544f4b454e6e40
	```

### `isValidSBPName`
Determine if the input is a valid SBP name. See [SBP Name](../../vite-basics/consensus/snapshot-block-producer.md) for details.
- **Parameters**
	- `sbpName: string` Input name
- **Returns**
	- `boolean` If `true`, the SBP name is valid.
- **Example**
	```js
	console.log(utils.isValidSBPName('test')); // true
	console.log(utils.isValidSBPName('n!')); // false
	```

### `isInteger`
Determine if the input is an integer
- **Parameters**
	- `num: string` Input string
- **Returns**
	- `boolean` If `true`, the input string is an integer.
- **Example**
	```js
	console.log(utils.isInteger('42')); // true
	console.log(utils.isInteger('1000')); // true
	console.log(utils.isInteger('-1000')); // true
	console.log(utils.isInteger('1,000')); // false
	console.log(utils.isInteger('3.14')); // false
	```

### `isNonNegativeInteger`
Determine if the input is a non-negative integer
- **Parameters**
	- `num: string` Input string
- **Returns**
	- `boolean` If `true`, the input string is a non-negative integer.
- **Example**
	```js
	console.log(utils.isNonNegativeInteger('42')); // true
	console.log(utils.isNonNegativeInteger('1000')); // true
	console.log(utils.isNonNegativeInteger('-1000')); // false
	console.log(utils.isNonNegativeInteger('1,000')); // false
	console.log(utils.isNonNegativeInteger('3.14')); // false
	```

### `isSafeInteger`
Determine if the input is a safe integer
- **Parameters**
	- `string | number` Input number or string
- **Returns**
	- `-1 | 0 | 1 ` -1: not an integer; 0: unsafe integer or decimal; 1: safe integer
- **Example**
	```js
	console.log(utils.isSafeInteger(42)); // 1
	console.log(utils.isSafeInteger('1000')); // 1
	console.log(utils.isSafeInteger('-1000')); // 1
	console.log(utils.isSafeInteger('1,000')); // -1
	console.log(utils.isSafeInteger(3.14)); // 0
	```


### `isArray`
Determine if the input is an array - uses as a fallback function if `Array.isArray` doesn't exist in your runtime environment.
- **Parameters**
	- `any` Input value
- **Returns**
	- `boolean` If `true`, the input is an array.
- **Example**
	```js
	console.log(utils.isArray([])); // true
	console.log(utils.isArray({})); // false
	console.log(utils.isArray(42)); // false
	```

### `isObject`
Determine if the input is an object
- **Parameters**
	- `any` Input value
- **Returns**
	- `boolean` If `true`, the input is an object.
- **Example**
	```js
	console.log(utils.isObject([])); // true
	console.log(utils.isObject({})); // true
	console.log(utils.isObject(() => {})); // true
	console.log(utils.isObject(42)); // false
	```

### `isHexString`
Determine if the input is a hex string
- **Parameters**
	- `string` Input string
- **Returns**
	- `boolean` If `true`, the input is a hex string.
- **Example**
	```js
	console.log(utils.isHexString('5649544520544f4b454e')); // true
	console.log(utils.isHexString('vite')); // false
	```

### `isBase64String`
Determine if the input is a base64 string
- **Parameters**
	- `string` Input string
- **Returns**
	- `boolean` If `true`, the input is a base64 string.
- **Example**
	```js
	const encoded = _Buffer.from(`Hello world!`).toString('base64');
	console.log(utils.isBase64String(encoded)); // true
	console.log(utils.isBase64String('Hello world!')); // false
	```

### `blake2b`
A reference to the `blake2b` function from [blakejs/blake2b](https://github.com/dcposch/blakejs)

### `blake2bHex`
A reference to the `blake2bHex` function from [blakejs/blake2b](https://github.com/dcposch/blakejs)

### `_Buffer`
A reference to `Buffer` from [Node.js](https://nodejs.org/api/buffer.html#buffer)

### `_bn`
A reference to [bn.js](https://github.com/indutny/bn.js/)

## `ed25519`
An object containing various [Ed25519](https://en.wikipedia.org/wiki/EdDSA#Ed25519) methods

### `keyPair`
Generate a random Ed25519 key pair
- **Parameters**
	- None
- **Returns**
	- `object` Key pair
		- `privateKey: Buffer` private key in 64 bytes buffer array
		- `publicKey: Buffer` public key in 32 bytes buffer array
- **Example**
	```js
	const keyPair = ed25519.keyPair();
	```

### `getPublicKey`
Get the public key from a private key; the private key must be derived from an Ed25519 key pair.
- **Parameters**
	- `privKey: Buffer` private key in 64 bytes buffer array
- **Returns**
	- `Buffer` public key in 32 bytes buffer array
- **Example**
	```js
	const { ed25519, _Buffer } = utils;
	const keyPair = ed25519.keyPair();
	// https://nodejs.org/api/buffer.html#static-method-buffercomparebuf1-buf2
	console.log(_Buffer.compare(ed25519.getPublicKey(keyPair.privateKey), keyPair.publicKey)); // 0 (the two arguments have the same value)
	```

### `sign`
Sign a hex string with a private key
- **Parameters**
	- `hexStr: Hex` Original text encoded in hexadecimal
	- `privKey: Hex` Private key
- **Returns**
	- `Hex` Signature
- **Example**
	```js
	const encoded = _Buffer.from('vite').toString('hex'); // 76697465
	console.log(_Buffer.from(encoded, 'hex').toString()); // 'vite'
	const signature = ed25519.sign(encoded, keyPair.privateKey.toString('hex')); // af35bbea83eda460bd8b4a16d5bf9f175b90e3d035e47bcdd676f214f4ecd79bdb192b2c5fbbff896e841d3614f19ce25f1fc079e778ba271288f427e626dc0b
	```

### `verify`
Determine if a signature is valid
- **Parameters**
	- `message: Hex` Original text
	- `signature: Hex` Signature
	- `publicKey: Hex` Public key
- **Returns**
	- `Boolean` If `true`, the signature is valid.
- **Example**
	```js
	const encoded = _Buffer.from(`Let's build something cool`).toString('hex'); // 76697465
	console.log(_Buffer.from(encoded, 'hex').toString()); // `Let's build something cool`
	const signature = ed25519.sign(encoded, keyPair.privateKey.toString('hex')); // af35bbea83eda460bd8b4a16d5bf9f175b90e3d035e47bcdd676f214f4ecd79bdb192b2c5fbbff896e841d3614f19ce25f1fc079e778ba271288f427e626dc0b
	console.log(ed25519.verify(encoded, signature, keyPair.publicKey.toString('hex'))); // true
	```

### `random`
Generate random buffer array

**Notes**: This is used by scrypt salt when generating the keystore
- **Parameters**
	- `bytesLen: number = 32` Buffer array byte length
- **Returns**
	- `any` A random buffer array
- **Example**
	```js
	const bufferArray = ed25519.random();
	console.log(bufferArray.length); // 32
	console.log(ed25519.random(5).length); // 5
	```
