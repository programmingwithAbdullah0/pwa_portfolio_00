"use client";
import Image from "next/image";
import Logo from "../../public/PWA_logo.png";
import { Facebook, Instagram, Twitter, Github, Link as LinkIcon,  SendHorizonal } from "lucide-react";
import { BsWhatsapp } from "react-icons/bs";

export default function Footer() {
  return (
    <footer className="w-full bg-gray-50/60 text-gray-800 px-10 py-16">
      {/* 🌟 Top Section */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-8">
        <div className="text-2xl font-bold tracking-wide text-[#091057]">
          Let&apos;s connect there
        </div>
        <a
          href="#contact"
          className="mt-4 md:mt-0 px-6 py-3 bg-[#e3e3e3] text-[#091057] rounded-xl shadow-lg hover:scale-105 transition-transform"
        >
          Hire me
        </a>
      </div>

      <div className="h-[1px] bg-gray-300 mb-10"></div>

      {/* 🔗 Footer Content */}
      <div className="flex flex-col md:flex-row justify-center gap-20">
        {/* 👤 About Section */}
        <div className="flex flex-col gap-4 md:w-1/3">
          <Image 
          src={Logo} 
          alt="My Logo" 
          width={60} 
          height={60} 
          className="rounded-full"
          />
          <h1 className="text-2xl font-bold text-[#091057]">Abdullah Ateeq</h1>
          <p className="text-gray-700">
            Passionate Frontend & Agentic AI Developer delivering modern, responsive, and user-friendly websites.
            worked on automation in different different apps.
          </p>

          {/* 🌐 Social Media Icons */}
          <div className="flex gap-5 mt-3 text-gray-800">
            <a
              href="https://www.facebook.com/profile.php?id=61556808426897"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-white shadow hover:bg-[#091057] hover:text-white transition"
            >
              <Facebook className="w-5 h-5" />
            </a>

            <a
              href="https://www.instagram.com/huzaifaabdulrab2/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-white shadow hover:bg-pink-600 hover:text-white transition"
            >
              <Instagram className="w-5 h-5" />
            </a>

            <a
              href="https://x.com/H_abdulrab"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-white shadow hover:bg-[#1DA1F2] hover:text-white transition"
            >
              <Twitter className="w-5 h-5" />
            </a>

            <a
              href="https://github.com/Huzaifaabdulrab"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-white shadow hover:bg-gray-900 hover:text-white transition"
            >
              <Github className="w-5 h-5" />
            </a>

            <a
              href="https://linktr.ee/huzaifaabdulrab"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-white shadow hover:bg-[#091057] hover:text-white transition"
            >
              <LinkIcon className="w-5 h-5" />
            </a>

            <a
              href="https://wa.me/923400292040"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-white shadow hover:bg-green-500 hover:text-white transition"
            >
              <BsWhatsapp className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* 📜 Navigation & Contact */}
        <div className="flex flex-col md:flex-row gap-20 md:w-2/3">
          {/* Navigation */}
          <ul className="flex flex-col gap-3">
            <h1 className="font-semibold text-lg mb-2 text-[#091057]">Navigation</h1>
            <li className="hover:text-[#091057] cursor-pointer transition">Home</li>
            <li className="hover:text-[#091057] cursor-pointer transition">About</li>
            {/* <li className="hover:text-[#091057] cursor-pointer transition">Services</li> */}
            <li className="hover:text-[#091057] cursor-pointer transition">Resume</li>
            <li className="hover:text-[#091057] cursor-pointer transition">Experience</li>
            <li className="hover:text-[#091057] cursor-pointer transition">Project</li>
          </ul>

          {/* Contact Info */}
          <ul className="flex flex-col gap-3">
            <h1 className="font-semibold text-lg mb-2 text-[#091057]">Contact</h1>
            <li> 0336-2310043</li>
            <li> abdullahateeq331@gmail.com</li>
            <li> abdullahateeq.xyz</li>
          </ul>

          {/* 📬 Subscribe Section */}
      <div className="flex flex-col gap-3">
            <h1 className="font-semibold text-lg mb-2 text-[#091057]">Subscribe</h1>
            <div className="flex items-center border border-gray-300 rounded-xl overflow-hidden bg-gray-50">
              <input
                type="email"
                placeholder="Email Address"
                className="flex-1 px-4 py-2 bg-gray-50 text-gray-800 focus:outline-none"
              />
              <button className="p-3 bg-[#091057] hover:bg-[#0b1a7a] transition text-white">
                <SendHorizonal size={20} />
              </button>
            </div>
          </div>        </div>
      </div>

      <div className="h-[1px] bg-gray-300 my-10"></div>

      {/* 🪪 Copyright */}
      <div className="text-center text-gray-600 text-sm md:text-base">
        © 2025 Programming with Abdullah. All Rights Reserved.
      </div>
    </footer>
  );
}
