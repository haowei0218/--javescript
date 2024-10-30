const db = require('./database_local')
const { Pool } = require('pg')
const express = require('express')
const { ApolloServer } = require('apollo-server-express')
const userTypeDefs = require('./schema/user')
const resolvers = require('./resolvers/queryResolvers');
const pool = new Pool({
         connectionString: process.env.CLOUD_DATABASE_URL
})

function ConnectDatabase() {
         if (process.env.POSTGRES_ENV === 'LOCAL') {
                  db.connect().then(() => {
                           console.log('Connect to the LocalHost database')
                  }).catch(error => {
                           console.log('Connect error:', error.stack)
                           throw new Error('Database connect error')
                  })
         } else {
                  pool.connect().then(() => {
                           console.log('Connect to the Cloud PostgreSQL database')
                  }).catch(error => {
                           console.log('Connect error:', error.stack)
                           throw new Error('Database connect error')
                  })
         }
}
ConnectDatabase()


let server;
const port = process.env.PORT || 4000
async function startServer() {

         server = new ApolloServer({
                  typeDefs: [userTypeDefs],
                  resolvers: resolvers,
                  cache: 'bounded',
                  persistedQueries: {
                           ttl: 900
                  },
                  context: () => {
                           if (process.env.POSTGRES_ENV === 'LOCAL') {
                                    return { db }
                           } else {
                                    return { pool }
                           }
                  }
         })

         server = new ApolloServer({
                  typeDefs: [userTypeDefs],
                  resolvers: resolvers,
                  cache: 'bounded',
                  persistedQueries: {
                           ttl: 900
                  },
                  context: () => ({ pool })
         })



         await server.start();
         const app = express()

         //將apollo server中間件應用到express
         server.applyMiddleware({ app })

         //啟動express服務器
         app.listen(port, () => {
                  console.log(`Server ready at ${port}`)
         })

}

startServer()

