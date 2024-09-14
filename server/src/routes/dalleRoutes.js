import express from "express"
import env from "dotenv"
import axios from "axios"
env.config()

const dalleRoutes = express.Router();

const headers = {
    'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,  // <-- API Key is included here
    'Content-Type': 'application/json',
};



dalleRoutes.get("/", async (req, res) => {
    const { prompt } = req.body;
    try {
        const response = await axios.post("https://api.openai.com/v1/images/generations",
            {
                prompt: "A cute baby sea otter",
                n: 1,
                size: "1024x1024",
                response_format:"b64_json"
            }, headers)

            const image = response.data.data[0].b64_json
            res.status(200).send({photo:image})
    } catch (error) {
        console.error(error)
    }
})

export default dalleRoutes