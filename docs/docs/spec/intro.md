---
title: "Introduction"
sidebar_position: 1
---
 
This is a specification for the packaging, installation, update, and monitoring process of [EigenLayer](https://www.eigenlayer.xyz/) Nodes. AVS is used to participate in the EigenLayer restaking system, to know more about EigenLayer see its [documentation page](https://docs.eigenlayer.xyz/overview/readme). 

The current version of the specification is `v0.0.1`.

:::caution

The current version of the AVS Node specification should be considered a public alpha version. Therefore, it may undergo rapid changes and experience incompatibility issues until the first stable version is released.

:::

The description of the Specification is divided into the following sections:

- [Packaging & Upgrading](/docs/spec/packaging/): How developers can package their Nodes and how an AVS wizard setup tool can install and upgrade them.
- [Backup and Restore](/docs/spec/backup/intro): How an AVS wizard setup tool can backup and restore AVS services, mainly during an upgrade process or a disaster recovery. 
- [AVS Node API](docs/spec/category/api): HTTP RESTful API for AVS Nodes.
- [Metrics](/docs/spec/category/metrics): Prometheus standard metrics for AVS implementations.
- [Plugin](/docs/spec/plugin/intro): How developers can provide a plugin to extend the AVS wizard setup tool with AVS-specific features.
