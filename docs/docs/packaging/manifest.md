---
sidebar_position: 2
id: manifest
---

# Manifest file

The Manifest file is an essential component of the Middleware package structure. It provides crucial information about the Middleware version, its name, and the list of profiles that are included in the package. The `upgrade` field of the Manifest file indicates whether an upgrade is optional, recommended, or required, which allows users to determine how and when to upgrade their Middleware to the latest version.

Additionally, the Manifest file specifies the structure of the Middleware package, which includes a `profile` folder and a `manifest.yml` file. The `profile` folder contains a Docker Compose file, an `.env` file with default values for environment variables, and folders for alerts, dashboards, and panels. This folder structure ensures that all the necessary files to set up the Middleware in an on-premise setup using Docker Compose as a service manager are included in the package.

The `manifest.yml` file specifies the version of the Middleware, its name, and a list of profiles. The profile list includes the name of each profile and its relative path within the package. This information is crucial for users to understand what profiles are available and how to access them within the package.

The file’s name must be `manifest.yml`.

## Manifest format

```yaml
# Middleware version
version: <string>

# Name of the middleware
name: <string>

# Upgrade recommendation: optional, recommended, required
upgrade: <string>

# Hardware Requirements
hardware_requirements: <hardware_requirements>

# List of middleware package profiles
profiles:
[ - <profile> ]
```

### `<hardware_requirements>`

```yaml
# Minimum number of CPU cores
min_cpu_cores: <int>

# Minimum free memory space needed to run this profile in MiB
min_ram: <int>

# Minimum free disk space needed to run this profile in MiB
min_free_space: <int>

# Minimum free disk space needed to run this profile in MiB
stop_if_requirements_are_not_met: <bool>

```

### `<profile>`

```yaml
# Name of the profile
name: <string>

# Relative path to the profile inside the package
src: <string>

# Import settings from other profiles
from_profile:
  # Import docker-compose.yml from <profile>
	compose:    <string>
  # Import .env from <profile>
	env:        <string>
  # Import dashboards folder from <profile>
	dashboards: <string>
  # Import panels folder from <profile>
	panels:     <string>
```