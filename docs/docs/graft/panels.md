---
title: "Panels"
sidebar_position: 4
---

## Init panel

It is important to initialize panels using graft to ensure that the panels are stored in the Eigen Layer folder and also is the only way to set the `uid` property of the panel, which is essential to avoid collisions when the end user imports backup files into their own Grafana instance.

To initialize a new panel run following command:

```shell
graft panel init --uid <uid> --name <name>
```

This command could be executed in the folder with the configuration file or alternatively, the `--config/-c` flag could be used to specify the path to it.

After running this command, the panel will be available in the Grafana Library panels list, and it will be editable by the user using the Grafana UI.

:::caution

Note that the `uid` value should follow the naming pattern `el-[middleware]-panel-[name]` to avoid collisions when the end user imports backup files into their own Grafana instance.

:::

## Backup panels

Panels are saved in JSON format, and can be automatically restored by a Middleware setup wizard in the Grafana UI during Middleware installation time. To get all the panel JSON files in the Eigen Layer folder, use the following command:

```shell
graft panel backup
```
    
This will save all the JSON panels in the `panels` directory in the current working directory. Could be useful to run it in the root of the Middleware profile directory to save panels following the Middleware package structure, follow [this link](/docs/packaging/#profile) to learn more about the Middleware profile structure.

:::note

Note that the backup files will contain all the information necessary to restore the panels, including the `uid`, `name`, and other relevant configuration settings.

:::
