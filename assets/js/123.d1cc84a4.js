(window.webpackJsonp=window.webpackJsonp||[]).push([[123],{736:function(t,e,o){"use strict";o.r(e);var a=o(0),s=Object(a.a)({},(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[o("h1",{attrs:{id:"setup"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#setup"}},[t._v("#")]),t._v(" Setup")]),t._v(" "),o("h2",{attrs:{id:"recommended-specs"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#recommended-specs"}},[t._v("#")]),t._v(" Recommended Specs")]),t._v(" "),o("ul",[o("li",[t._v("SBP (Snapshot Block Producer / Supernode) - 2 CPUs / 8 GB RAM")]),t._v(" "),o("li",[t._v("Full node - 1 CPU / 4 GB RAM")])]),t._v(" "),o("p",[t._v("A minimum of 5 Mbit/s stable internet connection is required.")]),t._v(" "),o("h2",{attrs:{id:"minimal-installation"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#minimal-installation"}},[t._v("#")]),t._v(" Minimal Installation")]),t._v(" "),o("p",[t._v("You can start a full node on the Vite mainnet quickly by following the steps below. While this is a convenient way to check if everything is working as intended, you should change the default configuration to your needs. All configuration options are described "),o("RouterLink",{attrs:{to:"/vite-basics/network/configuration.html"}},[t._v("here")]),t._v(".")],1),t._v(" "),o("ol",[o("li",[t._v("Download & extract the latest release of "),o("a",{attrs:{href:"https://github.com/vitelabs/go-vite/releases",target:"_blank",rel:"noopener noreferrer"}},[t._v("go-vite"),o("OutboundLink")],1)]),t._v(" "),o("li",[t._v("Open a terminal and cd into the installation directory")]),t._v(" "),o("li",[t._v("Run "),o("code",[t._v("./gvite")]),t._v(" to start the full node with the default configuration")])]),t._v(" "),o("p",[t._v("The following result should be displayed:")]),t._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"",base64:"Vml0ZSBSUEMgc2VydmljZSBzdGFydGVkIHN1Y2Nlc3NmdWxseSEK"}}),t._v(" "),o("p",[t._v("It can take some time until the node starts syncing the distributed ledger but eventually the following output should appear:")]),t._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"",base64:"W1NuYXBzaG90IFN0YXRzXSBIZWlnaHQ6MTAwMDEsIEhhc2g6ZWM1NDNmZjNmNzM5Nzg3NmI2YzY3YTQxYTE3MGMwZTFmOTdhYzYzN2ZlZTRjNGRiM2QxOTAzMDg3ZjQyMzEyZSwgVGltZXN0YW1wOjIwMTktMDUtMjIgMDE6MjA6MTMgKzAwMDAgVVRDLCBQcm9kdWNlcjp2aXRlX2RmZjVlZTEzYzg3ZWQyZjIwNWVmODdkODIwYjNjZDhlOTdjMTgxYjFiYjY3ODFjNjAyLCBUaW1lOjIwMjItMDUtMjkgMTI6MTY6MDkuMTk4OTU5NzQgKzAwMDAgVVRDIG09KzUxLjQ4OTk0NTk1MAo="}}),t._v(" "),o("p",[t._v("To estimate the time needed to sync the entire ledger, you can check the current height with one of the available explorers and compare it to the height above.")]),t._v(" "),o("h2",{attrs:{id:"directory-structure"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#directory-structure"}},[t._v("#")]),t._v(" Directory Structure")]),t._v(" "),o("h3",{attrs:{id:"installation-directory"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#installation-directory"}},[t._v("#")]),t._v(" Installation directory")]),t._v(" "),o("p",[t._v("Refers to the folder where gvite boot script and configuration files are located. For example, "),o("code",[t._v("~/gvite-${version}-${os}")]),t._v(" is an installation directory.")]),t._v(" "),o("p",[o("code",[t._v("gvite")]),t._v(" : Gvite executable file\n"),o("code",[t._v("bootstrap")]),t._v(" : Optional boot script to start the node\n"),o("code",[t._v("node_config.json")]),t._v(" : Configuration file")]),t._v(" "),o("h3",{attrs:{id:"working-directory"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#working-directory"}},[t._v("#")]),t._v(" Working directory")]),t._v(" "),o("p",[t._v('The working directory contains sub-directories/files such as "ledger", "ledger_files", "LOCK", "net", "rpclog", "runlog" and "wallet".')]),t._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"",base64:"Y2Qgfi8uZ3ZpdGUvbWFpbmRhdGEK"}}),t._v(" "),o("p",[o("code",[t._v("ledger")]),t._v(" : Ledger directory for storing transactions and snapshot blocks.\n"),o("code",[t._v("rpclog")]),t._v(" : Directory for storing RPC logs\n"),o("code",[t._v("runlog")]),t._v(" : Directory for storing run-time logs\n"),o("code",[t._v("wallet")]),t._v(" : Wallet keystore directory for storing keystore files that secure private keys. Do remember "),o("strong",[t._v("KEEP YOUR PRIVATE KEY SAFE")]),t._v(".")]),t._v(" "),o("h2",{attrs:{id:"stop-reboot-node"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#stop-reboot-node"}},[t._v("#")]),t._v(" Stop/Reboot Node")]),t._v(" "),o("p",[t._v("If you started the node with the "),o("code",[t._v("./boostrap")]),t._v(" script, you might need the following instructions to stop or reboot your node.")]),t._v(" "),o("p",[t._v("Execute the following command")]),t._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"cHMgLWVmfGdyZXAgZ3ZpdGUK"}}),t._v(" "),o("p",[t._v("to obtain the gvite process id")]),t._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"dWJ1bnR1ICAgMjcyNjggICAgIDEgOTkgMTY6MDAgPyAgICAgICAgMDE6NTQ6NTYgLi9ndml0ZSAtcHByb2YgCg=="}}),t._v(" "),o("p",[t._v("Kill it with")]),t._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"a2lsbCAtOSAyNzI2OAo="}}),t._v(" "),o("p",[t._v("Then reboot")]),t._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"Li9ib290c3RyYXAK"}}),t._v(" "),o("p",[t._v("To check if gvite has rebooted successfully, run:")]),t._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"cHMgLWVmfGdyZXAgZ3ZpdGUK"}})],1)}),[],!1,null,null,null);e.default=s.exports}}]);