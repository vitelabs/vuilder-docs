(window.webpackJsonp=window.webpackJsonp||[]).push([[106],{714:function(e,t,a){"use strict";a.r(t);var i=a(0),s=Object(i.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"types-and-units"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#types-and-units"}},[e._v("#")]),e._v(" Types and Units")]),e._v(" "),a("h2",{attrs:{id:"types"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#types"}},[e._v("#")]),e._v(" Types")]),e._v(" "),a("p",[e._v("Solidity++ is a statically typed language, which means that the type of each variable needs to be specified. Types allow the compiler to check the correct usage of the variables. Similar to other statically typed languages Solidity++ has value types and reference types which are defined as follows.")]),e._v(" "),a("h3",{attrs:{id:"value-types"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#value-types"}},[e._v("#")]),e._v(" Value Types")]),e._v(" "),a("p",[e._v("Value type variables store their own data. These are the basic data types provided by Solidity++. These types of variables are always passed by value and are copied wherever they are used in function arguments or assignment.")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("bool")]),e._v(" possible values are "),a("code",[e._v("true")]),e._v(" or "),a("code",[e._v("false")])]),e._v(" "),a("li",[a("code",[e._v("uint8")]),e._v(" to "),a("code",[e._v("uint256")]),e._v(" in steps of "),a("code",[e._v("8")])]),e._v(" "),a("li",[a("code",[e._v("int8")]),e._v(" to "),a("code",[e._v("int256")]),e._v(" in steps of "),a("code",[e._v("8")])]),e._v(" "),a("li",[a("code",[e._v("address")]),e._v(", "),a("code",[e._v("bytes")]),e._v(", "),a("code",[e._v("string")]),e._v(", "),a("code",[e._v("enum")]),e._v(" and "),a("code",[e._v("vitetoken")])])]),e._v(" "),a("h3",{attrs:{id:"reference-types"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#reference-types"}},[e._v("#")]),e._v(" Reference Types")]),e._v(" "),a("p",[e._v("Reference type variables store the location of the data. They don't share the data directly. With the help of reference type, two different variables can refer to the same location where any change in one variable can affect the other one.")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("Arrays")]),e._v(": An array is a group of variables of the same data type in which variable has a particular location known as an index. By using the index location, the desired variable can be accessed. The array size can be fix or dynamic.")]),e._v(" "),a("li",[a("code",[e._v("Struct")]),e._v(": Custom types can be defined in the form of structures. The structure is a group of different types but it cannot contain a member of its own type. The structure is a reference type variable which can contain both value type and reference type.")]),e._v(" "),a("li",[a("code",[e._v("Mapping")]),e._v(": Mapping is a reference type, that stores the data in a key-value pair where a key can be any value type. It is like a hash table or dictionary as in any other programming language, where data can be retrieved by key.")])]),e._v(" "),a("p",[e._v("In addition, types can interact with each other in expressions containing operators.")]),e._v(" "),a("p",[e._v("Examples of operators:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("!")]),e._v(" (logical negation)")]),e._v(" "),a("li",[a("code",[e._v("&&")]),e._v(" (logical conjunction, “and”)")]),e._v(" "),a("li",[a("code",[e._v("||")]),e._v(" (logical disjunction, “or”)")]),e._v(" "),a("li",[a("code",[e._v("==")]),e._v(" (equality)")]),e._v(" "),a("li",[a("code",[e._v("!=")]),e._v(" (inequality)")])]),e._v(" "),a("p",[e._v('The concept of "undefined" or "null" values does not exist in Solidity++, but newly declared variables always have a default value dependent on its type.')]),e._v(" "),a("ul",[a("li",[a("code",[e._v("bool")]),e._v(" : "),a("code",[e._v("false")])]),e._v(" "),a("li",[a("code",[e._v("uint")]),e._v(" or "),a("code",[e._v("int")]),e._v(" : 0")]),e._v(" "),a("li",[a("code",[e._v("enum")]),e._v(" : the default value is its first member")]),e._v(" "),a("li",[e._v("statically-sized arrays and "),a("code",[e._v("bytes1")]),e._v(" to "),a("code",[e._v("bytes32")]),e._v(" : each individual element will be initialized to the default value corresponding to its type")]),e._v(" "),a("li",[e._v("dynamically-sized arrays, "),a("code",[e._v("bytes")]),e._v(" and "),a("code",[e._v("string")]),e._v(" : the default value is an empty array or string")])]),e._v(" "),a("h3",{attrs:{id:"special-types"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#special-types"}},[e._v("#")]),e._v(" Special Types")]),e._v(" "),a("p",[e._v("The "),a("code",[e._v("address")]),e._v(" type is redefined to be compatible with Vite, and a new type "),a("code",[e._v("vitetoken")]),e._v(" representing Vite Native Token Id is introduced in Solidity++.")]),e._v(" "),a("p",[e._v("Default values:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("address")]),e._v(" : vite_0000000000000000000000000000000000000000a4f3a0cb58")]),e._v(" "),a("li",[a("code",[e._v("vitetoken")]),e._v(" : tti_000000000000000000004cfd")])]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"solidity",base64:"Ly8gYWRkcmVzcyB0eXBlCmFkZHJlc3MgYWRkcjEgPSBhZGRyZXNzKCZxdW90O3ZpdGVfMDEwMjAzMDQwNTA2MDcwODA5MDgwNzA2MDUwNDAzMDIwMTAyMDMwNGVkZGQ4Mzc0OGUmcXVvdDspOwphZGRyZXNzIGFkZHIyID0gJnF1b3Q7dml0ZV8wMTAyMDMwNDA1MDYwNzA4MDkwODA3MDYwNTA0MDMwMjAxMDIwMzA0ZWRkZDgzNzQ4ZSZxdW90OzsKYWRkcmVzcyBwYXlhYmxlIGFkZHIzID0gcGF5YWJsZSgmcXVvdDt2aXRlXzAxMDIwMzA0MDUwNjA3MDgwOTA4MDcwNjA1MDQwMzAyMDEwMjAzMDRlZGRkODM3NDhlJnF1b3Q7KTsKCi8vIHZpdGV0b2tlbiB0eXBlCnZpdGV0b2tlbiB0b2tlbjEgPSB2aXRldG9rZW4oJnF1b3Q7dHRpXzI0NDVmNmU1Y2RlOGMyYzcwZTQ0NmM4MyZxdW90Oyk7CnZpdGV0b2tlbiB0b2tlbjIgPSAmcXVvdDt0dGlfMjQ0NWY2ZTVjZGU4YzJjNzBlNDQ2YzgzJnF1b3Q7Owo="}}),e._v(" "),a("p",[e._v("For more examples please refer to "),a("a",{attrs:{href:"https://docs.soliditylang.org/en/v0.8.1/types.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://docs.soliditylang.org/en/v0.8.1/types.html"),a("OutboundLink")],1)]),e._v(" "),a("h2",{attrs:{id:"units"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#units"}},[e._v("#")]),e._v(" Units")]),e._v(" "),a("p",[e._v("In Solidity, a literal number can take a suffix of "),a("code",[e._v("wei")]),e._v(", "),a("code",[e._v("gwei")]),e._v(" or "),a("code",[e._v("ether")]),e._v(" to specify a subdenomination of Ether, where Ether numbers without a postfix are assumed to be "),a("code",[e._v("wei")]),e._v(".")]),e._v(" "),a("p",[e._v("Similarly, in Solidity++, a literal number can take a suffix of "),a("code",[e._v("attov")]),e._v(" and "),a("code",[e._v("vite")]),e._v(" to specify a subdenomination of VITE, where VITE numbers without a postfix are assumed to be "),a("code",[e._v("attov")]),e._v(".")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("1 vite == 1e18 attov")])])]),e._v(" "),a("h3",{attrs:{id:"time-units"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#time-units"}},[e._v("#")]),e._v(" Time Units")]),e._v(" "),a("p",[e._v("Suffixes like "),a("code",[e._v("seconds")]),e._v(", "),a("code",[e._v("minutes")]),e._v(", "),a("code",[e._v("hours")]),e._v(", "),a("code",[e._v("days")]),e._v(" and "),a("code",[e._v("weeks")]),e._v(" after literal numbers can be used to specify units of time where seconds are the base unit and units are considered naively in the following way:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("1 == 1 seconds")])]),e._v(" "),a("li",[a("code",[e._v("1 minutes == 60 seconds")])]),e._v(" "),a("li",[a("code",[e._v("1 hours == 60 minutes")])]),e._v(" "),a("li",[a("code",[e._v("1 days == 24 hours")])]),e._v(" "),a("li",[a("code",[e._v("1 weeks == 7 days")])])]),e._v(" "),a("p",[e._v("Take care if you perform calendar calculations using these units, because not every year equals 365 days and not even every day has 24 hours because of leap seconds. Due to the fact that leap seconds cannot be predicted, an exact calendar library has to be updated by an external oracle.")]),e._v(" "),a("p",[e._v("These suffixes cannot be applied to variables. For example, if you want to interpret a function parameter in days, you can in the following way:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"solidity",base64:"ZnVuY3Rpb24gZih1aW50IHN0YXJ0LCB1aW50IGRheXNBZnRlcikgcHVibGljIHsKICAgIGlmIChibG9jay50aW1lc3RhbXAgJmd0Oz0gc3RhcnQgKyBkYXlzQWZ0ZXIgKiAxIGRheXMpIHsKICAgICAgICAvLyAuLi4KICAgIH0KfQo="}})],1)}),[],!1,null,null,null);t.default=s.exports}}]);