import React from 'react'
import { HiOutlineArrowSmRight } from "react-icons/hi";

const Last = () => {
  return (
    <div className='w-full h-full text-white font-poppins'>
      <div className='h-3/5 lg:h-1/2 flex text-center ' >
        <div className='w-1/2 border-2 h-full bg-last1 bg-no-repeat bg-cover bg-center items-center justify-center flex'>
          <p className='text-4xl font-bold flex lg:hidden text-black '>Discount Upto 10%</p>
        </div>
        <div className='w-1/2 border-2 h-full bg-last2 bg-no-repeat bg-cover bg-center items-center justify-center flex'>
          <p className='text-lg font-bold p-5 flex lg:hidden'>Be the fitst to know about new collections and exclusive offers.</p>
        </div>
      </div>
      <div className='h-3/5 lg:h-1/2 flex' >
        <div className='w-1/2 border-2 h-full bg-last3 bg-no-repeat bg-cover bg-center items-center justify-center flex'>
          <div className='bg-white items-center flex lg:hidden m-5 rounded-md '>
            <input type="email"
              name='email'
              placeholder='Email'
              className='rounded-md p-3 w-full text-black'
            />
            <HiOutlineArrowSmRight className='text-xl text-gray-400' />
          </div>
        </div>
        <div className='w-1/2 border-2 h-full bg-last4 bg-no-repeat bg-cover bg-center flex items-center justify-center text-center'>
          <div className=' text-center '>
            <p className='text-4xl font-bold pb-10 hidden lg:flex'>Discount Upto 10%</p>
            <p className='hidden lg:flex'>Be the fitst to know about new collections and exclusive offers.</p>
            <p className='hidden lg:flex'>Be the fitst to know about new collections and exclusive offers.</p>
            <div className='bg-white w-full  hidden lg:flex items-center mt-8'>
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