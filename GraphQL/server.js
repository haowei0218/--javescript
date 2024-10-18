const db = require('./database_local')
const express = require('express')
const { ApolloServer } = require('apollo-server-express')
const userTypeDefs = require('./schema/user')
const resolvers = require('./resolvers/queryResolvers');

async function startServer() {
         const server = new ApolloServer({
                  typeDefs: [userTypeDefs],
                  resolvers: resolvers,
                  context: () => ({ db })
         })

         await server.start();
         const app = express()

         //將apollo server中間件應用到express
         server.applyMiddleware({ app })

         //啟動express服務器
         app.listen({ port: 4000 }, () => {
                  console.log(`Server ready at ${server.graphqlPath}`)
         })

}

startServer()

