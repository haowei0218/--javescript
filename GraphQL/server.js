const db = require('./database_local')
const { Pool } = require('pg')
const express = require('express')
const { ApolloServer } = require('apollo-server-express')
const userTypeDefs = require('./schema/user')
const resolvers = require('./resolvers/queryResolvers');
const pool = new Pool({
         connectionString: process.env.CLOUD_DATABASE_URL
         //連接render上的內部連結
})
const cors = require('cors')


function ConnectDatabase() {
         //檢查環境變數 確認現在是要用本機上的資料庫 還是用雲端的
         if (process.env.POSTGRES_ENV === 'LOCAL') {
                  db.connect().then(() => {
                           console.log('Connect to the LocalHost database')
                  }).catch(error => {
                           console.log('Connect error:', error.stack)
                           throw new Error('Database connect to the Localhost PostgreSQL connect error')
                  })
         } else {
                  pool.connect().then(() => {
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
         const app = express()

         //將apollo server中間件應用到express
         app.use(
                  cors(),
                  express.json(),
                  server.getMiddleware()
         )

         //啟動express服務器
         app.listen(port, () => {
                  console.log(`Server ready at http://localhost${port}${server.graphqlPath}`)
         })

}

startServer()

