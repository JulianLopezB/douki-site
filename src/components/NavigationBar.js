import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const NavigationBar = ({children}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="flex items-center justify-between flex-wrap bg-gray-100 p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <Link to="/">
          <span className="font-semibold text-xl text-gray-800 tracking-tight">Dokusō</span>
        </Link>
      </div>
      <div className="block lg:hidden">
        <button className="flex items-center px-3 py-2 border rounded text-gray-800 border-gray-400 hover:text-gray-800 hover:border-indigo-300" onClick={toggleMenu}>
          <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
        </button>
      </div>
      <div className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto ${isMenuOpen ? 'block' : 'hidden'}`}>
      {/* {children} */}
      <div className="text-sm lg:flex-grow">
<Link
        to="/manifesto"
        className="block mt-4 lg:inline-block lg:mt-0 text-gray-700 hover:text-indigo-600 mr-4"
    >
About
</Link>
<Link
         to="/Brands"
         className="block mt-4 lg:inline-block lg:mt-0 text-gray-700 hover:text-indigo-600 mr-4"
       >
Brands
</Link>
<Link
         to="/contact"
         className="block mt-4 lg:inline-block lg:mt-0 text-gray-700 hover:text-indigo-600 mr-4"
       >
Contact
</Link>
</div>
<div className="flex items-center px-5 lg:w-auto w-full lg:ml-auto ml-0 pl-4 lg:pl-0">
{children}
</div>
<div>
<Link to="/login" className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-gray-500 hover:bg-white mt-4 lg:mt-0 font-sans font-bold text-2xl text-white bg-purple-600 hover:bg-purple-500 rounded-full">Sign Up</Link>
</div>
</div>
    </nav>
  );
};

export default NavigationBar;