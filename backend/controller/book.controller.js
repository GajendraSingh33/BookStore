import Book from '../model/book.model.js';

// Get all books
export const getAllBooks = async (req, res) => {
  try {
    const books = await Book.getAllBooks();
    res.status(200).json(books);
  } catch (error) {
    console.error('Error fetching books:', error);
    res.status(500).json({ error: error.message });
  }
};

// Get book by ID
export const getBookById = async (req, res) => {
  const { id } = req.params;
  try {
    const book = await Book.getBookById(id);
    if (!book) {
      return res.status(404).json({ error: 'Book not found' });
    }
    res.status(200).json(book);
  } catch (error) {
    console.error('Error fetching book:', error);
    res.status(500).json({ error: error.message });
  }
};

// Create a new book
export const createBook = async (req, res) => {
  const { name, price, category, image, title } = req.body;
  try {
    const newBook = await Book.createBook({ name, price, category, image, title });
    res.status(201).json(newBook);
  } catch (error) {
    console.error('Error creating book:', error);
    res.status(500).json({ error: error.message });
  }
};

// Update a book
export const updateBook = async (req, res) => {
  const { id } = req.params;
  const { name, price, category, image, title } = req.body;
  try {
    const updatedBook = await Book.updateBook(id, { name, price, category, image, title });
    if (!updatedBook) {
      return res.status(404).json({ error: 'Book not found' });
    }
    res.status(200).json(updatedBook);
  } catch (error) {
    console.error('Error updating book:', error);
    res.status(500).json({ error: error.message });
  }
};

// Delete a book
export const deleteBook = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedBook = await Book.deleteBook(id);
    if (!deletedBook) {
      return res.status(404).json({ error: 'Book not found' });
    }
    res.status(200).json({ message: 'Book deleted successfully' });
  } catch (error) {
    console.error('Error deleting book:', error);
    res.status(500).json({ error: error.message });
  }
};