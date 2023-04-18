---
title: Introduction
---

Backup and restore functionalities are necessary to support rollback and disaster recovery. This section introduces the rollback strategy and how the backup and restore actions will be made.

Docker containers are designed to be self-contained, isolated environments that encapsulate an application and its dependencies. This makes it easy to create backups of containers because all the necessary files and dependencies are stored within the container itself, except volumes, but volumes also can be saved. Additionally, because containers are designed to be easily created and destroyed, it's possible to make a backup of a container by simply creating a new container from the image used to create the original container. This system works regardless of the type of service running inside the container, which is a great advantage for middleware scenarios where one middleware is a collection of docker containers with different purposes.

The backup process typically involves creating a snapshot of the container's current state, including any changes or modifications that have been made since the container was launched. This snapshot is then used to create a new Docker image that can be used to restore the container to its previous state if needed.

## Rollback service

During an update process, the new version of the service could be crashed or not work as expected. To avoid losing the previous state of the service users could create a backup of the service before the update process and restore the old version if it is necessary. [Backup](#backup-service) and [restore](#restore-service) service procedures are described below.

:::note
All the commands used to describe the backup and restore procedures are only to illustrate the equivalent actions that could be done using the docker CLI. The backup and restore actions could be done using the docker API.
:::

## Backup service

### Commit container

Commit container changes into an image is the first step to backup a service. The procedure to do it is the following:

1. Stop the docker container that you want to backup
  ```shell
  docker stop [container-name]
  ```
2. Create a new image from the stopped container using `docker commit`
  ```shell
  docker commit [container-name] [image-name]
  ```
#### Saving container commit commit

There is two principal options to save the container commit:

1. New image could be saved to a `tar` file using `docker save`
  ```shell
  docker save [image-name] > [image-name].tar
  ```
2. Leave the image created by the `docker commit` command in the local docker registry

:::note
This proposal recommends the usage of option (1) because both container and volumes `tar` files could be saved in a single place for the same container.
:::

### Backup volumes

Volumes associated with the container could be saved to a `tar` file. The procedure is described by the execution of the command below:

```shell
docker run --rm -v [volume-name]:/data -v [backup-dest]:/backup alpine tar -czvf /backup/[backup-file-name].tar.gz /data
```

This command will start a new container based on the Alpine Linux image, mount the specified volume to the `/data` directory inside the container, and mount the `backup-dest` directory to `/backup` inside the container. The tar command is then used to create a compressed tar archive of the volume data and save it to the `/backup` directory inside the container. The --rm flag is used to automatically remove the container after the backup process is complete.

## Restore service

### Restore container

This is the procedure to restore a docker container from a committed image:

1. Load the image from the saved `tar` archive using `docker load` command:
  ```shell
  docker load -i [image-file].tar
  ```
2. Create a new container using the newly loaded image:
  ```shell
  docker create [image-name]
  ```

### Restore volumes

Each volume associated with the container could be restore from a `tar` file following the next steps:

1. Create a new volume with the same name as the original volume:
  ```shell
  docker volume create [volume-name]
  ```
2. Restore contents of the saved volume:
  ```shell
  docker run --rm -v [volume-name]:/to -v [backup-src]:/from alpine ash -c "cd /from ; tar -C /to -xvf [volume-file-name].tar"
  ```
3. Start the container with same volumes as the original container
