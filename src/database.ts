import { Pool } from 'pg';
// cambiar config y meterla a un env
const config = {
    user: 'superuser',
    host: 'localhost',
    password: 'superuserdk',
    database: 'market'
}

const pool = new Pool(config)

export default pool;