---
parent: 
    order: 2
    title: Vite Connect
---

# How to Use ViteConnect

ViteConnect allows you to connect the Vite [iOS](https://apps.apple.com/us/app/vite-multi-chain-wallet/id1437629486) / [Android](https://play.google.com/store/apps/details?id=net.vite.wallet) Wallet app (hereinafter referred to as **Wallet**) to your web application (hereinafter referred to as **Web App**).

This package generates URIs that you can embed in a QR code for a user to scan with their Wallet. After the connection is established, transactions initiated by your Web App are relayed to the connected Wallet where the user can confirm or cancel it. This process ensures that the Web App you are interacting with never sees your private keys as the signing process happens on your phone.

See [here](https://docs.vite.org/vite-docs/articles/vite-connect.html) for more introduction about ViteConnect.

## Installation

```bash
npm install @vite/connector
```

## `Connector` Class
Instances of `Connector` represent a user's ViteConnect session.
- **Constructor**: 
	- `opts: IWalletConnectOptions`
		- `bridge?: string` - URL of a [ViteConnect Server](https://github.com/vitelabs/vite-connect-server)
		- `uri?: string` - ViteConnect URI. This can be attained from `new Connector().uri`
		- `session?: IWalletConnectSession` - Instance of an existing ViteConnect session. This can be attained from `new Connector().session`
		> Note: Despite all three fields being optional, at least one must be present.
	- `meta?: IClientMeta` Optional Web App info that can be shown in the Wallet
		- `bridgeVersion: number`
		- `description: string`
		- `url: string`
		- `icons: string[]`
		- `name: string`
		- `lastAccount?: string`
- **Example**
	```js
	import Connector from '@vite/connector';
	const bridge = 'wss://biforst.vite.net';
	const vcInstance = new Connector({ bridge });
	```

## Properties
|  Name  | Type | Description |
|-|:-:|-:|
| bridge | `string` | URL of a [ViteConnect server](https://github.com/vitelabs/vite-connect-server) |
| key | `string` | AES encryption key used to encrypt messages |
| clientId | `string` | Unique Web App id |
| peerId | `string` | Unique Wallet id |
| clientMeta | `IClientMeta` | Web App info |
| peerMeta | `IClientMeta` | Wallet info |
| handshakeTopic | `string` | Handshake topic |
| handshakeId | `number` | Handshake id |
| uri | `string` | The ViteConnect URI that can be embedded in the QR code |
| chainId | `number` | Chain id |
| accounts | `string[]` | The list of connected accounts |
| connected | `boolean` | If `true`, a Wallet has been connected |
| session | `object` | An object that wraps all above properties except for `uri` |

## Methods

### `createSession`
Creates a new ViteConnect session. After this method is called, it will wait until a Wallet approves or rejects the request. You can get the URI after the request is approved.
- **Parameters**: 
	- `opts?: { chainId: number }` Optional chain id
- **Returns**:
	- `Promise<void>`
- **Example**
	```js
	await vcInstance.createSession();
	const qrCodeData = vcInstance.uri;
	// renderQRCode(qrCodeData);
	```

:::warning Important
It is crucial that you call `createSession` before using `vcInstance.uri` otherwise the Vite Wallet will not be able to connect.
:::

:::tip
To persist a session after your Web App stops, you can store the `session` data in `localStorage` and add it to the config object when instantiating `Connector` to restore the session.
:::

```js
localStorage.setItem('vcSession', vcInstance.session);
const vcInstance = new Connector({ session: localStorage.getItem('vcSession') });
// vcInstance can now be used to sign transactions without needing the user to connect again
```

### `sendCustomRequest`
Send various requests to the ViteConnect server. A common request is sending an unsigned transaction so that it will be signed in the Wallet.
- **Parameters**: 
	- `request: Partial<IJsonRpcRequest>`
		- `id?: number` Unique request id. Use if you need to respond to a specific request, otherwise leave it empty. 
		- `jsonrpc?: string` JsonRpc version, default '2.0'
		- `method: string`
			- `'vc_sessionRequest'` 
				- Create a new session
			- `'vc_sessionUpdate'` 
				- Update current session info
			- `'vc_peerPing'` 
				- Send 'keepalive' message
			- `'vite_signAndSendTx'`
				- Request for signing a transaction and send
			- `'vite_signMessage'` 
				- Request for signing a transaction
		- `params: any[]` Input arguments
- **Returns**:
	- `Promise<Any>`
- **Example**
	```js
	// @vite/vitejs is a separate package you need to install for this example
	import { accountBlock } from '@vite/vitejs';

	const sendVcTx = () => {
		const block = accountBlock.createAccountBlock('callContract', {
			address: fromViteAddress,
			abi: contractABI,
			toAddress: toViteAddress,
			params: [],
			tokenId: viteTokenId,
			// This equals 1 VITE since VITE has 18 decimals
			amount: "1" + "0".repeat(18),
		}).accountBlock;
		
		vcInstance
			.sendCustomRequest({ method: 'vite_signAndSendTx', params: { block } })
			.then((signedBlock: Block) => signedBlock);
	}
	```

### `killSession`
Disconnect the Wallet and close the session
- **Parameters**: 
	- `sessionError?: ISessionError`
		- `message?: string` Optional message
- **Returns**:
	- `Promise<void>`
- **Example**
	```js
	vcInstance.killSession();
	```

### `startBizHeartBeat`
Start sending heartbeat messages
- **Parameters**: 
	- None
- **Returns**:
	- void
- **Example**
	```js
	vcInstance.startBizHeartBeat();
	```
:::tip Heartbeat
If the Web App hasn't sent a message for more than 10s after the connection is established, the session could be closed because the Wallet will send a disconnect message for not receiving your messages within 10s. You do not need to call this method - it will be called automatically when a session is created or updated.
:::

### `stopBizHeartBeat`
Stop sending heartbeat messages
- **Parameters**: 
	- None
- **Returns**:
	- void
- **Example**
	```js
	vcInstance.stopBizHeartBeat();
	```
> Note: if this method is called, the session will be closed after idle for 10s.

### `destroy`
Stop sending heartbeat message, kill the current session and close socket. The ViteConnect server will recycle the related topics
- **Parameters**: 
	- None
- **Returns**:
	- void
- **Example**
	```js
	vcInstance.destroy();
	```

### `approveRequest`
Notify the Web App that an RPC request has been approved with response
- **Parameters**: 
	- `response: Partial<IJsonRpcResponseSuccess>`
		- `id: number` Response id which corresponds to an RPC request
		- `jsonrpc: string`
		- `result: any` Result
- **Returns**:
	- `void`
- **Example**
	```js
	vcInstance.approveRequest(response);
	```

### `rejectRequest`
Notify the Web App that an RPC request has been rejected with error
- **Parameters**: 
	- `response: Partial<IJsonRpcResponseError>`
		- `id: number` Response id which corresponds to a RPC request
		- `jsonrpc: string`
		- `error: IJsonRpcErrorMessage` Error message
- **Returns**:
	- `void`
- **Example**
	```js
	vcInstance.approveRequest(response);
	```

### `approveSession`
When the Web App sends a new session or session update request, it will wait for the response. The Wallet should call `approveSession` to approve the request or reject it with `rejectSession`
- **Parameters**: 
	- `sessionStatus: ISessionStatus`
		- `chainId: number` Chain id
		- `accounts: string[]` Connected accounts
- **Returns**:
	- `void`
- **Example**
	```js
	vcInstance.approveSession(sessionStatus);
	```

### `rejectSession`
When the Web App sends a new session or session update request, it will wait for the response. The Wallet should call `approveSession` to approve the request or reject it with `rejectSession`
- **Parameters**: 
	- `sessionError?: ISessionError`
		- `message?: string` Error message
- **Returns**:
	- `void`
- **Example**
	```js
	vcInstance.rejectSession(sessionError);
	```

### `updateSession`
Update the current session with new chain id or connected account is changed. 
> Note: For the time being only the first account of the array works
- **Parameters**: 
	- `sessionStatus: ISessionStatus`
		- `chainId: number` Chain id
		- `accounts: string[]` Connected accounts
- **Returns**:
	- `void`
- **Example**
	```js
	vcInstance.updateSession(sessionStatus);
	```

### `on`
Trigger callback functions for various events.
- **Parameters**: 
	- `event: string`
		- `'connect'` When `approveSession` is called for a new session request or the user connects his Wallet
		- `'disconnect'` When `killSession` or `rejectSession` is called or the user logs out from his Wallet
		- `'session_request'` When `createSession` request is received 
		- `'session_update'` When `updateSession` is called or `approveSession` is called for a session update request
		- `'vc_peerPing'` When a heartbeat message is received
		- `'error'` When `vc_sessionRequest` or `connect` returns error
	- `callback: (error: Error | null, payload: any | null) => void` The callback function to call when the `event` is triggered
- **Returns**:
	- `void`
- **Example**
	```js
	vcInstance.on('connect', (err, payload) => {
		// vcInstance can start prompting transactions on the user's Vite Wallet app
	});
	vcInstance.on('disconnect', (err, payload) => {
		// User's Vite Wallet app is no longer connected
	})
	```
