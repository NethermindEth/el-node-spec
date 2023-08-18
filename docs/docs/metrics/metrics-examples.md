---
sidebar_position: 2
id: metrics-examples
---

# Implementation reference

This guide is intended to showcase the practical application of the Prometheus metrics using authentic examples. Examples used are:

- EigenDA

Some metrics and endpoints are very straightforward, but having a reference for the responses and labels can be helpful.

## EigenDA Example

## Prometheus Metrics

### Economics metrics
* `eigen_fees_earned_total{avs_name="EigenDA", token="ETH"}`
* `eigen_slashing_incurred_total{avs_name="EigenDA", token="ETH"}`
* `eigen_total_balance_total{avs_name="EigenDA", token="ETH"}`

### Perfomance metrics
* `eigen_performance_score{avs_name="EigenDA"}`

### RPC metrics
* `eigen_rpc_request_duration_seconds{avs_name="EigenDA", method="eth_getBlockByNumber", client="nethermind", version="1.17.2"}`
* `eigen_rpc_request_total{avs_name="EigenDA", method="eth_estimateGas", client="nethermind", version="1.17.2"}` 
