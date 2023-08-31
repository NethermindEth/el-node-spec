---
sidebar_position: 2
id: manifest
---

# Manifest file

The Manifest file is an essential component of the Node package structure. It provides crucial information about the Node version, its name, and the list of profiles that are included in the package. The `upgrade` field of the Manifest file indicates whether an upgrade is optional, recommended, or required, which allows users to determine how and when to upgrade their Node to the latest version.

Additionally, the Manifest file specifies the structure of the Node package, which includes a `profile` folder and a `manifest.yml` file. The `profile` folder contains a Docker Compose file, an `.env` file with default values for environment variables, and folders for Grafana alerts, dashboards, and panels. This folder structure ensures that all the necessary files to set up the Node in an on-premise setup using Docker Compose as a service manager are included in the package.

The `manifest.yml` file specifies the version of the Node, its name, and a list of profiles. The profile list includes the name of each profile and its relative path within the package. This information is crucial for users to understand what profiles are available and how to access them within the package.

The file’s name must be `manifest.yml`.

## Manifest format

```yaml
# AVS Specification version
version: <string>

# Name of the Node
name: <string>

# Upgrade recommendation: optional, recommended, required
upgrade: <string>

# Hardware Requirements
hardware_requirements: <hardware_requirements>

# Plugin source
plugin: <plugin>

# List of Node package profiles
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

See [plugin documentation](/docs/plugin/intro) to learn more about the plugin system.

```yaml
# Pre-built image name ready to be pulled.
image: <string>

# URL to build the image from source. Can refer to Git repositories. Look at https://docs.docker.com/engine/reference/commandline/build/#description for details. We don't support plain text files or pre-packaged tarball contexts currently.
build_from: <string>
```

:::caution
The `image` has more priority than the `git` option. If both are provided, the `image` will be used.
:::

:::info
The `build_from` field can only refer to **remote** Git repositories at the moment.
:::

