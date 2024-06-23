import React from 'react'
import { CiSearch } from "react-icons/ci";
import { MdKeyboardArrowDown } from "react-icons/md";
import { BsBag } from "react-icons/bs";
import { IoPersonOutline } from "react-icons/io5";

const Navbar = () => {
    return (
        <div className='mt-4 h-20 flex justify-between items-center px-28'>
            <div>
                <ul className='flex gap-8 underline-offset-4 text-white text-lg'>
                    <li className=' hover:underline flex gap-1 items-center '>Shop
                        <MdKeyboardArrowDown />
                    </li>
                    <li className='hover:underline flex gap-1 items-center '>Juices
                        <MdKeyboardArrowDown />
                    </li>
                    <li className=' hover:underline flex gap-1 items-center '>About
                        <MdKeyboardArrowDown />
                    </li>
                    <li className=' hover:underline flex gap-1 items-center '>Others
                        <MdKeyboardArrowDown />
                    </li>
                </ul>
            </div>
            <div className='h-full text-5xl font-mono flex items-center'>
                LOGO
            </div>
            <div className='flex text-white gap-12 text-xl'>
                <CiSearch />
                <BsBag />
                <IoPersonOutline />
            </div>
        </div>
    )
}

export default Navbar