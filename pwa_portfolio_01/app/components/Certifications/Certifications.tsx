"use client";

import React from "react";
import { motion } from "framer-motion";
import { Award, Calendar, ExternalLink } from "lucide-react";
import certifications from "@/data/certifications.json";

export default function Certifications({ isPage = false, limit }: { isPage?: boolean, limit?: number }) {
  const displayCertifications = limit ? certifications.slice(0, limit) : certifications;

  return (
    <section id="certifications" className="bg-white">
      <div className={`max-w-7xl mx-auto px-4 sm:px-6 ${isPage ? 'pt-28 sm:pt-32 pb-16 sm:pb-20' : 'py-20'}`}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-[#091057]/10 text-[#091057] px-4 sm:px-5 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-bold mb-3 sm:mb-4 tracking-wide uppercase">
            <Award className="w-4 h-5 sm:w-5" />
            My Achievements
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight px-2">
            Certifications & Recognition
          </h2>
          <div className="w-16 sm:w-24 h-1 sm:h-1.5 bg-[#091057] mx-auto mt-4 sm:mt-6 rounded-full"></div>
          <p className="text-gray-500 mt-4 sm:mt-6 max-w-2xl mx-auto text-sm sm:text-base lg:text-lg px-4">
            A showcase of my professional growth, technical expertise, and continuous learning in the tech ecosystem.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {displayCertifications.map((cert: any, index) => (
            cert.isGoogleGroup ? (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="col-span-1 md:col-span-2 lg:col-span-3 bg-white border border-gray-100 rounded-2xl sm:rounded-[2rem] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
              >
                <div className="flex flex-col lg:flex-row p-5 sm:p-8 gap-5 sm:gap-8 bg-gradient-to-br from-blue-50 to-white">
                  <div className="w-full lg:w-1/3 h-48 sm:h-56 lg:h-64 bg-white rounded-xl sm:rounded-2xl overflow-hidden flex items-center justify-center border border-gray-100 shadow-sm">
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="w-full h-full object-contain p-4 sm:p-6 hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="w-full lg:w-2/3 flex flex-col justify-center">
                    <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-3 sm:px-4 py-1 rounded-full text-[10px] sm:text-xs font-bold mb-2 sm:mb-3 w-fit">
                      <Award className="w-3 h-4 sm:w-4" /> Featured
                    </div>
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-gray-900">{cert.title}</h3>
                    <p className="text-[#091057] font-bold mt-1.5 sm:mt-2 flex items-center gap-2 text-base sm:text-lg">
                      <span className="w-1.5 h-4 sm:w-2 rounded-full bg-[#091057]"></span>
                      {cert.issuer}
                    </p>
                    <p className="text-gray-600 mt-2 sm:mt-3 text-sm sm:text-base leading-relaxed">
                      {cert.description}
                    </p>
                    <div className="flex flex-wrap items-center gap-3 sm:gap-4 mt-3 sm:mt-4">
                      <span className="flex items-center gap-1 sm:gap-1.5 text-xs sm:text-sm text-gray-500 font-medium">
                        <Calendar className="w-3 h-4 sm:w-4" /> {cert.date}
                      </span>
                      <a
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 sm:gap-2 text-[#091057] hover:gap-2 sm:hover:gap-3 transition-all text-xs sm:text-sm font-black uppercase tracking-wider"
                      >
                        View Certificate <ExternalLink className="w-3 h-4 sm:w-4" />
                      </a>
                    </div>
                  </div>
                </div>

                {cert.subCertifications && cert.subCertifications.length > 0 && (
                  <div className="px-5 sm:px-8 pb-5 sm:pb-8 pt-0 sm:pt-2">
                    <div className="flex items-center gap-2 mb-4 sm:mb-6">
                      <div className="h-px flex-1 bg-gray-200"></div>
                      <span className="text-[10px] sm:text-sm font-bold text-gray-400 uppercase tracking-widest px-2 sm:px-4">
                        Google Certification Series
                      </span>
                      <div className="h-px flex-1 bg-gray-200"></div>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
                      {cert.subCertifications.map((sub: any, i: number) => (
                        <a
                          key={i}
                          href={sub.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group bg-gray-50 rounded-xl sm:rounded-2xl p-3 sm:p-4 hover:bg-white hover:shadow-lg border border-transparent hover:border-gray-200 transition-all duration-300"
                        >
                          <div className="h-20 sm:h-24 lg:h-28 bg-white rounded-lg sm:rounded-xl overflow-hidden flex items-center justify-center mb-2 sm:mb-3 border border-gray-100">
                            <img
                              src={sub.image}
                              alt={sub.title}
                              className="w-full h-full object-contain p-2 sm:p-3 group-hover:scale-110 transition-transform duration-500"
                            />
                          </div>
                          <p className="text-[11px] sm:text-sm font-bold text-gray-800 group-hover:text-[#091057] transition-colors leading-tight">{sub.title}</p>
                          <p className="text-[10px] sm:text-xs text-gray-400 mt-0.5 sm:mt-1">{sub.issuer}</p>
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            ) : (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -6 }}
                className="bg-white border border-gray-100 rounded-2xl sm:rounded-[2rem] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group flex flex-col"
              >
                <div className="relative h-44 sm:h-48 lg:h-56 w-full bg-gray-50 overflow-hidden flex items-center justify-center">
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent to-gray-100/50 group-hover:opacity-0 transition-opacity"></div>
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-contain p-6 sm:p-8 group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-3 sm:top-6 right-3 sm:right-6 bg-white/95 backdrop-blur-md px-2.5 sm:px-4 py-1 sm:py-1.5 rounded-full shadow-lg text-[11px] sm:text-sm font-bold text-[#091057] flex items-center gap-1 sm:gap-2 border border-gray-100">
                    <Calendar className="w-3 h-3 sm:w-4 sm:h-4" /> {cert.date}
                  </div>
                </div>

                <div className="p-5 sm:p-8 flex-grow flex flex-col">
                  <div className={`w-10 h-10 sm:w-12 sm:h-14 lg:w-14 lg:h-14 rounded-xl sm:rounded-2xl bg-gray-50 flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-[#091057] group-hover:text-white transition-all duration-300 ${cert.iconColor}`}>
                    <Award className="w-5 h-6 sm:w-7 sm:h-8 lg:w-8" />
                  </div>

                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 leading-tight group-hover:text-[#091057] transition-colors">{cert.title}</h3>
                  <p className="text-[#091057] font-bold mt-1.5 sm:mt-2 flex items-center gap-1.5 sm:gap-2 text-sm sm:text-base lg:text-lg">
                    <span className="w-1.5 h-3 sm:w-2 rounded-full bg-[#091057]"></span>
                    {cert.issuer}
                  </p>
                  <p className="text-gray-600 mt-2 sm:mt-4 text-sm sm:text-base leading-relaxed line-clamp-2 sm:line-clamp-3">
                    {cert.description}
                  </p>

                  <div className="mt-5 sm:mt-8 pt-4 sm:pt-6 border-t border-gray-100 flex items-center justify-between">
                    {cert.link !== "#" ? (
                      <a
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 sm:gap-2 text-[#091057] hover:gap-2 sm:hover:gap-3 transition-all text-[11px] sm:text-sm font-black uppercase tracking-wider"
                      >
                        View Certificate <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4" />
                      </a>
                    ) : (
                      <span className="text-gray-400 text-xs sm:text-sm font-medium italic">Verification in progress</span>
                    )}
                  </div>
                </div>
              </motion.div>
            )
          ))}
        </div>

        {!isPage && limit && certifications.length > limit && (
          <div className="mt-12 sm:mt-16 text-center">
            <a
              href="/certifications"
              className="inline-flex items-center gap-2 sm:gap-3 bg-[#091057] text-white px-6 sm:px-10 py-3 sm:py-4 rounded-full font-bold text-sm sm:text-lg hover:bg-[#091057]/90 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1"
            >
              View All Certifications <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5" />
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
