import { SkillInfo } from "../User";
import SkillCard from "./SkillCard";
import { CardBody, CardContainer, CardItem } from "../components/ui/3d-card";
import SparklesCore from "../components/ui/sparkles";

const Skills = () => {
  return (
    <div className='px-16 md-mx:px-6 mb-10 mt-20 font-mono' id='Skills'>
      <div className='h-[8rem] w-full bg-transparent flex flex-col items-center justify-center overflow-hidden rounded-md'>
        <h1 className='md:text-4xl text-3xl lg:text-7xl font-bold text-center text-white relative z-20'>
          Skills
        </h1>
        <div className='w-[40rem] h-40 relative'>
          {/* Gradients */}
          <div className='absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm' />
          <div className='absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4' />
          <div className='absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm' />
          <div className='absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4' />

          {/* Core component */}
          <SparklesCore
            background='transparent'
            minSize={0.4}
            maxSize={1}
            particleDensity={1200}
            className='w-96 h-10 ml-32'
            particleColor='#FFFFFF'
          />
        </div>
      </div>
      <div className='flex flex-wrap justify-around md-mx:justify-between sm-mx:justify-center gap-4 md-mx:gap-2'>
        {SkillInfo.map((skill, index) => (
          <SkillCard key={index} title={skill.title} skills={skill.skills} />
        ))}
      </div>
    </div>
  );
};
export default Skills;
