import React from 'react'
import img from '../assets/Rectangle 741.png'
import img1 from '../assets/Rectangle 742.png'
import img2 from '../assets/Rectangle 743.png'

const FitnessJourney = () => {
  return (
    <div className='flex mt-20 p-7 items-center justify-center'>
      <div className='xl:w-[77rem]  '>
        <div className=''>
          <h1 className='text-4xl font-bold font-poppins'>Start Your Fitness Journey</h1>
          <p className='text-lg font-medium pt-4'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto doloremque accusantium laudantium vero sapiente enim reiciendis, praesentium, odio labore ex ducimus nobis dolorum alias repellendus quidem ea omnis id itaque?
          </p>
          <div className='flex gap-3 pt-10 items-center justify-center'>
            <img src={img} alt="" className='hidden xl:flex'/>
            <div className='flex flex-col font-poppins text-lg font-semibold'>
              <div className='overflow-hidden'>
                <img src={img1} alt="" className=' hover:scale-110'/>
              </div>
                <p className='pb-10 pt-4'> Best Detox Drink</p>
              <div className='overflow-hidden'>
                <img src={img2} alt="" className='hover:scale-110'/>
              </div>
                <p className='pt-4'>Best Pre workout Drink</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FitnessJourney