import {
  Badge,
  Button,
  Card,
  Group,
  Image,
  Indicator,
  Text,
  useMatches,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import FullProjectModal from "./FullProjectModal";
import { CardBody, CardContainer, CardItem } from "../components/ui/3d-card";
import { Link } from "react-router-dom";
import { HoverBorderGradient } from "../components/ui/hover-border-gradient";

const ProjectCard = (props) => {
  const [opened, { open, close }] = useDisclosure(false);
  const badge = useMatches({
    xsm: "sm",
    md: "md",
    lg: "lg",
  });
  const btn = useMatches({
    xs: "xs",
    sm: "sm",
    md: "md",
  });
  return (
    <div
      className='w-[32%] lg-mx:w-[46%] md-mx:w-[48%] sm-mx:w-[90%] xs-mx:w-full'
      data-aos='fade-up'
      data-aos-duration='800'
    >
      <CardContainer className='inter-var'>
        <Card
          onClick={open}
          className='!bg-bgColor cursor-pointer transition-transform duration-300 ease-in-out hover:!scale-[1.02] mb-5 hover:!shadow-[0_0_10px_1px_#64FFDA80] xs-mx:!shadow-[0_0_10px_1px_#64FFDA80] !border-primaryColor border-2'
          shadow='lg'
          padding='sm'
          radius='lg'
          withBorder
        >
          <Card.Section className='p-3'>
            <Image
              className='!rounded-xl !shadow-[0_0_5px_0_#64FFDA] max-h-96'
              src={props.image}
              alt={props.image}
            />
          </Card.Section>

          <Group justify='space-between' mt='xs' mb='xs'>
            <div className='!text-2xl gap-2 !font-bold !text-white flex items-center sm-mx:!text-xl'>
              {props.title}
              {props.live === true && (
                <Badge
                  className='!px-1 w-20'
                  variant='outline'
                  color='red'
                  rightSection={
                    <Indicator
                      className='!mr-0.5 !z-0'
                      color='red'
                      position='middle-end'
                      size={7}
                      processing
                    ></Indicator>
                  }
                >
                  Live
                </Badge>
              )}
            </div>
          </Group>
          <Group mb='sm' className='!gap-2'>
            {props.technologies.map(
              (tech, index) =>
                index < 3 && (
                  <Badge
                    key={index}
                    size={badge}
                    variant='light'
                    color='#64FFDA'
                  >
                    {tech}
                  </Badge>
                )
            )}
          </Group>
          <Text
            className='!text-justify !text-sm xs-mx:!text-xs'
            lineClamp={5}
            size='sm'
            c='dimmed'
          >
            {props.desc}
          </Text>
          <div className='mt-3'>
            <HoverBorderGradient
              containerClassName='rounded-lg'
              as='button'
              className=' flex items-center space-x-2 w-full'
              onClick={open}
            >
              <div className='flex justify-center items-center w-full'>
                Show More
              </div>
            </HoverBorderGradient>
          </div>
        </Card>
      </CardContainer>
      {/* <CardContainer className='inter-var'>
        <CardBody className='bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  '>
          <CardItem
            translateZ='50'
            className='text-xl font-bold text-neutral-600 dark:text-white'
          >
            Make things float in air
          </CardItem>
          <CardItem
            as='p'
            translateZ='60'
            className='text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300'
          >
            Hover over this card to unleash the power of CSS perspective
          </CardItem>
          <CardItem translateZ='100' className='w-full mt-4'>
            <Image
              className='!rounded-xl !shadow-[0_0_5px_0_#64FFDA]'
              src={props.image}
              alt={props.image}
            />
          </CardItem>
          <div className='flex justify-between items-center mt-20'>
            <CardItem
              translateZ={20}
              as={Link}
              href='https://twitter.com/mannupaaji'
              target='__blank'
              className='px-4 py-2 rounded-xl text-xs font-normal dark:text-white'
            >
              Try now →
            </CardItem>
            <CardItem
              translateZ={20}
              as='button'
              className='px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold'
            >
              Sign up
            </CardItem>
          </div>
        </CardBody>
      </CardContainer> */}
      <FullProjectModal
        opened={opened}
        close={close}
        title={props.title}
        desc={props.desc}
        image={props.image}
        live={props.live}
        link={props.link}
        github={props.github}
        technologies={props.technologies}
      />
    </div>
  );
};
export default ProjectCard;
