import express from "express";
import morgan from "morgan";
import globalRouter from "./routers/globalRouter";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";

const PORT = 4000;

const app = express();
const logger = morgan("dev");

app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views");
app.use(logger);
app.use(express.urlencoded({ extended: true })); // translate se6 -> javascript object that we can use.

// 누군가 app.use 링크에 접근한다면, 라우터로 안내되어지고, 링크를 get하게 된다.
// .use는 중간경로, .get은 최종경로
app.use("/", globalRouter);
app.use("/videos", videoRouter);
app.use("/users", userRouter);

const handleListening = () =>
  console.log(`Server listening on port http://localhost:${PORT}🚀`);

app.listen(PORT, handleListening);
