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
version: "v0.1.0"
name: eigenDA
upgrade: required
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
    container_name: main-service
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
    container_name: db-service
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
    container_name: utility-service
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
  - name: "flag-x"
    target: X_VALUE
    type: enum
    values: [value1, value2, value3]
    help: "The flag-x defines X behavior. Possible values are value1, value2, and value3"
  - name: "main-port"
    target: MAIN_PORT
    type: port
    default: 8080
    help: "Main service server port"
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

In this example, flag-x is present in the .env (`X_VALUE` var) and the reference file but without a default value. In this case, if the user doesn’t have a value using the flag (for a Middleware setup wizard), the .env value will be used.

:::