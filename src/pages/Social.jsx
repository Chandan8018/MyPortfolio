import { Link } from "react-router-dom";
import { socialLinks } from "../User";

const Social = () => {
  const socialIcons = socialLinks.map((socialLink, index) => {
    return (
      <Link
        to={`${socialLink.link}`}
        key={index}
        target='_blank'
        className='font-mono text-lg  hover:text-primaryColor hover:-translate-x-1 transition transform duration-300 ease-in-out'
      >
        <div data-aos='fade-up-left' data-aos-duration='800'>
          {" "}
          <socialLink.icon stroke={2} className='-rotate-90' size={25} />
        </div>
      </Link>
    );
  });

  return (
    <div className='flex md-mx:hidden text-textColor items-center gap-8 fixed bottom-32 -left-48 rotate-90 '>
      {socialIcons}
      <hr className='border w-40 rounded-full  bg-textColor border-textColor' />
    </div>
  );
};
export default Social;
