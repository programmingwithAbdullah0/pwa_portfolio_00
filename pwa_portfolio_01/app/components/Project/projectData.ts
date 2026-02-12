// components/Project/projectData.ts

export interface Project {
  id: number;
  name: string;
  iframeLink: string;
  visitLink: string;
  githubLink: string;
  description: string;
  tags: string[];
}

export const projectData: Project[] = [
  {
    id: 1,
    name: "PWA Fragrance Hub",
    iframeLink: "https://marketplace-hackathon-six.vercel.app/",
    visitLink: "https://marketplace-hackathon-six.vercel.app/",
    githubLink: "https://github.com/programmingwithAbdullah0/marketplace-hackathon",
    description: "Progressive web app for fragrance products showcase with offline support.",
    tags: ["PWA", "Next.js", "Tailwind CSS", "React"],
  },
  {
    id: 2,
    name: "AW Outfits (E-commerce)",
    iframeLink: "https://aw-outfits-website.vercel.app/",
    visitLink: "https://aw-outfits-website.vercel.app/",
    githubLink: "https://github.com/programmingwithAbdullah0/AW-Outfits-website-with-CSS-AS2",
    description: "Complete e-commerce site for outfits with clean UI and responsive design.",
    tags: ["HTML5", "CSS3", "Bootstrap", "Tailwind CSS"],
  },
  {
    id: 3,
    name: "AW Outfits v2 (E-commerce)",
    iframeLink: "https://aw-outfits.vercel.app/",
    visitLink: "https://aw-outfits.vercel.app/",
    githubLink: "https://github.com/programmingwithAbdullah0/AW-Outfits-website",
    description: "Improved version with better UI/UX using modern stack.",
    tags: ["React", "Next.js", "Tailwind CSS"],
  },
  {
    id: 4,
    name: "Color Changer (NextJS Hooks)",
    iframeLink: "https://color-changer-nine-chi.vercel.app/",
    visitLink: "https://color-changer-nine-chi.vercel.app/",
    githubLink: "https://github.com/programmingwithAbdullah0/color-changer-with-hooks",
    description: "Interactive color changer app using React Hooks in Next.js.",
    tags: ["Next.js", "React Hooks", "Tailwind CSS"],
  },
  {
    id: 5,
    name: "Portfolio 2.0",
    iframeLink: "https://pwa-portfoltio.vercel.app/",
    visitLink: "https://pwa-portfoltio.vercel.app/",
    githubLink: "https://github.com/programmingwithAbdullah0/advance-nextjs-portfolio",
    description: "Modern personal portfolio with PWA features and clean design.",
    tags: ["Next.js", "Tailwind CSS", "PWA"],
  },
  {
    id: 6,
    name: "Todoi App",
    iframeLink: "https://todo-app.vercel.app",
    visitLink: "https://todo-app.vercel.app",
    githubLink: "https://github.com/programmingwithAbdullah0/todo-app", // agar link sahi nahi toh update kar lena
    description: "Simple and clean to-do list application.",
    tags: ["React", "Tailwind CSS", "JavaScript"],
  },
];