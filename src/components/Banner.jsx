import React from 'react'
import img from '../assets/juice.png'

const Banner = ({ heigth, padding }) => {
  return (
    <div className=' overflow-hidden flex items-center justify-center bg-gray-200' style={{ height: `${heigth}` }} >
      <div className='w-[77rem] flex'>
        <div className='w-3/5 pl-20'>
          <img src={img} alt="" className='scale-175' style={{ paddingTop: `${padding}` }} />
        </div>
        <div className='w-2/5 flex flex-col items-start justify-center '>
          <p className='font-poppins text-4xl font-semibold text-start flex flex-col hover:text-red-400 gap-3'>Order Fresh Orange <p>Juices</p></p>
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
