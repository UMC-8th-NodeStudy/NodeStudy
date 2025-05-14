//오류 응답 개선

//중복 회원
export class DuplicateUserEmailError extends Error {
  errorCode = "U001";

  constructor(reason, data) {
    super(reason);
    this.reason = reason;
    this.data = data;
  }
}

//리뷰 추가 에러
export class ReviewAddError extends Error {
  errorCode = "R001";

  constructor(reason) {
    super(reason);
    this.reason = reason;
  }
}
