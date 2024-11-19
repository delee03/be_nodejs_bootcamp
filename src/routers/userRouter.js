import express from "express";
import { userController } from "../controllers/user.controller.js";
import upload from "../common/multer/handle-upload-local.multer.js";
import fs from "fs";
const userRouter = express.Router();
fs.mkdirSync("images", { recursive: true });

// Tạo route CRUD
userRouter.post("/", userController.create);
userRouter.get("/", userController.findAll);
userRouter.get("/:id", userController.findOne);
userRouter.patch("/:id", userController.update);
userRouter.delete("/:id", userController.remove);
userRouter.post(
    "/upload-avatar-local",
    upload.single("avatar"),
    userController.uploadAvatar
);
userRouter.post(
    "/upload-avatar-cloud",
    upload.single("avatar"),
    userController.uploadAvatar
);

export default userRouter;
