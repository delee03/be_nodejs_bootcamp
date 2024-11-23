import prisma from "../common/prisma/prisma.init.js";
import { BadRequestError } from "../helper/handleError.js";

export const userService = {
    create: async function (req) {
        return `This action creates a user`;
    },

    findAll: async function (req) {
        return `This action returns all user`;
    },

    findOne: async function (req) {
        return `This action returns a user with id: ${req.params.id}`;
    },

    update: async function (req) {
        return `This action updates a user with id: ${req.params.id}`;
    },

    remove: async function (req) {
        return `This action removes a user with id: ${req.params.id}`;
    },
    uploadAvatar: async (req) => {
        const file = req.file;
        if(!file){
            throw new BadRequestError("Không có file nào được upload");
        }
        const userId = req.user.user_id;
         const isImgLocal =  req.user?.avatar.includes("local");
         if(isImgLocal){
            await prisma.users.update({
                where: {
                    user_id: userId,
                },
                data : {
                    avatar: file.filename,
                }
            })
            console.log(file)
            return {
                folder: "images/",
                filename: file.filename,
                imgUrl: `images${file.path}`,
            }
         }
         else {
            await prisma.users.update({
                where: {
                    user_id: userId,
                },
                data: {
                    avatar: file.path,
                }

            })
            console.log(file)
            return {
                folder: "images",
                filename: file.filename,
                imgUrl: file.path,
            }
         }

       
       
    },
};
