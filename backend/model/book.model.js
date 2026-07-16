import pool from "../config/db.js";

class Book {

  // Get all books
  static async getAllBooks() {
    const result = await pool.query("SELECT * FROM books");
    return result.rows;
  }

  // Get book by ID
  static async getBookById(id) {
    const result = await pool.query(
      "SELECT * FROM books WHERE id = $1",
      [id]
    );

    return result.rows[0];
  }

  // Create Book
  static async createBook(book) {
    const { name, price, category, image, title } = book;

    const result = await pool.query(
      `INSERT INTO books
      (name, price, category, image, title)
      VALUES ($1, $2, $3, $4, $5)
      RETURNING *`,
      [name, price, category, image, title]
    );

    return result.rows[0];
  }

  // Update Book
  static async updateBook(id, book) {
    const { name, price, category, image, title } = book;

    const result = await pool.query(
      `UPDATE books
       SET name=$1,
           price=$2,
           category=$3,
           image=$4,
           title=$5
       WHERE id=$6
       RETURNING *`,
      [name, price, category, image, title, id]
    );

    return result.rows[0];
  }

  // Delete Book
  static async deleteBook(id) {
    const result = await pool.query(
      "DELETE FROM books WHERE id=$1 RETURNING *",
      [id]
    );

    return result.rows[0];
  }
}

export default Book;