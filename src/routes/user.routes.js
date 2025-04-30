import express from "express";
import { handleUserSignUp } from "../controller/user.controller.js";

const router = express.Router();

//회원가입 API
router.post("/register", handleUserSignUp); // POST /api/users/register

export default router;
