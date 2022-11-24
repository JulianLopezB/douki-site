import React from 'react'

const Jumbutron = ({ children }) => {
  return (
    // <div className="bg-amber-50 flex items-center py-10">
    <div className="flex items-center py-10">
      <div className='max-w-md mx-auto w-full'>
        <span class="box-decoration-clone text-white text-2xl bg-gradient-to-r from-indigo-600 to-pink-500 leading-[3.5rem] px-2 mb-5">
          FASHIONIST.ai
        </span>
        {/* <h1 className='text-gray text-center text-3xl font-bold mb-5'>Fashionist.ai</h1> */}
        <p className='text-gray text-left text-2xl  mb-5'>
          Do you love fashion? Discover amazing outfits with Fashionist.ai, a new AI-driven experience to creatively shop for clothes.
        </p>
        <p className='text-gray text-left text-1xl  mb-8'>Devloped by <a class="footer" href="https://twitter.com/JulianLBaasch">Julian Lopez Baasch</a></p>
        {children}
      </div>
    </div>
  )
}

export default Jumbutron