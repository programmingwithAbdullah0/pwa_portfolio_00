"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaArrowRightLong } from "react-icons/fa6";
import Link from "next/link";

export default function Welcome() {
  return (
    <section className="relative flex justify-center items-center h-screen bg-[#e3e3e3] overflow-hidden">
      {/* 🌌 Background Animated Blobs */}
      <div className="absolute -top-20 -left-32 w-[500px] h-[500px] bg-[#091057] rounded-full blur-[120px] opacity-25 animate-pulse" />
      <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-[#091057] rounded-full blur-[120px] opacity-20 animate-pulse" />

      {/* 🪩 Floating Shapes */}
      <motion.div
        className="absolute top-20 right-32 w-16 h-16 rounded-2xl border border-[#091057]/20 backdrop-blur-sm"
        animate={{
          y: [0, -20, 0],
          rotate: [0, 10, 0],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-20 left-32 w-20 h-20 rounded-full border-2 border-[#091057]/10"
        animate={{
          x: [0, 15, 0],
          rotate: [0, -10, 0],
        }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* 🧭 Main Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 text-center px-6"
      >
        <motion.h1
          className="text-5xl md:text-7xl font-extrabold text-[#091057] mb-4 tracking-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Welcome to My <span className="text-[#0b1a7a]">Portfolio</span>
        </motion.h1>

        <motion.p
          className="text-gray-700 text-base md:text-lg max-w-2xl mx-auto mb-8 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          I’m a passionate frontend developer crafting modern, interactive, and
          visually appealing web experiences. Dive in to explore my journey and work!
        </motion.p>

        {/* 🎯 Buttons */}
        <motion.div
          className="flex justify-center gap-6 flex-wrap"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
        <Link href={'/Portfolio'} className="flex">  <button className="flex items-center gap-2 bg-[#091057] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#0b1a7a] hover:scale-105 transition-all duration-300 shadow-md">
            View My Potfolio <FaArrowRightLong className="text-sm " />
            
                      </button>
</Link>
          <button className="bg-transparent text-[#091057] border-2 border-[#091057] px-8 py-3 rounded-full font-semibold hover:bg-[#091057] hover:text-white hover:scale-105 transition-all duration-300 shadow-md">
          <a
                href="/MuhammadHuzaifaAbdulrabResume.pdf"
                download
                className="text-slate-700  hover:text-white font-semibold transition"
              >   Download Resume</a>
          </button>
        </motion.div>
      </motion.div>

      {/* ✨ Soft light overlay for smooth tone */}
      <div className="absolute inset-0 bg-gradient-to-t from-white/40 to-transparent pointer-events-none"></div>
    </section>
  );
}
