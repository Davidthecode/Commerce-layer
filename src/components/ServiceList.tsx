import { useEffect } from "react";
import AOS from 'aos'
import 'aos/dist/aos.css'

interface serviceItem {
  image: string,
  header: string,
  text: string,
  mark: string
}

interface serviceProps {
  serviceData: serviceItem[]
}

function ServiceList({ serviceData }: serviceProps) {
  useEffect(() => {
    AOS.init({ once: true });
    window.addEventListener('load', AOS.refresh)
  }, []);

  return (
    <div>
      {serviceData.map((data, id) => {
        return (
          <section key={id} data-aos='fade-in' data-aos-once="false">
            {/* broken line */}
            <div className="relative mt-5 mb-5">
              <div className="w-full h-0.5">
                <div
                  className="absolute inset-0 flex justify-between"
                  style={{
                    backgroundImage:
                      "linear-gradient(to right, rgba(0, 0, 0, 0) 50%, #999999 50%)",
                    backgroundSize: "4px 1px",
                  }}
                ></div>
              </div>
            </div>

            <div className="flex items-start alg:py-4">
              <div className="mr-4">
                <img
                  className="w-5 h-5"
                  src={data.image}
                  alt="" />
              </div>
              <div className="items-start">
                <h3 className="text-lg font-medium mt-[-5px] alg:text-2xl alg:opacity-70">{data.header}</h3>
                <p className="font-medium text-sm opacity-70">{data.text}</p>
              </div>
              <div className='ml-auto'>
                <img
                  className="w-8 h-8"
                  src={data.mark}
                  alt="" />
              </div>
            </div>
          </section>)
      })}
      
      {/* broken line */}
      <div className="relative mt-5 mb-5">
        <div className="w-full h-0.5">
          <div
            className="absolute inset-0 flex justify-between"
            style={{
              backgroundImage:
                "linear-gradient(to right, rgba(0, 0, 0, 0) 50%, #999999 50%)",
              backgroundSize: "4px 1px",
            }}
          ></div>
        </div>
      </div>
    </div>
  )
}

export default ServiceList