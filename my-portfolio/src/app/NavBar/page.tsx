import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="text-white px-4 py-5 fixed top-0 left-0 w-full bg-[#030712]/30 backdrop-blur-md z-50">
      <div className="max-w-7xl mx-auto">
        {/* Wrap everything in one peer container */}
        <div className="peer-wrapper relative">
          {/* Hidden checkbox */}
          <input type="checkbox" id="menu-toggle" className="hidden peer" />

          {/* Top Row */}
          <div className="flex justify-between items-center">
            <div className="w-[60px] h-[50px]">
              <Image
                src="/logo.jpg" // Assuming this is in the public directory
                alt="Logo"
                width={60}
                height={50}
                className="rounded-full"
              />
            </div>

            {/* Mobile Toggle Button */}
            <label htmlFor="menu-toggle" className="md:hidden cursor-pointer">
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
              <Link href="/">
                <span className="hover:text-gray-300 px-2 py-1">Home</span>
              </Link>
              <Link href="/about">
                <span className="hover:text-gray-300 px-2 py-1">About</span>
              </Link>
              <Link href="/skills">
                <span className="hover:text-gray-300 px-2 py-1">Skills</span>
              </Link>
              <Link href="/experience">
                <span className="hover:text-gray-300 px-2 py-1">Experience</span>
              </Link>
              <Link href="/projects">
                <span className="hover:text-gray-300 px-2 py-1">Projects</span>
              </Link>
              <Link href="/contact">
                <span className="hover:text-gray-300 px-2 py-1">Contact</span>
              </Link>
              <Link href="/path/to/your/CV.pdf">
                <span className="bg-[#F9FAFB] text-black px-2 py-1 rounded font-bold">
                  Download CV
                </span>
              </Link>
            </div>
          </div>

          {/* Mobile Menu */}
          <div className="hidden peer-checked:flex flex-col space-y-2 mt-2 md:hidden border-t-2 border-gray-500">
            <Link href="/">
              <span className="block px-4 py-2 hover:bg-gray-700 rounded">Home</span>
            </Link>
            <Link href="/about">
              <span className="block px-4 py-2 hover:bg-gray-700 rounded">About</span>
            </Link>
            <Link href="/skills">
              <span className="block px-4 py-2 hover:bg-gray-700 rounded">Skills</span>
            </Link>
            <Link href="/experience">
              <span className="block px-4 py-2 hover:bg-gray-700 rounded">Experience</span>
            </Link>
            <Link href="/projects">
              <span className="block px-4 py-2 hover:bg-gray-700 rounded">Projects</span>
            </Link>
            <Link href="/contact">
              <span className="block px-4 py-2 hover:bg-gray-700 rounded">Contact</span>
            </Link>
            <Link href="/path/to/your/CV.pdf">
              <span className="bg-[#F9FAFB] text-black px-2 py-1 rounded-3xl font-bold text-center">
                Download CV
              </span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
