import ServiceList from "./ServiceList"
import { serviceData } from "../data/ServiceData"

function Services() {
  
  return (
    <div className="text-black">
      <h1 className="bg-black text-white text-4xl font-medium px-8 py-20 mt-12 alg:px-16 alg:text-7xl alg:py-24">Commerce Layer is the commerce API for everything brands</h1>
      <div className="mx-6 mt-20 sm:mx-8 alg:mx-16">
        <h2 className="text-2xl font-medium mb-6 opacity-70 alg:text-3xl alg:mb-10">Our best in class features that everyone gets</h2>
        <ServiceList serviceData={serviceData}/>
      </div>
    </div>
  )
}

export default Services