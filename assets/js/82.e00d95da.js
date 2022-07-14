(window.webpackJsonp=window.webpackJsonp||[]).push([[82],{682:function(t,a,s){"use strict";s.r(a);var o=s(0),d=Object(o.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"common-patterns"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#common-patterns"}},[t._v("#")]),t._v(" Common Patterns")]),t._v(" "),s("p",[t._v("In this chapter, we will cover the common use cases for ViteJS with examples, but first, in order to interact with the Vite network, you will need to create a connection.")]),t._v(" "),s("tm-code-block",{staticClass:"codeblock",attrs:{language:"js",base64:"aW1wb3J0IHsgVml0ZUFQSSB9IGZyb20gJ0B2aXRlL3ZpdGVqcyc7CmltcG9ydCBXU19SUEMgZnJvbSAnQHZpdGUvdml0ZWpzLXdzJzsKY29uc3QgcHJvdmlkZXJXc1VSTHMgPSB7Cglsb2NhbG5ldDogJ3dzOi8vbG9jYWxob3N0OjIzNDU3JywKCXRlc3RuZXQ6ICd3c3M6Ly9idWlkbC52aXRlLm5ldC9ndml0ZS93cycsCgltYWlubmV0OiAnd3NzOi8vbm9kZS52aXRlLm5ldC9ndml0ZS93cycsCn07CmNvbnN0IHByb3ZpZGVyID0gbmV3IFdTX1JQQyhwcm92aWRlcldzVVJMcy5tYWlubmV0KTsKY29uc3Qgdml0ZUFwaSA9IG5ldyBWaXRlQVBJKHByb3ZpZGVyLCAoKSA9Jmd0OyB7Cgljb25zb2xlLmxvZygnY29ubmVjdGVkJyk7Cn0pOwo="}}),t._v(" "),s("h2",{attrs:{id:"how-to-build-a-transaction"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#how-to-build-a-transaction"}},[t._v("#")]),t._v(" How to build a transaction")]),t._v(" "),s("p",[t._v("The first step in building a transaction is to create a send block with the account you intend to send from. In this example, we are making a block to issue a new token and signing it with an existing account (with at least 1000 VITE already in it as token issuance fee).")]),t._v(" "),s("tm-code-block",{staticClass:"codeblock",attrs:{language:"js",base64:"aW1wb3J0IHsgd2FsbGV0LCBhY2NvdW50QmxvY2sgfSBmcm9tICdAdml0ZS92aXRlanMnOwpjb25zdCBteVdhbGxldCA9IHdhbGxldC5nZXRXYWxsZXQobW5lbm9taWNzKTsKLy8gb3IgaWYgeW91IG5lZWQgdG8gY3JlYXRlIGEgbmV3IHdhbGxldAovLyBjb25zdCBteVdhbGxldCA9IHdhbGxldC5jcmVhdGVXYWxsZXQoKTsKCmNvbnN0IGFjY291bnQgPSBteVdhbGxldC5kZXJpdmVBZGRyZXNzKDApOwoKY29uc3QgYmxvY2sgPSBhY2NvdW50QmxvY2suY3JlYXRlQWNjb3VudEJsb2NrKCdpc3N1ZVRva2VuJywgewoJYWRkcmVzczogYWNjb3VudC5hZGRyZXNzLAoJdG9rZW5OYW1lOiAmcXVvdDtUZXN0IFRva2VuJnF1b3Q7LAoJaXNSZUlzc3VhYmxlOiB0cnVlLAoJbWF4U3VwcGx5OiAxMDAwMDAwMDAsCgl0b3RhbFN1cHBseTogMTAwMDAwMDAwLAoJaXNPd25lckJ1cm5Pbmx5OiBmYWxzZSwKCWRlY2ltYWxzOiAyLAoJdG9rZW5TeW1ib2w6ICZxdW90O1RFU1QmcXVvdDssCn0pOwpibG9jay5zZXRQcm92aWRlcih2aXRlQXBpKTsgLy8gdGhpcyBhbGxvdyBWaXRlSlMgdG8gaW50ZXJhY3Qgd2l0aCB0aGUgbmV0d29yawpibG9jay5zZXRQcml2YXRlS2V5KGFjY291bnQucHJpdmF0ZUtleSk7CmF3YWl0IGJsb2NrLmF1dG9TZW5kKCk7Cg=="}}),t._v(" "),s("h2",{attrs:{id:"how-to-stake-for-quota"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#how-to-stake-for-quota"}},[t._v("#")]),t._v(" How to stake for quota")]),t._v(" "),s("p",[s("RouterLink",{attrs:{to:"/vite-basics/quota/quota.html"}},[t._v("Quota")]),t._v(" is used for \"paying\" transaction fees instead of spending additional funds; this is how Vite transactions are fee-less. Quota is consumed when sending account blocks. An account's quota recharges over time and you can get a higher quota limit by staking more Vite tokens. It's possible to send transactions without having any quota by using proof of work, but this is not recommended.")],1),t._v(" "),s("tm-code-block",{staticClass:"codeblock",attrs:{language:"js",base64:"Y29uc3QgYmxvY2sgPSBhY2NvdW50QmxvY2suY3JlYXRlQWNjb3VudEJsb2NrKCdzdGFrZUZvclF1b3RhJywgewoJYWRkcmVzczogYWNjb3VudC5hZGRyZXNzLAoJYmVuZWZpY2lhcnlBZGRyZXNzOiBhY2NvdW50LmFkZHJlc3MsIC8vIG9yIGFueSBvdGhlciBhZGRyZXNzIHRoYXQgeW91IHdhbnQgdG8gZ2l2ZSBxdW90YSB0bwoJLy8gMTM0IFZpdGUgaXMgdGhlIG1pbmltdW0gc3Rha2luZyBhbW91bnQgZm9yIHF1b3RhCglhbW91bnQ6ICcxMzQwMDAwMDAwMDAwMDAwMDAwMDAnLAp9KTsKYmxvY2suc2V0UHJvdmlkZXIodml0ZUFwaSk7IC8vIHRoaXMgYWxsb3dzIFZpdGVKUyB0byBpbnRlcmFjdCB3aXRoIHRoZSBuZXR3b3JrCmJsb2NrLnNldFByaXZhdGVLZXkoYWNjb3VudC5wcml2YXRlS2V5KTsKYXdhaXQgYmxvY2suYXV0b1NlbmQoKTsKCi8vIENoZWNrIHF1b3RhIG9mIHRoZSBhY2NvdW50CnZpdGVBcGkucmVxdWVzdCgnY29udHJhY3RfZ2V0UXVvdGFCeUFjY291bnQnLCBhZGRyZXNzKQoJLnRoZW4ocmVzdWx0ID0mZ3Q7IHsKCQljb25zb2xlLmxvZyhyZXN1bHQpOwoJfSkKCS5jYXRjaChlcnIgPSZndDsgewoJCWNvbnNvbGUud2FybihlcnIpOwoJfSk7Cg=="}}),t._v(" "),s("h2",{attrs:{id:"how-to-send-funds-to-an-address"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#how-to-send-funds-to-an-address"}},[t._v("#")]),t._v(" How to send funds to an address")]),t._v(" "),s("p",[t._v("Creating other kinds of transactions is fairly similar to the previous example. The main difference is the method name as the first argument and the parameters as the second argument. For the full list of methods and corresponding parameters, read the section on "),s("RouterLink",{attrs:{to:"/SDK/ViteJS/account-block/8. Account Blocks.html#transaction-types"}},[t._v("Transaction Types")]),t._v(".")],1),t._v(" "),s("tm-code-block",{staticClass:"codeblock",attrs:{language:"js",base64:"Y29uc3QgYmxvY2sgPSBhY2NvdW50QmxvY2suY3JlYXRlQWNjb3VudEJsb2NrKCdzZW5kJywgewoJYWRkcmVzczogYWNjb3VudC5hZGRyZXNzLAoJdG9BZGRyZXNzOiAndml0ZV81NTM0NjJiY2ExMzdiYWMyOWY0NDBlOWFmNGFiMmUyYzFiYjgyNDkzZTQxZDJiYzhiMicsCgl0b2tlbklkOiAndHRpXzU2NDk1NDQ1MjA1NDRmNGI0NTRlNmU0MCcsCglhbW91bnQ6ICcxMDAwMDAwMDAwMDAwMDAwMDAwJywgLy8gZXF1YWwgdG8gMSBWSVRFIHNpbmNlIHRoZSBWaXRlIGNvaW4gaGFzIDE4IGRlY2ltYWwgcG9pbnRzCn0pOwpibG9jay5zaWduKGFjY291bnQucHJpdmF0ZUtleSk7CmF3YWl0IGJsb2NrLmF1dG9TZW5kKCk7Cg=="}}),t._v(" "),s("h2",{attrs:{id:"how-to-receive-a-transaction"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#how-to-receive-a-transaction"}},[t._v("#")]),t._v(" How to receive a transaction")]),t._v(" "),s("p",[t._v("There are two main ways of receiving transactions. The first way is to sign and send each receive block individually.")]),t._v(" "),s("tm-code-block",{staticClass:"codeblock",attrs:{language:"js",base64:"Y29uc3QgYmxvY2sgPSBhY2NvdW50QmxvY2suY3JlYXRlQWNjb3VudEJsb2NrKCdyZWNlaXZlJywgewoJYWRkcmVzczogYWNjb3VudC5hZGRyZXNzLAoJc2VuZEJsb2NrSGFzaDogJzQ0ZTY5ZWEwNGZlODMwYzkwNzVjMDFlNDZmMTAyZDBjNTQzYjQxMTljZTEzZWM1NzVhZWUyZTk2NTAxMDQ5ZmMnLAp9KTsKYmxvY2suc2V0UHJvdmlkZXIodml0ZUFwaSk7CmJsb2NrLnNldFByaXZhdGVLZXkoYWNjb3VudC5wcml2YXRlS2V5KTsKYXdhaXQgYmxvY2suYXV0b1NldFByZXZpb3VzQWNjb3VudEJsb2NrKCk7CmJsb2NrLnNpZ24oYWNjb3VudC5wcml2YXRlS2V5KTsKYXdhaXQgYmxvY2suYXV0b1NlbmQoKTsK"}}),t._v(" "),s("p",[t._v("The second and much simpler way is to create and start a "),s("code",[t._v("ReceiveAccountBlockTask")]),t._v(".")]),t._v(" "),s("tm-code-block",{staticClass:"codeblock",attrs:{language:"js",base64:"Y29uc3QgcmVjZWl2ZVRhc2sgPSBuZXcgYWNjb3VudEJsb2NrLlJlY2VpdmVBY2NvdW50QmxvY2tUYXNrKHsKCWFkZHJlc3M6IGFjY291bnQuYWRkcmVzcywKCXByaXZhdGVLZXk6IGFjY291bnQucHJpdmF0ZUtleSwKCXByb3ZpZGVyOiB2aXRlQXBpLAp9KTsKcmVjZWl2ZVRhc2suc3RhcnQoKTsK"}}),t._v(" "),s("h2",{attrs:{id:"how-to-sign-a-transaction"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#how-to-sign-a-transaction"}},[t._v("#")]),t._v(" How to sign a transaction")]),t._v(" "),s("p",[t._v("As you may have noticed in previous examples, there are two main ways to sign a transaction (i.e. block). The first way is to set the private key of the block and call certain methods that sign the block for you. The second way is to call the "),s("code",[t._v("sign")]),t._v(" method which will sign the transaction, but won't send the block to the network.")]),t._v(" "),s("tm-code-block",{staticClass:"codeblock",attrs:{language:"js",base64:"YmxvY2suc2V0UHJpdmF0ZUtleShwcml2YXRlS2V5KTsKLy8gVGhpcyBzZXRzIHRoZSBibG9jaydzIHByZXZpb3VzIGJsb2NrIGhhc2ggYW5kIG90aGVyIHBhcmFtZXRlcnMgbmVlZGVkIHRvIG1ha2UgYSB2YWxpZCBibG9jawphd2FpdCBibG9jay5hdXRvU2V0UHJldmlvdXNBY2NvdW50QmxvY2soKTsKCmJsb2NrLnNpZ24ocHJpdmF0ZUtleSk7CmF3YWl0IGJsb2NrLmF1dG9TZW5kKCk7Cg=="}}),t._v(" "),s("h2",{attrs:{id:"how-to-deploy-a-contract"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#how-to-deploy-a-contract"}},[t._v("#")]),t._v(" How to deploy a contract")]),t._v(" "),s("p",[t._v("Deploying a contract is just like making any other transaction. For the parameters, the easiest way to get them is through the "),s("a",{attrs:{href:"https://marketplace.visualstudio.com/items?itemName=ViteLabs.solppdebugger",target:"_blank",rel:"noopener noreferrer"}},[t._v("Solidity++ 0.8 Preview"),s("OutboundLink")],1),t._v(" VS Code extension.")]),t._v(" "),s("tm-code-block",{staticClass:"codeblock",attrs:{language:"js",base64:"Y29uc3QgYmxvY2sgPSBhY2NvdW50QmxvY2suY3JlYXRlQWNjb3VudEJsb2NrKCdjcmVhdGVDb250cmFjdCcsewoJYWJpOlt7JnF1b3Q7Y29uc3RhbnQmcXVvdDs6ZmFsc2UsJnF1b3Q7aW5wdXRzJnF1b3Q7Olt7JnF1b3Q7bmFtZSZxdW90OzomcXVvdDthZGRyJnF1b3Q7LCZxdW90O3R5cGUmcXVvdDs6JnF1b3Q7YWRkcmVzcyZxdW90O31dLCZxdW90O25hbWUmcXVvdDs6JnF1b3Q7U2F5SGVsbG8mcXVvdDssJnF1b3Q7b3V0cHV0cyZxdW90OzpbXSwmcXVvdDtwYXlhYmxlJnF1b3Q7OnRydWUsJnF1b3Q7c3RhdGVNdXRhYmlsaXR5JnF1b3Q7OiZxdW90O3BheWFibGUmcXVvdDssJnF1b3Q7dHlwZSZxdW90OzomcXVvdDtmdW5jdGlvbiZxdW90O30seyZxdW90O2Fub255bW91cyZxdW90OzpmYWxzZSwmcXVvdDtpbnB1dHMmcXVvdDs6W3smcXVvdDtpbmRleGVkJnF1b3Q7OnRydWUsJnF1b3Q7bmFtZSZxdW90OzomcXVvdDthZGRyJnF1b3Q7LCZxdW90O3R5cGUmcXVvdDs6JnF1b3Q7YWRkcmVzcyZxdW90O30seyZxdW90O2luZGV4ZWQmcXVvdDs6ZmFsc2UsJnF1b3Q7bmFtZSZxdW90OzomcXVvdDthbW91bnQmcXVvdDssJnF1b3Q7dHlwZSZxdW90OzomcXVvdDt1aW50MjU2JnF1b3Q7fV0sJnF1b3Q7bmFtZSZxdW90OzomcXVvdDt0cmFuc2ZlciZxdW90OywmcXVvdDt0eXBlJnF1b3Q7OiZxdW90O2V2ZW50JnF1b3Q7fV0sCgljb2RlOiAnNjA4MDYwNDA1MjM0ODAxNTYxMDAxMDU3NjAwMDgwZmQ1YjUwNjEwMTQxODA2MTAwMjA2MDAwMzk2MDAwZjNmZTYwODA2MDQwNTI2MDA0MzYxMDYxMDA0MTU3NjAwMDM1N2MwMTAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwOTAwNDYzZmZmZmZmZmYxNjgwNjM5MWE2Y2I0YjE0NjEwMDQ2NTc1YjYwMDA4MGZkNWI2MTAwODk2MDA0ODAzNjAzNjAyMDgxMTAxNTYxMDA1YzU3NjAwMDgwZmQ1YjgxMDE5MDgwODAzNTc0ZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmMTY5MDYwMjAwMTkwOTI5MTkwNTA1MDUwNjEwMDhiNTY1YjAwNWI4MDc0ZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmMTY0NjY5ZmZmZmZmZmZmZmZmZmZmZmZmZmYxNjM0NjA0MDUxNjA0MDUxODA4MjAzOTA4Mzg1ODdmMTUwNTA1MDUwODA3NGZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZjE2N2ZhYTY1MjgxZjVkZjRiNGJkM2M3MWYyYmEyNTkwNWI5MDcyMDVmY2UwODA5YTgxNmVmOGUwNGI0ZDQ5NmE4NWJiMzQ2MDQwNTE4MDgyODE1MjYwMjAwMTkxNTA1MDYwNDA1MTgwOTEwMzkwYTI1MDU2ZmVhMTY1NjI3YTdhNzIzMDU4MjAyM2U5NjY5ZGQ2ZmVjM2I2YjJhODRhMWZkN2M5OTM5ZjQ5MTk3MjAzZDBlMWRiMzEyMjc4ZTYzM2MyMTljMjQ4MDAyOScsCglyZXNwb25zZUxhdGVuY3k6IDIsCglwYXJhbXM6IFsndml0ZV8xM2YxZjhlMjMwZjJmZmExZTAzMGU2NjRlNTI1MDMzZmY5OTVkNmMyYmIxNWFmNGNmOSddIC8vIHBhc3NlZCB0byB0aGUgY29udHJhY3QncyBjb25zdHJ1Y3Rvcgp9KTsKYmxvY2suc2lnbihhY2NvdW50LnByaXZhdGVLZXkpOwphd2FpdCBibG9jay5hdXRvU2VuZCgpOwo="}}),t._v(" "),s("h2",{attrs:{id:"how-to-call-a-contract"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#how-to-call-a-contract"}},[t._v("#")]),t._v(" How to call a contract")]),t._v(" "),s("p",[t._v("Calling a contract's methods is just like sending funds, but with the addition of the contract's abi, method name, and arguments to pass.")]),t._v(" "),s("tm-code-block",{staticClass:"codeblock",attrs:{language:"js",base64:"bGV0IGJsb2NrID0gYXdhaXQgYWNjb3VudEJsb2NrLmNyZWF0ZUFjY291bnRCbG9jaygnY2FsbENvbnRyYWN0JywgewoJYWRkcmVzczogYWNjb3VudC5hZGRyZXNzLAoJYWJpOiBjb250cmFjdC5hYmksCgl0b0FkZHJlc3M6IGNvbnRyYWN0LmFkZHJlc3MsCglwYXJhbXM6IFsnbWV0aG9kJywgJ3BhcmFtcyddLAoJbWV0aG9kTmFtZTogJ21ldGhvZE5hbWUnLAoJYW1vdW50OiAnMTAwMDAwMDAwMDAwMDAwMDAwMCcsCgl0b2tlbklkOiAndHRpXzU2NDk1NDQ1MjA1NDRmNGI0NTRlNmU0MCcsCn0pOwpibG9jay5zaWduKGFjY291bnQucHJpdmF0ZUtleSk7CmF3YWl0IGJsb2NrLmF1dG9TZW5kKCk7Cg=="}}),t._v(" "),s("h2",{attrs:{id:"how-to-read-contract-event-logs"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#how-to-read-contract-event-logs"}},[t._v("#")]),t._v(" How to read contract event logs")]),t._v(" "),s("p",[t._v("Getting a contract's event log first involves fetching them from a Vite node's "),s("a",{attrs:{href:"https://docs.vite.org/vite-docs/api/rpc/ledger_v2.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("RPC API"),s("OutboundLink")],1),t._v(". Then decoding them into a human-readable format.")]),t._v(" "),s("blockquote",[s("p",[t._v("Note: The following example has been adapted from the "),s("a",{attrs:{href:"https://github.com/vitelabs/vuilder/blob/master/src/contract.ts#L227",target:"_blank",rel:"noopener noreferrer"}},[t._v("Vuilder Kit"),s("OutboundLink")],1),t._v(".")])]),t._v(" "),s("tm-code-block",{staticClass:"codeblock",attrs:{language:"js",base64:"aW1wb3J0IHsgYWJpIH0gZnJvbSAnQHZpdGUvdml0ZWpzJzsKLy8gLi4uCmNvbnN0IGdldFBhc3RFdmVudHMgPSBhc3luYyAoCglldmVudE5hbWU6IHN0cmluZyA9ICdhbGxFdmVudHMnLAoJewoJCWZyb21IZWlnaHQgPSAwLAoJCXRvSGVpZ2h0ID0gMCwKCX06IHsKCQlmaWx0ZXI/OiBPYmplY3Q7CgkJZnJvbUhlaWdodD86IE51bWJlcjsKCQl0b0hlaWdodD86IE51bWJlcjsKCX0KKSA9Jmd0OyB7CglsZXQgcmVzdWx0OiBhbnlbXSA9IFtdOwoJbGV0IGxvZ3MgPSBhd2FpdCB2aXRlQXBpLnJlcXVlc3QoJ2xlZGdlcl9nZXRWbUxvZ3NCeUZpbHRlcicsIHsKCQlhZGRyZXNzSGVpZ2h0UmFuZ2U6IHsKCQkJW2NvbnRyYWN0LmFkZHJlc3MhXTogewoJCQkJZnJvbUhlaWdodDogZnJvbUhlaWdodC50b1N0cmluZygpLAoJCQkJdG9IZWlnaHQ6IHRvSGVpZ2h0LnRvU3RyaW5nKCksCgkJCX0sCgkJfSwKCX0pOwoJY29uc3QgZmlsdGVyZWRBYmkgPQoJCWV2ZW50TmFtZSA9PT0gJ2FsbEV2ZW50cycKCQkJPyBjb250cmFjdC5hYmkKCQkJOiBjb250cmFjdC5hYmkuZmlsdGVyKChhOiBhbnkpID0mZ3Q7IHsKCQkJCQlyZXR1cm4gYS5uYW1lID09PSBldmVudE5hbWU7CgkJCSAgfSk7CglpZiAobG9ncykgewoJCWZvciAobGV0IGxvZyBvZiBsb2dzKSB7CgkJCWxldCB2bUxvZyA9IGxvZy52bWxvZzsKCQkJbGV0IHRvcGljcyA9IHZtTG9nLnRvcGljczsKCQkJZm9yIChsZXQgYWJpSXRlbSBvZiBmaWx0ZXJlZEFiaSkgewoJCQkJbGV0IHNpZ25hdHVyZSA9IGFiaS5lbmNvZGVMb2dTaWduYXR1cmUoYWJpSXRlbSk7CgkJCQlpZiAoYWJpSXRlbS50eXBlID09PSAnZXZlbnQnICZhbXA7JmFtcDsgc2lnbmF0dXJlID09PSB0b3BpY3NbMF0pIHsKCQkJCQlsZXQgZGF0YUhleDsKCQkJCQlpZiAodm1Mb2cuZGF0YSkgewoJCQkJCQlkYXRhSGV4ID0gQnVmZmVyLmZyb20odm1Mb2cuZGF0YSwgJ2Jhc2U2NCcpLnRvU3RyaW5nKCdoZXgnKTsKCQkJCQl9CgkJCQkJbGV0IHJldHVyblZhbHVlcyA9IGFiaS5kZWNvZGVMb2coYWJpSXRlbSwgZGF0YUhleCwgdG9waWNzKTsKCQkJCQlsZXQgaXRlbSA9IHsKCQkJCQkJcmV0dXJuVmFsdWVzOiByZXR1cm5WYWx1ZXMsCgkJCQkJCWV2ZW50OiBhYmlJdGVtLm5hbWUsCgkJCQkJCXJhdzogewoJCQkJCQkJZGF0YTogZGF0YUhleCwKCQkJCQkJCXRvcGljczogdG9waWNzLAoJCQkJCQl9LAoJCQkJCQlzaWduYXR1cmU6IHNpZ25hdHVyZSwKCQkJCQkJYWNjb3VudEJsb2NrSGVpZ2h0OiBsb2cuYWNjb3VudEJsb2NrSGVpZ2h0LAoJCQkJCQlhY2NvdW50QmxvY2tIYXNoOiBsb2cuYWNjb3VudEJsb2NrSGFzaCwKCQkJCQkJYWRkcmVzczogbG9nLmFkZHJlc3MsCgkJCQkJfTsKCQkJCQlyZXN1bHQucHVzaChpdGVtKTsKCQkJCQlicmVhazsKCQkJCX0KCQkJfQoJCX0KCX0KCXJldHVybiByZXN1bHQ7Cn07Cg=="}}),t._v(" "),s("h2",{attrs:{id:"how-to-read-contract-state"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#how-to-read-contract-state"}},[t._v("#")]),t._v(" How to read contract state")]),t._v(" "),s("p",[t._v('Prior to Solidity++ 0.8, contracts had "off-chain" functions. These were used for querying the contracts written in Solidity++ 0.4. Starting in Solidity++ 0.8, off-chain methods were deprecated. Because of this, the RPC method for querying contracts written in 0.4 vs 0.8 are different - '),s("code",[t._v("contract_callOffChainMethod")]),t._v(" and "),s("code",[t._v("contract_query")]),t._v(" respectively.")]),t._v(" "),s("blockquote",[s("p",[t._v("Note: The following example has been adapted from the "),s("a",{attrs:{href:"https://github.com/vitelabs/vuilder/blob/master/src/contract.ts#L169",target:"_blank",rel:"noopener noreferrer"}},[t._v("Vuilder Kit"),s("OutboundLink")],1),t._v(".")])]),t._v(" "),s("tm-code-block",{staticClass:"codeblock",attrs:{language:"js",base64:"aW1wb3J0IHsgYWJpLCB1dGlscyB9IGZyb20gJ0B2aXRlL3ZpdGVqcyc7Ci8vIC4uLgpjb25zdCBxdWVyeUNvbnRyYWN0ID0gYXN5bmMgKG1ldGhvZE5hbWU6IHN0cmluZywgcGFyYW1zOiBhbnlbXSkgPSZndDsgewoJY29uc3QgbWV0aG9kQWJpID0gY29udHJhY3QuYWJpLmZpbmQoKHg6IHsgbmFtZTogc3RyaW5nIH0pID0mZ3Q7IHsKCQlyZXR1cm4geC5uYW1lID09PSBtZXRob2ROYW1lOwoJfSk7CglpZiAoIW1ldGhvZEFiaSkgewoJCXRocm93IG5ldyBFcnJvcignbWV0aG9kIG5vdCBmb3VuZDonICsgbWV0aG9kTmFtZSk7Cgl9CglsZXQgZGF0YSA9IGFiaS5lbmNvZGVGdW5jdGlvbkNhbGwobWV0aG9kQWJpLCBwYXJhbXMpOwoJbGV0IGRhdGFCYXNlNjQgPSB1dGlscy5fQnVmZmVyLmZyb20oZGF0YSwgJ2hleCcpLnRvU3RyaW5nKCdiYXNlNjQnKTsKCWxldCBjb2RlQmFzZTY0OwoJaWYgKGNvbnRyYWN0Lm9mZmNoYWluQ29kZSAmYW1wOyZhbXA7IGNvbnRyYWN0Lm9mZmNoYWluQ29kZS5sZW5ndGggJmd0OyAwKQoJCWNvZGVCYXNlNjQgPSB1dGlscy5fQnVmZmVyLmZyb20oY29udHJhY3Qub2ZmY2hhaW5Db2RlLCAnaGV4JykudG9TdHJpbmcoJ2Jhc2U2NCcpOwoJd2hpbGUgKHRydWUpIHsKCQlsZXQgcmVzdWx0ID0gY29kZUJhc2U2NAoJCQk/IGF3YWl0IHZpdGVBcGkucmVxdWVzdCgnY29udHJhY3RfY2FsbE9mZkNoYWluTWV0aG9kJywgewoJCQkJCWFkZHJlc3M6IGNvbnRyYWN0LmFkZHJlc3MsCgkJCQkJY29kZTogY29kZUJhc2U2NCwKCQkJCQlkYXRhOiBkYXRhQmFzZTY0LAoJCQkgIH0pCgkJCTogYXdhaXQgdml0ZUFwaS5yZXF1ZXN0KCdjb250cmFjdF9xdWVyeScsIHsKCQkJCQlhZGRyZXNzOiBjb250cmFjdC5hZGRyZXNzLAoJCQkJCWRhdGE6IGRhdGFCYXNlNjQsCgkJCSAgfSk7CgkJLy8gcGFyc2UgcmVzdWx0CgkJaWYgKHJlc3VsdCkgewoJCQlsZXQgcmVzdWx0Qnl0ZXMgPSB1dGlscy5fQnVmZmVyLmZyb20ocmVzdWx0LCAnYmFzZTY0JykudG9TdHJpbmcoJ2hleCcpOwoJCQlsZXQgb3V0cHV0cyA9IFtdOwoJCQlmb3IgKGxldCBpID0gMDsgaSAmbHQ7IG1ldGhvZEFiaS5vdXRwdXRzLmxlbmd0aDsgaSsrKSB7CgkJCQlvdXRwdXRzLnB1c2gobWV0aG9kQWJpLm91dHB1dHNbaV0udHlwZSk7CgkJCX0KCQkJcmV0dXJuIGFiaS5kZWNvZGVQYXJhbWV0ZXJzKG91dHB1dHMsIHJlc3VsdEJ5dGVzKTsKCQl9CgkJY29uc29sZS5sb2coJ1F1ZXJ5IGZhaWxlZCwgdHJ5IGFnYWluLicpOwoJCWF3YWl0IHV0aWxzLnNsZWVwKDUwMCk7Cgl9Cn07Cg=="}}),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("Tips")]),t._v(" "),s("p",[t._v("You can also use "),s("code",[t._v("callOffChainContract")]),t._v(" and "),s("code",[t._v("queryContractState")]),t._v(" in "),s("RouterLink",{attrs:{to:"/SDK/vitejs/6. Vite API.html"}},[t._v("ViteAPI")]),t._v(" class.")],1)])],1)}),[],!1,null,null,null);a.default=d.exports}}]);