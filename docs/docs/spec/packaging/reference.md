---
sidebar_position: 4 
id: reference
---

# Reference package

## Package structure

```
./
├── profile/
│   ├── .env
│   ├── docker-compose.yml
│   └── profile.yml
└── manifest.yml
```

## `manifest.yml`

```yaml
version: "v0.0.1"
middleware_version: "v0.1.0"
name: sample-avs
upgrade: required
hardware_requirements: 
  - min_cpu_cores: 4
    min_ram: 4096
    min_free_space: 10240
    stop_if_requirements_are_not_met: true
plugin: 
  - image: "your-organization/plugin-service:latest"
profiles:
  - name: "profile"
```

## `docker-compose.yml`

```yaml
version: '3.8'

services:
  main-service:
    image: ${MAIN_SERVICE_IMAGE} 
    container_name: ${MAIN_SERVICE_NAME}
    volumes:
      - ${KEYSTORE_PATH}:/tmp/main/keys
    command:
    - eigen 
    - --flag-x=${X_VALUE}
    - --node-name=awesome-avs
    - --keystore-folder=/tmp/main/keys
    ports:
      - "${MAIN_PORT}:8080"
    depends_on:
      - db-service
    networks:
      - eigenlayer

  db-service:
    image: postgres:${DB_IMAGE_TAG}
    environment:
      - POSTGRES_USER=${DB_USER}
      - POSTGRES_PASSWORD=${DB_PASSWORD}
      - POSTGRES_DB=${DB_NAME}
    volumes:
      - db-data:/var/lib/postgresql/data
    networks:
      - eigenlayer

  utility-service:
    image: ${UTILITY_SERVICE_IMAGE}
    environment:
      - MAIN_SERVICE_HOST=main-service
      - MAIN_SERVICE_PORT=8080
    depends_on:
      - main-service
    networks:
      - eigenlayer

networks:
  eigenlayer:
    name: ${NETWORK_NAME}

volumes:
  db-data:
    name: ${VOLUME_NAME}
```

## `.env`

```
X_VALUE=value1
DB_NAME=example_name
```

## `profile.yml`

```yaml
version: "1.0"

options:
  - name: "main-container-image"
    target: MAIN_SERVICE_IMAGE
    type: string
    default: "your-organization/main-service:latest"
    validate:
      re2_regex: "^(?:(?:[a-zA-Z0-9.-]+(?:\:[0-9]+)?/)?[a-zA-Z0-9_-]+(?:/[a-zA-Z0-9_-]+)?(?:\:[a-zA-Z0-9_.-]+)?)?$"
    help: "Main service container docker image"
  - name: "main-container-name"
    target: MAIN_SERVICE_NAME
    type: string
    default: "main-service"
    validate:
      re2_regex: "^[a-zA-Z_-]+$"
    help: "Main service container name"
  - name: "keystore-folder-path"
    target: KEYSTORE_PATH
    type: path_dir
    help: "Path to the keystore folder"
  - name: "flag-x"
    target: X_VALUE
    type: select
    default: "value1"
    validate:
      options: ["value1", "value2", "value3"]
    help: "The flag-x defines X behavior. Possible values are value1, value2, and value3"
  - name: "main-port"
    target: MAIN_PORT
    type: port
    default: 8080
    help: "Main service server port"
  - name: "db-image-tag"
    target: DB_IMAGE_TAG
    type: string
    default: "latest"
    validate:
      re2_regex: "^[a-zA-Z]+$"
    help: "Tag of Postgres docker image"
  - name: "db-user"
    target: DB_USER
    type: str
    help: "Postgres DB user"
  - name: "db-password"
    target: DB_PASSWORD
    type: str
    validate:
      re2_regex: "^[^#]{8,}$"
    help: "Postgres DB user password. Must have at least 8 characters and it can't contain the '#' symbol"
  - name: "utility-container-image"
    target: UTILITY_SERVICE_IMAGE
    type: string
    default: "your-organization/utility-service:latest"
    validate:
      re2_regex: "^(?:(?:[a-zA-Z0-9.-]+(?:\:[0-9]+)?/)?[a-zA-Z0-9_-]+(?:/[a-zA-Z0-9_-]+)?(?:\:[a-zA-Z0-9_.-]+)?)?$"
    help: "Utility service container docker image"
  - name: "network-name"
    target: NETWORK_NAME
    type: str
    default: eigenlayer
    help: "Docker network name"
  - name: "volume-name"
    target: VOLUME_NAME
    type: str
    default: db-data
    help: "Docker volume name for Postgres DB"

monitoring:
  targets:
    - service: main-service
      port: 9000
      path: /metrics
```

:::tip

In this example, `flag-x` is present in the `.env` (`X_VALUE` var) and the reference file but without a default value. In this case, if the user doesn’t provide a value using the flag (for the [AVS setup wizard tool](/docs/category/avs-setup-wizard), the `.env` value will be used.

:::

:::tip 

It is strongly recommended to put any docker images as profile options. In this reference a `validate.re2_regex` is provided to validate docker image names. Notice that for the Postgres docker image, the name is fixed but the tag is used as a profile option, this is a recommended practice as well.

:::

:::tip

Notice the usage of the profile option type `path_dir` for the `KEYSTORE_PATH` env variable. Any path option should be used similarly.

:::