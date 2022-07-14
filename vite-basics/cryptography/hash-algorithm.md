---
order: 1
---

# Hashing Algorithms

In the Vite network, hash function serves many purposes including compression, protection and tamper-proofing of data.

## Hash algorithm — BLAKE2b

Vite uses BLAKE2b for various purposes, including producing blocks, generating keypairs and addresses, and tamper-proofing of data.

### Security

BLAKE2 essentially relies on the same core algorithm as BLAKE, which has been battled-tested since 2008. BLAKE2 was endorsed by NIST (National Institute of Standards and Technology). See NIST's report [here](https://nvlpubs.nist.gov/nistpubs/ir/2012/NIST.IR.7896.pdf).

> Among variations of BLAKE2, BLAKE2b is optimized for 64-bit platforms.

### Performance

BLAKE2 is fast because it takes advantage of features of modern CPUs, such as instruction-level parallelism, SIMD instruction set extensions, and multiple cores. BLAKE2 is faster than MD5, SHA-1, SHA-2, and SHA-3. And BLAKE2 beats any other hash algorithm on generic CPUs (X86 ARM, etc). See [here](http://bench.cr.yp.to/results-sha3.html) for detailed performance data.
