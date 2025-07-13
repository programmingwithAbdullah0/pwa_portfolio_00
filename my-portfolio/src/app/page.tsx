import About from "./about/page";
import Contact from "./contact/page";

import Experience from "./experience/page";
import Footer from "./footer/page";
import Home from "./Home/page";
import Projects from "./projects/page";
import Skills from "./skills/page";


 export default function MainPage() {
    return(
      <>
      <Home/>
      <About/>
      <Skills/>
      <Experience/>
      <Projects/>
      <Contact/>
      <Footer/>
      </>
    )
}