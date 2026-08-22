import express from "express";
import mongoose from "mongoose"
import dotenv, { config } from "dotenv"
dotenv.config()
import User from "./models/user.model.js";
import userRouter from "./Router/user.router.js";


const app = express();
const port = process.env.PORT;


import connectDb from "./config/db.js";

app.use(express.json())
app.use("/" , userRouter)


app.listen(port, ()=>{
    connectDb()
    console.log("server is started")
})