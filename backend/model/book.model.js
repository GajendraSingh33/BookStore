import pool from "../config/db.js";

class Book {
  static async findAll() {
    const result = await pool.query("SELECT * FROM books");
    return result.rows;
  }
}

export default Book;