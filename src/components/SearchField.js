import { useContext } from "react"
import { ImageContext } from "../App"
import {} from '../styles.scss'

const SearchField = () => {
  const { fetchData, setSearchImage, searchValue, setSearchValue, placeHolder, setPlaceHolder } = useContext(ImageContext);

  const handleInputChange = (e) => {
    setSearchValue(e.target.value);
  }
  // const handleButtonSearch = () => {
  //   fetchData(`search?query=${searchValue}`)
  //   setPlaceHolder(searchValue);
  //   setSearchValue("");
  //   setSearchImage(searchValue);
  // }
  const handleEnterSearch = e => {
    if(e.key === 'Enter') {
      fetchData(`search?query=${searchValue}`)
      setPlaceHolder(searchValue);
      // setSearchValue("");
      setSearchImage(searchValue);
    }
  }

  return (
    // <div className="flex">
    //   <input
    //     className="bg-gray-50 placeholder:italic border border-gray-300 text-sm w-full indent-2 p-2.5 outline-none focus:border-blue-500 focus:ring-2 rounded-tl rounded-bl"
    //     type="search"
    //     placeholder={placeHolder || "eg. Wes Anderson"}
    //     value={searchValue}
    //     onChange={handleInputChange}
    //     onKeyDown={handleEnterSearch}
    //     />
    //   <button
    //     onClick={handleButtonSearch}
    //     disabled={!searchValue}
    //     className="bg-blue-600 px-6 py-2.5 text-white rounded-tr rounded-br focus:ring-2 focus:ring-blue-300 disabled:bg-gray-400"
    //   >
    //     Search
    //   </button>
    //   <div className="flex">
    //   </div>
      
    // </div>

    <div className="flex">
      {/* <div class="search">
        <div>
        <input
        className="bg-gray-50 placeholder:italic border border-gray-300 text-sm w-full indent-2 p-2.5 outline-none focus:border-blue-500 focus:ring-2 rounded-tl rounded-bl"
        type="search"
        placeholder={placeHolder || "eg. Wes Anderson"}
        value={searchValue}
        onChange={handleInputChange}
        onKeyDown={handleEnterSearch}
        />
        </div>
      </div> */}
      <div class="search-bar">
        <input 
          // type="text" 
          // placeholder="Search..."
          type="search"
          // placeholder={placeHolder || "eg. Wes Anderson"}
          placeholder={placeHolder || "Unleash your creativity and find your perfect outfit"}
          value={searchValue}
          onChange={handleInputChange}
          onKeyDown={handleEnterSearch}
        />
      </div>
    </div>


    
  )
}

export default SearchField