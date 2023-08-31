---
title: "Configuration"
sidebar_position: 2
---

Configuration file could be used to list all the data sources required to build dashboards and panels. This file is the `graft.yml` file in the current directory by default but could be specified using the global flag `--config/-c`. E.g.:

```yaml
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

### Connect to Grafana instance

Environment variables listed below are used to connect to the Grafana instance, if they are not set, the default values will be used:

| Variable | Default value |
| --- | --- |
| GRAFANA_URL | http://localhost:3000 |
| GRAFANA_USER | admin |
| GRAFANA_PASSWORD | admin |

### Initialize configuration

To initialize the configuration file in the current directory and the Eigen Layer folder in the Grafana instance run the following command:

```shell
graft init
```

After running this command, the `graft.yml` file will be created in the current directory and the Eigen Layer folder will be created in the Grafana instance.

### Configuration diff

Configuration diff is the difference between the current configuration file and the current state of the Grafana instance, specifically the data sources. To view the configuration diff use the following command:

```bash
graft config diff
```

This command will display the differences between the current state and the previous state, e.g:

#### Configuration file

```yaml
datasources:
  - name: Eigen DA
    uid: el-eigen_da
    type: prometheus
    url: http://prometheus:9090
    access: proxy
```

#### Diff output

```bash
$ graft config diff
+ DATA SOURCE Eigen DA (el-eigen_da)
  + Name: Eigen DA
  + UID: el-eigen_da
  + Type: prometheus
  + URL: http://prometheus:9090
  + Access: proxy
```

### Apply configuration

To apply the configuration in the configuration file to the Grafana instance, use the following command:

```
graft config apply
```

This will create all the data sources listed in the configuration file in the Grafana instance.
