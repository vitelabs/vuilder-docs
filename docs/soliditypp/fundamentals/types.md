---
order: 3
---

# Types and Units

## Types

Solidity++ is a statically typed language, which means that the type of each variable needs to be specified. Types allow the compiler to check the correct usage of the variables. Similar to other statically typed languages Solidity++ has value types and reference types which are defined as follows.

### Value Types

Value type variables store their own data. These are the basic data types provided by Solidity++. These types of variables are always passed by value and are copied wherever they are used in function arguments or assignment. 

- `bool` possible values are `true` or `false`
- `uint8` to `uint256` in steps of `8`
- `int8` to `int256` in steps of `8`
- `address`, `bytes`, `string`, `enum` and `vitetoken`

### Reference Types

Reference type variables store the location of the data. They don't share the data directly. With the help of reference type, two different variables can refer to the same location where any change in one variable can affect the other one.

- `Arrays`: An array is a group of variables of the same data type in which variable has a particular location known as an index. By using the index location, the desired variable can be accessed. The array size can be fix or dynamic.
- `Struct`: Custom types can be defined in the form of structures. The structure is a group of different types but it cannot contain a member of its own type. The structure is a reference type variable which can contain both value type and reference type.
- `Mapping`: Mapping is a reference type, that stores the data in a key-value pair where a key can be any value type. It is like a hash table or dictionary as in any other programming language, where data can be retrieved by key.

In addition, types can interact with each other in expressions containing operators.

Examples of operators:
- `!` (logical negation)
- `&&` (logical conjunction, “and”)
- `||` (logical disjunction, “or”)
- `==` (equality)
- `!=` (inequality)

The concept of "undefined" or "null" values does not exist in Solidity++, but newly declared variables always have a default value dependent on its type.

- `bool` : `false`
- `uint` or `int` : 0
- `enum` : the default value is its first member
- statically-sized arrays and `bytes1` to `bytes32` : each individual element will be initialized to the default value corresponding to its type
- dynamically-sized arrays, `bytes` and `string` : the default value is an empty array or string

### Special Types

The `address` type is redefined to be compatible with Vite, and a new type `vitetoken` representing Vite Native Token Id is introduced in Solidity++.

Default values:
- `address` : vite_0000000000000000000000000000000000000000a4f3a0cb58
- `vitetoken` : tti_000000000000000000004cfd

```solidity
// address type
address addr1 = address("vite_0102030405060708090807060504030201020304eddd83748e");
address addr2 = "vite_0102030405060708090807060504030201020304eddd83748e";
address payable addr3 = payable("vite_0102030405060708090807060504030201020304eddd83748e");

// vitetoken type
vitetoken token1 = vitetoken("tti_2445f6e5cde8c2c70e446c83");
vitetoken token2 = "tti_2445f6e5cde8c2c70e446c83";
```

For more examples please refer to <https://docs.soliditylang.org/en/v0.8.1/types.html>

## Units

In Solidity, a literal number can take a suffix of `wei`, `gwei` or `ether` to specify a subdenomination of Ether, where Ether numbers without a postfix are assumed to be `wei`.

Similarly, in Solidity++, a literal number can take a suffix of `attov` and `vite` to specify a subdenomination of VITE, where VITE numbers without a postfix are assumed to be `attov`.

- `1 vite == 1e18 attov`

### Time Units

Suffixes like `seconds`, `minutes`, `hours`, `days` and `weeks` after literal numbers can be used to specify units of time where seconds are the base unit and units are considered naively in the following way:

- `1 == 1 seconds`
- `1 minutes == 60 seconds`
- `1 hours == 60 minutes`
- `1 days == 24 hours`
- `1 weeks == 7 days`

Take care if you perform calendar calculations using these units, because not every year equals 365 days and not even every day has 24 hours because of leap seconds. Due to the fact that leap seconds cannot be predicted, an exact calendar library has to be updated by an external oracle.

These suffixes cannot be applied to variables. For example, if you want to interpret a function parameter in days, you can in the following way:

```solidity
function f(uint start, uint daysAfter) public {
    if (block.timestamp >= start + daysAfter * 1 days) {
        // ...
    }
}
```