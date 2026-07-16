import pkg from 'pg';
const { Pool } = pkg;

// connect to postgres database
const pool = new Pool({
    host:"localhost",
    user:"postgres",
    password:"1234",
    database:"bookstore",
    port:5432
})

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

export default pool;


// //fetching data from database 
// pool.query('SELECT * FROM books', (err, res) => {
//     if (err) {
//         console.error('Error executing query', err.stack);
//     } else {
//         console.log('Books:', res.rows);
//     }
// });