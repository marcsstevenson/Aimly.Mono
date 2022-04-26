# Aimly Exchange Frontend

## Project setup

Use `npm` to install the project dependencies:

```bash
npm install
```

## Startup

npm run start
npm run tailwind

### Compiles and minifies for production

```bash
npm run build
```

### Run your tests

```bash
npm run test
```

### To update the GraphQL schema

The aimly-backend.schema.graphql file needs to be up to date so that relay knows what code to generate from queries and fragments.

The NPM package, get-graphql-schema, needs to be installed:

npm install -g get-graphql-schema

The run it to update the target schema file: get-graphql-schema [OPTIONS] ENDPOINT_URL > schema.graphql

Eg:

get-graphql-schema http://localhost:7071/api/graphqlschema > aimly-backend.schema.graphql

[Refer here](https://www.npmjs.com/package/get-graphql-schema)

### Relay

[Refer to docs here](https://relay.dev/docs/getting-started)

To update your generation relay files (src/**generated**):

npm run relay
