import prisma from "../common/prisma/prisma.init.js";
import { BadRequestError } from "../helper/handleError.js";
import brcypt from "bcrypt";
import jwt from "jsonwebtoken";
import tokenService from "./token.service.js";

const authService = {
    register: async function (req) {
        const { email, password, fullName } = req.body;
        if (!email || !password || !fullName) {
            throw BadRequestError("Dữ liệu truyền vào không hợp lệ");
        }
        //b2: so sánh dữ liệu gửi đến có trong db hay không

        // select * from user where email like email;
        const userExist = await prisma.users.findFirst({
            where: {
                email: email,
            },
        });
        if (userExist) {
            throw new Error("Đã tồn tại user này");
            //b3: chưa tồn tại => tạo mới user đó
        } else {
            const hashedPassword = await brcypt.hash(password, 10);
            const newUser = await prisma.users.create({
                data: {
                    email: email,
                    pass_word: hashedPassword,
                    full_name: fullName,
                },
            });
            return newUser;
        }
    },
    login: async (req) => {
        //b1: nhận dữ liệu từ FE (body gửi lên);
        let { email, password } = req.body;
        console.log(email, password);

        // b2: kiểm tra email có trong hệ thống hay không? 2 TH
        const userExist = await prisma.users.findFirst({
            where: {
                email: email,
            },
            select: {
                pass_word: true,
                email: true,
                user_id: true,
            },
        });
        //kĩ thuật ngắt dòng
        if (!userExist) {
            throw new BadRequestError(
                "Không tìm thấy tài khoản, vui lòng đăng kí nhé!"
            );
        }
        //bước 3 kiểm tra password;
        const isValidPassword = brcypt.compareSync(
            password,
            userExist.pass_word
        );
        if (!isValidPassword) {
            throw new BadRequestError("Sai mật khẩu rồi bạn eei!");
        }
        //bước 4: tạo token với jwt //accessToken và refreshToken
        const tokens = tokenService(userExist);
        return tokens;
    },
    facebookLogin: async (req) => {
        //payload từ request của token Facebook được FE gửi lên
        const { name, email, id, picture } = req.body;
        console.log({ name, email, id, picture });
        const userExist = await prisma.users.findFirst({
            where: {
                email: email,
            },
            select: {
                email: true,
                user_id: true,
                full_name: true,
                avatar: true,
            },
        });
        if (userExist) {
            await prisma.users.update({
                where: {
                    user_id: userExist.user_id,
                },
                data: {
                    full_name: userExist.full_name ? undefined : name,
                    avatar: userExist.avatar ? undefined : picture.data.url,
                    face_app_id: userExist.face_app_id ? undefined : id,
                },
            });
            const tokens = tokenService(userExist);

            return tokens;
        } else {
            //tạo mới user đó
            const userExist = await prisma.users.create({
                data: {
                    email: email,
                    full_name: name,
                    pass_word: null,
                    face_app_id: id,
                    avatar: picture.data.url,
                },
            });

            const tokens = tokenService(userExist);
            return tokens;
        }
    },
    refreshToken: async (req) => {
        return "refreshToken thành công";
    },
};

export default authService;
