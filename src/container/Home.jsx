import { createContext, useState } from "react";
// import {  useEffect } from "react";
import Images from "../components/Images";
import Jumbutron from "../components/Jumbutron";
import SearchField from "../components/SearchField";
import useAxios from "../hooks/useAxios";
// import Login from '../components/Login';
// import firebase from '../services/firebase';

// Create Context
export const ImageContext = createContext();

const Home = () => {
  const [searchImage, setSearchImage] = useState('');
  const [searchValue, setSearchValue] = useState("");
  const [placeHolder, setPlaceHolder] = useState("");
  const { response, isLoading, error, fetchData } = useAxios(`null`);
  // console.log('response', response);
  // const { response, isLoading, error, fetchData } = useAxios(`search?query=Wes Anderson`);
  // const [user, setUser] = useState(null);
  // useEffect(() => {
  // firebase.auth().onAuthStateChanged(user => {
  //   setUser(user);
  // })
  // }, [])
  // setUser('pepe@gmail.com')
  // console.log(user)
  
  const value = {
    response,
    isLoading,
    error,
    fetchData,
    searchImage,
    setSearchImage,
    searchValue,
    setSearchValue,
    placeHolder,
    setPlaceHolder
  }

  return (
    <>
    {/* {user ? 
    <ImageContext.Provider value={value}>
      <Jumbutron>
        <SearchField />
      </Jumbutron>
      <Images />
    </ImageContext.Provider> : <Login />
    } */}
      <ImageContext.Provider value={value}>
        <Jumbutron>
          <SearchField />
        < /Jumbutron>
        <Images />
      </ImageContext.Provider> 
  </>
  );
}

export default Home;
