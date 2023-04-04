---
sidebar_position: 3
id: metrics-examples
---

# Implementation reference

This guide is intended to showcase the practical application of monitoring APIs and Prometheus metrics using authentic examples. Examples used are:

- EigenDA
- Roll-ups

Some metrics and endpoints are very straightforward, but having a reference for the responses and labels can be helpful.

## EigenDA Example

### HTTP Monitoring API

#### GET /eigen/middleware/spec-version

#### Response

```
{
    "api_version": "v1.0.0"
}
```

#### GET /eigen/v1/middleware/version

#### Response

```
{
  "version": "EigenDA-Middleware/v1.0.0"
}
```

#### GET /eigen/v1/middleware/health

#### Response

```
200 OK
```

#### GET /eigen/v1/middleware/services

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

#### GET /eigen/v1/middleware/services/graph-node-da/health

#### Response

```
200 OK
```

#### GET /eigen/v1/middleware/services/ipfs-da/health

#### Response

```
206 Partial Content
```

#### GET /eigen/v1/middleware/services/postgres-da/health

#### Response

```
503 Service Unavailable
```

### Prometheus Metrics

#### Economics metrics
* `eigen_fees_earned_total{middleware_name="EigenDA", token="ETH"}`
* `eigen_slashing_incurred_total{middleware_name="EigenDA", token="ETH"}`
* `eigen_total_balance_total{middleware_name="EigenDA", token="ETH"}`

#### Metadata metrics
* `eigen_version{middleware_name="EigenDA", commit="120f4c8db352845f93b0e86a46b5f807297e4ac3", runtime="Go 1.19.0", version="1.0.0"}`

#### Perfomance metrics
* `eigen_performance_score{middleware_name="EigenDA"}`

#### RPC metrics
* `eigen_rpc_request_duration_seconds{middleware_name="EigenDA", method="eth_getBlockByNumber", client="nethermind", version="1.17.2"}`
* `eigen_rpc_request_total{middleware_name="EigenDA", method="eth_estimateGas", client="nethermind", version="1.17.2"}` 

## Roll-ups

### HTTP Monitoring API

#### GET /eigen/middleware/spec-version

#### Response

```
{
    "api_version": "v1.0.0"
}
```

#### GET /eigen/v1/middleware/version

#### Response

```
{
  "version": "<fill here>"
}
```

#### GET /eigen/v1/middleware/health

#### Response

```
200 OK
```

### GET /eigen/v1/middleware/services

### Response

```
{
  "services": [
    {
      "id": "<fill here>",
      "name": "<fill here>",
      "description": "<fill here>",
      "status": "Up",
    } 
  ]
}
```

#### GET /eigen/v1/middleware/services/graph-node-da/health

#### Response

```
200 OK
```

#### GET /eigen/v1/middleware/services/ipfs-da/health

#### Response

```
206 Partial Content
```

#### GET /eigen/v1/middleware/services/postgres-da/health

#### Response

```
503 Service Unavailable
```

### Prometheus Metrics

#### Economics metrics
* `eigen_fees_earned_total{middleware_name="<fill here>", token="ETH"}`
* `eigen_slashing_incurred_total{middleware_name="<fill here>", token="ETH"}`
* `eigen_total_balance_total{middleware_name="<fill here>", token="ETH"}`

#### Metadata metrics
* `eigen_version{middleware_name="<fill here>", commit="120f4c8db352845f93b0e86a46b5f807297e4ac3", runtime="<fill here>", version="1.0.0"}`

#### Perfomance metrics
* `eigen_performance_score{middleware_name="<fill here>"}`

#### RPC metrics
* `eigen_rpc_request_duration_seconds{middleware_name="<fill here>", method="eth_getBlockByNumber", client="nethermind", version="1.17.2"}`
* `eigen_rpc_request_total{middleware_name="<fill here>", method="eth_estimateGas", client="nethermind", version="1.17.2"}`