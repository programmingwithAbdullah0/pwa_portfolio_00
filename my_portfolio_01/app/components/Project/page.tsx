// components/Project/page.tsx

"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { projectData } from "./projectData";

export default function ProjectSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % projectData.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + projectData.length) % projectData.length);
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white" id="project">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-[#091057] mb-4 md:mb-0">
            My <span className="text-gray-400">Projects</span>
          </h2>
          <a
            href="https://github.com/programmingwithAbdullah0?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#091057] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#0a1a7a] transition-all flex items-center gap-2"
          >
            View All on GitHub
          </a>
        </div>

        {/* Desktop Grid - 3 columns */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectData.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-100"
            >
              {/* Preview */}
              <div className="relative h-64 overflow-hidden bg-gray-100">
                <iframe
                  src={project.iframeLink}
                  title={project.name}
                  className="w-[200%] h-[200%] scale-[0.5] origin-top-left border-0 pointer-events-none"
                  sandbox="allow-scripts allow-same-origin allow-popups"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />

                <a
                  href={project.visitLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-md hover:bg-white transition"
                >
                  <FaExternalLinkAlt className="text-[#091057] text-xl" />
                </a>
              </div>

              {/* Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{project.name}</h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-[#091057] hover:text-[#0a1a7a] transition"
                  >
                    <FaGithub className="text-xl" />
                    <span className="font-medium">GitHub</span>
                  </a>
                  <a
                    href={project.visitLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#091057] hover:text-[#0a1a7a] font-medium transition"
                  >
                    Live Demo →
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden relative">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100"
          >
            {/* Preview */}
            <div className="relative h-64 overflow-hidden bg-gray-100">
              <iframe
                src={projectData[currentIndex].iframeLink}
                title={projectData[currentIndex].name}
                className="w-[200%] h-[200%] scale-[0.5] origin-top-left border-0 pointer-events-none"
                sandbox="allow-scripts allow-same-origin allow-popups"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />

              <a
                href={projectData[currentIndex].visitLink}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-md hover:bg-white transition"
              >
                <FaExternalLinkAlt className="text-[#091057] text-xl" />
              </a>
            </div>

            {/* Info */}
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">{projectData[currentIndex].name}</h3>
              <p className="text-gray-600 text-sm mb-4 line-clamp-3">{projectData[currentIndex].description}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {projectData[currentIndex].tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between">
                <a
                  href={projectData[currentIndex].githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-[#091057] hover:text-[#0a1a7a] transition"
                >
                  <FaGithub className="text-xl" />
                  <span className="font-medium">GitHub</span>
                </a>
                <a
                  href={projectData[currentIndex].visitLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#091057] hover:text-[#0a1a7a] font-medium transition"
                >
                  Live Demo →
                </a>
              </div>
            </div>
          </motion.div>

          {/* Carousel Controls */}
          <button
            onClick={prevSlide}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm p-3 rounded-full shadow-lg hover:bg-white transition z-10"
          >
            <FaChevronLeft className="text-[#091057]" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm p-3 rounded-full shadow-lg hover:bg-white transition z-10"
          >
            <FaChevronRight className="text-[#091057]" />
          </button>

          {/* Dots indicator */}
          <div className="flex justify-center gap-2 mt-4">
            {projectData.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  idx === currentIndex ? "bg-[#091057] scale-125" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}