---
order: 4
---

# Configuration

This section introduces how to manually configure a node on your machine. However, if you just want to develop locally, it's recommended you get [Visual Studio Code Solidity++ Extension](https://marketplace.visualstudio.com/search?term=Soliditypp&target=VSCode&category=All%20categories&sortBy=Relevance) which includes a local development node.

## Node

When downloading the [latest release of go-vite](https://github.com/vitelabs/go-vite/releases) the following `node_config.json` is included:

:::warning
You can make your own config based on the example below but remember to remove the text comments following after "//". 
The purpose of the comments is to explain certain configuration settings but they are not part of the node config itself and should always be removed.
:::

```javascript
{
  "Identity": "foobar", // Node name
  "NetID": 1, // Vite network ID. The field is used to connect different networks. Vite Mainnet -> 1. Testnet -> 2. Local/Debug -> 3.
  "ListenInterface": "0.0.0.0",
  "Port": 8483, // UDP/TCP port. Default is 8483. Please ensure the port is not occupied by another process
  "FilePort": 8484, // Port used in combination with ListenInterface and FilePublicAddress
  "MaxPeers": 10, // Maximum peers connected
  "MinPeers": 5, // Search for nodes and try to connect until number of peers is larger than threshold
  "MaxInboundRatio": 2, // Maximum inbound ratio
  "MaxPendingPeers": 5, // Maximum peers waiting to connect
  "BootSeeds": [
    "https://bootnodes.vite.net/bootmainnet.json" // URL for a list of bootstrap nodes
  ],
  "Discover": true, // Indicates whether other nodes in the networks should be discovered. Default is enabled
  "RPCEnabled": true, // Enable RPC access. Default is enabled
  "HttpHost": "0.0.0.0", // Http listening address. Do not change unless you must specify a particular network address
  "HttpPort": 48132, // Http listening port. Default is 48132
  "WSEnabled": false, // Enable WebSocket access. Default is enabled
  "WSHost": "0.0.0.0", // WebSocket listening address. Do not change unless you must specify a particular network address
  "WSPort": 41420, // WebSocket listening port. Default is 41420
  "HttpVirtualHosts": [],
  "IPCEnabled": true, // Enable local command line console
  "PublicModules": [
    "ledger",
    "net",
    "contract",
    "util",
    "debug",
    "sbpstats",
    "dashboard"
  ],
  "Miner": false, // Disable mining. This field must be set to true for SBP node, otherwise it can be turned off
  "CoinBase": "", // SBP block producing address in the format of index:address
  "EntropyStorePath": "", // The name of keystore file. Must conform to above coinbase address and should be stored in wallet directory
  "EntropyStorePassword": "", // Keystore password
  "LogLevel": "info", // gvite log level. Default is info
  "OpenPlugins": true, // Open or close chain plugins. eg, filter account blocks by token.
  "SubscribeEnabled": true, // Enable the subscribe API
  "TxDexEnable": true, // Enable the DEX
  "VmLogAll": true, // true will save the vmlog of all contracts. By default, vmlog (ie event) is not saved
  "DashboardTargetURL": "wss://stats.vite.net", // Full node statistics URL
  "RewardAddr": "vite_xxxxxxxxxxxxxxxxxx" // Full node reward receiving address.
}
```

Other configuration options:

- `Single`: Indicates a single node (default: false)
- `LedgerGc`: Enables the ledger garbage collector (default: true)
- `PublicAddress`: The network address used by other nodes to connect (optional)
- `FilePublicAddress`: The network address used by other nodes to connect (optional)
- `DataDir`: The directory for storing p2p data, if empty, memory will be used as database (optional)
- `PeerKey`: Key to encrypt messages, the corresponding public key for NodeID, MUST NOT be revealed (optional)
- `BootNodes`: A list of bootstrap UDP node addresses (optional)
- `StaticNodes`: A list of bootstrap TCP node addresses (optional)
- `GenesisFile`: Sets the genesis block file path (optional)
- `ForwardStrategy`: Picks peers to forward new blocks (default: cross)
- `AccessControl`: Controls the access during the p2p handshake (default: any)
- `AccessAllowKeys`: A list of NodeIDs or public keys to be allowed in the p2p handshake (optional)
- `AccessDenyKeys`: A list of NodeIDs or public keys to be denied in the p2p handshake (optional)
- `BlackBlockHashList`: A list of block hashes to be blacklisted (optional)
- `WhiteBlockList`: A list of block hashes to be whitelisted (optional)
- `VmLogWhiteList`: A list of contract addresses which are allowed to save VM logs (optional)

:::danger Important:
* Don't use ***same address*** for both SBP address and SBP registration address
* Don't use ***same mnemonics*** to generate both SBP address and SBP registration address
:::

**Default public modules**

They are enabled by default whether or not added to the `PublicModules` list.

- `ledger`: Block information, chain height, virtual machine logs, transactions
- `net`: Network synchronization and node information, peers count
- `contract`: Smart contract information, call off-chain methods, stake, SBP, vote and token information
- `util`: Calculate a PoW nonce based on the given difficulty
- `health`: Chain and node health related information

**Optional public modules**

They can be added as needed to the `PublicModules` list.

- `wallet`: Entropy files, mnemonic and entropy store, derive seeds and addresses, sign data
- `pow`: Proof-of-work (PoW) nonce, cancel PoW
- `register`: Registration and reward related data
- `vote`: Vote and cancel votes
- `mintage`: Mint, issue and burn tokens
- `pledge`: Retrieve and cancel quota
- `dexfund`: ViteX account fund, trade pairs, dividend pools
- `dextrade`: ViteX trades and orders
- `dex`: ViteX account balance, token and market information, invitations
- `private_dex`: ViteX fees, operators, market mining
- `tx`: Send raw transactions, calculate PoW difficulty and required quota
- `dashboard`: Operating system, process and runtime information, full node statistics
- `subscribe`: Polling and callback subscriptions
- `sbpstats`: Hour, period and day SBP statistics
- `data`: Quota and ViteX paginated data
- `ledgerdebug`: Debug ledger related methods
- `miner`: Manually mine a snapshot for debugging and testing purposes

**Deprecated public modules**

`private_onroad`, `public_onroad`, `debug`, `consensusGroup`

:::tip
You might find the [node_config.json](https://github.com/vitelabs/soliditypp-vscode/blob/master/bin/vite/node_config.json) used by our VSCode Solidity++ Extension helpful.
:::

## Genesis

The genesis block is the start of the blockchain, and the `genesis.json` is the file that defines it. It is like the "settings" for the Vite blockchain and below you can find an example:

- Consensus group settings
 - 1 snapshot block is produced per second
 - 3 consecutive blocks are produced by the same producer in a round
 - 1 snapshot block producer is selected in each round
- 2 initial block producers
- VITE token settings
- 2 initial staking accounts
- 3 initial accounts (including 2 built-in contracts)

:::warning
You can make your own config based on the example below but remember to remove the text comments following after "//". 
The purpose of the comments is to explain certain configuration settings but they are not part of the genesis config itself and should always be removed.
:::

```javascript
{
  "GenesisAccountAddress": "vite_bb6ad02107a4422d6a324fd2e3707ad53cfed9359378a78792",
  "UpgradeCfg": {
    "Level": "latest"
  },
  "GovernanceInfo": { // Consensus group settings
    "ConsensusGroupInfoMap": {
      "00000000000000000001": { // Consensus group id: "00000000000000000001" stands for snapshot consensus group
        "NodeCount": 1, // Number of SBP(s) selected in each round
        "Interval": 1, // Snapshot block interval
        "PerCount": 3, // Number of blocks each SBP produces consecutively in a round
        "RandCount": 0, // Number of SBP(s) selected randomly
        "RandRank": 100, // Supernode ranking to which the random SBP(s) is selected
        "Repeat": 1, // Number of round in which the consensus result takes effect
        "CheckLevel": 0, // Consensus verification level
        "CountingTokenId": "tti_5649544520544f4b454e6e40", // Token which is used to calculate the voting power. Default is VITE
        "RegisterConditionId": 1, // Registration type id
        "RegisterConditionParam": {
          "StakeAmount": 500000000000000000000000, // Amount of staking needed to register SBP
          "StakeHeight": 1, // Staking period in number of snapshots
          "StakeToken": "tti_5649544520544f4b454e6e40" // Staking token id
        },
        "VoteConditionId": 1, // Voting type id
        "VoteConditionParam": {},
        "Owner": "vite_bb6ad02107a4422d6a324fd2e3707ad53cfed9359378a78792", // Owner of snapshot consensus group
        "StakeAmount": 0, // Amount of staking for this consensus group
        "ExpirationHeight": 1 // Staking period for this consensus group
      },
      "00000000000000000002": { // Consensus group id: "00000000000000000002" stands for delegated consensus group
        "NodeCount": 1,
        "Interval": 3,
        "PerCount": 1,
        "RandCount": 0,
        "RandRank": 100,
        "Repeat": 48,
        "CheckLevel": 1,
        "CountingTokenId": "tti_5649544520544f4b454e6e40",
        "RegisterConditionId": 1,
        "RegisterConditionParam": {
          "StakeAmount": 500000000000000000000000,
          "StakeToken": "tti_5649544520544f4b454e6e40"
        },
        "VoteConditionId": 1,
        "VoteConditionParam": {},
        "Owner": "vite_bb6ad02107a4422d6a324fd2e3707ad53cfed9359378a78792",
        "StakeAmount": 0,
        "ExpirationHeight": 1
      }
    },
    "RegistrationInfoMap": { // SBP settings
      "00000000000000000001": {
        "s1": { // SBP name
          "BlockProducingAddress": "vite_e41be57d38c796984952fad618a9bc91637329b5255cb18906",
          "StakeAddress": "vite_e41be57d38c796984952fad618a9bc91637329b5255cb18906",
          "Amount": 500000000000000000000000,
          "ExpirationHeight": 7776000, // Staking period
          "RewardTime": 1, // Starting block height from which mining rewards are available for retrieval
          "RevokeTime": 0, // Block height at which the SBP can be cancelled and the corresponding staking can be retrieved. 0 means the SBP can be cancelled immediately
          "HistoryAddressList": [ // Historical block producing addresses
            "vite_e41be57d38c796984952fad618a9bc91637329b5255cb18906"
          ]
        }
      },
      "00000000000000000002": {
        "s1": {
          "BlockProducingAddress": "vite_e41be57d38c796984952fad618a9bc91637329b5255cb18906",
          "StakeAddress": "vite_e41be57d38c796984952fad618a9bc91637329b5255cb18906",
          "Amount": 500000000000000000000000,
          "ExpirationHeight": 7776000,
          "RewardTime": 1,
          "RevokeTime": 0,
          "HistoryAddressList": [
            "vite_e41be57d38c796984952fad618a9bc91637329b5255cb18906"
          ]
        }
      }
    }
  },
  "AssetInfo": { // Token settings
    "TokenInfoMap": {
      "tti_5649544520544f4b454e6e40": { // Token id
        "TokenName": "Vite Token",
        "TokenSymbol": "VITE",
        "TotalSupply": 1000000000000000000000000000, // Total supply. The total supply of VITE is 1e9 * 1e18
        "Decimals": 18,
        "Owner": "vite_bb6ad02107a4422d6a324fd2e3707ad53cfed9359378a78792",
        "MaxSupply": 115792089237316195423570985008687907853269984665640564039457584007913129639935, // Maximum supply
        "IsOwnerBurnOnly": false, // Boolean flag representing if the token can only be burned by token owner. Re-issuable token only
        "IsReIssuable": true // Boolean flag representing if the token is re-issuable or not
      }
    },
    "LogList": [
      {
        "Data": "",
        "Topics": [
          "3f9dcc00d5e929040142c3fb2b67a3be1b0e91e98dac18d5bc2b7817a4cfecb6",
          "000000000000000000000000000000000000000000005649544520544f4b454e"
        ]
      }
    ]
  },
  "QuotaInfo": { // Quota settings
    "StakeBeneficialMap": { // Quota recipient address and staking amount
      "vite_bb6ad02107a4422d6a324fd2e3707ad53cfed9359378a78792": 10000000000000000000000,
      "vite_56fd05b23ff26cd7b0a40957fb77bde60c9fd6ebc35f809c23": 10000000000000000000000
    },
    "StakeInfoMap": {
      "vite_bb6ad02107a4422d6a324fd2e3707ad53cfed9359378a78792": [ // Staking address
        {
          "Amount": 10000000000000000000000, // Staking amount
          "ExpirationHeight": 259200, // Staking period
          "Beneficiary": "vite_bb6ad02107a4422d6a324fd2e3707ad53cfed9359378a78792" // Quota recipient address
        }
      ],
      "vite_56fd05b23ff26cd7b0a40957fb77bde60c9fd6ebc35f809c23": [
        {
          "Amount": 10000000000000000000000,
          "ExpirationHeight": 259200,
          "Beneficiary": "vite_56fd05b23ff26cd7b0a40957fb77bde60c9fd6ebc35f809c23"
        }
      ]
    }
  },
  "AccountBalanceMap": { // Account settings
    "vite_bb6ad02107a4422d6a324fd2e3707ad53cfed9359378a78792": { // Account address
      "tti_5649544520544f4b454e6e40": 899980000000000000000000000 // Token id and amount
    },
    "vite_56fd05b23ff26cd7b0a40957fb77bde60c9fd6ebc35f809c23": {
      "tti_5649544520544f4b454e6e40": 100000000000000000000000000
    },
    "vite_e41be57d38c796984952fad618a9bc91637329b5255cb18906": {
      "tti_5649544520544f4b454e6e40": 0
    }
  }
}
```

:::tip
You might find the default [genesis.json](https://github.com/vitelabs/go-vite/blob/master/common/config/genesis_json.go) of go-vite or the [genesis.json](https://github.com/vitelabs/soliditypp-vscode/blob/master/bin/vite/genesis.json) used by our VSCode Solidity++ Extension helpful.
:::
