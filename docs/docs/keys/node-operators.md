---
sidebar_position: 4 
id: node-operators
---

# Key Management Best Practices for Node Operators

For Node Operators, such as institutional stakers or those managing numerous validator keys, staking services like **[Twinstake](https://twinstake.io/)** can be advantageous, as they allow for continuous fund control while combining technical, risk, and treasury management expertise. With such services, there is no need to maintain infrastructure or develop safe key signing or management mechanisms. However, some Node Operators possess the resources to deploy and maintain the required infrastructure for running nodes effectively for multiple validator keys. A detailed blog discussing various security layers can be found **[here](https://www.attestant.io/posts/protecting-validator-keys/)**.

Below are a few recommendations:

- Secure keys, including secrets such as passphrases or mnemonics, using services like AWS Secrets Manager or Hashicorp Vault. These services can be seamlessly integrated with automated mechanisms that safely retrieve secrets or keys (e.g., remote signers). If resources permit, consider running your own Hashicorp Vault instance, which grants full custody of keys and secrets while sacrificing the service provider's availability and security guarantees.
- Avoid generating all keys with the same mnemonic. Minimize the attack surface by employing a new mnemonic for every 200 or 1000 validator keys, depending on your preference. This approach also reduces the risk of losing key generation capabilities if a single mnemonic is lost, and limits the impact if an attacker gains access to a few mnemonics.
- Use a remote signer like **[Web3signer](https://github.com/ConsenSys/web3signer)** or, better yet, distributed signers to eliminate single points of failure.
- Develop a custom solution involving tailor-made tools. For instance, use Web3signer for remote signing and store keys on AWS Secrets Manager. A custom tool can manage automatic key storage in Secrets Manager and facilitate interactions with Web3signer.