import User from "../model/user.model.js";
import bcrypt from "bcryptjs";

export const signupUser = async (req, res) => {
  try {
    const { fullname, email, password } = req.body;
    if (!fullname || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const existingUser = await User.findByEmail(email);
    if (existingUser) {
      return res.status(409).json({ message: "User already exists" });
    }

    const user = await User.create({ fullname, email, password });
    return res.status(201).json({ message: "User created successfully", user });
  } catch (error) {
    console.error("Error creating user:", error);
    return res.status(500).json({ message: "Failed to create user", error: error.message });
  }
};

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ message: "Email and password are required" });
    }

    const user = await User.findByEmail(email);
    if (!user || user.password !== password) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const hashPassword = await bcrypt.hash(password, 10);
    return res.status(200).json({
      message: "Login successful",
      user: {
        id: user.id,
        fullname: user.fullname,
        email: user.email,
        password: user.hashPassword,
      },
    });
  } catch (error) {
    console.error("Error logging in user:", error);
    return res.status(500).json({ message: "Failed to login", error: error.message });
  }
};
