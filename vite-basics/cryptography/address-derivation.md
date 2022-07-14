---
order: 3
---

# Address Derivation

A Vite address is a 55-character string with three parts: First, the "vite_" prefix; second, a 160-bit BLAKE2b hashed public key of Ed25519 cryptographic elliptic curve from a seed; and third, a 40-bit checksum of the public key's hash. Note that the second and third parts are in Hex encoding.

$$Address = vite\_ + Hex(PubHash + Checksum(PubHash))$$

The public/private keypair is derived in the following steps.

* Generate a random BIP-39 encoded 128/256 bits entropy with 12/24 mnemonic phrase.
* Generate a BIP-39 seed from the mnemonic phrase, with an optional passphrase (default is empty).
* Generate the master key from the HMAC-SHA512 hashed seed, using key "ed25519 blake2b seed".
* Derive the BIP-44 Ed25519-BLAKE2b keypair from the master key with coin_type **666666**. 

> We modified the Ed25519 signature scheme to use BLAKE2b instead of SHA-2.

### Derivation Path
See [VEP 3: Vite Wallet Key Derivation](https://docs.vite.org/vite-docs/vep/vep-3.html) for more information about the BIP-32 path pattern of Vite.

### Original Address
We concatenate the 20-byte binary address and an additional 1-byte type flag into the 21-byte **Original Address** to determine if an address is a smart contract. See [VEP-16: Specification of Address Generation]() for details.

## Key Derivation Function and Keystore

Key Derivation Function (KDF) derives subkeys from a single master key. The derivation process expands a short string into certain formats via KDF algorithms. KDF is similar to a hash function, but the former involves adding random variables to prevent table-lookup attacks (e.g. rainbow tables). For private key encryption and keystore generation, Vite uses Scrypt, a memory-dependent KDF. Brute-force attacks on KDF are nearly impossible to succeed, as they will consume prohibitive amount of memory.

On Vite, the private key is encrypted and stored in the keystore in the following steps:

* Encrypt a random keystore/wallet password entered by the user through Scrypt to get a 256bits AES-256-GCM encryption key.
* Generate the keystore with derived Scrypt parameters.
* Save the AES-256-GCM encrypted private key into the keystore file.
