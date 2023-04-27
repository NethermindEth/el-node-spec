---
title: Introduction
sidebar_position: 1
id: intro
---

Backup and restore functionalities are necessary to support rollback and disaster recovery. This section introduces the rollback strategy and how the backup and restore actions will be made.

Docker containers are designed to be self-contained, isolated environments that encapsulate an application and its dependencies. This makes it easy to create backups of containers because all the necessary files and dependencies are stored within the container itself, except volumes, but volumes also can be saved. Additionally, because containers are designed to be easily created and destroyed, it's possible to make a backup of a container by simply creating a new container from the image used to create the original container. This system works regardless of the type of service running inside the container, which is a great advantage for Middleware scenarios where one Middleware is a collection of docker containers with different purposes.

The backup process typically involves creating a snapshot of the container's current state, including any changes or modifications that have been made since the container was launched. This snapshot is then used to create a new Docker image that can be used to restore the container to its previous state if needed.

## Rollback service

During an update process, the new version of the service could be crashed or not work as expected. To avoid losing the previous state of the service, users could create a backup of the service before the update process and restore the old version if necessary. [Backup](backup.md) and [restore](restore.md) service procedures are described in this section.

:::note
All the commands used to describe the backup and restore procedures are only to illustrate the equivalent actions that could be done using the docker CLI. The backup and restore actions could be done using the docker API.
:::

:::tip
A Middleware setup wizard could take care of the entire backup, restore, and rollback process.
:::