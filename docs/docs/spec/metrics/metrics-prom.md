---
sidebar_position: 1
id: metrics-prom-spec
---

# Prometheus Metrics Specification

The table below defines metrics which may be captured by Nodes which expose metrics to Prometheus. Nodes may expose additional metrics however these should not use the `eigen_` prefix. 

| Name | Metric Type | Definition | Labels |
|---|---|---|---|
| `eigen_fees_earned_total` | Counter | The amount of fees earned in `<token>` | `token` |
| `eigen_slashing_incurred_total` | Counter | The amount of slashing incurred in `<token>` | `token` |
| `eigen_balance_total` | Gauge | Node total balance in `<token>` | `token` |
| `eigen_performance_score` | Gauge | The performance metric is a score between 0 and 100 and each developer can define their own way of calculating the score. The score is calculated based on the performance of the Node and the performance of the backing  services. |  |
| `eigen_rpc_request_duration_seconds` | Histogram | Duration of json-rpc `<method>` in seconds from Ethereum Execution client `<client>` | `method`, `client`, `version` |
| `eigen_rpc_request_total` | Counter | Total of json-rpc `<method>` requests from Ethereum Execution client `<client>` | `method`,`client`,`version` |

## Notation examples

* `eigen_fees_earned_total{token="ETH"}`
* `eigen_slashing_incurred_total{token="ETH"}`
* `eigen_total_balance_total{token="ETH"}`
* `eigen_performance_score{}`
* `eigen_rpc_request_duration_seconds{method="eth_getBlockByNumber", client="nethermind", version="1.17.2"}`
* `eigen_rpc_request_total{method="eth_getBlockByNumber", client="nethermind", version="1.17.2"}` 