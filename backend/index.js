import express from 'express';
import dotenv from 'dotenv';
import pkg from 'pg';
const { Pool } = pkg;

const app = express();
app.use(express.json());

dotenv.config();

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


//fetching data from database 
pool.query('SELECT * FROM books', (err, res) => {
    if (err) {
        console.error('Error executing query', err.stack);
    } else {
        console.log('Books:', res.rows);
    }
});



// print hello world on the home page
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// start the server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


// fecthing data from database
// app.get('/books', async (req, res) => {
//     try {
//         const result = await pool.query('SELECT * FROM books');
//         res.json(result.rows);
//     } catch (err) {
//         console.error('Error fetching books:', err.stack);
//         res.status(500).send('Error fetching books');
//     }
// });

// adding data to database
// app.post('/books', async (req, res) => {
//     const { title, author, price } = req.body;
//     try {
//         const result = await pool.query(
//             'INSERT INTO books (title, author, price) VALUES ($1, $2, $3) RETURNING *',
//             [title, author, price]
//         );
//         res.status(201).json(result.rows[0]);
//     } catch (err) {
//         console.error('Error adding book:', err.stack);
//         res.status(500).send('Error adding book');
//     }
// });