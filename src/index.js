//express 모듈 불러오기
//const express = require('express')  -> CommonJs
import express from "express"; // -> ES Module

const app = express();
const port = 3000;

//app.get() : Get 요청으로 /(루트 경로)로 접속하면 콜백함수(매개변수로 전달되는 함수)를 실행함
// /(루트 경로)로 접속하면 "Hello World!" 출력력
app.get("/", (req, res) => {
  res.send("Hello 현준");
});

//app.listen() : 서버를 특정포트에서 실행하는 함수
//서버가 성공적으로 시작되었을때 콜백함수 실행
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
