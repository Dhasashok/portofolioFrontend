export const personalInfo = {
  name: "Ashok Rohidas Dhas",
  shortName: "Ashok Dhas",
  initials: "AD",
  title: "Software Developer | Full Stack Developer",
  location: "Pune, Maharashtra, India",
  email: "ashokdhas6566@gmail.com",
  phone: "+91 90667 76566",
  phoneRaw: "+919066776566",
  linkedin: "https://www.linkedin.com/in/ashok-dhas-849664377/",
  github: "", // Left empty as per instruction not to invent URLs
  resumeUrl: "/Ashok_Rohidas_Dhas_Resume.pdf",
  availability: "Open for SDE & Full Stack Opportunities",
  college: "Genba Sopanrao Moze College of Engineering, Pune (GSMCOE)",
  degree: "B.E. Computer Engineering",
  cgpa: "8.50 / 10",
  careerTargets: [
    "Software Development Engineer (SDE)",
    "Full Stack Developer",
    "Software Developer"
  ],
  heroRoles: [
    "Software Developer",
    "Full Stack Developer",
    "Java Developer",
    "React.js Developer",
    "Node.js Developer"
  ],
  heroBio: "Full-Stack Software Developer building scalable web applications with React, Node.js, and Cloud Databases. Engineered production systems including a PG operations platform saving 15+ hrs/week and a live hospital queue management system.",
  aboutBio: [
    "I am a B.E. Computer Engineering graduate from Genba Sopanrao Moze College of Engineering, Pune, with a CGPA of 8.50/10. I have hands-on experience in Java, JavaScript, React.js, Node.js, Express.js, and MySQL, along with practical exposure to full-stack web development.",
    "I enjoy building practical software solutions, designing responsive interfaces, developing REST APIs, integrating databases, and solving real-world problems through technology.",
    "I am currently seeking Software Development Engineer and Full Stack Developer opportunities where I can contribute my programming and problem-solving skills while continuing to grow as a software engineer."
  ],
  stats: [
    { label: "CGPA", value: "8.50", subtext: "SPPU Pune" },
    { label: "Internships", value: "2", subtext: "Web & Full Stack" },
    { label: "Major Full-Stack Projects", value: "2", subtext: "Production Ready" },
    { label: "REST APIs", value: "40+", subtext: "Engineered & Tested" }
  ]
};

export const servicesData = [
  {
    id: "full-stack",
    title: "Full-Stack System Architecture",
    description: "Engineering end-to-end web applications integrating reactive frontends, resilient Node.js services, and relational database layers.",
    badge: "End-to-End",
    technologies: ["React.js", "Node.js", "Express.js", "MySQL", "REST API", "Vercel"],
    color: "purple"
  },
  {
    id: "frontend",
    title: "Modern Reactive Frontend",
    description: "Crafting high-performance, accessible, and responsive interfaces with modular React component patterns and state management.",
    badge: "UI/UX & SPAs",
    technologies: ["React.js", "JavaScript ES6+", "HTML5", "CSS3", "Responsive UI"],
    color: "blue"
  },
  {
    id: "backend",
    title: "Scalable Backend & Real-Time APIs",
    description: "Developing secured RESTful endpoints, role-based authorization (RBAC), stateless JWT authentication, and live Socket.io WebSockets.",
    badge: "Scalable APIs",
    technologies: ["Node.js", "Express.js", "JWT Auth", "RBAC", "Socket.io", "Postman"],
    color: "green"
  },
  {
    id: "database",
    title: "Relational & Cloud Databases",
    description: "Designing normalized SQL schemas, indexing strategies, and integrating cloud database environments like TiDB Cloud and MySQL.",
    badge: "Data Architecture",
    technologies: ["MySQL", "TiDB Cloud", "Database Design", "SQL Modeling", "Workbench"],
    color: "orange"
  }
];

