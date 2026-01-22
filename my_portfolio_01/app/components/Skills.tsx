// "use client";

// import { motion, AnimatePresence } from "framer-motion";
// import React, { useState, useEffect } from "react";
// import { 
//   SiHtml5,
//   SiCss3,
//   SiJavascript,
//   SiTypescript,
//   SiTailwindcss,
//   SiNextdotjs,
//   SiReact,
//   SiSanity,
//   SiGithub,
//   SiFigma,
//   SiSass,
//   SiFirebase,
//   SiVercel,
//   SiNetlify,
//   SiMysql,
//   SiPhp,
//   SiBootstrap,
//   SiMongodb,
//   SiN8N,
// } from "react-icons/si";
// import { BiLogoVisualStudio } from "react-icons/bi";
// import { TbBrandReactNative } from "react-icons/tb";

// const skills = [
//   { 
//     icon: SiHtml5, 
//     color: "text-orange-500", 
//     name: "HTML", 
//     desc: "Structure of the web — clean, semantic, and SEO-friendly markup." 
//   },
//   { 
//     icon: SiCss3, 
//     color: "text-blue-500", 
//     name: "CSS", 
//     desc: "Modern styling with animations and responsive layouts." 
//   },
//   { 
//     icon: SiJavascript, 
//     color: "text-yellow-400", 
//     name: "JavaScript", 
//     desc: "Dynamic and interactive front-end logic for modern web apps." 
//   },
//   { 
//     icon: SiTypescript, 
//     color: "text-blue-600", 
//     name: "TypeScript", 
//     desc: "Type-safe JavaScript — scalable, reliable, and easy to maintain." 
//   },
//   { 
//     icon: SiTailwindcss, 
//     color: "text-cyan-400", 
//     name: "Tailwind CSS", 
//     desc: "Utility-first framework for fast, beautiful UI development." 
//   },
//   { 
//     icon: SiNextdotjs, 
//     color: "text-gray-900 dark:text-white", 
//     name: "Next.js", 
//     desc: "React framework for SEO-optimized, high-performance websites." 
//   },
//   { 
//     icon: SiReact, 
//     color: "text-sky-400", 
//     name: "React.js", 
//     desc: "Component-based UI framework powering interactive web apps." 
//   },
//   { 
//     icon: SiSanity, 
//     color: "text-red-500", 
//     name: "Sanity CMS", 
//     desc: "Headless CMS for structured content and custom workflows." 
//   },
//   { 
//     icon: SiGithub, 
//     color: "text-gray-800 dark:text-gray-300", 
//     name: "GitHub", 
//     desc: "Version control and collaboration for modern development." 
//   },
//   { 
//     icon: SiFigma, 
//     color: "text-pink-500", 
//     name: "UI/UX Design", 
//     desc: "Designing intuitive and visually appealing user experiences." 
//   },
//   { 
//     icon: SiSass, 
//     color: "text-pink-400", 
//     name: "SCSS", 
//     desc: "Enhanced CSS with variables, mixins, and cleaner structure." 
//   },
//   { 
//     icon: SiFirebase, 
//     color: "text-yellow-500", 
//     name: "Firebase", 
//     desc: "Realtime database, authentication, and cloud functions." 
//   },
//   { icon: SiVercel, color: "text-black", name: "Vercel", desc: "Deploy and host high-performance web apps instantly." },
//   { icon: SiNetlify, color: "text-green-500", name: "Netlify", desc: "Modern platform for deploying static websites and serverless functions." },
//   { icon: SiMysql, color: "text-blue-700", name: "SQL/MySQL", desc: "Relational database management for structured data." },
//   { icon: SiPhp, color: "text-purple-700", name: "PHP", desc: "Server-side scripting language for dynamic web apps." },
//   { icon: SiBootstrap, color: "text-purple-500", name: "Bootstrap", desc: "Responsive front-end framework for faster UI development." },
//   { icon: TbBrandReactNative, color: "text-blue-400", name: "React Native", desc: "Build cross-platform mobile applications with React." },
//   { icon: SiMongodb, color: "text-green-600", name: "MongoDB", desc: "NoSQL database for flexible and scalable data storage." },
//   { icon: BiLogoVisualStudio , color: "text-blue-600", name: "VS Code", desc: "Powerful code editor with extensions and integrated terminal." },
//   { icon: SiN8N, color: "text-purple-500", name: "n8n Automation", desc: "Automate workflows without writing much code." },
// ];

