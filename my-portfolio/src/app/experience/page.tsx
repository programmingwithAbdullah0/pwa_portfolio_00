// import Image from 'next/image';

// export default function Experience() {
//   return (
//     <div id="Experience">
//       <div className="text-center pt-10 bg-slate-900">
//         <h1 className="bg-slate-800 text-slate-200 px-4 py-2 rounded-full inline-block">Experience</h1>
//         <p className="text-slate-300 italic pt-4">Here is a quick summary of my most recent experiences:</p>
//       </div>

//       <section className="bg-slate-900 text-slate-200 px-4 py-12 justify-center">
//         <div className="max-w-2xl mx-auto bg-[#1e293b] text-white p-6 rounded-lg mt-10 mb-10">
//           <div className="flex justify-between items-start flex-wrap">
//             <div className="flex items-center space-x-4">
//               <Image
//                 src="/upwork.jpg"
//                 alt="Upwork Logo"
//                 className="w-20 h-auto rounded-full"
//                 width={80}
//                 height={80}
//               />
//               <div>
//                 <h2 className="text-lg font-bold">Sr. Frontend Developer</h2>
//               </div>
//             </div>
//             <ul className="list-disc pl-6 mt-4 text-gray-300 space-y-2 text-sm">
//               <li>Developed responsive and modern websites using HTML, CSS, Bootstrap, and Tailwind CSS.</li>
//               <li>Created clean UI layouts, reusable components, and mobile-first designs.</li>
//               <li>Focused on cross-browser compatibility and performance optimization.</li>
//               <li>Built user-friendly interfaces with consistent design patterns.</li>
//               <li>Collaborated in team projects using Git and GitHub for version control.</li>
//               <li>Worked on multiple real-world projects to sharpen front-end development skills.</li>
//             </ul>
//           </div>
//         </div>

//         {/* 2nd experience */}

//          <div className="max-w-2xl mx-auto bg-[#1e293b] text-white p-6 rounded-lg mt-10 mb-10">
//           <div className="flex justify-between items-start flex-wrap">
//             <div className="flex items-center space-x-4">
//               <Image
//                 src="/linkedin.png"
//                 alt="Upwork Logo"
//                 className="w-20 h-auto rounded-full"
//                 width={80}
//                 height={80}
//               />
//               <div>
//                 <h2 className="text-lg font-bold">Posting on Linkedin</h2>
//               </div>
//             </div>
//             <ul className="list-disc pl-6 mt-4 text-gray-300 space-y-2 text-sm">
//               <li>Developed many projects and upload on Linkedin</li>
//               <li>Created many design</li>
//               <li>Build many hackathons and deploy on vercel and other platforms</li>
//               <li>Build user-friendly and easy to understand UI design</li>
//               <li>Mostly focus on SEO and try to improve pixel perfect UI and images.</li>
//               <li>Build audience and growth to providing our services globally.</li>
//             </ul>
//           </div>
//         </div>

//         {/* 3rd expericence */}
//                 <div className="max-w-2xl mx-auto bg-[#1e293b] text-white p-6 rounded-lg mt-10 mb-10">
//           <div className="flex justify-between items-start flex-wrap">
//             <div className="flex items-center space-x-4">
//               <Image
//                 src="/amazon.jpg"
//                 alt="amazon Logo"
//                 className="w-20 h-auto rounded-full"
//                 width={80}
//                 height={80}
//               />
//               <div>
//                 <h2 className="text-lg font-bold">Amazon</h2>
//               </div>
//             </div>
//             <ul className="list-disc pl-6 mt-4 text-gray-300 space-y-2 text-sm">
//               <li>Work in amazon affiliate marketing to promote other products and get commission</li>
//               <li>Take some products and post to sell and get commission</li>
//             </ul>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }


import Image from 'next/image';

export default function Experience() {
  return (
    <div id="Experience">
      <div className="text-center pt-10 bg-slate-900">
        <h1 className="bg-slate-800 text-slate-200 px-4 py-2 rounded-full inline-block">Experience</h1>
        <p className="text-slate-300 italic pt-4">Here is a quick summary of my most recent experiences:</p>
      </div>

      <section className="bg-slate-900 text-slate-200 px-4 py-12 justify-center">
        {/* Experience 1: Teaching (Zoom Sessions) */}
        <div className="max-w-2xl mx-auto bg-[#1e293b] text-white p-6 rounded-lg mt-10 mb-10">
          <div className="flex justify-between items-start flex-wrap">
            <div className="flex items-center space-x-4">
              <Image
                src="/zoom.jpg"
                alt="Zoom Logo"
                className="w-20 h-auto rounded-full"
                width={80}
                height={80}
              />
              <div>
                <h2 className="text-lg font-bold">Teaching (Zoom Sessions)</h2>
              </div>
            </div>
            <ul className="list-disc pl-6 mt-4 text-gray-300 space-y-2 text-sm">
              <li>Conducted online teaching sessions via Zoom for students.</li>
              <li>Taught web development concepts and practices like HTML, CSS, JavaScript, and frameworks.</li>
              <li>Helped students build real-world projects with hands-on experience.</li>
              <li>Provided guidance on coding best practices and debugging.</li>
            </ul>
          </div>
        </div>

        {/* Experience 2: Posting on LinkedIn */}
        <div className="max-w-2xl mx-auto bg-[#1e293b] text-white p-6 rounded-lg mt-10 mb-10">
          <div className="flex justify-between items-start flex-wrap">
            <div className="flex items-center space-x-4">
              <Image
                src="/linkedin.png"
                alt="LinkedIn Logo"
                className="w-20 h-auto rounded-full"
                width={80}
                height={80}
              />
              <div>
                <h2 className="text-lg font-bold">Posting on LinkedIn</h2>
              </div>
            </div>
            <ul className="list-disc pl-6 mt-4 text-gray-300 space-y-2 text-sm">
              <li>Developed many projects and uploaded them on LinkedIn.</li>
              <li>Created many designs for personal and professional branding.</li>
              <li>Participated in hackathons and deployed projects on Vercel and other platforms.</li>
              <li>Focused on SEO and worked to improve UI/UX for better user engagement.</li>
              <li>Built a global audience by sharing valuable content and collaborating with others.</li>
            </ul>
          </div>
        </div>

        {/* Experience 3: Amazon Affiliate Marketing */}
        <div className="max-w-2xl mx-auto bg-[#1e293b] text-white p-6 rounded-lg mt-10 mb-10">
          <div className="flex justify-between items-start flex-wrap">
            <div className="flex items-center space-x-4">
              <Image
                src="/amazon.jpg"
                alt="Amazon Logo"
                className="w-20 h-auto rounded-full"
                width={80}
                height={80}
              />
              <div>
                <h2 className="text-lg font-bold">Amazon Affiliate Marketing</h2>
              </div>
            </div>
            <ul className="list-disc pl-6 mt-4 text-gray-300 space-y-2 text-sm">
              <li>Worked with Amazon affiliate marketing to promote products and earn commissions.</li>
              <li>Managed product listings, promoted deals, and optimized content for higher sales.</li>
              <li>Collaborated with different brands to market their products through affiliate links.</li>
            </ul>
          </div>
        </div>

        {/* Add More Experience Sections Below */}
      </section>
    </div>
  );
}
