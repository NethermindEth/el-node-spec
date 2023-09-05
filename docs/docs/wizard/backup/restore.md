---
sidebar_position: 3
id: restore
---

# Restore service

## Restore container

This is the procedure to restore a docker container from a committed image:

1. Load the image from the saved `tar` archive using `docker load` command:
  ```shell
  docker load -i [image-file].tar
  ```
2. Create a new container using the newly loaded image:
  ```shell
  docker create [image-name]
  ```

## Restore volumes

Each volume associated with the container could be restored from a `tar` file following the next steps:

1. Create a new volume with the same name as the original volume:
  ```shell
  docker volume create [volume-name]
  ```
2. Restore contents of the saved volume:
  ```shell
  docker run --rm -v [volume-name]:/to -v [backup-src]:/from alpine ash -c "cd /from ; tar -C /to -xvf [volume-file-name].tar"
  ```
3. Start the container with same volumes as the original container
