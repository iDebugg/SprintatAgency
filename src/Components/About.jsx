import React from "react";
import "../Styles/About.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import AboutSection from "./AboutSection";

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  return (
    <div
      id="about"
      className="about bg-gray-100 display: flex flex-col  pr-3 pl-3 sm:pr-4 sm:pl-4 md:pr-20 md:pl-20clg:pr-20 lg:pl-20 pt-10"
    >
     <AboutSection />

      
    </div>
  );
};

export default About;
