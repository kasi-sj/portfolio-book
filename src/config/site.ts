import { SiLeetcode, SiPostgresql } from "react-icons/si";
import { SiCodechef } from "react-icons/si";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { RiReactjsFill } from "react-icons/ri";
import { RiNextjsFill } from "react-icons/ri";
import { SiNextui } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiShadcnui } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";
import { SiTypescript } from "react-icons/si";
import { DiNodejs } from "react-icons/di";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { DiPostgresql } from "react-icons/di";
import { TbBrandReactNative } from "react-icons/tb";
import { SiExpo } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { TbBrandCpp } from "react-icons/tb";
import { SiPostman } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { FaDocker } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import { SiSpringboot } from "react-icons/si";
import { SiTauri } from "react-icons/si";
import { SiSocketdotio } from "react-icons/si";
import { TbBrandOauth } from "react-icons/tb";
import { SiRedux } from "react-icons/si";
import { IoLogoFirebase } from "react-icons/io5";
import { SiRubyonrails } from "react-icons/si";
import { SiRedis } from "react-icons/si";
import { SiHuggingface } from "react-icons/si";


export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Kasi nathan S J - Portfolio",
  description: "A portfolio showcasing my projects and skills.",
  links: {
    leetcode: "https://leetcode.com/kasinathansj/",
    linkedin: "http://www.linkedin.com/in/kasinathansj",
    codechef: "https://www.codechef.com/users/kasinathansj",
    geeksforgeeks: "https://auth.geeksforgeeks.org/user/kasinathansj",
    github: "https://github.com/kasi-sj",
  },
  socials: [
    {
      name: "LeetCode",
      icon: SiLeetcode,
      link: "https://leetcode.com/kasinathansj/",
    },
    {
      name: "CodeChef",
      icon: SiCodechef,
      link: "https://www.codechef.com/users/kasinathansj",
    },
    {
      name: "GitHub",
      icon: FaGithub,
      link: "https://github.com/kasi-sj",
    },
    {
      name: "LinkedIn",
      icon: FaLinkedin,
      link: "http://www.linkedin.com/in/kasinathansj",
    },
    {
      name: "Gmail",
      icon: BiLogoGmail,
      link: "mailto:kasinathansj@gmail.com",
    },
  ],

};

export const achievements = [
  {
    image: "/codechef.png",
    genere: "Competitive Coding",
    points: [
      "Starters 118 Division 2 Global Rank 14",
      "620+ problems",
      "5⭐ Max rating 📈 2013",
    ],
    link: "https://www.codechef.com/users/kasinathansj",
  },
  {
    image: "/leetcode.png",
    genere: "Competitive Coding",
    points: [
      "Global Rank 62 in Biweekly Contest 124",
      "1400+ problems",
      "Guardian Max rating 📈 2463",
    ],
    link: "https://leetcode.com/kasinathansj/",
  },
  {
    image: "/GFG.jpg",
    genere: "Competitive Coding",
    points: [
      "Rank 3 in GFG-weekly-coding-contest-147",
      "700+ problems",
      "5⭐ Max rating 📈 2106",
    ],
    link: "https://auth.geeksforgeeks.org/user/kasinathansj",
  },
]

