import dotenv from "dotenv";
dotenv.config();

import cors from "cors";
//express 모듈 불러오기
//const express = require('express')  -> CommonJs
import express from "express"; // -> ES Module

//router 불러오기
import reviewRouter from "./routes/store.routes.js";
import userRouter from "./routes/user.routes.js";

//swagger 세팅
import swaggerAutogen from "swagger-autogen";
import swaggerUiExpress from "swagger-ui-express";

//OAuth2 import 세팅
import { PrismaSessionStore } from "@quixo3/prisma-session-store";
import session from "express-session";
import passport from "passport";
import { googleStrategy } from "./auth.config.js";
import { prisma } from "./db.config.js";
import { kakaoStrategy } from "./auth.config.js";
dotenv.config();

//OAuth2 세팅
passport.use(googleStrategy);
passport.use(kakaoStrategy);

//passport.use(...) 는 passport 라이브러리에 저희가 정의한 로그인 방식을 등록하는 코드입니다.

passport.serializeUser((user, done) => done(null, user));
passport.deserializeUser((user, done) => done(null, user));
//passport.serializeUser, passport.deserializeUser 는 Session에 사용자 정보를 저장할 때,
//그리고 Session의 정보를 가져올 때 사용하는 함수들로, 우선은 특별히 변경할 내용이 없어 그대로 주고 받도록 정의했습니다.

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

/*
app.use(session(...)) 는 HTTP Cookie를 이용해서 Session ID(sid)는 프론트엔드(브라우저)에 저장하고, 
이에 연결되는 사용자 데이터는 store를 통해 Prisma로 연결된 저희의 MySQL DB에 저장하게 됩니다.
*/
app.use(
  session({
    cookie: {
      maxAge: 7 * 24 * 60 * 60 * 1000, //ms
    },
    resave: false,
    saveUninitialized: false,
    secret: process.env.EXPRESS_SESSION_SECRET,
    store: new PrismaSessionStore(prisma, {
      checkPeriod: 2 * 60 * 1000, //ms
      dbRecordIdIsSessionId: true,
      dbRecordIdFunction: undefined,
    }),
  })
);

app.use(passport.initialize());
app.use(passport.session());
/*
app.use(passport.session()) 는 앞으로 사용자의 모든 요청에 HTTP Cookie 중 sid(session id) 값이 있다면, 
이를 MySQL DB에서 찾아, 일치하는 Session이 있다면 사용자 데이터를 가져와 req.user에 넣어주게 됩니다.
*/

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

//Oauth2 세팅(구글)
app.get("/oauth2/login/google", passport.authenticate("google"));
// /oauth2/login/google 로 접속하면 자동으로 Google 로그인 주소로 이동하여 사용자가 Google 로그인을 할 수 있도록 해줍니다.
app.get(
  "/oauth2/callback/google",
  passport.authenticate("google", {
    failureRedirect: "/oauth2/login/google",
    failureMessage: true,
  }),
  (req, res) => res.redirect("/")
);
/*
oauth2/callback/google 는 Google 로그인이 성공하면 자동으로 되돌아오는 주소입니다. 
여기에서는 쿼리 파라미터로 전달된 code 값을 이용해 Google API를 호출하여 사용자의 프로필 정보를 조회해오고, 이를 Session에 저장하게 됩니다.
*/

//Oauth2 세팅(카카오)
// 카카오 로그인 진입
// app.get("/oauth2/login/kakao", passport.authenticate("kakao")); -> 기존꺼
// ✅ 카카오 로그인 진입 (자동 로그인 방지: 로그인 화면 강제 표시)
app.get("/oauth2/login/kakao", (req, res, next) => {
  passport.authenticate("kakao", {
    prompt: "login", // ✅ 이미 동의했더라도 로그인 화면 다시 표시
  })(req, res, next);
});

// 카카오 로그인 콜백
app.get(
  "/oauth2/callback/kakao",
  passport.authenticate("kakao", {
    failureRedirect: "/oauth2/login/kakao",
    failureMessage: true,
  }),
  (req, res) => {
    res.redirect("/"); // 로그인 성공 시 리디렉션
  }
);

//Swagger 세팅
app.use(
  "/docs",
  swaggerUiExpress.serve,
  swaggerUiExpress.setup(
    {},
    {
      swaggerOptions: {
        url: "/openapi.json",
      },
    }
  )
);

//Swagger 세팅
app.get("/openapi.json", async (req, res, next) => {
  // #swagger.ignore = true
  const options = {
    openapi: "3.0.0",
    disableLogs: true,
    writeOutputFile: false,
  };
  const outputFile = "/dev/null"; // 파일 출력은 사용하지 않습니다.
  const routes = ["./src/index.js"];
  const doc = {
    info: {
      title: "UMC 8th",
      description: "UMC 8th Node.js 테스트 프로젝트입니다.",
    },
    host: "localhost:3000",
  };

  const result = await swaggerAutogen(options)(outputFile, routes, doc);
  res.json(result ? result.data : null);
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
  // #swagger.ignore = true
  console.log("/");
  res.send("Hello UMC!");
});

// "/hello" 경로의 미들웨어
app.get("/hello", (req, res) => {
  // #swagger.ignore = true
  console.log("/hello");
  res.send("Hello world!");
});
