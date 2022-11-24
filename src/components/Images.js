import { useContext } from "react"
import { ImageContext } from "../App"
import Image from "./Image";
import Skeleton from "./Skeleton";
import Spin from "./Spin";

const Images = () => {
  const { response, isLoading } = useContext(ImageContext);

  return (
    <div className="flex items-center px-20">
      {/* <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 my-10 max-w-7xl mx-auto px-4"> */}
      <div class="columns-2 md:columns-3 lg:columns-4">
        {/* {isLoading ? <Skeleton item={30} /> : response.map((data, key) => <Image key={key} data={data} />)} */}
        {isLoading ? <Spin/> : response.map((data, key) => <Image key={key} data={data} />)}
      </div>
    </div>
  )
}

export default Images