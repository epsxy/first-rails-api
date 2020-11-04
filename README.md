# Ruby on Rails messages API

## Requirements

- make
- ruby v2.7.0
- bundler v2.1.2 (`gem install bundler -v 2.1.2`)
- yarn / npm
- Docker
- docker-compose

## Description

This repository contains 2 packages:

- `api`, containing the rails API, which needs ton run on the `:3000` port.
- `client`, containing the React client. It can be run on any port (for example `:3001` for dev and `:80` for prod), but will always reach the rails api on the `3000` port.

# Quickstart

The easiest way to start is to run the `make docker` command, which will build 2 containers and start the app inside them. You will be able to access the web app running at `http://localhost:80` in your host. The React app is statically served by Nginx inside docker.

```bash
make docker
```

# Development

You can run the following commands:

```bash
# install client dependencies
cd client && yarn install

# install api dependencies
cd api && bundle install

# Run client tests
cd client && yarn test --verbose

# Run api tests
cd api && rails test --verbose
```

# Misc

- The React app only have 1 component tested. It's a PoC of how I would test the rest of them.
- The api have model tests, where we check if the model validation is valid (required fields, etc) and integration testing where we make API calls to the controller and check if the response is correct.
