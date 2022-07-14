---
order: 5
---

# Connection Providers

Connection Providers provide an endpoint for interacting with the full node's [RPC API](https://docs.vite.org/vite-docs/api/rpc/). There are three connection providers on Vite: HTTP, WebSocket and IPC. 

* HTTP: set up connection via http/https. The default port on the node is 48132.
* WebSocket: set up connection via ws/wss. The default port is 41420.
* IPC: set up connection via ipc sockets. 

There are no obvious advantages and disadvantages between HTTP and WebSocket. However, if your program applies subscriptions, WebSocket is recommended as it updates in real time whereas HTTP polls for new data every few seconds. This chapter of Vite.js documentation will be brief as calling methods on these providers are best done by the [ViteAPI](6.%20Vite%20API.md) class covered in the next chapter.

IPC provider is a good option when using a local node since it gives the most secure connection.

## WebSocket

### Installation
```bash
npm i @vite/vitejs-ws
```

> Starting from 2.3.19, package @vite/vitejs-ws is consolidated into @vite/vitejs, so there's no need to install it separately. 

### Module Import
```js
import WS_RPC from "@vite/vitejs-ws";

// After 2.3.19 
import WS_RPC from "@vite/vitejs";
```

### `WS_RPC` Class
- **Constructor**
	- `path: string = 'ws://localhost:41420'` Connection URL
	- `timeout: number = 60000` Timeout in milliseconds
	- `options: object`
		- `protocol: string = ''`
		- `headers?: object` Request header
		- `clientConfig?: object` [websocket client config options](https://github.com/theturtle32/WebSocket-Node/blob/58f301a6e245ee25c4ca50dbd6e3d30c69c9d3d1/docs/WebSocketClient.md#client-config-options)
		- `retryTimes: number = 10` Times to retry connecting if it fails the first time
		- `retryInterval: number = 10000` Time between each retry attempt in milliseconds

- **Example**
	```js
	const providerWsURLs = {
		localnet: 'ws://localhost:23457',
		testnet: 'wss://buidl.vite.net/gvite/ws',
		mainnet: 'wss://node.vite.net/gvite/ws',
	};
	import WS_RPC from "@vite/vitejs-ws";
	const wsProvider = new WS_RPC(providerWsURLs.localnet, 60000, { retryTimes: 10, retryInterval: 5000 });
	```

### ReconnectHandler and Subscription Renewal

In 2.3.19, `ReconnectHandler`, `AlwaysReconnect` and `RenewSubscription` are added to support flexible reconnection mechanism and subscription renewal.

:::warning Breaking Change
`retryTimes` and `retryInterval` are moved from the options of provider to `ReconnectHandler`'s constructor. 
:::

Let's see a few examples.

1. Auto resubscribe with maximum 5 retries and 1000ms interval.

```js
const ws = new WS_RPC(config.wsURL);
const provider = new ViteAPI(ws, () => {
  console.log("Connected");
}, new RenewSubscription(retryTimes = 5, retryInterval = 1000));
```

2. Auto resubscribe with maximum retries and default 10000ms interval.

```js
const ws = new WS_RPC(config.wsURL);
const provider = new ViteAPI(ws, () => {
  console.log("Connected");
}, new RenewSubscription(Number.MAX_VALUE));
```

3. Auto reconnect with unlimited retries and default 10000ms interval. 

```js
const ws = new WS_RPC(config.wsURL);
const provider = new ViteAPI(ws, () => {
  console.log("Connected");
}, new AlwaysReconnect());
```

4. Use default handler (auto reconnect with 10 retries and 10000ms interval).

```js
const ws = new WS_RPC(config.wsURL);
const provider = new ViteAPI(ws, () => {
  console.log("Connected");
});
```

## HTTP

### Installation
```bash
npm i @vite/vitejs-http
```

> Starting from 2.3.19, package @vite/vitejs-http is consolidated into @vite/vitejs, so there's no need to install the package separately. 

### Module Import
```js
import HTTP_RPC from "@vite/vitejs-http";

// After 2.3.19 
import HTTP_RPC from "@vite/vitejs";
```

### `HTTP_RPC` Class
- **Constructor**
	- `host:string = 'http://localhost:48132'` Connection URL
	- `timeout: number = 60000` Timeout in milliseconds
	- `options: object = { headers: [] }`
		- `headers: { name: any, value: any }[]` Request headers
- **Example**
	```js
	import HTTP_RPC from "@vite/vitejs-http";

	const providerHttpURLs = {
		localnet: 'http://127.0.0.1:23456',
		testnet: 'https://buidl.vite.net/gvite',
		mainnet: 'https://node.vite.net/gvite',
	};

	const httpProvider = new HTTP_RPC(providerHttpURLs.mainnet);
	```

## IPC

### Installation
```bash
npm i @vite/vitejs-ipc
```

> Starting from 2.3.19, package @vite/vitejs-ipc is consolidated into @vite/vitejs, so there's no need to install the package separately. 

### Module Import
```js
import IPC_RPC from "@vite/vitejs-ipc";

// After 2.3.19 
import IPC_RPC from "@vite/vitejs";
```

### `IPC_RPC` Class
- **Constructor**
	- `path:string = ''` File path to gvite.ipc
	- `timeout: number = 60000` Timeout in milliseconds
	- `options: object`
		- `delimiter: '\n'` The delimiter at the end of each data packet
- **Example**
	```js
	import IPC_RPC from "@vite/vitejs-ipc";

	const ipcProvider = new IPC_RPC("~/.gvite/maindata/gvite.ipc");
	```
