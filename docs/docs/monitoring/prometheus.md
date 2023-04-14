---
title: Prometheus
sidebar_position: 2
---

The CLI tool deploys the [Prometheus](https://prometheus.io/) instance as part of the [Monitoring Stack](/docs/monitoring/intro) to collect metrics from the host machine and middlewares. Initially the only target is the [Node Exporter](/docs/monitoring/node-exporter), but middleware targets are added dynamically by the CLI tool when a new middleware is deployed.