import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import './index.css';
// import { FirebaseAppProvider } from 'reactfire';

// const firebaseConfig = {
//   apiKey: "AIzaSyBZPUP0x4OVrTq8rJ9ftQVVuIIX0oiULtA",
//   authDomain: "dokuso-32a82.firebaseapp.com",
//   projectId: "dokuso-32a82",
//   storageBucket: "dokuso-32a82.appspot.com",
//   messagingSenderId: "1023909192988",
//   appId: "1:1023909192988:web:19f362ac8c0c53343d46d9",
//   measurementId: "G-ECFCMM4SVQ"
// };

// ReactDOM.render(
//   <FirebaseAppProvider firebaseConfig={firebaseConfig}>
//     <Router>
//       <App />
//     </Router>
//   </FirebaseAppProvider>,
//   document.getElementById('root'),
// );

ReactDOM.render(
    <Router>
      <App />
    </Router>,
  document.getElementById('root'),
);


