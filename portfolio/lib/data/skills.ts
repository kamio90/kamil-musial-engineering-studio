export interface SkillCategory {
  name: {
    pl: string;
    en: string;
  };
  skills: string[];
  icon: "code" | "server" | "cloud" | "database" | "settings" | "layout" | "terminal" | "box";
}

export const skillCategories: SkillCategory[] = [
  {
    name: {
      pl: "Frontend",
      en: "Frontend",
    },
    skills: [
      "TypeScript",
      "JavaScript",
      "React",
      "Angular",
      "Vue.js",
      "Next.js",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "SCSS",
      "Framer Motion",
    ],
    icon: "layout",
  },
  {
    name: {
      pl: "Backend",
      en: "Backend",
    },
    skills: [
      "Node.js",
      "NestJS",
      "Express",
      "REST API",
      "GraphQL",
      "PHP",
      "C#",
      "C++",
    ],
    icon: "server",
  },
  {
    name: {
      pl: "Cloud & DevOps",
      en: "Cloud & DevOps",
    },
    skills: [
      "AWS",
      "Azure",
      "Kubernetes",
      "Docker",
      "CI/CD",
      "Jenkins",
      "GitHub Actions",
      "Azure Pipeline",
      "Heroku",
      "IaC",
    ],
    icon: "cloud",
  },
  {
    name: {
      pl: "Bazy danych",
      en: "Databases",
    },
    skills: [
      "PostgreSQL",
      "MySQL",
      "MongoDB",
      "Redis",
      "SQL",
      "NoSQL",
    ],
    icon: "database",
  },
  {
    name: {
      pl: "Architektura",
      en: "Architecture",
    },
    skills: [
      "Microservices",
      "Micro Frontends",
      "Event-Driven Architecture",
      "Domain-Driven Design",
      "System Design",
      "API Design",
    ],
    icon: "box",
  },
  {
    name: {
      pl: "Narzędzia & Metodologie",
      en: "Tools & Methodologies",
    },
    skills: [
      "Git",
      "Jira",
      "Agile/Scrum",
      "TDD",
      "Code Review",
      "Technical Leadership",
      "Mentoring",
    ],
    icon: "settings",
  },
];

export const primaryTechnologies = [
  "TypeScript",
  "React",
  "Node.js",
  "AWS",
  "Kubernetes",
  "Microservices",
];
