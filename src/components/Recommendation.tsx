import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import productImage from '../assets/product.avif';

function Recommendation() {
    useEffect(() => {
        AOS.init({ once: true });
        window.addEventListener('load', AOS.refresh);
    }, []);

    return (
        <div className="xl:px-8">
            <div className='mx-6 mt-20 sm:mx-8 alg:mx-16 alg:flex alg:flex-row-reverse plg:h-[26rem]'>
                <div className='alg:w-2/5 alg:flex alg:justify-end xl:w-1/5 xl:pl-16 plg:w-2/6 plg:h-full'>
                    <img
                        data-aos="zoom-in-up"
                        data-aos-once="false"
                        className='rounded-lg h-6rem alg:w-4/5 alg:mt-12 alg:h-[22rem] plg:w-4/5 plg:h-full plg:mt-0'
                        src={productImage}
                        alt="" />
                </div>
                <div className='alg:w-3/5 xl:w-5 plg:w-4/6'>
                    <h1 className='text-5xl font-medium mt-8 opacity-80 alg:leading-tight'>"ShopConnect's flexible, scalable ecommerce platform has enabled us to expand our reach to over 30 countries worldwide and offer localized shopping experiences."</h1>
                    <p className='mt-6 font-medium'>Tim Bouscarle</p>
                    <p className='pacity-60 text-sm'>Co-Founder & Director at Chilly's Bottles</p>
                </div>
            </div>

            <div className='bg-[#666EFF] opacity-90 px-6 py-16 mt-20 sm:px-8 alg:mx-16 alg:rounded-lg blg:flex blg:flex-row blg:justify-between blg:items-center blg:py-20'>
                <div className='text-white brightness-150 text-xl font-medium alg:w-3/4 alg:text-4xl alg:pl-4 blg:w-2/5'>Ready to get started?</div>
                <div className='flex flex-col mt-8 blg:flex blg:items-center blg:flex-row-reverse blg:w-3/5'>
                    <button className='bg-black hover:bg-[#111827] text-white py-2 rounded-lg alg:text-lg alg:mb-2 blg:w-[14rem] blg:my-auto blg:ml-6'>Start building for free</button>

                    <button className='bg-[#767DFF] hover:bg-[##8084FF] text-white mt-4 py-2 rounded-lg alg:w-full alg:text-lg blg:w-[14rem] blg:my-auto'>Request a demo</button>
                </div>
            </div>
        </div>
    );
}

export default Recommendation;