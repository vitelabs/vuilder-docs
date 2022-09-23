(window.webpackJsonp=window.webpackJsonp||[]).push([[144],{757:function(a,t,s){"use strict";s.r(t);var e=s(0),n=Object(e.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"smart-contracts"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#smart-contracts"}},[a._v("#")]),a._v(" Smart Contracts")]),a._v(" "),s("p",[a._v("Smart contracts are immutable programs deployed on the blockchain.")]),a._v(" "),s("h2",{attrs:{id:"consensus-groups"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#consensus-groups"}},[a._v("#")]),a._v(" Consensus Groups")]),a._v(" "),s("p",[a._v('Each smart contract can have its own group of nodes ("Delegated Consensus Group") that take turns confirming the transactions sent/received by said contract.')]),a._v(" "),s("p",[a._v("Similar to Snapshot Consensus Group, all delegated nodes will be publicly elected according to the election rules defined in the delegated consensus group. The number of delegated nodes is defined by the group upon creation, and there is no limit to the number of such consensus groups in the network.")]),a._v(" "),s("p",[a._v("These delegated consensus groups allow for faster confirmation of transactions, because the nodes are only responsible for executing transactions for the said smart contract, not the entire network.")]),a._v(" "),s("p",[a._v("By default, the consensus group for smart contracts is the Snapshot Consensus Group (aka Global Consensus Group).")]),a._v(" "),s("h2",{attrs:{id:"response-latency"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#response-latency"}},[a._v("#")]),a._v(" Response Latency")]),a._v(" "),s("p",[a._v("To throttle response transactions, a smart contract can set up the Response Latency parameter when it is deployed. The response latency parameter specifies, for any incoming request transaction, the number of snapshot blocks that need to be confirmed before the contract responds. That is, the contract will wait at least that many snapshot blocks before producing a response block.")]),a._v(" "),s("p",[a._v("The value of this parameter is a number between 0 and 75, inclusive. 0 means there is no waiting period and a response block will be produced immediately. If the contract makes uses of timestamp, snapshot block height or random number, this parameter must be positive.")]),a._v(" "),s("p",[a._v("Generally speaking, a bigger response latency means slower contract response, and the response transaction will consume more quota.")]),a._v(" "),s("h2",{attrs:{id:"random-degrees"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#random-degrees"}},[a._v("#")]),a._v(" Random Degrees")]),a._v(" "),s("p",[a._v("When deploying a smart contract, the Random Degree parameter specifies the degree of confidence in the randomness being generated. The bigger random degree, the more secure the random number generation process, and the slower the contract producing response block. The value of random degree is between 0 and 75. If your contract uses random numbers, this parameter must be positive. Select a random degree that befits your contract's needs.")]),a._v(" "),s("p",[a._v("There are two functions for getting random numbers in Solidity++.")]),a._v(" "),s("tm-code-block",{staticClass:"codeblock",attrs:{language:"",base64:"Ly8gcmV0dXJuIGEgcmFuZG9tIG51bWJlci4gVGhlIHZhbHVlIHJldHVybmVkIGRvZXMgbm90IGNoYW5nZSBpZiBjYWxsZWQgd2l0aGluIHRoZSBzYW1lIHRyYW5zYWN0aW9uCnVpbnQ2NCByYW5kb20gPSByYW5kb202NCgpOwovLyByZXR1cm4gYSByYW5kb20gbnVtYmVyLiBUaGUgdmFsdWUgcmV0dXJuZWQgaXMgZGlmZmVyZW50IHdpdGggZWFjaCBjYWxsCnVpbnQ2NCByYW5kb20gPSBuZXh0cmFuZG9tKCk7Cg=="}}),a._v(" "),s("p",[a._v("For any given contract, it must hold "),s("span",{staticClass:"katex"},[s("span",{staticClass:"katex-mathml"},[s("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[s("semantics",[s("mrow",[s("mn",[a._v("0")]),s("mo",[a._v("≤")]),s("mi",[a._v("R")]),s("mi",[a._v("a")]),s("mi",[a._v("n")]),s("mi",[a._v("d")]),s("mi",[a._v("o")]),s("mi",[a._v("m")]),s("mi",[a._v("D")]),s("mi",[a._v("e")]),s("mi",[a._v("g")]),s("mi",[a._v("r")]),s("mi",[a._v("e")]),s("mi",[a._v("e")]),s("mo",[a._v("≤")]),s("mi",[a._v("R")]),s("mi",[a._v("e")]),s("mi",[a._v("s")]),s("mi",[a._v("p")]),s("mi",[a._v("o")]),s("mi",[a._v("n")]),s("mi",[a._v("s")]),s("mi",[a._v("e")]),s("mi",[a._v("L")]),s("mi",[a._v("a")]),s("mi",[a._v("t")]),s("mi",[a._v("e")]),s("mi",[a._v("n")]),s("mi",[a._v("c")]),s("mi",[a._v("y")]),s("mo",[a._v("≤")]),s("mn",[a._v("75")])],1),s("annotation",{attrs:{encoding:"application/x-tex"}},[a._v("0 \\le RandomDegree \\le ResponseLatency \\le 75")])],1)],1)],1),s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"base"},[s("span",{staticClass:"strut",staticStyle:{height:"0.78041em","vertical-align":"-0.13597em"}}),s("span",{staticClass:"mord"},[a._v("0")]),s("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2777777777777778em"}}),s("span",{staticClass:"mrel"},[a._v("≤")]),s("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2777777777777778em"}})]),s("span",{staticClass:"base"},[s("span",{staticClass:"strut",staticStyle:{height:"0.8888799999999999em","vertical-align":"-0.19444em"}}),s("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.00773em"}},[a._v("R")]),s("span",{staticClass:"mord mathnormal"},[a._v("a")]),s("span",{staticClass:"mord mathnormal"},[a._v("n")]),s("span",{staticClass:"mord mathnormal"},[a._v("d")]),s("span",{staticClass:"mord mathnormal"},[a._v("o")]),s("span",{staticClass:"mord mathnormal"},[a._v("m")]),s("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.02778em"}},[a._v("D")]),s("span",{staticClass:"mord mathnormal"},[a._v("e")]),s("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.03588em"}},[a._v("g")]),s("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.02778em"}},[a._v("r")]),s("span",{staticClass:"mord mathnormal"},[a._v("e")]),s("span",{staticClass:"mord mathnormal"},[a._v("e")]),s("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2777777777777778em"}}),s("span",{staticClass:"mrel"},[a._v("≤")]),s("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2777777777777778em"}})]),s("span",{staticClass:"base"},[s("span",{staticClass:"strut",staticStyle:{height:"0.8777699999999999em","vertical-align":"-0.19444em"}}),s("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.00773em"}},[a._v("R")]),s("span",{staticClass:"mord mathnormal"},[a._v("e")]),s("span",{staticClass:"mord mathnormal"},[a._v("s")]),s("span",{staticClass:"mord mathnormal"},[a._v("p")]),s("span",{staticClass:"mord mathnormal"},[a._v("o")]),s("span",{staticClass:"mord mathnormal"},[a._v("n")]),s("span",{staticClass:"mord mathnormal"},[a._v("s")]),s("span",{staticClass:"mord mathnormal"},[a._v("e")]),s("span",{staticClass:"mord mathnormal"},[a._v("L")]),s("span",{staticClass:"mord mathnormal"},[a._v("a")]),s("span",{staticClass:"mord mathnormal"},[a._v("t")]),s("span",{staticClass:"mord mathnormal"},[a._v("e")]),s("span",{staticClass:"mord mathnormal"},[a._v("n")]),s("span",{staticClass:"mord mathnormal"},[a._v("c")]),s("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.03588em"}},[a._v("y")]),s("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2777777777777778em"}}),s("span",{staticClass:"mrel"},[a._v("≤")]),s("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2777777777777778em"}})]),s("span",{staticClass:"base"},[s("span",{staticClass:"strut",staticStyle:{height:"0.64444em","vertical-align":"0em"}}),s("span",{staticClass:"mord"},[a._v("7")]),s("span",{staticClass:"mord"},[a._v("5")])])])])]),a._v(" "),s("p",[a._v("Refer to "),s("RouterLink",{attrs:{to:"/vep/vep-12.html"}},[a._v("VEP 12: The Implementation of Random Numbers in Vite")]),a._v(" for details of random numbers.")],1),a._v(" "),s("h2",{attrs:{id:"quota-multiplier"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#quota-multiplier"}},[a._v("#")]),a._v(" Quota Multiplier")]),a._v(" "),s("p",[a._v("Sometimes the deployer of a smart contract may want contract callers to spend more than the usual amount of quota, perhaps for anti-spamming purposes. The Quota Multiplier parameter facilitates this, and is specified at contract deployment. The value ranges from 10 to 100, equivalent to 1-10x quota consumption. For example, 15 means that 1.5x quota will be charged for any address that calls the contract.")]),a._v(" "),s("p",[a._v("See "),s("RouterLink",{attrs:{to:"/vite-basics/quota/quota.html"}},[a._v("here")]),a._v(" for rules on quota consumption.")],1),a._v(" "),s("h2",{attrs:{id:"library-linking"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#library-linking"}},[a._v("#")]),a._v(" Library Linking")]),a._v(" "),s("p",[a._v("Libraries in Solidity++ retain the same syntax and usage as in Solidity. In most cases, libraries are pieces of reusable code that consist of functions used by other contracts. They help prevent code duplication and can effectively reduce the size of code.")]),a._v(" "),s("p",[a._v("In the Vite network, libraries are a special form of contracts that:")]),a._v(" "),s("ul",[s("li",[a._v("Are singletons")]),a._v(" "),s("li",[a._v("Do not allow any storage or state variables that change")]),a._v(" "),s("li",[a._v("Cannot have fallback functions")]),a._v(" "),s("li",[a._v("Have no event logs")]),a._v(" "),s("li",[a._v("Are stateless")]),a._v(" "),s("li",[a._v("Cannot inherit or be inherited")])]),a._v(" "),s("p",[a._v("Libraries allow adding functionality to types. For example, one can use the SafeMath library to enhance the functionality of a "),s("code",[a._v("uint")]),a._v(" variable in a contract.")]),a._v(" "),s("tm-code-block",{staticClass:"codeblock",attrs:{language:"solidity",base64:"dXNpbmcgU2FmZU1hdGggZm9yIHVpbnQ7Cg=="}}),a._v(" "),s("p",[a._v("Using a library in the smart contract is called library linking. The following example shows Contract A using a library L to compute "),s("span",{staticClass:"katex"},[s("span",{staticClass:"katex-mathml"},[s("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[s("semantics",[s("mrow",[s("mn",[a._v("2")]),s("mo",[a._v("×")]),s("mi",[a._v("a")])],1),s("annotation",{attrs:{encoding:"application/x-tex"}},[a._v("2\\times a")])],1)],1)],1),s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"base"},[s("span",{staticClass:"strut",staticStyle:{height:"0.72777em","vertical-align":"-0.08333em"}}),s("span",{staticClass:"mord"},[a._v("2")]),s("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222222222222222em"}}),s("span",{staticClass:"mbin"},[a._v("×")]),s("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222222222222222em"}})]),s("span",{staticClass:"base"},[s("span",{staticClass:"strut",staticStyle:{height:"0.43056em","vertical-align":"0em"}}),s("span",{staticClass:"mord mathnormal"},[a._v("a")])])])])]),a._v(" "),s("tm-code-block",{staticClass:"codeblock",attrs:{language:"solidity",base64:"Ly8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEdQTC0zLjAKcHJhZ21hIHNvbGlkaXR5cHAgJmd0Oz0wLjguMDsKCmxpYnJhcnkgTCB7IAogICAgZnVuY3Rpb24gZG91YmxlKHVpbnQgc2VsZikgcHVibGljIHJldHVybnMgKHVpbnQpIHsgCiAgICAgICAgLy8gZG8gc29tZXRoaW5nIHdpdGggc2lkZSBlZmZlY3RzCiAgICAgICAgcmV0dXJuIDIgKiBzZWxmOwogICAgfQp9Cgpjb250cmFjdCBBIHsKICAgIHVzaW5nIEwgZm9yIHVpbnQ7CiAgICB1aW50IHB1YmxpYyBkYXRhOwoKICAgIGZ1bmN0aW9uIGYodWludCBhKSBwdWJsaWMgcmV0dXJucyAodWludCkgewogICAgICAgIGRhdGEgPSBhLmRvdWJsZSgpOwogICAgICAgIHJldHVybiBkYXRhOwogICAgfQp9Cg=="}})],1)}),[],!1,null,null,null);t.default=n.exports}}]);