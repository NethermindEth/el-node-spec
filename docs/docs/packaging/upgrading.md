---
sidebar_position: 5 
id: upgrading
---

# Keeping AVS Software Easily Updatable

Ensuring that your AVS software is easily updatable by users is crucial for a smooth user experience. Users should be able to update your software without making changes to CLI commands, Docker files, or dealing with schema and database version updates manually. Here's a guide on how to achieve this.

## 1. Containerization and Orchestration

Leverage containerization technologies like Docker and orchestration tools like Docker Compose to package your AVS software with its dependencies, ensuring consistent behavior across different environments. This approach makes it easier for users to update the software without worrying about breaking changes in the underlying infrastructure.

### Tips:

- Create a well-structured Dockerfile that builds an optimized and secure container image.
- Publish updated container images to a container registry (e.g., Docker Hub) and follow a versioning scheme, allowing users to update easily.
- Write a Docker Compose file to define your services, networks, and volumes, making it easy for users to manage the application stack.

## 2. Database Migration and Compatibility Management

Implement a database migration management system for relational databases to handle schema changes and version updates automatically. Additionally, ensure that key-value databases are backward compatible when updating them and automatically update the DB files to the latest version. This will enable users to update your AVS without manual intervention for database-related tasks.

### Tips:

- Use a key-value databases that maintains backward compatibility and automatically updates DB files during the update process.
- Use a database migration tool (e.g., Flyway, Sequelize, Entity Framework migrations) to manage schema changes and version updates in relational databases.
- Include migration scripts in your version control system to track changes and ensure consistency across environments.
- Run migrations automatically during application startup.

## 3. Shared State Management and Automatic Updates

Design your AVS software to handle shared state updates automatically. This will ensure that users do not have to manually update shared state information when updating the Node, providing a seamless user experience.

### Tips:

- Implement a robust shared state management system that synchronizes state across different services and components.
- Use event-driven architectures or message queues (e.g., Kafka, RabbitMQ) to propagate state updates efficiently.
- Design your Node to detect and handle changes in the shared state without manual intervention, such as by subscribing to relevant events or periodically polling for updates.
- Test your Node to ensure that it can handle shared state updates gracefully, even during version updates.

## 4. Node Package Management with AVS setup wizard tool and Searchable Prefix

Leverage the [AVS setup wizard tool](../wizard/intro) inspired by the Homebrew Tap approach, for managing Node packages and their versions. This tool will handle each AVS as a git repository with a defined structure, simplifying the process for clients setting up and managing Nodes. To make Node repositories easily searchable on GitHub, use the `eigen` prefix for the repository name similar to the Homebrew naming convention.

### Tips:

- The AVS setup wizard tool (currently in development) will follow a standard structure for AVS git repositories to streamline the installation and management process.
- Use the `eigen` prefix for Node repository names to make them easily discoverable on GitHub, following the Homebrew convention.
- Instruct users to install AVS by running commands such as `$ egn install https://github.com/some/eigen-avs` or, if GitHub is the default source, `$ egn install some/eigen-avs`. Providing that a core tap repository is maintained with the names or URLs of Nodes repositories, the AVS setup wizard tool could easily use this index to get the available taps, and this way, the users don’t have to register or add a Node to the tool.
- For a new version of the Node, the Developers will create a new package following the proposed standard structure and specification and put it in the Tap repo with a new git tag following [semantic versioning](https://semver.org) representing the new release.
- The AVS setup wizard tool will clone the repo, identify the appropriate version (git tag), and follow the necessary steps for setup based on the repository's structure. Installation and upgrading of a Node will be the same for the AVS setup wizard. The main difference between the two processes will be that the CLI tool will try to keep unchanged settings and data between the old and new versions.
    
Tooling for initializing the Tap and managing the Node packages will be available in future versions. Also, CI pipelines that Developers can use to validate new packages for new versions will be published.

Making your AVS software easily updatable by users is critical for ensuring a smooth user experience. By leveraging containerization technologies, implementing database migration and compatibility management, designing your Node to handle shared state updates automatically, and using the AVS setup wizard, you can simplify the process of updating your software for your users.
