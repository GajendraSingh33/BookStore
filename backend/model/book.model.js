import pool from "../config/db.js";

class Book {
  static tableName = "books";

  static columns = {
    id: "SERIAL PRIMARY KEY",
    name: "VARCHAR(255)",
    price: "NUMERIC",
    category: "VARCHAR(100)",
    image: "TEXT",
    title: "TEXT",
  };
}

export default Book;