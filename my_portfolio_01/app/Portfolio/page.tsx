"use client";

import Contact from "../components/Contact";
import DiamondSec from "../components/diamondSec";
import Footer from "../components/Footer";
import HireMe from "../components/HireMe";
// import Idea from "../components/Idea";
import Project from "../components/Project/page";
import ScreenSection from "../components/Screen";
// import ServicesSection from "../components/Services";
import Skills from "../components/Skills";
import WorkExperience from "../components/WorkExperience";

export default function Portfolio() {
  return (
    <>
     <ScreenSection />
      <HireMe />
      <DiamondSec/>
      <Skills/>
      <DiamondSec/>
      {/* <ServicesSection/> */}
      {/* <DiamondSec/> */}
      <Project/>
      <DiamondSec/>
      <WorkExperience/>
      {/* <DiamondSec/> */}
      {/* <Idea/> */}
      <DiamondSec/>
      <Contact/>
      <Footer/>
    </>
  );
}