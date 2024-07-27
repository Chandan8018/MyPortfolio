import React, { useEffect, useState } from "react";
import HeroSection from "./HeroSection";
import Skills from "./Skills";
import Projects from "./Projects";
import { Loader } from "../components/loader/Loader";
import { Toaster } from "react-hot-toast";
import Social from "./Social";
import Experience from "./Experience";

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
          <Social />
        </>
      ) : (
        <Loader />
      )}
    </div>
  );
}

export default Home;
