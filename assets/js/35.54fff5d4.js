(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{599:function(t,s,a){t.exports=a.p+"assets/img/snapshot-chain-1.34d8b862.png"},600:function(t,s,a){t.exports=a.p+"assets/img/snapshot-chain-2.069379ba.png"},728:function(t,s,a){"use strict";a.r(s);var i=a(0),e=Object(i.a)({},(function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[i("h1",{attrs:{id:"snapshot-chain"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#snapshot-chain"}},[t._v("#")]),t._v(" Snapshot Chain")]),t._v(" "),i("p",[t._v("The Snapshot Chain was invented to address at least two deficiencies in the block-lattice ledger structure:")]),t._v(" "),i("ul",[i("li",[i("p",[t._v("In general, the security of a chain increases as it grows longer, because for any given transaction, the probability of a successful rollback drops with more and more blocks chained after said transaction. However, in a block-lattice ledger, each account chain stops growing if there are no new transactions involving the account owner.")])]),t._v(" "),i("li",[i("p",[t._v("To prevent spamming attacks, the network needs to ration resources for transactions. To do so, the network must understand the amount of resources currently being consumed per account -- that is, the throughput of each account, measured by TPS (transactions-per-second). The block-lattice ledger lacks a global clock, thereby making it impossible to measure said TPS. Now, one way to throttle transactions is making every transaction compute PoW, but this just means every account will have the same quota for throughput. But even with the PoW, spamming can still happen with precomputed PoWs.")])])]),t._v(" "),i("h2",{attrs:{id:"what-is-snapshot-chain"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#what-is-snapshot-chain"}},[t._v("#")]),t._v(" What is Snapshot Chain")]),t._v(" "),i("p",[t._v('The Snapshot Chain is a chain of blocks (called "snapshot blocks"), each recording the balance of all accounts and the hash of the latest block in all account-chains. In a Delegated Proof-Of-Stake (DPoS) consensus algorithm, one node in a delegated nodes group ("consensus group") gets randomly selected to produce such a snapshot block in a given time period. This means when the selected node sees forks in any account-chain, it will deem one of the forks as correct and include it in the snapshot block.')]),t._v(" "),i("p",[i("img",{attrs:{src:a(599),alt:"Snapshot Chain"}})]),t._v(" "),i("h2",{attrs:{id:"transaction-confirmations"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#transaction-confirmations"}},[t._v("#")]),t._v(" Transaction confirmations")]),t._v(" "),i("p",[t._v('A block in the account chains can be considered as confirmed as soon as it gets included in a snapshot block, or "snapshotted in the Snapshot Chain." Once a transaction is confirmed, it won\'t be rolled back even if the relevant user makes a longer fork on the account chain. When a transaction gets included in x number of blocks in the Snapshot Chain, then this transaction will be considered to have been confirmed x times by the network. The ability to forge blocks after a certain transaction becomes weaker with time. For most transactions, once the number of confirmations exceeds '),i("span",{staticClass:"katex"},[i("span",{staticClass:"katex-mathml"},[i("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[i("semantics",[i("mrow",[i("mo",{attrs:{stretchy:"false"}},[t._v("(")]),i("mn",[t._v("2")]),i("mi",{attrs:{mathvariant:"normal"}},[t._v("/")]),i("mn",[t._v("3")]),i("mo",[t._v("×")]),i("mi",[t._v("D")]),i("mi",[t._v("e")]),i("mi",[t._v("l")]),i("mi",[t._v("e")]),i("mi",[t._v("g")]),i("mi",[t._v("a")]),i("mi",[t._v("t")]),i("mi",[t._v("e")]),i("mi",[t._v("N")]),i("mi",[t._v("o")]),i("mi",[t._v("d")]),i("mi",[t._v("e")]),i("mi",[t._v("s")]),i("mo",[t._v("+")]),i("mn",[t._v("1")]),i("mo",{attrs:{stretchy:"false"}},[t._v(")")])],1),i("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("(2/3 \\times DelegateNodes + 1)")])],1)],1)],1),i("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[i("span",{staticClass:"base"},[i("span",{staticClass:"strut",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),i("span",{staticClass:"mopen"},[t._v("(")]),i("span",{staticClass:"mord"},[t._v("2")]),i("span",{staticClass:"mord"},[t._v("/")]),i("span",{staticClass:"mord"},[t._v("3")]),i("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222222222222222em"}}),i("span",{staticClass:"mbin"},[t._v("×")]),i("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222222222222222em"}})]),i("span",{staticClass:"base"},[i("span",{staticClass:"strut",staticStyle:{height:"0.8888799999999999em","vertical-align":"-0.19444em"}}),i("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.02778em"}},[t._v("D")]),i("span",{staticClass:"mord mathnormal"},[t._v("e")]),i("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.01968em"}},[t._v("l")]),i("span",{staticClass:"mord mathnormal"},[t._v("e")]),i("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.03588em"}},[t._v("g")]),i("span",{staticClass:"mord mathnormal"},[t._v("a")]),i("span",{staticClass:"mord mathnormal"},[t._v("t")]),i("span",{staticClass:"mord mathnormal"},[t._v("e")]),i("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.10903em"}},[t._v("N")]),i("span",{staticClass:"mord mathnormal"},[t._v("o")]),i("span",{staticClass:"mord mathnormal"},[t._v("d")]),i("span",{staticClass:"mord mathnormal"},[t._v("e")]),i("span",{staticClass:"mord mathnormal"},[t._v("s")]),i("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222222222222222em"}}),i("span",{staticClass:"mbin"},[t._v("+")]),i("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222222222222222em"}})]),i("span",{staticClass:"base"},[i("span",{staticClass:"strut",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),i("span",{staticClass:"mord"},[t._v("1")]),i("span",{staticClass:"mclose"},[t._v(")")])])])]),t._v(", the transaction can be considered valid and irreversible.")]),t._v(" "),i("h2",{attrs:{id:"a-global-clock"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#a-global-clock"}},[t._v("#")]),t._v(" A Global Clock")]),t._v(" "),i("p",[t._v("Since the Snapshot Chain provides a global ordering of all transactions, the height of each snapshot block can be effectively used as a timestamp for each transaction.")]),t._v(" "),i("p",[i("img",{attrs:{src:a(600),alt:"GLobal Clock"}})]),t._v(" "),i("p",[t._v("As shown in the above figure, the timestamp of T"),i("sub",[t._v("n-1")]),t._v(" is N-2, and the timestamp of T"),i("sub",[t._v("n")]),t._v(" is N. The time elapsed between T"),i("sub",[t._v("n")]),t._v(" and T"),i("sub",[t._v("n-1")]),t._v(" is N-(N-2)=2. So we have a throughput metric for each account. For a transaction with the height of n in the account-chain, the average TPS of the recent 10 transactions is:")]),t._v(" "),i("p",{staticClass:"katex-block"},[i("span",{staticClass:"katex-display"},[i("span",{staticClass:"katex"},[i("span",{staticClass:"katex-mathml"},[i("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"}},[i("semantics",[i("mrow",[i("mi",[t._v("T")]),i("mi",[t._v("P")]),i("msub",[i("mi",[t._v("S")]),i("mi",[t._v("n")])],1),i("mo",[t._v("=")]),i("mfrac",[i("mn",[t._v("10")]),i("mrow",[i("mi",[t._v("S")]),i("mo",[t._v("×")]),i("mo",{attrs:{stretchy:"false"}},[t._v("(")]),i("msub",[i("mi",[t._v("H")]),i("mi",[t._v("n")])],1),i("mo",[t._v("−")]),i("msub",[i("mi",[t._v("H")]),i("mrow",[i("mi",[t._v("n")]),i("mo",[t._v("−")]),i("mn",[t._v("9")])],1)],1),i("mo",[t._v("+")]),i("mn",[t._v("1")]),i("mo",{attrs:{stretchy:"false"}},[t._v(")")])],1)],1)],1),i("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("TPS_n=\\frac{10}{S\\times(H_n-H_{n-9}+1)}\n")])],1)],1)],1),i("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[i("span",{staticClass:"base"},[i("span",{staticClass:"strut",staticStyle:{height:"0.83333em","vertical-align":"-0.15em"}}),i("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.13889em"}},[t._v("T")]),i("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.13889em"}},[t._v("P")]),i("span",{staticClass:"mord"},[i("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.05764em"}},[t._v("S")]),i("span",{staticClass:"msupsub"},[i("span",{staticClass:"vlist-t vlist-t2"},[i("span",{staticClass:"vlist-r"},[i("span",{staticClass:"vlist",staticStyle:{height:"0.151392em"}},[i("span",{staticStyle:{top:"-2.5500000000000003em","margin-left":"-0.05764em","margin-right":"0.05em"}},[i("span",{staticClass:"pstrut",staticStyle:{height:"2.7em"}}),i("span",{staticClass:"sizing reset-size6 size3 mtight"},[i("span",{staticClass:"mord mathnormal mtight"},[t._v("n")])])])]),i("span",{staticClass:"vlist-s"},[t._v("​")])]),i("span",{staticClass:"vlist-r"},[i("span",{staticClass:"vlist",staticStyle:{height:"0.15em"}},[i("span")])])])])]),i("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2777777777777778em"}}),i("span",{staticClass:"mrel"},[t._v("=")]),i("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2777777777777778em"}})]),i("span",{staticClass:"base"},[i("span",{staticClass:"strut",staticStyle:{height:"2.25744em","vertical-align":"-0.936em"}}),i("span",{staticClass:"mord"},[i("span",{staticClass:"mopen nulldelimiter"}),i("span",{staticClass:"mfrac"},[i("span",{staticClass:"vlist-t vlist-t2"},[i("span",{staticClass:"vlist-r"},[i("span",{staticClass:"vlist",staticStyle:{height:"1.32144em"}},[i("span",{staticStyle:{top:"-2.314em"}},[i("span",{staticClass:"pstrut",staticStyle:{height:"3em"}}),i("span",{staticClass:"mord"},[i("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.05764em"}},[t._v("S")]),i("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222222222222222em"}}),i("span",{staticClass:"mbin"},[t._v("×")]),i("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222222222222222em"}}),i("span",{staticClass:"mopen"},[t._v("(")]),i("span",{staticClass:"mord"},[i("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.08125em"}},[t._v("H")]),i("span",{staticClass:"msupsub"},[i("span",{staticClass:"vlist-t vlist-t2"},[i("span",{staticClass:"vlist-r"},[i("span",{staticClass:"vlist",staticStyle:{height:"0.151392em"}},[i("span",{staticStyle:{top:"-2.5500000000000003em","margin-left":"-0.08125em","margin-right":"0.05em"}},[i("span",{staticClass:"pstrut",staticStyle:{height:"2.7em"}}),i("span",{staticClass:"sizing reset-size6 size3 mtight"},[i("span",{staticClass:"mord mathnormal mtight"},[t._v("n")])])])]),i("span",{staticClass:"vlist-s"},[t._v("​")])]),i("span",{staticClass:"vlist-r"},[i("span",{staticClass:"vlist",staticStyle:{height:"0.15em"}},[i("span")])])])])]),i("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222222222222222em"}}),i("span",{staticClass:"mbin"},[t._v("−")]),i("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222222222222222em"}}),i("span",{staticClass:"mord"},[i("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.08125em"}},[t._v("H")]),i("span",{staticClass:"msupsub"},[i("span",{staticClass:"vlist-t vlist-t2"},[i("span",{staticClass:"vlist-r"},[i("span",{staticClass:"vlist",staticStyle:{height:"0.301108em"}},[i("span",{staticStyle:{top:"-2.5500000000000003em","margin-left":"-0.08125em","margin-right":"0.05em"}},[i("span",{staticClass:"pstrut",staticStyle:{height:"2.7em"}}),i("span",{staticClass:"sizing reset-size6 size3 mtight"},[i("span",{staticClass:"mord mtight"},[i("span",{staticClass:"mord mathnormal mtight"},[t._v("n")]),i("span",{staticClass:"mbin mtight"},[t._v("−")]),i("span",{staticClass:"mord mtight"},[t._v("9")])])])])]),i("span",{staticClass:"vlist-s"},[t._v("​")])]),i("span",{staticClass:"vlist-r"},[i("span",{staticClass:"vlist",staticStyle:{height:"0.208331em"}},[i("span")])])])])]),i("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222222222222222em"}}),i("span",{staticClass:"mbin"},[t._v("+")]),i("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222222222222222em"}}),i("span",{staticClass:"mord"},[t._v("1")]),i("span",{staticClass:"mclose"},[t._v(")")])])]),i("span",{staticStyle:{top:"-3.23em"}},[i("span",{staticClass:"pstrut",staticStyle:{height:"3em"}}),i("span",{staticClass:"frac-line",staticStyle:{"border-bottom-width":"0.04em"}})]),i("span",{staticStyle:{top:"-3.677em"}},[i("span",{staticClass:"pstrut",staticStyle:{height:"3em"}}),i("span",{staticClass:"mord"},[i("span",{staticClass:"mord"},[t._v("1")]),i("span",{staticClass:"mord"},[t._v("0")])])])]),i("span",{staticClass:"vlist-s"},[t._v("​")])]),i("span",{staticClass:"vlist-r"},[i("span",{staticClass:"vlist",staticStyle:{height:"0.936em"}},[i("span")])])])]),i("span",{staticClass:"mclose nulldelimiter"})])])])])])]),t._v(" "),i("p",[t._v("Here H"),i("sub",[t._v("n")]),t._v(" is the height of the snapshot block referenced by transaction T"),i("sub",[t._v("n")]),t._v(", and S is the interval of two adjacent snapshot blocks, in seconds.")]),t._v(" "),i("p",[t._v("Now we can measure the TPS on account chains. As seen in another section, the "),i("RouterLink",{attrs:{to:"/vite-basics/quota/quota.html"}},[t._v("Quota")]),t._v(" mechanism is used to throttle transactions. So, the network will reject any transaction that spends more Quota than available.")],1)])}),[],!1,null,null,null);s.default=e.exports}}]);