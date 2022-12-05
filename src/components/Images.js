import { useContext } from "react"
import { ImageContext } from "../App"
import Image from './Image';
import * as React from 'react';



function Images() {

  const { response  } = useContext(ImageContext);
  const uniqueArray = response.filter((value, index) => {
    const _value = JSON.stringify(value);
    return index === response.findIndex(response => {
      return JSON.stringify(response) === _value;
    });
  })
  

  return (
    
  
    <div className="items-center px-1">
      <div className="md:shrink-0 items-center">
      {(typeof response !== 'undefined' && response.length > 0) ? (
        <div class="columns-1 sm:columns-2 md:columns-3 lg:columns-4">
          {uniqueArray.map((data, key) => (<Image data={data} key={key}/>))}
        </div>) : (
          <></>
        )}
      </div>
    </div>
    
  
    
    
  )
}

export default Images