import React, { useState } from "react";
import { cn } from "../../lib/utils";
import { HoveredLink, Menu, MenuItem, ProductItem } from "../ui/navbar-menu";
import { Link, useNavigate } from "react-router-dom";
import { TbHexagonLetterC } from "react-icons/tb";
import { Button } from "flowbite-react";
import { ProjectInfo } from "../../User";
import { HoverBorderGradient } from "../ui/hover-border-gradient";

function Header() {
  return (
    <div className='relative w-full flex items-center justify-center'>
      <Navbar className='top-2' />
    </div>
  );
}

function Navbar({ className }) {
  const [active, setActive] = useState("");
  const navigate = useNavigate();
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-4xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <div className='flex items-center justify-between w-full'>
          <Link to='/'>
            <TbHexagonLetterC className='w-12 h-12 text-primaryColor' />
          </Link>

          <div className='flex items-center justify-center gap-2 md:gap-5 '>
            <MenuItem
              setActive={setActive}
              active={active}
              item={<span onClick={() => navigate("/about")}>About</span>}
            />

            <MenuItem setActive={setActive} active={active} item='Projects'>
              <div className='text-sm grid grid-cols-2 gap-10 p-4'>
                <ProductItem
                  title='Invoice Generation'
                  href='/projects'
                  src='invoice.png'
                  description='This project involves generating a detailed invoice based on various input parameters.'
                />
                <ProductItem
                  title='Patient Chatbot'
                  href='/projects'
                  src='chat.png'
                  description='The purpose of this project is to build a patient dashboard with access to a chatbot.'
                />
                <ProductItem
                  title='Library System'
                  href='/projects'
                  src='lms.png'
                  description='This project is a simple library management system built using the MERN stack.'
                />
                <ProductItem
                  title='secret desires'
                  href='/projects'
                  src='AIchatbot.png'
                  description="Project Name is a Secret Desires. The power of OpenAI's advanced artificial intelligence technology."
                />
              </div>
            </MenuItem>

            <MenuItem
              setActive={setActive}
              active={active}
              item={<span onClick={() => navigate("/skills")}>Skills</span>}
            />
          </div>
          <div children='w-28'>
            <HoverBorderGradient
              containerClassName='rounded-lg'
              className=' flex items-center space-x-2 w-full'
            >
              <MenuItem setActive={setActive} active={active} item='Services'>
                <div className='flex flex-col space-y-4 text-sm'>
                  <HoveredLink href='/web-dev'>Web Development</HoveredLink>
                  <HoveredLink href='/interface-design'>
                    Interface Design
                  </HoveredLink>
                  <HoveredLink href='/seo'>
                    Search Engine Optimization
                  </HoveredLink>
                  <HoveredLink href='/branding'>Branding</HoveredLink>
                </div>
              </MenuItem>
            </HoverBorderGradient>
          </div>
        </div>
      </Menu>
    </div>
  );
}

export default Header;
