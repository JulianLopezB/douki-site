import { useContext } from "react"
import { ImageContext } from "../App"
import Image from './Image';
import * as React from 'react';



function Images() {

  const { response, fetchData, setSearchImage, setSearchValue,setPlaceHolder} = useContext(ImageContext);

  const uniqueArray = response.filter((value, index) => {
    const _value = JSON.stringify(value);
    return index === response.findIndex(response => {
      return JSON.stringify(response) === _value;
    });
  })

  const handleButtonSearch = (searchValue) => {
    fetchData(`search?query=${searchValue.target.value}`)
    setPlaceHolder(searchValue.target.value);
    setSearchValue("");
    setSearchImage(searchValue.target.value);
  }

  return (
    
  <div>
      {(typeof response !== 'undefined' && response.length > 0) ? (
        <div className="items-center px-1">
          <div className="md:shrink-0 items-center">
            <div class="columns-1 sm:columns-2 md:columns-3 lg:columns-4">
              {uniqueArray.map((data, key) => (<Image data={data} key={key}/>))}
            </div>
          </div>
        </div>
      ) : (
        <div className="flex md:flex items-center py-3 px-6">
          <div className='max-w-md md:max-w-md mx-auto w-full'>
          <h1 class="text-gray text-left text-2xl font-bold mb-3 py-0">
          Suggestions
          </h1>
          <div class="flex space-x-2 justify-center">
            <div>
              <button type="button"  onClick={handleButtonSearch} value='Wes Anderson' class="inline-block px-6 py-2 border-2 border-purple-600 text-purple-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out">Wes Anderson</button>
              <button type="button"  onClick={handleButtonSearch} value='Informal wedding outfit' class="inline-block px-6 py-2 border-2 border-purple-600 text-purple-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out">Informal wedding outfit</button>
              <button type="button"  onClick={handleButtonSearch} value='Dress with floral patterns' class="inline-block px-6 py-2 border-2 border-purple-500 text-purple-500 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out">Dress with floral patterns</button>
              <button type="button"  onClick={handleButtonSearch} value='Classy outfit for a rainy day' class="inline-block px-6 py-2 border-2 border-purple-600 text-purple-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out">Classy outfit for a rainy day</button>
              <button type="button"  onClick={handleButtonSearch} value='Spanish typical costume' class="inline-block px-6 py-2 border-2 border-purple-600 text-purple-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out">Spanish typical costume</button>
              <button type="button"  onClick={handleButtonSearch} value="Men's shirt in red and green" class="inline-block px-6 py-2 border-2 border-purple-600 text-purple-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out">Men's shirt pastel color</button>
              <button type="button"  onClick={handleButtonSearch} value="Matrix" class="inline-block px-6 py-2 border-2 border-purple-600 text-purple-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out">Matrix</button>
              <button type="button"  onClick={handleButtonSearch} value="Rick and Morty" class="inline-block px-6 py-2 border-2 border-purple-600 text-purple-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out">Rick and Morty</button>
              <button type="button"  onClick={handleButtonSearch} value="French style" class="inline-block px-6 py-2 border-2 border-purple-600 text-purple-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out">French style</button>
              <button type="button"  onClick={handleButtonSearch} value="Winter puffy jacket" class="inline-block px-6 py-2 border-2 border-purple-600 text-purple-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out">Winter puffy jacket</button>

            </div>
          </div>
          </div>
        </div>
        )}
    </div>
    
  
    
    
  )
}

export default Images