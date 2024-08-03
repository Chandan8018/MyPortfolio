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
import Certifiction from "./Certifiction";

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
          <Toaster />
          <HeroSection />
          <Projects />
          <Skills />
          <Experience />
          <Certifiction />
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
