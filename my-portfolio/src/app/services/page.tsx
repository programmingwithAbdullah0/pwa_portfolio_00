import React from "react";
import { FaCode, FaLaptopCode, FaMobileAlt, FaCloud } from "react-icons/fa";


const services = [
  {
    id: 1,
    title: "Web Development",
    description:
      "We build responsive and modern websites using React, Next.js, and Tailwind CSS.",
    icon: <FaLaptopCode size={40} className="text-blue-600" />,
  },
  {
    id: 2,
    title: "Frontend Engineering",
    description:
      "Professional UI/UX using modern tools to create fast, beautiful interfaces.",
    icon: <FaCode size={40} className="text-green-600" />,
  },
  {
    id: 3,
    title: "Mobile Apps",
    description:
      "Cross-platform mobile app development using Flutter and React Native.",
    icon: <FaMobileAlt size={40} className="text-purple-600" />,
  },
  {
    id: 4,
    title: "Cloud & Hosting",
    description:
      "We provide deployment solutions on Vercel, Netlify, Firebase, and AWS.",
    icon: <FaCloud size={40} className="text-indigo-600" />,
  },
];

function Services(){
    return(
        <div className="bg-gray-50 min-h-screen py-16 px-4 sm:px-8">
            <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
                Our Services
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">

 {services.map((service) => (
          <div
            key={service.id}
            className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition duration-300 text-center flex flex-col items-center"
          >
            <div className="mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {service.title}
            </h3>
            <p className="text-gray-600 text-sm">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;