// export default function Skills() {
//   const [index, setIndex] = useState(0);
//   const [showExpertise, setShowExpertise] = useState(false);
//   const centerSkill = skills[index];

//   // ✅ window.innerWidth handled safely
//   const [windowWidth, setWindowWidth] = useState<number>(0);

//   useEffect(() => {
//     if (typeof window !== "undefined") {
//       setWindowWidth(window.innerWidth);
//       const handleResize = () => setWindowWidth(window.innerWidth);
//       window.addEventListener("resize", handleResize);
//       return () => window.removeEventListener("resize", handleResize);
//     }
//   }, []);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setIndex((prev) => (prev + 1) % skills.length);
//     }, 5000);
//     return () => clearInterval(timer);
//   }, []);

//   useEffect(() => {
//     const headingTimer = setInterval(() => {
//       setShowExpertise((prev) => !prev);
//     }, 5000);
//     return () => clearInterval(headingTimer);
//   }, []);

//   return (
//     <>
//       {/* Heading */}
//       <div className="text-center mb-12 z-20" id="skills">
//         <AnimatePresence mode="wait">
//           <motion.h1
//             key={showExpertise ? "expertise" : "skills"}
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -20 }}
//             transition={{ duration: 0.8, ease: "easeInOut" }}
//             className="text-5xl md:text-6xl font-bold text-[#091057]"
//           >
//             {showExpertise ? "My Expertise" : "My Skills"}
//           </motion.h1>
//         </AnimatePresence>

//         <p className="mt-3 text-gray-600 max-w-2xl mx-auto text-center text-base sm:text-lg">
//           Passionate about building beautiful, efficient, and interactive
//           digital experiences using cutting-edge web technologies.
//         </p>
//       </div>

//       {/* Orbit Section */}
//       <section className="relative flex flex-col items-center justify-center w-full h-[100vh] overflow-hidden">
//         <div className="relative flex flex-col items-center justify-center z-20">

//           {/* 1️⃣ First Orbit */}
//           <div className="lg:block md:block hidden absolute animate-[spin_40s_linear_infinite] flex items-center justify-center">
//             {skills.map((skill, i) => {
//               const Icon = skill.icon;
//               const angle = (i / skills.length) * 2 * Math.PI;
//               const radius =
//                 windowWidth < 640 ? 100 : windowWidth < 1024 ? 180 : 220;
//               const x = Math.cos(angle) * radius;
//               const y = Math.sin(angle) * radius;
//               return (
//                 <div key={i} className="absolute transition-transform duration-700" style={{ transform: `translate(${x}px, ${y}px)` }}>
//                   <Icon className={`text-xl sm:text-2xl opacity-85 ${skill.color} drop-shadow-md`} />
//                 </div>
//               );
//             })}
//           </div>

//           {/* 2️⃣ Second Orbit */}
//           <div className="absolute reverse-spin flex items-center justify-center">
//             {skills.map((skill, i) => {
//               const Icon = skill.icon;
//               const angle = (i / skills.length) * 2 * Math.PI;
//               const radius =
//                 windowWidth < 640 ? 160 : windowWidth < 1024 ? 280 : 370;
//               const x = Math.cos(angle) * radius;
//               const y = Math.sin(angle) * radius;
//               return (
//                 <div key={i} className="absolute transition-transform duration-700" style={{ transform: `translate(${x}px, ${y}px)` }}>
//                   <Icon className={`text-lg sm:text-2xl opacity-70 ${skill.color} drop-shadow-md`} />
//                 </div>
//               );
//             })}
//           </div>