export const skills = [
  {
    title: "Front-end",
    description: "Skills related to the front-end development of web applications.",
    list: [
      {
        name: "HTML",
        icon: FaHtml5,
      },
      {
        name: "CSS",
        icon: IoLogoCss3,
      },
      {
        name: "React",
        icon: RiReactjsFill,
      },
      {
        name: "Next.js",
        icon: RiNextjsFill,
      },
      {
        name: "Tailwind CSS",
        icon: RiTailwindCssFill,
      },
      {
        name: "NextUI",
        icon: SiNextui,
      },
      {
        name: "Shadcn UI",
        icon: SiShadcnui,
      },
      {
        name: "Redux",
        icon: SiRedux,
      },
      {
        name: "Tauri",
        icon: SiTauri,
      },
    ],
  },
  {
    title: "Back-end",
    description: "Skills related to the back-end development of web applications.",
    list: [
      {
        name: "javascript",
        icon: IoLogoJavascript,
      },
      {
        name: "TypeScript",
        icon: SiTypescript,
      },
      {
        name: "Node.js",
        icon: DiNodejs,
      },
      {
        name: "Express",
        icon: SiExpress,
      },
      {
        name: "Spring Boot",
        icon: SiSpringboot,
      },
      {
        name: "Socket.io",
        icon: SiSocketdotio,
      },
      {
        name: "Auth.js",
        icon: TbBrandOauth,
      },
    ],
  },
  {
    title: "Database",
    description: "Skills related to database management and data storage.",
    list: [
      {
        name: "MongoDB",
        icon: SiMongodb,
      },
      {
        name: "PostgreSQL",
        icon: DiPostgresql,
      },
    ],
  },
  {
    title: "App Development",
    description: "Skills related to mobile app development.",
    list: [
      {
        name: "React Native",
        icon: TbBrandReactNative,
      },
      {
        name: "Expo",
        icon: SiExpo,
      },
      {
        name: "Firebase",
        icon: IoLogoFirebase,
      },
    ],
  },
  {
    title: "Programming Languages",
    description: "Languages used for programming and development.",
    list: [
      {
        name: "Java",
        icon: FaJava,
      },
      {
        name: "Python",
        icon: FaPython,
      },
      {
        name: "C++",
        icon: TbBrandCpp,
      },
      {
        name: "JavaScript",
        icon: IoLogoJavascript,
      }
    ],
  },
  {
    title: "Tools",
    description: "Tools and platforms used for development and collaboration.",
    list: [
      {
        name: "Postman",
        icon: SiPostman,
      },
      {
        name: "Git",
        icon: FaGitAlt,
      },
      {
        name: "Docker",
        icon: FaDocker,
      },
      {
        name: "VS Code",
        icon: VscVscode,
      },
    ],
  },
];

export const projects = [
  {
    title: "petitionAI",
    description:
      "An end-to-end platform for AI-powered petition processing and management, combining NLP, machine learning, and distributed systems.",
    image: "/petitionAI.jpg",
    link: "https://petitionai.vercel.app/",
    github: "https://github.com/kasi-sj/PetitAI",
    icons : [ SiSpringboot ,   RiNextjsFill , SiMongodb , SiPostgresql , SiRedis , SiHuggingface , FaDocker , SiShadcnui]
  },
  {
    title: "linkedIn Mobile Clone",
    description:
      "Experience LinkedIn on your phone with my clone app, built using React Native and Expo Router. Manage your profile, build your network, search for jobs, chat with friends, and stay updated with industry news—all in one place. Enjoy the LinkedIn vibe, optimized for mobile!",
    image: "/linkedin.jpg",
    link: "https://drive.google.com/file/d/1CD9dW9xP07d_11vvH-n3OTYFmCN8GM9U/view?usp=sharing",
    github: "https://github.com/kasi-sj/linkedin-clone",
    icons : [SiExpo , TbBrandReactNative , IoLogoFirebase , SiSocketdotio ,DiNodejs , SiExpress , SiRedux ,SiMongodb ]
  },
  {
    title: "TrackMe",
    description: "TrackMe is a comprehensive project that includes a backend server, a frontend web application, and a browser extension. The project is designed to track user screen time, provide insights into browsing habits, and manage website access restrictions.",
    image: "/trackme.png",
    link: "https://trackme-web-jade.vercel.app/",
    github: "https://github.com/kasi-sj/TrackMe",
    icons : [ SiRubyonrails , SiNextui , RiNextjsFill , RiTailwindCssFill ,FaHtml5 , IoLogoCss3 , IoLogoJavascript, FaDocker ,DiPostgresql ]
  },
  {
    title: "CodeSync",
    description:
      "CodeSync is a comprehensive project featuring a code editor with functionalities akin to VS Code, including editing, file management, and a basic terminal. Its standout feature is CodeCollab, enabling real-time collaborative editing via socket.io, allowing multiple users to work on the same codebase simultaneously.",
    image: "/code-sync.png",
    link: "https://code-sync-website.vercel.app/",
    github: "https://github.com/kasi-sj/code-sync",
    icons : [SiTauri , SiNextui , RiNextjsFill , RiTailwindCssFill ,SiSocketdotio,DiPostgresql ]
  },
  {
    title: "JobMagnet",
    description:
      "JobMagnet is a Job Searching platform featuring job posting, searching, applying, and efficient job notifications via nodemailer. Implemented secure user authentication, responsive design, and profile management.",
    image: "/jobmagnet.png",
    link: "https://jobmagnet.vercel.app/",
    github: "https://github.com/kasi-sj/jobmagnet",
    icons : [  DiNodejs , SiExpress , RiNextjsFill ,RiTailwindCssFill , SiMongodb , SiShadcnui]
  },
];
