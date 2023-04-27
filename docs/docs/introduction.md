---
sidebar_position: 0
---

# Introduction

This is a specification for the packaging, installation, update, and monitoring process of [Eigen Layer](https://www.eigenlayer.xyz/) Middleware services. Middleware is used to participate in the Eigen Layer restaking system, to know more about Eigen Layer see its [documentation page](https://docs.eigenlayer.xyz/overview/readme). This specification can be used to manage multiple Middleware services in the same host machine with a Middleware wizard setup tool.

The current version of the specification is `v1.0.0`.

Documentation is divided into the following sections:

- [Packaging & Upgrading](/docs/packaging/): How Middleware developers can package their middlewares and how a Middleware wizard setup tool can install and upgrade them.
- [Backup and Restore](/docs/backup/intro): How a Middleware wizard setup tool can backup and restore Middlewares services, mainly during an upgrade process or a disaster recovery.
- [Plugin](/docs/plugin/intro): How Middleware developers can provide a plugin to extend the Middleware wizard setup tool with Middleware-specific features.
- [Keys Management](/docs/keys/intro): Good practices for keys management.
- [Metrics](/docs/category/metrics): Prometheus standard metrics and Monitoring API for Middleware implementations.
- [Monitoring Stack](/docs/monitoring/intro): How the Middleware wizard setup tool can monitor Middlewares services and the host machine using Prometheus and Grafana.
- [Graft](/docs/graft/intro): A tool to help Middleware developers to create Grafana dashboards for their Middleware services.
