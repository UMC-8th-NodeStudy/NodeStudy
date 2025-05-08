import { responseFromReviews } from "../dto/store.dto.js";
import { insertReview } from "../repository/store.repository.js";
import { getAllStoreReviews } from "../repository/store.repository.js";

export const addReview = async (reviewData) => {
  const reviewId = await insertReview(reviewData);
  return { reviewId };
};

export const listStoreReviews = async (storeId, cursor) => {
  const reviews = await getAllStoreReviews(storeId);
  return responseFromReviews(reviews);
};
