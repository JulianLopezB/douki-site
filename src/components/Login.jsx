import { signInWithGoogle } from '../services/firebase';


// const Login = () => {
//   return (
//     <div>
//       <button onClick={signInWithGoogle}><i className="fab fa-google"></i>Sign in with google</button>
//     </div>
//   )
// }

// export default Login;

import React from 'react';
// import { useNavigate } from 'react-router-dom';
import shareVideo from '../assets/share.mp4';
// import logo from '../assets/logowhite.png';

const Login = () => {
  // const navigate = useNavigate();

  return (
    <div className="flex justify-start items-center flex-col h-screen">
      <div className=" relative w-full h-full">
        <video
          src={shareVideo}
          type="video/mp4"
          loop
          controls={false}
          muted
          autoPlay
          className="w-full h-full object-cover"
        />

        <div className="absolute flex flex-col justify-center items-center top-0 right-0 left-0 bottom-0    bg-blackOverlay">
          {/* <div className="p-5">
            <img src={logo} width="130px" />
          </div> */}
          <span class="box-decoration-clone text-white text-3xl bg-gradient-to-r from-indigo-600 to-pink-500 leading-[3.5rem] px-2 mb-10">
            <a href='https://dokuso.app/'>Dokusō</a>
          </span>
          <div className="shadow-2xl">
          <button 
            type="button"
            className="bg-black flex justify-center items-center p-3 rounded-lg cursor-pointer outline-none text-white" 
            onClick={signInWithGoogle}>
              <i className="fab fa-google">
              </i>
                Sign in with google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;