"use client";
import { useState } from "react";

export default function ActionButtons() {
  const [active, setActive] = useState("about");

  return (
    <div className="w-full lg:absolute lg:bottom-0 flex justify-center items-center py-6 relative">
      <div
        className="
          flex items-center justify-between gap-4
          bg-[#f7f7f7]/90 border border-[#e0e0e0]
          backdrop-blur-sm rounded-full shadow-md px-4 py-2
          w-64 sm:w-80
          lg:absolute lg:bottom-6 lg:left-1/2 lg:-translate-x-1/2
          sm:static sm:translate-x-0
        "
      >
        {/* About Me */}
        <button
          onClick={() => setActive("about")}
          className={`px-5 py-2 rounded-full font-medium text-sm transition-all duration-300 flex-1 ${
            active === "about"
              ? "bg-[#091057] text-white scale-105 shadow-[0_0_10px_rgba(9,16,87,0.5)]"
              : "bg-[#d0d0d0] text-[#2e2e2e] hover:scale-105"
          }`}
        >
          <a href="#about">About Me</a>
        </button>

        {/* Resume */}
        <button
          onClick={() => setActive("resume")}
          className={`px-5 py-2 rounded-full font-medium text-sm transition-all duration-300 flex-1 ${
            active === "resume"
              ? "bg-[#091057] text-white scale-105 shadow-[0_0_10px_rgba(9,16,87,0.5)]"
              : "bg-[#d0d0d0] text-[#2e2e2e] hover:scale-105"
          }`}
        >
           <a
                href="/abdullahateeqresume.pdf"
                download
                className="text-slate-700 font-semibold transition"
              >
                Resume
              </a>
        </button>
      </div>
    </div>
  );
}
