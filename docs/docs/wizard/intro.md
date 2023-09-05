---
title: "Introduction"
sidebar_position: 1
---
 
The specification described throughout this document can be used to manage multiple Nodes in the same host machine with a **AVS wizard setup tool**. Such a tool will be built and will provide the following functionalities:

- Install, Update, and Uninstall Nodes
- Set up a Monitoring stack for Nodes using Prometheus and Grafana
- Backup and Restore Nodes
- Run a [plugin](/docs/category/plugin) on a given Node setup
- Display Nodes logs
- Describe the status of an already set up Node

:::note Disclaimer

The AVS wizard setup tool has yet to be made available. It is currently in its development phase.

:::

:::tip

A work-in-progress description of the tool functionalities can be found [here](https://www.notion.so/nethermind/EXT-Wizard-Tool-Specification-e2d382de6fce4eadbc4e16dea4b24626?pvs=4)

:::

The tool will be open-source for on-premise setups only on Linux machines and **MUST** be installed by node operators that want access to all the tool's features. It will be developed and maintained jointly by Layr Labs Inc and Nethermind.

As more information becomes available and can be published in the future, this section will be progressively updated with additional details and insights regarding the setup wizard.

This guide is divided into the following sections:

- [Monitoring Stack](/docs/category/monitoring-stack): How the AVS wizard setup tool can monitor AVS Nodes and the host machine using Prometheus and Grafana.
- [Backup and Restore](/docs/spec/backup/intro): How the AVS wizard setup tool can backup and restore AVSs, mainly during an upgrade process or a disaster recovery. 