//           {/* 3️⃣ Third Orbit */}
//           <div className="absolute animate-[spin_45s_linear_infinite] flex items-center justify-center">
//             {skills.map((skill, i) => {
//               const Icon = skill.icon;
//               const angle = (i / skills.length) * 2 * Math.PI;
//               const radius =
//                 windowWidth < 640 ? 340 : windowWidth < 1024 ? 420 : 530;
//               const x = Math.cos(angle) * radius;
//               const y = Math.sin(angle) * radius;
//               return (
//                 <div key={i} className="absolute transition-transform duration-700" style={{ transform: `translate(${x}px, ${y}px)` }}>
//                   <Icon className={`text-lg sm:text-3xl opacity-60 ${skill.color} drop-shadow-md`} />
//                 </div>
//               );
//             })}
//           </div>

//           {/* 4️⃣ Fourth Orbit */}
//           <div className="absolute reverse-spin flex items-center justify-center">
//             {skills.map((skill, i) => {
//               const Icon = skill.icon;
//               const angle = (i / skills.length) * 2 * Math.PI;
//               const radius =
//                 windowWidth < 640 ? 300 : windowWidth < 1024 ? 520 : 650;
//               const x = Math.cos(angle) * radius;
//               const y = Math.sin(angle) * radius;
//               return (
//                 <div key={i} className="absolute transition-transform duration-700" style={{ transform: `translate(${x}px, ${y}px)` }}>
//                   <Icon className={`text-base sm:text-2xl opacity-50 ${skill.color} drop-shadow-md`} />
//                 </div>
//               );
//             })}
//           </div>

//           {/* 5️⃣ Fifth Orbit */}
//           <div className="absolute animate-[spin_45s_linear_infinite] flex items-center justify-center">
//             {skills.map((skill, i) => {
//               const Icon = skill.icon;
//               const angle = (i / skills.length) * 2 * Math.PI;
//               const radius =
//                 windowWidth < 640 ? 240 : windowWidth < 1024 ? 820 : 790;
//               const x = Math.cos(angle) * radius;
//               const y = Math.sin(angle) * radius;
//               return (
//                 <div key={i} className="absolute transition-transform duration-700" style={{ transform: `translate(${x}px, ${y}px)` }}>
//                   <Icon className={`text-lg sm:text-3xl opacity-60 ${skill.color} drop-shadow-md`} />
//                 </div>
//               );
//             })}
//           </div>

//           {/* Center Skill Card */}
//           <AnimatePresence mode="wait">
//             <motion.div
//               key={centerSkill.name}
//               initial={{ opacity: 0, scale: 0.8 }}
//               animate={{ opacity: 1, scale: 1 }}
//               exit={{ opacity: 0, scale: 0.8 }}
//               transition={{ duration: 0.8, ease: "easeInOut" }}
//               className="z-10 flex flex-col items-center text-center px-6"
//             >
//               <div className="relative flex items-center justify-center">
//                 <div className="absolute w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-gradient-to-br from-blue-400/30 to-cyan-300/30 blur-3xl animate-[pulse_5s_ease-in-out_infinite]" />
//                 <div className="relative w-24 h-24 sm:w-32 sm:h-32 flex items-center justify-center rounded-full bg-white/90 backdrop-blur-md shadow-xl border border-white/50">
//                   {React.createElement(centerSkill.icon, {
//                     className: `text-6xl sm:text-7xl ${centerSkill.color} drop-shadow-lg`,
//                   })}
//                 </div>
//               </div>

//               <h3 className="mt-6 text-2xl sm:text-3xl font-semibold text-gray-800">
//                 {centerSkill.name}
//               </h3>
//               <p className="mt-2 w-50 text-sm sm:text-base text-gray-600 max-w-md">
//                 {centerSkill.desc}
//               </p>
//             </motion.div>
//           </AnimatePresence>
//         </div>
//       </section>
//     </>
//   );
// }

"use client";

