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
      className="about bg-gray-100 pr-3 pl-3 sm:pr-4 sm:pl-4 md:pr-20 md:pl-20clg:pr-20 lg:pl-20 pt-10"
    >
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-[#373737]">About Us</h2>
        <p className="mt-4 max-w-5xl mx-auto text-gray-600">
          Ready to transform your ideas into groundbreaking software solutions?
          Sprintat Agency is your creative digital partner! We're a team of
          passionate designers, developers, and problem-solvers, dedicated to
          crafting innovative web and mobile solutions tailored for modern
          businesses. From e-commerce platforms to blockchain applications and
          everything in between, we offer comprehensive services, including web
          design, software development, mobile app creation, and technology
          consulting. We focus on client-first strategies, attention to detail,
          quality craftsmanship, and transparent collaboration, ensuring your
          vision becomes a reality. Let's build something amazing together!
        </p>
      </div>

      <div className="text-center mb-5">
        <h1 className="text-2xl md:text-3xl font-light text-[#373737] italic">
          Our Core Values
        </h1>
      </div>
      <div
        className="rounded-[40px] border border-gray-200 p-8 md:p-14 relative overflow-hidden bg-white mb-5"
        data-aos="fade-up"
      >
        <div className="grid md:grid-cols-2 gap-10 ">
          <div className="relative w-full aspect-video bg-white rounded-xl overflow-hidden shadow-lg">
            <img
              src="/clientfirst.webp"
              alt="New Project Screenshot"
              className="w-full h-full object-cover"
            />
          </div>

          <div>
            <h2 className="text-2xl md:text-4xl font-bold text-[#373737] mb-6">
              Client-First Mentality
            </h2>
            <p className="text-gray-600 mb-4 font-light">
              Your goals are our blueprint. We listen closely, understand
              deeply, and build solutions that align with your business
              objectives — not just what looks good on paper.
            </p>
          </div>
        </div>
      </div>
      <div
        className="rounded-[40px] border border-gray-200 p-8 md:p-14 relative overflow-hidden bg-white mb-5"
        data-aos="fade-up"
      >
        <div className="grid md:grid-cols-2 gap-10 ">
          <div className="relative w-full aspect-video bg-white rounded-xl overflow-hidden shadow-lg">
            <img
              src="/attentiom.webp"
              alt="New Project Screenshot"
              className="w-full h-full object-cover"
            />
          </div>

          <div>
            <h2 className="text-2xl md:text-4xl font-bold text-[#373737] mb-6">
              Attention to Details
            </h2>
            <p className="text-gray-600 mb-4 font-light">
              Details make the difference. From pixel-perfect interfaces to
              robust backend logic, we obsess over the small things that lead to
              big results.
            </p>
          </div>
        </div>
      </div>
      <div
        className="rounded-[40px] border border-gray-200 p-8 md:p-14 relative overflow-hidden bg-white mb-5"
        data-aos="fade-up"
      >
        <div className="grid md:grid-cols-2 gap-10 ">
          <div className="relative w-full aspect-video bg-white rounded-xl overflow-hidden shadow-lg">
            <img
              src="/craftmanship.avif"
              alt="New Project Screenshot"
              className="w-full h-full object-cover"
            />
          </div>

          <div>
            <h2 className="text-2xl md:text-4xl font-bold text-[#373737] mb-6">
              Quality Craftsmanship
            </h2>
            <p className="text-gray-600 mb-4 font-light">
              Built to last, designed to scale. We take pride in clean code,
              thoughtful design, and software that’s as stable as it is
              stunning.
            </p>
          </div>
        </div>
      </div>
      <div
        className="rounded-[40px] border border-gray-200 p-8 md:p-14 relative overflow-hidden bg-white"
        data-aos="fade-up"
      >
        <div className="grid md:grid-cols-2 gap-10 ">
          <div className="relative w-full aspect-video bg-white rounded-xl overflow-hidden shadow-lg">
            <img
              src="/collaboration.png"
              alt="New Project Screenshot"
              className="w-full h-full object-cover"
            />
          </div>

          <div>
            <h2 className="text-2xl md:text-4xl font-bold text-[#373737] mb-6">
              Transparent Collaboration
            </h2>
            <p className="text-gray-600 mb-4 font-light">
              You’re always in the loop. We work with you — not just for you.
              Expect open communication, frequent updates, and a process that
              invites your feedback at every stage.
            </p>
          </div>
        </div>
      </div>

      <div className="text-center mb-5 mt-10">
        <h1 className="text-2xl md:text-3xl font-light text-[#373737] italic">
          Industries We Serve
        </h1>
      </div>
      <div
        className="rounded-[40px] border border-gray-200 p-8 md:p-14 relative overflow-hidden bg-white mb-5"
        data-aos="fade-up"
      >
        <div className="grid md:grid-cols-2 gap-10 ">
          <div className="relative w-full aspect-video bg-white rounded-xl overflow-hidden shadow-lg">
            <img
              src="/ecommerce.jpg"
              alt="New Project Screenshot"
              className="w-full h-full object-cover"
            />
          </div>

          <div>
            <h2 className="text-2xl md:text-4xl font-bold text-[#373737] mb-6">
              ⁠E-commerce
            </h2>
            <p className="text-gray-600 mb-4 font-light">
              From storefronts to custom platforms, we build scalable e-commerce
              solutions that convert visitors into loyal customers — with speed,
              security, and UX top of mind.
            </p>
          </div>
        </div>
      </div>
      <div
        className="rounded-[40px] border border-gray-200 p-8 md:p-14 relative overflow-hidden bg-white mb-5"
        data-aos="fade-up"
      >
        <div className="grid md:grid-cols-2 gap-10 ">
          <div className="relative w-full aspect-video bg-white rounded-xl overflow-hidden shadow-lg">
            <img
              src="/blockchain.webp"
              alt="New Project Screenshot"
              className="w-full h-full object-cover"
            />
          </div>

          <div>
            <h2 className="text-2xl md:text-4xl font-bold text-[#373737] mb-6">
              Blockchain
            </h2>
            <p className="text-gray-600 mb-4 font-light">
              We develop secure, decentralized applications (dApps), smart
              contracts, and blockchain-integrated platforms that push the
              boundaries of innovation.
            </p>
          </div>
        </div>
      </div>
      <div
        className="rounded-[40px] border border-gray-200 p-8 md:p-14 relative overflow-hidden bg-white mb-5"
        data-aos="fade-up"
      >
        <div className="grid md:grid-cols-2 gap-10 ">
          <div className="relative w-full aspect-video bg-white rounded-xl overflow-hidden shadow-lg">
            <img
              src="/health.jpg"
              alt="New Project Screenshot"
              className="w-full h-full object-cover"
            />
          </div>

          <div>
            <h2 className="text-2xl md:text-4xl font-bold text-[#373737] mb-6">
              Health & Wellness
            </h2>
            <p className="text-gray-600 mb-4 font-light">
              HIPAA-compliant apps, wellness trackers, and digital tools that
              empower users to take charge of their physical and mental
              well-being.
            </p>
          </div>
        </div>
      </div>
      <div
        className="rounded-[40px] border border-gray-200 p-8 md:p-14 relative overflow-hidden bg-white mb-5"
        data-aos="fade-up"
      >
        <div className="grid md:grid-cols-2 gap-10 ">
          <div className="relative w-full aspect-video bg-white rounded-xl overflow-hidden shadow-lg">
            <img
              src="/edtech.jpg"
              alt="New Project Screenshot"
              className="w-full h-full object-cover"
            />
          </div>

          <div>
            <h2 className="text-2xl md:text-4xl font-bold text-[#373737] mb-6">
              EdTech
            </h2>
            <p className="text-gray-600 mb-4 font-light">
              Interactive, accessible learning platforms for schools,
              institutions, and course creators. We help you deliver knowledge
              at scale.
            </p>
          </div>
        </div>
      </div>
      <div
        className="rounded-[40px] border border-gray-200 p-8 md:p-14 relative overflow-hidden bg-white mb-5"
        data-aos="fade-up"
      >
        <div className="grid md:grid-cols-2 gap-10 ">
          <div className="relative w-full aspect-video bg-white rounded-xl overflow-hidden shadow-lg">
            <img
              src="/saasstartups.jpeg"
              alt="New Project Screenshot"
              className="w-full h-full object-cover"
            />
          </div>

          <div>
            <h2 className="text-2xl md:text-4xl font-bold text-[#373737] mb-6">
              SaaS & Startups
            </h2>
            <p className="text-gray-600 mb-4 font-light">
              From MVP to full-scale product, we help SaaS founders bring ideas
              to life with agile development, clean design, and scalable
              infrastructure.
            </p>
          </div>
        </div>
      </div>
      <div
        className="rounded-[40px] border border-gray-200 p-8 md:p-14 relative overflow-hidden bg-white mb-5"
        data-aos="fade-up"
      >
        <div className="grid md:grid-cols-2 gap-10 ">
          <div className="relative w-full aspect-video bg-white rounded-xl overflow-hidden shadow-lg">
            <img
              src="/finance.png"
              alt="New Project Screenshot"
              className="w-full h-full object-cover"
            />
          </div>

          <div>
            <h2 className="text-2xl md:text-4xl font-bold text-[#373737] mb-6">
              ⁠Finance & Accounting
            </h2>
            <p className="text-gray-600 mb-4 font-light">
              We build secure, user-friendly financial tools — from budgeting
              platforms to custom dashboards — built to handle sensitive data
              with care.
            </p>
          </div>
        </div>
      </div>
      <div
        className="rounded-[40px] border border-gray-200 p-8 md:p-14 relative overflow-hidden bg-white"
        data-aos="fade-up"
      >
        <div className="grid md:grid-cols-2 gap-10 ">
          <div className="relative w-full aspect-video bg-white rounded-xl overflow-hidden shadow-lg">
            <img
              src="/community.webp"
              alt="New Project Screenshot"
              className="w-full h-full object-cover"
            />
          </div>

          <div>
            <h2 className="text-2xl md:text-4xl font-bold text-[#373737] mb-6">
              Social & Community Platforms
            </h2>
            <p className="text-gray-600 mb-4 font-light">
              Create meaningful digital communities with social networks,
              messaging apps, and engagement-driven platforms that connect
              people.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
