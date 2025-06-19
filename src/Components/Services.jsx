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
      "Frontend Development (React, Vue, Angular)"
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
      "Usability Testing & Iteration"
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
    <section id="Services" className="about bg-gray-100 pr-3 pl-3 sm:pr-4 sm:pl-4 md:pr-20 md:pl-20clg:pr-20 lg:pl-20 pt-10">
      <div className="text-center mb-20 ">
        <h2 className="text-[#373737]  text-4xl font-bold">Our Services</h2>
        <p className="text-lg text-gray-600 mt-2 text-center">
          we turn ideas into powerful digital experiences. Whether you're a{" "}
          <br />
          startup looking to build your MVP or an enterprise scaling your
          digital presence.
        </p>
      </div>
      <div className="relative z-10" data-aos="fade-up">
        <div className=" mx-auto relative">
          {services.map((service, index) => {
            const isOpen = activeId === service.id;
            const isAboveOpen = activeId && service.id > activeId;

            return (
              <div
                key={service.id}
                onClick={() => handleClick(service.id)}
                className={`relative z-[${
                  50 - index
                }] transition-all duration-500 ease-in-out cursor-pointer
              ${isOpen ? "mb-2" : "-mt-20"}
              ${isAboveOpen ? "translate-y-20" : ""}
            `}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="bg-white shadow-xl border rounded-2xl overflow-hidden">
                  <div className="flex items-center gap-4 px-6 py-4 bg-gradient-to-r from-[#00c9ff] to-[#92fe9d]">
                    <div className="bg-white px-3 py-1 text-sm font-semibold rounded-full shadow text-gray-800">
                      [ {service.week} ]
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 ">
                      {service.title}
                    </h3>
                  </div>

                  
                  <div
                    className={`flex flex-col lg:flex-row transition-all duration-500 ${
                      isOpen ? "max-h-[1000px]" : "max-h-[150px]"
                    } overflow-hidden`}
                  >
           
                    <div className="lg:w-1/2 w-full">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover"
                      />
                    </div>

                  
                    <div className={`p-6 lg:w-1/2 bg-white`}>
                    <h3 className="text-xl font-bold text-gray-800 mb-3 hidden md:block">
                      {service.title}
                    </h3>
                      <p className="text-gray-700 mb-4">{service.desc}</p>

                      {isOpen && (
                        
                        <ul className="list-disc pl-5 text-gray-600 space-y-1 transition-opacity duration-300 opacity-100">
                          {service.details.map((item, i) => (
                            <li key={i}>{item}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
