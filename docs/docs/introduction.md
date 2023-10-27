---
sidebar_position: 0
---

# Introduction

The [EigenLayer](https://www.eigenlayer.xyz/) ecosystem allows Ethereum validators to restake their ETH and provide services to the network, such as a Data Availability Layer with a particular type of node software called [Actively Validated Services (AVS)](/docs/glossary#avs-actively-validated-service). 

With the increasing number of AVS use cases, there is a need for a convention on how to develop, maintain, create interoperability, and monitor them. Eigenlayer has partnered with Nethermind to create an [AVS Node](/docs/glossary#avs-node) Specification with those goals in mind. This documentation describes the AVS Node Specification.

 
## Definitions

### MUST

When the term "**MUST**" is used in this documentation, it denotes an absolute requirement. Failing to follow a "**MUST**" directive may result in the AVS  not functioning as intended or could lead to undesirable outcomes. It is imperative that operators and AVS developers adhere to any instruction or guideline marked with "**MUST**" to ensure the correct and optimal operation of the AVS.

Example Usage:

- "Operators **MUST** safeguard their keys."
- "The AVS **MUST** be updated to the latest version to access new features."

### SHOULD

The term "**SHOULD**" in this documentation indicates a strong recommendation. While not an absolute requirement like "**MUST**", following a "**SHOULD**" directive is highly advised to achieve the best possible experience or outcome. Ignoring a "**SHOULD**" guideline might not break the AVS, but it could lead to suboptimal results or missed opportunities for enhanced functionality.

Example Usage:

- "Operators **SHOULD** regularly back up their data to prevent potential loss."
- "For optimal performance, you **SHOULD** stick to the AVS hardware requirements."