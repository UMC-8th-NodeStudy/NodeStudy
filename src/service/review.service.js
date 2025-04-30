import { insertReview } from "../repository/review.repository.js";

export const addReview = async (reviewData) => {
  const reviewId = await insertReview(reviewData);
  return { reviewId };
};
