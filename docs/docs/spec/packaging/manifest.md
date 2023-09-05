---
sidebar_position: 2
id: manifest
---

# Manifest file

The Manifest file is an essential component of the AVS Node package structure. It provides crucial information about the AVS version, its name, and the list of profiles that are included in the package. The `upgrade` field of the Manifest file indicates whether an upgrade is optional, recommended, or required, which allows users to determine how and when to upgrade their AVS to the latest version.

Additionally, the Manifest file specifies the structure of the AVS package, which includes a `profile` folder and a `manifest.yml` file. The `profile` folder contains a Docker Compose file, an `.env` file with default values for environment variables, and the `profile.yml` configuration file. This folder structure ensures that all the necessary files to set up the AVS Node in an on-premise setup using Docker Compose as a service manager are included in the package.

The `manifest.yml` file specifies the version of the specification, the AVS Node name, hardware requirements for the AVS Node, information about the AVS provided [plugin](#plugin), and a list of profiles. The profile list includes the name of each profile and its relative path within the package. This information is crucial for users to understand what profiles are available and how to access them within the package.

The file’s name **MUST** be `manifest.yml`.

## Manifest format

```yaml
# AVS Specification version
version: <string>

# Name of the AVS Node
name: <string>

# Upgrade recommendation: optional, recommended, required
upgrade: <string>

# Hardware Requirements
hardware_requirements: <hardware_requirements>

# Plugin source
plugin: <plugin>

# List of AVS package profiles
profiles:
[ - <string> ]
```

### `<hardware_requirements>`

```yaml
# Minimum number of CPU cores
min_cpu_cores: <int>

# Minimum free memory space needed to run this profile in MiB
min_ram: <int>

# Minimum free disk space needed to run this profile in MiB
min_free_space: <int>

# true if setup should not proceed if any hardware requirement is not met
stop_if_requirements_are_not_met: <bool>
```

### `<plugin>`

See [plugin documentation](/docs/spec/plugin/intro) to learn more about the plugin system.

```yaml
# Pre-built image name ready to be pulled.
image: <string>
```

## Manifest schema

```yaml
$schema: "http://json-schema.org/draft-07/schema#"
type: object
properties:
  version:
    type: string
  name:
    type: string
  upgrade:
    type: string
  hardware_requirements:
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
  plugin:
    type: object
    properties:
      image:
        type: string
      build_from:
        type: string
    additionalProperties: false
  profiles:
    type: array
    items:
      type: string
required:
- version
- name
- profiles
additionalProperties: false
```