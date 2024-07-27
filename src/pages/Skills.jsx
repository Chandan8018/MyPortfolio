import { SkillInfo } from "../User";
import SkillCard from "./SkillCard";
import { CardBody, CardContainer, CardItem } from "../components/ui/3d-card";

const Skills = () => {
  return (
    <div className='px-16 md-mx:px-6 mb-10 mt-20 font-mono' id='Skills'>
      <h1 className='text-4xl sm-mx:text-3xl xs-mx:text-2xl mb-10 font-bold text-center text-white'>
        Skills
      </h1>
      <div className='flex flex-wrap justify-around md-mx:justify-between sm-mx:justify-center gap-4 md-mx:gap-2'>
        {SkillInfo.map((skill, index) => (
          <SkillCard key={index} title={skill.title} skills={skill.skills} />
        ))}
      </div>
    </div>
  );
};
export default Skills;
