import Image from 'next/image'; // Import Image for optimization

export default function Skills() {
  return (
    <div id="Skills">
      <div className="text-center pt-10 bg-slate-900">
        <h1 className="bg-slate-800 text-slate-200 px-4 py-2 rounded-full inline-block">Skills</h1>
        <p className="text-slate-300 italic pt-4">The skills, tools and technologies I am really good at:</p>
      </div>

      <section className="bg-slate-900 text-slate-200 px-4 py-12">
        <div className="flex flex-wrap justify-center gap-8 mt-20 pb-10">
          {/* HTML */}
          <div className="flex flex-col items-center">
            <Image 
            className="h-12 w-12 rounded-full" 
            src="/html.jpg" 
            alt="html" 
            width={60} 
            height={60} 
            />
            <span className="mt-2 text-white text-sm">HTML5</span>
          </div>

          {/* CSS */}
          <div className="flex flex-col items-center">
            <Image 
            className="h-12 w-12 rounded-full" 
            src="/css.jpg" 
            alt="css" 
            width={60} 
            height={60} 
            />
            <span className="mt-2 text-white text-sm">CSS3</span>
          </div>

          {/* Javascript */}
          <div className="flex flex-col items-center">
            <Image 
            className="h-12 w-12 rounded-full" 
            src="/js.jpg" 
            alt="Javascript" 
            width={60} 
            height={60} 
            />
            <span className="mt-2 text-white text-sm">Javascript</span>
          </div>

          {/* Tailwind CSS */}
          <div className="flex flex-col items-center">
            <Image 
            className="h-12 w-12 rounded-full" 
            src="/t-css.jpg"  
            alt="Tailwind css" 
            width={60} 
            height={60} 
            />
            <span className="mt-2 text-white text-sm">Tailwind CSS</span>
          </div>

          {/* mySQL */}
          <div className="flex flex-col items-center">
            <Image 
            className="h-12 w-12 rounded-full" 
            src="/mySQL.jpg" 
            alt="mySQL" 
            width={60} 
            height={60} 
            />
            <span className="mt-2 text-white text-sm">mySQL</span>
          </div>

          {/* GitHub */}
          <div className="flex flex-col items-center">
            <Image 
            className="h-12 w-12 invert brightness-200 rounded-full" 
            src="/github.jpg" 
            alt="Github" 
            width={60} 
            height={60} 
            />
            <span className="mt-2 text-white text-sm">GitHub</span>
          </div>
        </div>
      </section>
    </div>
  );
}
