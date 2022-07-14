(window.webpackJsonp=window.webpackJsonp||[]).push([[79],{679:function(t,e,c){"use strict";c.r(e);var s=c(0),o=Object(s.a)({},(function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[c("h1",{attrs:{id:"accountblock-instance"}},[c("a",{staticClass:"header-anchor",attrs:{href:"#accountblock-instance"}},[t._v("#")]),t._v(" "),c("code",[t._v("AccountBlock")]),t._v(" Instance")]),t._v(" "),c("p",[t._v("Instance of "),c("code",[t._v("AccountBlock")]),t._v(" represents an account block on the Vite blockchain.")]),t._v(" "),c("div",{staticClass:"custom-block tip"},[c("p",{staticClass:"custom-block-title"},[t._v("Account Block and Transaction")]),t._v(" "),c("p",[t._v("On Vite, usually one account block contains only one transaction. So in many cases when we say account block, it also refers to a transaction, and vise versa. However, this rule doesn't apply to RS blocks, which are special account blocks produced by smart contracts containing more than one transaction. See "),c("RouterLink",{attrs:{to:"/soliditypp/fundamentals/request-response-model.html#rs-receive-send-blocks"}},[t._v("RS Blocks")]),t._v(" for details.")],1)]),t._v(" "),c("h2",{attrs:{id:"block-types"}},[c("a",{staticClass:"header-anchor",attrs:{href:"#block-types"}},[t._v("#")]),t._v(" Block Types")]),t._v(" "),c("p",[t._v("There are a total of seven block types on Vite.")]),t._v(" "),c("table",[c("thead",[c("tr",[c("th",{staticStyle:{"text-align":"left"}},[t._v("Block Type")]),t._v(" "),c("th",{staticStyle:{"text-align":"center"}},[t._v("ID")]),t._v(" "),c("th",{staticStyle:{"text-align":"right"}},[t._v("Description")]),t._v(" "),c("th",{staticStyle:{"text-align":"center"}},[t._v("Type")])])]),t._v(" "),c("tbody",[c("tr",[c("td",{staticStyle:{"text-align":"left"}},[c("code",[t._v("CreateContractRequest")])]),t._v(" "),c("td",{staticStyle:{"text-align":"center"}},[t._v("1")]),t._v(" "),c("td",{staticStyle:{"text-align":"right"}},[t._v("Create Contract")]),t._v(" "),c("td",{staticStyle:{"text-align":"center"}},[t._v("Request")])]),t._v(" "),c("tr",[c("td",{staticStyle:{"text-align":"left"}},[c("code",[t._v("TransferRequest")])]),t._v(" "),c("td",{staticStyle:{"text-align":"center"}},[t._v("2")]),t._v(" "),c("td",{staticStyle:{"text-align":"right"}},[t._v("Send Transaction / Call Contract")]),t._v(" "),c("td",{staticStyle:{"text-align":"center"}},[t._v("Request")])]),t._v(" "),c("tr",[c("td",{staticStyle:{"text-align":"left"}},[c("code",[t._v("ReIssueRequest")])]),t._v(" "),c("td",{staticStyle:{"text-align":"center"}},[t._v("3")]),t._v(" "),c("td",{staticStyle:{"text-align":"right"}},[t._v("Mint Token")]),t._v(" "),c("td",{staticStyle:{"text-align":"center"}},[t._v("Request")])]),t._v(" "),c("tr",[c("td",{staticStyle:{"text-align":"left"}},[c("code",[t._v("Response")])]),t._v(" "),c("td",{staticStyle:{"text-align":"center"}},[t._v("4")]),t._v(" "),c("td",{staticStyle:{"text-align":"right"}},[t._v("Receive Transaction / Execute Contract")]),t._v(" "),c("td",{staticStyle:{"text-align":"center"}},[t._v("Response")])]),t._v(" "),c("tr",[c("td",{staticStyle:{"text-align":"left"}},[c("code",[t._v("ResponseFail")])]),t._v(" "),c("td",{staticStyle:{"text-align":"center"}},[t._v("5")]),t._v(" "),c("td",{staticStyle:{"text-align":"right"}},[t._v("Execute Contract Failed")]),t._v(" "),c("td",{staticStyle:{"text-align":"center"}},[t._v("Response")])]),t._v(" "),c("tr",[c("td",{staticStyle:{"text-align":"left"}},[c("code",[t._v("RefundByContractRequest")])]),t._v(" "),c("td",{staticStyle:{"text-align":"center"}},[t._v("6")]),t._v(" "),c("td",{staticStyle:{"text-align":"right"}},[t._v("Refund")]),t._v(" "),c("td",{staticStyle:{"text-align":"center"}},[t._v("Request")])]),t._v(" "),c("tr",[c("td",{staticStyle:{"text-align":"left"}},[c("code",[t._v("GenesisResponse")])]),t._v(" "),c("td",{staticStyle:{"text-align":"center"}},[t._v("7")]),t._v(" "),c("td",{staticStyle:{"text-align":"right"}},[t._v("Genesis")]),t._v(" "),c("td",{staticStyle:{"text-align":"center"}},[t._v("Response")])])])]),t._v(" "),c("h2",{attrs:{id:"properties"}},[c("a",{staticClass:"header-anchor",attrs:{href:"#properties"}},[t._v("#")]),t._v(" Properties")]),t._v(" "),c("table",[c("thead",[c("tr",[c("th",[t._v("Name")]),t._v(" "),c("th",{staticStyle:{"text-align":"center"}},[t._v("Type")]),t._v(" "),c("th",{staticStyle:{"text-align":"right"}},[t._v("Description")])])]),t._v(" "),c("tbody",[c("tr",[c("td",[t._v("blockType")]),t._v(" "),c("td",{staticStyle:{"text-align":"center"}},[c("code",[t._v("BlockType")])]),t._v(" "),c("td",{staticStyle:{"text-align":"right"}},[t._v("See "),c("a",{attrs:{href:"#block-types"}},[t._v("Block Types")]),t._v(" for possible account block types on Vite")])]),t._v(" "),c("tr",[c("td",[t._v("address")]),t._v(" "),c("td",{staticStyle:{"text-align":"center"}},[c("code",[t._v("Address")])]),t._v(" "),c("td",{staticStyle:{"text-align":"right"}},[t._v("Address of this account. For request transaction, this is "),c("code",[t._v("fromAddress")]),t._v("; for response transaction, this is "),c("code",[t._v("toAddress")])])]),t._v(" "),c("tr",[c("td",[t._v("fee")]),t._v(" "),c("td",{staticStyle:{"text-align":"center"}},[c("code",[t._v("BigInt")])]),t._v(" "),c("td",{staticStyle:{"text-align":"right"}},[t._v("Transaction fee")])]),t._v(" "),c("tr",[c("td",[t._v("data")]),t._v(" "),c("td",{staticStyle:{"text-align":"center"}},[c("code",[t._v("Base64")])]),t._v(" "),c("td",{staticStyle:{"text-align":"right"}},[t._v("Optional data field in Base64 format")])]),t._v(" "),c("tr",[c("td",[t._v("sendBlockHash")]),t._v(" "),c("td",{staticStyle:{"text-align":"center"}},[c("code",[t._v("Hex")])]),t._v(" "),c("td",{staticStyle:{"text-align":"right"}},[t._v("Hash of the request transaction. For response transaction only")])]),t._v(" "),c("tr",[c("td",[t._v("toAddress")]),t._v(" "),c("td",{staticStyle:{"text-align":"center"}},[c("code",[t._v("Address")])]),t._v(" "),c("td",{staticStyle:{"text-align":"right"}},[t._v("Transaction receiving address")])]),t._v(" "),c("tr",[c("td",[t._v("tokenId")]),t._v(" "),c("td",{staticStyle:{"text-align":"center"}},[c("code",[t._v("TokenId")])]),t._v(" "),c("td",{staticStyle:{"text-align":"right"}},[t._v("Token id")])]),t._v(" "),c("tr",[c("td",[t._v("amount")]),t._v(" "),c("td",{staticStyle:{"text-align":"center"}},[c("code",[t._v("BigInt")])]),t._v(" "),c("td",{staticStyle:{"text-align":"right"}},[t._v("The amount of tokens to send (in base unit, e.g. "),c("code",[t._v("1000000000000000000")]),t._v(" stands for 1 VITE)")])]),t._v(" "),c("tr",[c("td",[t._v("height")]),t._v(" "),c("td",{staticStyle:{"text-align":"center"}},[c("code",[t._v("Uint64")])]),t._v(" "),c("td",{staticStyle:{"text-align":"right"}},[t._v("Height of this account block")])]),t._v(" "),c("tr",[c("td",[t._v("previousHash")]),t._v(" "),c("td",{staticStyle:{"text-align":"center"}},[c("code",[t._v("Hex")])]),t._v(" "),c("td",{staticStyle:{"text-align":"right"}},[t._v("Hash of the previous account block")])]),t._v(" "),c("tr",[c("td",[t._v("difficulty")]),t._v(" "),c("td",{staticStyle:{"text-align":"center"}},[c("code",[t._v("BigInt")])]),t._v(" "),c("td",{staticStyle:{"text-align":"right"}},[t._v("PoW difficulty")])]),t._v(" "),c("tr",[c("td",[t._v("nonce")]),t._v(" "),c("td",{staticStyle:{"text-align":"center"}},[c("code",[t._v("Base64")])]),t._v(" "),c("td",{staticStyle:{"text-align":"right"}},[t._v("PoW nonce")])]),t._v(" "),c("tr",[c("td",[t._v("hash")]),t._v(" "),c("td",{staticStyle:{"text-align":"center"}},[c("code",[t._v("Hex")])]),t._v(" "),c("td",{staticStyle:{"text-align":"right"}},[t._v("Hash of this account block")])]),t._v(" "),c("tr",[c("td",[t._v("signature")]),t._v(" "),c("td",{staticStyle:{"text-align":"center"}},[c("code",[t._v("Base64")])]),t._v(" "),c("td",{staticStyle:{"text-align":"right"}},[t._v("Signature")])]),t._v(" "),c("tr",[c("td",[t._v("publicKey")]),t._v(" "),c("td",{staticStyle:{"text-align":"center"}},[c("code",[t._v("Base64")])]),t._v(" "),c("td",{staticStyle:{"text-align":"right"}},[t._v("Public key of this account")])]),t._v(" "),c("tr",[c("td",[t._v("originalAddress")]),t._v(" "),c("td",{staticStyle:{"text-align":"center"}},[c("code",[t._v("originalAddress")])]),t._v(" "),c("td",{staticStyle:{"text-align":"right"}},[t._v("Original address")])]),t._v(" "),c("tr",[c("td",[t._v("isRequestBlock")]),t._v(" "),c("td",{staticStyle:{"text-align":"center"}},[c("code",[t._v("boolean")])]),t._v(" "),c("td",{staticStyle:{"text-align":"right"}},[t._v("If "),c("code",[t._v("true")]),t._v(", the block is a request transaction")])]),t._v(" "),c("tr",[c("td",[t._v("isResponseBlock")]),t._v(" "),c("td",{staticStyle:{"text-align":"center"}},[c("code",[t._v("boolean")])]),t._v(" "),c("td",{staticStyle:{"text-align":"right"}},[t._v("If "),c("code",[t._v("true")]),t._v(", the block is a response transaction")])])])]),t._v(" "),c("ul",[c("li",[c("strong",[t._v("Constructor")]),t._v(" "),c("ul",[c("li",[c("code",[t._v("object")]),t._v(" Fields are described above in "),c("a",{attrs:{href:"#properties"}},[t._v("Properties")]),t._v(" "),c("ul",[c("li",[c("code",[t._v("blockType: BlockType")])]),t._v(" "),c("li",[c("code",[t._v("address: Address")])]),t._v(" "),c("li",[c("code",[t._v("fee?: BigInt")])]),t._v(" "),c("li",[c("code",[t._v("data?: Base64")])]),t._v(" "),c("li",[c("code",[t._v("sendBlockHash?: Hex")])]),t._v(" "),c("li",[c("code",[t._v("amount?: BigInt")])]),t._v(" "),c("li",[c("code",[t._v("toAddress?: Address")])]),t._v(" "),c("li",[c("code",[t._v("tokenId?: TokenId")])])])]),t._v(" "),c("li",[c("code",[t._v("provider?: ProviderType")]),t._v(" "),c("code",[t._v("ViteAPI")]),t._v(" instance")]),t._v(" "),c("li",[c("code",[t._v("privateKey?: Hex")]),t._v(" Private key used for signing the block")])])]),t._v(" "),c("li",[c("strong",[t._v("Example")]),t._v(" "),c("tm-code-block",{staticClass:"codeblock",attrs:{language:"js",base64:"aW1wb3J0IHsgd2FsbGV0LCBhY2NvdW50QmxvY2sgfSBmcm9tICdAdml0ZS92aXRlanMnOwpjb25zdCB7IEFjY291bnRCbG9jayB9ID0gYWNjb3VudEJsb2NrOwoKY29uc3QgbXlXYWxsZXQgPSB3YWxsZXQuY3JlYXRlV2FsbGV0KCk7CmNvbnN0IHsgYWRkcmVzcyB9ID0gbXlXYWxsZXQuZGVyaXZlQWRkcmVzcygwKTsKCi8vIGJsb2NrIGZvciBzZW5kaW5nIDEgVklURQpjb25zdCBibG9jayA9IG5ldyBBY2NvdW50QmxvY2soewoJYmxvY2tUeXBlOiAyLAoJYWRkcmVzcywKCXRvQWRkcmVzczogJ3ZpdGVfNWU4ZDRhYzdkYzhiNzUzOTRjYWNkMjFjNTY2N2Q3OWZlMTgyNGFjYjQ2YzZiN2FiMWYnLAoJdG9rZW5JZDogJ3R0aV81NjQ5NTQ0NTIwNTQ0ZjRiNDU0ZTZlNDAnLAoJYW1vdW50OiAnMScgKyAnMCcucmVwZWF0KDE4KSwKfSk7Cg=="}})],1)]),t._v(" "),c("h2",{attrs:{id:"methods"}},[c("a",{staticClass:"header-anchor",attrs:{href:"#methods"}},[t._v("#")]),t._v(" Methods")]),t._v(" "),c("h3",{attrs:{id:"setprovider"}},[c("a",{staticClass:"header-anchor",attrs:{href:"#setprovider"}},[t._v("#")]),t._v(" "),c("code",[t._v("setProvider")])]),t._v(" "),c("p",[t._v("Set the "),c("code",[t._v("ViteAPI")]),t._v(" instance of an "),c("code",[t._v("AccountBlock")]),t._v(" instance for making requests to go-vite RPC API")]),t._v(" "),c("ul",[c("li",[c("strong",[t._v("Parameters")]),t._v(":\n"),c("ul",[c("li",[c("code",[t._v("ViteAPI")]),t._v(" "),c("code",[t._v("ViteAPI")]),t._v(" instance")])])]),t._v(" "),c("li",[c("strong",[t._v("Returns")]),t._v(":\n"),c("ul",[c("li",[t._v("this "),c("code",[t._v("AccountBlock")]),t._v(" instance")])])]),t._v(" "),c("li",[c("strong",[t._v("Example")]),t._v(" "),c("tm-code-block",{staticClass:"codeblock",attrs:{language:"js",base64:"aW1wb3J0IHsgd2FsbGV0LCBWaXRlQVBJLCBhY2NvdW50QmxvY2sgfSBmcm9tICdAdml0ZS92aXRlanMnOwpjb25zdCB7IEFjY291bnRCbG9jayB9ID0gYWNjb3VudEJsb2NrOwppbXBvcnQgV1NfUlBDIGZyb20gJ0B2aXRlL3ZpdGVqcy13cyc7Cgpjb25zdCBwcm92aWRlcldzVVJMcyA9IHsKCWxvY2FsbmV0OiAnd3M6Ly9sb2NhbGhvc3Q6MjM0NTcnLAoJdGVzdG5ldDogJ3dzczovL2J1aWRsLnZpdGUubmV0L2d2aXRlL3dzJywKCW1haW5uZXQ6ICd3c3M6Ly9ub2RlLnZpdGUubmV0L2d2aXRlL3dzJywKfTsKY29uc3QgcHJvdmlkZXIgPSBuZXcgV1NfUlBDKHByb3ZpZGVyV3NVUkxzLnRlc3RuZXQpOwpjb25zdCB2aXRlQXBpID0gbmV3IFZpdGVBUEkocHJvdmlkZXIsICgpID0mZ3Q7IHt9KTsKCmNvbnN0IG15V2FsbGV0ID0gd2FsbGV0LmNyZWF0ZVdhbGxldCgpOwpjb25zdCB7IGFkZHJlc3MgfSA9IG15V2FsbGV0LmRlcml2ZUFkZHJlc3MoMCk7Cgpjb25zdCBibG9jayA9IG5ldyBBY2NvdW50QmxvY2soewoJYmxvY2tUeXBlOiAyLAoJYWRkcmVzcywKCXRvQWRkcmVzczogJ3ZpdGVfNWU4ZDRhYzdkYzhiNzUzOTRjYWNkMjFjNTY2N2Q3OWZlMTgyNGFjYjQ2YzZiN2FiMWYnLAoJdG9rZW5JZDogJ3R0aV81NjQ5NTQ0NTIwNTQ0ZjRiNDU0ZTZlNDAnLAoJYW1vdW50OiAnMScgKyAnMCcucmVwZWF0KDE4KSwKfSkuc2V0UHJvdmlkZXIodml0ZUFwaSk7Cg=="}})],1)]),t._v(" "),c("h3",{attrs:{id:"setprivatekey"}},[c("a",{staticClass:"header-anchor",attrs:{href:"#setprivatekey"}},[t._v("#")]),t._v(" "),c("code",[t._v("setPrivateKey")])]),t._v(" "),c("p",[t._v("Set the private key of an "),c("code",[t._v("AccountBlock")]),t._v(" instance for signing")]),t._v(" "),c("ul",[c("li",[c("strong",[t._v("Parameters")]),t._v(":\n"),c("ul",[c("li",[c("code",[t._v("Hex")]),t._v(" private key")])])]),t._v(" "),c("li",[c("strong",[t._v("Returns")]),t._v(":\n"),c("ul",[c("li",[t._v("this "),c("code",[t._v("AccountBlock")]),t._v(" instance")])])]),t._v(" "),c("li",[c("strong",[t._v("Example")]),t._v(" "),c("tm-code-block",{staticClass:"codeblock",attrs:{language:"js",base64:"Y29uc3QgbXlXYWxsZXQgPSB3YWxsZXQuY3JlYXRlV2FsbGV0KCk7CmNvbnN0IHsgYWRkcmVzcywgcHJpdmF0ZUtleSB9ID0gbXlXYWxsZXQuZGVyaXZlQWRkcmVzcygwKTsKYmxvY2suc2V0UHJpdmF0ZUtleShwcml2YXRlS2V5KTsK"}})],1)]),t._v(" "),c("h3",{attrs:{id:"getpreviousaccountblock"}},[c("a",{staticClass:"header-anchor",attrs:{href:"#getpreviousaccountblock"}},[t._v("#")]),t._v(" "),c("code",[t._v("getPreviousAccountBlock")])]),t._v(" "),c("p",[t._v("Get the previous block of an "),c("code",[t._v("AccountBlock")]),t._v(" instance")]),t._v(" "),c("ul",[c("li",[c("strong",[t._v("Parameters")]),t._v(":\n"),c("ul",[c("li",[t._v("None")])])]),t._v(" "),c("li",[c("strong",[t._v("Returns")]),t._v(":\n"),c("ul",[c("li",[c("code",[t._v("Promise<AccountBlockType>")])])])]),t._v(" "),c("li",[c("strong",[t._v("Example")]),t._v(" "),c("tm-code-block",{staticClass:"codeblock",attrs:{language:"js",base64:"YmxvY2suc2V0UHJvdmlkZXIodml0ZUFwaSk7CmNvbnN0IGxhc3RCbG9jayA9IGF3YWl0IGJsb2NrLmdldFByZXZpb3VzQWNjb3VudEJsb2NrKCk7Cg=="}})],1)]),t._v(" "),c("blockquote",[c("p",[t._v("Note: "),c("code",[t._v("ViteAPI")]),t._v(" must exist on the "),c("code",[t._v("AccountBlock")]),t._v(" before calling this method on it; one way to do this is to call its "),c("code",[t._v("setProvider")]),t._v(" method first.")])]),t._v(" "),c("h3",{attrs:{id:"setpreviousaccountblock"}},[c("a",{staticClass:"header-anchor",attrs:{href:"#setpreviousaccountblock"}},[t._v("#")]),t._v(" "),c("code",[t._v("setPreviousAccountBlock")])]),t._v(" "),c("p",[t._v("Set the "),c("code",[t._v("previousHash")]),t._v(" of an "),c("code",[t._v("AccountBlock")]),t._v(" instance to the hash of the block passed in as an argument. If the block passed in as an argument has no "),c("code",[t._v("hash")]),t._v(", the "),c("code",[t._v("previousHash")]),t._v(" will be set to "),c("code",[t._v("0000000000000000000000000000000000000000000000000000000000000000")]),t._v(".")]),t._v(" "),c("ul",[c("li",[c("strong",[t._v("Parameters")]),t._v(":\n"),c("ul",[c("li",[c("code",[t._v("previousAccountBlock: AccountBlockType")])])])]),t._v(" "),c("li",[c("strong",[t._v("Returns")]),t._v(":\n"),c("ul",[c("li",[t._v("this "),c("code",[t._v("AccountBlock")]),t._v(" instance")])])]),t._v(" "),c("li",[c("strong",[t._v("Example")]),t._v(" "),c("tm-code-block",{staticClass:"codeblock",attrs:{language:"js",base64:"YmxvY2suc2V0UHJvdmlkZXIodml0ZUFwaSk7CmJsb2NrLnNldFByZXZpb3VzQWNjb3VudEJsb2NrKGF3YWl0IGJsb2NrLmdldFByZXZpb3VzQWNjb3VudEJsb2NrKCkpOwo="}})],1)]),t._v(" "),c("h3",{attrs:{id:"autosetpreviousaccountblock"}},[c("a",{staticClass:"header-anchor",attrs:{href:"#autosetpreviousaccountblock"}},[t._v("#")]),t._v(" "),c("code",[t._v("autoSetPreviousAccountBlock")])]),t._v(" "),c("p",[t._v("Get and set the "),c("code",[t._v("previousHash")]),t._v(" of an "),c("code",[t._v("AccountBlock")]),t._v(" instance. This combines the "),c("code",[t._v("getPreviousAccountBlock")]),t._v(" and "),c("code",[t._v("setPreviousAccountBlock")]),t._v(" methods.")]),t._v(" "),c("ul",[c("li",[c("strong",[t._v("Parameters")]),t._v(":\n"),c("ul",[c("li",[t._v("None")])])]),t._v(" "),c("li",[c("strong",[t._v("Returns")]),t._v(":\n"),c("ul",[c("li",[c("code",[t._v("Promise<{ height: Uint64; previousHash: Hex }>")])])])]),t._v(" "),c("li",[c("strong",[t._v("Example")]),t._v(" "),c("tm-code-block",{staticClass:"codeblock",attrs:{language:"js",base64:"YmxvY2suc2V0UHJvdmlkZXIodml0ZUFwaSk7CmJsb2NrLmF1dG9TZXRQcmV2aW91c0FjY291bnRCbG9jaygpLnRoZW4oKHsgaGVpZ2h0LCBwcmV2aW91c0hhc2ggfSkgPSZndDsgewoJY29uc29sZS5sb2coJ2hlaWdodCcsIGhlaWdodCk7Cgljb25zb2xlLmxvZygncHJldmlvdXNIYXNoJywgcHJldmlvdXNIYXNoKTsKfSk7Cg=="}})],1)]),t._v(" "),c("h3",{attrs:{id:"getdifficulty"}},[c("a",{staticClass:"header-anchor",attrs:{href:"#getdifficulty"}},[t._v("#")]),t._v(" "),c("code",[t._v("getDifficulty")])]),t._v(" "),c("p",[t._v("Get the PoW difficulty for sending an "),c("code",[t._v("AccountBlock")]),t._v(" instance. If the sending "),c("code",[t._v("address")]),t._v(" of the "),c("code",[t._v("AccountBlock")]),t._v(" instance has sufficient quota to send the block, the returned "),c("code",[t._v("Promise")]),t._v(" will resolve with "),c("code",[t._v("''")]),t._v(".")]),t._v(" "),c("blockquote",[c("p",[t._v("Note: "),c("code",[t._v("previousHash")]),t._v(" must exist on the "),c("code",[t._v("AccountBlock")]),t._v(" instance before calling this method on it; one way to do this is to call its "),c("code",[t._v("autoSetPreviousAccountBlock")]),t._v(" method first.")])]),t._v(" "),c("ul",[c("li",[c("strong",[t._v("Parameters")]),t._v(":\n"),c("ul",[c("li",[t._v("None")])])]),t._v(" "),c("li",[c("strong",[t._v("Returns")]),t._v(" "),c("ul",[c("li",[c("code",[t._v("Promise<BigInt>")]),t._v(" PoW difficulty")])])]),t._v(" "),c("li",[c("strong",[t._v("Example")]),t._v(" "),c("tm-code-block",{staticClass:"codeblock",attrs:{language:"js",base64:"YmxvY2suc2V0UHJvdmlkZXIodml0ZUFwaSk7CmF3YWl0IGJsb2NrLmF1dG9TZXRQcmV2aW91c0FjY291bnRCbG9jaygpOwpjb25zdCBkaWZmaWN1bHR5ID0gYXdhaXQgYmxvY2suZ2V0RGlmZmljdWx0eSgpOwo="}})],1)]),t._v(" "),c("h3",{attrs:{id:"setdifficulty"}},[c("a",{staticClass:"header-anchor",attrs:{href:"#setdifficulty"}},[t._v("#")]),t._v(" "),c("code",[t._v("setDifficulty")])]),t._v(" "),c("p",[t._v("Set the PoW difficulty for an "),c("code",[t._v("AccountBlock")]),t._v(" instance")]),t._v(" "),c("ul",[c("li",[c("strong",[t._v("Parameters")]),t._v(":\n"),c("ul",[c("li",[c("code",[t._v("difficulty: BigInt")]),t._v(" PoW difficulty")])])]),t._v(" "),c("li",[c("strong",[t._v("Returns")]),t._v(":\n"),c("ul",[c("li",[t._v("this "),c("code",[t._v("AccountBlock")]),t._v(" instance")])])]),t._v(" "),c("li",[c("strong",[t._v("Example")]),t._v(" "),c("tm-code-block",{staticClass:"codeblock",attrs:{language:"js",base64:"YmxvY2suc2V0UHJvdmlkZXIodml0ZUFwaSk7CmF3YWl0IGJsb2NrLmF1dG9TZXRQcmV2aW91c0FjY291bnRCbG9jaygpOwpjb25zdCBkaWZmaWN1bHR5ID0gYXdhaXQgYmxvY2suZ2V0RGlmZmljdWx0eSgpOwpibG9jay5zZXREaWZmaWN1bHR5KGRpZmZpY3VsdHkpOwo="}})],1)]),t._v(" "),c("h3",{attrs:{id:"autosetdifficulty"}},[c("a",{staticClass:"header-anchor",attrs:{href:"#autosetdifficulty"}},[t._v("#")]),t._v(" "),c("code",[t._v("autoSetDifficulty")])]),t._v(" "),c("p",[t._v("Get and set the PoW difficulty for an "),c("code",[t._v("AccountBlock")]),t._v(" instance. This combines the "),c("code",[t._v("getDifficulty")]),t._v(" and "),c("code",[t._v("setDifficulty")]),t._v(" methods.")]),t._v(" "),c("blockquote",[c("p",[t._v("Note: "),c("code",[t._v("previousHash")]),t._v(" must exist on the "),c("code",[t._v("AccountBlock")]),t._v(" instance before calling this method on it; one way to do this is to call its "),c("code",[t._v("autoSetPreviousAccountBlock")]),t._v(" method first.")])]),t._v(" "),c("ul",[c("li",[c("strong",[t._v("Parameters")]),t._v(":\n"),c("ul",[c("li",[t._v("None")])])]),t._v(" "),c("li",[c("strong",[t._v("Returns")]),t._v(":\n"),c("ul",[c("li",[c("code",[t._v("Promise<BigInt>")]),t._v(" PoW difficulty")])])]),t._v(" "),c("li",[c("strong",[t._v("Example")]),t._v(" "),c("tm-code-block",{staticClass:"codeblock",attrs:{language:"js",base64:"YXdhaXQgYmxvY2suYXV0b1NldFByZXZpb3VzQWNjb3VudEJsb2NrKCk7CmF3YWl0IGJsb2NrLmF1dG9TZXREaWZmaWN1bHR5KCk7CmNvbnNvbGUubG9nKGJsb2NrLmRpZmZpY3VsdHkpOwo="}})],1)]),t._v(" "),c("h3",{attrs:{id:"getnonce"}},[c("a",{staticClass:"header-anchor",attrs:{href:"#getnonce"}},[t._v("#")]),t._v(" "),c("code",[t._v("getNonce")])]),t._v(" "),c("p",[t._v("Get the PoW nonce for an "),c("code",[t._v("AccountBlock")]),t._v(" instance")]),t._v(" "),c("blockquote",[c("p",[t._v("Note: "),c("code",[t._v("difficulty")]),t._v(" must exist on the "),c("code",[t._v("AccountBlock")]),t._v(" instance before calling this method on it; one way to do this is to call its "),c("code",[t._v("autoSetDifficulty")]),t._v(" method first.")])]),t._v(" "),c("ul",[c("li",[c("strong",[t._v("Parameters")]),t._v(":\n"),c("ul",[c("li",[t._v("None")])])]),t._v(" "),c("li",[c("strong",[t._v("Returns")]),t._v(":\n"),c("ul",[c("li",[c("code",[t._v("Promise<Base64>")]),t._v(" Nonce")])])]),t._v(" "),c("li",[c("strong",[t._v("Example")]),t._v(" "),c("tm-code-block",{staticClass:"codeblock",attrs:{language:"js",base64:"YmxvY2suc2V0UHJvdmlkZXIodml0ZUFwaSk7CmF3YWl0IGJsb2NrLmF1dG9TZXRQcmV2aW91c0FjY291bnRCbG9jaygpOwphd2FpdCBibG9jay5hdXRvU2V0RGlmZmljdWx0eSgpOwpjb25zdCBub25jZSA9IGF3YWl0IGJsb2NrLmdldE5vbmNlKCk7Cg=="}})],1)]),t._v(" "),c("h3",{attrs:{id:"setnonce"}},[c("a",{staticClass:"header-anchor",attrs:{href:"#setnonce"}},[t._v("#")]),t._v(" "),c("code",[t._v("setNonce")])]),t._v(" "),c("p",[t._v("Set the PoW nonce for an "),c("code",[t._v("AccountBlock")]),t._v(" instance")]),t._v(" "),c("ul",[c("li",[c("strong",[t._v("Parameters")]),t._v(":\n"),c("ul",[c("li",[c("code",[t._v("nonce: Base64")])])])]),t._v(" "),c("li",[c("strong",[t._v("Returns")]),t._v(":\n"),c("ul",[c("li",[t._v("this "),c("code",[t._v("AccountBlock")]),t._v(" instance")])])]),t._v(" "),c("li",[c("strong",[t._v("Example")]),t._v(" "),c("tm-code-block",{staticClass:"codeblock",attrs:{language:"js",base64:"YmxvY2suc2V0UHJvdmlkZXIodml0ZUFwaSk7CmF3YWl0IGJsb2NrLmF1dG9TZXRQcmV2aW91c0FjY291bnRCbG9jaygpOwphd2FpdCBibG9jay5hdXRvU2V0RGlmZmljdWx0eSgpOwpjb25zdCBub25jZSA9IGF3YWl0IGJsb2NrLmdldE5vbmNlKCk7CmJsb2NrLnNldE5vbmNlKG5vbmNlKTsKY29uc29sZS5sb2coYmxvY2subm9uY2UpOwo="}})],1)]),t._v(" "),c("h3",{attrs:{id:"setpublickey"}},[c("a",{staticClass:"header-anchor",attrs:{href:"#setpublickey"}},[t._v("#")]),t._v(" "),c("code",[t._v("setPublicKey")])]),t._v(" "),c("p",[t._v("Set the public key of an "),c("code",[t._v("AccountBlock")]),t._v(" instance")]),t._v(" "),c("ul",[c("li",[c("strong",[t._v("Parameters")]),t._v(":\n"),c("ul",[c("li",[c("code",[t._v("publicKey: Hex | Base64")]),t._v(" Public key in Hex or Base64 format")])])]),t._v(" "),c("li",[c("strong",[t._v("Returns")]),t._v(":\n"),c("ul",[c("li",[t._v("this "),c("code",[t._v("AccountBlock")]),t._v(" instance")])])]),t._v(" "),c("li",[c("strong",[t._v("Example")]),t._v(" "),c("tm-code-block",{staticClass:"codeblock",attrs:{language:"js",base64:"Y29uc3QgbXlXYWxsZXQgPSB3YWxsZXQuY3JlYXRlV2FsbGV0KCk7CmNvbnN0IHsgYWRkcmVzcywgcHVibGljS2V5IH0gPSBteVdhbGxldC5kZXJpdmVBZGRyZXNzKDApOwpjb25zdCBibG9jayA9IG5ldyBBY2NvdW50QmxvY2soewoJYmxvY2tUeXBlOiAyLAoJYWRkcmVzcywKfSkuc2V0UHJvdmlkZXIodml0ZUFwaSk7CmNvbnNvbGUubG9nKCdibG9jay5hZGRyZXNzOicsIGJsb2NrLmFkZHJlc3MgPT09IHdhbGxldC5nZXRBZGRyZXNzRnJvbVB1YmxpY0tleShwdWJsaWNLZXkpKTsgLy8gdHJ1ZQpibG9jay5zZXRQdWJsaWNLZXkocHVibGljS2V5KTsKLy8gb3IKYmxvY2suc2V0UHVibGljS2V5KHV0aWxzLl9CdWZmZXIuZnJvbShwdWJsaWNLZXksICdoZXgnKS50b1N0cmluZygnYmFzZTY0JykpOwo="}})],1)]),t._v(" "),c("h3",{attrs:{id:"sign"}},[c("a",{staticClass:"header-anchor",attrs:{href:"#sign"}},[t._v("#")]),t._v(" "),c("code",[t._v("sign")])]),t._v(" "),c("p",[t._v("Sign account block")]),t._v(" "),c("blockquote",[c("p",[t._v("Note: Make sure to set all necessary block properties before calling this method. Calling "),c("code",[t._v("autoSetPreviousAccountBlock")]),t._v(" can help. For what qualifies as all the necessary block properties, please view the "),c("a",{attrs:{href:"https://github.com/vitelabs/vite.js/blob/28aadc5424397e167d0f8e6c2589b8d3a826c9b2/src/accountBlock/utils.ts#L43",target:"_blank",rel:"noopener noreferrer"}},[t._v("source code"),c("OutboundLink")],1),t._v(" for the checks done on a block before signing.")])]),t._v(" "),c("ul",[c("li",[c("strong",[t._v("Parameters")]),t._v(":\n"),c("ul",[c("li",[c("code",[t._v("privateKey: Hex = this.privateKey")]),t._v(" Private key used to sign the account block. If not present, "),c("code",[t._v("privateKey")]),t._v(" must exist on the "),c("code",[t._v("AccountBlock")]),t._v(" instance before calling this method.")])])]),t._v(" "),c("li",[c("strong",[t._v("Returns")]),t._v(":\n"),c("ul",[c("li",[t._v("this "),c("code",[t._v("AccountBlock")]),t._v(" instance")])])]),t._v(" "),c("li",[c("strong",[t._v("Example")]),t._v(" "),c("tm-code-block",{staticClass:"codeblock",attrs:{language:"js",base64:"YXdhaXQgYmxvY2suYXV0b1NldFByZXZpb3VzQWNjb3VudEJsb2NrKCk7CmJsb2NrLnNpZ24ocHJpdmF0ZUtleSk7Cg=="}})],1)]),t._v(" "),c("h3",{attrs:{id:"setsignature"}},[c("a",{staticClass:"header-anchor",attrs:{href:"#setsignature"}},[t._v("#")]),t._v(" "),c("code",[t._v("setSignature")])]),t._v(" "),c("p",[t._v("Set the signature of an "),c("code",[t._v("AccountBlock")]),t._v(" instance.")]),t._v(" "),c("ul",[c("li",[c("strong",[t._v("Parameters")]),t._v(":\n"),c("ul",[c("li",[c("code",[t._v("signature: Hex | Base64")]),t._v(" Signature in Hex or Base64 format")])])]),t._v(" "),c("li",[c("strong",[t._v("Returns")]),t._v(":\n"),c("ul",[c("li",[t._v("this "),c("code",[t._v("AccountBlock")]),t._v(" instance")])])]),t._v(" "),c("li",[c("strong",[t._v("Example")]),t._v(" "),c("tm-code-block",{staticClass:"codeblock",attrs:{language:"js",base64:"YmxvY2suc2V0U2lnbmF0dXJlKHlvdXJTaWduYXR1cmUpOwo="}})],1)]),t._v(" "),c("h3",{attrs:{id:"send"}},[c("a",{staticClass:"header-anchor",attrs:{href:"#send"}},[t._v("#")]),t._v(" "),c("code",[t._v("send")])]),t._v(" "),c("p",[t._v("Send account block. The account block must be complete and signed.")]),t._v(" "),c("ul",[c("li",[c("strong",[t._v("Parameters")]),t._v(":\n"),c("ul",[c("li",[t._v("None")])])]),t._v(" "),c("li",[c("strong",[t._v("Returns")]),t._v(":\n"),c("ul",[c("li",[c("code",[t._v("Promise<AccountBlockBlock>")]),t._v(" instance of account block type")])])]),t._v(" "),c("li",[c("strong",[t._v("Example")]),t._v(" "),c("tm-code-block",{staticClass:"codeblock",attrs:{language:"js",base64:"YmxvY2suc2V0UHJvdmlkZXIodml0ZUFwaSk7CmF3YWl0IGJsb2NrLmF1dG9TZXRQcmV2aW91c0FjY291bnRCbG9jaygpOwpibG9jay5zaWduKHByaXZhdGVLZXkpOwpjb25zdCByZXN1bHQgPSBhd2FpdCBibG9jay5zZW5kKCk7Cgpjb25zb2xlLmxvZygnc2VuZCBzdWNjZXNzJywgcmVzdWx0KTsK"}})],1)]),t._v(" "),c("h3",{attrs:{id:"autosend"}},[c("a",{staticClass:"header-anchor",attrs:{href:"#autosend"}},[t._v("#")]),t._v(" "),c("code",[t._v("autoSend")])]),t._v(" "),c("p",[t._v("Sign and send the account block. This combines the "),c("code",[t._v("autoSetPreviousAccountBlock")]),t._v(", "),c("code",[t._v("sign")]),t._v(", and "),c("code",[t._v("send")]),t._v(" methods.")]),t._v(" "),c("ul",[c("li",[c("strong",[t._v("Parameters")]),t._v(":\n"),c("ul",[c("li",[c("code",[t._v("privateKey: Hex = this.privateKey")]),t._v(" Private key used to sign the account block. If not present, "),c("code",[t._v("privateKey")]),t._v(" must exist on the "),c("code",[t._v("AccountBlock")]),t._v(" instance before calling this method.")])])]),t._v(" "),c("li",[c("strong",[t._v("Returns")]),t._v(":\n"),c("ul",[c("li",[c("code",[t._v("Promise<AccountBlock>")]),t._v(" instance of account block type")])])]),t._v(" "),c("li",[c("strong",[t._v("Example")]),t._v(" "),c("tm-code-block",{staticClass:"codeblock",attrs:{language:"js",base64:"Y29uc3QgcmVzdWx0ID0gYXdhaXQgYmxvY2suYXV0b1NlbmQoKTsK"}})],1)])])}),[],!1,null,null,null);e.default=o.exports}}]);