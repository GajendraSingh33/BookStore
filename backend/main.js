import pkg from 'pg';
const { Pool } = pkg;

const pool = new Pool({
    host:"localhost",
    user:"postgres",
    password:"1234",
    database:"bookstore",
    port:5432
})

pool.connect().then(()=>{
    console.log("connected to postgres database")
});


async function connectDB() {
  try {
    await pool.connect();
    console.log('Connected to PostgreSQL successfully!');
    
    // Test query
    const res = await pool.query('SELECT NOW()');
    console.log('Server time:', res.rows[0].now);
    
  } catch (err) {
    console.error('Connection error:', err.stack);
  } finally {
    await pool.end();
  }
}

connectDB();