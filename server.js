import express from "express";
import cors from "cors";
import rootRouter from "./src/routers/rootRouter.js";
import { handleErrorResponse } from "./src/helper/handleResponse.js";
import { errorHandler } from "./src/helper/handleError.js";

const app = express();
app.use(express.json());
const PORT = 3069;

console.log(123);
app.use(
    cors({
        origin: ["http://localhost:5173", "https://domain.com", "google.com"],
    })
);
//

app.use(rootRouter);

app.use(errorHandler);

//sử dụng prisma orm => db first
// b1: npx prisma init -> tạo 1 folder prisma - schema

//b2: npx prisma db pull => kéo các table từ tableplus về schema.prisma => model

//b3: npx prisma generate => minh họa bằng các cái object => class từ model giúp mình có thể gọi và sử dụng

//tách model sequelize done
// xử lí throw bắt lỗi =>...
//middle ware của expess js
// prisma => mapping db first
//phân trang = pagination
//authentication => register, login, logout

app.listen(PORT, () => {
    console.log("Dự án đang chạy trên port 3069");
});
