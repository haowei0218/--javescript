const { Pool } = require('pg')




const pool = new Pool({
         host: process.env.POSTGRES_ENV === 'CLOUD' ? process.env.CLOUD_POSTGRES_HOST : process.env.LOCAL_POSTGRES_HOST,
         port: process.env.POSTGRES_ENV === 'CLOUD' ? process.env.CLOUD_POSTGRES_PORT : process.env.LOCAL_POSTGRES_PORT,
         user: process.env.POSTGRES_ENV === 'CLOUD' ? process.env.CLOUD_POSTGRES_USER : process.env.LOCAL_POSTGRES_USER,
         password: process.env.POSTGRES_ENV === 'CLOUD' ? process.env.CLOUD_POSTGRES_PASSWORD : process.env.LOCAL_POSTGRES_PASSWORD,
         database: process.env.POSTGRES_ENV === 'CLOUD' ? process.env.CLOUD_POSTGRES_DATABASE : process.env.LOCAL_POSTGRES_DATABASE,
         connectionString: process.env.CLOUD_DATABASE_URL
});


module.exports = pool



