import React from 'react'
// import { useContext } from "react"
import Navbar from "../components/Navbar";

const Manifesto = () => {

    return (
<div 
style={{
'top': "0px",
'position': "sticky",
'width': "100%",
'lg-height': "96px",
// 'sm-height': "150px",
'z-index':'10'
}}
className="bg-gray-50"

>
    <Navbar />
    <div className="flex md:flex items-center py-10 px-6">
        <div className='max-w-md md:max-w-md mx-auto w-full'>
            {/* <h1 class="text-gray text-left text-2xl font-bold mb-3 py-0">
                About
            </h1>
            <p className='text-gray text-left text-1xl  mb-5'>
                Welcome to our ecommerce website!
            </p>
            <p className='text-gray text-left text-1xl  mb-5'>
                We are excited to offer a unique shopping experience powered by OpenAI's CLIP (Contrastive Language-Image Pre-training) embeddings. Our platform allows you to search for clothing items using text prompts, and our CLIP model will match the text descriptions to the visual features of the images to retrieve the most relevant product pages.
            </p>
            <p className='text-gray text-left text-1xl  mb-5'>
                This means you can easily find the perfect piece of clothing in your favorite style, without having to spend hours scrolling through pages of products.
            </p>
            <p className='text-gray text-left text-1xl  mb-5'>
                In addition to our innovative search functionality, we also offer a wide selection of stylish and unique clothing items from top brands. We are committed to providing our customers with the best shopping experience possible, and we hope you enjoy using our platform.
            </p>
            <p className='text-gray text-left text-1xl  mb-5'>
                Thank you for choosing to shop with us. We look forward to helping you find the perfect outfit!
            </p>

            <p className='text-gray text-left text-1xl  mb-5'>
                Images are sourced from Zara, Mango, H&M and Urban Outfitters latest collections
            </p>
                
            <p className='text-gray text-left text-1xl  mb-8'>
                Developed by <a class="footer" href="https://ar.linkedin.com/in/julianlopezba"> Julian Lopez Baasch
                </a>
            </p> */}



<h1 class="text-gray text-left text-2xl font-bold mb-3 py-0">
                Manifesto
            </h1>
            <p className='text-gray text-left text-1xl  mb-5'>
            At our Dokusō, we believe in the power of technology to enhance the shopping experience, but we also believe in the joy of using one's own creativity to shop for clothes. That's why we have implemented <a href="https://openai.com/blog/clip/" className="text-blue-700">OpenAI's CLIP</a> (Contrastive Language-Image Pre-training) embeddings to power our search functionality. 
            </p>
            <p className='text-gray text-left text-1xl  mb-5'>
            With CLIP, finding the perfect piece of clothing is as easy as entering a few keywords and letting your creativity guide you. Our platform matches the text descriptions to the visual features of the images to retrieve the most relevant product pages, so you can find what you're looking for with ease.
            </p>
            <p className='text-gray text-left text-1xl  mb-5'>
            But we don't just want to make it easy for you to find what you're looking for - we also want to offer a wide selection of stylish and unique clothing items from top brands. We are committed to providing our customers with the best shopping experience possible, and we believe that this means offering high-quality products as well as an innovative and user-friendly platform that allows you to shop creatively.
            </p>
            <p className='text-gray text-left text-1xl  mb-5'>
            We also believe in the importance of sustainability and ethical practices in the fashion industry. That's why we are committed to partnering with brands that prioritize sustainability and ethical production methods.
            </p>
            
            <p className='text-gray text-left text-1xl  mb-5'>
            Thank you for choosing to shop with us. We look forward to helping you find the perfect outfit!
            </p>

        </div>
    </div>
</div>

  )
}

export default Manifesto