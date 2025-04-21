'use client';

import React from "react";
import Image from "next/image";

export default function Home() {
    return (
        <>
            {/* Main div */}
            <div className="flex flex-col md:flex-row justify-between items-center mt-36 px-6"> {/* Mobile-first layout */}

                {/* Left side section */}
                <div className="space-y-4 max-w-2xl text-center md:text-left md:w-1/2 pl-9">
                    <h3 className="text-4xl font-light text-gray-400">Hi, I&apos;m</h3>
                    <h1 className="text-5xl font-bold text-white mt-2">Abdullah Ateeq</h1>
                    <h2 className="text-2xl font-semibold text-white">Frontend Developer</h2>
                    <p className="text-lg text-gray-200 mt-4">
                        I&apos;m a Frontend Developer with experience in HTML, CSS, JAVASCRIPT, TYPESCRIPT, NEXT.JS, TAILWIND CSS, and specialized in building responsive and dynamic websites. Currently learning Artificial Intelligence, Agentic & Robotic AI.
                    </p>
                </div>

                {/* Right side section (Image) */}
                <div className="mt-6 md:mt-0 md:w-1/3">
                    <Image
                        src="/profile.jpg"  // Replace with your image in the 'public' folder
                        alt="Abdullah's profile"
                        width={300} // Adjust size as needed
                        height={300} // Adjust size as needed
                        className="rounded-full"
                    />
                </div>

            </div>
        </>
    )
  }