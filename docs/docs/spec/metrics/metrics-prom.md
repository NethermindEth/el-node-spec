---
sidebar_position: 1
id: metrics-prom-spec
---

# Prometheus Metrics Specification

The table below defines metrics which may be captured by AVS Nodes which expose metrics to Prometheus. AVSs may expose additional metrics however these should not use the `eigen_` prefix. 

## Economics metrics

| Name | Metric Type | Definition | Labels |
|---|---|---|---|
| `eigen_fees_earned_total` | Counter | The amount of fees earned in `<unit>` of `<token>` | `token`, `unit` |
| `eigen_slashing_incurred_total` | Counter | The amount of slashing incurred in `<unit>` of `<token>` | `token`, `unit` |
| `eigen_balance_total` | Gauge | AVS Node total balance in `<unit>` of `<token>` | `token`, `unit` |

## Performance metrics

| Name | Metric Type | Definition | Labels |
|---|---|---|---|
| `eigen_performance_score` | Gauge | The performance metric is a score between 0 and 100 and each developer can define their own way of calculating the score. The score is calculated based on the performance of the AVS Node and the performance of the backing  services. |  |

## RPC metrics

| Name | Metric Type | Definition | Labels |
|---|---|---|---| 
| `eigen_rpc_request_duration_seconds` | Histogram | Duration of json-rpc `<method>` in seconds from Ethereum Execution client `<client>` | `method`, `client_version` |
| `eigen_rpc_request_total` | Counter | Total of json-rpc `<method>` requests from Ethereum Execution client `<client>` | `method`, `client_version` |

## Notation examples

* `eigen_fees_earned_total{token="ETH", unit="gwei"}`
* `eigen_slashing_incurred_total{token="ETH", unit="gwei"}`
* `eigen_total_balance_total{token="ETH", unit="gwei"}`
* `eigen_performance_score{}`
* `eigen_rpc_request_duration_seconds{method="eth_getBlockByNumber", client_version="nethermind/v1.17.2"}`
* `eigen_rpc_request_total{method="eth_getBlockByNumber", client_version="nethermind/v1.17.2"}` 