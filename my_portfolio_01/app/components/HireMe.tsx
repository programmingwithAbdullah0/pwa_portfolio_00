"use client";
import React from "react";
import Image from "next/image";
import MyImage from "../../public/portfolio pic.png"

const HireMe: React.FC = () => {
  return (
   
   <>
    <section
      id="Hire"
      className="relative w-full min-h-screen flex flex-col items-center justify-center gap-10 overflow-hidden  py-30"
    >
    
      {/* 🔹 Title Section (Top Center) */}
      <div className="text-center mb-10 ">
        <h2 className="text-4xl md:text-5xl font-bold text-[#091057] drop-shadow-sm">
          Why <span className="text-gray-700">Hire Me?</span>
        </h2>
        <p className="text-gray-600 mt-3 max-w-2xl mx-auto text-sm md:text-base">
          Passionate about delivering high-quality, responsive, and user-friendly websites. 
          I bring creativity, precision, and modern web standards to every project I work on.
        </p>
      </div>

      {/* 🔸 Main Content Container */}
      <div className="flex flex-col-reverse lg:flex-row-reverse items-center justify-around max-w-6xl w-full gap-20">
        {/* 🧠 Right Side - Text with heading on top */}
        <div className="flex-1 text-center lg:text-left space-y-4 relative">
          {/* Same heading on right side */}
          <div className="mb-4 lg:mb-6">
            <h3 className="text-3xl font-semibold text-[#091057]">
              Why <span className="text-gray-700">Hire Me?</span>
            </h3>
          </div>

          <h4 className="text-2xl md:text-3xl font-semibold text-[#091057]">
            Turning Ideas Into Reality ✨
          </h4>
          <p className="text-gray-700 leading-relaxed text-sm md:text-base">
            I am <span className="font-semibold text-[#091057]">Abdullah</span>,
            a Agentic AI & Frontend Developer specializing in <strong>React & NextJS, Tailwind CSS, Typescript, Javascript, HTML, CSS </strong> 
            My aim is to build visually stunning, high-performance websites that provide seamless user experiences.
          </p>

          <ul className="space-y-2 text-gray-600 text-sm md:text-base mt-4">
            <li>✅ 2 years of hands-on experience in Frontend Development</li>
            <li>✅ Strong grip in React & NextJS Development</li>
            <li>✅ Currently learning Spec-Driven Development & AI-Driven Development</li>
            <li>✅ Aim to learn & master Agentic AI & Full Stack Development</li>
          </ul>

          <div className="mt-6 flex justify-center lg:justify-start gap-4">
            <a
              href="#contact"
              className="px-6 py-2 rounded-full bg-[#091057] text-white font-medium hover:bg-[#0b126f] transition-all duration-300"
            >
              Contact Me
            </a>
            <a
              href="/abdullahateeqresume.pdf"
              download
              className="px-6 py-2 rounded-full border border-[#091057] text-[#091057] font-medium hover:bg-[#091057] hover:text-white transition-all duration-300"
            >
              View Resume
            </a>
          </div>
        </div>

       {/* 🧑‍💻 Left Side - Image (crossing top circle) */}
<div className="relative mt-10 flex justify-center items-center">
        <div className="absolute   lg:w-120 lg:h-80 rounded-t-full h-80 w-80 md:w-96 md:h-96  bg-[#091057]  blur-xl rounded-full blur-[]  opacity-25 animate-pulse"></div>
    <div className="absolute bottom-[-100px] -top-20 left-10  w-[400px] h-[400px] bg-[#e3e3e3] rounded-full  blur-[130px]  opacity-30 animate-pulse"></div>
   
          <div className="bg-[#091057] lg:w-120 lg:h-80 rounded-t-full h-80 w-80 md:w-96 md:h-96   shadow-inner flex justify-center items-end overflow-hidden ">
           <div className="image  lg:absolute "> 
            <Image 
            src={MyImage}  
            alt="Huzaifa Abdulrab " 
            className="" 
            width={500}
            height={500}
            />
            </div>
          </div>
        </div>


      </div>

      {/* 💫 Bottom Quote */}
      <div className="text-center mt-16 max-w-3xl mx-auto">
        <p className="italic text-gray-600 text-sm md:text-base">
          “My interest is to build a website with best user experience and best performance”
        </p>
        <h4 className="text-[#091057] mt-4 font-semibold text-lg">
          — Abdullah
        </h4>
      </div>
    </section>
</>  );
};

export default HireMe;
