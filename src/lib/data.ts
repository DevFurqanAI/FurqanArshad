import type {
  SkillGroup,
  Project,
  ExperienceItem,
  EducationInfo,
  Certificate,
  SocialLink,
  ContactInfo,
} from "@/types";

export const personal = {
  name: "Muhammad Furqan Arshad",
  role: "Software Developer",
  summary:
    "Computer Science undergraduate with hands-on experience across full-stack web development (MERN), desktop/database applications (C#, SQL Server), data structures, and networking. Seeking a software development role to apply and grow these skills in a production environment.",
};

export const contact: ContactInfo = {
  email: "arshadfurqan031@gmail.com",
  phone: "+92 336 7755208",
  location: "Multan, Pakistan",
};

export const socials: SocialLink[] = [
  { label: "GitHub", href: "https://github.com/DevFurqanAI", iconKey: "github" },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/furqan-arshad-3255ba245/",
    iconKey: "linkedin",
  },
  { label: "Email", href: "mailto:arshadfurqan031@gmail.com", iconKey: "mail" },
];

export const skillGroups: SkillGroup[] = [
  {
    title: "Full-Stack & Web",
    iconKey: "code",
    items: [
      "React",
      "Node.js",
      "Express.js",
      "REST APIs",
      "Vite",
      "Tailwind CSS",
      "Bootstrap",
      "JavaScript",
      "HTML/CSS",
    ],
  },
  {
    title: "Backend & Desktop",
    iconKey: "server",
    items: ["C#", "ASP.NET", "WPF", "Windows Forms", "Authentication Systems"],
  },
  {
    title: "Databases",
    iconKey: "database",
    items: [
      "SQL Server",
      "MongoDB",
      "Mongoose",
      "Database Design",
      "Stored Procedures & Triggers",
      "Query Optimization",
    ],
  },
  {
    title: "Systems & Networking",
    iconKey: "network",
    items: [
      "Cisco Packet Tracer",
      "OSPF Routing",
      "VLSM/VLAN Addressing",
      "DHCP/DNS/NAT",
      "ACL Security",
    ],
  },
  {
    title: "Core Concepts",
    iconKey: "layers",
    items: [
      "Data Structures",
      "AVL Trees",
      "Tries",
      "Heaps",
      "Software Engineering",
      "System Design",
    ],
  },
  {
    title: "Tools & Platforms",
    iconKey: "tools",
    items: ["Git", "GitHub", "Vercel", "Render", "Visual Studio", "SSMS"],
  },
];

export const projects: Project[] = [
  {
    slug: "affinity-hub",
    title: "Affinity Hub",
    year: "2026",
    status: "Completed",
    stack: ["MongoDB", "Express.js", "React", "Node.js", "Cloudinary"],
    description:
      "A full-stack social media platform with authentication, profiles, posts, stories, likes, and comments, built around a secure API layer and an admin moderation system.",
    highlights: [
      "JWT authentication with Google OAuth, email OTP verification, and role-based authorization",
      "Scalable REST APIs using Node.js, Express.js, MongoDB, and Mongoose",
      "Cloudinary, Brevo API, and Cloudflare Turnstile integrated for media, email, and security",
      "Responsive React + Vite + Tailwind frontend with dark/light themes and an admin dashboard for reports, bans, and suspensions",
      "Deployed via Vercel (frontend) and Render (backend)",
    ],
    featured: true,
    links: {
      github: "https://github.com/DevFurqanAI",
    },
  },
  {
    slug: "fiberlink-isp-network",
    title: "FiberLink Regional ISP Network",
    year: "2026",
    stack: ["Cisco Packet Tracer", "OSPF", "VLSM/VLAN", "ACL"],
    description:
      "A multi-city ISP network design serving residential, corporate, and hospital customer segments with redundant backbone routing.",
    highlights: [
      "Multi-city topology with redundant backbone routing across customer segments",
      "VLSM/VLAN addressing and OSPF routing configured across 20+ subnets",
      "DHCP/DNS/NAT and ACL-based security policies",
      "Verified connectivity and access control through systematic testing",
    ],
  },
  {
    slug: "real-estate-management-system",
    title: "Real Estate Management System",
    year: "2025",
    stack: ["C#", "WPF", "ASP.NET", "SQL Server"],
    description:
      "Desktop and web-based modules for managing plots, projects, and customers with authentication and full CRUD operations.",
    highlights: [
      "Authentication and full CRUD operations across desktop and web interfaces",
      "Structured XAML (WPF) and ASP.NET interfaces backed by SQL Server",
      "Normalized relational schema supporting projects, plots, and customer records",
    ],
  },
  {
    slug: "flight-management-system",
    title: "Flight Management System",
    year: "2025",
    stack: ["C#", "Windows Forms", "SQL Server"],
    description:
      "A database-driven flight management system with role-based authentication for Admin and Employee users.",
    highlights: [
      "Role-based authentication for Admin and Employee modules",
      "SQL Server backend using stored procedures, triggers, and relational schema design",
      "Optimized queries and enforced business logic through constraints",
    ],
  },
  {
    slug: "search-engine-simulator",
    title: "Search Engine Auto-Complete & Web Crawler Simulator",
    year: "2025",
    stack: ["C++", "AVL Tree", "Trie", "Heap", "Queue", "Stack"],
    description:
      "A search engine simulation integrating a web crawler, keyword indexing, prefix search, and relevance ranking.",
    highlights: [
      "BFS-based web crawler with AVL tree-based keyword indexing",
      "Trie-based prefix search for real-time auto-complete suggestions",
      "Max Heap-based ranking system for relevance scoring",
    ],
  },
];

export const experience: ExperienceItem[] = [
  {
    role: "Software Development — Academic Projects",
    org: "Air University, Multan",
    time: "Sep 2024 – Present",
    points: [
      "Designed and built database-driven applications using C#, ASP.NET, and SQL Server",
      "Developed backend logic with stored procedures, triggers, and relational schema design",
      "Applied software engineering principles to build scalable and maintainable systems",
      "Collaborated in team-based academic projects",
    ],
    iconKey: "briefcase",
  },
  {
    role: "Head of Community Administration",
    org: "Discord Communities — Remote",
    time: "Jul 2021 – Sep 2024",
    points: [
      "Managed and moderated online communities of 2,500+ and 300+ members",
      "Oversaw daily operations, engagement, and conflict resolution",
      "Drove process improvements that boosted member retention",
      "Developed communication and coordination skills in a remote environment",
    ],
    iconKey: "badge",
  },
];

export const education: EducationInfo = {
  degree: "Bachelor of Science in Computer Science",
  school: "Air University, Multan, Pakistan",
  time: "2024 – 2028",
  cgpa: "3.38 / 4.00",
  coursework: [
    "Data Structures",
    "Database Systems",
    "Computer Networks",
    "Digital Logic Design",
    "Information Security",
    "Full Stack Web Development"
  ],
  focus: ["Backend Development", "Database Design", "Full-Stack Development", "Network Infrastructure"],
};

export const certificates: Certificate[] = [
  { issuer: "Microsoft", title: "Relational Database Design and Advanced Querying" },
  { issuer: "Microsoft", title: "SQL Foundations" },
  { issuer: "Meta", title: "Database Structures and Management with MySQL" },
  { issuer: "Meta", title: "Version Control" },
  { issuer: "Google", title: "Foundations of Project Management" },
];