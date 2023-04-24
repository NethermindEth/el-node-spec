---
sidebar_position: 1
---

# Intro

This is a specification for the packaging, installation, update, and monitoring process of [Eigen Layer](https://www.eigenlayer.xyz/) middlewares. Middleware is used to participate in the Eigen Layer restake system, to know more about Eigen Layer see its [documentation page](https://docs.eigenlayer.xyz/overview/readme). This specification could be used to manage multiple middlewares in the same host machine with a Middleware wizard setup tool.

Documentation is divided into the following sections:

- [Packaging & Upgrading](/docs/packaging/): How middleware developers could package their middlewares and how a Middleware wizard setup tool could install and upgrade them.
- [Backup and Restore](/docs/backup/intro): How a Middleware wizard setup tool could backup and restore middlewares services, mainly during an upgrade process or a disaster recovery.
- [Plugin](/docs/plugin/intro): How middleware developers could provide a plugin to extend the Middleware wizard setup tool with middleware-specific features.
- [Keys Management](/docs/keys/intro): Good practices for keys management.
- [Metrics](/docs/category/metrics): Prometheus standard metrics and API for middlewares implementations.
- [Monitoring Stack](/docs/monitoring/intro): How the Middleware wizard setup tool could monitor middlewares services and the host machine using Prometheus and Grafana.
- [Graft](/docs/graft/intro): A tool to help middleware developers to create Grafana dashboards for their middlewares.
