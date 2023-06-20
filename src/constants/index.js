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
    python,
    tailwind,
    nodejs,
    postgresql,
    git,
    langC,
    docker,
    bliwe,
    diploop,
    zia,
    projet1,
    projet2,
    projet3,
    projet4,
    projet5,
    threejs,
  } from "../assets";
  
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
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Digital Marketer",
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
      name: "React JS",
      icon: reactjs,
    },

    {
      name: "Python",
      icon: python,
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
      name: "Postgresql",
      icon: postgresql,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "langC",
      icon: langC,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Web Developer",
      company_name: "Ligne Bleue Cyber",
      icon: bliwe,
      iconBg: "#383E56",
      date: "May 2023 - Aug 2023",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
        "Participating to the design, production and testing of application interfaces for the 7th Viva Technology trade show",
      ],
    },
    {
      title: "Digital Marketing Consultant",
      company_name: "Deeploop",
      icon: diploop,
      iconBg: "#E6DEDD",
      date: "Mar 2021 - Sept 2022",
      points: [
        "We help brands and businesses stand out in the ever-changing digital landscape.",
        "We improve businesses web ecosytem for Seo search engine optimization",
        "We make implementation of a content strategy and lead generation to propose personalized offers",
        "We create ergonomic, responsive and SEO-optimized websites. ",
      ],
    },
    {
      title: "Chef",
      company_name: "Zia",
      icon: zia,
      iconBg: "#383E56",
      date: "July 2022 - Oct 2023",
      points: [
        "Check and put away goods",
        "Produce, prepare and dispatch dishes",
        "Organize and supervise the work of kitchen assistants and apprentices",
        "Comply with health and safety regulations",
      ],
    },
  ];
  
  const projects = [
    {
      name: "Dev Portfolio",
      description:
        "My full stack developper's portfolio.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "react three fiber",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
        {
          name: "Framer Motion",
          color: "red-text-gradient",
        },
      ],
      image: projet1,
      source_code_link: "https://github.com/Jermiel2002/myPortfolio",
    },
    {
      name: "A functional window manager",
      description:
        "The aim of this project is to program a proof-of-concept for a window manager where desktop windows are described by a tree. In particular, to enable rapid access to the active window, a tree zipper will be used..",
      tags : [
        {
          name: "Ocaml",
          color: "blue-text-gradient",
        },
        {
          name: "zipper/tree",
          color: "green-text-gradient",
        },
        {
          name: "Algorithm",
          color: "pink-text-gradient",
        },
      ],
      image: projet2,
      source_code_link: "https://github.com/Jermiel2002/gestionnaire-de-fen-tres-en-mosa-que",
    },
    {
      name: "Monster game simulator",
      description:
        "The aim of the project is to program a simulator of the life of a poor monster who spends his time sleeping, running, fighting, working and eating. The user must monitor his condition and make him perform actions that cause him to gain or lose life points or money in order to keep him alive or money to keep him alive.",
      tags: [
        {
          name: "Javascript",
          color: "blue-text-gradient",
        },
        {
          name: "html5&css3",
          color: "green-text-gradient",
        },
        {
          name: "jquery",
          color: "pink-text-gradient",
        },
      ],
      image: projet3,
      source_code_link: "https://github.com/Jermiel2002/MonsterHigh",
    },

    {
      name: "City mapper",
      description:
        "The aim of this very interesting project is to build a public transport application for public transport that uses a PostgreSQL database for data management data management.",
      tags: [
        {
          name: "python",
          color: "blue-text-gradient",
        },
        {
          name: "postgresql",
          color: "green-text-gradient",
        },
        {
          name: "Graph algorithms",
          color: "pink-text-gradient",
        },
      ],
      image: projet4,
      source_code_link: "https://github.com/Jermiel2002/my-portfolio",
    },
    {
      name: "checkers game",
      description:
        "The aim of this very interesting project is to Program robots to play checkers and challenge your fellow robots. Game results and annotations will be sent to the server listening on port 5777 of 2001:910:1410:523:0:fada:80af:2bc2.",
      tags: [
        {
          name: "Language C",
          color: "blue-text-gradient",
        },
        {
          name: "system & network",
          color: "green-text-gradient",
        },
        {
          name: "Graph algorithms",
          color: "pink-text-gradient",
        },
      ],
      image: projet5,
      source_code_link: "https://github.com/Jermiel2002/jeu-dame-hacksys",
    },
  ];
  
  export { services, technologies, experiences, projects };