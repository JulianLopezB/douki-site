import {} from '../styles.css'

const Image = ({ data }) => {
  return (
    // <a href={data.img_urls} target="_blank" rel="noreferrer">
    //   <img className="h-72 w-full object-cover rounded-lg shadow-md" src={data.img_urls} alt={data.name} />
    // </a>
    

      <div class="relative  mb-4 before:content-[''] before:rounded-md before:absolute before:inset-0 before:bg-black before:bg-opacity-10">
        <img class="w-full rounded-md rounded-lg shadow-md object-cover" 
              src={data.img_urls}
              alt={data.name}
        />
        <div class="test__body absolute inset-0 p-8 text-white flex flex-col">
          {/* <div class="relative">
            <h1 class="test__title text-1xl font-bold mb-1">{data.name}</h1>
            <p class="test__author font-sm font-light">{data.brand.toUpperCase()}</p>
            <p class="test__author font-sm font-light">29 €</p>
            <a href="https://jamemme.com/products/angel-dress" target="_blank">See in shop</a>
          </div> */}
          <div class="relative">
            <h1 class="test__title text-1xl font-bold mb-1">{data.name}</h1>
            <p class="test__author font-sm font-light">{data.brand.toUpperCase()}</p>
            <p class="test__author font-sm font-light">29 €</p>
          </div>
          <div class="mt-auto">
            {/* <a class="shop-button" href="https://jamemme.com/products/angel-dress" target="_blank">See in shop</a> */}
            <a class="test__tag bg-white bg-opacity-60 py-1 px-4 rounded-md text-black" href="https://jamemme.com/products/angel-dress">
              See in shop
            </a>
          </div>
        </div>
      </div>
  )
}

export default Image

