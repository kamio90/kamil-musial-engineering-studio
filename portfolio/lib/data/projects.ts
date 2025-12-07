export type ProjectCategory = "commercial" | "competition" | "university" | "private" | "company";

export interface Project {
  id: string;
  title: string;
  description: {
    pl: string;
    en: string;
  };
  year: number;
  category: ProjectCategory;
  techStack: string[];
  link?: string;
  github?: string;
}

export const projects: Project[] = [
  // COMMERCIAL PROJECTS
  {
    id: "bank-pipeline-blockchain",
    title: "Bank Pipeline Blockchain",
    year: 2022,
    category: "commercial",
    description: {
      pl: "System natychmiastowych płatności międzynarodowych wykorzystujący technologię blockchain.",
      en: "Instant international payment solution leveraging blockchain technology.",
    },
    techStack: ["React", "Node.js", "TypeScript", "Python", "Blockchain"],
  },
  {
    id: "machines-registry",
    title: "Machines Registry System",
    year: 2021,
    category: "commercial",
    description: {
      pl: "System zarządzania i lokalizacji maszyn przemysłowych z modułem mobilnym.",
      en: "Industrial machine management and location system with mobile module.",
    },
    techStack: ["Angular", "Node.js", "TypeScript", "PostgreSQL", "NestJS"],
  },
  {
    id: "aviation-api",
    title: "Aviation Backend API",
    year: 2022,
    category: "commercial",
    description: {
      pl: "Przebudowa API lotniczego eliminująca 95% krytycznych błędów i 300% szybsza odpowiedź.",
      en: "Aviation API rebuild eliminating 95% of critical bugs with 300% faster response.",
    },
    techStack: ["TypeScript", "NestJS", "Azure", "REST API"],
  },
  {
    id: "food-delivery-platform",
    title: "Food Delivery Platform",
    year: 2020,
    category: "commercial",
    description: {
      pl: "Platforma dostaw jedzenia z real-time śledzeniem i integracją płatności.",
      en: "Food delivery platform with real-time tracking and payment integration.",
    },
    techStack: ["React", "Node.js", "MongoDB", "Socket.io", "Stripe"],
  },
  {
    id: "ecommerce-multistore",
    title: "E-commerce Multi-store",
    year: 2019,
    category: "commercial",
    description: {
      pl: "Wielosklepowa platforma e-commerce z centralnym zarządzaniem produktami.",
      en: "Multi-store e-commerce platform with centralized product management.",
    },
    techStack: ["Vue.js", "Node.js", "PostgreSQL", "Redis", "AWS"],
  },

  // COMPETITION PROJECTS
  {
    id: "legalhack-2020",
    title: "LegalHack 2020 - 1st Place",
    year: 2020,
    category: "competition",
    description: {
      pl: "Zwycięska aplikacja hackathonu wykorzystująca Computer Vision i AI do analizy dokumentów prawnych.",
      en: "Winning hackathon application using Computer Vision and AI for legal document analysis.",
    },
    techStack: ["Python", "TensorFlow", "React", "FastAPI", "Computer Vision"],
  },
  {
    id: "coding-challenge-2019",
    title: "Coding Challenge Winner",
    year: 2019,
    category: "competition",
    description: {
      pl: "Wygrana w konkursie programistycznym z rozwiązaniem optymalizacji algorytmicznej.",
      en: "Programming contest winner with algorithmic optimization solution.",
    },
    techStack: ["Python", "Algorithms", "Data Structures"],
  },

  // UNIVERSITY PROJECTS
  {
    id: "thesis-microservices",
    title: "Thesis: Microservices Architecture",
    year: 2020,
    category: "university",
    description: {
      pl: "Praca inżynierska o architekturze mikroserwisów z praktyczną implementacją.",
      en: "Engineering thesis on microservices architecture with practical implementation.",
    },
    techStack: ["Node.js", "Docker", "Kubernetes", "RabbitMQ", "PostgreSQL"],
  },
  {
    id: "database-management-system",
    title: "Custom Database Engine",
    year: 2018,
    category: "university",
    description: {
      pl: "Własna implementacja silnika bazodanowego z indeksowaniem B-tree.",
      en: "Custom database engine implementation with B-tree indexing.",
    },
    techStack: ["C++", "Algorithms", "Data Structures", "File I/O"],
  },
  {
    id: "compiler-design",
    title: "Mini Compiler",
    year: 2019,
    category: "university",
    description: {
      pl: "Mini kompilator dla uproszczonego języka programowania.",
      en: "Mini compiler for a simplified programming language.",
    },
    techStack: ["C++", "Flex", "Bison", "Assembly"],
  },

  // PRIVATE PROJECTS
  {
    id: "personal-portfolio",
    title: "Personal Portfolio",
    year: 2024,
    category: "private",
    description: {
      pl: "Osobiste portfolio z Next.js, animacjami i wsparciem wielojęzyczności.",
      en: "Personal portfolio with Next.js, animations, and i18n support.",
    },
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/kamio90/kamil-musial-engineering-studio",
  },
  {
    id: "home-automation",
    title: "Home Automation System",
    year: 2023,
    category: "private",
    description: {
      pl: "System automatyki domowej z integracją IoT i dashboardem.",
      en: "Home automation system with IoT integration and dashboard.",
    },
    techStack: ["React", "Node.js", "MQTT", "Raspberry Pi", "MongoDB"],
  },
  {
    id: "budget-tracker",
    title: "Budget Tracker App",
    year: 2022,
    category: "private",
    description: {
      pl: "Aplikacja do śledzenia wydatków z wizualizacją i analizą.",
      en: "Expense tracking application with visualization and analysis.",
    },
    techStack: ["React Native", "TypeScript", "Firebase", "Charts.js"],
  },
  {
    id: "recipe-manager",
    title: "Recipe Manager",
    year: 2021,
    category: "private",
    description: {
      pl: "Manager przepisów z funkcją planowania posiłków i listy zakupów.",
      en: "Recipe manager with meal planning and shopping list features.",
    },
    techStack: ["Vue.js", "Node.js", "MongoDB", "Express"],
  },

  // COMPANY PROJECTS (ITROOM / ASROOM)
  {
    id: "itroom-cms",
    title: "ITRoom CMS Platform",
    year: 2019,
    category: "company",
    description: {
      pl: "Wewnętrzny system CMS dla klientów agencji z wieloma funkcjami.",
      en: "Internal CMS system for agency clients with multiple features.",
    },
    techStack: ["Angular", "Node.js", "PostgreSQL", "AWS", "Docker"],
  },
  {
    id: "client-portal",
    title: "Client Portal System",
    year: 2020,
    category: "company",
    description: {
      pl: "Portal klienta z zarządzaniem projektami i fakturami.",
      en: "Client portal with project management and invoicing.",
    },
    techStack: ["React", "Node.js", "MongoDB", "Stripe", "AWS"],
  },
  {
    id: "internal-tools",
    title: "Internal Tooling Suite",
    year: 2021,
    category: "company",
    description: {
      pl: "Zestaw wewnętrznych narzędzi zwiększających produktywność zespołu.",
      en: "Suite of internal tools improving team productivity.",
    },
    techStack: ["React", "TypeScript", "Node.js", "PostgreSQL", "Docker"],
  },
  {
    id: "analytics-dashboard",
    title: "Analytics Dashboard",
    year: 2020,
    category: "company",
    description: {
      pl: "Dashboard analityczny z real-time danymi i raportowaniem.",
      en: "Analytics dashboard with real-time data and reporting.",
    },
    techStack: ["Vue.js", "D3.js", "Node.js", "InfluxDB", "Grafana"],
  },
  {
    id: "crm-system",
    title: "CRM System",
    year: 2019,
    category: "company",
    description: {
      pl: "System CRM do zarządzania relacjami z klientami.",
      en: "CRM system for customer relationship management.",
    },
    techStack: ["Angular", "Node.js", "PostgreSQL", "Redis"],
  },
];

export const projectCategories = [
  "all",
  "commercial",
  "competition",
  "university",
  "private",
  "company",
] as const;
