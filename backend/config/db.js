import dotenv from "dotenv";
import pkg from 'pg';
const { Pool } = pkg;

dotenv.config();

const getEnv = (...keys) => {
  for (const key of keys) {
    const value = process.env[key];
    if (value) {
      return value;
    }
  }
  return undefined;
};

// connect to postgres database by getting credentials from .env file
const pool = new Pool({
  host: getEnv("DB_HOST", "host") || "localhost",
  user: getEnv("DB_USER", "username", "user") || "postgres",
  password: getEnv("DB_PASSWORD", "password") || "1234",
  database: getEnv("DB_NAME", "database") || "bookstore",
  port: Number(getEnv("DB_PORT", "port")) || 5432,
});

// Test database connection
async function connectDB() {
  try {
    await pool.connect();
    console.log('Connected to PostgreSQL successfully!');
    
    // Test query
    const res = await pool.query('SELECT NOW()');
    console.log('Server time:', res.rows[0].now);

    await pool.query(`
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        fullname VARCHAR(255) NOT NULL,
        email VARCHAR(255) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL
      )
    `);
     
  } catch (err) {
    console.error('Connection error:', err.stack);
  } 
}
connectDB();

export default pool;


// //fetching data from database 
// pool.query('SELECT * FROM books', (err, res) => {
//     if (err) {
//         console.error('Error executing query', err.stack);
//     } else {
//         console.log('Books:', res.rows);
//     }
// });