import { Info } from "../User";
import Typewriter from "typewriter-effect";
import { Button, useMatches } from "@mantine/core";
// import ResumeViewer from "./ResumeViewer";
import { useDisclosure } from "@mantine/hooks";
import { IconDownload } from "@tabler/icons-react";
// import Particles from "./magicui/Particles";
import { NeonGradientCard } from "../cards/Neon-gradient-card";
import { BackgroundGradient } from "../components/ui/background-gradient";
const About = () => {
  const btn = useMatches({
    xs: "xs",
    sm: "sm",
    md: "md",
    lg: "lg",
  });
  return (
    <>
      <div
        data-aos='zoom-out-up'
        data-aos-duration='800'
        className='-mt-10 flex relative overflow-hidden justify-around items-center font-mono px-10 sm-mx:px-4 xs-mx:px-2 xs-mx:py-0 h-fit lg-mx:justify-between bs-mx:flex-wrap bs-mx:flex-col-reverse bs-mx:!overflow-visible bs-mx:gap-6 md-mx:px-6'
        id='About'
      >
        {/* <Particles
          className='absolute -z-20 inset-0'
          quantity={1000}
          ease={80}
          vx={0.1}
          vy={0.1}
          color='#64FFDA'
          refresh
        /> */}
        <div className='bs:ml-10 bs:w-3/5 flex flex-col lg-mx:gap-3  bs-mx:items-center'>
          <div className='text-primaryColor text-3xl lg-mx:text-2xl xs-mx:text-xl xsm-mx:text-lg'>
            Hi, I am
          </div>
          <div className='text-white text-[4rem] font-extrabold lg-mx:text-5xl sm-mx:text-4xl xs-mx:text-3xl xsm-mx:text-[27px]'>
            {Info.name}
          </div>
          <div className='text-white text-4xl flex font-semibold lg-mx:text-[27px] sm-mx:text-2xl xs-mx:text-xl xsm-mx:text-lg'>
            I'm a&nbsp;
            <span className='text-primaryColor'>
              <Typewriter
                options={{ strings: Info.stack, autoStart: true, loop: true }}
              />{" "}
            </span>
          </div>
          <div className='text-textColor text-xl w-[90%] text-justify my-8 lg-mx:my-0 font-semibold lg-mx:text-base sm-mx:text-sm xs-mx:text-xs'>
            {Info.bio}
          </div>
        </div>

        <BackgroundGradient className='rounded-full max-w-[20rem] bg-white dark:bg-zinc-900'>
          <img
            className='w-full  h-full rounded-full '
            src='profile.jpg'
            alt='profile'
          />
        </BackgroundGradient>
      </div>
    </>
  );
};
export default About;
