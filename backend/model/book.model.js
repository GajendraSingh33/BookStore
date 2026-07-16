import pg from 'pg';
const { Pool } = pg;

const pool = new Pool({
    host: "localhost",
    user: "postgres",
    password: "1234",
    database: "bookstore",
    port: 5432
});

export default pool;