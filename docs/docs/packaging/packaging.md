---
sidebar_position: 1 
id: packaging
---

# Packaging procedure

Middleware Services in the EigenLayer Protocol under the proposed specification comprise of Docker containers running alongside backing services such as databases, indexers, and utility services. Middleware developers are responsible for defining these services and their options well to work correctly. The objective is to create a standard interface to manage the setup, configuration, and updates of these Middleware Services.

The package for a specific version of a Middleware service will consist of a **`docker-compose.yml`** file, a manifest file defining the package version and additional information (if the upgrade is optional or recommended, etc), and a set of profiles or different configurations for the package. 

Middleware providers will publish their packages following the format defined [above](#middleware-package) in a separate git repository (Tap) called `eigen-<middleware name>`, which involves Middleware providers initializing a git repository with the required and standard structure that will be defined later. A Middleware setup wizard would rely on this structure to get package information and install the Middleware service.

Middleware providers manage these repositories, and with each new release, they update the tap with the corresponding configuration files. The new package will only be considered correct if it follows the required structure and if a git tag is created with it in the tap repository.

The EigenLayer organization will maintain a core git repository that will serve as an index for all the published Middleware services containing the URLs of all the packaging repositories. Middleware providers have to create a Pull Request to this core repository to register their Middleware service.

As an **alternative to centralized git hosting**, we suggest using distributed ledger technology (DLT), such as a blockchain, to store and manage Middleware services' configuration files and metadata. Middleware providers would submit their configuration files, updates, and other relevant information to the DLT network.

This approach would require Middleware providers to interact with the DLT network, submitting transactions and querying data. As a result, the management process becomes decentralized and transparent.

Decentralized git hosting such as [Gitopia](https://gitopia.com) can be used as an alternative to Github.

:::caution

While this decentralized approach is interesting and offers some unique benefits, it may not be the most practical solution for managing Middleware services due to the added complexity and potential performance issues. However, it's worth considering as an alternative to more traditional centralized or repository-based approaches.

:::

## Middleware package

> All commands used in this section are for demonstration purposes only

A middleware service is a collection of Docker services declared in a Docker Compose file. Middleware developers are responsible for defining these services and their options well to work correctly.

The objective of a middleware package is to provide all the necessary files to set up a middleware in an on-premise setup using [Docker Compose](https://docs.docker.com/compose/) as a service manager.

### Package source

- Git repository

### Structure

A package is a set of profiles, which means each middleware version could have a collection of profiles inside that the user could select at setup time, like the following:

```
tool add some/middleware -v v1.0.0 [profile] [options...]
```

Profiles are suitable for creating specialized setups of the same version for different scenarios like different networks.

The `manifest.yml` file at the project's root is the entry point to define the project's structure, with information about the version of the middleware and the list of profiles.

```
./
├── profile1/
│   ├── alerts/
│   ├── dashboards/
│   ├── panels/
│   ├── .env
│   ├── docker-compose.yml
│   └── profile.yml
├── profile2/
│   ├── alerts/
│   ├── dashboards/
│   ├── panels/
│   ├── .env
│   ├── docker-compose.yml
│   └── profile.yml
└── manifest.yml
```

### Profile

```
./
├── alerts/
├── dashboards/
├── panels/
├── .env
├── docker-compose.yml
└── profile.yml
```

`alerts` folder contains files following the [Grafana file provisioning format for alert rules](https://grafana.com/docs/grafana/latest/alerting/set-up/provision-alerting-resources/file-provisioning/#provision-alert-rules).

`dashboards` and `panels` folders contain the Grafana Dashboards and [Library Panels](https://grafana.com/docs/grafana/latest/dashboards/build-dashboards/manage-library-panels/) respectively.

`.env` contains a list of environment variables used in the Docker Compose file. To know more about environment variables substitution in a Docker Compose file follow [this link](https://docs.docker.com/compose/environment-variables/set-environment-variables/#substitute-with-an-env-file).

`docker-compose.yml` is a standard Docker Compose file declaring all the services, volumes, networks, etc. required for the middleware.

`profile.yml` is the file that contains options to configure the profile.

## Tap structure

The Tap should contain a folder for each package in the default git branch. Each folder should be named after the git tag that represents the release of a new package. The following directory structure can be used as reference:

```
.
├── v0.1.0/
│   ├── mainnet/
│   │   ├── alerts/
│   │   ├── dashboards/
│   │   ├── panels/
│   │   ├── .env
│   │   ├── docker-compose.yml
│   │   └── profile.yml
│   ├── goerli/
│   │   ├── alerts/
│   │   ├── dashboards/
│   │   ├── panels/
│   │   ├── .env
│   │   ├── docker-compose.yml
│   │   └── profile.yml
│   └── manifest.yml
├── v0.1.0/
│   ├── mainnet/
│   │   ├── alerts/
│   │   ├── dashboards/
│   │   ├── panels/
│   │   ├── .env
│   │   ├── docker-compose.yml
│   │   └── profile.yml
│   ├── sepolia/
│   │   ├── alerts/
│   │   ├── dashboards/
│   │   ├── panels/
│   │   ├── .env
│   │   ├── docker-compose.yml
│   │   └── profile.yml
│   └── manifest.yml
└── README.md
```