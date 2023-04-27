---
title: Demo
---

This section contains the step sequence to create dashboards and panels using graft.

## Setting up the environment

> [Click here to see the Configuration section](/docs/graft/config)

The first thing that we need is a Grafana and Prometheus instance. To do this you can use a simple docker-compose file like the one below:

```yaml
version: '3.8'

services:
  grafana:
    image: grafana/grafana:9.1.7
    environment:
      - GF_SECURITY_ADMIN_USER=<user>
      - GF_SECURITY_ADMIN_PASSWORD=<password>
    ports:
      - 3000:3000
    volumes:
      - grafana-storage:/var/lib/grafana
  prometheus:
    image: prom/prometheus:v2.43.0
    expose:
      - 9090
    ports:
      - 9090:9090
    volumes:
      - prometheus-data:/prometheus

volumes:
  grafana-storage:
  prometheus-data:
```

:::note
Replace `<user>` and `<password>` in the docker-compose file above with the desired username and password for the Grafana instance.
:::

:::note
You need to have a Middleware metrics provider that could be a real Middleware or a mock Middleware instance. You need to configure prometheus properly to scrape the metrics from the Middleware. For more information about how to configure prometheus to scrape metrics check the [Prometheus documentation](https://prometheus.io/docs/prometheus/latest/configuration/configuration/).
:::

Once services are up and running, the next thing to do is create the Eigen Layer folder in the Grafana instance, and this folder is the one that will contain all the dashboards and panels that will be saved at the end. To do this, run the following command:

```shell
graft init
```

This command also creates the empty `graft.yml` configuration file in the current directory.

Now check that the Eigen Layer folder is created in the Grafana instance in the Dashboard section like the image below:

![Eigen Layer folder](/img/graft-el-folder.png)

Now you need to add the prometheus datasource to Grafana. To do this replace the `graft.yml` configuration file content in the current directory with the following:

```yaml
datasources:
  - name: Eigen DA
    uid: el-eigen_da
    type: prometheus
    url: http://prometheus:9090
    access: proxy
```

Now run the following command to check the configuration diff:

```shell
graft config diff
```
**Output:**
```shell
+ DATA SOURCE Eigen DA (el-eigen_da)
  + Name: Eigen DA
  + UID: el-eigen_da
  + Type: prometheus
  + URL: http://prometheus:9090
  + Access: proxy
```

Diff output shows that the data source is not present in the Grafana instance, now run the following command to apply the configuration:

```shell
graft config apply
```

If everything goes well, you should see a log message with `Creating data source Eigen DA el-eigen_da`. Also you can check the Grafana datasources section and see something like the image below:

![EigenDA datasource](/img/graft-el-datasources.png)

To check that the datasource is working, click on the Eigen DA datasource and press the `Save & Test` button at the end of the page. If everything goes well, you should see a message like the image below:

![EigenDA datasource test](/img/graft-el-datasource-test.png)

## Creating dashboards and panels

> [Click here to see the Dashboard section](/docs/graft/dashboards)

> [Click here to see the Panel section](/docs/graft/panels)

### Dashboard

Now the environment is set up, next step is to create a dashboard. To do this run the `graft dashboard create` command to create the dashboard in the Eigen Layer folder. In this case we are going to create a dashboard called `Demo`:

```shell
graft dashboard create Demo
```

Now you can check that the dashboard is created in the Eigen Layer folder like the image below:

![Eigen Layer dashboard](/img/graft-el-dashboard-list.png)

Now you can open the dashboard in Grafana, which is empty at the moment, and start editing it adding panels.

### Panel

To create a panel, and be available in the Library panel section run the following command:

```shell
graft panel init --name "Demo panel" --uid el-eigenda-panel-demo
```

This command creates a new panel with the name `Demo panel` and the UID `el-eigenda-panel-demo` in the `panels` folder. Now it could be used in the dashboard created previously to edit it. To add the panel press the add panel option at the top-right section and select the `Add a panel from the panel library` option like the image below:

![Eigen Layer add panel](/img/graft-el-addpanel.png)

Select the `Demo panel` and it will be added to the dashboard

![Select panel](/img/graft-el-select-panel.png)

The first time the panel is added, a _Panel plugin not found_ error message will be shown in the panel placeholder. This is normal behavior because the panel is completely empty. At this point, you can start editing the panel and adding the desired metrics and visualization. Once the panel is ready, press the `Save library panel` button at the top-right section of the panel editor like the image below:

![Save panel](/img/graft-el-panel-save.png)

:::note
Because it is a library panel a confirmation message will be shown asking if you want to save the panel and displaying the list of dashboards that will be affected by the change. This is because a library panel could be used for multiple dashboards. In this case, select `Update all` and will be ok.

![Save panel confirmation](/img/graft-el-panel-save-confirm.png)
:::

This is how the dashboard looks now:

![Dashboard with panel](/img/graft-el-dashboard-panel.png)

## Backup panels and dashboards

### Dashboard

To backup dashboards in the Eigen Layer folder (all the ones created by graft), run the following command:

```shell
graft dashboard backup
```

Then you can check the dashboards folder and see the JSON files, one for each dashboard.

```shell
$ tree dashboards
dashboards
└── Demo.json

0 directories, 1 file
```

### Panel

To backup panels in the Eigen Layer folder (all the ones created by graft) run the following command:

```shell
graft panel backup
```

Then you can check the panels folder and see the JSON files, one for each panel:

```shell
tree panels
panels
└── el-eigenda-panel-demo.json

0 directories, 1 file
```
