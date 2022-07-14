---
order: 9
---

# ABI

## Module Import
```js
import { abi } from '@vite/vitejs';
```

## Method Types

| Type | Description |
|:------------:|-----------|
| `constructor` | Contract constructor |
| `function` | Solidity++ functions |
| `event` | Event method, to write a log on the blockchain |
| `offchain` | Legacy offchain method, replaced by `view function` in Solidity++ 0.8 |

## Parameter Types
Methods of contract, including constructors and functions, may have passed-in parameters and return values. The following table shows the data types that are supported on Vite.


| Type | Description | Example |  |
|:------------:|-----------|-----------|-----------|
| `uint<M>` | Unsigned integer (0 < M ≤ 256, M % 8 = 0) | `uint256` | '2345675643' |
| `int<M>` | Signed integer (0 < M ≤ 256, M % 8 = 0) | int8 | '2' |
| `uint` | Equivalence of `uint256` | `uint` | '2345675643' |
| `int` | Equivalence of  `int256` | `int` | '2' |
| `tokenId` | Token id | `tokenId` | 'tti_5649544520544f4b454e6e40' |
| `address` | Address of account | `address` | 'vite_010000000000000000000000000000000000000063bef3da00' |
| `gid` | Consensus group id | `gid` | '01000000000000000000' |
| `bool` | Boolean | `bool` | true |
| `bytes<M>` | Fixed-length byte array (0 < M <= 32) | `bytes32` | '0x0100000000000000000000000000000000000000000000000000000000000000' |
| `bytes` | Variable-length byte array | `bytes` | '0xdf3234' |
| `string` | Variable-length string | `string` | 'foobar' |
| `<type>[M]` | Fixed-length array of type M (M >= 0). Range of values:`uint<M>`, `int<M>`, `uint`, `int`, `tokenId`, `address`, `gid`, `bool` and `string` | `uint8[2]` | ['1','2'] |
| `<type>[]` | Variable-length array of type M. Range of values: `uint<M>`, `int<M>`, `uint`, `int`, `tokenId`, `address`, `gid`, `bool` and `string` | `uint256[]` | ['1','2'] |

## Type `jsonInterface`
`jsonInterface` is a JSON object that represents a valid ABI. The following example defines an event named Register.
```json
{
	"type": "event",
	"name": "Register",
	"inputs": [
		{ "name": "user", "type": "address" }
	]
}
```

## Methods

### `encodeLogSignature`
Encode an event signature. The ABI must be a type of 'event' or an array contains such a type.
- **Parameters**
	- `jsonInterface | jsonInterface[]` ABI
	- `methodName?: string` Method to encode - required if the first parameter is a `jsonInterface` array.
- **Returns**
	- `Hex` Encoded hex string
- **Example**
	```js
	let result1 = abi.encodeLogSignature({
		'type':'event', 'name': 'balance', 'inputs':[{'name':'in','type':'uint256'}]
	}); // 8a3390b86e28f274e3a88354b3b83cf0f8780a1f0975f629966bd2a2d38eb188

	let result2 = abi.encodeLogSignature([
		{'type':'event','name':'heck','inputs':[{'name':'t','type':'address'}]},
		{'type':'event','name':'check','inputs':[{'name':'t','type':'address'},{'name':'b','type':'uint256'}]},
		{'type':'event','name':'eck','inputs':[]},
	], 'check'); // 17c53855485cba60b5dea781a996394bb9d3b44bc8932b3adf79ac70e908b220
	```

### `encodeFunctionSignature`
Encode a function signature. The ABI must be a type of 'function' or 'constructor', or an array contains such a type.
- **Parameters**
	- `jsonInterface | jsonInterface[]` ABI
	- `methodName?: string` Method to encode - required if the first parameter is a `jsonInterface` array.
- **Returns**
	- `Hex` Encoded hex string
- **Example**
	```js
	let result = abi.encodeFunctionSignature({
		'type':'function', 'name':'singleParam', 'inputs':[{'name':'param1','type':'address'}]
	}); // 053f71a4
	```  

### `encodeFunctionCall`
Encode a function call. The ABI must be a type of 'function' or 'constructor', or an array contains such a type.
- **Parameters**
	- `jsonInterface | jsonInterface[]` ABI
	- `params` Input parameters
	- `methodName?: string` Method to encode - required if the first parameter is a `jsonInterface` array.
- **Returns**
	- `Hex` Encoded hex string
