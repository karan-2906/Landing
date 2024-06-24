import React, { useState } from 'react';
import { CiSearch } from "react-icons/ci";
import { MdKeyboardArrowDown } from "react-icons/md";
import { BsBag } from "react-icons/bs";
import { IoPersonOutline } from "react-icons/io5";
import { FiMenu } from "react-icons/fi";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
            {/* Large screen navbar */}
            <div className='mt-4 h-20 hidden lg:flex justify-between items-center px-28'>
                <div>
                    <ul className='flex gap-8 underline-offset-4 text-white text-lg'>
                        <li className='hover:underline flex gap-1 items-center '>Shop
                            <MdKeyboardArrowDown />
                        </li>
                        <li className='hover:underline flex gap-1 items-center '>Juices
                            <MdKeyboardArrowDown />
                        </li>
                        <li className='hover:underline flex gap-1 items-center '>About
                            <MdKeyboardArrowDown />
                        </li>
                        <li className='hover:underline flex gap-1 items-center '>Others
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

            {/* Small screen navbar */}
            <div className='mt-4 h-20 flex lg:hidden justify-between items-center px-6'>
                <div onClick={toggleMenu} className='text-white text-3xl cursor-pointer'>
                    <FiMenu />
                </div>
                <div className='h-full text-5xl font-mono flex items-center justify-center flex-grow'>
                    LOGO
                </div>
            </div>

            {/* Mobile menu */}
            {isMenuOpen && (
                <div className='lg:hidden absolute w-full flex flex-col items-center bg-gray-800 text-white p-5'>
                    <div className='flex gap-6 text-xl mt-4'>
                        <CiSearch />
                        <BsBag />
                        <IoPersonOutline />
                    </div>
                    <ul className='flex flex-col gap-4 mt-4 text-lg'>
                        <li className='hover:underline flex gap-1 items-center'>Shop
                            <MdKeyboardArrowDown />
                        </li>
                        <li className='hover:underline flex gap-1 items-center'>Juices
                            <MdKeyboardArrowDown />
                        </li>
                        <li className='hover:underline flex gap-1 items-center'>About
                            <MdKeyboardArrowDown />
                        </li>
                        <li className='hover:underline flex gap-1 items-center'>Others
                            <MdKeyboardArrowDown />
                        </li>
                    </ul>
                    
                </div>
            )}
        </>
    );
};

export default Navbar;
