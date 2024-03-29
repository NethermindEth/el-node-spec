# AVS Specification

This is a specification for running [EigenLayer](https://www.eigenlayer.xyz/) AVS Nodes. AVS is used to participate in the EigenLayer restake system, to know more about EigenLayer see its [documentation page](https://docs.eigenlayer.xyz/overview/readme).

## Docs

Documentation in the `docs` folder is the best place to start learning about the specification and how the AVS wizard setup tool could be used to manage AVSs following it. Follow [this documentation link](https://eigen.nethermind.io/docs/introduction) to read it.

## Grafana dashboards

Grafana dashboards are available in the `grafana` folder. They could be used to monitor the AVS nodes following the metrics specification. Monitoring is divided into two sets: one for the AVS nodes itself and one for the host machine. Follow [this link](https://eigen.nethermind.io/docs/monitoring/intro) to read Monitoring Stack documentation.

Inside the `grafana` folder are two subfolders explained below:

- `dashboards`: Grafana dashboards for Nodes monitoring with common metrics that will be used by all AVS (the `Common Metrics.json` file), and a dashboard for host monitoring (the `Nose Exporter.json` file) using a [Node Exporter](https://github.com/prometheus/node_exporter) instance to collect host metrics.
- `panels`: Panels are used by the dashboards, and need to be stored in the Grafana instance as [Library Panels](https://grafana.com/docs/grafana/latest/dashboards/build-dashboards/manage-library-panels/) by the AVS wizard setup tool.

## Graft

Graft is a tool to help Developers to create custom dashboards and panels that could be provided to the AVS wizard setup tool in the Node package and then installed in the Grafana instance. Follow [this link](https://eigen.nethermind.io/docs/graft/intro) to read Graft documentation.
