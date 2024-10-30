const db = require('./database_local')
const express = require('express')
const { ApolloServer } = require('apollo-server-express')
const userTypeDefs = require('./schema/user')
const resolvers = require('./resolvers/queryResolvers');

db.connect().then(() => {
         console.log('Connect to the database')
}).catch(error => {
         console.log('Connect error:', error.stack)
         throw new Error('Database connect error')
})

const port = process.env.PORT || 4000
async function startServer() {
         const server = new ApolloServer({
                  typeDefs: [userTypeDefs],
                  resolvers: resolvers,
                  cache: 'bounded',
                  persistedQueries: {
                           ttl: 900
                  },
                  context: () => ({ db })
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

