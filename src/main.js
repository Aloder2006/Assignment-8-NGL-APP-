import 'dotenv/config';;

import "./common/db/mongoose.js";
import express from "express";
import authRouter from "./app/auth/auth.route.js";
import userRouter from "./app/user/user.route.js";
import messageRouter from "./app/message/message.route.js";

const app = express();

app.use(express.json());

// Router for features
app.use('/auth', authRouter);
app.use('/user', userRouter);
app.use('/message', messageRouter);

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
