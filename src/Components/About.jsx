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
      className="about bg-gray-100 display: flex flex-col  pr-3 pl-3 sm:pr-4 sm:pl-4 md:pr-6 md:pl-6 lg:pr-8 lg:pl-8 pt-10"
    >
      <div className="text-center mb-10">
        <h1 className="text-[#373737] text-4xl font-bold">About Us</h1>
        <p className="mt-4 max-w-3xl mx-auto text-gray-600">
          At Sprintat, we’re a team of designers, developers, and
          problem-solvers passionate about transforming ideas into innovative
          software. Whether you're launching a startup, scaling an enterprise,
          or digitizing services—we partner with you to craft meaningful,
          impactful solutions.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 kkkk">
        <div className="bg-transparent p-6 rounded-xl shadow-md hover:shadow-lg transition cardleft" data-aos="fade-down"
            data-aos-delay="100"
            >
          <h3 className="text-xl font-semibold text-gray-700 mb-4">
            Our Core Values
          </h3>
          <ul className="list-disc pl-5 text-gray-600 space-y-2">
            <li>Client-First Mentality</li>
            <li>Attention to Detail</li>
            <li>Quality Craftsmanship</li>
            <li>Transparent Collaboration</li>
          </ul>
        </div>

        <div className="bg-transparent p-6 rounded-xl shadow-md hover:shadow-lg transition cardleft"  data-aos="fade-up"
            data-aos-delay="100">
          <h3 className="text-xl font-semibold text-gray-700 mb-4">
            Industries We Serve
          </h3>
          <p className="text-gray-600 mb-3">
            We've built modern digital tools across a range of industries:
          </p>
          <ul className="list-disc pl-5 text-gray-600 space-y-2">
            <li>E-commerce</li>
            <li>Blockchain</li>
            <li>Health & Wellness</li>
            <li>EdTech</li>
            <li>SaaS & Startups</li>
            <li>Finance & Accounting</li>
            <li>Social & Community Platforms</li>
          </ul>
        </div>
      </div>

      
    </div>
  );
};

export default About;
