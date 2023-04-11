---
sidebar_position: 3 
id: profiles
---

# Profile file

The configuration/profile file should be in YAML format and contain information about the Middleware profile and its options. Options are any argument, flag, configuration value, or environment variable of any services within the Middleware service `docker-compose.yml` whose value might be required from the user input. 

The file’s name must be `profile.yml`.

The `docker-compose.yml` is designed for a given setup of a given Middleware version, and may have hardcoded values or settings, either in the `docker-compose.yml` or in the form of environment variables in a `.env` file with values. Settings could also be declared in the profile file in the `options` section, considering that an option is a flag mapping of our tool to an environment variable in the `docker-compose.yml` file. Because it could be declared in more than one place, we need to define some precedence rules, which are:

1. The value set with a CLI flag because the option is in the package profile
2. The default value in the package profile if it is defined and is not set with the CLI
3. Value hardcoded in the `.env` provided in the package by the middleware developer

A Middleware setup wizard tool would use each option or setting in the profile file to get this information from the user via prompts or arguments. In case of an upgrade, values of unchanged settings can be used in the new version, and values for new settings would have to be requested by the user.

## Profile file specification

### Profile file

```yaml
# Version of Profile file specification
version: <string>

# Metadata about middleware
metadata: <metadata>

# List of options the user can set or use default values if defined in the <option>. Each option is an environment variable in the docker-compose file, middleware developers need to be careful about what options to expose here
options:
	[ - <option> ]

# Monitoring options
monitoring: <monitoring>
```

### `<option>`

```yaml
# Name of the flag that the end-user will use to reference this option with a Middleware setup wizard
name: <string>

# Name of the env variable used in the docker-compose file
target: <string>

# Data type of the option: enum, int, float, string, bool, etc. These types will be defined in another section with more details
type: <type>

# Default value
default: <default>

# Custom validation defined for this value
validate: <validate>

# Help description about this 
help: <string>
```

### `<type>`

```yaml
int: 42
float: 3.14
bool: true
str: "Hello, World!"
path_dir: ./path/to/a/dir
path_file: ./path/to/a/file
uri: https://eigenlayer.com
enum: [value1, value2, value3]
port: 8080
```

These types will be used for automatic validation of the values provided by the user. For instance, if the setting’s type is `path_file`, a Middleware setup wizard tool would validate that a file exists on the provided path.

:::caution

Any port exposed under the `ports:` field in the `docker-compose.yml` **MUST** be represented by an `option` within the `options` list in the profile file, and the type `port` **MUST** be used. This allows port collision checks between multiple Middleware services running in the same host machine.

A Middleware setup wizard could do these checks to guarantee an open port for each port target.

:::

### `<validate>`

```yaml
# RE2 regex https://github.com/google/re2/wiki/Syntax. Will be ignored if it is used for a type different from <string>
re2_regex: <string>

# Format of the file to validate. Will be ignored if it is used for a type different from <path_file>
format: <string>

# List of accepted URL schemes. Will be ignored if it is used for a type different from <uri>
uri_scheme: [ - <string> ]

# Min value that could be, included. Will be ignored if it is used for a type different from <int> or <float>
min_value: <int|float>

# Max value that could be, included. Will be ignored if it is used for a type different from <int> or <float>
max_value: <int|float>
```

### `<monitoring>`

```yaml
# Tag to be used for a Middleware setup wizard alongside the `name` from the manifest file to create a unique label that allows metrics to differentiate from other middleware instances metrics
tag: <string>

# List of metric targets inside the docker-compose
targets:
	[ - <monitoring-target> ]
```

### `<monitoring-target>`

```yaml
# Name of the docker-compose service
service: <string>

# Port serving the metrics
port: <int>

# Metrics path, for instance: /metrics
path: <string>
```

## Monitoring and metrics settings

A middleware environment is a set of services deployed with Docker in the same Docker network. Prometheus metrics can be fetched from exporters that each service could implement. To know where these metrics are, we can rely on [docker container networking](https://docs.docker.com/config/containers/container-networking/) to reference services.

The monitoring setup is the set of a Grafana instance, Prometheus, and Node Exporter. Grafana has a global dashboard with metrics from [Node Exporter](https://github.com/prometheus/node_exporter) to monitor host performance. To view middleware dashboards in Grafana, the middleware package contains `dashboards/` and `panels/` folders that would be deployed to the Grafana instance when the middleware is added. Also, alerting rules could be provided following the [Grafana file provisioning](https://grafana.com/docs/grafana/latest/alerting/set-up/provision-alerting-resources/file-provisioning/#provision-alert-rules) for alerting, all the alert rules that the middleware wants to add to Grafana are under the `alerts/` folder.

:::tip

A Middleware setup wizard could take care of the monitoring stack setup based on the settings provided in the profile file.

:::

:::note

Alerting contact points would be configured with the setup wizard regardless of the middleware, for instance: [Email](https://grafana.com/docs/grafana/latest/alerting/set-up/provision-alerting-resources/file-provisioning/#e-mail), [Opsgenie](https://grafana.com/docs/grafana/latest/alerting/set-up/provision-alerting-resources/file-provisioning/#opsgenie), [Slack](https://grafana.com/docs/grafana/latest/alerting/set-up/provision-alerting-resources/file-provisioning/#slack) or [Telegram](https://grafana.com/docs/grafana/latest/alerting/set-up/provision-alerting-resources/file-provisioning/#telegram).

:::

The profile file is the place to declare Prometheus targets inside the middleware setup mentioning the service name, port, and path to get metrics. Also, the `tag` value is declared, this value is important to differentiate metrics from different middleware instances. 

The metrics port could be exposed in the `docker-compose.yml` for it to be reachable from outside the host machine, but is not mandatory to do so.