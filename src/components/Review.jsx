import React, { useState } from 'react'
import { MdOutlineStarPurple500 } from "react-icons/md";
import { HiOutlineArrowSmLeft } from "react-icons/hi";
import { HiOutlineArrowSmRight } from "react-icons/hi";
import { GoDotFill } from "react-icons/go";
import { GoDot } from "react-icons/go";

const reviews = [
    {
        rating: 5,
        title: 'Very Useful',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.',
        author: 'Alexa',
    },
    {
        rating: 5,
        title: 'Very Useful',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.',
        author: 'Alexa',
    },
    {
        rating: 5,
        title: 'Very Useful',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.',
        author: 'Alexa',
    },
    {
        rating: 5,
        title: 'Very Useful',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.',
        author: 'Alexa',
    },

    // Repeat the above object to create more reviews
];

const Review = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrevClick = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? reviews.length - 1 : prevIndex - 1));
        console.log("prev")
    };

    const handleNextClick = () => {
        setCurrentIndex((prevIndex) => (prevIndex === reviews.length - 1 ? 0 : prevIndex + 1));
        console.log("next")
    };
    return (
        <div className=' flex justify-center items-center'>
            <div className='xl:w-[77rem] w-[80%] text-center'>
                <p className=' text-4xl font-bold font-poppins pb-10'> Over 10,000 Happy Customers</p>
                <div className="relative">
                    <div className="flex overflow-x-scroll pb-10 hide-scroll-bar items-center">
                        <button className='absolute z-10 left-0 text-4xl rounded-full bg-black text-white p-1' onClick={handlePrevClick}>
                            <HiOutlineArrowSmLeft />
                        </button>
                        <div className="flex flex-nowrap space-x-6 items-center">
                            <div className="flex gap-10 pl-6 transition-transform duration-50" style={{ transform: `translateX(-${currentIndex * 25}%)` }}>
                                {reviews.map((review, index) => (
                                    <div className="p-4 bg-gray-100 w-[23rem] rounded-md shadow-md text-center">
                                        <div className="flex justify-center mb-2">
                                            <div className='flex'>
                                                <MdOutlineStarPurple500 />
                                                <MdOutlineStarPurple500 />
                                                <MdOutlineStarPurple500 />
                                                <MdOutlineStarPurple500 />
                                                <MdOutlineStarPurple500 />
                                            </div>
                                        </div>
                                        <h3 className="font-semibold">{review.title}</h3>
                                        <p className="mt-2">{review.text}</p>
                                        <div className="mt-4">
                                            <p className="font-semibold">{review.author}</p>
                                            <p className="text-gray-600 text-sm">Verified Buyer</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="flex gap-10 transition-transform duration-50" style={{ transform: `translateX(-${currentIndex * 25}%)` }}>
                                {reviews.map((review, index) => (
                                    <div className="p-4 bg-gray-100 w-[23rem] rounded-md shadow-md text-center">
                                        <div className="flex justify-center mb-2">
                                            <div className='flex'>
                                                <MdOutlineStarPurple500 />
                                                <MdOutlineStarPurple500 />
                                                <MdOutlineStarPurple500 />
                                                <MdOutlineStarPurple500 />
                                                <MdOutlineStarPurple500 />
                                            </div>
                                        </div>
                                        <h3 className="font-semibold">{review.title}</h3>
                                        <p className="mt-2">{review.text}</p>
                                        <div className="mt-4">
                                            <p className="font-semibold">{review.author}</p>
                                            <p className="text-gray-600 text-sm">Verified Buyer</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <button className='absolute right-0 text-4xl rounded-full bg-black text-white p-1' onClick={handleNextClick}>
                            <HiOutlineArrowSmRight />
                        </button>
                    </div>
                    <div>
                        <div className="flex justify-center mt-4">
                            {reviews.map((_, index) => (
                                <div key={index} className="text-4xl">
                                    {index === currentIndex ? <GoDotFill /> : <GoDot />}
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="flex justify-center mt-4">
                        <button className="bg-green-900 text-white px-4 py-2">Read All Reviews</button>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default Review