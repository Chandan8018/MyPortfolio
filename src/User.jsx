import {
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLeetcode,
  IconBrandLinkedin,
  IconBrandYoutube,
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
    technologies: ["React", "Node.js", "Framer MotionL", "Express", "flowbite"],
    link: "https://onlinequiz-3w9v.onrender.com/",
    github: "https://github.com/Chandan8018/OnlineQuiz",
  },

  {
    title: "Blog Web App",
    desc: "This project is a full-stack web application for creating and managing blog posts. It is built using the MERN stack, which includes MongoDB, Express.js, React, and Node.js. The application allows users to create, read, update, and delete blog posts. It also includes user authentication and authorization features to ensure secure access to the blogging platform.",
    image: "Blog.png",
    live: false,
    technologies: ["React", "Tailwind", "Ace Editor"],
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
  { link: "https://github.com/Chandan8018", icon: IconBrandGithub },
  {
    link: "https://www.linkedin.com/in/chandan801853/",
    icon: IconBrandLinkedin,
  },
  {
    link: "https://www.instagram.com/chandan___sahoo/",
    icon: IconBrandInstagram,
  },
  {
    link: "#",
    icon: IconBrandYoutube,
  },
  {
    link: "https://leetcode.com/u/chandankumarsahoo/",
    icon: IconBrandLeetcode,
  },
];

const ExperienceInfo = [
  {
    role: "Specialist Programmer",
    company: "Infosys",
    date: "Oct 2023 - Present",
    desc: "I led software development with Spring Boot, React, and Angular, creating scalable microservices and interfaces. I optimized performance by integrating frontend and backend, and enhanced security with RESTful APIs. Collaborating in agile teams, I fostered innovation and efficiency for top-quality solutions.",
    skills: [
      "Springboot",
      "React JS",
      "Angular",
      "Node JS",
      "MySQL",
      "MongoDB",
      "Microservices",
    ],
  },
  {
    role: "System Engineer",
    company: "Infosys",
    date: "Nov 2022 - Sep 2023",
    desc: " I leveraged my skills in Java, Selenium, automation testing, and MySQL to design and implement automated testing frameworks, ensuring robust software validation. I optimized database performance and reliability, and collaborated with cross-functional teams to enhance system operations and ensure seamless integration.",
    skills: [
      "Java",
      "MySQL",
      "Hibernate",
      "Selenium",
      "Jenkins",
      "JIRA",
      "Automation Testing",
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
export { Info, ProjectInfo, socialLinks, SkillInfo, ExperienceInfo, Slugs };
