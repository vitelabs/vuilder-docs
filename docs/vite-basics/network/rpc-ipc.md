---
order: 5
---

# RPC / IPC

An interface is required to communicate with a node. For this purpose, the client provides a set of RPC/IPC methods that can be invoked.

!!! tip "Definitions of Terms"
	=== "RPC"
      *Remote Procedure Call*: A type of communication that can occur on a single machine or across a network between machines.
	=== "IPC"
      *Inter-Process Communication*: A general term for communication between different processes, usually on a single machine.

## Getting Started

* Start a full node as instructed [here](./setup.md).
* Navigate to the [installation directory](setup.md#installation-directory) and execute one of the following commands.

!!! tip
	The file `gvite.ipc` will only exist while the node is running and `IPCEnabled` is set to `true` in the `node_config.json` file.

## Wallet Management

!!! tip 
	Ensure that the `wallet` module is added to the `PublicModules` list in the `node_config.json` before starting the node. Otherwise, the following command will fail with: `The method wallet_createEntropyFile does not exist/is not available`.

!!! tip 
	For security reasons, remove the `wallet` module from `PublicModules` after completing the setup.

### Creating a Wallet
  
Run the following command:

```javascript
./gvite rpc ~/.gvite/maindata/gvite.ipc wallet_createEntropyFile '["Your_Password"]'
```

This will produce output similar to the following:

```json
{
   "jsonrpc": "2.0",
   "id": 1,
   "result": {
      "mnemonics":"shoot notice glow maze repair outdoor swallow lounge tunnel gym tuition illness fault hill giggle possible enhance ecology interest interest rice inspire awful boil",
      "primaryAddress":"vite_525cabb6d3acd6a583747e7b916a18726828e1171551dbc09a",
      "filePath":"/home/anon/.gvite/maindata/wallet/vite_525cabb6d3acd6a583747e7b916a18726828e1171551dbc09a"
   }
}
```

- `mnemonics`: The mnemonic phrase. Keep it secure.
- `primaryAddress`: The Vite address at index 0 corresponding to the mnemonic.
- `filePath`: The location of the keystore file.

### Recovering a Wallet from a Mnemonic

Run the following command:

```javascript
./gvite rpc ~/.gvite/maindata/gvite.ipc wallet_recoverEntropyFile '["Your_Mnemonic", "Your_Password"]'
e.g.
./gvite rpc ~/.gvite/maindata/gvite.ipc wallet_recoverEntropyFile '["utility client point estate auction region jump hat sick blast tomorrow pottery detect mixture clog able person matrix blast volume decide april congress resource", "123456"]'
```

This will produce output similar to the following:

```json
{
   "jsonrpc": "2.0",
   "id": 1,
   "result": {
      "mnemonics": "utility client point estate auction region jump hat sick blast tomorrow pottery detect mixture clog able person matrix blast volume decide april congress resource",
      "primaryAddress": "vite_981bca7a348de85bd431b842d4b6c17044335f71e5f3da59c0",
      "filePath": "/home/anon/.gvite/maindata/wallet/vite_981bca7a348de85bd431b842d4b6c17044335f71e5f3da59c0"
   }
}
```

The keystore file "vite_981bca7a348de85bd431b842d4b6c17044335f71e5f3da59c0" will now be regenerated under `~/.gvite/maindata/wallet/`.

### Recover Mnemonic from Wallet

Run the following command:

```javascript
./gvite rpc ~/.gvite/maindata/gvite.ipc wallet_extractMnemonic '["Your_Address", "Your_Password"]'
e.g.
./gvite rpc ~/.gvite/maindata/gvite.ipc wallet_extractMnemonic '["vite_981bca7a348de85bd431b842d4b6c17044335f71e5f3da59c0", "123456"]'
```

This will produce output similar to the following:

```json
{
   "jsonrpc": "2.0",
   "id": 1,
   "result": "utility client point estate auction region jump hat sick blast tomorrow pottery detect mixture clog able person matrix blast volume decide april congress resource"
}
```

## Monitoring

### Querying Snapshot Block Height

For Linux/Unix:
```bash
./gvite rpc ~/.gvite/maindata/gvite.ipc ledger_getSnapshotChainHeight
```

For Windows:
```bash
gvite-windows-amd64.exe rpc \\.\pipe\gvite.ipc ledger_getSnapshotChainHeight
```

The following result will be displayed:
```json
{
   "jsonrpc":"2.0",
   "id":1,
   "result":"1021388"
}
```
Here, `1021388` is the current snapshot block height.
