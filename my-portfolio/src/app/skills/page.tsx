// import Image from 'next/image'; // Import Image for optimization

// export default function Skills() {
//   return (
//     <div id="Skills">
//       <div className="text-center pt-10 bg-slate-900">
//         <h1 className="bg-slate-800 text-slate-200 px-4 py-2 rounded-full inline-block">Skills</h1>
//         <p className="text-slate-300 italic pt-4">The skills, tools and technologies I am really good at:</p>
//       </div>

//       <section className="bg-slate-900 text-slate-200 px-4 py-12">
//         <div className="flex flex-wrap justify-center gap-8 mt-20 pb-10">
//           {/* HTML */}
//           <div className="flex flex-col items-center">
//             <Image 
//             className="h-12 w-12 rounded-full" 
//             src="/html.jpg" 
//             alt="html" 
//             width={60} 
//             height={60} 
//             />
//             <span className="mt-2 text-white text-sm">HTML5</span>
//           </div>

//           {/* CSS */}
//           <div className="flex flex-col items-center">
//             <Image 
//             className="h-12 w-12 rounded-full" 
//             src="/css.jpg" 
//             alt="css" 
//             width={60} 
//             height={60} 
//             />
//             <span className="mt-2 text-white text-sm">CSS3</span>
//           </div>

//           {/* Javascript */}
//           <div className="flex flex-col items-center">
//             <Image 
//             className="h-12 w-12 rounded-full" 
//             src="/js.jpg" 
//             alt="Javascript" 
//             width={60} 
//             height={60} 
//             />
//             <span className="mt-2 text-white text-sm">Javascript</span>
//           </div>

//           {/* Tailwind CSS */}
//           <div className="flex flex-col items-center">
//             <Image 
//             className="h-12 w-12 rounded-full" 
//             src="/t-css.jpg"  
//             alt="Tailwind css" 
//             width={60} 
//             height={60} 
//             />
//             <span className="mt-2 text-white text-sm">Tailwind CSS</span>
//           </div>

//           {/* mySQL */}
//           <div className="flex flex-col items-center">
//             <Image 
//             className="h-12 w-12 rounded-full" 
//             src="/mySQL.jpg" 
//             alt="mySQL" 
//             width={60} 
//             height={60} 
//             />
//             <span className="mt-2 text-white text-sm">mySQL</span>
//           </div>

//           {/* GitHub */}
//           <div className="flex flex-col items-center">
//             <Image 
//             className="h-12 w-12 invert brightness-200 rounded-full" 
//             src="/github.jpg" 
//             alt="Github" 
//             width={60} 
//             height={60} 
//             />
//             <span className="mt-2 text-white text-sm">GitHub</span>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }
import Image from 'next/image'; // Import Image for optimization

export default function Skills() {
  return (
    <div id="Skills" className="bg-slate-900 text-slate-200 py-12">
      <div className="text-center pt-10">
        <h1 className="bg-slate-800 text-slate-200 px-4 py-2 rounded-full inline-block">Skills</h1>
        <p className="text-slate-300 italic pt-4">The skills, tools and technologies I am really good at:</p>
      </div>

      <section className="px-4 py-12">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 mt-10">
          {/* Skill Box */}
          <div className="flex flex-col items-center group transform hover:scale-110 transition-all duration-300 p-4 bg-slate-700 rounded-lg hover:shadow-xl hover:bg-slate-600">
            <div className="bg-slate-800 p-4 rounded-full mb-4 transition-all duration-300 group-hover:bg-slate-500">
              <Image
                className="h-12 w-12 rounded-full transition-transform duration-300 group-hover:scale-110"
                src="/html.jpg"
                alt="html"
                width={60}
                height={60}
              />
            </div>
            <span className="mt-2 text-white text-sm">HTML5</span>
          </div>

          <div className="flex flex-col items-center group transform hover:scale-110 transition-all duration-300 p-4 bg-slate-700 rounded-lg hover:shadow-xl hover:bg-slate-600">
            <div className="bg-slate-800 p-4 rounded-full mb-4 transition-all duration-300 group-hover:bg-slate-500">
              <Image
                className="h-12 w-12 rounded-full transition-transform duration-300 group-hover:scale-110"
                src="/css.jpg"
                alt="css"
                width={60}
                height={60}
              />
            </div>
            <span className="mt-2 text-white text-sm">CSS3</span>
          </div>

          <div className="flex flex-col items-center group transform hover:scale-110 transition-all duration-300 p-4 bg-slate-700 rounded-lg hover:shadow-xl hover:bg-slate-600">
            <div className="bg-slate-800 p-4 rounded-full mb-4 transition-all duration-300 group-hover:bg-slate-500">
              <Image
                className="h-12 w-12 rounded-full transition-transform duration-300 group-hover:scale-110"
                src="/js.jpg"
                alt="Javascript"
                width={60}
                height={60}
              />
            </div>
            <span className="mt-2 text-white text-sm">JavaScript</span>
          </div>

          <div className="flex flex-col items-center group transform hover:scale-110 transition-all duration-300 p-4 bg-slate-700 rounded-lg hover:shadow-xl hover:bg-slate-600">
            <div className="bg-slate-800 p-4 rounded-full mb-4 transition-all duration-300 group-hover:bg-slate-500">
              <Image
                className="h-12 w-12 rounded-full transition-transform duration-300 group-hover:scale-110"
                src="/t-css.jpg"
                alt="Tailwind CSS"
                width={60}
                height={60}
              />
            </div>
            <span className="mt-2 text-white text-sm">Tailwind CSS</span>
          </div>

          <div className="flex flex-col items-center group transform hover:scale-110 transition-all duration-300 p-4 bg-slate-700 rounded-lg hover:shadow-xl hover:bg-slate-600">
            <div className="bg-slate-800 p-4 rounded-full mb-4 transition-all duration-300 group-hover:bg-slate-500">
              <Image
                className="h-12 w-12 rounded-full transition-transform duration-300 group-hover:scale-110"
                src="/mySQL.jpg"
                alt="mySQL"
                width={60}
                height={60}
              />
            </div>
            <span className="mt-2 text-white text-sm">MySQL</span>
          </div>

          <div className="flex flex-col items-center group transform hover:scale-110 transition-all duration-300 p-4 bg-slate-700 rounded-lg hover:shadow-xl hover:bg-slate-600">
            <div className="bg-slate-800 p-4 rounded-full mb-4 transition-all duration-300 group-hover:bg-slate-500">
              <Image
                className="h-12 w-12 invert brightness-200 rounded-full transition-transform duration-300 group-hover:scale-110"
                src="/github.jpg"
                alt="GitHub"
                width={60}
                height={60}
              />
            </div>
            <span className="mt-2 text-white text-sm">GitHub</span>
          </div>

          <div className="flex flex-col items-center group transform hover:scale-110 transition-all duration-300 p-4 bg-slate-700 rounded-lg hover:shadow-xl hover:bg-slate-600">
            <div className="bg-slate-800 p-4 rounded-full mb-4 transition-all duration-300 group-hover:bg-slate-500">
              <Image
                className="h-12 w-12 invert brightness-200 rounded-full transition-transform duration-300 group-hover:scale-110"
                src="/nextJS.jpg"
                alt="nextJS"
                width={60}
                height={60}
              />
            </div>
            <span className="mt-2 text-white text-sm">NextJS</span>
          </div>
        </div>
      </section>
    </div>
  );
}
