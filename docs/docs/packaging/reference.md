---
sidebar_position: 4 
id: reference
---

# Reference package

## Package structure

```
./
├── profile/
│   ├── alerts/
│   ├── dashboards/
│   ├── panels/
│   ├── .env
│   ├── docker-compose.yml
│   └── profile.yml
└── manifest.yml
```

## `manifest.yml`

```yaml
version: "v1.0.0"
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
    src: "./profile"
```

## `docker-compose.yml`

```yaml
version: '3.8'

services:
  main-service:
    image: your-organization/main-service:latest
    container_name: ${MAIN_SERVICE_NAME}
    command:
    - eigen 
    - --flag-x=${X_VALUE}
    - --flag-y=<value-for-flag-y>
    ports:
      - "${MAIN_PORT}:8080"
    depends_on:
      - db-service
    networks:
      - eigenlayer

  db-service:
    image: postgres:latest
    container_name: ${DB_SERVICE_NAME}
    environment:
      - POSTGRES_USER=${DB_USER}
      - POSTGRES_PASSWORD=${DB_PASSWORD}
      - POSTGRES_DB=${DB_NAME}
    volumes:
      - db-data:/var/lib/postgresql/data
    networks:
      - eigenlayer

  utility-service:
    build: ./path/to/utility-service-dockerfile
    container_name: ${UTILITY_SERVICE_NAME}
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
  - name: "main-container-name"
    target: MAIN_SERVICE_NAME
    type: id
    default: "main-service"
    help: "Main service container name"
  - name: "flag-x"
    target: X_VALUE
    type: select
    values: [value1, value2, value3]
    help: "The flag-x defines X behavior. Possible values are value1, value2, and value3"
  - name: "main-port"
    target: MAIN_PORT
    type: port
    default: 8080
    help: "Main service server port"
  - name: "db-container-name"
    target: DB_SERVICE_NAME
    type: id
    default: "db-service"
    help: "DB service container name"
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
  - name: "utility-container-name"
    target: UTILITY_SERVICE_NAME
    type: id
    default: "utility-service"
    help: "Utility service container name"
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
  tag: mainnet-da
    targets:
      - service: main-service
        port: 9000
        path: /metrics
```

:::tip

In this example, `flag-x` is present in the `.env` (`X_VALUE` var) and the reference file but without a default value. In this case, if the user doesn’t provide a value using the flag (for the [AVS setup wizard tool](../wizard/intro)), the `.env` value will be used.

:::