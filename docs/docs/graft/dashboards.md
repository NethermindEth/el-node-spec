---
title: "Dashboards"
sidebar_position: 4
---

## Init dashboard

To initialize a dashboard using the `graft dashboard init` command, follow the steps below:

1. Run the following command:
    
    ```shell
    graft dashboard init --folder <folder-uid> --title <title>
    ```
    
2. Enter the required information, such as the `folder-uid` (unique identifier of the Grafana folder to save the dashboard inside), and `title` using the `--folder` and `--title` flags respectively.
3. Graft will create the dashboard with the specified information in the Grafana server, and it will be editable by the user using the Grafana UI.

:::caution

Note that the `uid` value should follow the naming pattern `el-[middleware]-dashboard-[name]` to avoid collisions when the end user imports backup files into their own Grafana instance.

:::

## Backup dashboards

o backup dashboards using the `graft dashboard backup` command, follow the steps below:

1. Run the following command:
    
    ```shell
    graft dashboard backup --folder <folder-uid>
    ```
    
2. Graft will create a backup of all the dashboards in the Grafana server folder, and save the backup files in a new directory called `dashboards` in the current working directory. If the `--folder` flag is not used, the first folder in the state file is used.

:::note

Note that the backup files will contain all the information necessary to restore the dashboards, including the `uid`, `title`, and other relevant configuration settings.

:::
