# Azure Cosmos DB for Apache Cassandra client library samples for JavaScript


## Getting started

This repo has a [devcontainer](https://containers.dev) environment making it easy to get started.


### Run the app

Configure your Azure Cosmos DB credentials as environment variables.

```bash
export COSMOS_ENDPOINT="<cosmos-account-URI>"
export COSMOS_KEY="<cosmos-account-PRIMARY-KEY>"
```

> **💡 TIP**: If you don't have an Azure Cosmos DB account, [create a free account](https://cosmos.azure.com/try/).

Run the quickstart sample app using the [`cassandra-driver`](https://www.npmjs.com/package/cassandra-driver) package from NPM.

```bash
cd 001-quickstart/
npm install cassandra-driver
npm run start
```

### Validate any changes you make

If you change the code, run the linter.

```bash
cd ./
npm install eslint-config-standard --no-save
```

```bash
cd ./001-quickstart/
npx eslint .
```

### Troubleshooting certificate errors

If you use a self-signed certificate (emulator, Docker, etc.), you may need to disable Node's validation:

```javascript
const client = new Client({
  ...,
  ...,
  ...,
  sslOptions: {
    rejectUnauthorized: false
  }
})
```
