---
order: 2
---

# Fees

## Contract Creation Fee

Creating new contract consumes VITE tokens. On the Vite Mainnet, a base fee of 10 VITE is charged for deploying a contract.

The contract creation fee will be burned.

## Contract Suspension

Contract execution consumes quota instead of VITE tokens. Calling a contract, aka the request transaction, will cost quota from the caller's address. However, unlike Ethereum and other smart contract platforms, the contract execution, aka the response transaction, costs quota from the contract address. 

!!! tip
    NEVER forget to supply quota for your smart contract.

If the contract runs out of quota, it will stop accepting requests until the quota is restored.

If the quota of a contract is insufficient for generating a response transaction, the execution will exhaust the remaining quota and generate a panic exception. If the requested transaction includes a token transfer, the token will be returned to the caller's address. A panic due to insufficient quota will cause the contract to be suspended for 75 snapshots (about 75 seconds).
