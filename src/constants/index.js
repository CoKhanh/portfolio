import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  mongodb,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  solidity,
  postgresql,
  mui,
  reactquery,
  csharp,
  unity,
  agoran,
  raramuri,
  raramuriunity,
  idamura,
  digiland,
  ballgravity,
  happbubbles,
  tanca,
  alphawolf,
  bosch,
  kardiachain,
  nomion,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "experience",
    title: "Experience",
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
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Unity Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Product Builder",
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
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "C #",
    icon: csharp,
  },
  {
    name: "Solidity",
    icon: solidity,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Unity",
    icon: unity,
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
    name: "Material UI",
    icon: mui,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "PostGresQL",
    icon: postgresql,
  },
  {
    name: "Tanstack Query",
    icon: reactquery,
  },
];

const experiences = [
  {
    title: "Software Engineer Intern",
    company_name: "Tanca.io",
    icon: tanca,
    iconBg: "#ffffff",
    date: "March 2020 - Jul 2020",
    points: [
      "Learning and developing RESTful-API using Lumen Laravel Framework.",
      "Communicating with team to match the solutions between Back End and Front End.",
    ],
  },
  {
    title: "Software Engineer Intern",
    company_name: "Alpha Wolf",
    icon: alphawolf,
    iconBg: "#ffffff",
    date: "Dec 2020 - Apr 2021",
    points: [
      "Developing and maintaining web applications using React.js and PHP Laravel.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in team's tech talk to learn and share what I learned.",
      "Helping team members to complete task.",
    ],
  },
  {
    title: "Software Engineer",
    company_name: "Alpha Wolf Blockchain",
    icon: alphawolf,
    iconBg: "#ffffff",
    date: "Apr 2021 - Otc 2021",
    points: [
      "Developing and maintaining web applications using React.js and PHP Laravel.",
      "Developing an E-Commerce Website using Shopware 6.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Researching Blockchain and learning how to create smart contract with Solidity.",
      "Communicating with team to match solutions for a decentralised exchange Website.",
      "Participating in team's tech talk to learn and share what I learned.",
      "Helping team members to complete task.",
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "Bosch Global Software Technologies",
    icon: bosch,
    iconBg: "#ffffff",
    date: "Otc 2021 - Dec 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Communicate with team and Danish customer to match the solutions and projects' progress.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews, providing and receiving constructive feedback to other developers.",
    ],
  },
  {
    title: "Software Enginneer",
    company_name: "Kardiachain | Whydah Metaverse",
    icon: kardiachain,
    iconBg: "#000000",
    date: "Nov 2021 - Present",
    points: [
      "Joining to design and develop Web3 projects and website for Raramuri using ReactJS, NextJS and other related technologies.",
      "Building a 3D racing course with Unity then embed into website and mobile app.",
      "Working with UI/UX team to make a decision about UX.",
      "Concentrating on optimizing performance and code base quality.",
      "Setting up project structure and framework for new projects.",
      "Technical support for races using Raramuri's technology.",
      "Participating in interviewing new member",
      "Participating in code reviews, providing and receiving constructive feedback to other developers.",
      "Communicating with team to solve problems of products (Main in Raramuri and Agoran).",
      "Experienced on being a mentor of internships and lead Front end team (4 members) for NFT Marketplace project.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "NFT Marketplace",
    description:
      "A marketplace for NFTs that enables users to list, view and exchange their GameFi (My DefiPet, Mytheria, OVL, etc.) items.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "apollograpql",
        color: "green-text-gradient",
      },
      {
        name: "mui",
        color: "pink-text-gradient",
      },
      {
        name: "etherjs",
        color: "orange-text-gradient",
      },
    ],
    image: agoran,
    source_code_link: "https://agoran.io/",
  },
  {
    name: "Raramuri",
    description:
      "The first hybrid race of its kind, allows you to focus on what you love and do best in the physical world: Running while greatly augmenting your experience in the shared virtual one.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "tanstackquery",
        color: "green-text-gradient",
      },
      {
        name: "mui",
        color: "pink-text-gradient",
      },
      {
        name: "axios",
        color: "orange-text-gradient",
      },
    ],
    image: raramuri,
    source_code_link: "https://raramuri.io/",
  },
  {
    name: "Running live track 3D",
    description:
      "A Raramuri module that feeds races taking place in the real world to the virtual one enables spectators and organizers to follow and cheer on their friends as they compete in real time from actual locations.",
    tags: [
      {
        name: "unity",
        color: "blue-text-gradient",
      },
      {
        name: "readyplayerme",
        color: "green-text-gradient",
      },
      {
        name: "unitymapbox",
        color: "pink-text-gradient",
      },
    ],
    image: raramuriunity,
    source_code_link: "https://raramuri.io/events/binhduong-hm-2023/?tab=live",
  },
  {
    name: "Digital Universe Tech",
    description:
      "An online application that enhances the visual aspects of users' web3 wallets. Each character in a wallet address is represented by a piece of land; the color and shape of the users' land depends on their blockchain activity.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "scss",
        color: "green-text-gradient",
      },
      {
        name: "etherjs",
        color: "pink-text-gradient",
      },
      {
        name: "axios",
        color: "orange-text-gradient",
      },
    ],
    image: digiland,
    source_code_link: "https://digiland.kardiachain.io/",
  },
  {
    name: "Happy Bubbles",
    description:
      "A personal project that generates a couble of bubble with scaling motion in the user's mouse radius using only HTML Canvas and Javascript.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "canvas",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: happbubbles,
    source_code_link: "https://cokhanh-bubble.netlify.app/",
  },
  {
    name: "Ball with Gravity",
    description:
    "A personal project that generates a couble of ball with gravity effect using only HTML Canvas and Javascript.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "canvas",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: ballgravity,
    source_code_link: "https://cokhanh-ball-gravity.netlify.app/",
  },
  {
    name: "Nomion",
    description:
    "A comprehensive solution using blockchain technology to digitize physical products, helping Vietnamese brands",
    tags: [
      {
        name: "ReactJS",
        color: "blue-text-gradient",
      },
      {
        name: "NextJS",
        color: "green-text-gradient",
      },
      {
        name: "Typescript",
        color: "pink-text-gradient",
      },
      {
        name: "ThreeJS",
        color: "orange-text-gradient",
      },
    ],
    image: nomion,
    source_code_link: "https://nomion.io/",
  },
];

export { services, technologies, experiences, testimonials, projects };