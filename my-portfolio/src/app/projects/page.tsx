'use client'

import { useState } from "react";
import projectData from "./projectData";  // Importing the project data from projectData.tsx

export interface Project {
  id: number;
  name: string;
  iframeLink: string;
  visitLink: string;
  githubLink: string;
  description: string;
  tags: string[];
}

export default function Projects() {
  const [projects] = useState<Project[]>(projectData);  // Directly use imported data

  return (
    <section className="bg-[#0f172a] text-white py-10">
      <div className="text-center">
        <h1 className="bg-slate-800 text-slate-200 px-4 py-2 rounded-full inline-block">Work</h1>
        <p className="text-slate-300 italic pt-4 pb-10">Some of the noteworthy projects I have built:</p>
      </div>

      {projects.map((project) => (
        <section
          key={project.id}
          className="max-w-6xl mx-auto bg-[#0f172a] text-white p-6 md:flex rounded-xl mt-10"
        >
          {/* Project Iframe on the Left */}
          <div className="md:w-1/2 w-full mb-4 md:mb-0">
            <iframe
              src={project.iframeLink}
              title={project.name}
              className="rounded-lg w-full h-80 object-cover"
            ></iframe>
          </div>

          {/* Project Details on the Right */}
          <div className="md:w-1/2 md:pl-8 space-y-4">
            <h2 className="text-2xl font-bold mt-5">{project.name}</h2>
            <p className="text-gray-300">{project.description}</p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 pt-4">
              {project.tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-gray-800 px-3 py-1 rounded-full text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* GitHub and Vercel Links */}
            <div className="flex space-x-4 mt-4">
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-700 px-4 py-2 rounded-md text-white hover:bg-gray-600 transition duration-300"
              >
                GitHub
              </a>
              <a
                href={project.visitLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#00C7B7] px-4 py-2 rounded-md text-white hover:bg-[#1b9b97] transition duration-300"
              >
                Visit Site
              </a>
            </div>
          </div>
        </section>
      ))}
    </section>
  );
}
