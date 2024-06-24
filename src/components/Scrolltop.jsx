import React from 'react';
import { FaLongArrowAltUp } from "react-icons/fa";

const ScrollToTopButton = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className='w-screen'>
    <button
      onClick={scrollToTop}
      className="fixed bottom-[10%] right-[10%] bg-white text-black font-bold text-center p-5 rounded-full shadow-lg"
    >
      <FaLongArrowAltUp />
    </button>
    </div>
  );
};

export default ScrollToTopButton;
