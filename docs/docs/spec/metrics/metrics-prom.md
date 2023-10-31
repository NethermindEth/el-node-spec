---
sidebar_position: 1
id: metrics-prom-spec
---

# Prometheus Metrics Specification

The table below defines metrics which may be captured by AVS Nodes which expose metrics to Prometheus. AVSs may expose additional metrics however these should not use the `eigen_` prefix. 

## Economics metrics

| Name | Metric Type | Definition | Labels |
|---|---|---|---|
| `eigen_registered_stakes` | Gauge | Operator stakes in AVS registry contract. Most commonly represents a weighted combination of delegated shares in the `DelegationManager` EigenLayer contract. | `quorum_number`, `quorum_name` |
<!-- This is commented for M2 testnet. It will be uncommented for mainnet -->
<!-- | `eigen_fees_earned_total` | Counter | The amount of fees earned in `<unit>` of underlying `<token>` in the `<strategy>` contract. This metric **SHOULD** be omitted while fees are yet to be implemented. | `token`, `unit`, `strategy` |
| `eigen_slashing_status` | Gauge | Slashing status. The value **MUST** be 1 if the operator running `avs` has been slashed. This metric **SHOULD** not be implemented if there is no slashing in the target network (like in the upcoming testnet launch). | `avs` | -->


:::note

A definition of a strategy contract can be found in the [Glossary](/docs/glossary#strategy-contract).

:::

:::tip

The `quorum_name` label of the `eigen_registered_stakes` metric is optional and can be omitted.

:::

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

* `eigen_registered_stakes{quorum_number=0, quorum_name="ethLST"}`
* `eigen_performance_score{}`
* `eigen_rpc_request_duration_seconds{method="eth_getBlockByNumber", client_version="nethermind/v1.17.2"}`
* `eigen_rpc_request_total{method="eth_getBlockByNumber", client_version="nethermind/v1.17.2"}` 