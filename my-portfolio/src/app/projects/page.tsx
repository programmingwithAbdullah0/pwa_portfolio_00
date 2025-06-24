import React from "react"
import projectData from "./projectData"
import Image from "next/image";
function Projects() {
    return(
        <div className="bg-gray-100 min-h-screen py-10">
            <h1 className="font-bold text-center text-4xl mb-10 text-gray-800">Projects</h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-6 max-w-7xl mx-auto">
      {projectData.map((project) => (
        <div 
         key={project.id}
         className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-xl transition-shadow duration-300">
          <Image 
          src= {project.image} 
          alt={"todo-image"} 
          width={300}
          height={300}
          className="w-full h-48 object-cover"
          />
          <div className="p-5">
          <h3 className="text-xl font-semibold text-gray-700 text-center">
            {project.name}
          </h3>
          </div>
        </div>
      ))}
      </div>
      </div>
  );
}
export default Projects