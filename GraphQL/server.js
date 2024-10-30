const { LOCALHOST_POSTGRES_DB } = require('./database_local')
const { CLOUD_POSTGRES_DB } = require('./database_local')
const { Pool } = require('pg')
const express = require('express')
const { ApolloServer } = require('apollo-server-express')
const userTypeDefs = require('./schema/user')
const resolvers = require('./resolvers/queryResolvers');
const app = express()
const cors = require('cors')
app.use(cors({
         origin: 'http://localhost:5173',
         credentials: true,
}), express.json())


function ConnectDatabase() {
         //檢查環境變數 確認現在是要用本機上的資料庫 還是用雲端的 雲端的話就直接複製內部連結就好
         if (process.env.POSTGRES_ENV === 'LOCAL') {
                  LOCALHOST_POSTGRES_DB.connect().then(() => {
                           console.log('Connect to the LocalHost database')
                  }).catch(error => {
                           console.log('Connect error:', error.stack)
                           throw new Error('Database connect to the Localhost PostgreSQL connect error')
                  })
         } else {
                  CLOUD_POSTGRES_DB.connect().then(() => {
                           console.log('Connect to the Cloud PostgreSQL database')
                  }).catch(error => {
                           console.log('Connect error:', error.stack)
                           throw new Error('Database connect to the Cloud PostgreSQL error')
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
                  },
                  cors: {
                           origin: '*',
                           credential: true
                  },
                  introspection: process.env.POSTGRES_ENV !== 'CLOUD',
                  playground: process.env.POSTGRES_ENV !== 'CLOUD',
                  formatError: (err) => {
                           console.log(err);
                           return err
                  }

         })
         await server.start();


         //將apollo server中間件應用到express

         server.applyMiddleware({ app, cors: false })

         //啟動express服務器
         app.listen(port, () => {
                  console.log(`Server ready at http://localhost${port}${server.graphqlPath}`)
         })

}

startServer()

