import React from 'react'
import img from '../assets/Rectangle 739.png'

const Blog = () => {
    return (
        <div className=' flex justify-center items-center mt-10 p-5'>
            <div className='xl:w-[77rem]'>
                <p className=' text-center text-4xl font-bold font-poppins pb-10'> From The Blog</p>
                <div className=' flex xl:flex-row flex-col gap-10 items-center justify-center'>
                    <div className='xl:w-1/3 text-start'>
                        <img src={img} alt="" />
                        <p className='pt-4 font-poppins font-light'>June 2, 2024</p>
                        <p className=' pt-2 font-poppins font-semibold text-2xl'>  Pre Workout drink benefits</p>
                        <p className='pt-2 font-poppins font-medium text-base'>ESSENTIAL NUTRIENTS Get post-workout <br /> replenishment After a strenuous workout, it's <br /> crucial to nourish your body with the right <br /> nutrients for...</p>
                        <button className=' pt-4 underline underline-offset-4 font-poppins font-semibold hover:text-gray-700'> Read all</button>
                    </div>
                    <div className='xl:w-1/3 text-start'>
                        <img src={img} alt="" />
                        <p className='pt-4 font-poppins font-light'>June 2, 2024</p>
                        <p className=' pt-2 font-poppins font-semibold text-2xl'>  Pre Workout drink benefits</p>
                        <p className='pt-2 font-poppins font-medium text-base'>ESSENTIAL NUTRIENTS Get post-workout <br /> replenishment After a strenuous workout, it's <br /> crucial to nourish your body with the right <br /> nutrients for...</p>
                        <button className=' pt-4 underline underline-offset-4 font-poppins font-semibold hover:text-gray-700'> Read all</button>
                    </div>
                    <div className='xl:w-1/3 text-start'>
                        <img src={img} alt="" />
                        <p className='pt-4 font-poppins font-light'>June 2, 2024</p>
                        <p className=' pt-2 font-poppins font-semibold text-2xl'>  Pre Workout drink benefits</p>
                        <p className='pt-2 font-poppins font-medium text-base'>ESSENTIAL NUTRIENTS Get post-workout <br /> replenishment After a strenuous workout, it's <br /> crucial to nourish your body with the right <br /> nutrients for...</p>
                        <button className=' pt-4 underline underline-offset-4 font-poppins font-semibold hover:text-gray-700'> Read all</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blog