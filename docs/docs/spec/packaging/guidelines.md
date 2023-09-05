---
sidebar_position: 5
id: guidelines 
---
# Packaging Best Practices

- [Packaging Best Practices](#packaging-best-practices)
  - [How to handle docker images](#how-to-handle-docker-images)
    - [Tags usage](#tags-usage)
    - [Why docker image builds are not supported](#why-docker-image-builds-are-not-supported)
  - [Avoid using `container_name`](#avoid-using-container_name)
  - [Docker Compose elements that should be profile options](#docker-compose-elements-that-should-be-profile-options)
  - [When to create an additional profile](#when-to-create-an-additional-profile)
  - [Create a separate repository for the AVS package](#create-a-separate-repository-for-the-avs-package)


The following represents a set of guidelines, rules, and recommendations on managing and creating the AVS package.

## How to handle docker images

The specification **DOES NOT** support docker image builds. You can't use the [`build`](https://docs.docker.com/compose/compose-file/compose-file-v3/#build) field on the `docker-compose.yml` file. The Compose script **MUST** refer to docker images in a Docker registry. For development purposes, you can use a local docker image.

An alternative to target the entire docker image name as a profile option is to fix the name but let the tag open for modification. An env variable with a bounded profile option is also recommended in this case.

Examples of both profile options usage for the full docker image name and only the tag can be found in the [reference package](/docs/spec/packaging/reference). Notice that the name is fixed for the Postgres docker image, but the tag is used as a profile option.

### Tags usage

**AVOID** using the default tag `latest`. This might bring issues among different package versions. You **SHOULD** use unique tags that identify a fixed version of the containerized application you want the user to run.

### Why docker image builds are not supported

The issues around building docker images can be summarized:

- **Introduce vulnerabilities and security concerns** to the user’s host machine because **builds could execute arbitrary and potentially malicious code**. Currently, the attack surface is quite extensive as anyone with write access to the AVS Tap repo could add this type of code and change the AVS Node docker build pipeline or Docker Compose, create a git tag and make a release.
- Supporting docker image builds **involves cloning and using the entire repository** where the AVS package lies. This means not only that we are potentially copying a lot of unnecessary data for the user into his/her disk and making the installation process heavier than necessary, but also that we can’t control the usage of good practices around the AVS packaging. If, for example, we would like to enforce creating a separate repository for the AVS package only, it wouldn’t be possible if we allow docker builds.
- Depending on docker builds for the users to use your software **is not a good practice**. An AVS developer will likely push the Docker images to a Docker registry. Maintaining two different ways of using your official Docker Compose script is a burden, as there are differences between using already-built images and building images from a local/remote context. Building the docker image could be helpful for development environments. However, it **is not expensive to build your image** before running your Compose script and target the local image inside it. AVS developers could add a simple `docker build` command to their build scripts or E2E test setup parts, use an env variable for the `image` field of the Compose script, and only change the env variable value. This introduces a new problem: which tag to use for the docker image. We are going to cover that in the next section.

## Avoid using [`container_name`](https://docs.docker.com/compose/compose-file/compose-file-v3/#container_name)

Using the [`container_name`](https://docs.docker.com/compose/compose-file/compose-file-v3/#container_name) field of the Docker Compose Specification introduces the risk of name collision between two containers run with different instances of the same `docker-compose.yml`.

This issue can be tackled by defining the container name as a profile option. The 'main-container-name' profile option is used in the [reference package](/docs/spec/packaging/reference) for this purpose. This way, the user can use a new container name for different AVS package instances or change the default container name.

Docker Compose has a smart way of setting up a container name of a Compose service if the [`container_name`](https://docs.docker.com/compose/compose-file/compose-file-v3/#container_name) field is not provided. You can rely on Compose for this naming.

## Docker Compose elements that should be profile options

Some common use cases will benefit from profile options:

- **Bind-mount volumes:** This kind of volume usually requires a path inside the host machine to the desired folder or file to bind. Using a default path here will be far from ideal in many cases. We strongly recommend always using an env variable for this path with a profile option. In the [reference package](/docs/spec/packaging/reference), the `KEYSTORE_PATH` env variable is used for this purpose. Notice the usage of the profile option type `path_dir` for this env variable. Any path option should be used similarly.
- **Container names:** As mentioned above, using the [`container_name`](https://docs.docker.com/compose/compose-file/compose-file-v3/#container_name) field of the Docker Compose Specification introduces the risk of name collision between two containers run with different instances of the same `docker-compose.yml`. This issue can be tackled by defining the container name as a profile option like in the [reference package](/docs/spec/packaging/reference). This way, the user can use a new container name for different AVS package instances or change the default container name.
- **Docker image names:** Putting any Docker images as profile options is strongly recommended. In the [reference package](/docs/spec/packaging/reference), a `validate.re2_regex` is provided to validate docker image names. Notice that the name is fixed for the Postgres docker image, but the tag is used as a profile option. This is a recommended practice as well.
- **Ports:** Ports are a typical profile option. The' main-service-port' is a profile option in the [reference package](/docs/spec/packaging/reference). Notice that the `main-service-port` is also a `target` for the `monitoring` section. Profile options for ports **MUST** to be of type `port` and have a default value. This allows port collision checks between multiple Nodes running in the same host machine. You **MUST** target the port part of the Host machine. The container port should be fixed, not a profile option (ports are defined as `HOST_PORT:CONTAINER_PORT`).

## When to create an additional profile

Suppose you find yourself creating profile options for settings whose values are common within several instances of the AVS Node (different instances of the same AVS Node running on the same network). In that case, chances are these values should be fixed, and you will benefit from creating profiles for combinations of these settings (different networks, Node modes, etc.). In this case, creating an additional profile might allow you to define fewer profile options. Less profile options mean fewer settings to maintain and fewer settings for the user to configure.

## Create a separate repository for the AVS package

We **strongly recommend** creating a separate repository (Tap) for the AVS package. This has several benefits:

- The AVS Tap repository and root folder can be listed in a public index in a clean way without anything additional to the AVS package.
- It is easier to restrict access to the Tap repository. For instance, if the AVS package is within the AVS node repository, all the contributors could make changes to the AVS package.
- It doesn’t constrain your AVS Node repository to be public. Although it is recommended to make your AVS Node source code open-source, nothing will stop a developer from making an AVS Node closed (this is often done in the first stages of development). This closed AVS Nodes could have their packages public if they dedicate a separate repository.
- Downloading the AVS package would be very light and fast.