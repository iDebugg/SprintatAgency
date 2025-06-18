"use client";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const coreValues = [
  {
    title: "Client-First Mentality",
    desc: "Your goals are our blueprint. We listen closely, understand deeply, and build solutions that align with your business objectives — not just what looks good on paper",
    icon: "/client-svgrepo-com.svg",
  },
  {
    title: "Attention to Detail",
    desc: "Details make the difference. From pixel-perfect interfaces to robust backend logic, we obsess over the small things that lead to big results.",
    icon: "/attention-exclamation-notification-svgrepo-com.svg",
  },
  {
    title: "Quality Craftsmanship",
    desc: "Built to last, designed to scale. We take pride in clean code, thoughtful design, and software that’s as stable as it is stunning.",
    icon: "/quality-supervision-svgrepo-com.svg",
  },
  {
    title: "Transparent Collaboration",
    desc: "You’re always in the loop. We work with you — not just for you. Expect open communication, frequent updates, and a process that invites your feedback at every stage.",
    icon: "/collaboration-picture-visualize-person-svgrepo-com.svg",
  },
];

const industries = [
  {
    title: "E-commerce",
    desc: "From storefronts to custom platforms, we build scalable e-commerce solutions that convert visitors into loyal customers — with speed, security, and UX top of mind.",
    icon: "/dollar-circle-list-svgrepo-com.svg",
  },
  {
    title: "Blockchain",
    desc: "We develop secure, decentralized applications (dApps), smart contracts, and blockchain-integrated platforms that push the boundaries of innovation.",
    icon: "/bitcoin-svgrepo-com.svg",
  },
  {
    title: "Health & Wellness",
    desc: "HIPAA-compliant apps, wellness trackers, and digital tools that empower users to take charge of their physical and mental well-being.",
    icon: "/health-svgrepo-com.svg",
  },
  {
    title: "EdTech",
    desc: "Interactive, accessible learning platforms for schools, institutions, and course creators. We help you deliver knowledge at scale.",
    icon: "/technology-device-laptop-computer-svgrepo-com.svg",
  },
  {
    title: "SaaS & Startups",
    desc: "From MVP to full-scale product, we help SaaS founders bring ideas to life with agile development, clean design, and scalable infrastructure.",
    icon: "/startup-os-svgrepo-com.svg",
  },
  {
    title: "Finance & Accounting",
    desc: "We build secure, user-friendly financial tools — from budgeting platforms to custom dashboards — built to handle sensitive data with care.",
    icon: "/money-business-cloud-currency-finance-dollar-economy-svgrepo-com.svg",
  },
  {
    title: "Community Platforms",
    desc: "Create meaningful digital communities with social networks, messaging apps, and engagement-driven platforms that connect people.",
    icon: "/community-people-friends-group-svgrepo-com.svg",
  },
];

const ValueCard = ({ item, active, onClick }) => (
  
  <div
    onClick={onClick}
    className={`bg-transparent p-5 rounded-xl shadow-lg transition-all duration-300 cursor-pointer border hover:shadow-xl ${
      active ? "bg-[#f8f9fa]" : ""
    }`}
  >
    <div className="flex items-center gap-4">
      <img src={item.icon} alt={item.title} className="w-10 h-10" />
      <h4 className="text-lg font-semibold text-gray-800">{item.title}</h4>
    </div>
    {active && (
      <p className="mt-4 text-gray-600 text-sm transition-opacity duration-300">
        {item.desc}
      </p>
    )}
  </div>
);

export default function AboutSection() {
  const [activeCore, setActiveCore] = useState(null);
  const [activeIndustry, setActiveIndustry] = useState(null);
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  

  return (
    <section className="bg-gray-100 px-4 sm:px-8 py-20">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-[#373737]">About Us</h2>
        <p className="mt-4 max-w-3xl mx-auto text-gray-600">
          At Sprintat, we’re a team of designers, developers, and
          problem-solvers passionate about transforming ideas into innovative
          software.
        </p>
      </div>

      {/* Desktop view */}
      <div className="hidden md:grid grid-cols-2 gap-6 max-w-6xl mx-auto">
        <div>
          <h3 className="text-2xl font-bold mb-4" data-aos="fade-up">Our Core Values</h3>
          <div className="space-y-4" data-aos="fade-up">
            {coreValues.map((item, i) => (
              <ValueCard
                key={i}
                item={item}
                active={activeCore === i}
                onClick={() => setActiveCore(activeCore === i ? null : i)}
              />
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-2xl font-bold mb-4" data-aos="fade-up">Industries We Serve</h3>
          <div className="space-y-4" data-aos="fade-up">
            {industries.map((item, i) => (
              <ValueCard
                key={i}
                item={item}
                active={activeIndustry === i}
                onClick={() =>
                  setActiveIndustry(activeIndustry === i ? null : i)
                }
              />
            ))}
          </div>
        </div>
      </div>

  
      <div className="block md:hidden">
        <Swiper
          modules={[Autoplay, Pagination]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000 }}
          spaceBetween={20}
          slidesPerView={1}
        >
          <SwiperSlide>
            <div>
              <h3 className="text-xl font-bold mb-3">Our Core Values</h3>
              {coreValues.map((item, i) => (
                <ValueCard
                  key={i}
                  item={item}
                  active={activeCore === i}
                  onClick={() => setActiveCore(activeCore === i ? null : i)}
                />
              ))}
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <h3 className="text-xl font-bold mb-3 ">Industries We Serve</h3>
              {industries.map((item, i) => (
                <ValueCard
                  key={i}
                  item={item}
                  active={activeIndustry === i}
                  onClick={() =>
                    setActiveIndustry(activeIndustry === i ? null : i)
                  }
                />
              ))}
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}
