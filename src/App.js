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

import React from 'react';
import { Routes, Route } from 'react-router-dom';

// import { Login } from './components';
import Home from './container/Home';
import Manifesto from './container/Manifesto';

const App = () => {


  return (
    <Routes>
      {/* <Route path="login" element={<Login />} /> */}
      <Route path="/*" element={<Home />} />
      <Route path="manifesto" element={<Manifesto />} />
    </Routes>
  );
};

export default App;
