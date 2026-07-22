import { Pool } from "pg"
import dotenv from "dotenv"
dotenv.config()

const pool = new Pool({
    // host: process.env.DB_HOST,
    // user: process.env.DB_USER,
    // database: process.env.DB_NAME,
    // password: process.env.DB_PASSWORD,
    // port: Number(process.env.DB_PORT),
    connectionString: process.env.PG_LIVE_URL
})

export default pool