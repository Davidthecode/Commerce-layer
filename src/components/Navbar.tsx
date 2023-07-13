import logo from '../assets/commerce-layer-logo.jpg'
import { useState } from 'react'
import more from '../assets/more.png'
import cancel from '../assets/cancel.png'

function Navbar() {
  const [nav, setNav] = useState<boolean>(false)

  const openNav = () => {
    setNav(true)
  }

  const closeNav = () => {
    setNav(false)
  }
  return (
    <nav className="mx-5 alg:mx-12 mt-4 xl:px-8">
      <section className="flex items-center">
        <figure className="flex items-center">
          <img src={logo} alt="" className="w-16 h-16 alg:w-20 h-20" />
          <figcaption className="text-black text-xl font-bold font-manrope alg:text-[1.6rem]">commerce layer</figcaption>
        </figure>
        <img className='w-9 rounded-lg h-9 ml-auto mr-4 xl:hidden' onClick={openNav} src={more} alt="" />

        <aside className='hidden xl:block xl:flex xl:ml-auto cursor-pointer'>
          <ul className='flex space-x-8 items-center font-medium text-base'>
            <li className='hover:text-[#666EFF]'>Why Commerce Layer</li>
            <li className='hover:text-[#666EFF]'>Customers</li>
            <li className='hover:text-[#666EFF]'>Pricing</li>
            <li className='hover:text-[#666EFF]'>Developers</li>
            <li className='hover:text-[#666EFF]'>Blog</li>
          </ul>
          <div className='ml-10'>
            <button className='border px-2 py-2 mx-4 rounded-lg font-medium text-[#666EFF] bg-blue-100 hover:bg-blue-50'>Sign in</button>
            <button className='border px-2 py-2 rounded-lg font-medium bg-[#666EFF] text-white hover:bg-[#5458F0]'>Sign up for free</button>
          </div>
        </aside>
      </section>

      {/* nav sidebar below */}
      <div className={`${nav ? 'md:fixed md:inset-0 md:z-40 md:bg-black md:backdrop-filter md:backdrop-blur-sm md:bg-opacity-40 md:w-full md:flex md:items-center md:justify-end xl:hidden md:overscroll-none': '' }`}>
        <div
          className={`transform-gpu fixed inset-0 z-40 flex-none bg-white transition-transform ease-in-out duration-300 xl:hidden ${nav ? "translate-x-0 md:w-3/5 md:ml-auto md:mt-4 md:mb-4 md:rounded-lg md:mr-4" : "translate-x-full"
            }`}
        >

          {/* close button */}

          <button
            className="absolute top-2 right-2 p-2 text-gray-500 hover:text-gray-700"
          >
            <img className='w-8 h-8 ml-auto mt-4' onClick={closeNav} src={cancel} alt="" />
          </button>

          {/* nav content */}
          <section className='flex flex-col h-full mt-[6rem] font-medium'>
            <ul className=" font-medium p-4 space-y-6 mx-8">
              <li className='opacity-80 hover:opacity-100'>
                <a href="#about">Why Commerce Layer</a>
              </li>
              <li className='opacity-80 hover:opacity-100'>
                <a href="#customers">Customers</a>
              </li>
              <li className='opacity-80 hover:opacity-100'>
                <a href="#pricing">Pricing</a>
              </li>
              <li className='opacity-80 hover:opacity-100'>
                <a href="#developers">Developers</a>
              </li>
              <li className='opacity-80 hover:opacity-100'>
                <a href="#blogs">Blogs</a>
              </li>
            </ul>

            <div className='flex flex-col space-y-4 p-4 mx-8'>
              <button className='bg-[#666EFF] text-white p-2 rounded-lg hover:bg-[#5458F0]'>Sign up for free</button>
              <button className='bg-blue-50 text-[#666EFF] p-2 rounded-lg hover:bg-blue-100'>Sign in</button>
            </div>
          </section>
        </div>
      </div>
    </nav>
  )
}

export default Navbar