---
order: 2
---

# Signing

Signature algorithms give proof that signers of messages must be in possession of the relevant private key. The Vite network uses signature algorithms to generate account addresses and create transactions.

## Digital Signature Algorithm — Ed25519

Vite uses Ed25519 as its signature algorithm. The algorithm is basically EdDSA instantiated over curve Edwards25519.

Ed25519 was introduced in 2011 by Bernstein in the paper [High-speed high-security signatures](https://ed25519.cr.yp.to/). The algorithm's efficiency led to its popularization in modern applications, and its adoption in TLS 1.3, SSH, Tor, ZCash, and messaging protocols based on the Signal protocol such as WhatsApp.

### Security

Ed25519 remains by far the most popular instantiation of EdDSA. EdDSA is widely considered to provide better resistance to side-channel attacks than alternative schemes. See [here](https://eprint.iacr.org/2020/823.pdf) for more studies about the provable security of Ed25519.

A viable alternative is "ECDSA over secp256k1," used by both Bitcoin and Ethereum. However, reviews by many independents and well-known security professionals conclude that [Ed25519 is more secure compared to secp256k1](https://safecurves.cr.yp.to/) .

In fact, both [core developers of Bitcoin](https://bitcointalk.org/index.php?topic=103172.msg1134832#msg1134832) and [Vitalik Buterin](https://blog.ethereum.org/2015/07/05/on-abstraction/) contemplated transitioning their networks to Ed25519. But this didn't happen because the cost of porting was deemed too high. Interestingly, Ripple made such a migration in 2014.

### Performance

Verifications on Vite happen frequently since all transactions are broken into two components (“Request” and “Response”). As such, the network's performance is tied to the efficiency of the signature verification process. Shorter signatures also ease the load of the network transmission and the storage system.

Ed25519 fits our requirements since the signing process is fast and its signatures are short.

EdDSA instantiations such as Ed25519 can sign and verify signatures significantly faster than almost all other signatures schemes at similar security levels. For instance, per [recent data](https://ripple.com/dev-blog/curves-with-a-twist/), Ed25519 is several times faster than ECDSA over secp256k1. 

Ed25519 has considerably smaller signatures compared to schemes with similar speeds. In Ed25519, signatures are 64 bytes and public keys are 32 bytes. Here, the signature is slightly shorter than that of ECDSA.

See [here](https://bench.cr.yp.to/primitives-sign.html) for more detailed performance benchmarking information.

### Ed25519 - BLAKE2b

Instead of the original SHA-2 of Ed25519, Vite uses BLAKE2b, since the latter is faster and has the same security margin as SHA-3.
