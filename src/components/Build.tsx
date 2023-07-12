import Slider from "./Slider"
import { scrollData } from "../data/FeatureData"

function Build() {
  return (
    <div className="bg-white pt-14 mx-8 text-black alg:mx-16 xl:px-8">
      <h1 className="text-[32px] font-medium opacity-80 alg:text-7xl">Build fast.</h1>
      <h1 className="text-[32px] font-medium opacity-90 mt-[-10px] alg:text-7xl">Build with flexibility.</h1>
      <div>
        <h2 className="mt-[4rem] text-[21px] font-medium alg:mt-32 alg:text-4xl">What you can do with Commerce Layer</h2>
        <p className="mt-4 font-medium alg:text-lg alg:opacity-80 ">The flexibility of Commerce Layer makes it the right tool for any use case</p>
      </div>
      <Slider scrollData={scrollData} />
    </div>
  )
}

export default Build