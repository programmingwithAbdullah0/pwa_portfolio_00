"use client";

import React from "react";
import { motion } from "framer-motion";
import { Award, Calendar, ExternalLink, ArrowLeft } from "lucide-react";
import Link from "next/link";
import certifications from "@/data/certifications.json";

export default function Certifications({ isPage = false, limit }: { isPage?: boolean, limit?: number }) {
  const displayCertifications = limit ? certifications.slice(0, limit) : certifications;

  return (
    <section id="certifications" className={`py-20 bg-white ${isPage ? 'min-h-screen pt-32' : ''}`}>
      <div className="max-w-7xl mx-auto px-6">
        {isPage && (
          <Link href="/" className="inline-flex items-center gap-2 text-[#091057] hover:underline mb-8 font-semibold text-lg">
            <ArrowLeft className="w-5 h-5" /> Back to Portfolio
          </Link>
        )}

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-[#091057]/10 text-[#091057] px-5 py-2 rounded-full text-sm font-bold mb-4 tracking-wide uppercase">
            <Award className="w-5 h-5" />
            My Achievements
          </div>
          <h2 className="text-5xl font-extrabold text-gray-900 tracking-tight">Certifications & Recognition</h2>
          <div className="w-24 h-1.5 bg-[#091057] mx-auto mt-6 rounded-full"></div>
          <p className="text-gray-500 mt-6 max-w-2xl mx-auto text-lg">
            A showcase of my professional growth, technical expertise, and continuous learning in the tech ecosystem.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {displayCertifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -12 }}
              className="bg-white border border-gray-100 rounded-[2rem] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group flex flex-col"
            >
              <div className="relative h-56 w-full bg-gray-50 overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-gray-100/50 group-hover:opacity-0 transition-opacity"></div>
                <img 
                  src={cert.image} 
                  alt={cert.title}
                  className="w-full h-full object-contain p-8 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-6 right-6 bg-white/95 backdrop-blur-md px-4 py-1.5 rounded-full shadow-lg text-sm font-bold text-[#091057] flex items-center gap-2 border border-gray-100">
                  <Calendar className="w-4 h-4" /> {cert.date}
                </div>
              </div>

              <div className="p-8 flex-grow flex flex-col">
                <div className={`w-14 h-14 rounded-2xl bg-gray-50 flex items-center justify-center mb-6 group-hover:bg-[#091057] group-hover:text-white transition-all duration-300 ${cert.iconColor}`}>
                  <Award className="w-8 h-8" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 leading-tight group-hover:text-[#091057] transition-colors">{cert.title}</h3>
                <p className="text-[#091057] font-bold mt-2 flex items-center gap-2 text-lg">
                  <span className="w-2 h-2 rounded-full bg-[#091057]"></span>
                  {cert.issuer}
                </p>
                <p className="text-gray-600 mt-4 text-base leading-relaxed line-clamp-3">
                  {cert.description}
                </p>

                <div className="mt-8 pt-6 border-t border-gray-100 flex items-center justify-between">
                  {cert.link !== "#" ? (
                    <a 
                      href={cert.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-[#091057] hover:gap-3 transition-all text-sm font-black uppercase tracking-wider"
                    >
                      View Certificate <ExternalLink className="w-4 h-4" />
                    </a>
                  ) : (
                    <span className="text-gray-400 text-sm font-medium italic">Verification in progress</span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {!isPage && limit && certifications.length > limit && (
          <div className="mt-16 text-center">
            <Link 
              href="/certifications" 
              className="inline-flex items-center gap-3 bg-[#091057] text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-[#091057]/90 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1"
            >
              View All Certifications <ExternalLink className="w-5 h-5" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
