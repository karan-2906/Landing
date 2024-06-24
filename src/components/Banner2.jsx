import React from 'react'
import img from '../assets/Rectangle 739.png'

const Banner2 = () => {
  return (
    <div className='flex  items-center justify-center mb-20'>
        <div className='xl:w-[77rem] flex flex-col xl:flex-row gap-10 justify-center items-center pt-10 '>
          <img src={img} alt="" />
          <img src={img} alt="" />
        </div>
    </div>
  )
}

export default Banner2