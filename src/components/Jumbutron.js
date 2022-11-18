import React from 'react'

const Jumbutron = ({ children }) => {
  return (
    <div className="bg-amber-50 flex items-center py-10">
      <div className='max-w-md mx-auto w-full'>
        <h1 className='text-gray text-center text-3xl font-bold mb-5'>Fashionist.ai</h1>
        <p className='text-gray text-left text-1xl  mb-1'>AI-driven experience to creatively shop for clothes by searching with natural language. 
        Images are sourced from Mango, Zara and H&M lastest collections. </p>
        <p className='text-gray text-left text-1xl  mb-3'>Devloped by <a class="footer" href="https://twitter.com/JulianLBaasch" target="_blank">Julian Lopez Baasch</a></p>
        {children}
      </div>
    </div>
  )
}

export default Jumbutron