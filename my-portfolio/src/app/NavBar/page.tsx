'use client'
import { useState } from 'react';
import Image from 'next/image';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-[#030712] text-white px-4 py-5 fixed top-0 left-0 w-full bg-[#030712]/30 backdrop-blur-md z-50">
      <div className="max-w-7xl mx-auto">
        {/* Wrap everything in one peer container */}
        <div className="peer-wrapper relative">
          {/* Hidden checkbox */}
          <input
            type="checkbox"
            id="menu-toggle"
            className="hidden peer"
            checked={menuOpen}
            onChange={() => setMenuOpen(!menuOpen)}
          />

          {/* Top Row */}
          <div className="flex justify-between items-center">
            <div className="w-[60px] h-[50px]">
              <Image 
              src="/logo.jpg"
              alt="Logo"
              width={60}
              height={50} 
              className='rounded-full'
              />
            </div>

            {/* Mobile Toggle Button */}
            <label
              htmlFor="menu-toggle"
              className="md:hidden cursor-pointer"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </label>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-6">
              <a href="/about" className="hover:text-gray-300 px-2 py-1">About</a>
              <a href="/skills" className="hover:text-gray-300 px-2 py-1">Skills</a>
              <a href="/experience" className="hover:text-gray-300 px-2 py-1">Experience</a>
              <a href="/projects" className="hover:text-gray-300 px-2 py-1">Project</a>
              <a href="/contact" className="hover:text-gray-300 px-2 py-1">Contact</a>
              <a
                className="bg-[#F9FAFB] text-black px-2 py-1 rounded font-bold"
                href="dist/Modern Minimalist CV Resume (1).pdf"
              >
                Download CV
              </a>
            </div>
          </div>

          {/* Mobile Menu */}
          <div
            className={`${
              menuOpen ? 'flex' : 'hidden'
            } flex-col space-y-2 mt-2 md:hidden border-t-2 border-gray-500`}
          >
            <a href="/about" className="block px-4 py-2 hover:bg-gray-700 rounded">About</a>
            <a href="/skills" className="block px-4 py-2 hover:bg-gray-700 rounded">Skills</a>
            <a href="/experience" className="block px-4 py-2 hover:text-gray-700 rounded">Experience</a>
            <a href="/projects" className="block px-4 py-2 hover:bg-gray-700 rounded">Work</a>
            <a href="/contact" className="block px-4 py-2 hover:bg-gray-700 rounded">Contact</a>
            <a
              className="bg-[#F9FAFB] text-black px-2 py-1 rounded-3xl font-bold text-center"
              href="dist/Modern Minimalist CV Resume (1).pdf"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
