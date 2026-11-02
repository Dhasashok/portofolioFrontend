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
  github: "https://github.com/Dhasashok",
  resumeUrl: "/Ashok_Rohidas_Dhas_Resume.pdf",
  availability: "Open to Software Engineer & Full-Stack Roles",
  college: "Genba Sopanrao Moze College of Engineering, Pune (GSMCOE)",
  degree: "B.E. Computer Engineering",
  cgpa: "8.50 / 10",
  careerTargets: [
    "Software Development Engineer (SDE)",
    "Full Stack Developer",
    "Software Developer"
  ],
  heroRoles: [
    "Full-Stack Software Engineer",
    "React.js & Node.js Developer",
    "Backend & REST API Developer",
    "Software Development Engineer"
  ],
  heroBio: "Software engineer building full-stack web applications with React, Node.js, and relational databases. Built MediQueue for real-time OPD queue management and Royal Orchid PG ERP to automate daily operations.",
  aboutBio: [
    "I am a Computer Engineering graduate from Genba Sopanrao Moze College of Engineering, Pune (SPPU), with an 8.50/10 CGPA.",
    "My focus is on full-stack web development using React.js, Node.js, Express, and MySQL. I enjoy designing clean REST APIs, modeling relational databases, and building responsive frontends.",
    "I am actively seeking Software Engineer and Full-Stack Developer opportunities where I can write solid production code and help solve practical business problems."
  ],
  stats: [
    { label: "CGPA", value: "8.50", subtext: "SPPU Pune" },
    { label: "Internships", value: "2", subtext: "Completed" },
    { label: "Full-Stack Projects", value: "2", subtext: "Deployed Live" },
    { label: "REST APIs", value: "40+", subtext: "Built & Tested" }
  ]
};

export const servicesData = [
  {
    id: "full-stack",
    title: "Full-Stack Web Development",
    description: "Building complete web applications connecting responsive React frontends, Node.js services, and relational databases.",
    badge: "Full-Stack",
    technologies: ["React.js", "Node.js", "Express.js", "MySQL", "REST API", "Vercel"],
    color: "purple"
  },
  {
    id: "frontend",
    title: "Frontend Engineering",
    description: "Developing responsive, accessible interfaces with modular React component architecture and modern CSS.",
    badge: "Frontend",
    technologies: ["React.js", "JavaScript ES6+", "HTML5", "CSS3", "Responsive UI"],
    color: "blue"
  },
  {
    id: "backend",
    title: "Backend & RESTful APIs",
    description: "Designing REST endpoints, role-based authorization, JWT authentication, and real-time WebSockets with Socket.io.",
    badge: "Backend & APIs",
    technologies: ["Node.js", "Express.js", "JWT Auth", "RBAC", "Socket.io", "Postman"],
    color: "green"
  },
  {
    id: "database",
    title: "Database Design & SQL",
    description: "Modeling relational schemas, writing efficient queries, and integrating cloud database environments like MySQL and TiDB.",
    badge: "Database",
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
      "Built responsive web pages and landing layouts with clean, cross-device compatibility.",
      "Implemented interactive user interface features using modern JavaScript DOM manipulation.",
      "Collaborated with project mentors to review code and deliver tasks within milestones."
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
      "Contributed to frontend and backend module development across active web applications.",
      "Assisted with RESTful API integration, data validation, and UI component styling.",
      "Participated in sprint standups, bug resolution, and application workflow testing."
    ]
  }
];

