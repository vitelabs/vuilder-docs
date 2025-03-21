---
order: 3
---

# Setup

## Recommended Specs
* SBP (Snapshot Block Producer / Supernode) - 2 CPUs / 8 GB RAM
* Full node - 1 CPU / 4 GB RAM

A minimum of 5 Mbit/s stable internet connection is required.

## Minimal Installation

You can start a full node on the Vite mainnet quickly by following the steps below. While this is a convenient way to check if everything is working as intended, you should change the default configuration to your needs. All configuration options are described [here](./configuration.md).

1. Download & extract the latest release of [go-vite](https://github.com/vitelabs/go-vite/releases)
2. Open a terminal and cd into the installation directory
3. Run `./gvite` to start the full node with the default configuration

The following result should be displayed:
```
Vite RPC service started successfully!
```

It can take some time until the node starts syncing the distributed ledger but eventually the following output should appear:
```
[Snapshot Stats] Height:10001, Hash:ec543ff3f7397876b6c67a41a170c0e1f97ac637fee4c4db3d1903087f42312e, Timestamp:2019-05-22 01:20:13 +0000 UTC, Producer:vite_dff5ee13c87ed2f205ef87d820b3cd8e97c181b1bb6781c602, Time:2022-05-29 12:16:09.19895974 +0000 UTC m=+51.489945950
```

To estimate the time needed to sync the entire ledger, you can check the current height with one of the available explorers and compare it to the height above.

## Directory Structure

### Installation directory
Refers to the folder where gvite boot script and configuration files are located. For example, `~/gvite-${version}-${os}` is an installation directory.

`gvite` : Gvite executable file
`bootstrap` : Optional boot script to start the node
`node_config.json` : Configuration file

### Working directory
The working directory contains sub-directories/files such as "ledger", "ledger_files", "LOCK", "net", "rpclog", "runlog" and "wallet".

```
cd ~/.gvite/maindata
```

`ledger` : Ledger directory for storing transactions and snapshot blocks.
`rpclog` : Directory for storing RPC logs
`runlog` : Directory for storing run-time logs
`wallet` : Wallet keystore directory for storing keystore files that secure private keys. Do remember **KEEP YOUR PRIVATE KEY SAFE**.

## Stop/Reboot Node

If you started the node with the `./boostrap` script, you might need the following instructions to stop or reboot your node.

Execute the following command
```bash
ps -ef|grep gvite
```

to obtain the gvite process id
```bash
ubuntu   27268     1 99 16:00 ?        01:54:56 ./gvite -pprof 
```

Kill it with
```bash
kill -9 27268
```

Then reboot
```bash
./bootstrap
```

To check if gvite has rebooted successfully, run:
```bash
ps -ef|grep gvite
```