export const skillsData = [
  {
    category: "LANGUAGES",
    icon: "Code2",
    accent: "purple",
    skills: ["Java", "JavaScript ES6+", "SQL"]
  },
  {
    category: "FRONTEND",
    icon: "Layout",
    accent: "blue",
    skills: ["React.js", "HTML", "CSS"]
  },
  {
    category: "BACKEND",
    icon: "Server",
    accent: "green",
    skills: ["Node.js", "Express.js", "REST API", "JWT Authentication", "Socket.io"]
  },
  {
    category: "DATABASE",
    icon: "Database",
    accent: "orange",
    skills: ["MySQL", "Database Design", "MySQL Workbench"]
  },
  {
    category: "TOOLS",
    icon: "Wrench",
    accent: "pink",
    skills: ["Git", "GitHub", "VS Code", "Postman"]
  },
  {
    category: "CONCEPTS",
    icon: "Cpu",
    accent: "indigo",
    skills: ["OOP", "SDLC", "DBMS", "Software Development", "API Integration"]
  }
];

export const experienceData = [
  {
    id: "motioncut",
    company: "MotionCut Pvt. Ltd.",
    role: "Web Development Intern",
    period: "Jan 2025 – Feb 2025",
    location: "Remote",
    type: "Internship",
    technologies: ["HTML", "CSS", "JavaScript"],
    responsibilities: [
      "Created responsive web pages using HTML, CSS, and JavaScript with cross-device compatibility.",
      "Enhanced interactive UI features using JavaScript DOM manipulation.",
      "Completed assigned development tasks within the internship timeline."
    ]
  },
  {
    id: "sgms",
    company: "SGMS Infotech LLP",
    role: "Full Stack Developer Intern",
    period: "Jul 2024 – Aug 2024",
    location: "Pune, India",
    type: "Internship",
    technologies: ["Frontend Development", "Backend Development", "Full Stack Development"],
    responsibilities: [
      "Participated in web development tasks across multiple application modules.",
      "Gained practical exposure to frontend and backend development workflows.",
      "Assisted the development team with assigned tasks and project modules."
    ]
  }
];

export const projectsData = [
  {
    id: "royal-orchid",
    featured: true,
    title: "Royal Orchid – PG Management System",
    category: "Accommodation · Full Stack",
    oneline: "Automates tenant onboarding, live bed allocations, rent accounting, and grievance resolution.",
    tagline: "Comprehensive Accommodation & Tenant Operations Management Platform",
    description: "Built a production-ready full-stack accommodation portal that automates daily operational workflows for PG owners, eliminating manual registers and spreadsheet errors.",
    technologies: ["React.js", "Node.js", "Express.js", "TiDB Cloud", "Vercel", "Render", "TestSprite", "JWT"],
    stats: [
      { label: "Manual Time Saved", value: "15 hrs/wk" },
      { label: "REST APIs", value: "40+" },
      { label: "Security", value: "JWT + RBAC" },
      { label: "Cloud DB", value: "TiDB Cloud" }
    ],
    features: [
      "Real-time bed allocation and interactive room occupancy visualization",
      "Automated rent collection, invoice generation, and financial ledger logs",
      "Tenant grievance dispatch system with priority categorization and resolution tracking",
      "Role-Based Access Control (RBAC) securing resident, staff, and owner portals",
      "Engineered 40+ REST API endpoints tested and benchmarked via TestSprite",
      "High-availability multi-tier deployment across Vercel, Render, and TiDB Distributed SQL"
    ],
    architecture: {
      frontend: "React.js dynamic client with modular component design and responsive dashboards.",
      backend: "Node.js & Express.js REST API layer handling 40+ secure endpoints.",
      database: "TiDB Cloud distributed SQL database with relational schema design.",
      security: "JSON Web Tokens (JWT) for stateless sessions with granular role-based authorization.",
      testing: "Comprehensive API and interface verification using TestSprite."
    },
    githubUrl: null,
    liveUrl: "https://pgmanagement-frontend.vercel.app/",
    image: "/projects/royal-orchid-preview.png",
    statBadge: "15 hrs/wk Saved · 40+ APIs · Deployed Live"
  },
  {
    id: "mediqueue",
    featured: false,
    title: "MediQueue – Hospital Queue Management System",
    category: "Healthcare OPD · Real-Time",
    period: "2025 – 2026",
    oneline: "Eliminates waiting room overcrowding via real-time WebSocket token progression and tri-role dashboards.",
    tagline: "Smart OPD Queue & Patient Flow Optimization System",
    description: "A synchronized hospital management suite designed to streamline outpatient flow with instant digital token generation, real-time consultation tracking, and digital prescription delivery.",
    technologies: ["React.js", "Node.js", "Express.js", "MySQL", "Socket.io", "JWT", "Nodemailer"],
    stats: [
      { label: "Dashboards", value: "3 Roles" },
      { label: "Real-Time Engine", value: "Socket.io" },
      { label: "Verification", value: "OTP + JWT" },
      { label: "Check-in", value: "QR Enabled" }
    ],
    features: [
      "Tri-role synchronized dashboards tailored for Patients, Doctors, and Hospital Admins",
      "Real-time WebSocket token progression via Socket.io with zero manual page refreshes",
      "QR-based express check-in reducing reception counter bottlenecks and wait times",
      "Digital prescription authoring and automated email delivery via Nodemailer",
      "Stateless JWT authentication paired with OTP verification for patient records security",
      "MySQL relational schema optimized with indexed queues and doctor consultation states"
    ],
    architecture: {
      frontend: "React.js with multi-role views, live queue visualizers, and digital prescription creation.",
      backend: "Node.js & Express.js with Socket.io WebSockets for live status synchronization.",
      database: "MySQL relational database for patient records, appointments, and prescriptions.",
      communication: "Nodemailer for automated email notifications, token alerts, and OTP verification."
    },
    githubUrl: null,
    liveUrl: "https://frontend-phi-ruby-62.vercel.app/",
    image: "/projects/mediqueue-preview.png",
    statBadge: "3 Synchronized Roles · Real-Time WebSockets · Deployed Live"
  }
];

