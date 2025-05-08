/**
리뷰 리스트(reviews)를 받아서 클라이언트에게
다음 요청을 위한 커서(cursor)와 함께 응답 구조를 만들어주는 함수
 */
export const responseFromReviews = (reviews) => {
  //표준 응답 객체를 만들어서 반환(reviews : 라뷰 객체 배열)
  return {
    data: reviews, //data 필드에 리뷰 배열 그대로 들어감
    pagination: {
      cursor: reviews.length ? reviews[reviews.length - 1].id : null,
    },
    //pagination : {cursor :...}
    //=> 커서 기반 페이지네이션에서 사용되는 "다음 요청 시 기준 커서"를 포함하는 부분
    /**
     리뷰가 1개 이상이면:
     마지막 리뷰의 id를 커서로 사용 (다음 페이지 시작 지점)
     
     리뷰가 없으면:
     null 반환 → 더 이상 다음 페이지 없음
     */
  };
};

//최종 응답 예시
/**
 {
  "data": [
    { "id": 1, "content": "좋아요" },
    { "id": 2, "content": "별로예요" }
  ],
  "pagination": {
    "cursor": 2
  }
}
 */
