import {
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLeetcode,
  IconBrandLinkedin,
  IconBrandHackerrank,
} from "@tabler/icons-react";
const Info = {
  name: "Chandan Kumar Sahoo",
  stack: [
    "Software Engineer.",
    "Full Stack Developer.",
    "React Developer.",
    "MERN Stack Developer.",
    "Open Source Contributor.",
  ],
  bio: "I'm a passionate software engineer specialized in crafting efficient and scalable solutions, deliver top-notch web applications, and provide freelance services that exceed client expectations. Let's connect and create something amazing together!",
};

const ProjectInfo = [
  {
    title: "Invoice Generation For e-comm Web.",
    desc: "This project involves generating a detailed invoice based on various input parameters, including seller details, order details, item details, and tax calculations. The invoice will also include placeholders for the company logo, the Download pdf option available, and the seller's signature image.",
    image: "invoice.png",
    live: true,
    technologies: [
      "MERN-Stack",
      "Javascript",
      "Tailwind",
      "Redux",
      "aceternity-ui",
      "Material-UI",
    ],
    link: "https://abc-invoices.onrender.com/",
    github: "https://github.com/Chandan8018/InvoiceGeneration",
  },
  {
    title: "Patient and Doctor Chatbot",
    desc: "The purpose of this project is to build a patient dashboard with access to a chatbot, including session management, interaction logging, and displaying linked doctor information. Patient View patient profile, View interaction history with the chatbot and View linked doctor information, and Doctor Embed a chatbot widget into the dashboard, Submit text queries to the chatbot and Display chatbot responses in real-time.",
    image: "chat.png",
    live: false,
    technologies: [
      "Node js",
      "PostgreSQL",
      "Socket.io",
      "Express js",
      "Tailwind",
      "Firebase",
      "React JS",
    ],
    link: "#",
    github: "https://github.com/Chandan8018/patientChatbot",
  },
  {
    title: "Library Management System",
    desc: "This project is a simple library management system built using the MERN (MongoDB, Express.js, React.js, Node.js) stack, Users can sign up, log in, and log out and Google Authentication securely, Librarians can add, delete, update, and view books, Librarians can manage users, including modifying existing user details, Users can borrow and return books, with due date management, Users can search for books and filter results based on various criteria, The system is designed to work well on both desktop and mobile devices, Librarians and Authentication Users all are post reviews and like on books, and Users can access automatically generated Library Card.",
    image: "lms.png",
    live: true,
    technologies: [
      "React.js",
      "React Router",
      "Firebase",
      "Redux Tool Kit",
      "redux-persist",
      "flowbite-react",
      "swiper",
      "react-quill",
      "Node.js",
      "Express.js",
      "MongoDB Atlas",
      "Mongoose",
      "Swagger UI",
    ],
    link: "https://lms-zopf.onrender.com/",
    github: "https://github.com/Chandan8018/MERN-LMS",
  },
  {
    title: "secret desires",
    desc: "Project Name is a Secret Desires. This innovative project harnesses the power of OpenAI's advanced artificial intelligence technology. By seamlessly integrating text-to-text and text-to-image generation capabilities",
    image: "AIchatbot.png",
    live: true,
    technologies: [
      "React js",
      "react-router-dom",
      "Tailwind",
      "react-icons",
      "react-spinners",
      "tailwind-scroll",
    ],
    link: "https://gleaming-tartufo-18c957.netlify.app/",
    github: "https://github.com/Chandan8018/react_openAI",
  },
  {
    title: "Online Quiz",
    desc: "The Online Quiz Platform is a web application that allows users to take quizzes, view their scores, and review correct answers. Admins can create and manage quizzes with multiple-choice questions. This application is built with modern web technologies to ensure a responsive and user-friendly experience. Admins can create quizzes with multiple-choice questions. Users can take quizzes by answering multiple-choice questions. Users can submit their answers and receive a score.Users can review their answers with the correct ones highlighted.",
    image: "quiz.png",
    live: true,
    technologies: ["React", "Node.js", "Framer Motion", "Express", "flowbite"],
    link: "https://onlinequiz-3w9v.onrender.com/",
    github: "https://github.com/Chandan8018/OnlineQuiz",
  },

  {
    title: "Blog Web App",
    desc: "This project is a full-stack web application for creating and managing blog posts. It is built using the MERN stack, which includes MongoDB, Express.js, React, and Node.js. The application allows users to create, read, update, and delete blog posts. It also includes user authentication and authorization features to ensure secure access to the blogging platform.",
    image: "Blog.png",
    live: false,
    technologies: ["React", "Tailwind", "Node JS"],
    link: "#",
    github: "https://github.com/Chandan8018/MERN-Blog",
  },
];

