const { Pool } = require('pg')

const Supabase = new Pool({
         connectionString: "postgresql://postgres.csutzncxyvmaoeujpols:cdsdweeecdsd1332@aws-0-ap-southeast-1.pooler.supabase.com:6543/postgres"
})

Supabase.connect().then(() => {
         console.log('supabase connect successfully')
}).catch(err => {
         console.log('connect fail', err)
})