import React from 'react'
import Navbar from './Navbar'

const Header = () => {
  return (
    <div className="h-[97%] bg-hero-pattern bg-no-repeat bg-center bg-cover text-white ">
      <div className='flex items-center justify-center bg-green-950 p-2'>
        <p>Welcome to the Store</p>
      </div>
      <Navbar />
      <div className='h-full pb-36 flex flex-col justify-center items-start gap-10 px-12 xl:px-28'>
        <h1 className='text-4xl lg:text-[5.5rem] font-semibold font-poppins'> Full Fresh </h1>
        <h1 className='text-4xl lg:text-[5.5rem] font-semibold font-poppins'>  100% Homemade</h1>
        <h1 className='text-4xl lg:text-[5.5rem] font-semibold font-poppins'> Juices</h1>
        <button className='bg-white font-bold text-xl p-2  text-black hover:bg-gray-100 mt-10 w-56'>
          Explore
        </button>
      </div>

    </div>
  )
}

export default Header