import { pool } from "../db.config.js";
import { prisma } from "../db.config.js";

export const insertReview = async ({ storeId, userId, rating, content }) => {
  const review = await prisma.userStoreReview.create({
    data: {
      storeId,
      userId,
      rating,
      content,
    },
    //  include: {
    //   store: true, // 필요하면 관계도 포함
    //   user: true,
    // },
  });
  return review;
};
/**
Prisma에서 create()나 find...() 실행 후 기본적으로 반환하는 객체에는 include/select하지 않은 관계 정보는 안 들어 있습니다.
그래서:
storeId, userId, content, rating 같은 단순 필드는 return review 만으로도 잘 반환됨
하지만 user나 store의 상세 정보도 함께 받고 싶다면 include가 필요합니다.
 */

//리뷰 모두 조회하기
//특정 가게(storeId)의 리뷰들 중,
//특정 커서 이후의 리뷰 5개를 가져오는 커서 기반 페이지네이션용 Prisma 쿼리 함수
export const getAllStoreReviews = async (storeId, cursor) => {
  const reviews = await prisma.userStoreReview.findMany({
    //findMany : 여러 개의 row를 가져오는 Prisma 메서드
    select: {
      id: true, //true를 설정하면 해당 컬럼 포함됨
      content: true,
      storeId: true, //store, user는 relation 관계(Join) -> 외래 키로 연결된 store와 user의 정보도 가져옴옴
      userId: true,
      store: true,
      user: true,
    },
    where: { storeId: storeId, id: { gt: cursor } }, //where절 조건 설정
    //storeId가 일치하는것, id > cursor : 현재 커서보다 ID가 더 큰, 즉 이후의 데이터
    orderBy: { id: "asc" }, // ID 오름차순으로 정렬 => 커서 이후의 "다음" 데이터 5개 가져오기 위해 필요
    take: 5, //가져올 데이터 개수 제한(5개만)
  });

  return reviews; //위 조건에 따라 DB에서 조회된 리뷰 배열을 반환
};
