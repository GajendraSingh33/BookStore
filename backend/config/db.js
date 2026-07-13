const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  user: process.env.username,
  host: process.env.host,
  database: process.env.database,
  password: process.env.password,
  port: process.env.port,
});

pool.on('connect', () => {
  console.log('Connected to PostgreSQL database');
});

pool.on('error', (err) => {
  console.error('Unexpected error on idle client', err);
  process.exit(-1);
});

module.exports = pool;