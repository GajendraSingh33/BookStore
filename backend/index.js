import express from 'express';
import dotenv from 'dotenv';

const app = express();
app.use(express.json());

dotenv.config();


// print hello world on the home page
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// start the server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
