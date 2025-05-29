import dotenv from "dotenv"; //.env 파일에 정의된 환경변수들을 process.env에 로드하기 위해 dotenv 패키지를 불러옵니다.

dotenv.config();
//.env 파일을 읽어서 process.env에 환경변수를 등록합니다.

import { Strategy as GoogleStrategy } from "passport-google-oauth20";
/*
passport-google-oauth20에서 GoogleStrategy를 가져오되, 이름을 GoogleStrategy로 바꿔서 사용합니다.
이는 Passport.js의 구글 OAuth 2.0 인증 전략입니다.
 */

import { Strategy as KakaoStrategy } from "passport-kakao";

import { prisma } from "./db.config.js";
/*
데이터베이스 접근을 위한 Prisma Client 인스턴스를 가져옵니다.
./db.config.js에서 설정된 Prisma 클라이언트를 사용합니다.
*/

// ✅ Google 전략
export const googleStrategy = new GoogleStrategy(
  {
    clientID: process.env.PASSPORT_GOOGLE_CLIENT_ID,
    clientSecret: process.env.PASSPORT_GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:3000/oauth2/callback/google", //인증 후 구글이 리디렉션할 URL(Authorization Code를 쿼리파라미터로)
    scope: ["email", "profile"], //요청할 사용자 정보 범위
    state: true, //CSRF 보호를 위한 state 파라미터 사용 여부(보안 강화 목적)
  },
  (accessToken, refreshToken, profile, cb) => {
    //인증 성공 시 호출되는 verify 함수
    return googleVerify(profile) //profile: 구글에서 받은 사용자 정보
      .then((user) => cb(null, user)) //cb: Passport에게 인증 결과를 전달할 콜백 함수 (cb(err, user))
      .catch((err) => cb(err));
    /*
    user 객체를 만들어 cb(null, user)로 Passport에 전달하여 로그인 완료 처리.
    에러 발생 시 cb(err)로 전달하여 실패 처리.
    */
  }
);

/*
Google 로그인 후 전달 받은 사용자의 프로필 정보에 이메일이 포함되어 있는지 확인하고, 
이메일을 이용해서 사용자를 조회해봅니다. 
그리고 사용자가 존재하지 않으면 기본 값과 함께 사용자 정보를 자동으로 생성하는 간단한 함수입니다.
*/
// ✅ Google 인증 처리 함수
const googleVerify = async (profile) => {
  const googleId = String(profile.id); // ✅ 타입 안전하게 문자열로 변환
  const email = profile.emails?.[0]?.value || `google_${googleId}@noemail.com`;
  const name = profile.displayName || "구글 유저";

  // 1. googleId로 먼저 조회
  let user = await prisma.user.findUnique({ where: { googleId } });

  // 2. 없으면 생성
  if (!user) {
    user = await prisma.user.create({
      data: {
        googleId,
        email,
        name,
        gender: "추후 수정",
        birth: new Date(1970, 0, 1),
        address: "추후 수정",
        detailAddress: "추후 수정",
        phoneNumber: "추후 수정",
      },
    });
  }

  return { id: user.id, email: user.email, name: user.name };
};

// ✅ Kakao 전략
export const kakaoStrategy = new KakaoStrategy(
  {
    clientID: process.env.PASSPORT_KAKAO_CLIENT_ID,
    callbackURL: process.env.PASSPORT_KAKAO_CALLBACK_URL,
  },
  async (accessToken, refreshToken, profile, done) => {
    try {
      const user = await kakaoVerify(profile);
      return done(null, user);
    } catch (err) {
      return done(err);
    }
  }
);

// Kakao 로그인 성공 시 호출되는 로직
async function kakaoVerify(profile) {
  const kakaoId = String(profile.id);
  const email =
    profile._json?.kakao_account?.email || `kakao_${kakaoId}@noemail.com`;
  const name = profile._json?.kakao_account?.profile?.nickname || "카카오 유저";

  // 1. kakaoId 기준으로 조회
  let user = await prisma.user.findUnique({ where: { kakaoId } });

  // 2. 없으면 email로 중복 유저 확인
  if (!user) {
    user = await prisma.user.findUnique({ where: { email } });

    // 2-1. 이메일도 없으면 신규 생성
    if (!user) {
      user = await prisma.user.create({
        data: {
          kakaoId,
          email,
          name,
          gender: "추후 수정",
          birth: new Date(1970, 0, 1),
          address: "추후 수정",
          detailAddress: "추후 수정",
          phoneNumber: "추후 수정",
        },
      });
    } else {
      // 2-2. 이메일은 있는데 kakaoId는 없는 경우 → kakaoId만 업데이트
      user = await prisma.user.update({
        where: { email },
        data: { kakaoId },
      });
    }
  }

  return { id: user.id, email: user.email, name: user.name };
}
