---
order: 5
---

# RPC / IPC

Some sort of interface is needed to communicate with a node. For this purpose, the client offers a set of RPC/IPC methods that can be called.

::: tip
Definitions of Terms:
* **RPC**: Remote Procedure Call - is a particular type of communication, but can be on a single machine, or across a network between machines.
* **IPC**: Inter-Process Communication - is a general term for communication between different processes (which are usually on a single machine).
:::

## Get started

* Start a full node as instructed [here](./setup.md)
* Navigate to the [installation directory](setup.md#installation-directory) and execute one of the following commands

:::tip
The file `gvite.ipc` will only exist while the node is running and `IPCEnabled` is set to `true` in the `node_config.json` file.
:::

## Wallet Management

::: tip Please make sure to add the `wallet` module to the `PublicModules` list in the `node_config.json` before starting the node. Otherwise the following command will fail with: `The method wallet_createEntropyFile does not exist/is not available`.
:::

::: tip Remember to remove said `wallet` module from `PublicModules` when the setup is completed, for safety purposes.
:::

### Create Wallet
  
Execute the following command:

```javascript
./gvite rpc ~/.gvite/maindata/gvite.ipc wallet_createEntropyFile '["Your_Password"]'
```

This will produce a similar result:

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

* `mnemonics`: Mnemonic phrase. Please keep it safe
* `primaryAddress`: Vite address at index 0 corresponding to the mnemonic
* `filePath`: The location of the keyStore file

### Recover Wallet from Mnemonic

Execute the following command:

```javascript
./gvite rpc ~/.gvite/maindata/gvite.ipc wallet_recoverEntropyFile '["Your_Mnemonic", "Your_Password"]'
e.g.
./gvite rpc ~/.gvite/maindata/gvite.ipc wallet_recoverEntropyFile '["utility client point estate auction region jump hat sick blast tomorrow pottery detect mixture clog able person matrix blast volume decide april congress resource", "123456"]'
```

This will result in the following output:

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

Now the keystore file "vite_981bca7a348de85bd431b842d4b6c17044335f71e5f3da59c0" has been regenerated under "~/.gvite/maindata/wallet/".

### Recover Mnemonic from Wallet

Command:

```javascript
./gvite rpc ~/.gvite/maindata/gvite.ipc wallet_extractMnemonic '["Your_Address", "Your_Password"]'
e.g.
./gvite rpc ~/.gvite/maindata/gvite.ipc wallet_extractMnemonic '["vite_981bca7a348de85bd431b842d4b6c17044335f71e5f3da59c0", "123456"]'
```

Result:

```json
{
   "jsonrpc": "2.0",
   "id": 1,
   "result": "utility client point estate auction region jump hat sick blast tomorrow pottery detect mixture clog able person matrix blast volume decide april congress resource"
}
```

## Monitoring

### Query snapshot block height

Linux/Unix:
```bash
./gvite rpc ~/.gvite/maindata/gvite.ipc ledger_getSnapshotChainHeight
```
Windows:
```bash
gvite-windows-amd64.exe rpc \\.\pipe\gvite.ipc ledger_getSnapshotChainHeight
```

The following result will be displayed:
```
{"jsonrpc":"2.0","id":1,"result":"1021388"}
```
1021388 is the current snapshot block height.
