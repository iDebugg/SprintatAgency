import React from "react";
import "../Styles/Services.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Services = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
      mirror: true,
    });
  }, []);

  return (
    <section id="Services" className="contact py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-[#373737]  text-4xl font-bold">Our Services</h2>
          <p className="text-lg text-gray-600 mt-2 text-center">
            we turn ideas into powerful digital experiences. Whether you're a{" "}
            <br />
            startup looking to build your MVP or an enterprise scaling your
            digital presence.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div
            className="bg-[#dafb18] rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow p-2"
            data-aos="fade-down"
            data-aos-delay="100"
          >
            <div className="bg-gray-100 h-full rounded-lg px-2 py-4">
              <h1 className="text-lg font-bold text-[#373737]">
                Mobile App Development
              </h1>
              <h3 className="mb-2 text-gray-600">
                Build seamless, high-performance mobile apps that users love.
              </h3>
              <h3 className="font-bold mb-2 text-[#373737]">What we offer:</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Native iOS & Android Development</li>
                <li>Cross-platform Apps (Flutter, React Native)</li>
                <li>API Integration & Backend Services</li>
                <li>App Store & Play Store Deployment</li>
                <li>Maintenance & Version Upgrades</li>
              </ul>
            </div>
          </div>

          <div
            className="bg-[#dafb18] rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow p-2"
            data-aos="fade-down"
            data-aos-delay="300"
          >
            <div className="bg-gray-100 h-full rounded-lg px-2 py-4">
              <h1 className="text-lg font-bold texttext-[#373737]">
                Web Development
              </h1>
              <h3 className="mb-2 text-gray-600">
                Fast, secure, and responsive websites built for modern business.
              </h3>
              <h3 className="font-bold mb-2 text-text-[#373737]">
                Our expertise includes:
              </h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Custom Web Applications</li>
                <li>Frontend Development (React, Vue, Angular)</li>
                <li>Backend Development (Node.js, Django, Laravel)</li>
                <li>CMS Solutions (WordPress, Webflow)</li>
                <li>E-commerce Platforms.</li>
              </ul>
            </div>
          </div>

          <div
            className="bg-[#dafb18] rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow p-2"
            data-aos="fade-down"
            data-aos-delay="500"
          >
            <div className="bg-gray-100 h-full rounded-lg px-2 py-4">
              <h1 className="text-lg font-bold text-[#373737]">UI/UX Design</h1>
              <h3 className="mb-2 text-[gray-600]">
                Design that goes beyond aesthetics — we craft experiences users
                remember.
              </h3>
              <h3 className="font-bold mb-2 text-[#373737]">
                Our design services cover:
              </h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>UX Research & Wireframing</li>
                <li>High-Fidelity UI Design</li>
                <li>Prototyping (Figma, Adobe XD)</li>
                <li>Design Systems & Brand Guidelines</li>
                <li>Usability Testing & Iteration</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
