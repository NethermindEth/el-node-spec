---
sidebar_position: 3 
id: profiles
---

# Profile file

The configuration/profile file should be in YAML format and contain information about the AVS Node profile and its options. Options are any argument, flag, configuration value, or environment variable of any services within the AVS Node `docker-compose.yml` whose value might be required from the user input. 

The file’s name **MUST** be `profile.yml`.

The `docker-compose.yml` is designed for a given setup of a given AVS Node version, and may have hardcoded values or settings, either in the `docker-compose.yml` or in the form of environment variables in a `.env` file with values. Settings could also be declared in the profile file in the `options` section, considering that an option is a flag mapping to an environment variable in the `docker-compose.yml` file. 

The [AVS setup wizard tool](/docs/category/avs-setup-wizard) would use each option or setting in the profile file to get this information from the user via prompts, arguments, or CLI flags. In case of an upgrade, values of unchanged settings can be used in the new version, and values for new settings would have to be requested by the user. 

Because values for settings could be declared in more than one place, we need to define some precedence rules, which are (from highest to lowest):

1. The value set with a CLI flag or through a prompt because the option is in the package profile
2. The default value in the package profile if it is defined and is not set with the CLI
3. Value hardcoded in the `.env` provided in the package by the AVS developer

## Profile file specification

### Profile file

```yaml
# Hardware Requirements overrides that will replace requirements from the manifest file for this profile
hardware_requirements_overrides: <hardware_requirements_overrides>

# Plugin overrides that will replace plugin from the manifest file for this profile
plugin_overrides: <plugin_overrides>

# List of options the user can set or use default values if defined in the <option>. Each option is an environment variable in the docker-compose file, Developers need to be careful about what options to expose here
options:
	[ - <option> ]

# Monitoring options
monitoring: <monitoring>

# AVS API configuration
api: <api>
```

### `<hardware_requirements_overrides>`

```yaml
# Minimum number of CPU cores
min_cpu_cores: <int>

# Minimum free memory space needed to run this profile in MiB
min_ram: <int>

# Minimum free disk space needed to run this profile in MiB
min_free_space: <int>

```

### `<plugin_overrides>`

See the [plugin documentation](/docs/category/plugin) to learn more about the plugin system.

```yaml
# Pre-built image name ready to be pulled.
image: <string>
```

### `<option>`

```yaml
# Name of the flag that the end-user will use to reference this option with the AVS setup wizard
name: <string>

# Key of the env variable used in the docker-compose file
target: <string>

# Data type of the option: enum, int, float, string, bool, etc. These types are defined below with more details
type: <type>

# Default value
default: <int | float | bool | string>

# Custom validation defined for this value
validate: <validate>

# Whether this option input should be hidden from the user
hidden: <bool>

# Help description about this 
help: <string>
```

:::note

The `hidden` field is optional and defaults to `false`. If `hidden` is set to `true`, the option value will be shown to the user as `********` in the prompt in the AVS setup wizard tool.

:::

### `<type>`

```yaml
int: 42
float: 3.14
bool: true
str: "Hello, World!"
path_dir: ./path/to/a/dir
path_file: ./path/to/a/file
uri: https://eigenlayer.com
select: option1
port: 8080
```

These types will be used for automatic validation of the values provided by the user. For instance, if the setting’s type is `path_file`, the AVS setup wizard tool would validate that a file exists on the provided path.

:::caution

Any port exposed under the `ports:` field in the `docker-compose.yml` **MUST** be represented by an `option` within the `options` list in the profile file, and the type `port` **MUST** be used. This allows port collision checks between multiple AVS Nodes running in the same host machine.

The AVS setup wizard tool could do these checks to guarantee an open port for each port target.

:::

For those values that need to be unique across several AVS Node setups, for example, container names, you can use the type `string` and provide a `validate.re2_regex` to validate any desired rule. For example, the `validate.re2_regex` for single word identifier can be `^[a-zA-Z]+$`.

:::caution

Using the `container_name` service field in the `docker-compose.yml` is optional, but if it is used, it is **strongly recommended** to provide an `option` within the `options` list with type `string` in the profile file. This allows name collision checks between multiple AVS Nodes running in the same host machine.

The AVS setup wizard tool could do the necessary checks to guarantee unique container names.

:::

### `<validate>`

```yaml
# RE2 regex https://github.com/google/re2/wiki/Syntax. Will be ignored if it is used for a type different from <string>
re2_regex: <string>

# Format of the file to validate. A leading dot is required for the format, like ".txt". Will be ignored if it is used for a type different from <path_file>
format: <string>

# List of accepted URL schemes. Will be ignored if it is used for a type different from <uri>
uri_scheme: [ - <string> ]

# Min value that could be, included. Will be ignored if it is used for a type different from <int> or <float>
min_value: <int|float>

# Max value that could be, included. Will be ignored if it is used for a type different from <int> or <float>
max_value: <int|float>

# List of possible options to select. Will be ignored if it is used for a type different from <select>
options: [ - <string> ]
```

### `<monitoring>`

```yaml
# List of metric targets inside the docker-compose
targets:
	[ - <monitoring-target> ]
```

:::caution

The profile **MUST** provide a monitoring target at least.

:::

### `<monitoring-target>`

Represents a Prometheus endpoint inside the AVS Node setup.

```yaml
# Name of the docker-compose service
service: <string>

# Port serving the metrics
port: <int>

# Metrics path, for instance: /metrics
path: <string>
```

### `<api>`

Defines the AVS Node API endpoint that the AVS Node exposes following the [AVS Node API specification](/docs/category/avs-node-api).

```yaml
# Name of the docker-compose service exposing the API
service: <string>

# Port serving the API
port: <int>
```

