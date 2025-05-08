import express from "express";
import { handleAddReview } from "../controller/store.controller.js";
import { handleListStoreReviews } from "../controller/store.controller.js";

const router = express.Router();

router.post("/", handleAddReview); //POST /api/reviews
router.get("/stores/:storeId", handleListStoreReviews); //GET /api/reviews/stores/:storeId

export default router;
