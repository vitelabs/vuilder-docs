---
order: 4
title: Wallet
---

# Wallet API

!!! note
    To enable the Wallet RPC API on the node, add the "wallet" namespace to "PublicModules" in `node_config.json`.

!!! danger "Dangerous RPC calls"
    Exposing the wallet module to the public Internet (e.g., setting `"HttpHost": "0.0.0.0"`) is risky. Configure "HttpHost" and "WSHost" to "127.0.0.1" or remove the wallet namespace from "PublicModules" in `node_config.json` after setup.

Definitions:
* **Standard Directory**: The default wallet directory on the node. For a mainnet node on Linux or Mac, this directory is `~/.gvite/maindata/wallet`.
* **Entropy File**: A JSON keystore file that stores entropy encrypted with the AES-256 algorithm.
* **Passphrase**: A Scrypt password used to derive the AES-256 key for entropy encryption. Note: This is NOT the bip39 passphrase. By default, the wallet module uses an empty bip39 passphrase (`''`) when creating seeds from mnemonics, and this value cannot be customized.
* **Primary Address**: For each entropy file, the first Vite address at index 0 is called the primary address.

## `wallet_getEntropyFilesInStandardDir`
List all entropy files in the default wallet directory.

- **Parameters**: None

- **Returns**:
	- `Array<string>`: Absolute paths of entropy files.

!!! example
    === "Request"
        ```json
        {
            "jsonrpc": "2.0",
            "id": 4,
            "method": "wallet_getEntropyFilesInStandardDir",
            "params": []
        }
        ```

    === "Response"
        ```json
        {
            "jsonrpc": "2.0",
            "id": 4,
            "result": [
                "/Users/xxx/Library/GVite/testdata/wallet/vite_15391ac8b09d4e8ad78bfe5f9f9ab9682fe689572f6f53655e",
                "/Users/xxx/Library/GVite/testdata/wallet/vite_5b013ec4f3c235da12e47b525713e2f5edd0b04df965fafc22",
                "/Users/xxx/Library/GVite/testdata/wallet/vite_67de981eff372d4a757541b05f0e8a269eee11c2f6c9fbdae6",
                "/Users/xxx/Library/GVite/testdata/wallet/vite_f24bb4eceadc65020de5de6a4aeb22c52edd6cb72ee2279a97"
            ]
        }
        ```

## `wallet_getAllEntropyFiles`
List all entropy files installed on the node.

- **Parameters**: None

- **Returns**:
	- `Array<string>`: Absolute paths of entropy files.

!!! example
    === "Request"
        ```json
        {
            "jsonrpc": "2.0",
            "id": 2,
            "method": "wallet_getAllEntropyFiles",
            "params": []
        }
        ```

    === "Response"
        ```json
        {
            "jsonrpc": "2.0",
            "id": 4,
            "result": [
                "/Users/xxx/Library/GVite/testdata/wallet/vite_15391ac8b09d4e8ad78bfe5f9f9ab9682fe689572f6f53655e",
                "/Users/xxx/Library/GVite/testdata/wallet/vite_5b013ec4f3c235da12e47b525713e2f5edd0b04df965fafc22",
                "/Users/xxx/Library/GVite/testdata/wallet/vite_67de981eff372d4a757541b05f0e8a269eee11c2f6c9fbdae6"
            ]
        }
        ```

## `wallet_exportMnemonic`
Export mnemonic phrase from entropy file

- **Parameters**:
	- `entropyFile`: `string`  Absolute path of the entropy file, or primary address if the file is under standard directory. 
	- `passphrase`: `string`  Entropy file passphrase

- **Returns**:
	- `string`  Mnemonic phrase


!!! example
    === "Request"
        ```json
        {
            "jsonrpc": "2.0",
            "id": 4,
            "method": "wallet_exportMnemonic",
            "params": [
                "vite_15391ac8b09d4e8ad78bfe5f9f9ab9682fe689572f6f53655e",
                "123456"
            ]
        }
        ```

    === "Response"
        ```json
        {
            "jsonrpc": "2.0",
            "id": 4,
            "result": "goddess crush pattern cluster level combine survey give seminar uniform invite beach"
        }
        ```

