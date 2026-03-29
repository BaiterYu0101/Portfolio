export const myProjects = [
  {
    id: 1,
    title: "Food-Reservation-System",
    description:
      "The food reservation system design primarily focuses on providing a seamless user experience for food ordering and making payment at the same time for primary student by scanning their ID cards.",
    subDescription: [
      "Built a scalable application with ASP.NET Core MVC, integrating global platforms like Amazon for domestic delivery.",
      "Implemented secure authentication and database management using ASP.NET Core Identity and Entity Framework Core.",
      "Designed a responsive frontend with Tailwind CSS, enhancing user experience.",
      "Added payment systems, localization, and product filtering for functionality improvements.",
    ],
    href: "https://github.com/ronylee11/food-reservation-system",
    logo: "",
    image: "/assets/homepage.jpg",
    tags: [
      {
        id: 1,
        name: "HTML",
        path: "/assets/logos/csharp.svg",
      },
      {
        id: 2,
        name: ".EJS",
        path: "/assets/logos/dotnet.svg",
      },
      {
        id: 3,
        name: "JavaScript",
        path: "/assets/logos/efcore.png",
      },
      {
        id: 4,
        name: "CSS",
        path: "/assets/logos/tailwindcss.svg",
      },
    ],
  },
  {
    id: 2,
    title: "System-Health-Dashboard",
    description:
      "A secure authentication and authorization system using Auth0 for seamless user management.",
    subDescription: [
      "Integrated Auth0 for authentication, supporting OAuth, JWT, and multi-factor authentication.",
      "Implemented role-based access control (RBAC) for fine-grained user permissions.",
      "Developed a React-based frontend with Tailwind CSS for a sleek user experience.",
      "Connected to a secure SQLite database for user data storage.",
    ],
    href: "/assets/Health.png",
    logo: "",
    image: "/assets/Health.png",
    tags: [
      {
        id: 1,
        name: "Python",
        path: "/assets/logos/auth0.svg",
      },
        {
            id: 2,
            name: "Git",
            path: "/assets/logos/git.svg",  
        }
    ],
  },
  {
    id: 3,
    title: "Talabia",
    description:
      "A modern, interactive web application built with Blazor WebAssembly and .NET Core.",
    subDescription: [
      "Developed a fully interactive Single Page Application (SPA) using Blazor WebAssembly.",
      "Implemented API interactions using .NET Core for a robust backend.",
      "Designed responsive UI components with Tailwind CSS for an enhanced UX.",
      "Integrated SQLite for efficient client-side database storage.",
    ],
    href: "",
    logo: "",
    image: "/assets/chessboard.png",
    tags: [
      {
        id: 1,
        name: "Java",
        path: "/assets/logos/blazor.svg",
      },
      {
        id: 2,
        name: "Shell",
        path: "/assets/logos/dotnetcore.svg",
      },
    ],
  },
  {
    id: 4,
    title: "3D Server Room Simulation",
    description:
      "A lightweight C++ game engine designed for 2D and 3D game development.",
    subDescription: [
      "Built a powerful rendering engine using OpenGL and C++.",
      "Developed a physics engine with collision detection and particle effects.",
      "Implemented a scripting system for easy game customization.",
      "Optimized performance with multi-threading and efficient memory management.",
    ],
    href: "",
    logo: "",
    image: "/assets/server.jpg",
    tags: [
      {
        id: 1,
        name: "C++",
        path: "/assets/logos/cplusplus.svg",
      },
      {
        id: 2,
        name: "OpenGL",
        path: "/assets/logos/csharp.svg",
      },
      {
        id: 3,
        name: "Git",
        path: "/assets/logos/git.svg",
      },
      {
        id: 4,
        name: "GLSL",
        path: "/assets/logos/microsoft.svg",
      },
      {
        id: 5,
        name: "3D Math",
        path: "/assets/logos/microsoft.svg",
      },
    ],
  },
  {
    id: 5,
    title: "Deepfake-Detection-Tool",
    description:
      "A fully customizable WordPress theme optimized for performance and SEO.",
    subDescription: [
      "Developed a responsive WordPress theme using HTML5, CSS3, and JavaScript.",
      "Integrated Tailwind CSS for modern styling and UI enhancements.",
      "Optimized SEO and page speed using Vite.js for fast builds.",
      "Implemented custom widgets and plugin compatibility for extended functionality.",
    ],
    href: "",
    logo: "",
    image: "/assets/deepfake.jpg",
    tags: [
      {
        id: 1,
        name: "JavaScript",
        path: "/assets/logos/wordpress.svg",
      },
      {
        id: 2,
        name: "HTML5",
        path: "/assets/logos/html5.svg",
      },
      {
        id: 3,
        name: "CSS3",
        path: "/assets/logos/css3.svg",
      },
      {
        id: 4,
        name: "CNN Model",
        path: "/assets/logos/vitejs.svg",
      },
    ],
  },
  {
    id: 6,
    title: "Kube-Thrifter",
    description:
      "A web application that allows users to enroll in courses, watch video lectures, and take quizzes.",
    subDescription: [
      "Engineered a Python tool that interfaces with the Kubernetes API to identify 'Zombie Resources' by analyzing the delta between CPU/Memory requests and actual utilization.",
      "Automated resource reclamation workflows using ArgoCD and Jenkins, enabling a self-healing infrastructure that reduces cloud waste.",
      "Designed the system to provide actionable insights for rightsizing Pods, directly impacting the bottom line by optimizing cloud spending.",
    ],
    href: "",
    logo: "",
    image: "/assets/argocd.jpg",
    tags: [
      {
        id: 1,
        name: "ArgoCD",
        path: "/assets/logos/blazor.svg",
      },
      {
        id: 2,
        name: "Jenkins",
        path: "/assets/logos/azure.svg",
      },
      {
        id: 3,
        name: "AzureDevOps",
        path: "/assets/logos/stripe.svg",
      },
      {
        id: 4,
        name: "Bash",
        path: "/assets/logos/tailwindcss.svg",
      },
    ],
  },
];

