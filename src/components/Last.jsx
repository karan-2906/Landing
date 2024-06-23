import React from 'react'
import { HiOutlineArrowSmRight } from "react-icons/hi";

const Last = () => {
  return (
    <div className='w-full h-full'>
      <div className='h-1/2 flex' >
        <div className='w-1/2 border-2 h-full bg-last1 bg-no-repeat bg-cover '></div>
        <div className='w-1/2 border-2 h-full bg-last2 bg-no-repeat bg-cover'></div>
      </div>
      <div className='h-1/2 flex' >
        <div className='w-1/2 border-2 h-full bg-last3 bg-no-repeat bg-cover'></div>
        <div className='w-1/2 border-2 h-full bg-last4 bg-no-repeat bg-cover flex items-center justify-center text-center'>
          <div className=' text-white font-poppins'>
            <p className='text-4xl font-bold pb-10'>Discount Upto 10%</p>
            <p >Be the fitst to know about new collections and exclusive offers.</p>
            <p >Be the fitst to know about new collections and exclusive offers.</p>
            <div className='bg-white w-full flex items-center mt-8'>
              <input type="email"
                name='email'
                placeholder='Email'
                className='rounded-md p-3 w-full text-black'
              />
              <HiOutlineArrowSmRight className='text-xl text-gray-400' />
            </div>

            <button className='px-8 mt-6 text-black bg-white border-black border p-3 font-semibold  hover:bg-gray-300'>
              Subscribe
            </button>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Last