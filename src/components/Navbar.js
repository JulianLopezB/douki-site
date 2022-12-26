import {React} from 'react';


const Navbar = ({ children }) => {

    return (
      <nav class="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-100">
      <div class="container flex flex-wrap items-center justify-between mx-auto">
        <a href="#top" class="flex items-center">
            {/* <img src="https://flowbite.com/docs/images/logo.svg" class="h-6 mr-3 sm:h-9" alt="Flowbite Logo" />
            <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span> */}
            <span class="box-decoration-clone text-white text-2xl bg-gradient-to-r from-indigo-600 to-pink-500 leading-[3.5rem] px-2 mb-2">
              <a href='https://dokuso.app/'>Dokusō</a>
            </span>
        </a>
        <div class="mt-2 lg:mr-10 md:mr-10 sm:mr-5 w-96 hidden w-full l md:block md:w-auto"> { children } </div>
        <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
          <span class="sr-only">Open main menu</span>
          <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
        </button>
        <div class="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul class="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-100 dark:border-gray-700">
            <li>
              <a href="#top" class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white" aria-current="page">Home</a>
            </li>
            <li>
              <a href="#top" class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About</a>
            </li>
            <li>
              <a href="#top" class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Partners</a>
            </li>
            {/* <li>
              <a href="#top" class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Pricing</a>
            </li> */}
            <li>
              <a href="#top" class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="mt-2 lg:mr-10 md:mr-10 sm:mr-5 w-96 sm:hidden"> { children } </div>

    </nav>
//   <nav class="
//   relative
//   w-full
//   flex flex-wrap
//   items-center
//   justify-between
//   py-4
//   bg-gray-100
//   text-gray-500
//   hover:text-gray-700
//   focus:text-gray-700
//   shadow-lg
//   navbar navbar-expand-lg navbar-light
//   ">
//   <div class="container-fluid w-full flex flex-wrap items-center justify-between px-6">
//   {/* <button class="
//       navbar-toggler
//       text-gray-500
//       border-0
//       hover:shadow-none hover:no-underline
//       py-2
//       px-2.5
//       bg-transparent
//       focus:outline-none focus:ring-0 focus:shadow-none focus:no-underline
//     " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
//   aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//   <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bars"
//     class="w-6" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
//     <path fill="currentColor"
//       d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z">
//     </path>
//   </svg>
//   </button> */}
//   <div class="collapse navbar-collapse flex-grow items-center" id="navbarSupportedContent">
//   <a class="
//         flex
//         items-center
//         text-gray-900
//         hover:text-gray-900
//         focus:text-gray-900
//         mt-2
//         lg:mt-0
//         mr-1
//       " href="#top">
//         <span class="box-decoration-clone text-white text-2xl bg-gradient-to-r from-indigo-600 to-pink-500 leading-[3.5rem] px-2 mb-2">
//         <a href='https://dokuso.app/'>Dokusō</a>
//         </span>
//     {/* <img src="https://mdbootstrap.com/img/logo/mdb-transaprent-noshadows.png" style={{'height': '15px'}} alt=""
//       loading="lazy" /> */}
//   <div class="flex ...">
//   <div class="flex-1 ...">01</div>
//   <div class="contents">
//     <div class="flex-1 ...">02</div>
//     <div class="flex-1 ...">03</div>
//   </div>
//   <div class="flex-1 ...">04</div>
// </div>
//   {/* <ul class="navbar-nav flex flex-col pl-0 list-style-none mr-auto">
//     <li class="nav-item p-2">
//       <a class="nav-link text-gray-500 hover:text-gray-700 focus:text-gray-700 p-0" href="#top">About</a>
//     </li>
//     <li class="nav-item p-2">
//       <a class="nav-link text-gray-500 hover:text-gray-700 focus:text-gray-700 p-0" href="#top">Team</a>
//     </li>
//     <li class="nav-item p-2">
//       <a class="nav-link text-gray-500 hover:text-gray-700 focus:text-gray-700 p-0" href="#top">Brands</a>
//     </li>
//   </ul>  */}
//   </a>

//   </div>
//   <div class="mt-2 lg:mr-10 md:mr-10 sm:mr-5 w-96"> { children } </div>
  
//   <div class="flex items-center relative">
//   {/* <a class="text-gray-500 hover:text-gray-700 focus:text-gray-700 mr-4" href="#top">
//     <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="shopping-cart"
//       class="w-4" role="img" xmlns="http://www.w3.org/2000/svg"
//       viewBox="0 0 576 512">
//       <path fill="currentColor"
//         d="M528.12 301.319l47.273-208C578.806 78.301 567.391 64 551.99 64H159.208l-9.166-44.81C147.758 8.021 137.93 0 126.529 0H24C10.745 0 0 10.745 0 24v16c0 13.255 10.745 24 24 24h69.883l70.248 343.435C147.325 417.1 136 435.222 136 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-15.674-6.447-29.835-16.824-40h209.647C430.447 426.165 424 440.326 424 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-22.172-12.888-41.332-31.579-50.405l5.517-24.276c3.413-15.018-8.002-29.319-23.403-29.319H218.117l-6.545-32h293.145c11.206 0 20.92-7.754 23.403-18.681z">
//       </path>
//     </svg>
//   </a> */}
//   <div class="dropdown relative">
//     {/* <a class="
//           text-gray-500
//           hover:text-gray-700
//           focus:text-gray-700
//           mr-4
//           dropdown-toggle
//           hidden-arrow
//           flex items-center
//         " href="#top" id="dropdownMenuButton1" role="button" data-bs-toggle="dropdown" aria-expanded="false">
//       <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bell"
//         class="w-4" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
//         <path fill="currentColor"
//           d="M224 512c35.32 0 63.97-28.65 63.97-64H160.03c0 35.35 28.65 64 63.97 64zm215.39-149.71c-19.32-20.76-55.47-51.99-55.47-154.29 0-77.7-54.48-139.9-127.94-155.16V32c0-17.67-14.32-32-31.98-32s-31.98 14.33-31.98 32v20.84C118.56 68.1 64.08 130.3 64.08 208c0 102.3-36.15 133.53-55.47 154.29-6 6.45-8.66 14.16-8.61 21.71.11 16.4 12.98 32 32.1 32h383.8c19.12 0 32-15.6 32.1-32 .05-7.55-2.61-15.27-8.61-21.71z">
//         </path>
//       </svg>
//       <span class="text-white bg-red-700 absolute rounded-full text-xs -mt-2.5 ml-2 py-0 px-1.5">1</span>
//     </a> */}
//     {/* <ul class="
//       dropdown-menu
//       min-w-max
//       absolute
//       hidden
//       bg-white
//       text-base
//       z-50
//       float-left
//       py-2
//       list-none
//       text-left
//       rounded-lg
//       shadow-lg
//       mt-1
//       hidden
//       m-0
//       bg-clip-padding
//       border-none
//       left-auto
//       right-0
//     " aria-labelledby="dropdownMenuButton1">
//       <li>
//         <a class="
//           dropdown-item
//           text-sm
//           py-2
//           px-4
//           font-normal
//           block
//           w-full
//           whitespace-nowrap
//           bg-transparent
//           text-gray-700
//           hover:bg-gray-100
//         " href="#top">Action</a>
//       </li>
//       <li>
//         <a class="
//           dropdown-item
//           text-sm
//           py-2
//           px-4
//           font-normal
//           block
//           w-full
//           whitespace-nowrap
//           bg-transparent
//           text-gray-700
//           hover:bg-gray-100
//         " href="#top">Another action</a>
//       </li>
//       <li>
//         <a class="
//           dropdown-item
//           text-sm
//           py-2
//           px-4
//           font-normal
//           block
//           w-full
//           whitespace-nowrap
//           bg-transparent
//           text-gray-700
//           hover:bg-gray-100
//         " href="#top">Something else here</a>
//       </li>
//     </ul>
//   </div>
//   <div class="dropdown relative">
//     <a class="dropdown-toggle flex items-center hidden-arrow" href="#top" id="dropdownMenuButton2" role="button"
//       data-bs-toggle="dropdown" aria-expanded="false">
//       <img src="https://mdbootstrap.com/img/new/avatars/2.jpg" class="rounded-full"
//         style={{"height": '25px', "width": '25px'}} alt="" loading="lazy" />
//     </a>
//     <ul class="
//     dropdown-menu
//     min-w-max
//     absolute
//     hidden
//     bg-white
//     text-base
//     z-50
//     float-left
//     py-2
//     list-none
//     text-left
//     rounded-lg
//     shadow-lg
//     mt-1
//     hidden
//     m-0
//     bg-clip-padding
//     border-none
//     left-auto
//     right-0
//   " aria-labelledby="dropdownMenuButton2">
//       <li>
//         <a class="
//         dropdown-item
//         text-sm
//         py-2
//         px-4
//         font-normal
//         block
//         w-full
//         whitespace-nowrap
//         bg-transparent
//         text-gray-700
//         hover:bg-gray-100
//       " href="#top">Action</a>
//       </li>
//       <li>
//         <a class="
//         dropdown-item
//         text-sm
//         py-2
//         px-4
//         font-normal
//         block
//         w-full
//         whitespace-nowrap
//         bg-transparent
//         text-gray-700
//         hover:bg-gray-100
//       " href="#top">Another action</a>
//       </li>
//       <li>
//         <a class="
//         dropdown-item
//         text-sm
//         py-2
//         px-4
//         font-normal
//         block
//         w-full
//         whitespace-nowrap
//         bg-transparent
//         text-gray-700
//         hover:bg-gray-100
//       " href="#top">Something else here</a>
//       </li>
//     </ul> */}
//   </div>
//   </div>
//   </div>
// </nav>
    );
};

export default Navbar;