---
sidebar_position: 5 
id: upgrading
---

# Keeping Middleware Software Easily Updatable

Ensuring that your middleware software is easily updatable by users is crucial for a smooth user experience. Users should be able to update your software without making changes to CLI commands, Docker files, or dealing with schema and database version updates manually. Here's a guide on how to achieve this.

## 1. Containerization and Orchestration

Leverage containerization technologies like Docker and orchestration tools like Docker Compose to package your middleware software with its dependencies, ensuring consistent behavior across different environments. This approach makes it easier for users to update the software without worrying about breaking changes in the underlying infrastructure.

### Tips:

- Create a well-structured Dockerfile that builds an optimized and secure container image.
- Publish updated container images to a container registry (e.g., Docker Hub) and follow a versioning scheme, allowing users to update easily.
- Write a Docker Compose file to define your services, networks, and volumes, making it easy for users to manage the application stack.

## 2. Database Migration and Compatibility Management

Implement a database migration management system for relational databases to handle schema changes and version updates automatically. Additionally, ensure that key-value databases are backward compatible when updating them and automatically update the DB files to the latest version. This will enable users to update your middleware without manual intervention for database-related tasks.

### Tips:

- Use a key-value databases that maintains backward compatibility and automatically updates DB files during the update process.
- Use a database migration tool (e.g., Flyway, Sequelize, Entity Framework migrations) to manage schema changes and version updates in relational databases.
- Include migration scripts in your version control system to track changes and ensure consistency across environments.
- Run migrations automatically during application startup.

## 3. Shared State Management and Automatic Updates

Design your middleware software to handle shared state updates automatically. This will ensure that users do not have to manually update shared state information when updating the middleware, providing a seamless user experience.

### Tips:

- Implement a robust shared state management system that synchronizes state across different services and components.
- Use event-driven architectures or message queues (e.g., Kafka, RabbitMQ) to propagate state updates efficiently.
- Design your middleware to detect and handle changes in the shared state without manual intervention, such as by subscribing to relevant events or periodically polling for updates.
- Test your middleware to ensure that it can handle shared state updates gracefully, even during version updates.

## 4. Middleware Package Management with CLI Tool and Searchable Prefix

Leverage the Middleware setup wizard, inspired by the Homebrew Tap approach, for managing middleware packages and their versions. This tool will handle each middleware as a git repository with a defined structure, simplifying the process for clients setting up and managing middleware. To make middleware repositories easily searchable on GitHub, use the `eigen` prefix for the repository name similar to the Homebrew naming convention.

### Tips:

- Use the provided CLI tool that follows a standard structure for middleware git repositories to streamline the installation and management process.
- Use the `eigen` prefix for middleware repository names to make them easily discoverable on GitHub, following the Homebrew convention.
- Instruct users to add middleware by running commands such as `$ tool add https://github.com/some/eigen-middleware` or, if GitHub is the default source, `$ tool add some/eigen-middleware`. Providing that a core tap repository is maintained with the names or URLs of Middleware services repositories, the CLI tool could easily use this index to get the available taps, and this way, the users don’t have to register or add a Middleware service to the tool.
- For a new version of the Middleware service, the Middleware provider will create a new package following the proposed standard structure and specification and put it in the Tap repo with a new git tag representing the new release.
- The existing CLI tool will clone the repo, identify the appropriate version (git tag), and follow the necessary steps for setup based on the repository's structure. Installation and upgrading of a Middleware service will be the same for the CLI tool. The main difference between the two processes will be that the CLI tool will try to keep unchanged settings and data between the old and new versions.
- Offer additional commands for tasks like:
    - Initializing an empty git repository with the defined structure: `$ tool init some/eigen-middleware`
    - Checking the repository structure: `$ tool check some/eigen-middleware`
    - Viewing middleware versions and marking the current version, if possible: `$ tool version some/eigen-middleware`
    
    Tooling for initializing the Tap and managing the Middleware packages will be available in future versions. Also, CI pipelines that Middleware providers can use to validate new packages for new versions will be published.

Making your middleware software easily updatable by users is critical for ensuring a smooth user experience. By leveraging containerization technologies, implementing database migration and compatibility management, designing your middleware to handle shared state updates automatically, and using a CLI tool for middleware package management, you can simplify the process of updating your software for your users.
