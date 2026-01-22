'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Code2, 
  Palette, 
  Zap, 
  Shield, 
  Smartphone, 
  Globe, 
  Sparkles,
  ArrowRight,
  CheckCircle2,
  ChevronDown
} from 'lucide-react';

export default function ServicesSection() {
  const [showAll, setShowAll] = useState(false);

  const allServices = [
    {
      icon: Code2,
      title: "Frontend Mastery",
      features: ["HTML", "CSS/SCSS", "JavaScript", "TypeScript", "React.js", "Next.js 14+"],
      gradient: "from-[#e3e3e3] to-[#e3e3e3]/70"
    },
    {
      icon: Palette,
      title: "UI/UX & Design",
      features: ["Figma", "Tailwind CSS", "Bootstrap", "Design Systems", "Prototyping", "Animations"],
      gradient: "from-[#e3e3e3] to-[#e3e3e3]/60"
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      features: ["React Native", "Responsive Design", "PWA", "Touch Optimized", "Cross-Platform"],
      gradient: "from-[#e3e3e3] to-[#e3e3e3]/50"
    },
    {
      icon: Zap,
      title: "Performance & SEO",
      features: ["95+ Lighthouse", "SSR/SSG", "Image Optimization", "Core Web Vitals", "SEO", "Schema"],
      gradient: "from-[#e3e3e3] to-[#e3e3e3]/70"
    },
    {
      icon: Shield,
      title: "Backend & Database",
      features: ["PHP", "MySQL", "MongoDB", "Firebase", "REST APIs", "Authentication"],
      gradient: "from-[#e3e3e3] to-[#e3e3e3]/60"
    },
    {
      icon: Globe,
      title: "Deployment & Tools",
      features: ["Vercel", "Netlify", "GitHub", "VS Code", "Sanity CMS", "n8n Automation"],
      gradient: "from-[#e3e3e3] to-[#e3e3e3]/50"
    }
  ];

  const visibleServices = showAll ? allServices : allServices.slice(0, 6);

  return (
    <section 
    id='services'
    className="relative min-h-screen  overflow-hidden">
      
      {/* SIRF CONTENT — NO GRID, NO PARTICLES */}
      <div className="relative z-10 container mx-auto px-4 py-24 lg:py-32">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-[#091057]/5 border border-[#091057]/10 mb-8">
            <Sparkles className="w-5 h-5 text-[#091057]" />
            <span className="text-[#091057] font-semibold text-sm tracking-wider">MY EXPERTISE</span>
            <Sparkles className="w-5 h-5 text-[#091057]" />
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#091057] mb-6">
            Premium <span className="bg-gradient-to-r from-[#e3e3e3] to-[#e3e3e3]/70 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-lg md:text-xl text-[#091057]/70 max-w-3xl mx-auto leading-relaxed">
            Full-stack development with modern tools, clean code, and pixel-perfect delivery
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {visibleServices.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.7 }}
              whileHover={{ y: -16, scale: 1.03 }}
              className="group relative"
            >
              {/* Glow */}
              <div className="absolute -inset-2 bg-[#e3e3e3]/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
              
              {/* Card */}
              <div className="relative h-full bg-white/80 backdrop-blur-xl border border-[#091057]/10 rounded-3xl p-8
                shadow-xl hover:shadow-2xl transition-all duration-500
                before:absolute before:inset-0 before:rounded-3xl before:bg-gradient-to-br before:from-[#e3e3e3]/5 before:to-transparent before:-z-10
                after:absolute after:inset-0 after:rounded-3xl after:bg-gradient-to-t after:from-[#091057]/5 after:to-transparent after:opacity-0 after:group-hover:opacity-100 after:transition-opacity after:duration-700 after:-z-10"
              >
                {/* Icon */}
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${service.gradient} mb-6
                  shadow-lg shadow-[#e3e3e3]/30 group-hover:scale-110 transition-all duration-300`}>
                  <service.icon className="w-8 h-8 text-[#091057]" />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-[#091057] mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-[#091057] group-hover:to-[#091057]/80 group-hover:bg-clip-text transition-all duration-300">
                  {service.title}
                </h3>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <CheckCircle2 className="w-4 h-4 text-[#091057]/50 flex-shrink-0" />
                      <span className="text-sm text-[#091057]/80">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <motion.div
                  whileHover={{ x: 8 }}
                  className="flex items-center gap-2 text-[#091057] font-semibold text-sm group/btn"
                >
                  <a href='#contact'>Contact</a>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Show More */}
        {allServices.length > 6 && !showAll && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mt-16"
          >
            <motion.button
              onClick={() => setShowAll(true)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group inline-flex items-center gap-3 px-8 py-4 bg-[#091057]/5 border border-[#091057]/20 rounded-full text-[#091057] font-semibold text-sm hover:bg-[#091057]/10 transition-all duration-300"
            >
              <span>Show More Services</span>
              <ChevronDown className="w-5 h-5 transition-transform group-hover:translate-y-1" />
            </motion.button>
          </motion.div>
        )}

        {/* Bottom CTA */}
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="text-center mt-24"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative inline-flex items-center gap-4 px-10 py-5 bg-[#091057] rounded-full font-bold text-white text-lg shadow-2xl shadow-[#091057]/30 overflow-hidden transition-all duration-300 hover:shadow-[#091057]/50"
          >
            <span className="relative z-10">Hire Me Now</span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-[#e3e3e3]/20 to-[#e3e3e3]/10"
              initial={{ x: "-100%" }}
              whileHover={{ x: "100%" }}
              transition={{ duration: 0.6 }}
            />
            <Sparkles className="w-6 h-6 relative z-10" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}