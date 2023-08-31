---
title: "Dashboards"
sidebar_position: 3
---

## Init dashboard

Dashboards initialized with graft are stored in the Eigen Layer folder in the Grafana instance. To initialize a new dashboard use the following command:

```shell
graft dashboard create [title]
```
    
Graft will create an empty dashboard with the specified title in the Eigen Layer folder.

This command could be executed in the folder with the configuration file or alternatively, the `--config/-c` flag could be used to specify the path to it.

## Backup dashboards

Dashboards are saved in JSON format, and they could be restored using the Grafana UI later, or by using the [AVS setup wizard tool](../wizard/intro). To get all the dashboard JSON files in the Eigen Layer folder, use the following command:
    
```shell
graft dashboard backup
```

This will save all the JSON dashboards in the `dashboards` directory in the current working directory. Could be useful to run it in the root of the Node profile directory to save dashboards following the Node package structure, follow [this link](/docs/packaging/#profile) to learn more about the Node profile structure.

:::note

Note that the backup files will contain all the information necessary to restore the dashboards, including the `uid`, `title`, and other relevant configuration settings.

:::