## `wallet_unlock`
Unlock an entropy file with passphrase

- **Parameters**:
	- `entropyFile`: `string`  Absolute path of the entropy file, or primary address if the file is under standard directory. 
	- `passphrase`: `string`  Entropy file passphrase

- **Returns**: null


!!! example
    === "Request"
        ```json
        {
            "jsonrpc": "2.0",
            "id": 4,
            "method": "wallet_unlock",
            "params": [
                "vite_15391ac8b09d4e8ad78bfe5f9f9ab9682fe689572f6f53655e",
                "123456"
            ]
        }
        ```

    === "Response"
        ```json
        {
            "jsonrpc": "2.0",
            "id": 4,
            "result": null
        }
        ```

## `wallet_lock`
Lock an entropy file

- **Parameters**:
	- `entropyFile`: `string`  Absolute path of the entropy file, or primary address if the file is under standard directory. 

- **Returns**: null


!!! example
    === "Request"
        ```json
        {
            "jsonrpc": "2.0",
            "id": 4,
            "method": "wallet_lock",
            "params": [
                "vite_15391ac8b09d4e8ad78bfe5f9f9ab9682fe689572f6f53655e"
            ]
        }
        ```

    === "Response"
        ```json
        {
            "jsonrpc": "2.0",
            "id": 4,
            "result": null
        }
        ```

## `wallet_deriveAddressesByIndexRange`
Derive addresses from an entropy file by index range. The entropy file must be unlocked or the method will return an error.

- **Parameters**:
	- `entropyFile`: `string`  Absolute path of the entropy file, or primary address if the file is under standard directory. 
	- `startIndex`: `uint32`  Start index, included
	- `endIndex`: `uint32`  End index, excluded. It must hold $endIndex - startIndex \le 5000$

- **Returns**:
	- `Array<address>`  Addresses derived


!!! example
    === "Request"
        ```json
        {
            "jsonrpc": "2.0",
            "id": 4,
            "method": "wallet_deriveAddressesByIndexRange",
            "params": [
                "/Users/xxx/Library/GVite/testdata/wallet/vite_15391ac8b09d4e8ad78bfe5f9f9ab9682fe689572f6f53655e",
                0,
                10
            ]
        }
        ```

    === "Response"
        ```json
        {
            "jsonrpc": "2.0",
            "id": 4,
            "result": [
                "vite_15391ac8b09d4e8ad78bfe5f9f9ab9682fe689572f6f53655e",
                "vite_659fbce2a908bdab3b7c46348f249c90c812e36b9ceac67aa0",
                "vite_cc373442a471a8dd4b2240d5a74f8e4037177a8795d30bdfd7",
                "vite_1beb02f13af1b16a317c927d470ca3118ba738e22da3f8bf6e",
                "vite_d1c10321319de24bcbd865e7f4127f5873bf9c251f0a4abb00",
                "vite_acf35393ba47b8216ebbc5252e8884d518971a57c11b5866e1",
                "vite_87df61f0feddb6121fecf7d5ba8d7e56443d53ead06da90a06",
                "vite_8de52abce25c65116b08d84966d67e3dd7860848b52f388d23",
                "vite_ed346025dc7196ed000caa429306bbed1bda42010597d63676",
                "vite_783baa0caccff4d365f09873660208ee727bfc5d9710b267e5"
            ]
        }
        ```

## `wallet_createEntropyFile`
Create a new entropy file

- **Parameters**:
	- `passphrase`: `string`  A passphrase to encrypt the entropy file

- **Returns**: `CreateEntropyFileResponse`
    - `mnemonics`: `string`  Mnemonic phrase
	- `primaryAddress`: `address`  Address at index 0
	- `filePath`: `string`  Absolute path of the entropy file


