import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
const app = express();

dotenv.config();

const PORT = process.env.PORT || 4000;
const mongo_URI = process.env.mongoDBURI;

// connect to database
try {
  mongoose.connect(mongo_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log('Connected to MongoDB');
} catch (error) {
  console.error('Error connecting to MongoDB:', error);
}


app.get('/', (req, res) => {
  res.send('Book Store!');
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});