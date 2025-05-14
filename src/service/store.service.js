import { responseFromReviews } from "../dto/store.dto.js";
import { insertReview } from "../repository/store.repository.js";
import { getAllStoreReviews } from "../repository/store.repository.js";

export const addReview = async (reviewData) => {
  const review = await insertReview(reviewData);
  return review;
};

export const listStoreReviews = async (storeId, cursor) => {
  const reviews = await getAllStoreReviews(storeId, cursor);
  return responseFromReviews(reviews);
};
