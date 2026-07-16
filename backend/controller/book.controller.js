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
export default getAllBooks;
