import React from 'react'

const Footer = () => {
  return (
    <div className='xl:flex justify-center items-start py-16 h-full bg-black text-white'>
      <div className='xl:w-[77rem] text-center flex lg:flex-row flex-col justify-between items-center '>
        <div className='h-full text-5xl font-mono flex items-start py-10 '>
          LOGO
        </div>
        <div className=' flex gap-36 gap-y-10 flex-wrap justify-center'>
          <div className='flex flex-col gap-3 text-start'>
            <p className='text-xl'> Navigation</p>
            <p className='text-gray-500 hover:underline underline-offset-4'> Home</p>
            <p className='text-gray-500 hover:underline underline-offset-4'> About</p>
            <p className='text-gray-500 hover:underline underline-offset-4'> Projects</p>
          </div>
          <div className='flex flex-col gap-3 text-start'>
            <p className='text-xl'> Shop</p>
            <p className='text-gray-500 hover:underline underline-offset-4'> Home</p>
            <p className='text-gray-500 hover:underline underline-offset-4'> About</p>
            <p className='text-gray-500 hover:underline underline-offset-4'> Projects</p>
            <p className='text-gray-500 hover:underline underline-offset-4'> Blog</p>
            <p className='text-gray-500 hover:underline underline-offset-4'> Contact</p>
          </div>
          <div className='flex flex-col gap-3 text-start'>
            <p className='text-xl'> About Us</p>
            <p className='text-gray-500 hover:underline underline-offset-4'> Home</p>
            <p className='text-gray-500 hover:underline underline-offset-4'> About</p>
            <p className='text-gray-500 hover:underline underline-offset-4'> Projects</p>
            <p className='text-gray-500 hover:underline underline-offset-4'> Blog</p>
            <p className='text-gray-500 hover:underline underline-offset-4'> Contact</p>
          </div>
          <div className='flex flex-col gap-3 text-start'>
            <p className='text-xl'> About Us</p>
            <p className='text-gray-500 hover:underline underline-offset-4'> Home</p>
            <p className='text-gray-500 hover:underline underline-offset-4'> About</p>
            <p className='text-gray-500 hover:underline underline-offset-4'> Projects</p>
            <p className='text-gray-500 hover:underline underline-offset-4'> Blog</p>
            <p className='text-gray-500 hover:underline underline-offset-4'> Contact</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer