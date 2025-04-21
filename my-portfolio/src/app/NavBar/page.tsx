
'use client';

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      <nav className="mt-5">
        <div className="flex justify-between items-center px-6">
          {/* Left side logo */}
          <div id="logo" className="ml-6 flex items-center">
            <Image
              src="/logo.jpg" // Replace with your image path in the 'public' folder
              alt="Logo"
              width={50} // Adjust size as needed
              height={50} // Adjust size as needed
              className="rounded-full mr-2" // For circular image with margin
            />
            {/* <h1 className="font-bold text-2xl mt-2">
              Programming with <span className="text-green-400">Abdullah</span>
            </h1> */}
          </div>

          {/* Hamburger Icon for mobile */}
          <div className="md:hidden">
            <button onClick={toggleMenu}>
              {menuOpen ? (
                <div className="text-white text-2xl">X</div> // Close icon
              ) : (
                <div className="text-white text-2xl">☰</div> // Open icon
              )}
            </button>
          </div>

          {/* Links for desktop */}
          <div
            className={`font-bold ml-40 space-x-10 md:flex ${menuOpen ? "block" : "hidden"} md:block`}
          >
            <Link href="/" className="text-white relative group hover:text-blue-500">
              Home
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-blue-600 group-hover:w-full transition-all duration-500"></span>
            </Link>
            <Link href="#about" className="text-white relative group hover:text-blue-500">
              About
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-blue-600 group-hover:w-full transition-all duration-500"></span>
            </Link>
            <Link href="/projects" className="text-white relative group hover:text-blue-500">
              Skills
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-blue-600 group-hover:w-full transition-all duration-500"></span>
            </Link>
            <Link href="#contact" className="text-white relative group hover:text-blue-500">
              Projects
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-blue-600 group-hover:w-full transition-all duration-500"></span>
            </Link>
            <Link href="#services" className="text-white relative group hover:text-blue-500">
              Services
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-blue-600 group-hover:w-full transition-all duration-500"></span>
            </Link>
            <Link href="#contact" className="text-white relative group hover:text-blue-500">
              Contact
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-blue-600 group-hover:w-full transition-all duration-500"></span>
            </Link>
          </div>
        </div>
      </nav>

      {/* For mobile menu */}
      <div className={`md:hidden ${menuOpen ? "block" : "hidden"} bg-gray-800 text-white`}>
        <div className="px-6 py-4">
          <Link href="/" className="block py-2">Home</Link>
          <Link href="#about" className="block py-2">About</Link>
          <Link href="/projects" className="block py-2">Skills</Link>
          <Link href="#projects" className="block py-2">Projects</Link>
          <Link href="#services" className="block py-2">Services</Link>
          <Link href="#contact" className="block py-2">Contact</Link>
        </div>
      </div>
    </div>
  );
}

// 'use client';

// import React, { useState } from "react";
// import Link from "next/link";
// import { FaBars, FaTimes } from "react-icons/fa"; // For hamburger icon
// import Image from "next/image";

// export default function Navbar() {
//     const [menuOpen, setMenuOpen] = useState(false);

//     const toggleMenu = () => {
//         setMenuOpen(!menuOpen);
//     };

//     return (
//         <div>
//             <nav className="mt-5">
//                 <div className="flex justify-between items-center px-6">
//                     {/* Left side logo with margin */}
//                     <div id="logo" className="ml-6 flex items-center">
//                         <Image 
//                             src="/logo.jpg"  // Replace with your image path in the 'public' folder
//                             alt="Logo"
//                             width={50}  // Adjust size as needed
//                             height={50}  // Adjust size as needed
//                             className="rounded-full mr-2" // For circular image with margin
//                         />
//                         <h1 className="font-bold text-2xl mt-2">
//                             Programming with <span className="text-green-400">Abdullah</span>
//                         </h1>
//                     </div>

//                     {/* Hamburger Icon for mobile */}
//                     <div className="md:hidden">
//                         <button onClick={toggleMenu}>
//                             {menuOpen ? (
//                                 <FaTimes className="text-white text-2xl" />
//                             ) : (
//                                 <FaBars className="text-white text-2xl" />
//                             )}
//                         </button>
//                     </div>

//                     {/* Links for desktop */}
//                     <div className={`font-bold space-x-10 md:flex ${menuOpen ? 'block' : 'hidden'} md:block`}>
//                         <Link href="/" className="text-white relative group hover:text-blue-500">
//                             Home
//                             <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-blue-600 group-hover:w-full transition-all duration-500"></span>
//                         </Link>
//                         <Link href="#contact" className="text-white relative group hover:text-blue-500">
//                             About
//                             <span className="absolute left-0 bottom-0 w-0 h-[2px]  bg-blue-600 group-hover:w-full transition-all duration-500"></span>
//                         </Link>
//                         <Link href="/Projects" className="text-white relative group hover:text-blue-500">
//                             Skills
//                             <span className="absolute left-0 bottom-0 w-0 h-[2px]  bg-blue-600 group-hover:w-full transition-all duration-500"></span>
//                         </Link>
//                         <Link href="#contact" className="text-white relative group hover:text-blue-500">
//                             Projects
//                             <span className="absolute left-0 bottom-0 w-0 h-[2px]  bg-blue-600 group-hover:w-full transition-all duration-500"></span>
//                         </Link>
//                         <Link href="#contact" className="text-white relative group hover:text-blue-500">
//                             Services
//                             <span className="absolute left-0 bottom-0 w-0 h-[2px]  bg-blue-600 group-hover:w-full transition-all duration-500"></span>
//                         </Link>
//                         <Link href="#contact" className="text-white relative group hover:text-blue-500">
//                             Contact
//                             <span className="absolute left-0 bottom-0 w-0 h-[2px]  bg-blue-600 group-hover:w-full transition-all duration-500"></span>
//                         </Link>
//                     </div>
//                 </div>
//             </nav>

//             {/* For mobile menu */}
//             <div className={`md:hidden ${menuOpen ? 'block' : 'hidden'} bg-gray-800 text-white`}>
//                 <div className="px-6 py-4">
//                     <Link href="/" className="block py-2">Home</Link>
//                     <Link href="#contact" className="block py-2">Contact</Link>
//                     <Link href="/Projects" className="block py-2">Projects</Link>
//                 </div>
//             </div>
//         </div>
//     );
// }