export const projectsData = [
  {
    id: "royal-orchid",
    featured: true,
    title: "Royal Orchid – PG Management System",
    category: "Accommodation · Full Stack",
    oneline: "Automates tenant onboarding, live room allocations, monthly rent accounting, and grievance tracking.",
    tagline: "Operations & Tenant Management Platform",
    description: "Full-stack operations platform for PG owners and residents that automates daily workflows, rent collection, and room occupancy tracking in place of manual registers.",
    technologies: ["React.js", "Node.js", "Express.js", "TiDB Cloud", "Vercel", "Render", "TestSprite", "JWT"],
    stats: [
      { label: "Time Saved", value: "15 hrs/wk" },
      { label: "REST APIs", value: "40+" },
      { label: "Security", value: "JWT + RBAC" },
      { label: "Database", value: "Cloud SQL" }
    ],
    features: [
      "Interactive room visualizer with real-time bed allocation and occupancy status",
      "Automated rent invoicing, payment status tracking, and financial history logs",
      "Tenant maintenance request portal with priority status and resolution tracking",
      "Role-based access control (RBAC) separating admin, staff, and resident views",
      "Over 40 REST API endpoints tested and verified for data consistency",
      "Deployed live with Vercel frontend, Render backend, and Cloud SQL database"
    ],
    architecture: {
      frontend: "React.js dynamic client with modular component design and responsive dashboards.",
      backend: "Node.js & Express.js REST API layer handling 40+ secure endpoints.",
      database: "TiDB Cloud distributed SQL database with relational schema design.",
      security: "JSON Web Tokens (JWT) for stateless sessions with granular role-based authorization.",
      testing: "Comprehensive API and interface verification using TestSprite."
    },
    githubUrl: "https://github.com/Dhasashok/pgmanagement-frontend",
    githubFrontend: "https://github.com/Dhasashok/pgmanagement-frontend",
    githubBackend: "https://github.com/Dhasashok/pgmanagement-backend",
    liveUrl: "https://pgmanagement-frontend.vercel.app/",
    image: "/projects/royal-orchid-preview.png",
    statBadge: "15 hrs/wk Saved · 40+ APIs · Live Deployment"
  },
  {
    id: "mediqueue",
    featured: true,
    title: "MediQueue – Hospital Queue & Appointment Platform",
    category: "Healthcare · Full-Stack & ML",
    period: "2025 – 2026",
    oneline: "Reduces clinic wait times through predicted arrival windows, dynamic queue capacity, and real-time WebSocket token tracking.",
    tagline: "Smart Hospital Queue Management & Appointment Platform",
    description: "Full-stack hospital queue system that estimates patient wait times using machine learning, allocates consultation slots dynamically, and broadcasts live token progression to patients and doctors.",
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "Python",
      "Flask",
      "Scikit-Learn",
      "MySQL / TiDB",
      "Socket.io",
      "JWT",
      "Nodemailer"
    ],
    stats: [
      { label: "Wait Predictor", value: "ML Model" },
      { label: "Latency", value: "<15ms" },
      { label: "Live Sync", value: "Socket.io" },
      { label: "Check-in", value: "QR Enabled" }
    ],
    features: [
      "Wait-time estimation model trained on outpatient consultation data to provide realistic arrival windows",
      "Dynamic appointment slot sizing based on average doctor consultation duration",
      "Live queue progression broadcast via Socket.io WebSockets for patients and staff",
      "Multi-role dashboards tailored for patients, OPD receptionists, and doctors",
      "Touchless digital QR pass verification for fast walk-in and appointment check-in",
      "Automated notifications and prescription delivery via email integration"
    ],
    architecture: {
      frontend: "React 18 SPA with responsive dashboards, live queue visualizer, and QR token pass.",
      backend: "Node.js & Express.js with Socket.io WebSockets, JWT authentication, and structured error handling.",
      ml: "Python & Flask microservice providing wait-time estimates from regression models.",
      database: "MySQL / TiDB Cloud with indexed queue tables and optimized lookup views.",
      communication: "Nodemailer for confirmation emails, digital passes, and prescription receipts."
    },
    githubUrl: "https://github.com/Dhasashok/mediqueue",
    liveUrl: "https://frontend-phi-ruby-62.vercel.app/",
    image: "/projects/mediqueue-preview.png",
    statBadge: "ML Wait Estimator · Dynamic Slots · WebSockets · Live Deployment"
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
