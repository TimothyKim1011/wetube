import express from "express";
import morgan from "morgan";
import global from "./routers/globalRouter";
import user from "./routers/userRouter";
import video from "./routers/videoRouter";

const PORT = 4000;

const app = express();
const logger = morgan("dev");
app.use(logger);
app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views");

// 누군가 app.use 링크에 접근한다면, 라우터로 안내되어지고, 링크를 get하게 된다.
// .use는 중간경로, .get은 최종경로
app.use("/", global);
app.use("/users", user);
app.use("/videos", video);

const handleListening = () =>
  console.log(`Server listening on port http://localhost:${PORT}🚀`);

app.listen(PORT, handleListening);
