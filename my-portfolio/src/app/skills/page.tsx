// import { FaHtml5, FaCss3Alt, FaJsSquare } from "react-icons/fa"; // Importing icons
// import { DiReact, DiNodejs, DiMongodb } from "react-icons/di"; // Importing other icons
// import { motion } from 'framer-motion';  // Make sure this import is correct

// function Skills() {
//   return (
//     <div className="py-20 px-6 max-w-6xl mx-auto">
//       <h2 className="text-4xl font-bold mb-8 text-center">My Skills</h2>

//       <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
        
//         {/* HTML Skill */}
//         <motion.div
//           className="flex items-center justify-center p-6 bg-gray-100 rounded-lg shadow-md"
//           whileHover={{ scale: 1.1 }}
//           transition={{ duration: 0.3 }}
//         >
//           <FaHtml5 className="w-16 h-16 text-orange-500" />  {/* HTML Icon */}
//         </motion.div>
        
//         {/* CSS Skill */}
//         <motion.div
//           className="flex items-center justify-center p-6 bg-gray-100 rounded-lg shadow-md"
//           whileHover={{ scale: 1.1 }}
//           transition={{ duration: 0.3 }}
//         >
//           <FaCss3Alt className="w-16 h-16 text-blue-500" /> {/* CSS Icon */}
//         </motion.div>

//         {/* JavaScript Skill */}
//         <motion.div
//           className="flex items-center justify-center p-6 bg-gray-100 rounded-lg shadow-md"
//           whileHover={{ scale: 1.1 }}
//           transition={{ duration: 0.3 }}
//         >
//           <FaJsSquare className="w-16 h-16 text-yellow-500" />  {/* JavaScript Icon */}
//         </motion.div>

//         {/* React.js Skill */}
//         <motion.div
//           className="flex items-center justify-center p-6 bg-gray-100 rounded-lg shadow-md"
//           whileHover={{ scale: 1.1 }}
//           transition={{ duration: 0.3 }}
//         >
//           <DiReact className="w-16 h-16 text-cyan-500" /> {/* React Icon */}
//         </motion.div>

//         {/* Node.js Skill */}
//         <motion.div
//           className="flex items-center justify-center p-6 bg-gray-100 rounded-lg shadow-md"
//           whileHover={{ scale: 1.1 }}
//           transition={{ duration: 0.3 }}
//         >
//           <DiNodejs className="w-16 h-16 text-green-500" /> {/* Node.js Icon */}
//         </motion.div>

//         {/* MongoDB Skill */}
//         <motion.div
//           className="flex items-center justify-center p-6 bg-gray-100 rounded-lg shadow-md"
//           whileHover={{ scale: 1.1 }}
//           transition={{ duration: 0.3 }}
//         >
//           <DiMongodb className="w-16 h-16 text-green-800" />  {/* MongoDB Icon */}
//         </motion.div>

//         {/* Tailwind CSS Skill */}
//         <motion.div
//           className="flex items-center justify-center p-6 bg-gray-100 rounded-lg shadow-md"
//           whileHover={{ scale: 1.1 }}
//           transition={{ duration: 0.3 }}
//         >
//           <img src="/path-to-tailwind-logo.svg" alt="Tailwind CSS" className="w-16 h-16" />  {/* Tailwind CSS Logo */}
//         </motion.div>
        
//       </div>
//     </div>
//   );
// }

// export default Skills;

// import { FaHtml5, FaCss3Alt, FaJsSquare } from "react-icons/fa"; // Importing icons
// import { DiReact, DiNodejs, DiMongodb } from "react-icons/di"; // Importing other icons

// function Skills() {
//   return (
//     <div className="py-20 px-6 max-w-6xl mx-auto">
//       <h2 className="text-4xl font-bold mb-8 text-center text-gray-800">My Skills</h2>

//       {/* Simple Grid Layout for Skills */}
//       <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-4">

//         {/* HTML Skill */}
//         <div className="flex items-center justify-center p-6 bg-gray-100 rounded-lg shadow-md">
//           <FaHtml5 className="w-16 h-16 text-orange-500" />
//         </div>
        
//         {/* CSS Skill */}
//         <div className="flex items-center justify-center p-6 bg-gray-100 rounded-lg shadow-md">
//           <FaCss3Alt className="w-16 h-16 text-blue-500" />
//         </div>

//         {/* JavaScript Skill */}
//         <div className="flex items-center justify-center p-6 bg-gray-100 rounded-lg shadow-md">
//           <FaJsSquare className="w-16 h-16 text-yellow-500" />
//         </div>

//         {/* React Skill */}
//         <div className="flex items-center justify-center p-6 bg-gray-100 rounded-lg shadow-md">
//           <DiReact className="w-16 h-16 text-cyan-500" />
//         </div>

//         {/* Node.js Skill */}
//         <div className="flex items-center justify-center p-6 bg-gray-100 rounded-lg shadow-md">
//           <DiNodejs className="w-16 h-16 text-green-500" />
//         </div>

//         {/* MongoDB Skill */}
//         <div className="flex items-center justify-center p-6 bg-gray-100 rounded-lg shadow-md">
//           <DiMongodb className="w-16 h-16 text-green-700" />
//         </div>

//       </div>
//     </div>
//   );
// }

// export default Skills;

function Skills() {
    return (
      <div className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-center text-gray-800">My Skills</h2>
  
        {/* Simple Grid Layout for Skills */}
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-4">
  
          {/* HTML Skill */}
          <div className="flex flex-col items-center justify-center p-6 bg-gray-100 rounded-lg shadow-md">
            <img src="/html.jpg" alt="HTML" className="w-16 h-16 mb-4" />
            <p className="text-lg font-medium text-gray-800">HTML</p>
          </div>
          
          {/* CSS Skill */}
          <div className="flex flex-col items-center justify-center p-6 bg-gray-100 rounded-lg shadow-md">
            <img src="/css.jpg" alt="CSS" className="w-16 h-16 mb-4" />
            <p className="text-lg font-medium text-gray-800">CSS</p>
          </div>
  
          {/* JavaScript Skill */}
          <div className="flex flex-col items-center justify-center p-6 bg-gray-100 rounded-lg shadow-md">
            <img src="/js.jpg" alt="JavaScript" className="w-16 h-16 mb-4" />
            <p className="text-lg font-medium text-gray-800">JavaScript</p>
          </div>
  
          {/* React Skill */}
          <div className="flex flex-col items-center justify-center p-6 bg-gray-100 rounded-lg shadow-md">
            <img src="/react.jpg" alt="React" className="w-16 h-16 mb-4" />
            <p className="text-lg font-medium text-gray-800">React</p>
          </div>
  
          {/* Node.js Skill */}
          <div className="flex flex-col items-center justify-center p-6 bg-gray-100 rounded-lg shadow-md">
            <img src="/nodejs.jpg" alt="Node.js" className="w-16 h-16 mb-4" />
            <p className="text-lg font-medium text-gray-800">Node.js</p>
          </div>
  
          {/* MongoDB Skill */}
          <div className="flex flex-col items-center justify-center p-6 bg-gray-100 rounded-lg shadow-md">
            <img src="/mongodb.jpg" alt="MongoDB" className="w-16 h-16 mb-4" />
            <p className="text-lg font-medium text-gray-800">MongoDB</p>
          </div>
  
        </div>
      </div>
    );
  }
  
  export default Skills;
  
