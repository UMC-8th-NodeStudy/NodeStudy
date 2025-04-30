import express from "express";
import { handleAddReview } from "../controller/review.controller.js";

const router = express.Router();

router.post("/", handleAddReview); //POST /api/reviews

export default router;
