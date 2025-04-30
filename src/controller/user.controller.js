import { StatusCodes } from "http-status-codes";
import { bodyToUser } from "../dto/user.dto.js";
import { userSignUp } from "../service/user.service.js";

export const handleUserSignUp = async (req, res, next) => {
  console.log("회원가입을 요청했습니다!");
  console.log("body: ", req.body);

  try {
    const user = await userSignUp(bodyToUser(req.body));
    res.status(StatusCodes.OK).json({ result: user }); // 상수 이름은 OK
  } catch (err) {
    console.error("회원가입 중 오류:", err.message);
    res.status(StatusCodes.BAD_REQUEST).json({
      message: err.message || "회원가입 중 문제가 발생했습니다.",
    });
  }
};
