import {
  aws,
  backend,
  creator,
  css,
  express,
  figma,
  git,
  github,
  html,
  javascript,
  mobile,
  mongodb,
  mui,
  mysql,
  nodejs,
  Medilink,
  MernAuth,
  Uber,
  reactjs,
  redux,
  tailwind,
  Three3js,
  web,
} from "../assets";

// import Explorin from '../assets/company/Explorin.png';
// import project2 from '../assets/project2.png'
import Explorin from "../assets/company/Explorin.png";
import Mitlogo from "../assets/company/Mitlogo.png";
import Sailogo from "../assets/company/Sailogo.png";
export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full-Stack Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Ui UX Designer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },

  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "express",
    icon: express,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "mysql",
    icon: mysql,
  },
  {
    name: "Three JS",
    icon: Three3js,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "github",
    icon: github,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "mui",
    icon: mui,
  },
  {
    name: "aws",
    icon: aws,
  },
];

const experiences = [
  {
    title: "Full-Stack Developer",
    company_name: "Explorin Web-D Placement Summer Camp",
    icon: Explorin,
    iconBg: "#383E56",
    date: "July2024 - August 2024",
    points: [
      "I am currently enrolled in the Explori Web Development program, where I am gaining hands-on experience in various aspects of web development.",
      "The program covers essential skills such as HTML, CSS, JavaScript, TypeScript, Node.js, and Next.js, among others.",
      "This intensive training is equipping me with the expertise to create and manage modern web applications and infrastructure.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Rahul Iyer",
    designation: "Export AutoParts",
    company: "GearXpert",
    image:
      "https://www.stglawfirm.com/wp-content/uploads/2022/11/Rahul-Iyer-Attorney-Profile.png.webp",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Abdul Raheman",
    designation: "Ecommerce Business",
    company: "justbuyz",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Kavita Nair",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "MediLink",
    description:
      "Web-based healthcare platform that allows users to book appointments, access medical records, and connect with verified doctors and hospitals, ensuring a seamless and reliable healthcare experience.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "GSAP",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "orange-text-gradient",
      },
      {
        name: "EmailJS",
        color: "-text-gradient",
      },
    ],
    image: Medilink,
    source_code_link: "https://github.com/abhinavsharma2310/Medilink-frontend",
  },
  {
    name: "MernAuth",
    description:
      "A simple and secure authentication platform built with the MERN stack, featuring user registration, login, password reset, and email OTP verification. Developed as a practice project.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Node.js",
        color: "green-text-gradient",
      },
      {
        name: "Express",
        color: "pink-text-gradient",
      },
      {
        name: "MongoDB",
        color: "green-text-gradient",
      },
    ],
    image: MernAuth,
    source_code_link: "https://github.com/abhinavsharma2310/MernAuth-Frontend",
  },
  {
    name: "Uber-Clone",
    description:
      "A ride-hailing web application inspired by Uber, allowing users to book rides in real-time, track drivers on the map, and manage trip history. Built to replicate core ride-sharing functionalities for practice.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Node.js",
        color: "green-text-gradient",
      },
      {
        name: "MongoDB",
        color: "green-text-gradient",
      },
      {
        name: "Express",
        color: "pink-text-gradient",
      },
    ],
    image: Uber,
    source_code_link: "https://github.com/abhinavsharma2310/Dev.uber",
  },
];

const education = [
  {
    title: "Bachelor of Technology (B.Tech) in Computer Science",
    institution: "Moradabad Institute Of Technology",
    date: "2021 - 2025",
    icon: Mitlogo,
    iconBg: "#4a90e2",
    grade: "CGPA: 6.8/10",
    points: [
      "Specialized in Full Stack Web Development and Data Structures.",
      "Worked on projects involving React, Node.js, MongoDB, and Machine Learning.",
      "Active member of the coding club and participated in hackathons.",
    ],
  },
  {
    title: "Higher Secondary Education (Class 12)",
    institution: "Sai Public School Kashipur Uttrakhand",
    date: "2019 - 2020",
    icon: Sailogo,
    iconBg: "#34d399",
    grade: "Percentage: 70.8%",
    points: [
      "Studied Physics, Chemistry, Mathematics, and Computer Science in high school.",
      "Achieved 70% in the board examinations.",
      "Actively participated and excelled in sports, showcasing teamwork and dedication.",
    ],
  },
  {
    title: "Secondary Education (Class 10)",
    institution: "Sai Public School Kashipur Uttrakhand",
    date: "2017 - 2018",
    icon: Sailogo,
    iconBg: " #34d399",
    grade: "Percentage: 72%",
    points: [
      "Excelled in Science and Mathematics.",
      "Secured 72% in the board exams.",
      "Actively participated and excelled in sports, showcasing teamwork and dedication.",
    ],
  },
];

export {
  experiences,
  education,
  projects,
  services,
  technologies,
  testimonials,
};
