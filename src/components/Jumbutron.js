import React from 'react'
import { useContext } from "react"
import NavigationBar from "./NavigationBar";
import { ImageContext } from "../container/Home"

const Jumbutron = ({ children }) => {
  const { response  } = useContext(ImageContext);
  return (
    // <div className="bg-amber-50 flex items-center py-10">

      <>
        {(typeof response !== 'undefined' && response.length > 0) ? (
          // <div class="py-2"></div>
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
          {/* <div className="py-2 px-6"> */}
        {/* <div className='max-w-md md:max-w-md mx-auto w-full'> */}

            <NavigationBar>
              { children }
            </NavigationBar>
          {/* </div> */}
          </div>
        ) : (
          <>
        <div className="flex md:flex items-center py-10 px-6">
        <div className='max-w-md md:max-w-md mx-auto w-full'>
          <span class="box-decoration-clone text-white text-3xl bg-gradient-to-r from-indigo-600 to-pink-500 leading-[3.5rem] px-2 mb-10">
          <a href='https://dokuso.app/'>Dokusō</a>
          </span>
        {/* <h1 class="text-gray text-left text-2xl font-bold mb-3 py-0">
          About
          </h1> */}
        <p className='text-gray text-left text-1xl  mb-5 py-2'>
          {/* Do you love fashion? Discover amazing outfits with Dokusō, 
          a new AI-driven experience to creatively shop for clothes. */}
          Looking for the perfect fashion items from top brands in the industry? Look no further than Dokuso. Our search engine, powered by OpenAI's CLIP, allows you to find exactly what you're looking for with just a few clicks. Simply enter a description of what you're looking for and let our AI do the rest. CLIP's advanced image recognition technology makes it easy to find the perfect fashion items, without the hassle of sifting through pages of search results. Start shopping now and see the power of our AI in action!
        </p>
        <p className='text-gray text-left text-1xl  mb-5'>
          We want to give you the most natural and intuitive shopping experience so that you can find great outfits in your favorite styles.
        </p>
        {/* <p className='text-gray text-left text-2xl  mb-5'>
          Dō ki uses OpenAi's CLIP pretrained model, which is built on a large body of work on zero-shot transfer, natural language supervision, and multimodal learning.
          </p> */}
        {/* <p className='text-gray text-left text-2xl  mb-5'>
          Images are sourced from Zara, Mango, H&M and Urban Outfitters latest collections</p> */}
        <p className='text-gray text-left text-1xl  mb-8'>
          Created by <a class="footer" href="https://ar.linkedin.com/in/julianlopezba">Julian Lopez Baasch</a>
          </p>
        {/* <h1 class="text-gray text-left text-3xl font-bold mb-3 py-0">
            Suggestions
        </h1>
        <p className='text-gray font-bold text-left text-1xl  mb-5'>
            "Wes Anderson movie", "Merlina", "Men's shirt with floral patterns",
            "What to wear at a beach wedding"
          </p> */}
      
          {children}
          </div>
          </div>
          </>)}
          
     </>
  )
}

export default Jumbutron