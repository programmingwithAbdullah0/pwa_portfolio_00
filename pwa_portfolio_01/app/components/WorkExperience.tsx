'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';

interface Experience {
  company: string;
  location: string;
  duration: string;
  role: string;
  description: string;
  dotColor: 'orange' | 'black';
}

export default function WorkExperience() {
  const experiences: Experience[] = [
    {
      company: "Teaching on Zoom",
      location: "",   
      duration: "During GIAIC & Institute Exams",
      role: "Teaching",
      description: "Teaching students at Zoom Live Classes / Teaching during GIAIC & Institute Exams. Q1 focused on Typescript, then move to Q2 based on NextJS and then in Q3 we focused on python.",
      dotColor: "orange"
    },
    {
      company: "Project on LinkedIn",
      location: "",
      duration: "Ongoing",
      role: "Frontend Developer",
      description: "Build many projects and deploy them on Vercel.Then upload on LinkedIn. to get more opportunities. ",
      dotColor: "black"
    },
    {
      company: "Amazon",
      location: "",
      duration: "2023",
      role: "Affiliate Marketing",
      description: "Little experience in amazon affiliate marketing. But i learned a lot from it. because I interested in it. so I tried it.",
      dotColor: "orange"
    }
  ];

  return (
    <section
    id='exprience'
    className="relative bg-white/50 py-24  lg:py-32 overflow-hidden">
      {/* Header */}
      <div className="text-center mb-20">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-6xl lg:text-7xl font-bold"
        >
          <span className="text-[#091057]">My</span> <span className="text-[#e3e3e3]">Work</span> <span className="text-[#091057]">Experience</span>
        </motion.h2>
      </div>

      {/* Timeline Container */}
      <div className="max-w-7xl  lg:mr-40 relative">
        {/* Vertical Dotted Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-0.5 border-l-2 border-dashed border-gray-400 z-0"></div>

        {/* Experiences */}
        <div className="space-y-32">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative flex items-start justify-center"
            >
              {/* LEFT: Company + Duration */}
              <div className="w-full  md:w-1/2 pr-8 md:pr-16 text-left flex flex-col items-end md:items-end">
                <h3 className="text-2xl font-bold text-[#091057] mb-1 text-right md:text-right">
                  {exp.company}, {exp.location}
                </h3>
                <p className="text-sm text-gray-600 flex items-center gap-1 justify-end">
                  <Calendar className="w-4 h-4" />
                  {exp.duration}
                </p>
              </div>

              {/* CENTER: DOT */}
              <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                <div className={`w-5 h-5 rounded-full border-4 flex items-center justify-center ${
                  exp.dotColor === 'orange'
                    ? 'bg-white border-[#091057] shadow-lg shadow-[#091057]/30'
                    : 'bg-[#091057] border-[#091057]'
                }`}>
                  {exp.dotColor === 'orange' && (
                    <div className="w-2 h-2 bg-[#091057] rounded-full"></div>
                  )}
                </div>
              </div>

              {/* RIGHT: Role + Description */}
              <div className="w-full md:w-1/2 pl-8 md:pl-16 text-left">
                <h4 className="text-xl font-bold text-[#091057] mb-2">{exp.role}</h4>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}