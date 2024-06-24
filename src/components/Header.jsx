import React from 'react'
import Navbar from './Navbar'

const Header = () => {
  return (
    <div className="h-[97%] bg-hero-pattern bg-no-repeat bg-center bg-cover text-white ">
      <div className='flex items-center justify-center bg-green-950 p-2'>
        <p>Welcome to the Store</p>
      </div>
      <Navbar />
      <div className='h-full pb-36 flex flex-col justify-center items-start px-12 xl:px-28'>
        <h1 className='text-4xl lg:text-[5.5rem] font-semibold font-poppins'> <p className='flex flex-wrap'>Full Fresh </p><p>100% Homemade </p>Juices</h1>
        <button className='bg-white font-bold text-xl p-2 text-black hover:bg-gray-100 mt-6 w-56'>
          Explore
        </button>
      </div>

    </div>
  )
}

export default Header