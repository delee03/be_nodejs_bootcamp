import express from "express";
import videoRouter from "./videoRouter.js";
import authRouter from "./authRouter.js";
import roleRouter from "./roleRouter.js";
import permissionRouter from "./permissionRouter.js";
import swaggerUi from "swagger-ui-express";
import swaggerDocument from "../common/swagger/document.swagger.js";
import root from "../common/graphql/root.graphql.js";
import userRouter from "./userRouter.js";

const rootRouter = express.Router();

rootRouter.use("/api-docs", swaggerUi.serve);
rootRouter.get("/api-docs", swaggerUi.setup(swaggerDocument));

//middleware =>
//xử lí cả dữ liệu trước khi gửi đến và gửi về

rootRouter.get(
    "/",
    (req, res, next) => {
        let { email, password } = req.body;
        email = "123@gmail.com ";

        next("Phát dẹp zai");
    },
    (req, res, next) => {
        console.log(2);
        req.body += "456";
        console.log(req.body);
        next();
    },
    (req, res, next) => {
        console.log(3);
    },
    (loiNe, request, response, next) => {
        console.log(loiNe);
        response.json("OKE");
    }
);

rootRouter.use("/video", videoRouter);

rootRouter.use("/auth", authRouter);

rootRouter.use("/role", roleRouter);

rootRouter.use("/user", userRouter);

rootRouter.use("/permission", permissionRouter);

export default rootRouter;
