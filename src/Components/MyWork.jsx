import React from "react";
import "../Styles/MyWork.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const MyWork = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
      mirror: true,
    });
  }, []);

  return (
    <section id="Portfolio" className="contact py-12 bg-gray-100 pb-10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-[#373737] text-4xl font-bold">Our Approach</h2>
          <p className="text-lg text-gray-600 mt-2">
            At Sprintat, we follow a structured, client-first approach to ensure{" "}
            <br />
            every project is delivered with clarity, quality, and impact.
          </p>
        </div>

        <div className="hidden md:flex">
          <div
            className="bg-[#373737]  py-10 px-4 rounded-3xl flex-1"
            data-aos="fade-up"
          >
            <div className="text-left">
              <h1 className="font-bold text-white">Discovery & Strategy</h1>
              <h1 className="text-sm mb-1 text-gray-100 ">
                We begin by understanding your goals, users, and challenges.
              </h1>
              <ul className="list-disc pl-6 space-y-1 text-gray-100 text-sm">
                <li>Business & user research</li>
                <li>Competitor analysis</li>
                <li>Technology recommendations</li>
                <li>Project roadmap</li>
              </ul>
            </div>
          </div>
          <div className=" py-10 px-4 rounded-3xl flex-1" data-aos="fade-down">
            <div className="text-left">
              <h1 className="font-bold">UI/UX Design</h1>
              <h1 className="text-sm mb-1">
                We translate insights into wireframes and polished interfaces.
              </h1>
              <ul className="list-disc pl-6 space-y-1 text-gray-600 text-sm">
                <li>User flows & wireframing</li>
                <li>Interactive prototypes</li>
                <li>Visual design (mobile, web)</li>
                <li>Design systems & accessibility</li>
              </ul>
            </div>
          </div>
          <div
            className="bg-[#373737]  py-10 px-4 rounded-3xl flex-1"
            data-aos="fade-up"
          >
            <div className="text-left">
              <h1 className="font-bold text-white">Development</h1>
              <h1 className="text-sm mb-1 text-gray-100">
                Using modern, scalable tech, we bring your product to life.
              </h1>
              <ul className="list-disc pl-6 space-y-1 text-gray-100 text-sm">
                <li>Frontend & backend development</li>
                <li>Agile sprints & feature releases</li>
                <li>API integrations</li>
                <li>Testing & QA</li>
              </ul>
            </div>
          </div>
          <div className=" py-10 px-4 rounded-3xl flex-1" data-aos="fade-down">
            <div className="text-left">
              <h1 className="font-bold">Testing & Quality Assurance</h1>
              <h1 className="text-sm mb-1">
                Before launch, we rigorously test across devices and browsers.
              </h1>
              <ul className="list-disc pl-6 space-y-1 text-gray-600 text-sm">
                <li>Manual & automated testing</li>
                <li>Performance optimization</li>
                <li>Bug fixing & code review</li>
                <li>Security checks</li>
              </ul>
            </div>
          </div>
          <div
            className="bg-[#373737]  py-10 px-4 rounded-3xl flex-1"
            data-aos="fade-up"
          >
            <div className="text-left">
              <h1 className="font-bold text-white">Launch & Beyond</h1>
              <h1 className="text-sm mb-1 text-gray-100">
                We don’t just deliver — we help you scale.
              </h1>
              <ul className="list-disc pl-6 space-y-1 text-gray-100 text-sm">
                <li>Deployment & publishing</li>
                <li>Post-launch monitoring</li>
                <li>Maintenance & support plans</li>
                <li>Ongoing feature updates</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex overflow-x-auto space-x-4 snap-x snap-mandatory md:hidden px-4" data-aos="fade-down" data-aos-delay="100">
          <div className="bg-[#373737] flex-shrink-0 snap-start border-2 border-red/10 py-10 px-6 rounded-3xl h-80 w-[75%]">
            <div className="text-left">
              <h1 className="font-bold text-white">Discovery & Strategy</h1>
              <h1 className="text-sm mb-1 text-gray-100 ">
                We begin by understanding your goals, users, and challenges.
              </h1>
              <ul className="list-disc pl-6 space-y-1 text-gray-100 text-sm">
                <li>Business & user research</li>
                <li>Competitor analysis</li>
                <li>Technology recommendations</li>
                <li>Project roadmap</li>
              </ul>
            </div>
          </div>

          <div className="communityCardHub flex-shrink-0 snap-start border-2 border-white/10 py-10 px-6 rounded-3xl h-80 w-[75%]">
            <div className="text-left">
              <h1 className="font-bold">UI/UX Design</h1>
              <h1 className="text-sm mb-1">
                We translate insights into wireframes and polished interfaces.
              </h1>
              <ul className="list-disc pl-6 space-y-1 text-gray-600 text-sm">
                <li>User flows & wireframing</li>
                <li>Interactive prototypes</li>
                <li>Visual design (mobile, web)</li>
                <li>Design systems & accessibility</li>
              </ul>
            </div>
          </div>

          <div className="bg-[#373737] flex-shrink-0 snap-start border-2 border-red/10 py-10 px-6 rounded-3xl h-80 w-[75%]">
            <div className="text-left">
              <h1 className="font-bold text-white">Development</h1>
              <h1 className="text-sm mb-1 text-gray-100">
                Using modern, scalable tech, we bring your product to life.
              </h1>
              <ul className="list-disc pl-6 space-y-1 text-gray-100 text-sm">
                <li>Frontend & backend development</li>
                <li>Agile sprints & feature releases</li>
                <li>API integrations</li>
                <li>Testing & QA</li>
              </ul>
            </div>
          </div>
          <div className="communityCardHub flex-shrink-0 snap-start border-2 border-white/10 py-10 px-6 rounded-3xl h-80 w-[75%]">
            <div className="text-left">
              <h1 className="font-bold">Testing & Quality Assurance</h1>
              <h1 className="text-sm mb-1">
                Before launch, we rigorously test across devices and browsers.
              </h1>
              <ul className="list-disc pl-6 space-y-1 text-gray-600 text-sm">
                <li>Manual & automated testing</li>
                <li>Performance optimization</li>
                <li>Bug fixing & code review</li>
                <li>Security checks</li>
              </ul>
            </div>
          </div>
          <div className="bg-[#373737] flex-shrink-0 snap-start border-2 border-white/10 py-10 px-6 rounded-3xl h-80 w-[75%]">
            <div className="text-left">
              <h1 className="font-bold text-white">Launch & Beyond</h1>
              <h1 className="text-sm mb-1 text-gray-100">
                We don’t just deliver — we help you scale.
              </h1>
              <ul className="list-disc pl-6 space-y-1 text-gray-100 text-sm">
                <li>Deployment & publishing</li>
                <li>Post-launch monitoring</li>
                <li>Maintenance & support plans</li>
                <li>Ongoing feature updates</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyWork;
