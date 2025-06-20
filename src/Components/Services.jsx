import React, { useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const services = [
  {
    id: 1,
    title: "App Development",
    week: "01",
    desc: "Build seamless, high-performance mobile apps that users love.",
    image: "../assets/Union-1.svg",
    details: [
      "Native iOS & Android Development",
      "API Integration & Backend Services",
      "App Store & Play Store Deployment",
      "Maintenance & Version Upgrades",
      "Cross-platform Apps (Flutter, React Native)",
    ],
  },
  {
    id: 2,
    title: "Web Development",
    week: "02",
    desc: "Fast, secure, and responsive websites built for modern business.",
    image: "/BeFunky-design (2).png",
    details: [
      "Custom Web Applications",
      "E-commerce Platforms.",
      "CMS Solutions (WordPress, Webflow)",
      "Backend Development (Node.js, Django, Laravel)",
      "Frontend Development (React, Vue, Angular)",
    ],
  },
  {
    id: 3,
    title: "UI/UX Design",
    week: "03",
    desc: "Design that goes beyond aesthetics — we craft experiences users remember.",
    image: "/BeFunky-design 2.png",
    details: [
      "UX Research & Wireframing",
      "High-Fidelity UI Design",
      "Prototyping (Figma, Adobe XD)",
      "Design Systems & Brand Guidelines",
      "Usability Testing & Iteration",
    ],
  },
  {
    id: 4,
    title: "Graphic Design",
    week: "04",
    desc: "Design that speaks for your brand. We craft eye pleasing designs",
    image: "/BeFunky-design (7).png",
    details: [
      "High end designs",
      "Prortyping (Canva)",
      "Performance monitoring",
      "Post-launch support",
    ],
  },
];

const Services = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);
  const [activeId, setActiveId] = useState(null);

  const handleClick = (id) => {
    setActiveId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      id="Services"
      className="about bg-gray-100 pr-3 pl-3 sm:pr-4 sm:pl-4 md:pr-20 md:pl-20clg:pr-20 lg:pl-20 pt-10"
    >
      <div className="text-center mb-20 ">
        <h2 className="text-[#373737]  text-4xl font-bold">Our Services</h2>
        <p className="text-lg text-gray-600 mt-2 text-center">
          We turn ideas into powerful digital experiences. Whether you're a{" "}
          <br />
          startup looking to build your MVP or an enterprise scaling your
          digital presence.
        </p>
      </div>
      <div
        className="rounded-[40px] border border-gray-200 p-8 md:p-14 relative overflow-hidden bg-white mb-5"
        data-aos="fade-up"
      >
        <div className="grid md:grid-cols-2 gap-10 ">
          <div className="relative w-full aspect-video bg-white rounded-xl overflow-hidden shadow-lg">
            <img
              src="/mobile app.jpg"
              alt="New Project Screenshot"
              className="w-full h-full object-cover"
            />
          </div>

          <div>
            <h2 className="text-2xl md:text-4xl font-bold text-[#373737] mb-3">
              Mobile App Development
            </h2>

            <h1 className="italic text-gray-700 mb-3 font-light">
              Build seamless, high-performance mobile apps that users love.
            </h1>
            <ul className="list-disc pl-6 space-y-1 text-gray-600 font-light">
              <li>Frontend & backend development</li>
              <li>Agile sprints & feature releases</li>
              <li>API integrations</li>
              <li>Testing & QA</li>
            </ul>
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
              src="/web development.jpg"
              alt="New Project Screenshot"
              className="w-full h-full object-cover"
            />
          </div>

          <div>
            <h2 className="text-2xl md:text-4xl font-bold text-[#373737] mb-3">
              Web Development
            </h2>

            <h1 className="italic text-gray-700 mb-3 font-light">
              Fast, secure, and responsive websites built for modern business.
            </h1>
            <ul className="list-disc pl-6 space-y-1 text-gray-600 font-light">
              <li>Custom Web Applications</li>
              <li>Frontend Development (React, Vue, Angular)</li>
              <li>Backend Development (Node.js, Django, Laravel)</li>
              <li>CMS Solutions (WordPress, Webflow)</li>
              <li>E-commerce Platforms.</li>
            </ul>
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
              src="/ui:ux.jpeg"
              alt="New Project Screenshot"
              className="w-full h-full object-cover"
            />
          </div>

          <div>
            <h2 className="text-2xl md:text-4xl font-bold text-[#373737] mb-3">
              UI/UX Design
            </h2>

            <h1 className="italic text-gray-700 mb-3 font-light">
              Design that goes beyond aesthetics — we craft experiences users
              remember.
            </h1>
            <ul className="list-disc pl-6 space-y-1 text-gray-600 font-light">
              <li>UX Research & Wireframing</li>
              <li>High-Fidelity UI Design</li>
              <li>Prototyping (Figma, Adobe XD)</li>
              <li>Design Systems & Brand Guidelines</li>
              <li>Usability Testing & Iteration</li>
            </ul>
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
              src="/graphicdesign.webp"
              alt="New Project Screenshot"
              className="w-full h-full object-cover"
            />
          </div>

          <div>
            <h2 className="text-2xl md:text-4xl font-bold text-[#373737] mb-3">
              Graphic Design
            </h2>

            <h1 className="italic text-gray-700 mb-3 font-light">
            Visual storytelling that captivates, communicates, and converts.
            </h1>
            <ul className="list-disc pl-6 space-y-1 text-gray-600 font-light">
              <li>Brand Identity & Logo Design</li>
              <li>Marketing Collateral (Flyers, Posters, Banners)</li>
              <li>Social Media Graphics</li>
              <li>Infographics & Data Visualization</li>
              <li>Packaging & Print Design</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
