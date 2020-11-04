# API

This is the package hosting the API endpoints.

## Webservices

- `GET /api/messages`: Get the messages list
- `GET /api/messages/:id`: Get message from id
- `POST /api/messages`: Post a new message
- `PUT /api/messages/:id`: Update an existing message
- `DELETE /api/messages`: Delete all messages
- `DELETE /api/messages/:id`: Delete an existing message

## Quickstart

```bash
# install dependencies
bundle install

# run tests
rails test --verbose

# initialise db with fake data
rails db:seed:replant

# run server
rails s
```
