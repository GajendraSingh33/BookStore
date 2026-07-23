import express from "express";
import { loginUser, signupUser } from "../controller/user.controller.js";

const router = express.Router();

router.post("/signup", signupUser);
router.get("/login", loginUser);

export default router;