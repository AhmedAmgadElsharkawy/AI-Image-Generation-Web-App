import express from "express"
import cors from 'cors';
import env from "dotenv"
import mongoose from "mongoose"
import dalleRoutes from "./routes/dalleRoutes.js"
import postsRoutes from "./routes/postsRoutes.js"

const app = express()
const port = 3000;

env.config()
mongoose.connect(process.env.MONGODB_URL);

app.use(cors());
app.use(express.json({limit: '50mb'}))
app.use("/api/v1/dalle",dalleRoutes);
app.use("/api/v1/posts",postsRoutes)

app.get("/",(req,res)=>{
    res.send("hello world!")
})


app.listen(port,()=>{
    console.log(`server started listenning at port: ${port}`);
})

