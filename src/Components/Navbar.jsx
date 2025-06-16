import React, { useState } from "react";
import "../Styles/Navbar.css";
import underlineImg from "../assets/Wheelbarrow.png";
import AnchorLink from "react-anchor-link-smooth-scroll";
import TizmineLogo from "../assets/Group 11.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [menu, setMenu] = useState("home");

  return (
    <nav className="bg-[#DAFB18] text-white px-5 py-3 fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center">
        <img src={TizmineLogo} alt="" className="tizminelogo" />

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="sm:hidden text-[#373737] hover:text-white"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        <div className="hidden sm:flex space-x-6 text-[#373737]">
          <a href="#" className="hover:text-white">
            <AnchorLink className="anchor-link" href="#home">
              <p onClick={() => setMenu("home")}>Home</p>
            </AnchorLink>
            {menu === "home" ? (
              <div className="border-b-2 border-[#373737] w-full mt-1"></div>
            ) : null}
          </a>
          <a href="#" className="hover:text-white">
            <AnchorLink className="anchor-link" offset={50} href="#about">
              <p onClick={() => setMenu("about")}>About Us</p>
            </AnchorLink>
            {menu === "about" ? (
              <div className="border-b-2 border-[#373737] w-full mt-1"></div>
            ) : null}
          </a>
          <a href="#" className="hover:text-white">
            <AnchorLink className="anchor-link" offset={50} href="#Services">
              <p onClick={() => setMenu("Services")}>Our Services</p>
            </AnchorLink>
            {menu === "Services" ? (
              <div className="border-b-2 border-[#373737] w-full mt-1"></div>
            ) : null}
          </a>
          <a href="#" className="hover:text-white">
            <AnchorLink className="anchor-link" offset={50} href="#Portfolio">
              <p onClick={() => setMenu("Portfolio")}>Our Approach</p>
            </AnchorLink>
            {menu === "Portfolio" ? (
              <div className="border-b-2 border-[#373737] w-full mt-1"></div>
            ) : null}
          </a>
          <a href="#" className="hover:text-white">
            <AnchorLink className="anchor-link" offset={50} href="#PortfolioSection">
              <p onClick={() => setMenu("PortfolioSection")}>Our Portfolio</p>
            </AnchorLink>
            {menu === "PortfolioSection" ? (
              <div className="border-b-2 border-[#373737] w-full mt-1"></div>
            ) : null}
          </a>
          <a href="#" className="hover:text-white ">
            <AnchorLink className="anchor-link" offset={50} href="#contact">
              <p onClick={() => setMenu("Contact")}>Contact</p>
            </AnchorLink>
            {menu === "Contact" ? (
              <div className="border-b-2 border-[#373737] w-full mt-1 "></div>
            ) : null}
          </a>
        </div>

        <a
          href="#"
          className="hidden sm:inline-block text-[#dafb18] hover:text-[#ffff] px-4 py-2 rounded-full shadow-lg connectwithMe"
        >
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            Contact Us{" "}
          </AnchorLink>
        </a>
      </div>

      {isOpen && (
        <div className="sm:hidden">
          <a
            href="#"
            className="block text-left mt-2 pb-3 hover:bg-orange-600"
            onClick={() => {
              setMenu("home");
              setIsOpen(false);
            }}
          >
            <AnchorLink className="anchor-link" href="#home">
              Home
            </AnchorLink>
          </a>
          <a
            href="#"
            className="block text-left pb-3 hover:bg-orange-600"
            onClick={() => {
              setMenu("about");
              setIsOpen(false);
            }}
          >
            <AnchorLink className="anchor-link" offset={50} href="#about">
              About Us
            </AnchorLink>
          </a>
          <a
            href="#"
            className="block text-left pb-3 hover:bg-orange-600"
            onClick={() => {
              setMenu("Services");
              setIsOpen(false);
            }}
          >
            <AnchorLink className="anchor-link" offset={50} href="#Services">
              Our Services
            </AnchorLink>
          </a>
          <a
            href="#"
            className="block text-left pb-3 hover:bg-orange-600"
            onClick={() => {
              setMenu("Portfolio");
              setIsOpen(false);
            }}
          >
            <AnchorLink className="anchor-link" offset={50} href="#Portfolio">
              Gallery
            </AnchorLink>
          </a>
          <a
            href="#"
            className="block text-left pb-3 hover:bg-orange-600"
            onClick={() => {
              setMenu("Contact");
              setIsOpen(false);
            }}
          >
            <AnchorLink className="anchor-link" offset={50} href="#contact">
              Contact
            </AnchorLink>
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
