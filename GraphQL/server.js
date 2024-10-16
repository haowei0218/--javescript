const { Pool } = require('pg')
const { ApolloServer } = require('apollo-server')
const typeDefs = require('./index')
const resolvers = require('./graphql/learnTableResolvers');

const pool = new Pool({
         user: 'postgres',
         host: 'localhost',
         database: 'postgres',
         port: 5433,
         password: 'Ha900218'
})

const server = new ApolloServer({
         typeDefs,
         resolvers,
         context: () => ({ pool })
})

server.listen().then(({ url }) => {
         console.log(`Server ready at ${url}`)
})