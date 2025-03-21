---
order: 14
---

# Event Subscription

In Vite, events are notifications triggered by virtual machine to indicate state change and will be pushed to front-end program such as dApp for further processing.
A `vmlog` will be created in the smart contract's response block when event is triggered.

Taking the following contract as example, when function `transferWithEvent` is called, the contract transfers the token received to specified address and then triggers a `TransferEvent` event.

```solidity
pragma soliditypp ^0.8.0;
contract TransferContract {
   event TransferEvent(address indexed addr, uint256 value, vitetoken tokenid);
   
   function transferWithEvent(address payable addr) external payable {
      addr.transfer(msg.token ,msg.value);
      emit TransferEvent(addr, msg.value, msg.token);      
   }
}
```

The `TransferEvent` event contains the following content:
* The hash of contract response block in which the event was created. This information can be used to retrieve contract address, contract account block height, request transaction hash and so on.
* Event signature as the hash of `TransferEvent(address,uint256,tokenId)`.
* Indexed parameters, which are marked as `indexed` in event definition. Up to 3 indexed parameters can be defined in an event. Event signature and indexed parameters are stored in `topics` field of `vmlog`, where `topics[0]` is occupied by event signature.
* Non-indexed parameters having no `indexed` marked. Non-indexed parameters are stored in `data` field of `vmlog`.

Below is an example of event logged on the blockchain when sending 1 VITE to `vite_9990375e0eaf10426d1d1f9b528b6dee158fd3adb0e1b9de70`
```json
{
    "vmlog": {
        "topics": [
            "b94af1d4b8401b8201545e8211b72d72169050f6694be63e2f6ede119725d7fd",
            "00000000000000000000009990375e0eaf10426d1d1f9b528b6dee158fd3ad00"
        ],
        "data": "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADeC2s6dkAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAVklURSBUT0tFTg=="
    },
    "accountBlockHash": "67bc57f99a3b333b81d6007eecd1bb2409d92b3ad65a8452fd4aef31edfe9831",
    "accountBlockHeight": "6",
    "address": "vite_79ac3daebdfed6947c0aaeacd418eadf38a94dddefbd4acec1",
    "removed": false
}
```

## Event Subscription

If a certain event is subscribed to, the subscriber will be notified when this certain event occurs. 
For example, if you subscribe to `TransferEvent` of `TransferContract`, you will receive a notification when `transferWithEvent` method is called.

Event subscription can be used to listen to contract state changes or new transactions on blockchain.

> Note: It's only allowed to listen to events that have not occurred yet. Historical events cannot be monitored but can only be fetched through [Ledger API](../../api/ledger.md).

The following parameters need to be specified when subscribing to an event:
* Contract address. Required.
* Contract account height range. Optional. By this parameter, it's possible to subscribe to events happening within a certain height range.
* Event signature or indexed parameter. Optional. For example, you can subscribe to events that transfer to certain accounts.

For more information, see [Subscription API](../../api/subscribe.md) and [`newVmLog`](../../api/subscribe.md#newvmlog)
