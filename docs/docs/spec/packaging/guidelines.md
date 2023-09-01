---
sidebar_position: 5
id: guidelines 
---

# Packaging Best Practices

The following represents a set of guidelines, rules, and recommendations on managing and creating the AVS package.

## How to handle docker images

The specification **DOES NOT** support docker image builds. You can't use the `build` field on the `docker-compose.yml` file. The Compose script must refer to docker images in a Docker registry. For development purposes, you can use a local docker image.

An alternative to target the entire docker image name as a profile option is to fix the name but let the tag open for modification. An env variable with a bounded profile option is also recommended in this case.

Examples of both profile options usage for the full docker image name and only the tag can be found in the [reference package](docs/spec/packaging/reference). Notice that the name is fixed for the Postgres docker image, but the tag is used as a profile option.

### Tags usage

**AVOID** using the default tag `latest`. This might bring issues among different package versions. You **SHOULD** use unique tags that identify a fixed version of the containerized application you want the user to run.

## Avoid using `container_name`

Using the `container_name` field of the Docker Compose Specification introduces the risk of name collision between two containers run with different instances of the same `docker-compose.yml`.

This issue can be tackled by defining the container name as a profile option. The' main-container-name' profile option is used in the [reference package](docs/spec/packaging/reference) for this purpose. This way, the user can use a new container name for different AVS package instances or change the default container name.

Docker Compose has a smart way of setting up a container name of a Compose service if the `container_name` field is not provided. You can rely on Compose for this naming.

## Docker Compose elements that should be profile options

Some common use cases will benefit from profile options:

- **Bind-mount volumes:** This kind of volume usually requires a path inside the host machine to the desired folder or file to bind. Using a default path here will be far from ideal in many cases. We strongly recommend always using an env variable for this path with a profile option. In the [reference package](docs/spec/packaging/reference), the `KEYSTORE_PATH` env variable is used for this purpose. Notice the usage of the profile option type `path_dir` for this env variable. Any path option should be used similarly.
- **Container names:** As mentioned above, using the `container_name` field of the Docker Compose Specification introduces the risk of name collision between two containers run with different instances of the same `docker-compose.yml`. This issue can be tackled by defining the container name as a profile option like in the [reference package](docs/spec/packaging/reference). This way, the user can use a new container name for different AVS package instances or change the default container name.
- **Docker image names:** Putting any Docker images as profile options is strongly recommended. In the [reference package](docs/spec/packaging/reference), a `validate.re2_regex` is provided to validate docker image names. Notice that the name is fixed for the Postgres docker image, but the tag is used as a profile option. This is a recommended practice as well.
- **Ports:** Ports are a typical profile option. The' main-service-port' is a profile option in the [reference package](docs/spec/packaging/reference). Notice that the `main-service-port` is also a `target` for the `monitoring` section. Profile options for ports are recommended to be of type `port` and have a default value. You should target the port part of the Host machine. The container port should be fixed, not a profile option (ports are defined as `HOST_PORT:CONTAINER_PORT`).

## When to create an additional profile

Suppose you find yourself creating profile options for settings whose values are common within several instances of the AVS Node (different instances of the same AVS Node running on the same network). In that case, chances are these values should be fixed, and you will benefit from creating profiles for combinations of these settings (different networks, Node modes, etc.). In this case, creating an additional profile might allow you to define fewer profile options. Less profile options mean fewer settings to maintain and fewer settings for the user to configure.