export const educationData = [
  {
    id: "be",
    institution: "Genba Sopanrao Moze College of Engineering, Pune (GSMCOE)",
    location: "Balewadi, Pune",
    degree: "B.E. Computer Engineering",
    university: "SPPU, Pune",
    period: "2023 – 2026",
    grade: "8.50 CGPA",
    highlight: "First Class with Distinction",
    status: "Completed / Final Year"
  },
  {
    id: "diploma",
    institution: "Government Polytechnic Awasari, Pune",
    location: "Pune, Maharashtra",
    degree: "Diploma in Computer Engineering",
    period: "2021 – 2023",
    grade: "84.46% Aggregate",
    highlight: "Distinction",
    status: "Completed"
  },
  {
    id: "hsc",
    institution: "Mahatma Gandhi Vidyalaya, Karjat",
    location: "Karjat, Maharashtra",
    degree: "Class XII – Higher Secondary Certificate (HSC)",
    period: "2019 – 2021",
    grade: "72.00% HSC",
    highlight: "First Class",
    status: "Completed"
  },
  {
    id: "ssc",
    institution: "Nivruttirao Dhas Madyamik Vidyalaya, Jamgaon",
    location: "Jamgaon, Beed, Maharashtra",
    degree: "Class X – Secondary School Certificate (SSC)",
    period: "2018 – 2019",
    grade: "92.00% SSC",
    highlight: "Distinction",
    status: "Completed"
  }
];

export const certificationsData = [
  {
    id: "qspiders",
    title: "Java Full Stack Development",
    issuer: "QSpiders, Pune",
    year: "2026",
    skills: ["Java", "Full Stack Development", "SQL", "Web Technologies", "OOP"],
    badge: "Full Stack"
  },
  {
    id: "iit-bombay",
    title: "Java Programming Tutorial",
    issuer: "IIT Bombay – Spoken Tutorial",
    year: "2023",
    skills: ["Core Java", "Object-Oriented Programming", "Algorithm Design"],
    badge: "Core Programming"
  },
  {
    id: "udemy",
    title: "React Native – Complete Guide",
    issuer: "Udemy",
    year: "Course Completed",
    skills: ["React Native", "Mobile UI Components", "State Management", "Cross-Platform"],
    badge: "Mobile & Frontend"
  }
];

export const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Skills", href: "#skills" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" }
];
