import ServiceList from "./ServiceList"
import { serviceData } from "../data/ServiceData"

function Services() {

  return (
    <div>
      <div className="bg-black xl:px-8">
        <h1 className="bg-black text-white text-4xl font-medium px-8 py-20 mt-12 alg:px-16 alg:text-7xl alg:py-24 leading-loose">ShopConnect is the commerce API for everything brands</h1>
      </div>
      <div className="mx-6 mt-20 sm:mx-8 alg:mx-16 xl:px-8">
        <h2 className="text-2xl font-medium mb-6 alg:text-3xl alg:mb-10 xl:text-3xl">Our best in class features that everyone gets</h2>
        <ServiceList serviceData={serviceData} />
      </div>
    </div>
  )
}

export default Services