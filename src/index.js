import dotenv from "dotenv";
import cors from "cors";
//express 모듈 불러오기
//const express = require('express')  -> CommonJs
import express from "express"; // -> ES Module

//router 불러오기
import reviewRouter from "./routes/store.routes.js";
import userRouter from "./routes/user.routes.js";

dotenv.config();

const app = express();
const port = process.env.PORT;

/**
 * 공통 응답을 사용할 수 있는 헬퍼 함수 등록
 */
app.use((req, res, next) => {
  res.success = (success) => {
    return res.json({ resultType: "SUCCESS", error: null, success });
  };

  res.error = ({ errorCode = "unknown", reason = null, data = null }) => {
    return res.json({
      resultType: "FAIL",
      error: { errorCode, reason, data },
      success: null,
    });
  };

  next();
});

app.use(cors()); // cors 방식 허용
app.use(express.static("public")); // 정적 파일 접근
app.use(express.json()); // request의 본문을 json으로 해석할 수 있도록 함 (JSON 형태의 요청 body를 파싱하기 위함)
app.use(express.urlencoded({ extended: false })); // 단순 객체 문자열 형태로 본문 데이터 해석

/** 
//app.get() : Get 요청으로 /(루트 경로)로 접속하면 콜백함수(매개변수로 전달되는 함수)를 실행함
// /(루트 경로)로 접속하면 "Hello World!" 출력력
app.get("/", (req, res) => {
  res.send("안녕 현준");
});
**/

// 미들웨어 설정
app.use(express.json()); // JSON 본문 파싱

//라우팅 설정 안했을시 요청 예시
//app.post("/api/v1/users/signup", handleUserSignUp);

// 라우팅 설정
app.use("/api/users", userRouter); // 회원 관련 API
app.use("/api/reviews", reviewRouter); // 리뷰 관련 API

//전역 에러 처리 미들웨어는 모든 미들웨어와 라우터 등록 이후에 맨 마지막에 위치해야 합니다.
/**
 * 전역 오류를 처리하기 위한 미들웨어
=> 이 미들웨어는 Controller 내에서 별도로 처리하지 않은 오류가 발생할 경우, 
모두 잡아서 공통된 오류 응답으로 내려주게 됩니다.
 */
app.use((err, req, res, next) => {
  if (res.headersSent) {
    return next(err);
  }

  res.status(err.statusCode || 500).error({
    errorCode: err.errorCode || "unknown",
    reason: err.reason || err.message || null,
    data: err.data || null,
  });
});

//app.listen() : 서버를 특정포트에서 실행하는 함수
//서버가 성공적으로 시작되었을때 콜백함수 실행
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

//미들웨어 설정
const myLogger = (req, res, next) => {
  console.log("LOGGED");
  next(); //미들웨어 함수로 넘어가게끔 하는 함수수
  //미들웨어 : 요청과 응답의 중간에서 요청과 응답 객체를 처리하거나, 다음 미들웨어를 실행시킬 수 있도록 함함
};

app.use(myLogger);

// "/" 경로의 미들웨어
app.get("/", (req, res) => {
  console.log("/");
  res.send("Hello UMC!");
});

// "/hello" 경로의 미들웨어
app.get("/hello", (req, res) => {
  console.log("/hello");
  res.send("Hello world!");
});
