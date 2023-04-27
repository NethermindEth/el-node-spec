---
sidebar_position: 2
id: backup 
---

# Backup service

## Commit container

Committing container changes into an image is the first step to backup a service. The procedure to do it is the following:

1. Stop the docker container that you want to backup
  ```shell
  docker stop [container-name]
  ```
2. Create a new image from the stopped container using `docker commit`
  ```shell
  docker commit [container-name] [image-name]
  ```
### Saving container commit

There are two principal options to save the container commit:

1. New image could be saved to a `tar` file using `docker save`
  ```shell
  docker save [image-name] > [image-name].tar
  ```
2. Leave the image created by the `docker commit` command in the local docker registry

:::note
This proposal recommends the usage of option (1) because both container and volumes `tar` files could be saved in a single place for the same container.
:::

## Backup volumes

Volumes associated with the container could be saved to a `tar` file. The procedure is described by the execution of the command below:

```shell
docker run --rm -v [volume-name]:/data -v [backup-dest]:/backup alpine tar -czvf /backup/[backup-file-name].tar.gz /data
```

This command will start a new container based on the Alpine Linux image, mount the specified volume to the `/data` directory inside the container, and mount the `backup-dest` directory to `/backup` inside the container. The tar command is then used to create a compressed tar archive of the volume data and save it to the `/backup` directory inside the container. The `--rm` flag is used to automatically remove the container after the backup process is complete.