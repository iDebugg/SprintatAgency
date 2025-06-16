import React from "react";
import "../Styles/Hero.css";
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Farmvideo from '../assets/video/busyOffice.mp4';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Hero = () => {

  useEffect(() => {
    AOS.init({
      duration: 200,
      easing: 'ease-in-out',
      once: false,
      mirror: true,
    });
  }, []);


  return (
    <section id="home" className="relative h-screen w-full flex items-center justify-center text-white">
   
    <video
      className="absolute top-0 left-0 w-full h-full object-cover"
      src={Farmvideo}
      autoPlay
      loop
      muted
      playsInline
    />

 
    <div className="absolute top-0 left-0 w-full h-full  bg-opacity-50"></div>

    {/* Content */}
    <div className="relative z-10 text-center px-4">
      <h1 className="text-4xl md:text-6xl font-bold leading-tight" data-aos="zoom-in">
        Welcome to <span className="text-[#dafb18]">Sprintat Agency</span>
      </h1>
     
      <div className="mt-6">
        <button data-aos="fade-left" className="px-6 py-3 bg-[#dafb18] hover:bg-white rounded-md text-lg font-semibold text-[#373737]"><AnchorLink className='anchor-link' offset={50} href='#about'>Learn More</AnchorLink>
          
        </button>
        <button data-aos="fade-right" className="ml-4 px-6 py-3 bg-transparent border-2 border-[#dafb18] text-[#fffff] hover:bg-[#373737] hover:text-white rounded-md text-lg font-semibold"><AnchorLink className='anchor-link' offset={50} href='#contact'> Contact Us</AnchorLink>
         
        </button>
      </div>
    </div>
  </section>
  );
};

export default Hero;
