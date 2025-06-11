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
            <nav className="shadow-md">
                <div className="flex justify-between items-center px-6 py-4">
                    {/* Left side logo with margin */}
                     <div id="logo" className="ml-5 flex items-center space-x-3">
                        <Image 
                            src="/logo.jpg"  // Replace with your image path in the 'public' folder
                            alt="Logo"
                            width={50}  // Adjust size as needed
                            height={50}  // Adjust size as needed
                            className="rounded-full" // For circular image
                        />
                    </div>

                    {/* Hamburger Icon for mobile */}
                    <div className="md:hidden">
                        <button onClick={toggleMenu} className="font-extrabold text-2xl">
                            {menuOpen ? "X" : "☰"}
                        </button>
                    </div>

                    {/* Links for desktop */}
                    <div className={`font-bold ml-40 space-x-10 md:flex ${menuOpen ? 'block' : 'hidden'} md:block`}>
                        <Link href="/" className="relative group hover:text-blue-400 transition-all duration-300">
                            Home
                            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-blue-600 group-hover:w-full transition-all duration-300"></span>
                        </Link>
                        <Link href="/about" className="relative group hover:text-blue-400 transition-all duration-300">
                            About
                            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-blue-600 group-hover:w-full transition-all duration-300"></span>
                        </Link>
                        <Link href="/skills" className="relative group hover:text-blue-400 transition-all duration-300">
                            Skills
                            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-blue-600 group-hover:w-full transition-all duration-300"></span>
                        </Link>
                        <Link href="/Projects" className="relative group hover:text-blue-400 transition-all duration-300">
                            Projects
                            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-blue-600 group-hover:w-full transition-all duration-300"></span>
                        </Link>
                        <Link href="#services" className="relative group hover:text-blue-400 transition-all duration-300">
                            Services
                            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-blue-600 group-hover:w-full transition-all duration-300"></span>
                        </Link>
                        <Link href="#contact" className="relative group hover:text-blue-400 transition-all duration-300">
                            Contact
                            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-blue-600 group-hover:w-full transition-all duration-300"></span>
                        </Link>
                    </div>
                </div>
            </nav>

            {/* Mobile Dropdown Menu */}
            <div className={`md:hidden ${menuOpen ? 'block' : 'hidden'} bg-gray-800 text-white`}>
                <div className="px-6 py-4">
                    <Link href="/" className="block py-2 hover:text-blue-400">Home</Link>
                    <Link href="#about" className="block py-2 hover:text-blue-400">About</Link>
                    <Link href="#skills" className="block py-2 hover:text-blue-400">Skills</Link>
                    <Link href="#projects" className="block py-2 hover:text-blue-400">Projects</Link>
                    <Link href="#services" className="block py-2 hover:text-blue-400">Services</Link>
                    <Link href="#contact" className="block py-2 hover:text-blue-400">Contact</Link>
                </div>
            </div>
        </div>
    );
}
