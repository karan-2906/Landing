import React from 'react'
import img1 from '../assets/Rectangle 737.png'
import img2 from '../assets/Rectangle 738.png'

const Description = () => {
  return (
    <div className='flex flex-col p-7 2xl:flex-row items-center justify-center gap-16 mx-auto font-poppins pb-8'>
      <div>
        <img src={img1} alt="" className='pb-4'/>
        <h1 className='pb-2 font-medium whitespace-pre'>Light.   Refreshing.   Natural.</h1>
        <p className='pb-4 font-bold text-2xl'> 100 % Natural Orange Juice</p>
        <button className='bg-gray-800 font-medium text-xl p-4 text-white hover:bg-gray-700 w-56'>
          Shop Now
        </button>
      </div>

      <div>
        <img src={img2} alt=""  className='pb-4'/>
        <h1 className='pb-2 font-medium whitespace-pre'>Light.   Refreshing.   Natural.</h1>
        <p className='pb-4 font-bold text-2xl'> 100 % Natural Orange Juice</p>
        <button className='bg-gray-800 font-medium text-xl p-4 text-white hover:bg-gray-700 w-56'>
          Shop Now
        </button>
      </div>
    </div>
  )
}

export default Description