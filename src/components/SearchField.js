import { useContext } from "react"
import { ImageContext } from "../container/Home"
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faSearch } from '@fortawesome/free-solid-svg-icons'
import {} from '../styles.scss'

const SearchField = () => {
  const { fetchData, setSearchImage, searchValue, setSearchValue, setPlaceHolder } = useContext(ImageContext);

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

    // <div className="flex">
    //   {/* <div class="search">
    //     <div>
    //     <input
    //     className="bg-gray-50 placeholder:italic border border-gray-300 text-sm w-full indent-2 p-2.5 outline-none focus:border-blue-500 focus:ring-2 rounded-tl rounded-bl"
    //     type="search"
    //     placeholder={placeHolder || "eg. Wes Anderson"}
    //     value={searchValue}
    //     onChange={handleInputChange}
    //     onKeyDown={handleEnterSearch}
    //     />
    //     </div>
    //   </div> */}
    //   <div class="search-bar">
    //     <input 
    //       // type="text" 
    //       // placeholder="Search..."
    //       // className="bg-gray-50 placeholder:italic border border-gray-300 text-sm w-full indent-2 p-2.5 outline-none focus:border-blue-500 focus:ring-2 md:focus:ring-0 rounded-tl rounded-bl"
    //       className="bg-gray-50 placeholder:italic border border-gray-300 text-md w-full indent-0 p-2.5 outline-none focus:ring-0 md:focus:ring-0 rounded-tl rounded-bl"
    //       type="search"
    //       // placeholder={placeHolder || "eg. Wes Anderson"}
    //       placeholder={placeHolder || "Find your perfect outfit"}
    //       value={searchValue}
    //       onChange={handleInputChange}
    //       onKeyDown={handleEnterSearch}
    //     />
    //   </div>
    // </div>
<div class="container">
<link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet"/>

  <input 
  class="js-search"
  type="text"
  // placeholder={placeHolder || "Find your perfect outfit"}
  placeholder="&#xF002; Unleash your creativity..." 
  style={{'font-family':"Arial, FontAwesome", 'align-items': 'center', 'color': 'gray-800'}}
  value={searchValue}
  onChange={handleInputChange}
  onKeyDown={handleEnterSearch}
    />
  {/* <i class="fa fa-search"></i> */}
  {/* <i class="fa fa-search" style={{color: "#666"}}></i> */}
  {/* <FontAwesomeIcon icon={faCoffee} /> */}
  {/* <FontAwesomeIcon icon={faSearch} /> */}
  <i class="fa-sharp fa-solid fa-magnifying-glass"></i>
</div>
    
  )
}

export default SearchField