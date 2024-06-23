import React from 'react'
import img from '../assets/Rectangle 739.png'

const Banner2 = () => {
  return (
    <div className='flex items-center justify-center mb-20'>
        <div className='w-[77rem] flex gap-10 justify-center items-center pt-10 '>
          <img src={img} alt="" />
          <img src={img} alt="" />
        </div>
    </div>
  )
}

export default Banner2