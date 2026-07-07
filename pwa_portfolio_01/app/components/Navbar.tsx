"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../public/programmingwithabdullah.jpeg";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Certifications", href: "/certifications" },
  { name: "Projects", href: "/#project" },
  { name: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 bg-[#e3e3e3]/20 backdrop-blur-lg flex justify-between items-center w-[90%] max-w-6xl h-16 rounded-full px-6 shadow-lg z-50 border border-[#e3e3e3]/30">
      <ul className="hidden md:flex justify-center items-center gap-10 text-[16px] font-medium">
        {navLinks.map((item) => (
          <li key={item.name} className="relative group">
            <Link
              href={item.href}
              className="relative cursor-pointer transition-colors duration-300 hover:text-[#091057] px-4 py-2 rounded-full"
            >
              {item.name}
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#091057] transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </li>
        ))}
      </ul>

      <div className="flex justify-center items-center">
        <Image src={Logo} alt="Logo" width={45} height={45} className="rounded-full" />
      </div>

      <button
        className="md:hidden flex flex-col gap-1.5 absolute right-6 top-1/2 -translate-y-1/2"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        <span className={`block w-6 h-0.5 bg-[#091057] transition-all duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""}`} />
        <span className={`block w-6 h-0.5 bg-[#091057] transition-all duration-300 ${isOpen ? "opacity-0" : ""}`} />
        <span className={`block w-6 h-0.5 bg-[#091057] transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""}`} />
      </button>

      <div
        className={`absolute top-20 left-0 w-[70%] sm:w-[50%] bg-[#e3e3e3]/80 backdrop-blur-lg flex flex-col gap-4 p-6 text-center rounded-2xl shadow-lg z-60 border border-[#e3e3e3]/20 transition-all duration-500 ease-in-out ${
          isOpen ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
        }`}
      >
        {navLinks.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className="relative text-white bg-[#091057]/70 hover:bg-[#091057] py-2 rounded-full cursor-pointer transition-all duration-300"
            onClick={() => setIsOpen(false)}
          >
            {item.name}
          </Link>
        ))}
      </div>
    </nav>
  );
}
