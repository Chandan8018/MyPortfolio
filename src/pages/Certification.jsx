"use client";
import React from "react";
import { StickyScroll } from "../components/ui/sticky-scroll-reveal";
import SparklesCore from "../components/ui/sparkles";

const content = [
  {
    title: "Application Architect Web and Mobile",
    description:
      "Completed the PMKVY 4.0 Future Skills program in collaboration with IBM at Lamrin Tech Skills University. This certification covers advanced skills in web and mobile application architecture, focusing on industry standards and best practices.",
    organization:
      "National Council for Vocational Education and Training (NCVET)",
    issuedDate: "May 2024",
    content: (
      <div className='h-full w-full  flex items-center justify-center text-white'>
        <img
          src='/webDevelopment.png'
          width={300}
          height={300}
          className='h-full w-full object-cover'
          alt='linear board demo'
        />
      </div>
    ),
  },
  {
    title: "HackerRank certified JavaScript (Intermediate)",
    organization: "HackerRank",
    issuedDate: "April 2024",
    description:
      "This certification validates my proficiency in JavaScript, covering advanced concepts such as closures, asynchronous programming, and error handling. I demonstrated my ability to solve complex coding challenges and develop robust, efficient solutions.",
    content: (
      <div className='h-full w-full  flex items-center justify-center text-white'>
        <img
          src='/HackerRankJavascript.png'
          className='h-full w-full object-cover'
          alt='linear board demo'
        />
      </div>
    ),
  },
  {
    title: "Employabilitylife certified Experiential Project Certificate",
    organization: "Emplife India Private Limited",
    issuedDate: "May 2024",
    description:
      "Completed a comprehensive project on developing a Library Management System. The project involved designing and implementing a full-fledged system for managing library resources, including book cataloging, member management, and transaction tracking. Demonstrated proficiency in software development, database management, and project execution.",
    content: (
      <div className='h-full w-full  flex items-center justify-center text-white'>
        <img
          src='/internship.png'
          className='h-full w-full object-cover'
          alt='linear board demo'
        />
      </div>
    ),
  },
  {
    title: "Hackerrank certified React JS",
    organization: "HackerRank",
    issuedDate: "April 2024",
    description:
      " This certification validates proficiency in React JS, covering key concepts such as component-based architecture, state management, React Hooks, and efficient UI rendering techniques. The assessment involved solving complex coding challenges and building functional React applications.",
    content: (
      <div className='h-full w-full  flex items-center justify-center text-white'>
        <img
          src='/HackerRankReact.png'
          className='h-full w-full object-cover'
          alt='linear board demo'
        />
      </div>
    ),
  },
];
function Certification() {
  return (
    <div className=''>
      <div className='h-[8rem] w-full bg-transparent flex flex-col items-center justify-center overflow-hidden rounded-md'>
        <h1 className='md:text-4xl text-2xl lg:text-7xl font-bold text-center text-white relative z-20'>
          Certification
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
      <StickyScroll content={content} />
    </div>
  );
}

export default Certification;
