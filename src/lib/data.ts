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
    "I build systems, not just interfaces — full-stack apps with real auth and moderation, desktop tools backed by properly normalized databases, and network infrastructure with redundant routing. I care about what's underneath the API call.",
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
    title: "Backend, Databases & Desktop",
    iconKey: "server",
    items: [
      "C#",
      "ASP.NET",
      "WPF",
      "Windows Forms",
      "SQL Server",
      "MongoDB",
      "Mongoose",
      "Database Design",
      "Stored Procedures & Triggers",
      "Query Optimization",
    ],
  },
  {
    title: "Networking & Systems Fundamentals",
    iconKey: "network",
    items: [
      "Cisco Packet Tracer",
      "OSPF Routing",
      "VLSM/VLAN Addressing",
      "DHCP/DNS/NAT",
      "ACL Security",
      "Data Structures",
      "AVL Trees",
      "Tries",
      "Heaps",
    ],
  },
  {
    title: "Tools",
    iconKey: "tools",
    items: ["Git", "GitHub", "Visual Studio", "SSMS"],
  },
];

export const projects: Project[] = [
  {
    slug: "affinity-hub",
    title: "Affinity Hub",
    year: "2026",
    status: "Live",
    context: "Personal project · live in production",
    stack: ["MongoDB", "Express.js", "React", "Node.js", "Cloudinary"],
    description:
      "A social platform I built to actually deal with the unglamorous half of social apps — abuse and spam — not just the feed. Auth had to resist bot signups without adding friction, and moderation had to give admins real leverage over reported content instead of a blunt ban button.",
    highlights: [
      "Layered signup with Google OAuth, email OTP, and Cloudflare Turnstile — added after the first version let spam accounts straight into the feed",
      "Role-based authorization so moderation actions (reports, bans, suspensions) are auditable and reversible, not just a delete button",
      "Mongoose schemas designed around read-heavy feed queries, since posts/likes/comments are read far more than written",
      "Cloudinary for media so the API layer never touches raw uploads directly",
      "Split deploy — Vercel frontend, Render backend — so each scales independently",
    ],
    featured: true,
    links: {
      github: "https://github.com/DevFurqanAI/affinity_hub",
      live: "https://affinity-hub-liart.vercel.app/",
    },
  },
  {
    slug: "fiberlink-isp-network",
    title: "FiberLink Regional ISP Network",
    year: "2026",
    context: "Coursework · Computer Networks",
    stack: ["Cisco Packet Tracer", "OSPF", "VLSM/VLAN", "ACL"],
    description:
      "A network design exercise I treated like a real ISP brief: three customer segments (residential, corporate, hospital) with different uptime and security needs sharing one backbone. The interesting part was subnetting efficiently across 20+ networks without wasting address space, and making sure one segment's failure couldn't take down another's routing.",
    highlights: [
      "VLSM addressing sized to each segment's actual host count instead of flat /24s across the board",
      "OSPF with redundant backbone links so a single link failure doesn't isolate a city",
      "ACLs scoped per segment — hospital traffic isolated from residential/corporate by policy, not just topology",
      "Verified every path and access rule with systematic ping/traceroute testing, not just visual inspection",
    ],
  },
  {
    slug: "real-estate-management-system",
    title: "Real Estate Management System",
    year: "2025",
    context: "Coursework · Team project",
    stack: ["C#", "WPF", "ASP.NET", "SQL Server"],
    description:
      "A team project managing plots, projects, and customers across a desktop app and a web interface sharing one SQL Server backend. The real constraint was schema design — plots belong to projects, projects have customers, and getting that relational structure wrong early would have broken both interfaces later.",
    highlights: [
      "Normalized schema first, UI second — plots/projects/customers modeled as proper foreign-key relationships, not flat tables",
      "Full CRUD and authentication built once in the data layer, consumed by both the WPF desktop client and the ASP.NET web client",
      "XAML interfaces structured to stay in sync with backend validation instead of duplicating rules client-side",
    ],
  },
  {
    slug: "flight-management-system",
    title: "Flight Management System",
    year: "2025",
    context: "Coursework · Database Systems",
    stack: ["C#", "Windows Forms", "SQL Server"],
    description:
      "A flight-booking system where the actual work was in the database, not the form — enforcing business rules like seat limits and role restrictions at the SQL Server layer with triggers and constraints, so bad data couldn't get in even from a buggy client.",
    highlights: [
      "Business logic enforced via constraints and triggers at the database layer, not just UI validation",
      "Role-based auth splitting Admin and Employee capabilities at the query level",
      "Query optimization pass after the first schema made common lookups too slow",
    ],
  },
  {
    slug: "search-engine-simulator",
    title: "Search Engine Auto-Complete & Web Crawler Simulator",
    year: "2025",
    context: "Coursework · Data Structures",
    stack: ["C++", "AVL Tree", "Trie", "Heap", "Queue", "Stack"],
    description:
      "Built to prove I understand why these data structures exist, not just how to implement them — a BFS crawler feeds an AVL-indexed keyword store, a Trie handles prefix autocomplete, and a max-heap ranks results by relevance. Three different structures, each chosen because it was the right fit for that specific access pattern.",
    highlights: [
      "AVL tree keeps keyword lookups balanced and fast as the crawled index grows",
      "Trie-based prefix search returns autocomplete suggestions in real time",
      "Max-heap ranking so results surface by relevance instead of crawl order",
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
    iconKey: "code",
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
    iconKey: "users",
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
  {
    issuer: "HackerRank",
    title: "Software Engineer — Role Certification",
    verifyUrl: "https://www.hackerrank.com/certificates/f002360f44a0",
  },
  {
    issuer: "Microsoft",
    title: "SQL Foundations",
    verifyUrl: "https://coursera.org/verify/0I89MV1P25ZI",
  },
  {
    issuer: "Microsoft",
    title: "Relational Database Design and Advanced Querying",
    verifyUrl: "https://coursera.org/verify/PW6DFL11SAW9",
  },
  {
    issuer: "Microsoft",
    title: "Data Manipulation and Transactions in SQL Server",
    verifyUrl: "https://coursera.org/verify/AUU0DM4BWROB",
  },
  {
    issuer: "Meta",
    title: "Introduction to Databases",
    verifyUrl: "https://coursera.org/verify/BM8DEDAR8L2V",
  },
  {
    issuer: "Meta",
    title: "Database Structures and Management with MySQL",
    verifyUrl: "https://coursera.org/verify/PT4XQOVCWVL6",
  },
  {
    issuer: "Meta",
    title: "Version Control",
    verifyUrl: "https://coursera.org/verify/YVAPYXR3UTJ5",
  },
];