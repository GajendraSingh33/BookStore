import express from 'express';
import dotenv from 'dotenv';
import pool from './config/db.js';

const app = express();
app.use(express.json());

dotenv.config();

const postgres_URI = process.env.postgresDBURI;



// connect to postgres database
app.get('/users', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM users');
    res.json(result.rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));



// app.listen(PORT, () => {
//   console.log(`Example app listening on port ${PORT}`);
// });