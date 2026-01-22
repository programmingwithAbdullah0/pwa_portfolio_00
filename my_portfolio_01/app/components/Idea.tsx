'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Star,  Award } from 'lucide-react';

export default function Idea() {
  return (
    <section
    id='idea'
    className="relative bg-white/60 overflow-hidden py-16 lg:py-24">
      {/* Main Container */}
      <div className="container mx-auto px-4 max-w-6xl">
        
        {/* Header Text */}
        <div className="text-center mb-10">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#091057] leading-tight">
            Have an <span className="text-[#e3e3e3]">Awsome</span> Project
          </h2>
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#091057] mt-2">
            Idea? <span className="text-[#e3e3e3]">Let’s Discuss</span>
          </h3>
        </div>

        {/* Email Input + Send Button */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <div className="relative w-full sm:w-auto flex-1 max-w-md">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Mail className="w-5 h-5 text-[#091057]" />
            </div>
            <input
              type="email"
              placeholder="Enter Email Address"
              className="w-full pl-12 pr-4 py-4 bg-white border border-gray-200 rounded-full text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#e3e3e3] focus:border-transparent transition-all"
            />
          </div>
          <button className="px-8 py-4 bg-[#e3e3e3] text-[#091057] font-bold rounded-full hover:bg-[#d1d1d1] transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2">
            <span>Send</span>
          </button>
        </div>

        {/* Ratings, Awards, Certification */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10 text-sm text-gray-600">
          <div className="flex items-center gap-2">
            <Star className="w-5 h-5 text-[#e3e3e3] fill-[#e3e3e3]" />
            <span><strong className="text-[#091057]">4.9/5</strong> Average Ratings</span>
          </div>
          <div className="flex items-center gap-2">
            <Award className="w-5 h-5 text-[#e3e3e3]" />
            <span><strong className="text-[#091057]">4 </strong>Sertisfying Clients</span>
          </div>
        </div>
      </div>

      {/* SKEWED SLIDING BANNER - #e3e3e3 + INFINITE LOOP */}
      <div className="mt-16 overflow-hidden bg-[#091057]">
        <div 
          className="relative py-8 "
          style={{
          
            transform: 'skewY(-5deg)',
          }}
        >
          <div className="transform skew-y-3">
            <motion.div
              className="flex whitespace-nowrap"
              animate={{ x: [0, -50 + "%"] }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 15,
                  ease: "linear",
                },
              }}
            >
              {/* Duplicate 4 times for seamless loop */}
              {[...Array(4)].map((_, i) => (
                <div key={i} className="flex items-center gap-16 px-8 bg-[#e3e3e3]">
                  <span className="text-2xl md:text-3xl font-bold text-[#091057]">UX Design</span>

                  <span className="text-2xl md:text-3xl font-bold text-[#091057]">App Design</span>

                  <span className="text-2xl md:text-3xl font-bold text-[#091057]">Dashboard</span>

                  <span className="text-2xl md:text-3xl font-bold text-[#091057]">Wireframe</span>

                  <span className="text-2xl md:text-3xl font-bold text-[#091057]">User Research</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#091057] rounded-full filter blur-3xl opacity-10 -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#091057] rounded-full filter blur-3xl opacity-10 translate-x-1/2 translate-y-1/2" />
    </section>
  );
}