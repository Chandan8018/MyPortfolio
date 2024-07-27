import React from "react";
import HeroSection from "./HeroSection";
import Skills from "./Skills";
import Projects from "./Projects";

function Home() {
  return (
    <div>
      <HeroSection />
      <Projects />
      <Skills />
    </div>
  );
}

export default Home;
