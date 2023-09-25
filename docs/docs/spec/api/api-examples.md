---
sidebar_position: 2
id: api-examples
---

# Implementation reference

This guide is intended to showcase the practical application of the AVS Node API using authentic examples. Examples used are:

- EigenDA

## EigenDA Example

### GET /eigen/node

### Response

```
{
    "node_name": "EigenDA-AVS",
    "spec_version": "v0.0.1",
    "node_version": "v1.0.0"
}
```

### GET /eigen/node/health

### Response

```
200 OK
```

### GET /eigen/node/services

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

### GET /eigen/node/services/graph-node-da/health

### Response

```
200 OK
```

### GET /eigen/node/services/ipfs-da/health

### Response

```
503 Service Unavailable
```

### GET /eigen/node/services/postgres-da/health

### Response

```
206 Partial Content
```