export const mySocials = [
  {
    name: "WhatsApp",
    href: "",
    icon: "/assets/socials/whatsApp.svg",
  },
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/ali-sanati/",
    icon: "/assets/socials/linkedIn.svg",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/ali.sanatidev/reels/",
    icon: "/assets/socials/instagram.svg",
  },
];

export const experiences = [
  {
    title: "Hack The Box Academy",
    job: "Hacking Enthusiast ",
    date: "2022-2024",
    contents: [
      "Applied advanced concepts in network security, ethical hacking and cryptography to complete secure communication and penetration testing.",
      "Proficient with industry standard tools and technologies such as Wireshark, Metasploit, and Burp Suite.",
      "Awarded mutiple times of Dean's List Award.",
      "Solid Programming skillset including Python, Bash, JavaScript.",
    ],
  },
  {
    title: "Konica Minolta",
    job: "IT Support Engineer",
    date: "2024-2025",
    contents: [
      "Authored a comprehensive troubleshooting workflow, streamlining issue resolution processes.",
      "Executed PowerShell scripts to remediate CrowdStrike EDR malfunctions.",
      "Diagnosed Blue Screen of Death (BSOD) incidents by interpreting Windows stop codes and correlating with system logs",
      "Utilized ManageEngine for proactive endpoint compliance monitoring and patch deployment verification.",
      "Deployed and validated Symantec Endpoint Protection (SEP) and Data Loss Prevention (DLP) agents.",
      "Aligned patch management and endpoint hardening tasks with ISO 27001/27002 security controls, reinforcing compliance with international security standards.",
    ],
  },
  {
    title: "Infineon Technologies",
    job: "DevOps Engineer",
    date: "2025-Present",
    contents: [
      "Orchestrate the transition of legacy factory workloads into containerized environments using Docker and Kubernetes (OpenShift) to enhance deployment agility and horizontal scalability.",
      "Develop custom automation frameworks to monitor system integration points, reducing manual troubleshooting time by implementing proactive health checks.",
      "Implement real-time monitoring tools to identify system bottlenecks, utilizing a data-driven approach to optimize resource allocation and maintain factory floor stability.",
      "Integrate secure authentication protocols and digital access control systems for critical infrastructure, aligning with industrial cybersecurity standards.",
    ],
  },
];
export const certifications = [
  {
    name: "Kubernetes",
    issuer: "KodeKloud",
    body: "Completed a hands-on, lab-based curriculum in Kubernetes fundamentals, focusing on container orchestration and cluster management through KodeKloud.",
    img: "https://robohash.org/kubernetes", 
    date: "2024",
    credential: {
      url: "/assets/certifications/kubernetes.pdf",
      type: "pdf",
      downloadName: "kodecloud-kubernetes.pdf",
    }
  },
  {
    name: "Certified in Cybersecurity",
    issuer: "ISC2",
    body: "Certified in Cybersecurity by demonstrating strong foundational skills in risk management, threat detection, and incident response.",
    img: "https://robohash.org/kubernetes",
    date: "2025",
    credential: {
      url: "/assets/certifications/CC.png",
      type: "png",
      downloadName: "CC.png",
    }
  },
  {
    name: "Catch The Flag.1 (CTF) Competitor",
    issuer: "Try Hack Me",
    body: "Successfully completed the Hackfinity Battle CTF by solving 20 security tasks to demonstrate practical problem-solving and cybersecurity skills.",
    img: "https://robohash.org/docker",
    date: "2025",
    credential: {
      url: "/assets/certifications/THM.pdf",
      type: "pdf",
      downloadName: "THM.pdf",
    }
  },
  {
    name: "Catch The Flag.2 (CTF) Competitor",
    issuer: "Hack The Box",
    body: "Achieved a team ranking of 110th out of 813 participants in the StackSmash CTF by Hack The Box, demonstrating competitive problem-solving and security expertise.",
    img: "https://robohash.org/azure",
    date: "2025",
    credential: {
      url: "/assets/certifications/HTB.jpeg",
      type: "jpeg",
      downloadName: "HTB.jpeg",
    }
  },
  {
    name: "Hackathon",
    issuer: "University Malaya & Petronas",
    body: "Participated in the Physical Hackathon of Odyssey Hackfest at Universiti Malaya, collaborating on intensive software development and problem-solving challenges.",
    img: "https://robohash.org/terraform",
    date: "2022",
    credential: {
      url: "/assets/certifications/Hackathon.jpeg",
      type: "jpeg",
      downloadName: "Hackathon.jpeg",
    }
  },
  {
    name: "Piano Proficiency",
    issuer: "ABRSM",
    body: "Attained ABRSM Grade 8 in both Piano and Music Theory, demonstrating a high level of technical mastery, analytical thinking, and a decade-long commitment to disciplined practice.",
    img: "https://robohash.org/HMO.png?set=set1",
    date: "2022",
    credential: {
      url: "/assets/certifications/piano.pdf",
      type: "pdf",
      downloadName: "piano.pdf",
    }
  },
];
export const reviews = [
  {
    name: "Jack",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "https://robohash.org/jack",
  },
  {
    name: "Jill",
    username: "@jill",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "https://robohash.org/jill",
  },
  {
    name: "John",
    username: "@john",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://robohash.org/john",
  },
  {
    name: "Alice",
    username: "@alice",
    body: "This is hands down the best thing I've experienced. Highly recommend!",
    img: "https://robohash.org/alice",
  },
  {
    name: "Bob",
    username: "@bob",
    body: "Incredible work! The attention to detail is phenomenal.",
    img: "https://robohash.org/bob",
  },
  {
    name: "Charlie",
    username: "@charlie",
    body: "This exceeded all my expectations. Absolutely stunning!",
    img: "https://robohash.org/charlie",
  },
  {
    name: "Dave",
    username: "@dave",
    body: "Simply breathtaking. The best decision I've made in a while.",
    img: "https://robohash.org/dave",
  },
  {
    name: "Eve",
    username: "@eve",
    body: "So glad I found this. It has changed the game for me.",
    img: "https://robohash.org/eve",
  },
];