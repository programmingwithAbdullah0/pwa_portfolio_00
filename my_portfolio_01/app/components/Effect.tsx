"use client";
import React from "react";

const BackgroundEffects = () => {
  return (
    <div className="absolute inset-0 overflow-hidden -z-10">
      {/* 🔹 Blue Center Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-[#091057]/40 blur-[150px]"></div>

      {/* 🔹 Soft Gray Mist */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-[#e3e3e3]/30 rounded-full blur-[200px]"></div>

      {/* 🔹 Floating Pulse Light */}
      <div className="absolute bottom-[10%] right-[20%] w-72 h-72 bg-[#091057]/20 rounded-full blur-[120px] animate-pulse"></div>

      {/* 🔹 Overlay Tint */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#e3e3e3]/10 to-[#091057]/10 mix-blend-overlay"></div>
   <div className="absolute bottom-0 right-0">
     <div className="absolute bottom-10  w-[450px] h-[450px] bg-[#091057] rounded-full blur-[130px] opacity-25 animate-pulse"></div>
     <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#e3e3e3] rounded-full blur-[120px] opacity-30 animate-pulse"></div>
     <div className="absolute bottom-0  w-[500px] h-[500px] bg-[#091057] rounded-full blur-[160px] opacity-20 animate-pulse"></div>
   </div>
    </div>
  );
};

export default BackgroundEffects;
