---
title: "Panels"
sidebar_position: 3
---

## Init panel

To initialize a panel using the `tool panel init` command, follow the steps below:

1. Run the following command:
    
    ```shell
    tool panel init --uid <uid> --name <name>
    ```
    
2. Enter the required information, such as the `uid` (unique identifier), and `name` using the `--uid` and `--name` flags respectively
3. The tool will create the panel with the specified information in the Grafana server, and it will be editable by the user using the Grafana UI.

:::caution

Note that the `uid` value should follow the naming pattern `el-[middleware]-panel-[name]` to avoid collisions when the end user imports backup files into their own Grafana instance.

:::

## Backup panels

To backup panels using the `tool panel backup` command, follow the steps below:

1. Run the following command:
    
    ```shell
    tool panel backup --folder <folder-uid>
    ```
    
2. The tool will create a backup of all panels in the Grafana server folder, and save the backup files in a new directory called `panels` in the current working directory. If `--folder` flag is not used, the first folder in the state file is used.

:::note

Note that the backup files will contain all the information necessary to restore the panels, including the `uid`, `name`, and other relevant configuration settings.

:::