const SkillInfo = [
  {
    title: "Frontend",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React JS",
      "Angular",
      "Redux",
      "Tailwind CSS",
      "Material UI",
      "Bootstrap",
      "Next JS",
    ],
  },
  {
    title: "Backend",
    skills: [
      "Node JS",
      "Express JS",
      "MySQL",
      "MongoDB",
      "Firebase",
      "PostgresSQL",
      "Next JS",
    ],
  },
  {
    title: "Languages",
    skills: ["JavaScript", "TypeScript"],
  },
  {
    title: "Tools",
    skills: ["Git", "Github", "VS Code", "Postman", "MongoDB Compass"],
  },
];
const socialLinks = [
  {
    link: "https://github.com/Chandan8018",
    icon: IconBrandGithub,
    title: "Github",
  },
  {
    link: "https://www.linkedin.com/in/chandan801853/",
    icon: IconBrandLinkedin,
    title: "LinkedIn",
  },
  {
    link: "https://www.instagram.com/chandan___sahoo/",
    icon: IconBrandInstagram,
    title: "Instagram",
  },
  {
    link: "https://www.hackerrank.com/profile/chandankumarsah4",
    icon: IconBrandHackerrank,
    title: "HackerRank",
  },
  {
    link: "https://leetcode.com/u/chandankumarsahoo/",
    icon: IconBrandLeetcode,
    title: "Leetcode",
  },
];

const ExperienceInfo = [
  {
    role: "Internship as a Full-Stack Developer",
    company: "Emplife India Private Limited",
    date: "March 2024 - May 2024",
    desc: "Honing skills in both front-end and back-end technologies. Applied knowledge gained through Emplife to contribute to diverse projects.Employed innovative tools and platforms such as Microsoft Teams, Taiga, and the Employability.life portal to streamline project management and enhance productivity. Adapted quickly to new technologies, demonstrating a proactive approach to staying updated in the rapidly evolving field of web development.",
    skills: [
      "React JS",
      "Node JS",
      "Express JS",
      "MongoDB",
      "Javascript",
      "Microsoft Teams",
      "Taiga",
      "Automation Testing",
    ],
  },
  {
    role: "QUALITY SUPERVISOR",
    company: "Growus Auto India Pvt Ltd",
    date: "Dec 2022 - Oct 2023",
    desc: "Led a cross-functional team to implement an inspection process, resulting in a 40% reduction in customer complaints. Prepare quality reports and documentation for management and regulatory compliance.Gained the flexibility to adapt to changing requirements, technologies, and industry best practices.",
    skills: [
      "Quality Management Systems",
      "Root Cause Analysis",
      "Leadership",
      "Teamwork",
      "Microsoft Office",
      "MySQL",
    ],
  },
  {
    role: "QUALITY ENGINEER",
    company: "JBM MA Automotive Private Limited",
    date: "Jan 2019 - June 2020",
    desc: "Implementing quality improvement tools like 8D analysis Problem-Solving Techniques, and Why-Why Analysis.Self-motivated and team-oriented effective team player with excellent communication and interpersonal skills.",
    skills: [
      "Supplier Quality Management",
      "Process Improvement",
      "Statistical Process Control",
      "Auto Card",
      "Communication",
    ],
  },
  {
    role: "TECHNICAL SERVICE ENGINEER",
    company: "KALINGA AUTOMOBILES PVT LTD",
    date: "Oct 2017 - Nov 2018",
    desc: "Which is an authorized dealership by “JCB Group”. Increasing customer satisfaction level through providing better servicing, Resolved customer complaints in a prompt, polite, and professional approach, and Reviewed technical documentation to complete equipment maintenance.",
    skills: [
      "Client handling",
      "Documentation and Reporting",
      "Time Management",
      "Customer Support Representative",
      "Communication",
    ],
  },
];
const Slugs = [
  "typescript",
  "javascript",
  "dart",
  "react",
  "angular",
  "flutter",
  "android",
  "html5",
  "css3",
  "springboot",
  "mongodb",
  "selenium",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "mysql",
  "amazonaws",
  "postgresql",
  "firebase",
  "nginx",
  "vercel",
  "testinglibrary",
  "jest",
  "cypress",
  "docker",
  "git",
  "jira",
  "github",
  "gitlab",
  "visualstudiocode",
  "androidstudio",
  "sonarqube",
  "figma",
];

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

export {
  Info,
  ProjectInfo,
  socialLinks,
  SkillInfo,
  ExperienceInfo,
  Slugs,
  content,
};
