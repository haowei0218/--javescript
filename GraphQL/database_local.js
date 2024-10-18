const { Pool } = require('pg')




const pool = new Pool({
         user: 'postgres',
         host: 'localhost',
         database: 'postgres',
         port: 5433,
         password: "Ha900218"
})

module.exports = pool