## Monitoring and metrics settings

An AVS Node environment is a set of services deployed with Docker in the same Docker network. Prometheus metrics can be fetched from exporters that each service could implement. To know where these metrics are, we can rely on [docker container networking](https://docs.docker.com/config/containers/container-networking/) to reference services.

The monitoring setup is the set of a Grafana instance, Prometheus, and Node Exporter. Details about this monitoring stack can be found [here](/docs/category/monitoring-stack).

The profile file is the place to declare Prometheus targets inside the AVS Node setup mentioning the service name, port, and path to get metrics (`monitoring-target`).

The metrics port could be exposed in the `docker-compose.yml` for it to be reachable from outside the host machine, but is not mandatory to do so.

## Profile schema

```yaml
$schema: "http://json-schema.org/draft-07/schema#"
# Definitions of all types of Option
definitions:
  OptionInt:
    type: object
    properties:
      name:
        type: string
      target:
        type: string
      help:
        type: string
      type:
        const: "int"
      default:
        type: integer
      validate:
        type: object
        properties:
          min_value:
            type: integer
          max_value:
            type: integer
        required:
          - min_value
          - max_value
        additionalProperties: false
    required:
      - name
      - target
      - help
      - type
    additionalProperties: false 
  OptionString:
    type: object
    properties:
      name:
        type: string
      target:
        type: string
      help:
        type: string
      type:
        const: "str"
      default:
        type: string
      validate:
        type: object
        properties:
          re2_regex:
            type: string
        required:
          - re2_regex
        additionalProperties: false 
    required:
      - name
      - target
      - help
      - type
    additionalProperties: false
  OptionFloat:
    type: object
    properties:
      name:
        type: string
      target:
        type: string
      help:
        type: string
      type:
        const: "float"
      default:
        type: number
      validate:
        type: object
        properties:
          min_value:
            type: number
          max_value:
            type: number
        required:
          - min_value
          - max_value
        additionalProperties: false
    required:
      - name
      - target
      - help
      - type
    additionalProperties: false
  OptionBool:
    type: object
    properties:
      name:
        type: string
      target:
        type: string
      help:
        type: string
      type:
        const: "bool"
      default:
        type: boolean
    required:
      - name
      - target
      - help
      - type
    additionalProperties: false
  OptionPathDir:
    type: object
    properties:
      name:
        type: string
      target:
        type: string
      help:
        type: string
      type:
        const: "path_dir"
      default:
        type: string
    required:
      - name
      - target
      - help
      - type
    additionalProperties: false
  OptionPathFile:
    type: object
    properties:
      name:
        type: string
      target:
        type: string
      help:
        type: string
      type:
        const: "path_file"
      default:
        type: string
      validate:
        type: object
        properties:
          format:
            type: string
        required:
          - format
        additionalProperties: false 
    required:
      - name
      - target
      - help
      - type
    additionalProperties: false
  OptionURI:
    type: object
    properties:
      name:
        type: string
      target:
        type: string
      help:
        type: string
      type:
        const: "uri"
      default:
        type: string
      validate:
        type: object
        properties:
          uri_scheme:
            type: array
            minItems: 1
            items:
              type: string
        required:
          - uri_scheme
        additionalProperties: false 
    required:
      - name
      - target
      - help
      - type
    additionalProperties: false
  OptionSelect:
    type: object
    properties:
      name:
        type: string
      target:
        type: string
      help:
        type: string
      type:
        const: "select"
      default:
        type: string
      validate:
        type: object
        properties:
          options:
            type: array
            minItems: 1
            items:
              type: string
        required:
          - options
        additionalProperties: false 
    required:
      - name
      - target
      - help
      - type
    additionalProperties: false
  OptionPort:
    type: object
    properties:
      name:
        type: string
      target:
        type: string
      help:
        type: string
      type:
        const: "port"
      default:
        type: integer
        minumum: 1
        maximum: 65535
    required:
      - name
      - target
      - help
      - type
    additionalProperties: false

# Profile Schema
type: object
properties:
  name:
    type: string
  hardware_requirements_overrides:
    type: object
    properties:
      min_cpu_cores:
        type: integer
        minimum: 0
      min_ram:
        type: integer
        minimum: 0
      min_free_space:
        type: integer
        minimum: 0
      stop_if_requirements_are_not_met:
        type: boolean
    required:
    - min_cpu_cores
    - min_ram
    - min_free_space
    - stop_if_requirements_are_not_met
    additionalProperties: false
  plugin_overrides:
    type: object
    properties:
      image:
        type: string
    required:
    - image
    additionalProperties: false
  options:
    type: array
    items:
      oneOf:
        - $ref: '#/definitions/OptionInt'
        - $ref: '#/definitions/OptionString'
        - $ref: '#/definitions/OptionFloat'
        - $ref: '#/definitions/OptionBool'
        - $ref: '#/definitions/OptionPathDir'
        - $ref: '#/definitions/OptionPathFile'
        - $ref: '#/definitions/OptionURI'
        - $ref: '#/definitions/OptionSelect'
        - $ref: '#/definitions/OptionPort'
  monitoring:
    type: object
    properties:
      targets:
        type: array
        items:
          type: object
          properties:
            service:
              type: string
            port:
              type: integer
              minumum: 1
              maximum: 65535
            path:
              type: string
          required:
          - service
          - path
          - port
          additionalProperties: false
    required:
      - targets
    additionalProperties: false
  api:
    type: object
    properties:
      service:
        type: string
      port:
        type: integer
        minumum: 1
        maximum: 65535
    required:
    - service
    - port
    additionalProperties: false
required:
  - monitoring
additionalProperties: false
```