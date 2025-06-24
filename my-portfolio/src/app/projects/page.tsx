import React from "react";
import projectData from "./projectData";

function Projects() {
  return (
    <div className="bg-gray-100 min-h-screen py-10">
      <h1 className="font-bold text-center text-4xl mb-10 text-gray-800">
        Projects
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-6 max-w-7xl mx-auto">
        {projectData.map((project) => (
          <div
            key={project.id}
            className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col"
          >
            {/* Live Preview using iframe */}
            <div className="w-full h-56">
              <iframe
                src={project.iframeLink}
                title={project.name}
                className="w-full h-full border-0"
                loading="lazy"
              />
            </div>

            <div className="p-5 flex-1 flex flex-col justify-between">
              {/* Project Title */}
              <h3 className="text-xl font-semibold text-gray-800 text-center mb-4">
                {project.name}
              </h3>

              {/* Buttons */}
              <div className="flex justify-center gap-4 mt-auto">
                <a
                  href={project.visitLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition"
                >
                  Visit
                </a>

                {project.githubLink && (
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-800 hover:bg-gray-900 text-white font-medium py-2 px-4 rounded-md transition"
                  >
                    GitHub
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
