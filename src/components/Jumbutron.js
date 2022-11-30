import React from 'react'

const Jumbutron = ({ children }) => {
  return (
    // <div className="bg-amber-50 flex items-center py-10">
    <div className="flex md:flex items-center py-10 px-6">
      <div className='max-w-md md:max-w-md mx-auto w-full'>
        <span class="box-decoration-clone text-white text-3xl bg-gradient-to-r from-indigo-600 to-pink-500 leading-[3.5rem] px-2 mb-5">
        Dō ki
        </span>
        {/* <h1 className='text-gray text-center text-3xl font-bold mb-5'>Fashionist.ai</h1> */}
        <p className='text-gray text-left text-2xl  mb-5'>
          Do you love fashion? Discover amazing outfits with Dō ki, 
          a new AI-driven experience to creatively shop for clothes.
        </p>
        <p className='text-gray text-left text-1xl  mb-8'>Devloped by <a class="footer" href="https://ar.linkedin.com/in/julianlopezba">Julian Lopez Baasch</a></p>
        {children}
      </div>
    </div>
  )
}

export default Jumbutron