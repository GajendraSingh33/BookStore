import pool from "../config/db.js";

class User {
  static async findByEmail(email) {
    const result = await pool.query("SELECT * FROM users WHERE email = $1", [email]);
    return result.rows[0];
  }

  static async create({ fullname, email, password }) {
    const result = await pool.query(
      "INSERT INTO users (fullname, email, password) VALUES ($1, $2, $3) RETURNING id, fullname, email",
      [fullname, email, password]
    );
    return result.rows[0];
  }
}

export default User;
