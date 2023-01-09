import { useContext } from "react"
import { ImageContext } from "../container/Home"
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
        <div className="items-center px-1 py-1">
          <div className="md:shrink-0 items-center">
            <div class="columns-2 sm:columns-2 md:columns-3 lg:columns-4 xl:columns-5 d-flex gap-1">
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
              <button type="button"  onClick={handleButtonSearch} value='Wes Anderson' className="px-6 py-2 border-2 border-purple-600 mr-1 mb-1 text-purple-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out">Wes Anderson</button>
              <button type="button"  onClick={handleButtonSearch} value="Safari glam" class="inline-block px-6 py-2 border-2 border-purple-600 mr-1 mb-1 text-purple-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out">Safari glam</button>
              <button type="button"  onClick={handleButtonSearch} value='What to wear at a beach wedding?' class="inline-block px-6 py-2 border-2 border-purple-600 mr-1 mb-1 text-purple-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out">What to wear at a beach wedding?</button>
              <button type="button"  onClick={handleButtonSearch} value='Dress with floral patterns' class="inline-block px-6 py-2 border-2 border-purple-600 mr-1 mb-1 text-purple-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out">Dress with floral patterns</button>
              <button type="button"  onClick={handleButtonSearch} value="Matrix" class="inline-block px-6 py-2 border-2 border-purple-600 mr-1 mb-1 text-purple-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out">Matrix</button>
              <button type="button"  onClick={handleButtonSearch} value="Rick and Morty" class="inline-block px-6 py-2 border-2 border-purple-600 mr-1 mb-1 text-purple-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out">Rick and Morty</button>
              <button type="button"  onClick={handleButtonSearch} value="Merlina Addams" class="inline-block px-6 py-2 border-2 border-purple-600 mr-1 mb-1 text-purple-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out">Merlina Addams</button>
              <button type="button"  onClick={handleButtonSearch} value="Winter puffy jacket" class="inline-block px-6 py-2 border-2 border-purple-600 mr-1 mb-1 text-purple-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out">Winter puffy jacket</button>
              <button type="button"  onClick={handleButtonSearch} value='Classy outfit for a rainy day' class="inline-block px-6 py-2 border-2 border-purple-600 mr-1 mb-1 text-purple-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out">Classy outfit for a rainy day</button>
              <button type="button"  onClick={handleButtonSearch} value="70s fashion" class="inline-block px-6 py-2 border-2 border-purple-600 mr-1 mb-1 text-purple-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out">70s fashion</button>
              <button type="button"  onClick={handleButtonSearch} value="Paris streets" class="inline-block px-6 py-2 border-2 border-purple-600 mr-1 mb-1 text-purple-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out">Paris streets</button>
              <button type="button"  onClick={handleButtonSearch} value="New York streets" class="inline-block px-6 py-2 border-2 border-purple-600 mr-1 mb-1 text-purple-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out">New York streets</button>

            </div>
          </div>
          </div>
        </div>
        )}
    </div>
    
  
    
    
  )
}

export default Images