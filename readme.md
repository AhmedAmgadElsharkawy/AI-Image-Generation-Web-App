# Recipe-Web-App

A full-stack web application that allows users to browse, create, and save recipes. Built using the MERN stack (MongoDB, Express, React, Node.js), with JWT authentication and Axios for API requests.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Contact](#contact)

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/AhmedAmgadElsharkawy/AI-Image-Generation-Web-App.git
   ``````
2. **Navigate into the project directory:**  

    ```bash
    cd AI-Image-Generation-Web-App
2. **Install dependencies:**  

    for the client:  

    ```bash
    cd client
    npm install
    ``````

    for the server: 

    ```bash
    cd server
    npm install
    ``````

3. **Set up environment variables:**

    Create a `.env` file in the root directory of the server and add the required environment variables:
    - MONGODB_URL
    - OPENAI_API_KEY
    - CLOUDINARY_CLOUD_NAME
    - CLOUDINARY_API_KEY
    - CLOUDINARY_API_SECRET

## Usage

1. **Run the server:**  

    By default, the API server runs on port 3000. You can start it with:

    ```bash
    cd server
    npm run start
    ``````

2. **Run the client:**  

    By default, the Vite development server runs on port 5173. You can start it with:

    ```bash
    cd client
    npm run dev
    ``````

3. **Access the application:**
    Open your browser and navigate to http://localhost:5173 to view the application.

## Features

- Generate AI-created images from custom prompts using the OpenAI API.
- Share your favorite images with the community.
- Browse posts shared by the community.
- Download and save images to your device.

## Contact

If you have any questions, feel free to reach out:

- Name: Ahmed Amgad Elsharkawy
- Email: ahmed.elsharkawy03@eng-st.cu.edu.eg
