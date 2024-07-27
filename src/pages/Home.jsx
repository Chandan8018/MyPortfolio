import React, { useEffect, useState } from "react";
import HeroSection from "./HeroSection";
import Skills from "./Skills";
import Projects from "./Projects";
import { Loader } from "../components/loader/Loader";

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
          <HeroSection />
          <Projects />
          <Skills />
        </>
      ) : (
        <Loader />
      )}
    </div>
  );
}

export default Home;
