export const site = {
  name: "Dharmik Joshi",
  title: "Senior SDE",
  tagline: "Backend engineer building event-driven systems that survive production.",
  summary:
    "Senior Backend Engineer with 5+ years building scalable microservices and real-time, event-driven systems in Java and Spring Boot — serving millions of customers through web browsers. I've led backend initiatives across fintech and email marketing, owning architecture, reliability, and production releases end to end.",
  phone: "+91 9096167416",
  email: "dharmikj75@gmail.com",
  links: {
    github: "https://github.com/DharmikJoshi-is-star",
    linkedin: "https://www.linkedin.com/in/eng-dj/",
    youtube: "https://www.youtube.com/@dharmikjoshi1055",
    networksolutions: "https://www.networksolutions.com/",
    shopse: "https://www.getshopse.com/",
    newfold: "https://newfold.com/",
  },
  resumePdf: "/sample-resume.pdf",
};

export type LinkedInEmbed = {
  id: string;
  label: string;
  collapsedSrc: string;
  collapsedHeight: number;
  fullSrc?: string;
  fullHeight?: number;
};

export const linkedInPosts: LinkedInEmbed[] = [
  {
    id: "share-7447299046781849600",
    label: "Recent share",
    collapsedSrc:
      "https://www.linkedin.com/embed/feed/update/urn:li:share:7447299046781849600?collapsed=1",
    collapsedHeight: 599,
    fullSrc:
      "https://www.linkedin.com/embed/feed/update/urn:li:share:7447299046781849600",
    fullHeight: 2006,
  },
  {
    id: "ugc-6812698175862788096",
    label: "Earlier post",
    collapsedSrc:
      "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:6812698175862788096?collapsed=1",
    collapsedHeight: 490,
    fullSrc:
      "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:6812698175862788096",
    fullHeight: 490,
  },
];

export const skills = [
  "Java",
  "Spring Boot",
  "WebFlux",
  "Microservices",
  "Oracle DB / AQ",
  "MongoDB",
  "Distributed Systems",
  "Cache (Redis)",
  "Docker",
  "Kubernetes",
  "System Design",
  "REST API",
  "AWS / OCI Storage",
  "API Security (JWT)",
  "RabbitMQ",
  "MCP Servers",
] as const;

export const skillGroups: Record<string, readonly string[]> = {
  Runtime: ["Java", "Spring Boot", "WebFlux", "REST API", "MCP Servers"],
  Data: ["Oracle DB / AQ", "MongoDB", "Cache (Redis)", "RabbitMQ"],
  Platform: ["Docker", "Kubernetes", "AWS / OCI Storage", "API Security (JWT)"],
  Craft: ["Microservices", "Distributed Systems", "System Design"],
};

export type WorkHighlight = {
  id: string;
  title: string;
  company: string;
  period?: string;
  bullets: string[];
  stack: string[];
};

