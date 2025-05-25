import { ReviewAddError } from "../errors.js";
import { addReview } from "../service/store.service.js";
import { listStoreReviews } from "../service/store.service.js";
import { StatusCodes } from "http-status-codes";

//리뷰 추가하기
export const handleAddReview = async (req, res) => {
  /*
    #swagger.summary = '리뷰 추가하기 API';
    #swagger.requestBody = {
      required: true,
      content: {
        "application/json": {
          schema: {
            type: "object",
            properties: {
              storeId: { type: "number" },
              userId: { type: "number" },
              rating: { type: "number" },
              content: { type: "string"}
            }
          }
        }
      }
    };
    #swagger.responses[200] = {
      description: "리뷰 추가하기 성공 응답",
      content: {
        "application/json": {
          schema: {
            type: "object",
            properties: {
              resultType: { type: "string", example: "SUCCESS" },
              error: { type: "object", nullable: true, example: null },
              success: {
                type: "object",
                properties: {
                  id : { type: "number"}
                  storeId: { type: "number" },
                  userId: { type: "number" },
                  rating: { type: "number" },
                  content: { type: "string"}
                }
              }
            }
          }
        }
      }
    };
    #swagger.responses[400] = {
      description: "리뷰 추가하기 실패 응답",
      content: {
        "application/json": {
          schema: {
            type: "object",
            properties: {
              resultType: { type: "string", example: "FAIL" },
              error: {
                type: "object",
                properties: {
                  errorCode: { type: "string", example: "R001" },
                  reason: { type: "string" }
                }
              },
              success: { type: "object", nullable: true, example: null }
            }
          }
        }
      }
    };
*/
  try {
    const { storeId, userId, rating, content } = req.body;

    if (!storeId || !userId || !rating || !content) {
      return res.status(StatusCodes.BAD_REQUEST).json({
        message: "storeId, userId, rating, content는 필수입니다.",
      });
    }

    const review = await addReview({ storeId, userId, rating, content });
    res.status(StatusCodes.CREATED).success(review);
  } catch (err) {
    /** 
    console.log(err);
    res 
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: err.message });
      */
    throw new ReviewAddError(err.message);
  }
};

//리뷰 조회하기(커서 기반 마이그레이션[페이징] 처리 O)
export const handleListStoreReviews = async (req, res, next) => {
  /*
    #swagger.summary = '상점 리뷰 목록 조회 API';
    #swagger.responses[200] = {
      description: "상점 리뷰 목록 조회 성공 응답",
      content: {
        "application/json": {
          schema: {
            type: "object",
            properties: {
              resultType: { type: "string", example: "SUCCESS" },
              error: { type: "object", nullable: true, example: null },
              success: {
                type: "object",
                properties: {
                  data: {
                    type: "array",
                    items: {
                      type: "object",
                      properties: {
                        id: { type: "number" },
                        store: { type: "object", properties: { id: { type: "number" }, name: { type: "string" } } },
                        user: { type: "object", properties: { id: { type: "number" }, email: { type: "string" }, name: { type: "string" } } },
                        content: { type: "string" }
                      }
                    }
                  },
                  pagination: { type: "object", properties: { cursor: { type: "number", nullable: true } }}
                }
              }
            }
          }
        }
      }
    };
  */
  const reviews = await listStoreReviews(
    //storeId와 cursor를 인자로 넘겨서 리뷰 목록을 비동기로 받아옴
    parseInt(req.params.storeId),
    typeof req.query.cursor === "string" ? parseInt(req.query.cursor) : 0
  );
  /**
  req.query.cursor: 쿼리 파라미터에서 커서 값 가져오기 (예: /stores/3/reviews?cursor=10) "10"이라는 문자열
  typeof === "string"으로 커서가 문자열인지 확인
  문자열이면 parseInt()로 숫자로 변환
  값이 없거나 문자열이 아니면 기본값 0 사용
   */
  res.status(StatusCodes.OK).success(reviews); //성공한 reviews 객체를 JSON 형식으로 클라이언트에게 응답으로 전송
};

/**
//리뷰 조회하기(커서 기반 마이그레이션[페이징] 처리 X)
export const handleListStoreReviews = async (req, res, next) => {
  const reviews = await listStoreReviews(req.params.storeId);
  res.status(StatusCodes.OK).json(reviews);
};
*/
