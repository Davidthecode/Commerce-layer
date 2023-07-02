import benchmark from '../assets/benchmark.avif'
import coatue from '../assets/coatue.avif'
import { FaTwitterSquare } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'
import { FaGithubSquare } from 'react-icons/fa'
import { AiOutlineSlackSquare } from 'react-icons/ai'

function Footer() {
    return (
        <footer className='mt-36 mx-6 pb-24 sm:mx-8 alg:mx-16'>
            <div className='flex w-fit bg-[#D2F8E8] items-center p-1 rounded-lg'>
                <div className="h-3 w-3 rounded-full bg-green-400 mr-1"></div>
                <p className='bg-[#D2F8E8] text-black text-sm'>All systems operational</p>
            </div>

            {/* broken line */}
            <div className="relative my-8">
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

            {/* footer begins */}
            <div className='cursor-pointer blg:flex'>
                <div className='alg:flex alg:justify-between blg:justify-around blg:w-2/4'>
                    <div className='blg:mr-20'>
                        <h2 className='mt-6 font-medium text-lg opacity-70 alg:text-xl'>Platform</h2>
                        <ul className='opacity-60 text-sm space-y-1 mt-2 alg:text-base alg:space-y-2'>
                            <li>Why Commerce Layer</li>
                            <li>Customers</li>
                            <li>Pricing</li>
                            <li>Blog</li>
                            <li>Sign in</li>
                            <li>Sign up for free</li>
                        </ul>
                    </div>
                    <div className='alg:mr-[13rem] blg:mr-0'>
                        <h2 className='mt-6 font-medium text-lg opacity-70 alg:text-xl'>Resources</h2>
                        <ul className='opacity-60 text-sm space-y-1 mt-2 alg:text-base alg:space-y-2'>
                            <li>Core concepts</li>
                            <li>Data model</li>
                            <li>Headless commerce</li>
                            <li>Inventory management</li>
                            <li>Jamstack whitepaper</li>
                            <li>Core API docs</li>
                            <li>Metrics API docs</li>
                            <li>Changelog</li>
                        </ul>
                    </div>
                </div>

                <div className='alg:flex alg:justify-between alg:mt-4 blg:mt-0 blg:flex blg:justify-around blg:mr-0 blg:w-2/4'>
                    <div className=''>
                        <h2 className='mt-6 font-medium text-lg opacity-70 alg:text-xl'>Get in touch</h2>
                        <ul className='opacity-60 text-sm space-y-1 mt-2 alg:text-base alg:space-y-2'>
                            <li>Contact sales</li>
                            <li>Request a demo</li>
                            <li>Become our partner</li>
                            <li>Giveback program</li>
                            <li>Email support</li>
                            <li>Slack channel</li>
                        </ul>
                    </div>
                    <div className='alg:mr-[15rem] blg:mr-0'>
                        <h2 className='mt-6 font-medium text-lg opacity-70 alg:text-xl'>Legal</h2>
                        <ul className='opacity-60 text-sm space-y-1 mt-2 alg:text-base alg:space-y-2'>
                            <li>Terms of service</li>
                            <li>Privacy policy</li>
                            <li>Cookie policy</li>
                            <li>Cookie preferences</li>
                        </ul>
                    </div>
                </div>
            </div>

            <p className='mt-6 text-sm font-medium opacity-70 alg:mt-16'>© 2023 Commerce Layer inc</p>
            <div className='alg:flex alg:justify-between alg:items-center'>
                <div className='flex mt-8 items-center'>
                    <p className='mr-4 text-sm opacity-70'>Backed by:</p>
                    <img
                        className='w-[6rem] h-[1.2rem] mr-4'
                        src={benchmark}
                        alt="" />
                    <img
                        className='w-[5rem] h-[1.2rem]'
                        src={coatue}
                        alt="" />
                </div>
                <div className='flex items-center mt-10 space-x-2 alg:mb-2'>
                    <FaTwitterSquare size='2rem' />
                    <FaLinkedin size='2rem' />
                    <FaGithubSquare size='2rem' />
                    <AiOutlineSlackSquare size='2.5rem' />
                </div>
            </div>
        </footer>
    )
}

export default Footer