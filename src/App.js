import React from 'react';
// import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './container/Home';
import Manifesto from './container/Manifesto';
import Contact from './container/Contact';
import Login from './components/Login';
// import firebase from './services/firebase';

const App = () => {
  // const navigate = useNavigate();
  // const [user, setUser] = useState(null);

  // useEffect(() => {
  //   firebase.auth().onAuthStateChanged(user => {
  //     setUser(user);
  //   })

  //   if (!user) navigate('/login');
  // }, []);

  // console.log(user);
  
  return (
    <Routes>
      <Route path="login" element={<Login />} />
      <Route path="/*" element={<Home />} />
      <Route path="manifesto" element={<Manifesto/>} />
      <Route path="contact" element={<Contact/>} />
    </Routes>
  );
};

export default App;
