// app/About/page.tsx
import React from "react";

function About() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-4xl font-extrabold mb-6">About Me</h1>
      
      <section className="mb-6">
        <h2 className="text-2xl font-bold">Hi, I'm Abdullah!</h2>
        <p>
          I'm a passionate web developer with expertise in both frontend and backend technologies. 
          I specialize in creating user-friendly, responsive web applications.
        </p>
      </section>

      <section className="mb-6">
        <h3 className="text-xl font-semibold">Skills</h3>
        <ul className="list-disc pl-6">
          <li><strong>Frontend:</strong> React, Next.js, Tailwind CSS, CSS</li>
          <li><strong>Backend:</strong> Node.js, Python, Typescript</li>
          <li><strong>Databases:</strong> MongoDB, SQL</li>
          <li><strong>Tools:</strong> Git, GitHub, Docker</li>
        </ul>
      </section>

      <section className="mb-6">
        <h3 className="text-xl font-semibold">My Journey</h3>
        <p>
            I am starting my Journey in 2023, First of all starting from HTML, CSS, JAVASCRIPT, and then move on advance technologies like NextJS and other frameworks and nowaday dive me Artificial Intellegence (Agentic Ai)
        </p>
      </section>

      <section className="mb-6">
        <h3 className="text-xl font-semibold">What Drives Me</h3>
        <p>
            I want to become AI Engineer, Thats a very advance Technology use in many branches in Computer Science and nowaday AI Era become More powerfull
        </p>
      </section>
    </div>
  );
}

export default About;
