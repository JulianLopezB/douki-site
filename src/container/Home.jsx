import { createContext, useState } from "react";
import Images from "../components/Images";
import Jumbutron from "../components/Jumbutron";
import SearchField from "../components/SearchField";
import useAxios from "../hooks/useAxios";

// Create Context
export const ImageContext = createContext();

function Home() {
  const [searchImage, setSearchImage] = useState('');
  const [searchValue, setSearchValue] = useState("");
  const [placeHolder, setPlaceHolder] = useState("");
  const { response, isLoading, error, fetchData } = useAxios(`null`);
  console.log('response', response);
  // const { response, isLoading, error, fetchData } = useAxios(`search?query=Wes Anderson`);

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
    <ImageContext.Provider value={value}>
      <Jumbutron>
        <SearchField />
      </Jumbutron>
      <Images />
    </ImageContext.Provider>
  );
}

export default Home;
