import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    netcad,
    pronet,
    kryptoworld,
    cryptoverse,
    portfolio,
    threejs,
    csharp, 
    smartcontract, 
    metamask, 
    msql
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
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "SQL Developer",
      icon: creator,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
  ];
  
  const technologies = [
 
    {
      name: "C#",
      icon: csharp,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "smartcontract",
      icon: smartcontract,
    },
    {
      name: "metamask",
      icon: metamask,
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
      name: "MongoDB",
      icon: mongodb,
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
      name: "msql",
      icon: msql,
    },
  ];
  
  const experiences = [
    {
      title: "Software Engineer",
      company_name: "Netcad",
      icon: netcad,
      iconBg: "#E6DEDD",
      date: "March 2020 - April 2022",
      points: [
        "Developing and maintaining server and client side applications using C# and JavaScript and other related technologies.",
        "Collaborating with cross-functional teams, including customers, product managers, and other developers, to create high-quality and functional smart city products using mapping technologies.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Software Engineer",
      company_name: "Pronet",
      icon: pronet,
      iconBg: "#383E56",
      date: "April 2022 - Present",
      points: [
        "Developing and maintaining server and client side applications and services using C# and JavaScript and other related technologies.",
        "Developing needs-oriented services and developing responsive design and functional applications accordingly.",
        "Collaborating with cross-functional teams including analysts, product managers, and other developers to create high-quality products.",
        
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "Barış is an open and enthusiastic colleague who does not hesitate to go out of his field in the works he undertakes.",
      name: "Oğuz Kiriş",
      designation: "Software Manager",
      company: "Pronet",
      image: "https://media.licdn.com/dms/image/C4D03AQFiHs3UearieQ/profile-displayphoto-shrink_200_200/0/1656524065956?e=1694044800&v=beta&t=UIEp41sb0j7tVGU53-Ur5svOMI_SJ2Gb3YIp0i6_Nyw",
    },
    {
      testimonial:
        "I've never met a developer who is not afraid to improve themselves and try new technologies like Barış does.",
      name: "Canberk Ateş",
      designation: "Software Engineer",
      company: "İnosoft",
      image: "https://media.licdn.com/dms/image/C4D03AQHfqS5gXpoxcw/profile-displayphoto-shrink_800_800/0/1659610009105?e=1694044800&v=beta&t=K9qJ_lDaV0TxMgE612qaZTUFyRTLGV2qjzkJp8O8uTs",
    },
    {
      testimonial:
        "It's really nice to be a part of a project with him, he can always come to you with a new technologies and shiny solution.",
      name: "Onat Aktaş",
      designation: "Game Developer",
      company: "Spinmatic",
      image: "https://media.licdn.com/dms/image/C4E03AQGxWAEYdYoVNQ/profile-displayphoto-shrink_200_200/0/1606809801914?e=1694044800&v=beta&t=1VwO14xEZSioYOG85Cl70x20FdrHptGcvNUXFBktQC0",
    },
  ];
  
  const projects = [
    {
      name: "My Krypto World",
      description:
        "Web application that allows users to send Ethereum, message and gif via Blockchain network by pairing with MetaMask using Ethereum smart contracts.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "solidty",
          color: "green-text-gradient",
        },
        {
          name: "metamask",
          color: "orange-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: kryptoworld,
      source_code_link: "https://github.com/bariselvn/web3.0",
    },
    {
      name: "Cryptoverse",
      description:
        "Web application that allows users to see instant changes and current details of any cryptocurrency they want, and to access up-to-date news on this subject.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "ant design",
          color: "pink-text-gradient",
        },
      ],
      image: cryptoverse,
      source_code_link: "https://github.com/bariselvn/cryptoverse",
    },
    {
      name: "Portfolio",
      description:
        "Web application that allows users to share introduction, work experiences, projects and testimonials with the use of impressive 3D models.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "three.js",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: portfolio,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };