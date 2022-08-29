(window.webpackJsonp=window.webpackJsonp||[]).push([[101],{701:function(e,t,s){"use strict";s.r(t);var d=s(0),a=Object(d.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"wallet-api"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#wallet-api"}},[e._v("#")]),e._v(" Wallet API")]),e._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",[e._v('To enable Wallet RPC API on the node, add "wallet" namespace in "PublicModules" in node_config.json')])]),e._v(" "),s("div",{staticClass:"custom-block danger"},[s("p",{staticClass:"custom-block-title"},[e._v("Dangerous RPC calls")]),e._v(" "),s("p",[e._v("Expose wallet module to public Internet, e.g. setting "),s("code",[e._v('"HttpHost": "0.0.0.0"')]),e._v(' could be dangerous. Configure "HttpHost" and "WSHost" to "127.0.0.1" or remove wallet namespace from "PublicModules" in node_config.json after the node is set up.')])]),e._v(" "),s("p",[e._v("Definitions:")]),e._v(" "),s("ul",[s("li",[s("strong",[e._v("Standard Directory")]),e._v(': The default wallet directory on the node. For mainnet node on Linux or Mac, this directory is "~/.gvite/maindata/wallet"')]),e._v(" "),s("li",[s("strong",[e._v("Entropy File")]),e._v(": A JSON keystore file to save entropy encrypted with AES-256 algorithm")]),e._v(" "),s("li",[s("strong",[e._v("Passphrase")]),e._v(": A Scrypt password that is used to derive AES-256 key for entropy encryption. Please note this is NOT the bip39 passphrase. By default, an empty bip39 passphrase "),s("code",[e._v("''")]),e._v(" is used by wallet module when creating seeds from mnemonics and the value cannot be customized.")]),e._v(" "),s("li",[s("strong",[e._v("Primary Address")]),e._v(": For each entropy file, the first Vite address at index 0 is called primary address.")])]),e._v(" "),s("h2",{attrs:{id:"wallet-getentropyfilesinstandarddir"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#wallet-getentropyfilesinstandarddir"}},[e._v("#")]),e._v(" "),s("code",[e._v("wallet_getEntropyFilesInStandardDir")])]),e._v(" "),s("p",[e._v("List all entropy files in default wallet directory")]),e._v(" "),s("ul",[s("li",[s("p",[s("strong",[e._v("Parameters")]),e._v(": none")])]),e._v(" "),s("li",[s("p",[s("strong",[e._v("Returns")]),e._v(":")]),e._v(" "),s("ul",[s("li",[s("code",[e._v("Array<string>")]),e._v(" Absolute paths of entropy file")])])]),e._v(" "),s("li",[s("p",[s("strong",[e._v("Example")]),e._v(":")])])]),e._v(" "),s("code-group",[s("code-block",{attrs:{title:"Request"}},[s("tm-code-block",{staticClass:"codeblock",attrs:{language:"json",base64:"ewogICAgJnF1b3Q7anNvbnJwYyZxdW90OzogJnF1b3Q7Mi4wJnF1b3Q7LAogICAgJnF1b3Q7aWQmcXVvdDs6IDQsCiAgICAmcXVvdDttZXRob2QmcXVvdDs6ICZxdW90O3dhbGxldF9nZXRFbnRyb3B5RmlsZXNJblN0YW5kYXJkRGlyJnF1b3Q7LAogICAgJnF1b3Q7cGFyYW1zJnF1b3Q7OiBbXQp9Cg=="}})],1),e._v(" "),s("code-block",{attrs:{title:"Response"}},[s("tm-code-block",{staticClass:"codeblock",attrs:{language:"json",base64:"ewogICAgJnF1b3Q7anNvbnJwYyZxdW90OzogJnF1b3Q7Mi4wJnF1b3Q7LAogICAgJnF1b3Q7aWQmcXVvdDs6IDQsCiAgICAmcXVvdDtyZXN1bHQmcXVvdDs6IFsKICAgICAgICAmcXVvdDsvVXNlcnMveHh4L0xpYnJhcnkvR1ZpdGUvdGVzdGRhdGEvd2FsbGV0L3ZpdGVfMTUzOTFhYzhiMDlkNGU4YWQ3OGJmZTVmOWY5YWI5NjgyZmU2ODk1NzJmNmY1MzY1NWUmcXVvdDssCiAgICAgICAgJnF1b3Q7L1VzZXJzL3h4eC9MaWJyYXJ5L0dWaXRlL3Rlc3RkYXRhL3dhbGxldC92aXRlXzViMDEzZWM0ZjNjMjM1ZGExMmU0N2I1MjU3MTNlMmY1ZWRkMGIwNGRmOTY1ZmFmYzIyJnF1b3Q7LAogICAgICAgICZxdW90Oy9Vc2Vycy94eHgvTGlicmFyeS9HVml0ZS90ZXN0ZGF0YS93YWxsZXQvdml0ZV82N2RlOTgxZWZmMzcyZDRhNzU3NTQxYjA1ZjBlOGEyNjllZWUxMWMyZjZjOWZiZGFlNiZxdW90OywKICAgICAgICAmcXVvdDsvVXNlcnMveHh4L0xpYnJhcnkvR1ZpdGUvdGVzdGRhdGEvd2FsbGV0L3ZpdGVfZjI0YmI0ZWNlYWRjNjUwMjBkZTVkZTZhNGFlYjIyYzUyZWRkNmNiNzJlZTIyNzlhOTcmcXVvdDsKICAgIF0KfQoK"}})],1)],1),s("h2",{attrs:{id:"wallet-getallentropyfiles"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#wallet-getallentropyfiles"}},[e._v("#")]),e._v(" "),s("code",[e._v("wallet_getAllEntropyFiles")])]),e._v(" "),s("p",[e._v("List all entropy files installed on node")]),e._v(" "),s("ul",[s("li",[s("p",[s("strong",[e._v("Parameters")]),e._v(": none")])]),e._v(" "),s("li",[s("p",[s("strong",[e._v("Returns")]),e._v(":")]),e._v(" "),s("ul",[s("li",[s("code",[e._v("Array<string>")]),e._v(" Absolute paths of entropy file")])])]),e._v(" "),s("li",[s("p",[s("strong",[e._v("Example")]),e._v(":")])])]),e._v(" "),s("code-group",[s("code-block",{attrs:{title:"Request"}},[s("tm-code-block",{staticClass:"codeblock",attrs:{language:"json",base64:"ewogICAgJnF1b3Q7anNvbnJwYyZxdW90OzogJnF1b3Q7Mi4wJnF1b3Q7LAogICAgJnF1b3Q7aWQmcXVvdDs6IDIsCiAgICAmcXVvdDttZXRob2QmcXVvdDs6ICZxdW90O3dhbGxldF9nZXRBbGxFbnRyb3B5RmlsZXMmcXVvdDssCiAgICAmcXVvdDtwYXJhbXMmcXVvdDs6IFtdCn0K"}})],1),e._v(" "),s("code-block",{attrs:{title:"Response"}},[s("tm-code-block",{staticClass:"codeblock",attrs:{language:"json",base64:"ewogICAgJnF1b3Q7anNvbnJwYyZxdW90OzogJnF1b3Q7Mi4wJnF1b3Q7LAogICAgJnF1b3Q7aWQmcXVvdDs6IDQsCiAgICAmcXVvdDtyZXN1bHQmcXVvdDs6IFsKICAgICAgICAmcXVvdDsvVXNlcnMveHh4L0xpYnJhcnkvR1ZpdGUvdGVzdGRhdGEvd2FsbGV0L3ZpdGVfMTUzOTFhYzhiMDlkNGU4YWQ3OGJmZTVmOWY5YWI5NjgyZmU2ODk1NzJmNmY1MzY1NWUmcXVvdDssCiAgICAgICAgJnF1b3Q7L1VzZXJzL3h4eC9MaWJyYXJ5L0dWaXRlL3Rlc3RkYXRhL3dhbGxldC92aXRlXzViMDEzZWM0ZjNjMjM1ZGExMmU0N2I1MjU3MTNlMmY1ZWRkMGIwNGRmOTY1ZmFmYzIyJnF1b3Q7LAogICAgICAgICZxdW90Oy9Vc2Vycy94eHgvTGlicmFyeS9HVml0ZS90ZXN0ZGF0YS93YWxsZXQvdml0ZV82N2RlOTgxZWZmMzcyZDRhNzU3NTQxYjA1ZjBlOGEyNjllZWUxMWMyZjZjOWZiZGFlNiZxdW90OwogICAgXQp9Cg=="}})],1)],1),s("h2",{attrs:{id:"wallet-exportmnemonic"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#wallet-exportmnemonic"}},[e._v("#")]),e._v(" "),s("code",[e._v("wallet_exportMnemonic")])]),e._v(" "),s("p",[e._v("Export mnemonic phrase from entropy file")]),e._v(" "),s("ul",[s("li",[s("p",[s("strong",[e._v("Parameters")]),e._v(":")]),e._v(" "),s("ul",[s("li",[s("code",[e._v("entropyFile")]),e._v(": "),s("code",[e._v("string")]),e._v("  Absolute path of the entropy file, or primary address if the file is under standard directory.")]),e._v(" "),s("li",[s("code",[e._v("passphrase")]),e._v(": "),s("code",[e._v("string")]),e._v("  Entropy file passphrase")])])]),e._v(" "),s("li",[s("p",[s("strong",[e._v("Returns")]),e._v(":")]),e._v(" "),s("ul",[s("li",[s("code",[e._v("string")]),e._v("  Mnemonic phrase")])])]),e._v(" "),s("li",[s("p",[s("strong",[e._v("Example")]),e._v(":")])])]),e._v(" "),s("code-group",[s("code-block",{attrs:{title:"Request"}},[s("tm-code-block",{staticClass:"codeblock",attrs:{language:"json",base64:"ewogICAgJnF1b3Q7anNvbnJwYyZxdW90OzogJnF1b3Q7Mi4wJnF1b3Q7LAogICAgJnF1b3Q7aWQmcXVvdDs6IDQsCiAgICAmcXVvdDttZXRob2QmcXVvdDs6ICZxdW90O3dhbGxldF9leHBvcnRNbmVtb25pYyZxdW90OywKICAgICZxdW90O3BhcmFtcyZxdW90OzogWwogICAgICAgICZxdW90O3ZpdGVfMTUzOTFhYzhiMDlkNGU4YWQ3OGJmZTVmOWY5YWI5NjgyZmU2ODk1NzJmNmY1MzY1NWUmcXVvdDssCiAgICAgICAgJnF1b3Q7MTIzNDU2JnF1b3Q7CiAgICBdCn0K"}})],1),e._v(" "),s("code-block",{attrs:{title:"Response"}},[s("tm-code-block",{staticClass:"codeblock",attrs:{language:"json",base64:"ewogICAgJnF1b3Q7anNvbnJwYyZxdW90OzogJnF1b3Q7Mi4wJnF1b3Q7LAogICAgJnF1b3Q7aWQmcXVvdDs6IDQsCiAgICAmcXVvdDtyZXN1bHQmcXVvdDs6ICZxdW90O2dvZGRlc3MgY3J1c2ggcGF0dGVybiBjbHVzdGVyIGxldmVsIGNvbWJpbmUgc3VydmV5IGdpdmUgc2VtaW5hciB1bmlmb3JtIGludml0ZSBiZWFjaCZxdW90Owp9Cg=="}})],1)],1),s("h2",{attrs:{id:"wallet-unlock"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#wallet-unlock"}},[e._v("#")]),e._v(" "),s("code",[e._v("wallet_unlock")])]),e._v(" "),s("p",[e._v("Unlock an entropy file with passphrase")]),e._v(" "),s("ul",[s("li",[s("p",[s("strong",[e._v("Parameters")]),e._v(":")]),e._v(" "),s("ul",[s("li",[s("code",[e._v("entropyFile")]),e._v(": "),s("code",[e._v("string")]),e._v("  Absolute path of the entropy file, or primary address if the file is under standard directory.")]),e._v(" "),s("li",[s("code",[e._v("passphrase")]),e._v(": "),s("code",[e._v("string")]),e._v("  Entropy file passphrase")])])]),e._v(" "),s("li",[s("p",[s("strong",[e._v("Returns")]),e._v(": null")])]),e._v(" "),s("li",[s("p",[s("strong",[e._v("Example")]),e._v(":")])])]),e._v(" "),s("code-group",[s("code-block",{attrs:{title:"Request"}},[s("tm-code-block",{staticClass:"codeblock",attrs:{language:"json",base64:"ewogICAgJnF1b3Q7anNvbnJwYyZxdW90OzogJnF1b3Q7Mi4wJnF1b3Q7LAogICAgJnF1b3Q7aWQmcXVvdDs6IDQsCiAgICAmcXVvdDttZXRob2QmcXVvdDs6ICZxdW90O3dhbGxldF91bmxvY2smcXVvdDssCiAgICAmcXVvdDtwYXJhbXMmcXVvdDs6IFsKICAgICAgICAmcXVvdDt2aXRlXzE1MzkxYWM4YjA5ZDRlOGFkNzhiZmU1ZjlmOWFiOTY4MmZlNjg5NTcyZjZmNTM2NTVlJnF1b3Q7LAogICAgICAgICZxdW90OzEyMzQ1NiZxdW90OwogICAgXQp9Cg=="}})],1),e._v(" "),s("code-block",{attrs:{title:"Response"}},[s("tm-code-block",{staticClass:"codeblock",attrs:{language:"json",base64:"ewogICAgJnF1b3Q7anNvbnJwYyZxdW90OzogJnF1b3Q7Mi4wJnF1b3Q7LAogICAgJnF1b3Q7aWQmcXVvdDs6IDQsCiAgICAmcXVvdDtyZXN1bHQmcXVvdDs6IG51bGwKfQo="}})],1)],1),s("h2",{attrs:{id:"wallet-lock"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#wallet-lock"}},[e._v("#")]),e._v(" "),s("code",[e._v("wallet_lock")])]),e._v(" "),s("p",[e._v("Lock an entropy file")]),e._v(" "),s("ul",[s("li",[s("p",[s("strong",[e._v("Parameters")]),e._v(":")]),e._v(" "),s("ul",[s("li",[s("code",[e._v("entropyFile")]),e._v(": "),s("code",[e._v("string")]),e._v("  Absolute path of the entropy file, or primary address if the file is under standard directory.")])])]),e._v(" "),s("li",[s("p",[s("strong",[e._v("Returns")]),e._v(": null")])]),e._v(" "),s("li",[s("p",[s("strong",[e._v("Example")]),e._v(":")])])]),e._v(" "),s("code-group",[s("code-block",{attrs:{title:"Request"}},[s("tm-code-block",{staticClass:"codeblock",attrs:{language:"json",base64:"ewogICAgJnF1b3Q7anNvbnJwYyZxdW90OzogJnF1b3Q7Mi4wJnF1b3Q7LAogICAgJnF1b3Q7aWQmcXVvdDs6IDQsCiAgICAmcXVvdDttZXRob2QmcXVvdDs6ICZxdW90O3dhbGxldF9sb2NrJnF1b3Q7LAogICAgJnF1b3Q7cGFyYW1zJnF1b3Q7OiBbCiAgICAgICAgJnF1b3Q7dml0ZV8xNTM5MWFjOGIwOWQ0ZThhZDc4YmZlNWY5ZjlhYjk2ODJmZTY4OTU3MmY2ZjUzNjU1ZSZxdW90OwogICAgXQp9Cg=="}})],1),e._v(" "),s("code-block",{attrs:{title:"Response"}},[s("tm-code-block",{staticClass:"codeblock",attrs:{language:"json",base64:"ewogICAgJnF1b3Q7anNvbnJwYyZxdW90OzogJnF1b3Q7Mi4wJnF1b3Q7LAogICAgJnF1b3Q7aWQmcXVvdDs6IDQsCiAgICAmcXVvdDtyZXN1bHQmcXVvdDs6IG51bGwKfQo="}})],1)],1),s("h2",{attrs:{id:"wallet-deriveaddressesbyindexrange"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#wallet-deriveaddressesbyindexrange"}},[e._v("#")]),e._v(" "),s("code",[e._v("wallet_deriveAddressesByIndexRange")])]),e._v(" "),s("p",[e._v("Derive addresses from an entropy file by index range. The entropy file must be unlocked or the method will return an error.")]),e._v(" "),s("ul",[s("li",[s("p",[s("strong",[e._v("Parameters")]),e._v(":")]),e._v(" "),s("ul",[s("li",[s("code",[e._v("entropyFile")]),e._v(": "),s("code",[e._v("string")]),e._v("  Absolute path of the entropy file, or primary address if the file is under standard directory.")]),e._v(" "),s("li",[s("code",[e._v("startIndex")]),e._v(": "),s("code",[e._v("uint32")]),e._v("  Start index, included")]),e._v(" "),s("li",[s("code",[e._v("endIndex")]),e._v(": "),s("code",[e._v("uint32")]),e._v("  End index, excluded. It must hold "),s("span",{staticClass:"katex"},[s("span",{staticClass:"katex-mathml"},[s("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[s("semantics",[s("mrow",[s("mi",[e._v("e")]),s("mi",[e._v("n")]),s("mi",[e._v("d")]),s("mi",[e._v("I")]),s("mi",[e._v("n")]),s("mi",[e._v("d")]),s("mi",[e._v("e")]),s("mi",[e._v("x")]),s("mo",[e._v("−")]),s("mi",[e._v("s")]),s("mi",[e._v("t")]),s("mi",[e._v("a")]),s("mi",[e._v("r")]),s("mi",[e._v("t")]),s("mi",[e._v("I")]),s("mi",[e._v("n")]),s("mi",[e._v("d")]),s("mi",[e._v("e")]),s("mi",[e._v("x")]),s("mo",[e._v("≤")]),s("mn",[e._v("5000")])],1),s("annotation",{attrs:{encoding:"application/x-tex"}},[e._v("endIndex - startIndex \\le 5000")])],1)],1)],1),s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"base"},[s("span",{staticClass:"strut",staticStyle:{height:"0.77777em","vertical-align":"-0.08333em"}}),s("span",{staticClass:"mord mathnormal"},[e._v("e")]),s("span",{staticClass:"mord mathnormal"},[e._v("n")]),s("span",{staticClass:"mord mathnormal"},[e._v("d")]),s("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.07847em"}},[e._v("I")]),s("span",{staticClass:"mord mathnormal"},[e._v("n")]),s("span",{staticClass:"mord mathnormal"},[e._v("d")]),s("span",{staticClass:"mord mathnormal"},[e._v("e")]),s("span",{staticClass:"mord mathnormal"},[e._v("x")]),s("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222222222222222em"}}),s("span",{staticClass:"mbin"},[e._v("−")]),s("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222222222222222em"}})]),s("span",{staticClass:"base"},[s("span",{staticClass:"strut",staticStyle:{height:"0.83041em","vertical-align":"-0.13597em"}}),s("span",{staticClass:"mord mathnormal"},[e._v("s")]),s("span",{staticClass:"mord mathnormal"},[e._v("t")]),s("span",{staticClass:"mord mathnormal"},[e._v("a")]),s("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.02778em"}},[e._v("r")]),s("span",{staticClass:"mord mathnormal"},[e._v("t")]),s("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.07847em"}},[e._v("I")]),s("span",{staticClass:"mord mathnormal"},[e._v("n")]),s("span",{staticClass:"mord mathnormal"},[e._v("d")]),s("span",{staticClass:"mord mathnormal"},[e._v("e")]),s("span",{staticClass:"mord mathnormal"},[e._v("x")]),s("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2777777777777778em"}}),s("span",{staticClass:"mrel"},[e._v("≤")]),s("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2777777777777778em"}})]),s("span",{staticClass:"base"},[s("span",{staticClass:"strut",staticStyle:{height:"0.64444em","vertical-align":"0em"}}),s("span",{staticClass:"mord"},[e._v("5")]),s("span",{staticClass:"mord"},[e._v("0")]),s("span",{staticClass:"mord"},[e._v("0")]),s("span",{staticClass:"mord"},[e._v("0")])])])])])])]),e._v(" "),s("li",[s("p",[s("strong",[e._v("Returns")]),e._v(":")]),e._v(" "),s("ul",[s("li",[s("code",[e._v("Array<address>")]),e._v("  Addresses derived")])])]),e._v(" "),s("li",[s("p",[s("strong",[e._v("Example")]),e._v(":")])])]),e._v(" "),s("code-group",[s("code-block",{attrs:{title:"Request"}},[s("tm-code-block",{staticClass:"codeblock",attrs:{language:"json",base64:"ewogICAgJnF1b3Q7anNvbnJwYyZxdW90OzogJnF1b3Q7Mi4wJnF1b3Q7LAogICAgJnF1b3Q7aWQmcXVvdDs6IDQsCiAgICAmcXVvdDttZXRob2QmcXVvdDs6ICZxdW90O3dhbGxldF9kZXJpdmVBZGRyZXNzZXNCeUluZGV4UmFuZ2UmcXVvdDssCiAgICAmcXVvdDtwYXJhbXMmcXVvdDs6IFsKICAgICAgICAmcXVvdDsvVXNlcnMveHh4L0xpYnJhcnkvR1ZpdGUvdGVzdGRhdGEvd2FsbGV0L3ZpdGVfMTUzOTFhYzhiMDlkNGU4YWQ3OGJmZTVmOWY5YWI5NjgyZmU2ODk1NzJmNmY1MzY1NWUmcXVvdDssCiAgICAgICAgMCwKICAgICAgICAxMAogICAgXQp9Cg=="}})],1),e._v(" "),s("code-block",{attrs:{title:"Response"}},[s("tm-code-block",{staticClass:"codeblock",attrs:{language:"json",base64:"ewogICAgJnF1b3Q7anNvbnJwYyZxdW90OzogJnF1b3Q7Mi4wJnF1b3Q7LAogICAgJnF1b3Q7aWQmcXVvdDs6IDQsCiAgICAmcXVvdDtyZXN1bHQmcXVvdDs6IFsKICAgICAgICAmcXVvdDt2aXRlXzE1MzkxYWM4YjA5ZDRlOGFkNzhiZmU1ZjlmOWFiOTY4MmZlNjg5NTcyZjZmNTM2NTVlJnF1b3Q7LAogICAgICAgICZxdW90O3ZpdGVfNjU5ZmJjZTJhOTA4YmRhYjNiN2M0NjM0OGYyNDljOTBjODEyZTM2YjljZWFjNjdhYTAmcXVvdDssCiAgICAgICAgJnF1b3Q7dml0ZV9jYzM3MzQ0MmE0NzFhOGRkNGIyMjQwZDVhNzRmOGU0MDM3MTc3YTg3OTVkMzBiZGZkNyZxdW90OywKICAgICAgICAmcXVvdDt2aXRlXzFiZWIwMmYxM2FmMWIxNmEzMTdjOTI3ZDQ3MGNhMzExOGJhNzM4ZTIyZGEzZjhiZjZlJnF1b3Q7LAogICAgICAgICZxdW90O3ZpdGVfZDFjMTAzMjEzMTlkZTI0YmNiZDg2NWU3ZjQxMjdmNTg3M2JmOWMyNTFmMGE0YWJiMDAmcXVvdDssCiAgICAgICAgJnF1b3Q7dml0ZV9hY2YzNTM5M2JhNDdiODIxNmViYmM1MjUyZTg4ODRkNTE4OTcxYTU3YzExYjU4NjZlMSZxdW90OywKICAgICAgICAmcXVvdDt2aXRlXzg3ZGY2MWYwZmVkZGI2MTIxZmVjZjdkNWJhOGQ3ZTU2NDQzZDUzZWFkMDZkYTkwYTA2JnF1b3Q7LAogICAgICAgICZxdW90O3ZpdGVfOGRlNTJhYmNlMjVjNjUxMTZiMDhkODQ5NjZkNjdlM2RkNzg2MDg0OGI1MmYzODhkMjMmcXVvdDssCiAgICAgICAgJnF1b3Q7dml0ZV9lZDM0NjAyNWRjNzE5NmVkMDAwY2FhNDI5MzA2YmJlZDFiZGE0MjAxMDU5N2Q2MzY3NiZxdW90OywKICAgICAgICAmcXVvdDt2aXRlXzc4M2JhYTBjYWNjZmY0ZDM2NWYwOTg3MzY2MDIwOGVlNzI3YmZjNWQ5NzEwYjI2N2U1JnF1b3Q7XQp9Cg=="}})],1)],1),s("h2",{attrs:{id:"wallet-createentropyfile"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#wallet-createentropyfile"}},[e._v("#")]),e._v(" "),s("code",[e._v("wallet_createEntropyFile")])]),e._v(" "),s("p",[e._v("Create a new entropy file")]),e._v(" "),s("ul",[s("li",[s("p",[s("strong",[e._v("Parameters")]),e._v(":")]),e._v(" "),s("ul",[s("li",[s("code",[e._v("passphrase")]),e._v(": "),s("code",[e._v("string")]),e._v("  A passphrase to encrypt the entropy file")])])]),e._v(" "),s("li",[s("p",[s("strong",[e._v("Returns")]),e._v(": "),s("code",[e._v("CreateEntropyFileResponse")])]),e._v(" "),s("ul",[s("li",[s("code",[e._v("mnemonics")]),e._v(": "),s("code",[e._v("string")]),e._v("  Mnemonic phrase")]),e._v(" "),s("li",[s("code",[e._v("primaryAddress")]),e._v(": "),s("code",[e._v("address")]),e._v("  Address at index 0")]),e._v(" "),s("li",[s("code",[e._v("filePath")]),e._v(": "),s("code",[e._v("string")]),e._v("  Absolute path of the entropy file")])])]),e._v(" "),s("li",[s("p",[s("strong",[e._v("Example")]),e._v(":")])])]),e._v(" "),s("code-group",[s("code-block",{attrs:{title:"Request"}},[s("tm-code-block",{staticClass:"codeblock",attrs:{language:"json",base64:"ewogICAgJnF1b3Q7anNvbnJwYyZxdW90OzogJnF1b3Q7Mi4wJnF1b3Q7LAogICAgJnF1b3Q7aWQmcXVvdDs6IDIsCiAgICAmcXVvdDttZXRob2QmcXVvdDs6ICZxdW90O3dhbGxldF9jcmVhdGVFbnRyb3B5RmlsZSZxdW90OywKICAgICZxdW90O3BhcmFtcyZxdW90OzogWwogICAgICAgICZxdW90OzEyMzQ1NiZxdW90OwogICAgXQp9Cg=="}})],1),e._v(" "),s("code-block",{attrs:{title:"Response"}},[s("tm-code-block",{staticClass:"codeblock",attrs:{language:"json",base64:"ewogICAgJnF1b3Q7anNvbnJwYyZxdW90OzogJnF1b3Q7Mi4wJnF1b3Q7LAogICAgJnF1b3Q7aWQmcXVvdDs6IDIsCiAgICAmcXVvdDtyZXN1bHQmcXVvdDs6IHsKICAgICAgICAmcXVvdDttbmVtb25pY3MmcXVvdDs6ICZxdW90O3BlYXIgbG9uZWx5IHBpZWNlIGJhc2UgbG9jYWwgbGlmdCBtYXRlcmlhbCBkYW1wIGFuaW1hbCBzaWVnZSBlcnJvciB0aHJvdyByaWRlIGZsYWcgdmVyc2lvbiBkdW1iIHBhcmVudCBjbGV2ZXIgdXBwZXIgdG9lIGx1bWJlciBncmVhdCB3aWxkIHZpdmlkJnF1b3Q7LAogICAgICAgICZxdW90O3ByaW1hcnlBZGRyZXNzJnF1b3Q7OiAmcXVvdDt2aXRlX2Y2NDZkYzFmMzJiMGVhODgyODliYmZlNGU0MTM4ZDI2ZWRjOWY5ZWFjMzNhOWU1MjkyJnF1b3Q7LAogICAgICAgICZxdW90O2ZpbGVQYXRoJnF1b3Q7OiAmcXVvdDsvVXNlcnMveHh4L0xpYnJhcnkvR1ZpdGUvdGVzdGRhdGEvd2FsbGV0L3ZpdGVfZjY0NmRjMWYzMmIwZWE4ODI4OWJiZmU0ZTQxMzhkMjZlZGM5ZjllYWMzM2E5ZTUyOTImcXVvdDsKICAgIH0KfQo="}})],1)],1),s("h2",{attrs:{id:"wallet-deriveaddressbyindex"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#wallet-deriveaddressbyindex"}},[e._v("#")]),e._v(" "),s("code",[e._v("wallet_deriveAddressByIndex")])]),e._v(" "),s("p",[e._v("Derive address from an entropy file by index. The entropy file must be unlocked or the method will return an error.")]),e._v(" "),s("ul",[s("li",[s("p",[s("strong",[e._v("Parameters")]),e._v(":")]),e._v(" "),s("ul",[s("li",[s("code",[e._v("entropyFile")]),e._v(": "),s("code",[e._v("string")]),e._v("  Absolute path of the entropy file, or primary address if the file is under standard directory.")]),e._v(" "),s("li",[s("code",[e._v("index")]),e._v(": "),s("code",[e._v("uint32")]),e._v("  Index of address")])])]),e._v(" "),s("li",[s("p",[s("strong",[e._v("Returns")]),e._v(": "),s("code",[e._v("DeriveResult")])]),e._v(" "),s("ul",[s("li",[s("code",[e._v("bip44Path")]),e._v(": "),s("code",[e._v("string")]),e._v("  Address's BIP44 path")]),e._v(" "),s("li",[s("code",[e._v("address")]),e._v(": "),s("code",[e._v("address")]),e._v("  Derived address")]),e._v(" "),s("li",[s("code",[e._v("privateKey")]),e._v(": "),s("code",[e._v("base64")]),e._v("  Address's private key in base64 format")])])]),e._v(" "),s("li",[s("p",[s("strong",[e._v("Example")]),e._v(":")])])]),e._v(" "),s("code-group",[s("code-block",{attrs:{title:"Request"}},[s("tm-code-block",{staticClass:"codeblock",attrs:{language:"json",base64:"ewogICAgJnF1b3Q7anNvbnJwYyZxdW90OzogJnF1b3Q7Mi4wJnF1b3Q7LAogICAgJnF1b3Q7aWQmcXVvdDs6IDIsCiAgICAmcXVvdDttZXRob2QmcXVvdDs6ICZxdW90O3dhbGxldF9kZXJpdmVBZGRyZXNzQnlJbmRleCZxdW90OywKICAgICZxdW90O3BhcmFtcyZxdW90OzogWwogICAgCSZxdW90O3ZpdGVfMTUzOTFhYzhiMDlkNGU4YWQ3OGJmZTVmOWY5YWI5NjgyZmU2ODk1NzJmNmY1MzY1NWUmcXVvdDssCiAgICAgICAgMAogICAgXQp9Cg=="}})],1),e._v(" "),s("code-block",{attrs:{title:"Response"}},[s("tm-code-block",{staticClass:"codeblock",attrs:{language:"json",base64:"ewogICAgJnF1b3Q7anNvbnJwYyZxdW90OzogJnF1b3Q7Mi4wJnF1b3Q7LAogICAgJnF1b3Q7aWQmcXVvdDs6IDIsCiAgICAmcXVvdDtyZXN1bHQmcXVvdDs6IHsKICAgICAgICAmcXVvdDtiaXA0NFBhdGgmcXVvdDs6ICZxdW90O20vNDQnLzY2NjY2NicvMScmcXVvdDssCiAgICAgICAgJnF1b3Q7YWRkcmVzcyZxdW90OzogJnF1b3Q7dml0ZV84NDMxYTVhY2I1OTlkYTE5NTI5YzNlOGJkMDk5MDg3YTlkNTUwZmIyOTAzOWRhZGEyOCZxdW90OywKICAgICAgICAmcXVvdDtwcml2YXRlS2V5JnF1b3Q7OiAmcXVvdDtTS3hBV2lidjR1ODV4TWRSQnlDYXZlT3dqdzBiaGVtcEc5L3ppNTlUakpVRVNORk1Odm9FK3dQL1gvWnorVGMzT2JkWlZPNTNVUVQ1QlM4eEFUZWZiZz09JnF1b3Q7CiAgICB9Cn0K"}})],1)],1),s("h2",{attrs:{id:"wallet-deriveaddressbypath"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#wallet-deriveaddressbypath"}},[e._v("#")]),e._v(" "),s("code",[e._v("wallet_deriveAddressByPath")])]),e._v(" "),s("p",[e._v("Derive address from an entropy file by bip44 path. The entropy file must be unlocked or the method will return an error.")]),e._v(" "),s("ul",[s("li",[s("p",[s("strong",[e._v("Parameters")]),e._v(":")]),e._v(" "),s("ul",[s("li",[s("code",[e._v("entropyFile")]),e._v(": "),s("code",[e._v("string")]),e._v("  Absolute path of the entropy file, or primary address if the file is under standard directory.")]),e._v(" "),s("li",[s("code",[e._v("bip44Path")]),e._v(": "),s("code",[e._v("string")]),e._v("  BIP44 path")])])]),e._v(" "),s("li",[s("p",[s("strong",[e._v("Returns")]),e._v(": "),s("code",[e._v("DeriveResult")])]),e._v(" "),s("ul",[s("li",[s("code",[e._v("bip44Path")]),e._v(": "),s("code",[e._v("string")]),e._v("  Address's BIP44 path")]),e._v(" "),s("li",[s("code",[e._v("address")]),e._v(": "),s("code",[e._v("address")]),e._v("  Derived address")]),e._v(" "),s("li",[s("code",[e._v("privateKey")]),e._v(": "),s("code",[e._v("base64")]),e._v("  Address's private key in base64 format")])])]),e._v(" "),s("li",[s("p",[s("strong",[e._v("Example")]),e._v(":")])])]),e._v(" "),s("code-group",[s("code-block",{attrs:{title:"Request"}},[s("tm-code-block",{staticClass:"codeblock",attrs:{language:"json",base64:"ewogICAgJnF1b3Q7anNvbnJwYyZxdW90OzogJnF1b3Q7Mi4wJnF1b3Q7LAogICAgJnF1b3Q7aWQmcXVvdDs6IDIsCiAgICAmcXVvdDttZXRob2QmcXVvdDs6ICZxdW90O3dhbGxldF9kZXJpdmVBZGRyZXNzQnlQYXRoJnF1b3Q7LAogICAgJnF1b3Q7cGFyYW1zJnF1b3Q7OiBbCiAgICAJJnF1b3Q7dml0ZV9iMWMwMGFlN2RmZDViOTM1NTUwYTZlMjUwN2RhMzg4ODZhYmFkMjM1MWFlNzhkNGQ5YSZxdW90OywKICAgICAgICAmcXVvdDttLzQ0Jy82NjY2NjYnLzInLzQnJnF1b3Q7CiAgICBdCn0K"}})],1),e._v(" "),s("code-block",{attrs:{title:"Response"}},[s("tm-code-block",{staticClass:"codeblock",attrs:{language:"json",base64:"ewogICAgJnF1b3Q7anNvbnJwYyZxdW90OzogJnF1b3Q7Mi4wJnF1b3Q7LAogICAgJnF1b3Q7aWQmcXVvdDs6IDIsCiAgICAmcXVvdDtyZXN1bHQmcXVvdDs6IHsKICAgICAgICAmcXVvdDtiaXA0NFBhdGgmcXVvdDs6ICZxdW90O20vNDQnLzY2NjY2NicvMicvNCcmcXVvdDssCiAgICAgICAgJnF1b3Q7YWRkcmVzcyZxdW90OzogJnF1b3Q7dml0ZV9hNWVmYmE0OTMwM2I0NmM0MmM3ZTg5YjZjZjVmYWNkODk3ZDNhNDQ0ZmRiMzdhZjY0ZSZxdW90OywKICAgICAgICAmcXVvdDtwcml2YXRlS2V5JnF1b3Q7OiAmcXVvdDtIU2U0dkIyMGRLVEhZeit4emxBSit3RGhRUVRKbkpmZW1MVGpia1BCYjZxbC9MUytsb2IvNzdOT2RSZmt5M1ZXamFpNGc4MW1HUjhMK2dvUURnRUtvQT09JnF1b3Q7CiAgICB9Cn0K"}})],1)],1),s("h2",{attrs:{id:"wallet-recoverentropyfile"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#wallet-recoverentropyfile"}},[e._v("#")]),e._v(" "),s("code",[e._v("wallet_recoverEntropyFile")])]),e._v(" "),s("p",[e._v("Restore an entropy file from mnemonic phrase")]),e._v(" "),s("ul",[s("li",[s("p",[s("strong",[e._v("Parameters")]),e._v(":")]),e._v(" "),s("ul",[s("li",[s("code",[e._v("mnemonics")]),e._v(": "),s("code",[e._v("string")]),e._v("  Mnemonic phrase")]),e._v(" "),s("li",[s("code",[e._v("passphrase")]),e._v(": "),s("code",[e._v("string")]),e._v("  A passphrase to encrypt the entropy file")])])]),e._v(" "),s("li",[s("p",[s("strong",[e._v("Returns")]),e._v(": "),s("code",[e._v("CreateEntropyFileResponse")])]),e._v(" "),s("ul",[s("li",[s("code",[e._v("mnemonics")]),e._v(": "),s("code",[e._v("string")]),e._v("  Mnemonic phrase")]),e._v(" "),s("li",[s("code",[e._v("primaryAddress")]),e._v(": "),s("code",[e._v("address")]),e._v("  Address at index 0")]),e._v(" "),s("li",[s("code",[e._v("filePath")]),e._v(": "),s("code",[e._v("string")]),e._v("  Absolute path of the entropy file")])])]),e._v(" "),s("li",[s("p",[s("strong",[e._v("Example")]),e._v(":")])])]),e._v(" "),s("code-group",[s("code-block",{attrs:{title:"Request"}},[s("tm-code-block",{staticClass:"codeblock",attrs:{language:"json",base64:"ewogICAgJnF1b3Q7anNvbnJwYyZxdW90OzogJnF1b3Q7Mi4wJnF1b3Q7LAogICAgJnF1b3Q7aWQmcXVvdDs6IDQsCiAgICAmcXVvdDttZXRob2QmcXVvdDs6ICZxdW90O3dhbGxldF9yZWNvdmVyRW50cm9weUZpbGUmcXVvdDssCiAgICAmcXVvdDtwYXJhbXMmcXVvdDs6IFsKICAgICAgICAmcXVvdDt1dGlsaXR5IGNsaWVudCBwb2ludCBlc3RhdGUgYXVjdGlvbiByZWdpb24ganVtcCBoYXQgc2ljayBibGFzdCB0b21vcnJvdyBwb3R0ZXJ5IGRldGVjdCBtaXh0dXJlIGNsb2cgYWJsZSBwZXJzb24gbWF0cml4IGJsYXN0IHZvbHVtZSBkZWNpZGUgYXByaWwgY29uZ3Jlc3MgcmVzb3VyY2UmcXVvdDssCiAgICAgICAgJnF1b3Q7MTIzNDU2JnF1b3Q7CiAgICBdCn0K"}})],1),e._v(" "),s("code-block",{attrs:{title:"Response"}},[s("tm-code-block",{staticClass:"codeblock",attrs:{language:"json",base64:"ewogICAgJnF1b3Q7anNvbnJwYyZxdW90OzogJnF1b3Q7Mi4wJnF1b3Q7LAogICAgJnF1b3Q7aWQmcXVvdDs6IDQsCiAgICAmcXVvdDtyZXN1bHQmcXVvdDs6IHsKICAgICAgICAmcXVvdDttbmVtb25pY3MmcXVvdDs6ICZxdW90O3V0aWxpdHkgY2xpZW50IHBvaW50IGVzdGF0ZSBhdWN0aW9uIHJlZ2lvbiBqdW1wIGhhdCBzaWNrIGJsYXN0IHRvbW9ycm93IHBvdHRlcnkgZGV0ZWN0IG1peHR1cmUgY2xvZyBhYmxlIHBlcnNvbiBtYXRyaXggYmxhc3Qgdm9sdW1lIGRlY2lkZSBhcHJpbCBjb25ncmVzcyByZXNvdXJjZSZxdW90OywKICAgICAgICAmcXVvdDtwcmltYXJ5QWRkcmVzcyZxdW90OzogJnF1b3Q7dml0ZV85ODFiY2E3YTM0OGRlODViZDQzMWI4NDJkNGI2YzE3MDQ0MzM1ZjcxZTVmM2RhNTljMCZxdW90OywKICAgICAgICAmcXVvdDtmaWxlUGF0aCZxdW90OzogJnF1b3Q7L1VzZXJzL3h4eC9MaWJyYXJ5L0dWaXRlL3Rlc3RkYXRhL3dhbGxldC92aXRlXzk4MWJjYTdhMzQ4ZGU4NWJkNDMxYjg0MmQ0YjZjMTcwNDQzMzVmNzFlNWYzZGE1OWMwJnF1b3Q7CiAgICB9Cn0K"}})],1)],1),s("h2",{attrs:{id:"wallet-isunlocked"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#wallet-isunlocked"}},[e._v("#")]),e._v(" "),s("code",[e._v("wallet_isUnlocked")])]),e._v(" "),s("p",[e._v("Check if the entropy file is unlocked")]),e._v(" "),s("ul",[s("li",[s("p",[s("strong",[e._v("Parameters")]),e._v(":")]),e._v(" "),s("ul",[s("li",[s("code",[e._v("entropyFile")]),e._v(": "),s("code",[e._v("string")]),e._v("  Absolute path of the entropy file, or primary address if the file is under standard directory.")])])]),e._v(" "),s("li",[s("p",[s("strong",[e._v("Returns")]),e._v(":")]),e._v(" "),s("ul",[s("li",[s("code",[e._v("bool")]),e._v(": "),s("code",[e._v("true")]),e._v(" means the entropy file is unlocked")])])]),e._v(" "),s("li",[s("p",[s("strong",[e._v("Example")]),e._v(":")])])]),e._v(" "),s("code-group",[s("code-block",{attrs:{title:"Request"}},[s("tm-code-block",{staticClass:"codeblock",attrs:{language:"json",base64:"ewogICAgJnF1b3Q7anNvbnJwYyZxdW90OzogJnF1b3Q7Mi4wJnF1b3Q7LAogICAgJnF1b3Q7aWQmcXVvdDs6IDQsCiAgICAmcXVvdDttZXRob2QmcXVvdDs6ICZxdW90O3dhbGxldF9pc1VubG9ja2VkJnF1b3Q7LAogICAgJnF1b3Q7cGFyYW1zJnF1b3Q7OiBbCiAgICAgICAgJnF1b3Q7dml0ZV8xNTM5MWFjOGIwOWQ0ZThhZDc4YmZlNWY5ZjlhYjk2ODJmZTY4OTU3MmY2ZjUzNjU1ZSZxdW90OwogICAgXQp9Cg=="}})],1),e._v(" "),s("code-block",{attrs:{title:"Response"}},[s("tm-code-block",{staticClass:"codeblock",attrs:{language:"json",base64:"ewogICAgJnF1b3Q7anNvbnJwYyZxdW90OzogJnF1b3Q7Mi4wJnF1b3Q7LAogICAgJnF1b3Q7aWQmcXVvdDs6IDQsCiAgICAmcXVvdDtyZXN1bHQmcXVvdDs6IHRydWUKfQo="}})],1)],1),s("h2",{attrs:{id:"wallet-findaddressinentropyfile"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#wallet-findaddressinentropyfile"}},[e._v("#")]),e._v(" "),s("code",[e._v("wallet_findAddressInEntropyFile")])]),e._v(" "),s("p",[e._v("Find an address in entropy file and return the index. Returns an error if the entropy file is locked or the address is not found in the entropy file.")]),e._v(" "),s("ul",[s("li",[s("p",[s("strong",[e._v("Parameters")]),e._v(":")]),e._v(" "),s("ul",[s("li",[s("code",[e._v("entropyFile")]),e._v(": "),s("code",[e._v("string")]),e._v("  Absolute path of the entropy file, or primary address if the file is under standard directory.")]),e._v(" "),s("li",[s("code",[e._v("address")]),e._v(": "),s("code",[e._v("address")]),e._v("： Address to find")])])]),e._v(" "),s("li",[s("p",[s("strong",[e._v("Returns")]),e._v(": "),s("code",[e._v("FindAddrResponse")])]),e._v(" "),s("ul",[s("li",[s("code",[e._v("entropyFile")]),e._v(": "),s("code",[e._v("string")]),e._v("  Absolute path of the entropy file")]),e._v(" "),s("li",[s("code",[e._v("index")]),e._v(": "),s("code",[e._v("uint32")]),e._v("  Index of address")])])]),e._v(" "),s("li",[s("p",[s("strong",[e._v("Example")]),e._v(":")])])]),e._v(" "),s("code-group",[s("code-block",{attrs:{title:"Request"}},[s("tm-code-block",{staticClass:"codeblock",attrs:{language:"json",base64:"ewogICAgJnF1b3Q7anNvbnJwYyZxdW90OzogJnF1b3Q7Mi4wJnF1b3Q7LAogICAgJnF1b3Q7aWQmcXVvdDs6IDQsCiAgICAmcXVvdDttZXRob2QmcXVvdDs6ICZxdW90O3dhbGxldF9maW5kQWRkcmVzc0luRW50cm9weUZpbGUmcXVvdDssCiAgICAmcXVvdDtwYXJhbXMmcXVvdDs6IFsKICAgICAgICAmcXVvdDsvVXNlcnMveHh4L0xpYnJhcnkvR1ZpdGUvdGVzdGRhdGEvd2FsbGV0L3ZpdGVfMTUzOTFhYzhiMDlkNGU4YWQ3OGJmZTVmOWY5YWI5NjgyZmU2ODk1NzJmNmY1MzY1NWUmcXVvdDssCiAgICAgICAgJnF1b3Q7dml0ZV8zZmQ0MWJiNmJhNGYxNWQ1ZTc0MjE0YTE2MTUzZmYyZjVhYmNlNjdmNzNkYzBkYzA3YiZxdW90OwogICAgXQp9Cg=="}})],1),e._v(" "),s("code-block",{attrs:{title:"Response"}},[s("tm-code-block",{staticClass:"codeblock",attrs:{language:"json",base64:"ewogICAgJnF1b3Q7anNvbnJwYyZxdW90OzogJnF1b3Q7Mi4wJnF1b3Q7LAogICAgJnF1b3Q7aWQmcXVvdDs6IDQsCiAgICAmcXVvdDtyZXN1bHQmcXVvdDs6IHsKICAgICAgICAmcXVvdDtlbnRyb3B5RmlsZSZxdW90OzogJnF1b3Q7L1VzZXJzL3h4eC9MaWJyYXJ5L0dWaXRlL3Rlc3RkYXRhL3dhbGxldC92aXRlXzE1MzkxYWM4YjA5ZDRlOGFkNzhiZmU1ZjlmOWFiOTY4MmZlNjg5NTcyZjZmNTM2NTVlJnF1b3Q7LAogICAgICAgICZxdW90O2luZGV4JnF1b3Q7OiA4NAogICAgfQp9Cg=="}})],1)],1),s("h2",{attrs:{id:"wallet-findaddress"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#wallet-findaddress"}},[e._v("#")]),e._v(" "),s("code",[e._v("wallet_findAddress")])]),e._v(" "),s("p",[e._v("Find an address in current unlocked entropy file and return the index. Returns an error if the address is not found.")]),e._v(" "),s("ul",[s("li",[s("p",[s("strong",[e._v("Parameters")]),e._v(":")]),e._v(" "),s("ul",[s("li",[s("code",[e._v("address")]),e._v(": "),s("code",[e._v("address")]),e._v("： Address to find")])])]),e._v(" "),s("li",[s("p",[s("strong",[e._v("Returns")]),e._v(": "),s("code",[e._v("FindAddrResponse")])]),e._v(" "),s("ul",[s("li",[s("code",[e._v("entropyFile")]),e._v(": "),s("code",[e._v("string")]),e._v("  Absolute path of the entropy file")]),e._v(" "),s("li",[s("code",[e._v("index")]),e._v(": "),s("code",[e._v("uint32")]),e._v("  Index of address")])])]),e._v(" "),s("li",[s("p",[s("strong",[e._v("Example")]),e._v(":")])])]),e._v(" "),s("code-group",[s("code-block",{attrs:{title:"Request"}},[s("tm-code-block",{staticClass:"codeblock",attrs:{language:"json",base64:"ewogICAgJnF1b3Q7anNvbnJwYyZxdW90OzogJnF1b3Q7Mi4wJnF1b3Q7LAogICAgJnF1b3Q7aWQmcXVvdDs6IDQsCiAgICAmcXVvdDttZXRob2QmcXVvdDs6ICZxdW90O3dhbGxldF9maW5kQWRkcmVzcyZxdW90OywKICAgICZxdW90O3BhcmFtcyZxdW90OzogWwogICAgICAgICZxdW90O3ZpdGVfMTUzOTFhYzhiMDlkNGU4YWQ3OGJmZTVmOWY5YWI5NjgyZmU2ODk1NzJmNmY1MzY1NWUmcXVvdDsKICAgIF0KfQo="}})],1),e._v(" "),s("code-block",{attrs:{title:"Response"}},[s("tm-code-block",{staticClass:"codeblock",attrs:{language:"json",base64:"ewogICAgJnF1b3Q7anNvbnJwYyZxdW90OzogJnF1b3Q7Mi4wJnF1b3Q7LAogICAgJnF1b3Q7aWQmcXVvdDs6IDQsCiAgICAmcXVvdDtyZXN1bHQmcXVvdDs6IHsKICAgICAgICAmcXVvdDtlbnRyb3B5RmlsZSZxdW90OzogJnF1b3Q7L1VzZXJzL3h4eC9MaWJyYXJ5L0dWaXRlL3Rlc3RkYXRhL3dhbGxldC92aXRlXzE1MzkxYWM4YjA5ZDRlOGFkNzhiZmU1ZjlmOWFiOTY4MmZlNjg5NTcyZjZmNTM2NTVlJnF1b3Q7LAogICAgICAgICZxdW90O2luZGV4JnF1b3Q7OiA4NAogICAgfQp9Cg=="}})],1)],1),s("h2",{attrs:{id:"wallet-createtransaction"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#wallet-createtransaction"}},[e._v("#")]),e._v(" "),s("code",[e._v("wallet_createTransaction")])]),e._v(" "),s("p",[e._v("Send a transaction with the address in entropy file. If entropy file is not specified, this method will search in all entropy files with the passphrase for the address.")]),e._v(" "),s("blockquote",[s("p",[e._v("Note: Despite "),s("code",[e._v("entropyFile")]),e._v(" can be omitted, "),s("code",[e._v("passphrase")]),e._v(" is a mandatory field to unlock the entropy file")])]),e._v(" "),s("ul",[s("li",[s("p",[s("strong",[e._v("Parameters")]),e._v(": "),s("code",[e._v("CreateTransferTxParms")])]),e._v(" "),s("ul",[s("li",[s("code",[e._v("entropyFile")]),e._v(": "),s("code",[e._v("string")]),e._v("  Absolute path of the entropy file, or primary address if the file is under standard directory. Optional")]),e._v(" "),s("li",[s("code",[e._v("address")]),e._v(": "),s("code",[e._v("address")]),e._v("  Address of sending account. Mandatory")]),e._v(" "),s("li",[s("code",[e._v("toAddress")]),e._v(": "),s("code",[e._v("address")]),e._v("  Address of recipient. Mandatory")]),e._v(" "),s("li",[s("code",[e._v("tokenId")]),e._v(": "),s("code",[e._v("tokenId")]),e._v("  Token id. Mandatory")]),e._v(" "),s("li",[s("code",[e._v("passphrase")]),e._v(": "),s("code",[e._v("string")]),e._v("  Entropy file passphrase. Mandatory")]),e._v(" "),s("li",[s("code",[e._v("amount")]),e._v(": "),s("code",[e._v("bigint string")]),e._v("  Transfer amount. Mandatory")]),e._v(" "),s("li",[s("code",[e._v("data")]),e._v(": "),s("code",[e._v("base64")]),e._v("  Transaction data. Optional")]),e._v(" "),s("li",[s("code",[e._v("difficulty")]),e._v(": "),s("code",[e._v("bigint string")]),e._v("  PoW difficulty. Optional")])])]),e._v(" "),s("li",[s("p",[s("strong",[e._v("Returns")]),e._v(":")]),e._v(" "),s("ul",[s("li",[s("code",[e._v("hash")]),e._v("  Hash of the account block that has been sent")])])]),e._v(" "),s("li",[s("p",[s("strong",[e._v("Example")]),e._v(":")])])]),e._v(" "),s("code-group",[s("code-block",{attrs:{title:"Request"}},[s("tm-code-block",{staticClass:"codeblock",attrs:{language:"json",base64:"ewogICAgJnF1b3Q7anNvbnJwYyZxdW90OzogJnF1b3Q7Mi4wJnF1b3Q7LAogICAgJnF1b3Q7aWQmcXVvdDs6IDAsCiAgICAmcXVvdDttZXRob2QmcXVvdDs6ICZxdW90O3dhbGxldF9jcmVhdGVUcmFuc2FjdGlvbiZxdW90OywKICAgICZxdW90O3BhcmFtcyZxdW90OzogW3sKICAgICAgICAmcXVvdDtlbnRyb3B5RmlsZSZxdW90OzogJnF1b3Q7dml0ZV9lNDFiZTU3ZDM4Yzc5Njk4NDk1MmZhZDYxOGE5YmM5MTYzNzMyOWI1MjU1Y2IxODkwNiZxdW90OywKICAgICAgICAmcXVvdDthZGRyZXNzJnF1b3Q7OiAmcXVvdDt2aXRlX2U0MWJlNTdkMzhjNzk2OTg0OTUyZmFkNjE4YTliYzkxNjM3MzI5YjUyNTVjYjE4OTA2JnF1b3Q7LAogICAgICAgICZxdW90O3RvQWRkcmVzcyZxdW90OzogJnF1b3Q7dml0ZV8wODZmM2RlY2Q5ZDA4Y2MwNjE2MmIyMDQ4MmVhNmVmZjMyMzY2N2Y0YmY3ZmNiZTdiZiZxdW90OywKICAgICAgICAmcXVvdDt0b2tlbklkJnF1b3Q7OiAmcXVvdDt0dGlfNTY0OTU0NDUyMDU0NGY0YjQ1NGU2ZTQwJnF1b3Q7LAogICAgICAgICZxdW90O3Bhc3NwaHJhc2UmcXVvdDs6ICZxdW90OzEyMyZxdW90OywKICAgICAgICAmcXVvdDthbW91bnQmcXVvdDs6ICZxdW90OzEwMDAwMDAwMDAwMDAwMDAwMDAwJnF1b3Q7CiAgICB9XQp9Cg=="}})],1),e._v(" "),s("code-block",{attrs:{title:"Response"}},[s("tm-code-block",{staticClass:"codeblock",attrs:{language:"json",base64:"ewogICAgJnF1b3Q7anNvbnJwYyZxdW90OzogJnF1b3Q7Mi4wJnF1b3Q7LAogICAgJnF1b3Q7aWQmcXVvdDs6IDAsCiAgICAmcXVvdDtyZXN1bHQmcXVvdDs6ICZxdW90OzNkY2EzZDk2ZDBjMGQxYmIwOWQxZjNmZjllNDc0M2E4OGQ0MjdlNWMzOGU4NTNmOTI4YjQ1MWYyMTgzZmYwZjMmcXVvdDsKfQo="}})],1)],1),s("h2",{attrs:{id:"wallet-addentropystore"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#wallet-addentropystore"}},[e._v("#")]),e._v(" "),s("code",[e._v("wallet_addEntropyStore")])]),e._v(" "),s("p",[e._v("Install a new entropy file on the node. This method is used to add an entropy file not in standard directory.")]),e._v(" "),s("ul",[s("li",[s("p",[s("strong",[e._v("Parameters")]),e._v(":")]),e._v(" "),s("ul",[s("li",[s("code",[e._v("entropyFile")]),e._v(": "),s("code",[e._v("string")]),e._v("  Absolute path of the entropy file, or primary address if the file is under standard directory.")])])]),e._v(" "),s("li",[s("p",[s("strong",[e._v("Returns")]),e._v(": null")])]),e._v(" "),s("li",[s("p",[s("strong",[e._v("Example")]),e._v(":")])])]),e._v(" "),s("code-group",[s("code-block",{attrs:{title:"Request"}},[s("tm-code-block",{staticClass:"codeblock",attrs:{language:"json",base64:"ewogICAgJnF1b3Q7anNvbnJwYyZxdW90OzogJnF1b3Q7Mi4wJnF1b3Q7LAogICAgJnF1b3Q7aWQmcXVvdDs6IDAsCiAgICAmcXVvdDttZXRob2QmcXVvdDs6ICZxdW90O3dhbGxldF9hZGRFbnRyb3B5U3RvcmUmcXVvdDssCiAgICAmcXVvdDtwYXJhbXMmcXVvdDs6IFsKICAgICAgICAmcXVvdDsvVXNlcnMveHh4L0xpYnJhcnkvR1ZpdGUvdGVzdGRhdGEvYW5vdGhlckZvbGRlci92aXRlXzA4NmYzZGVjZDlkMDhjYzA2MTYyYjIwNDgyZWE2ZWZmMzIzNjY3ZjRiZjdmY2JlN2JmJnF1b3Q7CiAgICBdCn0K"}})],1),e._v(" "),s("code-block",{attrs:{title:"Response"}},[s("tm-code-block",{staticClass:"codeblock",attrs:{language:"json",base64:"ewogICAgJnF1b3Q7anNvbnJwYyZxdW90OzogJnF1b3Q7Mi4wJnF1b3Q7LAogICAgJnF1b3Q7aWQmcXVvdDs6IDAsCiAgICAmcXVvdDtyZXN1bHQmcXVvdDs6IG51bGwKfQo="}})],1)],1),s("h2",{attrs:{id:"wallet-signdata"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#wallet-signdata"}},[e._v("#")]),e._v(" "),s("code",[e._v("wallet_signData")])]),e._v(" "),s("p",[e._v("Sign a 32 byte hex string with private key of the address. The address must be found in the current unlocked entropy file or the method will return an error.")]),e._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",[e._v("The common use case of this method is to sign an account block hash to obtain the signature of the block")])]),e._v(" "),s("ul",[s("li",[s("p",[s("strong",[e._v("Parameters")]),e._v(":")]),e._v(" "),s("ul",[s("li",[s("code",[e._v("address")]),e._v(": "),s("code",[e._v("address")]),e._v("  Signing address")]),e._v(" "),s("li",[s("code",[e._v("hexMsg")]),e._v(": "),s("code",[e._v("string")]),e._v("  32 byte hex message or account block hash")])])]),e._v(" "),s("li",[s("p",[s("strong",[e._v("Returns")]),e._v(": "),s("code",[e._v("HexSignedTuple")])]),e._v(" "),s("ul",[s("li",[s("code",[e._v("message")]),e._v(": "),s("code",[e._v("string")]),e._v("  Original message")]),e._v(" "),s("li",[s("code",[e._v("signedData")]),e._v(": "),s("code",[e._v("string")]),e._v("  64-byte signature in hex format")]),e._v(" "),s("li",[s("code",[e._v("pubkey")]),e._v(": "),s("code",[e._v("string")]),e._v("  Public key in hex format")])])]),e._v(" "),s("li",[s("p",[s("strong",[e._v("Example")]),e._v(":")])])]),e._v(" "),s("code-group",[s("code-block",{attrs:{title:"Request"}},[s("tm-code-block",{staticClass:"codeblock",attrs:{language:"json",base64:"ewogICAgJnF1b3Q7anNvbnJwYyZxdW90OzogJnF1b3Q7Mi4wJnF1b3Q7LAogICAgJnF1b3Q7aWQmcXVvdDs6IDAsCiAgICAmcXVvdDttZXRob2QmcXVvdDs6ICZxdW90O3dhbGxldF9zaWduRGF0YSZxdW90OywKICAgICZxdW90O3BhcmFtcyZxdW90OzogWyZxdW90O3ZpdGVfZTQxYmU1N2QzOGM3OTY5ODQ5NTJmYWQ2MThhOWJjOTE2MzczMjliNTI1NWNiMTg5MDYmcXVvdDssICZxdW90O2UwMzlkZmMwOGY1YzVlMTNhNDgwZGM1OThmOWVjNzU3OTdiM2FjNzIxZWY3YWYzNzE1MDljZWRkNWNjNjQ1NDImcXVvdDtdCn0K"}})],1),e._v(" "),s("code-block",{attrs:{title:"Response"}},[s("tm-code-block",{staticClass:"codeblock",attrs:{language:"json",base64:"ewogICAgJnF1b3Q7anNvbnJwYyZxdW90OzogJnF1b3Q7Mi4wJnF1b3Q7LAogICAgJnF1b3Q7aWQmcXVvdDs6IDAsCiAgICAmcXVvdDtyZXN1bHQmcXVvdDs6IHsKICAgICAgICAmcXVvdDttZXNzYWdlJnF1b3Q7OiAmcXVvdDtlMDM5ZGZjMDhmNWM1ZTEzYTQ4MGRjNTk4ZjllYzc1Nzk3YjNhYzcyMWVmN2FmMzcxNTA5Y2VkZDVjYzY0NTQyJnF1b3Q7LAogICAgICAgICZxdW90O3NpZ25lZERhdGEmcXVvdDs6ICZxdW90O2NiZTUxY2RlMDEwYjljMThhY2EzM2JkMGNkMDU1NTRhZjU0MTBhMjNmMDc3NzgyZmY3ZTlhN2IwMzk0ODZjMTYxYWE4YTdhMTQ4YWQzZTI5ZDU1MzIxZWYyMDEyYzRkM2RjYTY3OWQwN2EwZDBjODNjNDdkMGU2NWJkOWYxZDBjJnF1b3Q7LAogICAgICAgICZxdW90O3B1YmtleSZxdW90OzogJnF1b3Q7NjYwMzI5YmZmYzJmMzI4Y2YxODNlMWI3Y2FlM2Y4YjY1NDU1NDhmOGU5MTNhZGFiMzIyOTQ5MjczMmUwYmE1NiZxdW90OwogICAgfQp9Cg=="}})],1)],1)],1)}),[],!1,null,null,null);t.default=a.exports}}]);