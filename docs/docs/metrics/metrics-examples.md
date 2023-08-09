---
sidebar_position: 3
id: metrics-examples
---

# Implementation reference

This guide is intended to showcase the practical application of monitoring APIs and Prometheus metrics using authentic examples. Examples used are:

- EigenDA

Some metrics and endpoints are very straightforward, but having a reference for the responses and labels can be helpful.

## EigenDA Example

### HTTP Monitoring API

#### GET /eigen/node/spec-version

#### Response

```
{
    "api_version": "v0.0.1"
}
```

#### GET /eigen/node/version

#### Response

```
{
  "version": "EigenDA-AVS/v0.0.1"
}
```

#### GET /eigen/node/health

#### Response

```
200 OK
```

#### GET /eigen/node/services

### Response

```
{
  "services": [
    {
      "id": "graph-node-da",
      "name": "graph-node",
      "description": "Indexer graph node description",
      "status": "Up",
    },
    {
      "id": "ipfs-da",
      "name": "ipfs",
      "description": "ipfs instance description",
      "status": "Down",
    },
    {
      "id": "postgres-da",
      "name": "postgres",
      "description": "Postgres DB description",
      "status": "Initializing",
    }
  ]
}
```

#### GET /eigen/node/services/graph-node-da/health

#### Response

```
200 OK
```

#### GET /eigen/node/services/ipfs-da/health

#### Response

```
206 Partial Content
```

#### GET /eigen/node/services/postgres-da/health

#### Response

```
503 Service Unavailable
```

### Prometheus Metrics

#### Economics metrics
* `eigen_fees_earned_total{avs_name="EigenDA", token="ETH"}`
* `eigen_slashing_incurred_total{avs_name="EigenDA", token="ETH"}`
* `eigen_total_balance_total{avs_name="EigenDA", token="ETH"}`

#### Metadata metrics
* `eigen_version{avs_name="EigenDA", commit="120f4c8db352845f93b0e86a46b5f807297e4ac3", runtime="Go 1.19.0", version="0.0.1"}`

#### Perfomance metrics
* `eigen_performance_score{avs_name="EigenDA"}`

#### RPC metrics
* `eigen_rpc_request_duration_seconds{avs_name="EigenDA", method="eth_getBlockByNumber", client="nethermind", version="1.17.2"}`
* `eigen_rpc_request_total{avs_name="EigenDA", method="eth_estimateGas", client="nethermind", version="1.17.2"}` 
