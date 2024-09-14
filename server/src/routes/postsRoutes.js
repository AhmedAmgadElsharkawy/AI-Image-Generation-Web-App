import express from "express"
import { v2 as cloudinary } from 'cloudinary';
import env from "dotenv"
import postModel from "../models/post";

env.config()
const postsRoutes = express.Router();

cloudinary.config({ 
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
    api_key: process.env.CLOUDINARY_API_KEY, 
    api_secret: process.env.CLOUDINARY_API_SECRET // Click 'View API Keys' above to copy your API secret
});

postsRoutes.post("/",async(req,res)=>{
    try {
        const {name,prompt,photo} = req.body
        const uploadResult = await cloudinary.uploader.upload(photo).catch((error) => {console.log(error);});
        const newPost = await postModel.create({
            name,prompt,photo:uploadResult.url
        })
        res.status(201).send({success:true,data:newPost})
    } catch (error) {
        res.status(500).json({success:false,message:error})
    }

})

postsRoutes.get("/",(req,res)=>{
    try {
        const posts = postModel.find({})
        res.status(500).send({success:true,data:posts})
    } catch (error) {
        res.status(500).send({success:false,message:error})
    }
})

export default postsRoutes