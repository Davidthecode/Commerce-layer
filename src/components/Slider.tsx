import { AiOutlineArrowLeft } from 'react-icons/ai'
import { AiOutlineArrowRight } from 'react-icons/ai';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { useRef } from 'react';

type sliderItem = {
    image: string
    header: string
    text: string
};

type SliderProps = {
    scrollData: sliderItem[]
};

function Slider({ scrollData }: SliderProps) {

    const scrollRef = useRef<HTMLDivElement | null>(null);

    const scroll = (direction: string) => {
        const { current } = scrollRef;

        if (current) {
            if (direction === "left") {
                current.scrollLeft -= 500;
            } else {
                current.scrollLeft += 500;
            }
        }
    };

    return (
        <section className='flex relative pt-10 px-6 pb-16 alg:pl-16 alg:pr-0 plg:pl-24'>
            <div className='flex overflow-x-scroll' ref={scrollRef} style={{ scrollBehavior: 'smooth' }}>
                {scrollData.map((data, index) => {
                    return (
                        <div className='min-w-[100%] xsm:min-w-[50%] xsm:h-[28rem] xsm:pr-10 customsm:min-w-[55%] customsm:h-[23rem] alg:min-w-[40%] alg:h-[23rem] plg:min-w-[28%] h-[20rem] pt-6 px-6 bg-[#F8F8F8] mr-4 rounded-md' key={index + 1}>
                            <img
                                src={data.image}
                                alt=""
                                className='w-8 h-8'
                            />
                            <h2 className='mt-6 text-xl font-medium'>{data.header}</h2>
                            <p className='opacity-50 font-medium text-sm mt-4 leading-6'>{data.text}</p>
                        </div>
                    )
                })}
            </div>

            <div className='absolute bottom-0 right-6 flex'>
                <div className='hover:text-white hover:bg-black rounded-full p-2 mr-6' onClick={() => scroll("left")}>
                    <AiOutlineArrowLeft className="cursor-pointer" size="1.2rem" />
                </div>
                <div className='hover:text-white hover:bg-black rounded-full p-2' onClick={() => scroll("right")}>
                    <AiOutlineArrowRight className="cursor-pointer" size="1.2rem" />
                </div>
            </div>
        </section>
    );
}

export default Slider;