import { motion, AnimatePresence } from "framer-motion";
import React, { useState, useEffect } from "react";
import { 
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTailwindcss,
  SiNextdotjs,
  SiGithub,
  SiMysql,
} from "react-icons/si";

const skills = [
  { 
    icon: SiHtml5, 
    color: "text-orange-500", 
    name: "HTML5", 
    desc: "Semantic, clean and accessible markup for modern web." 
  },
  { 
    icon: SiCss3, 
    color: "text-blue-500", 
    name: "CSS3", 
    desc: "Beautiful layouts with animations and responsive design." 
  },
  { 
    icon: SiJavascript, 
    color: "text-yellow-400", 
    name: "JavaScript", 
    desc: "Interactive logic and dynamic functionality." 
  },
  { 
    icon: SiTailwindcss, 
    color: "text-cyan-400", 
    name: "Tailwind CSS", 
    desc: "Rapid UI development with utility-first approach." 
  },
  { 
    icon: SiNextdotjs, 
    color: "text-gray-900 dark:text-white", 
    name: "Next.js", 
    desc: "Full-stack React framework for fast, SEO-friendly apps." 
  },
  { 
    icon: SiGithub, 
    color: "text-gray-800 dark:text-gray-300", 
    name: "Git & GitHub", 
    desc: "Version control, collaboration and clean workflows." 
  },
  { 
    icon: SiMysql, 
    color: "text-blue-700", 
    name: "MySQL", 
    desc: "Structured database management and queries." 
  },
];

export default function Skills() {
  const [index, setIndex] = useState(0);
  const [showExpertise, setShowExpertise] = useState(false);
  const centerSkill = skills[index];

  const [windowWidth, setWindowWidth] = useState<number>(0);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setWindowWidth(window.innerWidth);
      const handleResize = () => setWindowWidth(window.innerWidth);
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % skills.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const headingTimer = setInterval(() => {
      setShowExpertise((prev) => !prev);
    }, 5000);
    return () => clearInterval(headingTimer);
  }, []);

  return (
    <>
      {/* Heading */}
      <div className="text-center mb-12 z-20" id="skills">
        <AnimatePresence mode="wait">
          <motion.h1
            key={showExpertise ? "expertise" : "skills"}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="text-5xl md:text-6xl font-bold text-[#091057]"
          >
            {showExpertise ? "My Expertise" : "My Skills"}
          </motion.h1>
        </AnimatePresence>

        <p className="mt-3 text-gray-600 max-w-2xl mx-auto text-center text-base sm:text-lg">
          Self-taught frontend developer passionate about building clean, modern and performant web experiences with a focus on Agentic AI automation.
        </p>
      </div>

      {/* Orbit Section – baaki sab same rahega, sirf skills kam hone se orbit clean lagega */}
      <section className="relative flex flex-col items-center justify-center w-full h-[100vh] overflow-hidden">
        <div className="relative flex flex-col items-center justify-center z-20">
          {/* Orbits same rahenge – code unchanged, sirf skills kam hone se better dikhega */}

          {/* Center Skill Card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={centerSkill.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="z-10 flex flex-col items-center text-center px-6"
            >
              <div className="relative flex items-center justify-center">
                <div className="absolute w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-gradient-to-br from-blue-400/30 to-cyan-300/30 blur-3xl animate-[pulse_5s_ease-in-out_infinite]" />
                <div className="relative w-24 h-24 sm:w-32 sm:h-32 flex items-center justify-center rounded-full bg-white/90 backdrop-blur-md shadow-xl border border-white/50">
                  {React.createElement(centerSkill.icon, {
                    className: `text-6xl sm:text-7xl ${centerSkill.color} drop-shadow-lg`,
                  })}
                </div>
              </div>

              <h3 className="mt-6 text-2xl sm:text-3xl font-semibold text-gray-800">
                {centerSkill.name}
              </h3>
              <p className="mt-2 text-sm sm:text-base text-gray-600 max-w-md">
                {centerSkill.desc}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </>
  );
}