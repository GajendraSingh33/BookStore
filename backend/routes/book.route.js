import express from 'express';
import getallBooks from './routes/book.route.js';

const router = express.Router();

// Define routes
router.get('/books', getallBooks);

export default router;  