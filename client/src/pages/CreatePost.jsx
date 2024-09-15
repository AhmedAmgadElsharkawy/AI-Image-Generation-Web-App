import React from 'react'
import { useNavigate } from "react-router-dom"
import { useState } from 'react';

import { preview } from "../assets"
import { getRandomPrompt } from '../utils';
import { Loader, FormField } from '../components';
import axios from "axios"

export const CreatePost = () => {
    const navigate = useNavigate();
    const [form, setForm] = useState({
        name: '', prompt: '', photo: ''
    })
    const [generatingImg, setGeneratingImg] = useState(false);
    const [loading, setLoadinng] = useState(false);

    const generateImg = async () => {
        if (form.prompt) {
            try {
                setGeneratingImg(true)
                const data = await axios.post("http://localhost:3000/api/v1/dalle", { prompt: form.prompt })
                setForm({ ...form, photo: `data:image/jpeg;base64,${data.photo}` })
            } catch (error) {
                alert(error)
            }
            setGeneratingImg(false)
        }
        else { alert("please enter a prompt!") }
    }

    const handleSubmit = async(event) => {
        event.preventDefault();
        if (form.prompt && form.photo) {
            setLoadinng(true);
            try {
                await axios.post("http://localhost:3000/api/v1/posts",form)
                navigate("/")
            } catch (error) {
                alert(error)
            }
            setLoadinng(false);
        }
        else{
            alert("please enter a prompt and generate an image")
        }
    }

    const handleChange = (e) => {
        const key = e.target.name;
        const value = e.target.value;
        setForm({ ...form, [key]: value })
    }
    const handleSupriseMe = () => {
        const randomPrompt = getRandomPrompt(form.prompt)
        console.log(randomPrompt)
        setForm({ ...form, prompt: randomPrompt })
    }


    return (
        <section className='max-w-7xl mx-auto'>
            <div>
                <h1 className="font-extrabold text-[#222328] text-[32px]">Create</h1>
                <p className="mt-2 text-[#666e75] text-[14px] max-w-[500px]">Create of imaginative and visually stunning images through DALL-E AI and share them with the community</p>
            </div>
            <form className='mt-16 max-w-3xl' onSubmit={handleSubmit}>
                <div className='flex flex-col gap-5'>
                    <FormField
                        labelName="your name"
                        type="text"
                        name="name"
                        placeholder="john doe"
                        value={form.name}
                        handleChange={handleChange}
                    ></FormField>

                    <FormField
                        labelName="your name"
                        type="text"
                        name="promt"
                        placeholder='an oil painting by Matisse of a humanoid robot playing chess'
                        value={form.prompt}
                        handleChange={handleChange}
                        isSupriseMe
                        handleSupriseMe={handleSupriseMe}
                    ></FormField>
                    <div className="relative bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-64 p-3 h-64 flex justify-center items-center">
                        {form.photo ? (
                            <img
                                src={form.photo}
                                alt={form.prompt}
                                className="w-full h-full object-contain"
                            />
                        ) : (
                            <img
                                src={preview}
                                alt="preview"
                                className="w-9/12 h-9/12 object-contain opacity-40"
                            />
                        )}

                        {generatingImg && (
                            <div className='absolute inset-0 z-0 flex justify-center items-center rounded-lg bg-[rgba(0,0,0,0.5)]'>
                                <Loader />
                            </div>
                        )}
                    </div>
                </div>
                <div className='mt-5 flex gap-5' >
                    <button
                        type='button'
                        onClick={generateImg}
                        className='text-white bg-green-700 font-medium rounded-md text-sm w-full sm:w-auto px-5 py-2.5 text-center'>
                        {generatingImg ? "Generating..." : "generate"}
                    </button>
                </div>

                <div className='mt-10'>
                    <p className='mt-2 text-[#666e75] text-[14px]'>
                        once you have generated an image, you can share it with the community.
                    </p>
                    <button
                        type='button'
                        className="mt-3 text-white bg-[#6469ff] font-medium rounded-md text-sm w-full sm:w-auto px-5 py-2.5 text-center"
                    >
                        {loading ? "Sharing..." : "Share with the community"}
                    </button>
                </div>
            </form>
        </section>
    )
}
