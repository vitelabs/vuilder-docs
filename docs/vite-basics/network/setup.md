---
order: 3
---

# Node Setup

## Recommended Specifications
* SBP (Snapshot Block Producer / Supernode) - 2 CPUs / 8 GB RAM
* Full Node - 1 CPU / 4 GB RAM

A stable internet connection with a minimum speed of 5 Mbit/s is required.

## Minimal Installation

You can quickly start a full node on the Vite mainnet by following the steps below. While this is a convenient way to verify that everything is functioning correctly, you should customize the default configuration to suit your needs. All configuration options are described [here](./configuration.md).

1. Download and extract the latest release of [go-vite](https://github.com/vitelabs/go-vite/releases).
2. Open a terminal and navigate to the installation directory.
3. Run `./gvite` to start the full node with the default configuration.

The following message should appear:
```bash
Vite RPC service started successfully!
```

It may take some time for the node to start syncing the distributed ledger. Eventually, you should see output similar to the following:
```log
[Snapshot Stats] Height:10001, Hash:ec543ff3f7397876b6c67a41a170c0e1f97ac637fee4c4db3d1903087f42312e, Timestamp:2019-05-22 01:20:13 +0000 UTC, Producer:vite_dff5ee13c87ed2f205ef87d820b3cd8e97c181b1bb6781c602, Time:2022-05-29 12:16:09.19895974 +0000 UTC m=+51.489945950
```

To estimate the time required to sync the entire ledger, check the current height using one of the available explorers and compare it to the height shown above.

## Directory Structure

### Installation Directory
This refers to the folder where the `gvite` executable and configuration files are located. For example, `~/gvite-${version}-${os}` is an installation directory.

- `gvite`: The Gvite executable file.
- `bootstrap`: An optional boot script to start the node.
- `node_config.json`: The configuration file.

### Working Directory
The working directory contains subdirectories and files such as "ledger", "ledger_files", "LOCK", "net", "rpclog", "runlog", and "wallet".

```bash
cd ~/.gvite/maindata
```

- `ledger`: Directory for storing transactions and snapshot blocks.
- `rpclog`: Directory for storing RPC logs.
- `runlog`: Directory for storing runtime logs.
- `wallet`: Wallet keystore directory for storing keystore files that secure private keys. 

!!! danger 
    Keep your private key safe.

## Stopping or Rebooting the Node

If you started the node using the `./bootstrap` script, follow these instructions to stop or reboot your node.

Run the following command to obtain the `gvite` process ID:
```bash
ps -ef | grep gvite
```

Example output:
```bash
ubuntu   27268     1 99 16:00 ?        01:54:56 ./gvite -pprof 
```

Kill the process using:
```bash
kill -9 27268
```

Then reboot the node:
```bash
./bootstrap
```

To verify that `gvite` has restarted successfully, run:
```bash
ps -ef | grep gvite
```
