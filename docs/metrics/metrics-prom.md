---
sidebar_position: 2
id: metrics-prom-spec
---

# Prometheus Metrics Specification

The table below defines metrics which may be captured by Middleware services which expose metrics to Prometheus. Middleware services may expose additional metrics however these should not use the `eigen_` prefix.

| Name | Metric Type | Definition | Labels |
|---|---|---|---|
| `eigen_fees_earned_total` | Counter | The amount of fees earned in `<token>` | `token` |
| `eigen_slashing_incurred_total` | Counter | The amount of slashing incurred in `<token>` | `token` |
| `eigen_balance_total` | Gauge | Middleware total balance in `<token>` | `token` |
| `eigen_performance_score` | Gauge | The performance metric is a score between 0 and 100 and each middleware provider can define their own way of calculating the score. The score is calculated based on the performance of the middleware service and the performance of the backing  services. |  |
| `eigen_rpc_request_duration_seconds` | Histogram | Duration of json-rpc `<method>` in seconds | `method`, `client`, `version` |
| `eigen_rpc_request_total` | Counter | Total of json-rpc `<method>` requests | `method`,`client`,`version` |
| `eigen_version` | Gauge | Version metadata | `commit`, `runtime`, `version` |

## Notation examples

* `eigen_fees_earned_total{token="ETH"}`
* `eigen_slashing_incurred_total{token="ETH"}`
* `eigen_total_balance_total{token="ETH"}`
* `eigen_rpc_request_duration_seconds{method="eth_blockNumber", client="nethermind", version="1.17.2"}`
* `eigen_rpc_request_total{method="eth_blockNumber", client="nethermind", version="1.17.2"}` 
* `eigen_version{commit="120f4c8db352845f93b0e86a46b5f807297e4ac3", runtime=".NET 7.0.3", version="1.17.2"}`