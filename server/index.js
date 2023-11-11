import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoute from "./routes/users.js";
import videoRoute from "./routes/videos.js";
import commentRoute from "./routes/comments.js";
import conversationRoute from "./routes/conversations.js"
import messageRoute from "./routes/messages.js"
import authRoute from "./routes/auth.js";
import cookieParser from "cookie-parser";
import cors from "cors";
const app = express();
dotenv.config();
const connect = () =>{
    mongoose.connect(process.env.MONGO).then(()=>{
        console.log("Connected to MongoDB");
    }).catch((err) =>{
        throw err;  
    });
};
app.use(cookieParser());
//allow json file in outside app.use(express.json())
app.use(express.json());
app.use(cors())
app.use("/api/auth",authRoute);
app.use("/api/users",userRoute);
app.use("/api/videos",videoRoute);
app.use("/api/comments",commentRoute);
app.use("/api/conversation",conversationRoute);
app.use("/api/message",messageRoute);
app.use( (err, req, res, next) => {
    const status = err.status || 500;
    const message = err.message || "Something went wrong, Please Check Again, Thank you.....!";
    return res.status(status).json({
        success: false,
        status,
        message,
    });
} )
app.listen(8800,()=>{
    connect();
    console.log("Connected..!");
})