!!! example
    === "Request"
        ```json
        {
            "jsonrpc": "2.0",
            "id": 2,
            "method": "wallet_createEntropyFile",
            "params": [
                "123456"
            ]
        }
        ```

    === "Response"
        ```json
        {
            "jsonrpc": "2.0",
            "id": 2,
            "result": {
                "mnemonics": "pear lonely piece base local lift material damp animal siege error throw ride flag version dumb parent clever upper toe lumber great wild vivid",
                "primaryAddress": "vite_f646dc1f32b0ea88289bbfe4e4138d26edc9f9eac33a9e5292",
                "filePath": "/Users/xxx/Library/GVite/testdata/wallet/vite_f646dc1f32b0ea88289bbfe4e4138d26edc9f9eac33a9e5292"
            }
        }
        ```

## `wallet_deriveAddressByIndex`
Derive address from an entropy file by index. The entropy file must be unlocked or the method will return an error.

- **Parameters**:
	- `entropyFile`: `string`  Absolute path of the entropy file, or primary address if the file is under standard directory. 
	- `index`: `uint32`  Index of address

- **Returns**: `DeriveResult`
    -  `bip44Path`: `string`  Address's BIP44 path
    -  `address`: `address`  Derived address
	-  `privateKey`: `base64`  Address's private key in base64 format


!!! example
    === "Request"
        ```json
        {
            "jsonrpc": "2.0",
            "id": 2,
            "method": "wallet_deriveAddressByIndex",
            "params": [
                "vite_15391ac8b09d4e8ad78bfe5f9f9ab9682fe689572f6f53655e",
                0
            ]
        }
        ```

    === "Response"
        ```json
        {
            "jsonrpc": "2.0",
            "id": 2,
            "result": {
                "bip44Path": "m/44'/666666'/1'",
                "address": "vite_8431a5acb599da19529c3e8bd099087a9d550fb29039dada28",
                "privateKey": "SKxAWibv4u85xMdRByCaveOwjw0bhempG9/zi59TjJUESNFMNvoE+wP/X/Zz+Tc3ObdZVO53UQT5BS8xATefbg=="
            }
        }
        ```

## `wallet_deriveAddressByPath`
Derive address from an entropy file by bip44 path. The entropy file must be unlocked or the method will return an error.

- **Parameters**:
	- `entropyFile`: `string`  Absolute path of the entropy file, or primary address if the file is under standard directory. 
	- `bip44Path`: `string`  BIP44 path

- **Returns**: `DeriveResult`
    -  `bip44Path`: `string`  Address's BIP44 path
    -  `address`: `address`  Derived address
	-  `privateKey`: `base64`  Address's private key in base64 format


!!! example
    === "Request"
        ```json
        {
            "jsonrpc": "2.0",
            "id": 2,
            "method": "wallet_deriveAddressByPath",
            "params": [
                "vite_b1c00ae7dfd5b935550a6e2507da38886abad2351ae78d4d9a",
                "m/44'/666666'/2'/4'"
            ]
        }
        ```

    === "Response"
        ```json
        {
            "jsonrpc": "2.0",
            "id": 2,
            "result": {
                "bip44Path": "m/44'/666666'/2'/4'",
                "address": "vite_a5efba49303b46c42c7e89b6cf5facd897d3a444fdb37af64e",
                "privateKey": "HSe4vB20dKTHYz+xzlAJ+wDhQQTJnJfemLTjbkPBb6ql/LS+lob/77NOdRfky3VWjai4g81mGR8L+goQDgEKoA=="
            }
        }
        ```

## `wallet_recoverEntropyFile`
Restore an entropy file from mnemonic phrase

- **Parameters**:
	- `mnemonics`: `string`  Mnemonic phrase
	- `passphrase`: `string`  A passphrase to encrypt the entropy file

- **Returns**: `CreateEntropyFileResponse`
    - `mnemonics`: `string`  Mnemonic phrase
	- `primaryAddress`: `address`  Address at index 0
	- `filePath`: `string`  Absolute path of the entropy file