export const experience = [
  {
    id: "newfold",
    role: "Senior Software Development Engineer",
    company: "Newfold Digital",
    url: site.links.newfold,
    location: "networksolutions.com",
    period: "Sept 2024 – Present",
    logo: "/assets/companies/newfold-logo.svg",
    highlights: [
      {
        id: "sse-gateway",
        title: "Account Management SSE Gateway",
        company: "Newfold Digital",
        bullets: [
          "Built a Spring Boot / WebFlux gateway that streams live account updates to Account Manager UIs — Oracle AQ in, Redis pub/sub across stateless K8s pods, JWT-bound SSE out to browsers.",
          "Solved ack-after-ingest delivery, event allowlisting, replay on reconnect, keepalives, and per-user connection caps.",
          "Chose Redis pub/sub over a global connection registry to keep pods stateless; phased rollout with POC tooling and Jenkins pipelines.",
        ],
        stack: ["Spring Boot", "WebFlux", "Oracle AQ", "Redis", "Kubernetes", "JWT"],
      },
      {
        id: "mcp",
        title: "Netsol Social MCP",
        company: "Newfold Digital",
        bullets: [
          "Extended a ~32-tool MCP server with email-marketing tools (create, update, list, report campaigns) so AI agents can operate campaigns safely.",
          "Owned release engineering: contract-tested snapshots, immutable image deploys via Jenkins/GitOps, Trivy fixes through pinned deps.",
        ],
        stack: ["MCP", "JWT", "Jenkins", "GitOps", "FastAPI"],
      },
      {
        id: "earlier-newfold",
        title: "Agentic AI, Logo Builder, Email Marketing",
        company: "Newfold Digital",
        bullets: [
          "Agentic AI Support: intent-driven, cached APIs for command-based task execution across customer workflows.",
          "Logo Builder / Media Library: high-throughput search, import, tagging, pagination; pooling and caching under load.",
          "Email Marketing: RabbitMQ-driven campaign and subscribe flows with retries, delayed messaging, and DLQs.",
        ],
        stack: ["RabbitMQ", "Redis", "OCI Object Storage", "Spring Boot"],
      },
    ] as WorkHighlight[],
  },
  {
    id: "shopse",
    role: "SDE-2 → SDE-1",
    company: "ShopSe",
    url: site.links.shopse,
    location: "Digital Finance",
    period: "Jul 2021 – Aug 2024",
    logo: "/assets/companies/shopse-logo-alt.svg",
    highlights: [
      {
        id: "lending",
        title: "Consumer Durable Lending",
        company: "ShopSe",
        bullets: [
          "Cut drop-off ~30% with parallel soft-approval eligibility checks across lenders.",
          "Owned end-to-end lending APIs (HDFC Easy EMI, ICICI Cardless, Moneyview, DMI Finance) — ShopSe Lending became the flagship product.",
          "KYC, E-Nach, account aggregation, CIBIL via strategy pattern; fraud checks and customer notification framework.",
        ],
        stack: ["Java 8", "Spring Boot", "Redis", "Strategy pattern"],
      },
      {
        id: "payments",
        title: "Payment Gateway Integration",
        company: "ShopSe",
        bullets: [
          "Razorpay EMI card transactions; cardless journeys for 50M+ pre-approved customers across HDFC, Kotak, ICICI, IDFC.",
        ],
        stack: ["Razorpay", "Microservices", "JWT"],
      },
      {
        id: "leadership",
        title: "Team Leadership",
        company: "ShopSe",
        bullets: [
          "Led 5 backend engineers: architecture, reviews, mentoring, technical interviews.",
        ],
        stack: ["Docker", "Design patterns"],
      },
    ] as WorkHighlight[],
  },
];

export const education = {
  degree: "B.E. Computer Engineering",
  school: "Mumbai University",
  detail: "CGPA 9.18 / 10",
  period: "Aug 2017 – Jun 2021",
};

export const awards = [
  { name: "Ace of Initiative", org: "Newfold Digital", period: "Jul – Sep 2025" },
  { name: "Adarsh Award", org: "ShopSe", period: "Jul – Sep 2022" },
];

export const certificates = ["Docker & Kubernetes Course Certification"];

export const projectDemos = [
  {
    id: "attendance-demo",
    projectId: "attendance",
    title: "Attendance Management System",
    videoId: "1ku8lNU-cB8",
    url: "https://youtu.be/1ku8lNU-cB8",
  },
  {
    id: "resume-builder-demo",
    projectId: "resume-builder",
    title: "Resume Builder",
    videoId: "ZZiSPiPNj10",
    url: "https://youtu.be/ZZiSPiPNj10",
  },
] as const;

export const openSourceProjects = [
  {
    id: "resume-builder",
    title: "Resume Builder",
    description: "Full-stack resume builder with templates and export — side project from earlier in my career.",
    githubUrl: "https://github.com/DharmikJoshi-is-star/Resume-Builder-Website",
    technologies: ["Java", "Spring Boot", "Web"],
  },
  {
    id: "showme",
    title: "ShowMe",
    description: "Media showcase platform with REST APIs and responsive UI.",
    githubUrl: "https://github.com/DharmikJoshi-is-star/ShowMe",
    technologies: ["Java", "Spring Boot", "REST"],
  },
  {
    id: "attendance",
    title: "Student Attendance System",
    description: "NFC-based attendance, dashboards, and reporting for academic use.",
    githubUrl: "https://github.com/DharmikJoshi-is-star/Student-attendance-Management",
    technologies: ["Java", "NFC", "Analytics"],
  },
];
