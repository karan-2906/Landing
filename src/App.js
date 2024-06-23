import React, { useState, useEffect, useRef } from 'react';
import Banner from "./components/Banner";
import Banner2 from "./components/Banner2";
import Description from "./components/Description";
import FitnessJourney from "./components/FitnessJourney";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Last from "./components/Last";
import Products from "./components/Products";
import Blog from "./components/Blog";
import Review from "./components/Review";
import ScrollToTopButton from "./components/Scrolltop";

function App() {
  const [isFooterVisible, setIsFooterVisible] = useState(false);
  const footerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        console.log('Footer entry:', entry);  // Log the entry to check observer functionality
        setIsFooterVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => {
      if (footerRef.current) {
        observer.unobserve(footerRef.current);
      }
    };
  }, []);

  return (
    <div className="w-[100%]">

      <div className='h-screen bg-cover bg-no-repeat bg-center flex justify-center text-center p-5 items-center bg-hero-pattern text-white text-5xl font-bold font-poppins lg:hidden' >
        ONLY for Laptop View
      </div>
      <div className='hidden lg:flex flex-col'>
        <div className="h-screen">
          <Header />
        </div>

        <div className="h-full">
          <Description />
          <Products list="first" />
        </div>

        <div className="h-fit">
          <FitnessJourney />
        </div>

        <div className="h-fit mt-40">
          <Banner heigth="40rem" />
          <Banner2 />
        </div>

        <div className="h-fit mt-20 text-center">
          <p className="font-poppins text-4xl pb-6 font-bold">Best selling Juices</p>
          <Products list="second" />
          <Banner heigth="30rem" padding="6rem" />
        </div>

        <div className="h-fit mt-20">
          <Review />
          <Blog />
        </div>

        <div className="h-[80rem] mt-4" ref={footerRef}>
          <Last />
        </div>

        <Footer />

        {isFooterVisible && <ScrollToTopButton />}
      </div>
    </div>
  );
}

export default App;
