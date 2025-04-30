import { addReview } from "../service/review.service.js";
import { StatusCodes } from "http-status-codes";

export const handleAddReview = async (req, res) => {
  try {
    const { storeId, userId, rating, content } = req.body;

    if (!storeId || !userId || !rating || !content) {
      return res.status(StatusCodes.BAD_REQUEST).json({
        message: "storeId, userId, rating, content는 필수입니다.",
      });
    }

    const review = await addReview({ storeId, userId, rating, content });
    res.status(StatusCodes.CREATED).json({
      message: "리뷰 등록 완료",
      reviewId: review.reviewId,
    });
  } catch (err) {
    console.log(err);
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: err.message });
  }
};
