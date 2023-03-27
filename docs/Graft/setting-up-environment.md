---
title: "Setting up the environment"
sidebar_position: 2
---

To help the developer to create the initial environment, the state file could be declared defining the initial folders and data sources. This file is the `state.yml` file in the current directory by default but could be specified using the global flag `--state/-s`. E.g.:

```yaml
folders:
  - uid: el-eigenDA-folder
    title: Eigen Layer - Eigen DA
datasources:
  - uid: el-eigenDA-datasource
    name: Eigen DA
    type: prometheus
    url: http://prometheus:9090
    access: proxy
```

:::tip

The `uid` property is a unique `string` identifier inside the Grafana database. To know more about the importance of the good usage of this property, check the [The UID importance](./the-uid-importance) section.

:::

### State diff

To view the state diff using the `graft state diff` command, run the following command:

```bash
graft state diff
```

This command will display the differences between the current state and the previous state, e.g:

```bash
+ FOLDER Eigen Layer - Eigen DA (el-eigenDA-folder)
+ DATA SOURCE Eigen DA (el-eigenDA-datasource)
  + Name: Eigen DA
  + UID: el-eigenDA-datasource
  + Type: prometheus
  + URL: http://prometheus:9090
  + Access: proxy
```

### State apply

To apply the state declared in the YAML file, use the following command:

```
graft state apply
```

This will apply the changes defined in the state file, creating the specified folders and data sources in the Grafana server.
