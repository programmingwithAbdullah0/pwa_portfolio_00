"use client";
import React, { useState } from "react";
import Image from "next/image";
import MyImage from "../../public/abdullahateeq.png";
import Logo from "../../public/PWA_logo.png";
import ActionButtons from "./Button";

const ScreenSection = () => {
  const [isOpen, setIsOpen] = useState(false);

  const leftLinks = [
    { name: "About", href: "#about" },
    { name: "Why Hire Me", href: "#Hire" },
    { name: "Skills", href: "#skills" },
    // { name: "Services", href: "#services" },
  ];

  const rightLinks = [
    { name: "Project", href: "#project" },
    // { name: "Idea", href: "#idea" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <section
    id="about" className="relative w-full  overflow-hidden min-h-screen flex flex-col items-center justify-center">
      {/* 🌌 Background Effects */}
      <div className="absolute -top-32 -left-40 w-[450px] h-[450px] bg-[#091057] rounded-full blur-[130px] opacity-25 animate-pulse"></div>
      <div className="absolute bottom-[-100px] right-[-100px] w-[400px] h-[400px] bg-[#e3e3e3] rounded-full blur-[130px] opacity-30 animate-pulse"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#091057] rounded-full blur-[160px] opacity-20 animate-pulse"></div>

      {/* ✅ Navbar */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 bg-[#e3e3e3]/20 backdrop-blur-lg flex justify-between items-center w-[90%] max-w-6xl h-16 rounded-full px-6 shadow-lg z-50 border border-[#e3e3e3]/30">
        {/* Left Menu */}
        <ul className="hidden md:flex justify-center items-center gap-10 text-[16px] font-medium">
          {leftLinks.map((item, index) => (
            <li key={index} className="relative group">
              <a
                href={item.href}
                className="relative cursor-pointer transition-colors duration-300 ease-in-out hover:text-[#091057] px-4 py-2 rounded-full"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#091057] transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
          ))}
        </ul>

        {/* Logo */}
        <div className="flex justify-center items-center">
          <Image 
          src={Logo} 
          alt="HA logo" 
          width={60} 
          height={60} 
          className="rounded-full"
          />
        </div>

        {/* Right Menu */}
        <ul className="hidden md:flex justify-center items-center gap-10 text-[16px] font-medium">
          {rightLinks.map((item, index) => (
            <li key={index} className="relative group">
              <a
                href={item.href}
                className="relative cursor-pointer transition-colors duration-300 ease-in-out hover:text-[#091057] px-4 py-2 rounded-full"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#091057] transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
          ))}
        </ul>

        {/* Hamburger Menu */}
        <button
          className="md:hidden flex flex-col gap-1.5 absolute right-6 top-1/2 -translate-y-1/2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-0.5 bg-[#091057] transition-all duration-300 ${
              isOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-[#091057] transition-all duration-300 ${
              isOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-[#091057] transition-all duration-300 ${
              isOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>

        {/* ✅ Mobile Menu (Animated Drop) */}
        <div
          className={`absolute top-20 left-0 w-[70%] sm:w-[50%] bg-[#e3e3e3]/80 backdrop-blur-lg flex flex-col gap-4 p-6 text-center rounded-2xl shadow-lg z-60 border border-[#e3e3e3]/20 transition-all duration-500 ease-in-out ${
            isOpen ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
          }`}
        >
          {[...leftLinks, ...rightLinks].map((item, index) => (
            <a
              key={`${item.name}-${isOpen}`} // Re-render trigger
              href={item.href}
              className={`relative text-white bg-[#091057]/70 hover:bg-[#091057] py-2 rounded-full cursor-pointer transition-all duration-300 drop-item-${index}`}
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </a>
          ))}
        </div>
      </nav>

      {/* ✅ Hero Section */}
      <section
        id="home"
        className="flex flex-col items-center justify-center text-center px-4 mt-40 relative"
      >
        <button className="border border-[#091057] w-20 rounded-full py-1 text-[#091057]">
          Hello
        </button>
        <h1 className="text-gray-600 mt-2 text-2xl sm:text-3xl md:text-4xl font-semibold">
          I&apos;m <span className="text-[#091057] text-shadow-lg">Abdullah Ateeq</span>
        </h1>

        <div className="skills lg:flex  lg:flex-row gap-4 lg:gap-20 text-shadow-2xs justify-center mt-3 lg:ml-4">
          <div className="lg:text-4xl text-2xl font-bold text-[#091057]">
            Frontend Developer
          </div>
          <hr   className="lg:hidden block text-[#787878] pt-2"/>
          <div className="lg:text-4xl text-2xl font-bold text-[#091057] lg:ml-10">
            Agentic AI Developer
          </div>
        </div>

        {/* ✅ Image */}
        <div className="relative mt-10 flex justify-center items-center">
          <div className="bg-[#091057] lg:w-160 h-80 w-80 md:w-96 md:h-96 lg:rounded-t-full lg:rounded-b-none rounded-full flex justify-center items-end overflow-hidden shadow-lg">
            <Image src={MyImage} alt="Huzaifa Abdulrab" className="lg:absolute" />
          </div>
        </div>

        {/* ✅ Bottom Text */}
       <div
  className="
    w-screen bottom-0 py-3 px-6 sm:px-10
    flex flex-col lg:flex-row justify-between items-center
    lg:absolute md:static
  "
>
  {/* Left Section */}
  <div className="text-left max-w-lg mb-4 lg:mb-0 w-70">
    <p className="text-[#091057] text-sm sm:text-base text-center lg:text-start font-medium italic">
      I’m a frontend developer skilled in HTML, CSS, JavaScript,
      TypeScript, Next.js, Tailwind CSS, n8n, and Agentic AI automation.
    </p>
  </div>

  {/* Right Section */}
  <div className="text-center lg:text-right">
    <div className="flex justify-center lg:justify-end gap-1 text-orange-500 text-xl mb-1">
      <span>★</span>
      <span>★</span>
      <span>★</span>
      <span>★</span>
      <span>★</span>
    </div>
    <h3 className="text-[#091057] text-lg sm:text-xl font-semibold">
      1 Years
    </h3>
    <p className="text-gray-500 text-sm">Experience</p>
  </div>
</div>

        <ActionButtons />
      </section>
            {/* <div className="h-[6px] w-full bg-gradient-to-r from-[#091057] via-[#3b54b8] to-[#091057] rounded-full shadow-[0_4px_20px_#091057]" />
<div className="w-full overflow-hidden">
        <svg
          viewBox="0 0 1440 120"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
        >
          <path
            fill="#091057"
            fillOpacity="1"
            d="M0,32L60,48C120,64,240,96,360,106.7C480,117,600,107,720,96C840,85,960,75,1080,80C1200,85,1320,107,1380,117.3L1440,128L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
          ></path>
        </svg>
      </div> */}
    </section>
  );
};

export default ScreenSection;
