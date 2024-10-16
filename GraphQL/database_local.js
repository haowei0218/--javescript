const { ApolloServer, gql } = require('apollo-server')
const { Pool } = require('pg')




let pool = new Pool({
         user: 'postgres',
         host: 'localhost',
         database: 'postgres',
         port: 5433,
         password: "Ha900218"
})

pool.connect().then(() => console.log('Connected to PostgreSQL')).catch(err => console.log("Connection error", err.stack))



module.exports = { pool }