# Linear query performance

Observe that query time is linear when querying MongoDB – not so with Postgres. Note that `.env` files are intentionally checked into this repository for reproduction reference.

## Setup
1. From the repo root run `docker-compose up -d` to start MongoDB and Postgres

## Commands
From the `mongo` and `pg` directories use the following commands to seed and run queries:

1. `npm run seed`
2. `npm run query`

Adjust `const count` in `seed.ts` within each of the `mongo` and `pg` directories as needed. In my tests I found the following:

### MongoDB
Records|2|100|50000|100000|150000
-----|-----|-----|-----|-----|-----
ms to Query|60|108|1819|2742|4123

### PG
Records|2|100|50000|100000|150000
-----|-----|-----|-----|-----|-----
ms to Query|28|32|93|83|86