- **Example**
	```js
	// Use ABI
	let result = abi.encodeFunctionCall({
		name:'myMethod', type:'function', inputs:[{type:'uint256', name: 'myNumber'}, {type:'string', name:'myString'}]
	}, ['2345675643', 'Hello!%']); // 96173f6c000000000000000000000000000000000000000000000000000000008bd02b7b0000000000000000000000000000000000000000000000000000000000000040000000000000000000000000000000000000000000000000000000000000000748656c6c6f212500000000000000000000000000000000000000000000000000

	// Use ABI string
	let result1 = abi.encodeFunctionCall([
		{name:'myMethod', type:'function', inputs:[{type:'uint256', name: 'myNumber'}, {type:'string', name:'myString'}]},
		{name:'myMethod2', type:'function', inputs:[{type:'uint256', name: 'myNumber'}, {type:'string', name:'myString'}]}
	], ['2345675643', 'Hello!%'], 'myMethod2'); // 96173f6c000000000000000000000000000000000000000000000000000000008bd02b7b0000000000000000000000000000000000000000000000000000000000000040000000000000000000000000000000000000000000000000000000000000000748656c6c6f212500000000000000000000000000000000000000000000000000
	```  

### `encodeParameter`
Encode input parameter according to parameter type
- **Parameters**
	- `type` See [Parameter Types](#parameter-types)
	- `params` Input parameters
- **Returns**
	- `Hex` Encoded hex string
- **Example**
	```js
	let result = abi.encodeParameter('uint256', '2345675643'); // 000000000000000000000000000000000000000000000000000000008bd02b7b

	let result2 = abi.encodeParameter('uint16[]', [1, 2]); // 000000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000002
	```  

### `decodeParameter`
Decode input parameter according to type
- **Parameters**
	- `type` See [Parameter Types](#parameter-types)
	- `Hex` Encoded hex string
- **Returns**
	- `decodeResult` Decoded results
- **Example**
	```js
	let result = abi.decodeParameter(
		'uint256',
		'000000000000000000000000000000000000000000000000000000008bd02b7b',
	); // 2345675643

	let result2 = abi.decodeParameter(
		'uint8[]',
		'000000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000002',
	); // ['1','2']
	```  

### `encodeParameters`
Encode input parameters according to ABI or parameter type
- **Parameters**
	- `jsonInterface | string[] | jsonInterface[]` ABI or parameter types
	- `params<Array | json-string>` Input parameters
	- `methodName?: string` Method to encode - required if the first parameter is an ABI array.
- **Returns**
	- `Hex` Encoded hex string
- **Example**
	```js
	// Use ABI
	let result = abi.encodeParameters({
		type:'constructor', inputs:[{type:'uint8[]'}, {type:'bytes'}]
	}, [['34','43'], '324567ff']); // 000000000000000000000000000000000000000000000000000000000000004000000000000000000000000000000000000000000000000000000000000000a000000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000022000000000000000000000000000000000000000000000000000000000000002b0000000000000000000000000000000000000000000000000000000000000004324567ff00000000000000000000000000000000000000000000000000000000

	// Use ABI and JSON string
	let result1 = abi.encodeParameters({
		type:'constructor', inputs:[{type:'uint8[]'}, {type:'bytes'}]
	}, JSON.stringify([['34', '43'], '324567ff'])); // 000000000000000000000000000000000000000000000000000000000000004000000000000000000000000000000000000000000000000000000000000000a000000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000022000000000000000000000000000000000000000000000000000000000000002b0000000000000000000000000000000000000000000000000000000000000004324567ff00000000000000000000000000000000000000000000000000000000

	// Use type stings
	let result2 = abi.encodeParameters(
		['tokenId', 'address'],
		['tti_01000000000000000000fb5e', 'vite_010000000000000000000000000000000000000063bef3da00']); // 00000000000000000000000000000000000000000000010000000000000000000000000000000000000000010000000000000000000000000000000000000000

	// Use ABI array
	let result3 = abi.encodeParameters([
		{'type':'constructor', 'name': 'myMethods', 'inputs':[{'type':'uint8[]'}, {'type': 'bytes'}]},
		{'type':'constructor', 'name': 'myMethods2', 'inputs':[{'type': 'bytes'}]},
		{'type':'constructor', 'name': 'myMethods3', 'inputs':[{'type':'uint8[]'}, {'type': 'bytes'}]},
		{'type':'constructor', 'name': 'myMethods4', 'inputs':[{'type': 'bytes'}]}
	], [['34','43'], '324567ff'], 'myMethods3'); // 000000000000000000000000000000000000000000000000000000000000004000000000000000000000000000000000000000000000000000000000000000a000000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000022000000000000000000000000000000000000000000000000000000000000002b0000000000000000000000000000000000000000000000000000000000000004324567ff00000000000000000000000000000000000000000000000000000000
	```  

### `decodeParameters`
Decode input parameters according to ABI or parameter type
- **Parameters**
	- `types: jsonInterface | string[] | jsonInterface[]` ABI or parameter types
	- `params: Hex` Encoded hex string
	- `methodName?: string` Method to decode - required if the first parameter is an array.
- **Returns**
	- `any[]` Decoded results
- **Example**
	```js
	// Use ABI
	let result1 = abi.decodeParameters({
		type:'constructor', inputs:[{ type:'uint8[]'}, {type:'bytes'}]
	},'000000000000000000000000000000000000000000000000000000000000004000000000000000000000000000000000000000000000000000000000000000a000000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000022000000000000000000000000000000000000000000000000000000000000002b0000000000000000000000000000000000000000000000000000000000000004324567ff00000000000000000000000000000000000000000000000000000000'); // [['34','43'], '324567ff']

	// Use type strings
	let result2 = abi.decodeParameters(
		['string', 'tokenId', 'address'],
		'000000000000000000000000000000000000000000000000000000000000006000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000f343832393438326e73646b6a736b640000000000000000000000000000000000'); // ['4829482nsdkjskd', 'tti_01000000000000000000fb5e', 'vite_00010000000000000000000000000000000000005cce05dbde']

	// Use ABI array
	let result3 = abi.decodeParameters([
		{type:'function', name:'singl', inputs:[{name:'param1', type:'address'}]},
		{type:'function', name:'singleParam', inputs:[{name:'param1', type:'address'}, {name:'param1', type:'uint8[]'}]},
	],'00000000000000000000000001000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000040000000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000002', 'singleParam'); // ['vite_00010000000000000000000000000000000000005cce05dbde', [1,2]]
	```  

### `decodeLog`
Decode event logs according to ABI. The ABI must be a type of 'event' or an array contains such a type.
- **Parameters**
	- `abi: jsonInterface.inputs | jsonInterface | jsonInterface[]` ABI
	- `data?: Hex = ''` Encoded hex string
	- `topics: Hex[]` Event topics
	- `methodName?: string` Method to decode - required if the first parameter is a `jsonInterface` array.
- **Returns**
	- `decodeResult: object` Decoded result in JSON
- **Example**
	```js
	const decodeResult = abi.decodeLog({
		'anonymous':false, 'inputs':[{'indexed':false, 'internalType':'string', 'name':'data', 'type':'string'}], 'name':'Event1', 'type':'event'},
    '0000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000000b68656c6c6f20776f726c64000000000000000000000000000000000000000000', ['30e00162ff22a0d2aaa98f7013fc6dcb0bfae6a56ed30e35c5ea19326211a1a9'], 'Event1');

	assert.deepEqual(decodeResult, {
        '0': 'hello world',
        data: 'hello world'
    });
	```  
### `getAbiByType`
Return matched ABI according to method type, or return null if the type is not found
> Note: this method returns the first result matched the given type
- **Parameters**
	- `jsonInterface | jsonInterface[]` ABI
	- `type` See [Method Types](#method-types)
- **Returns**
	- `jsonInterface` ABI
- **Example**
	```js
	const result = abi.getAbiByType([
		{type:'constructor', inputs:[{name:'addr', type:'address'}]},
		{type:'function', name:'setIndex', inputs:[{name:'addr', type:'address'}, {name:'index', type:'uint8[]'}]},
	], 'function');
	```

### `getAbiByName`
Return matched ABI according to method name, or return null if the method is not found

- **Parameters**
	- `jsonInterface | jsonInterface[]` ABI
	- `methodName` Method name
- **Returns**
	- `jsonInterface` ABI
- **Example**
	```js
	const result = abi.getAbiByName([
		{type:'constructor', inputs:[{name:'addr', type:'address'}]},
		{type:'function', name:'setIndex', inputs:[{name:'addr', type:'address'}, {name:'index', type:'uint8[]'}]},
	], 'addr');
	```