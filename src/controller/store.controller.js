import { addReview } from "../service/store.service.js";
import { listStoreReviews } from "../service/store.service.js";
import { StatusCodes } from "http-status-codes";

//리뷰 추가하기
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

//리뷰 조회하기(커서 기반 마이그레이션[페이징] 처리 O)
export const handleListStoreReviews = async (req, res, next) => {
  const reviews = await listStoreReviews(
    //storeId와 cursor를 인자로 넘겨서 리뷰 목록을 비동기로 받아옴옴
    parseInt(req.params.storeId),
    typeof req.query.cursor === "string" ? parseInt(req.query.cursor) : 0
  );
  /**
  req.query.cursor: 쿼리 파라미터에서 커서 값 가져오기 (예: /stores/3/reviews?cursor=10) "10"이라는 문자열
  typeof === "string"으로 커서가 문자열인지 확인
  문자열이면 parseInt()로 숫자로 변환
  값이 없거나 문자열이 아니면 기본값 0 사용
   */
  res.status(StatusCodes.OK).json(reviews); //성공한 reviews 객체를 JSON 형식으로 클라이언트에게 응답으로 전송송
};

/**
//리뷰 조회하기(커서 기반 마이그레이션[페이징] 처리 X)
export const handleListStoreReviews = async (req, res, next) => {
  const reviews = await listStoreReviews(req.params.storeId);
  res.status(StatusCodes.OK).json(reviews);
};
*/
