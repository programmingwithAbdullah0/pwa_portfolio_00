// import Image from 'next/image'; // Import Image for optimization

// export default function About() {
//   return (
//     <div>
//       <div className="text-center pt-10 bg-slate-900" id="about">
//         <h1 className="bg-slate-800 text-slate-200 px-4 py-2 rounded-full inline-block">About me</h1>
//       </div>

//       <div className="bg-slate-900 text-slate-200 px-4 py-12">
//         <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-10 relative">
          
//           <div className="relative w-full md:w-1/3 mt-10">
//             <div className="absolute top-4 left-4 w-full h-full bg-slate-700 rounded-lg z-0"></div>
            
//             {/* Profile Image */}
//             <div className="relative z-10">
//               <Image
//                 src="/portPic.jpg" // Assuming this is in the public directory
//                 alt="Profile"
//                 width={500} // Set width for the image
//                 height={500} // Set height for the image
//                 className="rounded-lg shadow-lg w-full object-cover"
//               />
//             </div>
//           </div>

//           {/* Content */}
//           <div className="md:w-2/3 space-y-5">
//             <h2 className="text-2xl md:text-3xl font-semibold">Curious about me? Here you have it:</h2>

//             <p>
//               I'm a passionate, self-taught frontend developer who specializes in crafting clean, responsive, and user-
//               <br /> friendly web interfaces using HTML and CSS. I care deeply about user experience, pixel-perfect design,
//               <br /> and writing clear, readable, and highly performant code.
//             </p>

//             <p>
//               I began my journey as a web developer in 2024, and since then, I’ve been constantly evolving — <br />
//               embracing new challenges, refining my skills, and staying up-to-date with the latest technologies in <br />
//               frontend development.
//             </p>

//             <p>
//               I specialize in building user-friendly, visually appealing, pixel-perfect, and fully responsive websites
//               <br /> using modern tools like Bootstrap and Tailwind CSS. My focus is on creating smooth user experiences
//               <br /> backed by clean, efficient, and scalable code.
//             </p>

//             <p>
//               I’m a progressive thinker who enjoys working on products from start to finish — from initial ideation and
//               <br /> planning, all the way through design and full-scale development. I find fulfillment in turning ideas into
//               <br /> fully functional, user-centered digital experiences.
//             </p>

//             <p>
//               When I’m not deep in code, you’ll often find me exploring the tech space on LinkedIn and GitHub, <br />
//               keeping an eye on the exciting journeys of early-stage startups and innovative projects. <br />
//               I regularly share updates, insights, and project-related videos on LinkedIn — feel free to connect! You can
//               also follow my work on GitHub, where I post the code behind my personal and collaborative projects.
//             </p>

//             <p className="italic text-slate-400">Finally, some quick bits about me:</p>

//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4">
//               <p><strong>🎓</strong> I'm a self-taught developer with a passion for continuous learning.</p>
//               <p><strong>🧪</strong> I love exploring and working with new technologies.</p>
//               <p><strong>⚡</strong> I’m a quick learner and adapt easily to new tools and frameworks.</p>
//               <p><strong>📚</strong> Currently pursuing a Diploma in Software Engineering.</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


import Image from 'next/image'; // Import Image for optimization

export default function About() {
  return (
    <div>
      <div className="text-center pt-10 bg-slate-900" id="about">
        <h1 className="bg-slate-800 text-slate-200 px-4 py-2 rounded-full inline-block">About me</h1>
      </div>

      <div className="bg-slate-900 text-slate-200 px-4 py-12">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-10 relative">
          
          <div className="relative w-full md:w-1/3 mt-10">
            <div className="absolute top-4 left-4 w-full h-full bg-slate-700 rounded-lg z-0">
            </div>
            
            {/* Profile Image */}
            <div className="relative z-10">
              <Image
                src="/about.jpg" // Assuming this is in the public directory
                alt="Profile"
                width={500} // Set width for the image
                height={500} // Set height for the image
                className="rounded-lg shadow-lg w-full object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div className="md:w-2/3 space-y-5">
            <h2 className="text-2xl md:text-3xl font-semibold">Curious about me? Here you have it:</h2>

            <p>
              I &apos;m a passionate, self-taught frontend developer who specializes in crafting clean, responsive, and user-
              <br /> friendly web interfaces using HTML and CSS. I care deeply about user experience, pixel-perfect design,
              <br /> and writing clear, readable, and highly performant code.
            </p>

            <p>
              I began my journey as a web developer in 2024, and since then, I’ve been constantly evolving — <br />
              embracing new challenges, refining my skills, and staying up-to-date with the latest technologies in <br />
              frontend development.
            </p>

            <p>
              I specialize in building user-friendly, visually appealing, pixel-perfect, and fully responsive websites
              <br /> using modern tools like Bootstrap and Tailwind CSS. My focus is on creating smooth user experiences
              <br /> backed by clean, efficient, and scalable code.
            </p>

            <p>
              I&apos;m a progressive thinker who enjoys working on products from start to finish — from initial ideation and
              <br /> planning, all the way through design and full-scale development. I find fulfillment in turning ideas into
              <br /> fully functional, user-centered digital experiences.
            </p>

            <p>
              When I m not deep in code, you &apos;ll often find me exploring the tech space on LinkedIn and GitHub, <br />
              keeping an eye on the exciting journeys of early-stage startups and innovative projects. <br />
              I regularly share updates, insights, and project-related videos on LinkedIn — feel free to connect! You can
              also follow my work on GitHub, where I post the code behind my personal and collaborative projects.
            </p>

            <p className="italic text-slate-400">Finally, some quick bits about me:</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4">
              <p><strong>🎓</strong> I &apos;m a self-taught developer with a passion for continuous learning.</p>
              <p><strong>🧪</strong> I love exploring and working with new technologies.</p>
              <p><strong>⚡</strong> I &apos;m a quick learner and adapt easily to new tools and frameworks.</p>
              <p><strong>📚</strong> Currently pursuing a Diploma in Software Engineering.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