!!! example
    === "Request"
        ```json
        {
            "jsonrpc": "2.0",
            "id": 4,
            "method": "wallet_recoverEntropyFile",
            "params": [
                "utility client point estate auction region jump hat sick blast tomorrow pottery detect mixture clog able person matrix blast volume decide april congress resource",
                "123456"
            ]
        }
        ```

    === "Response"
        ```json
        {
            "jsonrpc": "2.0",
            "id": 4,
            "result": {
                "mnemonics": "utility client point estate auction region jump hat sick blast tomorrow pottery detect mixture clog able person matrix blast volume decide april congress resource",
                "primaryAddress": "vite_981bca7a348de85bd431b842d4b6c17044335f71e5f3da59c0",
                "filePath": "/Users/xxx/Library/GVite/testdata/wallet/vite_981bca7a348de85bd431b842d4b6c17044335f71e5f3da59c0"
            }
        }
        ```

## `wallet_isUnlocked`
Check if the entropy file is unlocked

- **Parameters**:
	- `entropyFile`: `string`  Absolute path of the entropy file, or primary address if the file is under standard directory. 

- **Returns**:
    - `bool`: `true` means the entropy file is unlocked


!!! example
    === "Request"
        ```json
        {
            "jsonrpc": "2.0",
            "id": 4,
            "method": "wallet_isUnlocked",
            "params": [
                "vite_15391ac8b09d4e8ad78bfe5f9f9ab9682fe689572f6f53655e"
            ]
        }
        ```

    === "Response"
        ```json
        {
            "jsonrpc": "2.0",
            "id": 4,
            "result": true
        }
        ```

## `wallet_findAddressInEntropyFile`
Find an address in entropy file and return the index. Returns an error if the entropy file is locked or the address is not found in the entropy file.

- **Parameters**:  
	- `entropyFile`: `string`  Absolute path of the entropy file, or primary address if the file is under standard directory. 
	- `address`: `address`： Address to find

- **Returns**: `FindAddrResponse`
    - `entropyFile`: `string`  Absolute path of the entropy file
	- `index`: `uint32`  Index of address
		

!!! example
    === "Request"
        ```json
        {
            "jsonrpc": "2.0",
            "id": 4,
            "method": "wallet_findAddressInEntropyFile",
            "params": [
                "/Users/xxx/Library/GVite/testdata/wallet/vite_15391ac8b09d4e8ad78bfe5f9f9ab9682fe689572f6f53655e",
                "vite_3fd41bb6ba4f15d5e74214a16153ff2f5abce67f73dc0dc07b"
            ]
        }
        ```

    === "Response"
        ```json
        {
            "jsonrpc": "2.0",
            "id": 4,
            "result": {
                "entropyFile": "/Users/xxx/Library/GVite/testdata/wallet/vite_15391ac8b09d4e8ad78bfe5f9f9ab9682fe689572f6f53655e",
                "index": 84
            }
        }
        ```

## `wallet_findAddress`
Find an address in current unlocked entropy file and return the index. Returns an error if the address is not found.

- **Parameters**:  
	* `address`: `address`： Address to find

- **Returns**: `FindAddrResponse`
    - `entropyFile`: `string`  Absolute path of the entropy file
	- `index`: `uint32`  Index of address


!!! example
    === "Request"
        ```json
        {
            "jsonrpc": "2.0",
            "id": 4,
            "method": "wallet_findAddress",
            "params": [
                "vite_15391ac8b09d4e8ad78bfe5f9f9ab9682fe689572f6f53655e"
            ]
        }
        ```

    === "Response"
        ```json
        {
            "jsonrpc": "2.0",
            "id": 4,
            "result": {
                "entropyFile": "/Users/xxx/Library/GVite/testdata/wallet/vite_15391ac8b09d4e8ad78bfe5f9f9ab9682fe689572f6f53655e",
                "index": 84
            }
        }
        ```

## `wallet_createTransaction`
Send a transaction with the address in entropy file. If entropy file is not specified, this method will search in all entropy files with the passphrase for the address.

