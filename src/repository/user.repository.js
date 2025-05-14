import { pool } from "../db.config.js";
import { prisma } from "../db.config.js";

// User 데이터 삽입(ORM(prisma) 적용)
export const addUser = async (data) => {
  //findFirst : 테이블에서 하나의 데이터를 찾는 메소드
  //findFirst 인자 => {where : {키: 값}}
  //=> where절에 들어가는 조건문을 객체의 형태로 표현
  const user = await prisma.user.findFirst({ where: { email: data.email } });
  if (user) {
    return null;
  }

  //create : 데이터를 생성
  //create 인자 : 데이터를 객체의 형태로 표현
  const created = await prisma.user.create({ data: data });
  return created.id;
};

/**
// User 데이터 삽입(ORM 적용 전)
export const addUser = async (data) => {
  const conn = await pool.getConnection();

  try {
    const [confirm] = await pool.query(
      `SELECT EXISTS(SELECT 1 FROM user WHERE email = ?) as isExistEmail;`,
      data.email
    );

    if (confirm[0].isExistEmail) {
      return null;
    }

    const [result] = await pool.query(
      `INSERT INTO user (email, name, gender, birth, address, detail_address,phone_number)
            VALUES (?, ?, ?, ?, ?, ?, ?);`,
      [
        data.email,
        data.name,
        data.gender,
        data.birth,
        data.address,
        data.detailAddress,
        data.phoneNumber,
      ]
    );

    return result.insertId;
  } catch (err) {
    throw new Error(
      `오류가 발생했어요. 요청 파라미터를 확인해주세요. (${err})`
    );
  } finally {
    conn.release();
  }
};
 */

// 사용자 정보 얻기
export const getUser = async (userId) => {
  //findFirstOrThrow: 조건에 맞는 첫 데이터가 없으면 오류 발생 (예외처리 유용)
  const user = await prisma.user.findFirstOrThrow({ where: { id: userId } });
  return user;
};

/**
export const getUser = async (userId) => {
  const conn = await pool.getConnection();

  try {
    const [user] = await pool.query(`SELECT * FROM user WHERE id = ?;`, userId);

    console.log(user);

    if (user.length == 0) {
      return null;
    }

    return user;
  } catch (err) {
    throw new Error(
      `오류가 발생했어요. 요청 파라미터를 확인해주세요. (${err})`
    );
  } finally {
    conn.release();
  }
};
 */

// 음식 선호 카테고리 매핑
export const setPreference = async (userId, foodCategoryId) => {
  //유저 ID와 음식 카테고리 ID를 받아서 선호도 테이블에 삽입
  await prisma.userFavorCategory.create({
    data: {
      //data는 Prisma에서 삽입할 값을 담은 객체
      userId: userId,
      foodCategoryId: foodCategoryId,
    },
  });
};
/**
// 음식 선호 카테고리 매핑
export const setPreference = async (userId, foodCategoryId) => {
  const conn = await pool.getConnection();

  try {
    await pool.query(
      `INSERT INTO user_favor_category (food_category_id, user_id) VALUES (?, ?);`,
      [foodCategoryId, userId]
    );

    return;
  } catch (err) {
    throw new Error(
      `오류가 발생했어요. 요청 파라미터를 꼭 확인해주세요. (${err})`
    );
  } finally {
    conn.release();
  }
};
 */

//사용자 선호 카테고리 반환
export const getUserPreferencesByUserId = async (userId) => {
  //특정 유저가 등록한 선호 카테고리 목록을 불러오는 함수
  const preferences = await prisma.userFavorCategory.findMany({
    //findMany: 여러 데이터를 배열로 조회
    //어떤 필드를 가져올지 명시 (select를 안 쓰면 전체 필드를 가져옴)
    //foodCategory: true는 연결된 FoodCategory 모델의 정보도 포함시킴
    select: {
      id: true,
      userId: true, //userId가 일치하는 레코드만 조회
      foodCategoryId: true,
      foodCategory: true,
    },
    where: { userId: userId },
    orderBy: { foodCategoryId: "asc" }, //음식 카테고리 ID 기준으로 오름차순 정렬
  });

  return preferences; //조회된 선호 카테고리 배열을 반환
};

/**
//사용자 선호 카테고리 반환
export const getUserPreferencesByUserId = async (userId) => {
  const conn = await pool.getConnection();

  try {
    const [preferences] = await pool.query(
      "SELECT ufc.id, ufc.food_category_id, ufc.user_id, fcl.name " +
        "FROM user_favor_category ufc JOIN food_category fcl on ufc.food_category_id = fcl.id " +
        "WHERE ufc.user_id = ? ORDER BY ufc.food_category_id ASC;",
      userId
    );

    return preferences;
  } catch (err) {
    throw new Error(
      `오류가 발생했어요. 요청 파라미터를 확인해주세요. (${err})`
    );
  } finally {
    conn.release();
  }
}; 
 */
