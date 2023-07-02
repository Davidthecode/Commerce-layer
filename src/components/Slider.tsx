import { useState } from 'react'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { AiOutlineArrowRight } from 'react-icons/ai'

interface sliderItem {
    image: string
    header: string
    text: string
}

interface SliderProps {
    scrollData: sliderItem[]
}

function Slider({ scrollData }: SliderProps) {
    const [currentIndex, setCurrentIndex] = useState(0)

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % scrollData.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + scrollData.length) % scrollData.length);
    };

    const currentItem = scrollData[currentIndex];
    return (
        <div>
            <div className='mt-6 bg-[#F0F0F0] px-6 py-8 rounded-xl w-full h-[19rem]'>
                <img src={currentItem.image}
                    alt=""
                    className='w-8 h-8 ' />
                <h2 className='mt-6 text-xl font-medium'>{currentItem.header}</h2>
                <p className='opacity-50 font-medium text-sm mt-2'>{currentItem.text}</p>
            </div>
            <div className='flex justify-end cursor-pointer mt-4 bg-white space-x-4'>
                <AiOutlineArrowLeft
                    onClick={handlePrev}
                />

                {' '}

                <AiOutlineArrowRight
                    onClick={handleNext}
                />

            </div>
        </div>
    )
}

export default Slider