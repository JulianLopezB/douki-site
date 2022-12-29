import firebase from "firebase/compat/app";
import 'firebase/compat/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBZPUP0x4OVrTq8rJ9ftQVVuIIX0oiULtA",
  authDomain: "dokuso-32a82.firebaseapp.com",
  projectId: "dokuso-32a82",
  storageBucket: "dokuso-32a82.appspot.com",
  messagingSenderId: "1023909192988",
  appId: "1:1023909192988:web:19f362ac8c0c53343d46d9",
  measurementId: "G-ECFCMM4SVQ"
};

// Initialize Firebase 
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;