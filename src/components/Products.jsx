import React from 'react'
import img1_1 from "../assets/Rectangle 744.jpg"
import img1_2 from "../assets/Rectangle 745.jpg"
import img1_3 from "../assets/Rectangle 746.jpg"
import img1_4 from "../assets/Rectangle 747.jpg"
import img2_1 from "../assets/Rectangle 733.png"
import img2_2 from "../assets/Rectangle 733-1.png"
import img2_3 from "../assets/Rectangle 733-2.png"
import img2_4 from "../assets/Rectangle 733-3.png"
import { MdOutlineStarPurple500 } from "react-icons/md";

const Products = ({ list }) => {
  const first = [
    img1_1, img1_2, img1_3, img1_4
  ]
  const second = [
    img2_1, img2_2, img2_3, img2_4
  ]

  const images = list === 'first' ? first : second;

  return (
    <div className="md:flex justify-center items-center gap-4 pb-20 p-4">
      {images.map((image, index) => (
        <div className='items-center font-poppins'>
            <div key={index} className="flex justify-center items-center overflow-hidden">
              <img src={image} alt={`Image ${index}`} className="w-[18.5rem] h-[23rem] hover:scale-110" />
            </div>
            <p className='pt-4 font-semibold'>Orange Juice Pulpy</p>
            <p className='pt-2 font-medium'>From $5.00</p>
            <div className='flex items-center justify-center text-lg pt-4 gap-4'>
              <div className='flex'>
                <MdOutlineStarPurple500 />
                <MdOutlineStarPurple500 />
                <MdOutlineStarPurple500 />
                <MdOutlineStarPurple500 />
                <MdOutlineStarPurple500 />
              </div>
              (4.8)
            </div>
            <button className='w-full  border-black border p-3 font-semibold hover:text-white hover:bg-black mt-3'>
              Shop Now
            </button>
          </div>
      ))}
    </div>
  )
}

export default Products