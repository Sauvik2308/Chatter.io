import express from "express";
import { createServer } from "node:http";

import { Server } from "socket.io";

import mongoose from "mongoose";

import cors from "cors";

import connectToSocket from "./controllers/socketManager.js";

const app = express();
const server = createServer(app);
const io = connectToSocket(server);

app.set("port", (process.env.PORT || 8000))
app.use(cors());
app.use(express.json({limit: "40kb"}));
app.use(express.urlencoded({ limit: "40kb", extended: true }));


// app.get("/", (req, res) => {
//     return res.json({"hello": "hello world"})
// });

const start = async () => {
    const connectionDb = await mongoose.connect("mongodb+srv://sauvikvideoapp:sauvik616@cluster0.yqdjhn4.mongodb.net/");

    console.log(`MongoDB connected to DB Host: ${connectionDb.connection.host}`);

    server.listen(app.get("port"), () => {
        console.log("Listening on Port 8000");
    })


}

start();