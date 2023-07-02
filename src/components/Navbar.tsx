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
    <nav className="mx-5 alg:mx-12 mt-4">
      <section className="flex items-center">
        <figure className="flex items-center">
          <img src={logo} alt="" className="w-16 h-16 alg:w-20 h-20" />
          <figcaption className="text-black text-xl font-bold font-manrope alg:text-[1.6rem]">commerce layer</figcaption>
        </figure>
        <img className='w-9 rounded-lg h-9 ml-auto mr-4' onClick={openNav} src={more} alt="" />
      </section>

      <div
        className={`transform-gpu fixed inset-0 z-40 flex-none bg-white transition-transform ease-in-out duration-300 ${nav ? "translate-x-0" : "translate-x-full"
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
            <li>
              <a href="#about">Why Commerce Layer</a>
            </li>
            <li>
              <a href="#customers">Customers</a>
            </li>
            <li>
              <a href="#pricing">Pricing</a>
            </li>
            <li>
              <a href="#developers">Developers</a>
            </li>
            <li>
              <a href="#blogs">Blogs</a>
            </li>
          </ul>

          <div className='flex flex-col space-y-4 p-4 mx-8'>
            <button className='bg-[#666EFF] text-white p-2 rounded-lg'>Sign up for free</button>
            <button className='bg-blue-50 text-[#666EFF] p-2 rounded-lg'>Sign in</button>
          </div>
        </section>
      </div>
    </nav>
  )
}

export default Navbar