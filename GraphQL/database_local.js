const { Pool } = require('pg')


const LOCALHOST_POSTGRES_DB = new Pool({
         host: process.env.LOCAL_POSTGRES_HOST,
         port: process.env.LOCAL_POSTGRES_PORT,
         user: process.env.LOCAL_POSTGRES_USER,
         password: process.env.LOCAL_POSTGRES_PASSWORD,
         database: process.env.LOCAL_POSTGRES_DATABASE,
});

const CLOUD_POSTGRES_DB = new Pool({
         connectionString: process.env.CLOUD_DATABASE_URL
})

module.exports = { LOCALHOST_POSTGRES_DB, CLOUD_POSTGRES_DB }



