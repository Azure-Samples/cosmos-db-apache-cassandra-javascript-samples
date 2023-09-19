// <imports>
import { Client, auth } from 'cassandra-driver'
// </imports>

// <client>
const credentials = new auth.PlainTextAuthProvider(
  'localhost',
  'C2y6yDjf5/R+ob0N8A7Cgv30VRDJIWEHLM+4QDU5DE2nQ9nDuVTqobD4b8mGGyPMbIZnqyMsEcaGQy67XIw/Jw=='
)

const client = new Client({
  contactPoints: [
    'localhost:10350'
  ],
  authProvider: credentials,
  localDataCenter: 'South Central US'
})
// </client>

// <resources>
await client.execute(
  'CREATE KEYSPACE IF NOT EXISTS cosmicworks WITH replication = {\'class\':\'basicclass\', \'replication_factor\': 1};'
)

await client.execute(
  'CREATE TABLE IF NOT EXISTS cosmicworks.products (id text PRIMARY KEY, name text)'
)
// </resources>

// <upsert>
const item = {
  id: '68719518371',
  name: 'Kiama classic surfboard'
}

await client.execute(
  'INSERT INTO cosmicworks.products (id, name) VALUES (?, ?)',
  [
    item.id,
    item.name
  ]
)
// </upsert>

process.exit()
