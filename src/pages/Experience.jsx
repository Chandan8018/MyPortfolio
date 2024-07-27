import { Text, Timeline, useMatches } from "@mantine/core";
import {
  IconBriefcaseFilled,
  IconGitBranch,
  IconGitCommit,
  IconGitPullRequest,
  IconMessageDots,
  IconCalendarWeek,
  IconBuildings,
} from "@tabler/icons-react";
import { ExperienceInfo } from "../User";

const TimelineItem = (items) => {
  const size = useMatches({
    xs: 15,
    md: 20,
  });
  return items.map((item, index) => (
    <Timeline.Item
      data-aos='fade-up'
      data-aos-duration='800'
      key={index}
      className='!pt-12 !mb-2 sm-mx:!p-1'
      bullet={<IconBriefcaseFilled className='!text-bgColor' size={size} />}
    >
      <div className='border shadow-[0_0_10px_0_#64FFDA50] hover:-translate-y-2 transition transform duration-300 ease-in-out flex flex-col gap-2 border-primaryColor p-4 rounded-2xl sm-mx:p-2'>
        <div className='flex gap-2 items-center'>
          <img
            className='rounded-lg w-16 md-mx:w-14'
            src={`${item.company}.png`}
            alt={`${item.company}`}
          />
          <div className='flex flex-col'>
            <div className='text-white text-2xl font-semibold sm-mx:text-xl xs-mx:text-lg xsm-mx:text-base'>
              {item.role}
            </div>
            <div className='text-lg font-semibold text-textColor md-mx:text-base sm-mx:text-sm xs-mx:text-xs flex gap-10 md:gap-20'>
              <span className='flex gap-1'>
                <IconBuildings stroke={2} /> {item.company}
              </span>
              <span className='flex gap-1'>
                <IconCalendarWeek stroke={2} />
                {item.date}
              </span>
            </div>
          </div>
        </div>
        <div className='text-textColor leading-6 text-justify md-mx:text-sm xs-mx:text-xs '>
          {item.desc}
        </div>

        <div className='text-lg font-medium text-textColor md-mx:text-base sm-mx:text-sm xs-mx:text-xs flex gap-1'>
          <div className='font-semibold text-white'>Skills:</div>
          <div className='flex gap-2 flex-wrap'>
            {item.skills.map((skill, index) => (
              <div
                key={index}
                className='text-pretty px-2 rounded-3xl border border-purple-500 hover:bg-slate-700 hover:text-primaryColor transition transform duration-300 ease-in-out hover:shadow-sm'
              >
                {" "}
                {skill}{" "}
              </div>
            ))}
          </div>
        </div>
      </div>
    </Timeline.Item>
  ));
};

const Experience = () => {
  const size = useMatches({
    xs: 15,
    md: 20,
  });
  const dot = useMatches({
    xs: 25,
    md: 30,
  });
  return (
    <div
      className='px-16 mx-20 md-mx:px-6 sm-mx:px-2 lg-mx:mx-0 mt-20 mb-28 font-mono'
      id='Experience'
    >
      <h1 className='text-4xl sm-mx:text-3xl xs-mx:text-2xl  mb-10 font-bold text-center text-white'>
        Experience
      </h1>
      <Timeline color='#64FFDA' active={5} bulletSize={dot} lineWidth={2}>
        {TimelineItem(ExperienceInfo)}
        <Timeline.Item
          bullet={<IconBriefcaseFilled className='!text-bgColor' size={size} />}
        ></Timeline.Item>
      </Timeline>
    </div>
  );
};
export default Experience;
