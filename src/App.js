// import Home from "./container/Home";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Home />,
//   },
// ]);

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <RouterProvider router={router} />
//   </React.StrictMode>
// );

import React, { useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';

// import { Login } from './components';
import Home from './container/Home';
import Manifesto from './container/Manifesto';

const App = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const User = localStorage.getItem('user') !== 'undefined' ? JSON.parse(localStorage.getItem('user')) : localStorage.clear();

    if (!User) navigate('/login');
  }, []);

  return (
    <Routes>
      {/* <Route path="login" element={<Login />} /> */}
      <Route path="/*" element={<Home />} />
      <Route path="manifesto" element={<Manifesto />} />
    </Routes>
  );
};

export default App;
