(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{606:function(t,s,a){t.exports=a.p+"assets/img/nodes-01.6ab4a594.png"},607:function(t,s,a){t.exports=a.p+"assets/img/nodes-02.364ce196.png"},608:function(t,s,a){t.exports=a.p+"assets/img/nodes-03.a5cb55b3.png"},609:function(t,s,a){t.exports=a.p+"assets/img/nodes-04.9a975666.jpg"},610:function(t,s,a){t.exports=a.p+"assets/img/nodes-05.7a2578c6.jpg"},753:function(t,s,a){"use strict";a.r(s);var e=a(0),i=Object(e.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"nodes"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#nodes"}},[t._v("#")]),t._v(" Nodes")]),t._v(" "),e("h2",{attrs:{id:"full-node"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#full-node"}},[t._v("#")]),t._v(" Full Node")]),t._v(" "),e("p",[t._v("In Vite network, a full node is responsible for maintaining a complete copy of ledger, sending or receiving transactions, and verifying all transactions in the network. Full nodes can also participate in SBP election and voting. A full node can expose HTTP/WebSocket APIs externally and has a command line interface locally.")]),t._v(" "),e("h3",{attrs:{id:"registration"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#registration"}},[t._v("#")]),t._v(" Registration")]),t._v(" "),e("p",[t._v("Registering a full node is permission-less. The registration address shall have "),e("strong",[t._v("10,000 VITE")]),t._v(" for staking, then send a "),e("a",{attrs:{href:"https://x.vite.net/walletFullNode",target:"_blank",rel:"noopener noreferrer"}},[t._v("registration transaction"),e("OutboundLink")],1),t._v(" and wait until the transaction is confirmed.")]),t._v(" "),e("p",[t._v("The 10k VITE will be locked up for "),e("strong",[t._v("30 days (2592000 snapshot blocks)")]),t._v(".")]),t._v(" "),e("p",[t._v("After the lock-up period expires, the node owner (registration address) can cancel the registration and retrieve the locked fund through a Cancel Registration transaction. The cancelled full node will be removed from the network list after the transaction is confirmed.")]),t._v(" "),e("p",[t._v("For safety purpose, node owners are recommended to use 2 separate Vite addresses for registration and withdrawing rewards respectively.")]),t._v(" "),e("p",[e("img",{attrs:{src:a(606),alt:""}})]),t._v(" "),e("h3",{attrs:{id:"rewards"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#rewards"}},[t._v("#")]),t._v(" Rewards")]),t._v(" "),e("ul",[e("li",[t._v('A Snapshot Block Producer (SBP) named "FullNode.Pool" has been set up and maintained by Vite Labs. It is backed by 10 million VITE votes from the Vite Foundation. All income for "FullNode.Pool", including block creation rewards and voting rewards, will be shared with all eligible full nodes.')]),t._v(" "),e("li",[t._v("The size of the full node rewards pool varies on a daily basis. It will determine the incentives provided by the Vite Foundation. The calculation is as follows:\n"),e("ol",[e("li",[t._v("On a daily basis, when the size of the full node rewards pool ( x ) is no more than 8,000 VITE, an equal mount will be provided by the Vite Foundation.")])]),t._v(" "),e("p",{staticClass:"katex-block"},[e("span",{staticClass:"katex-display"},[e("span",{staticClass:"katex"},[e("span",{staticClass:"katex-mathml"},[e("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"}},[e("semantics",[e("mrow",[e("mi",[t._v("y")]),e("mo",[t._v("=")]),e("mi",[t._v("x")]),e("mrow",[e("mo",{attrs:{fence:"true"}},[t._v("{")]),e("mn",[t._v("0")]),e("mo",[t._v("≤")]),e("mi",[t._v("x")]),e("mo",[t._v("≤")]),e("mn",[t._v("8000")]),e("mo",{attrs:{fence:"true"}},[t._v("}")])],1)],1),e("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("y=x \\left\\{ 0 \\leq x \\leq 8000 \\right\\}\n")])],1)],1)],1),e("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[e("span",{staticClass:"base"},[e("span",{staticClass:"strut",staticStyle:{height:"0.625em","vertical-align":"-0.19444em"}}),e("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.03588em"}},[t._v("y")]),e("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2777777777777778em"}}),e("span",{staticClass:"mrel"},[t._v("=")]),e("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2777777777777778em"}})]),e("span",{staticClass:"base"},[e("span",{staticClass:"strut",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),e("span",{staticClass:"mord mathnormal"},[t._v("x")]),e("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.16666666666666666em"}}),e("span",{staticClass:"minner"},[e("span",{staticClass:"mopen delimcenter",staticStyle:{top:"0em"}},[t._v("{")]),e("span",{staticClass:"mord"},[t._v("0")]),e("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2777777777777778em"}}),e("span",{staticClass:"mrel"},[t._v("≤")]),e("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2777777777777778em"}}),e("span",{staticClass:"mord mathnormal"},[t._v("x")]),e("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2777777777777778em"}}),e("span",{staticClass:"mrel"},[t._v("≤")]),e("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2777777777777778em"}}),e("span",{staticClass:"mord"},[t._v("8")]),e("span",{staticClass:"mord"},[t._v("0")]),e("span",{staticClass:"mord"},[t._v("0")]),e("span",{staticClass:"mord"},[t._v("0")]),e("span",{staticClass:"mclose delimcenter",staticStyle:{top:"0em"}},[t._v("}")])])])])])])]),t._v(" "),e("ol",{attrs:{start:"2"}},[e("li",[t._v("On a daily basis, when the size of the full node rewards pool ( x ) is above 8,000 VITE, the incentives are determined by the following equation.")])]),t._v(" "),e("p",{staticClass:"katex-block"},[e("span",{staticClass:"katex-display"},[e("span",{staticClass:"katex"},[e("span",{staticClass:"katex-mathml"},[e("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"}},[e("semantics",[e("mrow",[e("mi",[t._v("y")]),e("mo",[t._v("=")]),e("mrow",[e("mo",{attrs:{fence:"true"}},[t._v("(")]),e("mi",[t._v("x")]),e("mo",[t._v("−")]),e("mn",[t._v("8000")]),e("mo",{attrs:{fence:"true"}},[t._v(")")])],1),e("mo",[t._v("×")]),e("mfrac",[e("mn",[t._v("8000")]),e("mi",[t._v("x")])],1),e("mo",[t._v("+")]),e("mn",[t._v("8000")]),e("mrow",[e("mo",{attrs:{fence:"true"}},[t._v("{")]),e("mi",[t._v("x")]),e("mo",[t._v(">")]),e("mn",[t._v("8000")]),e("mo",{attrs:{fence:"true"}},[t._v("}")])],1)],1),e("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("y=\\left( x - 8000 \\right) \\times \\frac{8000}{x} + 8000 \\left\\{ x \\gt 8000 \\right\\}\n")])],1)],1)],1),e("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[e("span",{staticClass:"base"},[e("span",{staticClass:"strut",staticStyle:{height:"0.625em","vertical-align":"-0.19444em"}}),e("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.03588em"}},[t._v("y")]),e("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2777777777777778em"}}),e("span",{staticClass:"mrel"},[t._v("=")]),e("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2777777777777778em"}})]),e("span",{staticClass:"base"},[e("span",{staticClass:"strut",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),e("span",{staticClass:"minner"},[e("span",{staticClass:"mopen delimcenter",staticStyle:{top:"0em"}},[t._v("(")]),e("span",{staticClass:"mord mathnormal"},[t._v("x")]),e("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222222222222222em"}}),e("span",{staticClass:"mbin"},[t._v("−")]),e("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222222222222222em"}}),e("span",{staticClass:"mord"},[t._v("8")]),e("span",{staticClass:"mord"},[t._v("0")]),e("span",{staticClass:"mord"},[t._v("0")]),e("span",{staticClass:"mord"},[t._v("0")]),e("span",{staticClass:"mclose delimcenter",staticStyle:{top:"0em"}},[t._v(")")])]),e("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222222222222222em"}}),e("span",{staticClass:"mbin"},[t._v("×")]),e("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222222222222222em"}})]),e("span",{staticClass:"base"},[e("span",{staticClass:"strut",staticStyle:{height:"2.00744em","vertical-align":"-0.686em"}}),e("span",{staticClass:"mord"},[e("span",{staticClass:"mopen nulldelimiter"}),e("span",{staticClass:"mfrac"},[e("span",{staticClass:"vlist-t vlist-t2"},[e("span",{staticClass:"vlist-r"},[e("span",{staticClass:"vlist",staticStyle:{height:"1.32144em"}},[e("span",{staticStyle:{top:"-2.314em"}},[e("span",{staticClass:"pstrut",staticStyle:{height:"3em"}}),e("span",{staticClass:"mord"},[e("span",{staticClass:"mord mathnormal"},[t._v("x")])])]),e("span",{staticStyle:{top:"-3.23em"}},[e("span",{staticClass:"pstrut",staticStyle:{height:"3em"}}),e("span",{staticClass:"frac-line",staticStyle:{"border-bottom-width":"0.04em"}})]),e("span",{staticStyle:{top:"-3.677em"}},[e("span",{staticClass:"pstrut",staticStyle:{height:"3em"}}),e("span",{staticClass:"mord"},[e("span",{staticClass:"mord"},[t._v("8")]),e("span",{staticClass:"mord"},[t._v("0")]),e("span",{staticClass:"mord"},[t._v("0")]),e("span",{staticClass:"mord"},[t._v("0")])])])]),e("span",{staticClass:"vlist-s"},[t._v("​")])]),e("span",{staticClass:"vlist-r"},[e("span",{staticClass:"vlist",staticStyle:{height:"0.686em"}},[e("span")])])])]),e("span",{staticClass:"mclose nulldelimiter"})]),e("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222222222222222em"}}),e("span",{staticClass:"mbin"},[t._v("+")]),e("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222222222222222em"}})]),e("span",{staticClass:"base"},[e("span",{staticClass:"strut",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),e("span",{staticClass:"mord"},[t._v("8")]),e("span",{staticClass:"mord"},[t._v("0")]),e("span",{staticClass:"mord"},[t._v("0")]),e("span",{staticClass:"mord"},[t._v("0")]),e("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.16666666666666666em"}}),e("span",{staticClass:"minner"},[e("span",{staticClass:"mopen delimcenter",staticStyle:{top:"0em"}},[t._v("{")]),e("span",{staticClass:"mord mathnormal"},[t._v("x")]),e("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2777777777777778em"}}),e("span",{staticClass:"mrel"},[t._v(">")]),e("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2777777777777778em"}}),e("span",{staticClass:"mord"},[t._v("8")]),e("span",{staticClass:"mord"},[t._v("0")]),e("span",{staticClass:"mord"},[t._v("0")]),e("span",{staticClass:"mord"},[t._v("0")]),e("span",{staticClass:"mclose delimcenter",staticStyle:{top:"0em"}},[t._v("}")])])])])])])])]),t._v(" "),e("li",[t._v("Rewards will be shared equally by all live (uptime is above 90%) full nodes in the pool.")])]),t._v(" "),e("p",[t._v("The following graph provides a visualization on how incentives are calculated.")]),t._v(" "),e("p",[e("img",{attrs:{src:a(607),alt:""}})]),t._v(" "),e("p",[t._v("For more details please refer to "),e("a",{attrs:{href:"https://medium.com/vitelabs/vite-incentive-plan-full-node-reward-program-upgrade-c6e96c6405bb",target:"_blank",rel:"noopener noreferrer"}},[t._v("Announcement of Full Node Reward Upgrade"),e("OutboundLink")],1),t._v(".")]),t._v(" "),e("div",{staticClass:"custom-block warning"},[e("p",{staticClass:"custom-block-title"},[t._v("Distinct IP Required")]),t._v(" "),e("p",[t._v("Note that if multiple full nodes run with the same IP address, only one node can get rewards. Do NOT setup your nodes with the same IP address!")])]),t._v(" "),e("h2",{attrs:{id:"snapshot-block-producer"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#snapshot-block-producer"}},[t._v("#")]),t._v(" Snapshot Block Producer")]),t._v(" "),e("p",[t._v("A Snapshot Block Producer (SBP) is a delegated node in the Vite network. The primary function of SBP is to secure the network by producing snapshot blocks that store a state snapshot of the Vite ledger. This includes the balance of the account, the Merkle root of the contract state, and the hash of the last block of each account chain. To find out how an SBP works, please refer to "),e("RouterLink",{attrs:{to:"/vite-basics/consensus/snapshot-block-producer.html#how-an-sbp-works"}},[t._v("Consensus")]),t._v(".")],1),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",[t._v("Before you continue reading, please see the "),e("RouterLink",{attrs:{to:"/vite-basics/network/setup.html"}},[t._v("setup guide")]),t._v(" on how to install gvite.")],1)]),t._v(" "),e("h3",{attrs:{id:"configuration"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#configuration"}},[t._v("#")]),t._v(" Configuration")]),t._v(" "),e("p",[t._v("Create a wallet as explained "),e("RouterLink",{attrs:{to:"/vite-basics/network/rpc-ipc.html#create-wallet"}},[t._v("here")]),t._v(" and append 4 properties in "),e("strong",[t._v("node_config.json")])],1),t._v(" "),e("ul",[e("li",[t._v("Set "),e("code",[t._v("Miner")]),t._v(" as "),e("code",[t._v("true")])]),t._v(" "),e("li",[t._v("Set "),e("code",[t._v("CoinBase")]),t._v(" in format of "),e("code",[t._v("index:address")]),t._v(". For example: "),e("code",[t._v("0:vite_f1c2d944b1e5b8cbfcd5f90f94a0e877beafeced1f331d9acf")]),t._v(".")]),t._v(" "),e("li",[t._v("Set "),e("code",[t._v("EntropyStorePath")]),t._v(" as your mining address. For example: "),e("code",[t._v("vite_f1c2d944b1e5b8cbfcd5f90f94a0e877beafeced1f331d9acf")]),t._v(".")]),t._v(" "),e("li",[t._v("Set "),e("code",[t._v("EntropyStorePassword")]),t._v(" as your keystore password corresponding to above address.")])]),t._v(" "),e("h3",{attrs:{id:"registration-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#registration-2"}},[t._v("#")]),t._v(" Registration")]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",[t._v("Registering a new SBP requires staking 1,000,000 VITE. Please ensure you have the amount in your account.")])]),t._v(" "),e("p",[t._v("Log in "),e("a",{attrs:{href:"https://x.vite.net/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Vite Web Wallet"),e("OutboundLink")],1),t._v(" and navigate to "),e("strong",[t._v("SBP Registration")]),t._v(" page.")]),t._v(" "),e("p",[t._v("Fill in "),e("strong",[t._v("Node Name")]),t._v(" and "),e("strong",[t._v("Block Creation Address")]),t._v(".")]),t._v(" "),e("p",[t._v("Please note that "),e("strong",[t._v("Block Creation Address")]),t._v(" is the CoinBase address you configured above and is only responsible for producing new blocks. Do NOT use your "),e("strong",[t._v("Staking Address")]),t._v(" as "),e("strong",[t._v("Block Creation Address")]),t._v(".")]),t._v(" "),e("p",[e("img",{attrs:{src:a(608),alt:""}})]),t._v(" "),e("p",[t._v("After registration of the SBP, you may change the reward withdraw address in the following screens.")]),t._v(" "),e("p",[e("img",{attrs:{src:a(609),alt:""}}),t._v(" "),e("img",{attrs:{src:a(610),alt:""}})]),t._v(" "),e("p",[e("strong",[t._v("SBP Name")])]),t._v(" "),e("p",[t._v("Please choose your SBP name carefully. Once registered the SBP name cannot be changed anymore. Use an interesting name to gain recognition from the community and draw votes.")]),t._v(" "),e("p",[e("strong",[t._v("SBP Ranking List")])]),t._v(" "),e("p",[t._v("Visit "),e("a",{attrs:{href:"https://vitescan.io/sbps",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://vitescan.io/sbps"),e("OutboundLink")],1),t._v(" for the ranking list.")])])}),[],!1,null,null,null);s.default=i.exports}}]);