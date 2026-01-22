"use client";
import React from "react";

export default function SectionDivider() {
  return (
    <div className="flex flex-col gap-10 w-full items-center ">
      {/* 1️⃣ Simple Gradient Line */}
      {/* <div className="w-4/5 h-[2px] bg-gradient-to-r from-transparent via-[#091057] to-transparent rounded-full shadow-[0_0_10px_rgba(9,16,87,0.4)]" /> */}

      {/* 2️⃣ Center Glow Line */}
      {/* <div className="relative w-4/5 h-[3px] bg-[#091057]/40 rounded-full">
        <div className="absolute left-1/2 -translate-x-1/2 w-16 h-[3px] bg-[#091057] rounded-full shadow-[0_0_12px_rgba(9,16,87,0.8)]" />
      </div> */}

      {/* 3️⃣ Dotted Divider */}
      {/* <div className="w-4/5 flex justify-between items-center">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="w-2 h-2 rounded-full bg-[#091057]/80 shadow-[0_0_6px_rgba(9,16,87,0.6)]"
          ></div>
        ))}
      </div> */}

      {/* 4️⃣ Line with Center Circle */}
      {/* <div className="relative w-4/5 flex items-center justify-center">
        <div className="w-full h-[2px] bg-[#091057]/30" />
        <div className="absolute bg-[#091057] w-5 h-5 rounded-full shadow-[0_0_10px_rgba(9,16,87,0.6)] border-[3px] border-white" />
      </div> */}

      {/* 5️⃣ Dual Shadow Bar */}
      {/* <div className="w-4/5 h-[4px] bg-[#091057] rounded-full shadow-[0_4px_15px_rgba(9,16,87,0.4),0_-4px_15px_rgba(9,16,87,0.2)]" />
 */}
      {/* 6️⃣ Wave Divider (SVG Style) */}
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
      </div>

      {/* 7️⃣ Center Diamond Divider */}
      <div className="relative w-4/5 flex items-center justify-center">
        <div className="w-full h-[2px] bg-[#091057]/30" />
        <div className="absolute w-5 h-5 rotate-45 bg-[#091057] shadow-[0_0_10px_rgba(9,16,87,0.5)] border-[3px] border-white" />
      </div>
      
      {/* Divider 1 – Simple Line */}
      <div className="h-[2px] bg-gradient-to-r from-[#091057] via-[#334195] to-[#091057] rounded-full shadow-md" />

      {/* Divider 2 – Double Line */}
      <div className="flex flex-col gap-1">
        <div className="h-[1.5px] bg-[#091057]/80 w-full shadow-sm" />
        <div className="h-[1.5px] bg-[#091057]/40 w-3/4 mx-auto shadow-sm" />
      </div>

      {/* Divider 3 – Gradient Bar */}
      <div className="h-[4px] w-1/2 mx-auto bg-gradient-to-r from-[#091057] to-[#3b54b8] rounded-full shadow-lg" />

      {/* Divider 4 – Curved Top */}
      <div className="relative h-10 overflow-hidden">
        <div className="absolute bottom-0 left-0 w-full h-16 bg-[#091057] rounded-t-[100%] shadow-lg" />
      </div>

      {/* Divider 5 – Curved Bottom */}
      <div className="relative h-10 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-16 bg-[#091057] rounded-b-[100%] shadow-lg" />
      </div>

      {/* Divider 6 – Wave Gradient */}
      <div className="h-[6px] w-3/4 mx-auto bg-gradient-to-r from-[#3b54b8] via-[#091057] to-[#3b54b8] rounded-full shadow-md" />

      {/* Divider 7 – Dotted Line */}
      <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-[#091057] to-transparent bg-[length:12px_2px] bg-repeat-x" />

      {/* Divider 8 – Shadow Bar */}
      <div className="h-[6px] w-3/5 mx-auto bg-[#091057]/80 rounded-full shadow-[0_0_15px_#091057]" />

      {/* Divider 9 – Dashed Line */}
      <div className="border-t-2 border-dashed border-[#091057]/60 w-3/4 mx-auto" />

      {/* Divider 10 – Gradient with Blur */}
      <div className="h-[3px] w-3/4 mx-auto bg-gradient-to-r from-[#091057]/80 to-[#3b54b8]/80 backdrop-blur-sm rounded-full" />

      {/* Divider 11 – Triangle Up */}
      <div className="w-0 h-0 mx-auto border-l-[25px] border-r-[25px] border-b-[25px] border-l-transparent border-r-transparent border-b-[#091057]" />

      {/* Divider 12 – Triangle Down */}
      <div className="w-0 h-0 mx-auto border-l-[25px] border-r-[25px] border-t-[25px] border-l-transparent border-r-transparent border-t-[#091057]" />

      {/* Divider 13 – Ellipse Shadow */}
      <div className="w-40 h-3 mx-auto rounded-full bg-[#091057]/70 blur-[2px] shadow-lg" />

      {/* Divider 14 – Center Dot Line */}
      <div className="relative flex items-center justify-center">
        <div className="h-[1.5px] w-full bg-[#091057]/40"></div>
        <div className="w-4 h-4 bg-[#091057] rounded-full shadow-md absolute" />
      </div>

      {/* Divider 15 – Wave Border (Soft Curve) */}
      <div className="relative h-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white to-[#091057]/10 rounded-b-[100%]" />
      </div>

      {/* Divider 16 – Glow Line */}
      <div className="h-[2px] w-2/3 mx-auto bg-[#091057] shadow-[0_0_20px_#091057]" />

      {/* Divider 17 – Circle Pattern */}
      <div className="flex justify-center gap-2">
        {[...Array(7)].map((_, i) => (
          <div
            key={i}
            className="w-3 h-3 bg-[#091057] rounded-full shadow-md hover:scale-110 transition-transform"
          />
        ))}
      </div>

      {/* Divider 18 – Diagonal Cut */}
      <div className="relative h-6 overflow-hidden">
        <div className="absolute inset-0 bg-[#091057] transform -skew-y-3 shadow-lg" />
      </div>

      {/* Divider 19 – Floating Dots Line */}
      <div className="flex items-center justify-center gap-2">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="w-2 h-2 bg-[#091057] rounded-full animate-pulse shadow-sm"
          />
        ))}
      </div>

      {/* Divider 20 – Premium Gradient Strip */}
      <div className="h-[6px] w-full bg-gradient-to-r from-[#091057] via-[#3b54b8] to-[#091057] rounded-full shadow-[0_4px_20px_#091057]" />

    </div>
  );
}
