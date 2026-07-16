import express from 'express';
import { getAllBooks } from '../controller/book.controller.js';

const router = express.Router();

// Define routes
router.get('/books', getAllBooks);

export default router;