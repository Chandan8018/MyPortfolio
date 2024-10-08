import React, { useEffect, useState } from "react";
import HeroSection from "./HeroSection";
import Skills from "./Skills";
import Projects from "./Projects";
import { Loader } from "../components/loader/Loader";
import { Toaster } from "react-hot-toast";
import Social from "./Social";
import Experience from "./Experience";
import Contact from "./Contact";
import Mail from "./Mail";
import Certification from "./Certification";
import { Spotlight } from "../components/ui/Spotlight";

function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  return (
    <div
      className={` focus-visible:[&_button]:!outline-none min-h-[100dvh] ${
        loading ? "flex" : ""
      } items-center overflow-hidden justify-center`}
    >
      {loading !== true ? (
        <>
          <Spotlight
            className='-top-40 left-0 md:left-60 md:-top-20 z-50'
            fill='white'
          />
          <Toaster />
          <HeroSection />
          <Projects />
          <Skills />
          <Experience />
          <Certification />
          <Contact />
          <Social />
          <Mail />
        </>
      ) : (
        <Loader />
      )}
    </div>
  );
}

export default Home;
