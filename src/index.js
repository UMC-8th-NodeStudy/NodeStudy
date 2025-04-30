import dotenv from "dotenv";
import cors from "cors";
//express 모듈 불러오기
//const express = require('express')  -> CommonJs
import express from "express"; // -> ES Module
import { handleUserSignUp } from "./controller/user.controller.js";

dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(cors()); // cors 방식 허용
app.use(express.static("public")); // 정적 파일 접근
app.use(express.json()); // request의 본문을 json으로 해석할 수 있도록 함 (JSON 형태의 요청 body를 파싱하기 위함)
app.use(express.urlencoded({ extended: false })); // 단순 객체 문자열 형태로 본문 데이터 해석

//app.get() : Get 요청으로 /(루트 경로)로 접속하면 콜백함수(매개변수로 전달되는 함수)를 실행함
// /(루트 경로)로 접속하면 "Hello World!" 출력력
app.get("/", (req, res) => {
  res.send("안녕 현준");
});

app.post("/api/users/register", handleUserSignUp); //정해진 URL로 POST 요청을 보내면 handleUserSignUp 함수가 실행행

//app.listen() : 서버를 특정포트에서 실행하는 함수
//서버가 성공적으로 시작되었을때 콜백함수 실행
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
