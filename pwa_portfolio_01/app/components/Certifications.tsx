"use client";

import React from "react";
import { motion } from "framer-motion";
import { Award, Calendar, ExternalLink } from "lucide-react";

const certifications = [
  {
    title: "Google UX Design Professional Certificate",
    issuer: "Google",
    date: "2025",
    description: "Learned UX Research, Wireframing, Prototyping & Usability Testing.",
    link: "#",
    iconColor: "text-yellow-500"
  },
  {
    title: "Meta Frontend Developer Professional Certificate",
    issuer: "Meta",
    date: "2025",
    description: "Advanced React, JavaScript, UI/UX principles and version control.",
    link: "#",
    iconColor: "text-blue-600"
  },
  {
    title: "Agentic AI & Automation Specialist",
    issuer: "Panaversity / n8n",
    date: "2026",
    description: "Built autonomous AI agents, workflows and MCP integrations.",
    link: "#",
    iconColor: "text-purple-600"
  },
  // Agar aur certifications hain toh yahan add kar sakta hai
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-[#091057]/10 text-[#091057] px-4 py-1 rounded-full text-sm font-medium mb-3">
            <Award className="w-5 h-5" />
            RECOGNITION
          </div>
          <h2 className="text-4xl font-bold text-gray-900">Certifications & Achievements</h2>
          <p className="text-gray-600 mt-3 max-w-md mx-auto">
            Milestones that reflect my continuous learning journey
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.03 }}
              className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-xl hover:border-[#091057]/30 transition-all group"
            >
              <div className="flex items-start justify-between">
                <div className={`p-3 rounded-xl bg-gray-100 group-hover:bg-[#091057]/10 transition-colors ${cert.iconColor}`}>
                  <Award className="w-8 h-8" />
                </div>
                <span className="text-sm text-gray-500 flex items-center gap-1">
                  <Calendar className="w-4 h-4" /> {cert.date}
                </span>
              </div>

              <h3 className="text-xl font-semibold mt-5 text-gray-900">{cert.title}</h3>
              <p className="text-[#091057] font-medium mt-1">{cert.issuer}</p>
              <p className="text-gray-600 mt-3 leading-relaxed">{cert.description}</p>

              {cert.link !== "#" && (
                <a href={cert.link} target="_blank" className="inline-flex items-center gap-2 text-[#091057] hover:underline mt-4 text-sm font-medium">
                  View Certificate <ExternalLink className="w-4 h-4" />
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}