> Note: Despite `entropyFile` can be omitted, `passphrase` is a mandatory field to unlock the entropy file

- **Parameters**: `CreateTransferTxParms`
    - `entropyFile`: `string`  Absolute path of the entropy file, or primary address if the file is under standard directory. Optional
	- `address`: `address`  Address of sending account. Mandatory
	- `toAddress`: `address`  Address of recipient. Mandatory
	- `tokenId`: `tokenId`  Token id. Mandatory
	- `passphrase`: `string`  Entropy file passphrase. Mandatory
	- `amount`: `bigint string`  Transfer amount. Mandatory
	- `data`: `base64`  Transaction data. Optional
	- `difficulty`: `bigint string`  PoW difficulty. Optional

- **Returns**:
    * `hash`  Hash of the account block that has been sent


!!! example
    === "Request"
        ```json
        {
            "jsonrpc": "2.0",
            "id": 0,
            "method": "wallet_createTransaction",
            "params": [{
                "entropyFile": "vite_e41be57d38c796984952fad618a9bc91637329b5255cb18906",
                "address": "vite_e41be57d38c796984952fad618a9bc91637329b5255cb18906",
                "toAddress": "vite_086f3decd9d08cc06162b20482ea6eff323667f4bf7fcbe7bf",
                "tokenId": "tti_5649544520544f4b454e6e40",
                "passphrase": "123",
                "amount": "10000000000000000000"
            }]
        }
        ```

    === "Response"
        ```json
        {
            "jsonrpc": "2.0",
            "id": 0,
            "result": "3dca3d96d0c0d1bb09d1f3ff9e4743a88d427e5c38e853f928b451f2183ff0f3"
        }
        ```

## `wallet_addEntropyStore`
Install a new entropy file on the node. This method is used to add an entropy file not in standard directory.

- **Parameters**:  
	- `entropyFile`: `string`  Absolute path of the entropy file, or primary address if the file is under standard directory. 

- **Returns**: null


!!! example
    === "Request"
        ```json
        {
            "jsonrpc": "2.0",
            "id": 0,
            "method": "wallet_addEntropyStore",
            "params": [
                "/Users/xxx/Library/GVite/testdata/anotherFolder/vite_086f3decd9d08cc06162b20482ea6eff323667f4bf7fcbe7bf"
            ]
        }
        ```

    === "Response"
        ```json
        {
            "jsonrpc": "2.0",
            "id": 0,
            "result": null
        }
        ```

## `wallet_signData`
Sign a 32 byte hex string with private key of the address. The address must be found in the current unlocked entropy file or the method will return an error.

!!! note
    The common use case of this method is to sign an account block hash to obtain the signature of the block

- **Parameters**:  
	- `address`: `address`  Signing address
	- `hexMsg`: `string`  32 byte hex message or account block hash

- **Returns**: `HexSignedTuple`
    - `message`: `string`  Original message
    - `signedData`: `string`  64-byte signature in hex format
    - `pubkey`: `string`  Public key in hex format


!!! example
    === "Request"
        ```json
        {
            "jsonrpc": "2.0",
            "id": 0,
            "method": "wallet_signData",
            "params": ["vite_e41be57d38c796984952fad618a9bc91637329b5255cb18906", "e039dfc08f5c5e13a480dc598f9ec75797b3ac721ef7af371509cedd5cc64542"]
        }
        ```

    === "Response"
        ```json
        {
            "jsonrpc": "2.0",
            "id": 0,
            "result": {
                "message": "e039dfc08f5c5e13a480dc598f9ec75797b3ac721ef7af371509cedd5cc64542",
                "signedData": "cbe51cde010b9c18aca33bd0cd05554af5410a23f077782ff7e9a7b039486c161aa8a7a148ad3e29d55321ef2012c4d3dca679d07a0d0c83c47d0e65bd9f1d0c",
                "pubkey": "660329bffc2f328cf183e1b7cae3f8b6545548f8e913adab3229492732e0ba56"
            }
        }
        ```
