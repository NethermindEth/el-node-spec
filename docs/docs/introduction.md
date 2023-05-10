---
sidebar_position: 0
---

# Introduction

This is a specification for the packaging, installation, update, and monitoring process of [Eigen Layer](https://www.eigenlayer.xyz/) Nodes. AVS is used to participate in the Eigen Layer restaking system, to know more about Eigen Layer see its [documentation page](https://docs.eigenlayer.xyz/overview/readme). 

The current version of the specification is `v1.0.0`.

Documentation is divided into the following sections:

- [Setup wizard](/docs/wizard/intro): A AVS wizard setup tool, aimed at easing Node establishment.
- [Packaging & Upgrading](/docs/packaging/): How developers can package their Nodes and how a AVS wizard setup tool can install and upgrade them.
- [Backup and Restore](/docs/backup/intro): How a AVS wizard setup tool can backup and restore Middlewares services, mainly during an upgrade process or a disaster recovery.
- [Plugin](/docs/plugin/intro): How developers can provide a plugin to extend the AVS wizard setup tool with AVS-specific features.
- [Keys Management](/docs/keys/intro): Good practices for keys management.
- [Metrics](/docs/category/metrics): Prometheus standard metrics and Monitoring API for AVS implementations.
- [Monitoring Stack](/docs/monitoring/intro): How the AVS wizard setup tool can monitor Nodes and the host machine using Prometheus and Grafana.
- [Graft](/docs/graft/intro): A tool to help developers to create Grafana dashboards for their Nodes.
