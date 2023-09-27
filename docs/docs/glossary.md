# Glossary

- [Glossary](#glossary)
  - [AVS (Actively Validated Service)](#avs-actively-validated-service)
  - [AVS Node](#avs-node)
  - [Strategy contract](#strategy-contract)
  - [Eigenlayer Operator](#eigenlayer-operator)


## AVS (Actively Validated Service)

Collection of services or middleware software that is built on top of EigenLayer.

## AVS Node

An AVS Node is a node that runs the AVS software as an [Eigenlayer Operator](#eigenlayer-operator). Can be defined as a collection of Docker services declared in a Docker Compose file.

## Strategy contract

A strategy in EigenLayer is a contract that holds staker deposits, meaning it controls one or more asset(s) that can be restaked. At the launch of EigenLayer, the system will feature only simple strategies which may hold a single token. However, the design of EigenLayer's strategies is flexible and open-ended. In the future, strategies could be deployed which implement more intricate logic, including integrations with decentralized finance (DeFi) platforms.

## Eigenlayer Operator

Eigenlayer Operators act as AVS nodes by opting in to validating AVSs by running their AVS software.