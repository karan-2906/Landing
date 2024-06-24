import React from 'react'
import img from '../assets/juice.png'

const Banner = ({ heigth, padding }) => {
  return (
    <div className='w-full overflow-hidden flex items-center justify-center bg-gray-200 ' style={{height: heigth}} >
      <div className='w-full flex items-center justify-center h-full lg:hidden lg:bg-gray-200 bg-banner bg-cover  bg-no-repeat bg-center '>
        <div className='xl:w-3/5 w-4/5 pl-20 pb-10 hidden lg:flex'>
          <img src={img} alt="" className='scale-125 ' />
        </div>
        <div className='xl:w-2/6 flex flex-col items-start justify-center p-5'>
          <p className='font-poppins text-4xl font-semibold text-start flex xl:flex-col hover:text-red-400 gap-3'>Order Fresh Orange Juices</p>
          <p className='pt-4 font-poppins font-medium text-start'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur at perferendis voluptates quisquam sunt dolore ducimus quia ?</p>
          <button className='bg-black font-medium text-xl p-4 text-white hover:bg-white hover:text-black border-2 border-black w-56 mt-4'>
            Shop Now
          </button>
          
        </div>
      </div>
      <div className='w-full hidden  lg:flex  items-center justify-center '>
        <div className='xl:w-3/5 w-4/5 pl-20 pb-10 hidden lg:flex'>
          <img src={img} alt="" className='scale-125 ' />
        </div>
        <div className='xl:w-2/6 flex flex-col items-start justify-center p-5'>
          <p className='font-poppins text-4xl font-semibold text-start flex xl:flex-col hover:text-red-400 gap-3'>Order Fresh Orange Juices</p>
          <p className='pt-4 font-poppins font-medium text-start'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur at perferendis voluptates quisquam sunt dolore ducimus quia ?</p>
          <button className='bg-black font-medium text-xl p-4 text-white hover:bg-white hover:text-black border-2 border-black w-56 mt-4'>
            Shop Now
          </button>
          
        </div>
      </div>
    </div>
  )
}

export default Banner
