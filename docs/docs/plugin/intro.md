---
title: Introduction
---

A plugin is a tool provided by a middleware instance during the installation time that could be invoked using the CLI at any time. The main idea of the usage of this plugin is to do specific actions in the middleware. All the functionalities implemented in the plugin are the responsibility of the middleware developers, our responsibility as the CLI maintainers are to guarantee access to the services in the docker-compose environment of the associated middleware.

## Plugin as a Docker image

A plugin is a Docker container created from a Docker image provided in the middleware package. The image could be provided following these two options:

1. Pre-built image
2. Built from a Dockerfile using a Git repository URL

## Proposal for the manifest and profile files

The plugin is defined in the manifest file and could be overwritten in the profile file if needed. To declare a plugin add this section at the root of the manifest/profile file:

```yaml
plugin: <plugin>
```

### <plugin\>

```yaml
# Pre-built image name ready to be pulled.
image: <string>

# URL to a Git repository to build the image from the source.
git: <string>
```

:::warning
The `image` has more priority than the `git` option. If both are provided, the `image` will be used.
:::

## Running the plugin

```bash
cli plugin [plugin-name] [args...]
```

When the user runs the plugin using our CLI tool, a container is created using the plugin image, and all the arguments specified by the user in the command are appended to the container [ENTRYPOINT](https://docs.docker.com/engine/reference/builder/#entrypoint).The CLI runs the container plugin instance and waits until it finishes, showing the logs of the container. The exit code of the `cli plugin` command is the same exit code of the container plugin and will be printed in stdout to end-user knowledge.

## Accessing the middleware services

The plugin container will be executed in the same docker-compose network as the middleware instance. This means that the plugin container will be able to access the middleware services, and it can use the Docker name resolution to access the services using the names of the services defined in the docker-compose file. It is responsibility of the middlewares to use proper services names and include all the necessary functionalities in the docker-compose file to allow the plugin to do all the actions properly.
