# Middleware Specification

This is a specification for the packaging, installation, update, and monitoring process of [Eigen Layer](https://www.eigenlayer.xyz/) middlewares. Middleware is used to participate in the Eigen Layer restake system, to know more about Eigen Layer see its [documentation page](https://docs.eigenlayer.xyz/overview/readme). This specification could be used to manage multiple middlewares in the same host machine with the [Middleware wizard setup tool](https://middleware.nethermind.io/docs/wizard/intro).

## Docs

Documentation in the `docs` folder is the best place to start learning about the specification and how the Middleware wizard setup tool could be used to manage middlewares following it. Follow \<this link> to read the documentation.

## Grafana dashboards

Grafana dashboards are available in the `grafana` folder. They could be used to monitor the middlewares following the metrics specification. Monitoring is divided into two sets: one for the middlewares itself and one for the host machine. Follow \<this link> to read Monitoring Stack documentation.

Inside the `grafana` folder are two subfolders explained below:

- `dashboards`: Grafana dashboards for middleware monitoring with common metrics that will be used by all middlewares (the `Common Metrics.json` file), and a dashboard for host monitoring (the `Nose Exporter.json` file) using a [Node Exporter](https://github.com/prometheus/node_exporter) instance to collect host metrics.
- `panels`: Panels are used by the dashboards, and need to be stored in the Grafana instance as [Library Panels](https://grafana.com/docs/grafana/latest/dashboards/build-dashboards/manage-library-panels/) by the Middleware wizard setup tool.

## Graft

Graft is a tool to help middleware developers to create custom dashboards and panels that could be provided to the Middleware wizard setup tool in the middleware package and then installed in the Grafana instance. Follow \<this link> to read Graft documentation.
