export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  description: {
    pl: string;
    en: string;
  };
  achievements: {
    pl: string[];
    en: string[];
  };
  techStack: string[];
  link?: string;
}

export const experiences: Experience[] = [
  {
    company: "Coursedog",
    role: "Senior Software Engineer",
    period: "Nov 2025 - Present",
    location: "Remote",
    description: {
      pl: "Praca nad rozwojem platformy do zarządzania programami nauczania dla instytucji edukacyjnych.",
      en: "Working on developing a curriculum management platform for educational institutions.",
    },
    achievements: {
      pl: [
        "Rozwój funkcjonalności platformy edukacyjnej",
        "Współpraca z zespołem międzynarodowym",
      ],
      en: [
        "Development of educational platform features",
        "Collaboration with international team",
      ],
    },
    techStack: ["TypeScript", "React", "Node.js"],
    link: "https://coursedog.com",
  },
  {
    company: "Devire Sp. z o.o.",
    role: "Senior Software Engineer",
    period: "Apr 2025 - Oct 2025",
    location: "Warsaw, Remote",
    description: {
      pl: "Budowanie i optymalizacja rozwiązań płatności cyfrowych, umożliwiających płynne doświadczenia zakupowe w sklepach stacjonarnych i online.",
      en: "Building and optimizing digital payment and checkout solutions, enabling seamless in-store and online purchasing experiences.",
    },
    achievements: {
      pl: [
        "Zarządzanie pełnym cyklem życia kart jednorazowych (OTC)",
        "Projektowanie logiki opłat serwisowych i cenników jako kluczowego mechanizmu monetyzacji",
        "Budowanie i utrzymanie integracji z metodami płatności",
        "Udział w testach disaster recovery",
        "Wkład w dashboardy optymalizujące WAU, współczynniki konwersji i analizę P&L",
      ],
      en: [
        "One-Time Card (OTC) lifecycle management from generation to purchase confirmation",
        "Designed service fee logic and pricing as key monetization mechanism",
        "Built and maintained payment method backend integrations",
        "Participated in disaster recovery testing",
        "Contributed to dashboards optimizing WAU, conversion rates, and P&L analysis",
      ],
    },
    techStack: [
      "TypeScript",
      "Node.js",
      "React",
      "AWS",
      "Kubernetes",
      "IaC",
      "Experimentation Platform",
    ],
    link: "https://devire.pl",
  },
  {
    company: "ALDI Tech Hub",
    role: "Senior Technology Consultant",
    period: "Nov 2023 - Apr 2025",
    location: "Krakow",
    description: {
      pl: "Wielowymiarowa rola wykraczająca poza rozwój oprogramowania, obejmująca Product Ownership, DevOps, architekturę systemów i przywództwo techniczne.",
      en: "Multifaceted role extending beyond software development to include Product Ownership, DevOps, system architecture, and technical leadership.",
    },
    achievements: {
      pl: [
        "Wdrożenie najlepszych praktyk w inżynierii oprogramowania",
        "Prowadzenie inicjatyw ulepszeń architektonicznych i optymalizacji systemów",
        "Modernizacja istniejących serwisów w celu poprawy stabilności i efektywności",
        "Mentoring członków zespołu i promowanie najlepszych praktyk inżynierskich",
      ],
      en: [
        "Implemented best practices in software engineering",
        "Led architectural improvements and system optimization initiatives",
        "Modernized existing services to improve stability and operational efficiency",
        "Mentored team members and advocated for best engineering practices",
      ],
    },
    techStack: [
      "TypeScript",
      "React",
      "Node.js",
      "AWS",
      "Kubernetes",
      "CI/CD",
      "Microservices",
      "Event-Driven Architecture",
      "DevOps",
      "SQL",
      "NoSQL",
    ],
    link: "https://aldi-nord.de",
  },
  {
    company: "Avenga",
    role: "Senior Software Engineer",
    period: "Oct 2022 - Nov 2023",
    location: "Krakow",
    description: {
      pl: "Odpowiedzialność za zapewnienie jakości i utrzymywalności oprogramowania poprzez wdrażanie strategii testowania i rygorystycznych procesów code review.",
      en: "Responsible for ensuring software quality and maintainability by implementing thorough testing strategies and rigorous code review processes.",
    },
    achievements: {
      pl: [
        "Projektowanie i implementacja nowych funkcjonalności z zachowaniem wysokich standardów bezpieczeństwa i skalowalności",
        "Optymalizacja wydajności aplikacji i niezawodności z wykorzystaniem AWS",
        "Automatyzacja CI/CD z użyciem Jenkins",
        "Mentoring młodszych programistów i prowadzenie warsztatów technicznych",
      ],
      en: [
        "Designed and implemented new features maintaining high security and scalability standards",
        "Optimized application performance and reliability using AWS",
        "Automated CI/CD processes using Jenkins",
        "Mentored junior developers and conducted technical workshops",
      ],
    },
    techStack: [
      "TypeScript",
      "React",
      "Node.js",
      "AWS",
      "Jenkins",
      "Jira",
      "Micro Frontends",
      "Microservices",
      "Express",
      "REST API",
    ],
    link: "https://avenga.com",
  },
  {
    company: "Euvic",
    role: "Backend Developer",
    period: "May 2022 - Oct 2022",
    location: "Krakow",
    description: {
      pl: "Praca dla zewnętrznego klienta z branży lotniczej. Odpowiedzialność za rozwój i utrzymanie wielu krytycznych API backendowych.",
      en: "Working for an external client in the aviation industry. Responsible for development and maintenance of multiple critical backend APIs.",
    },
    achievements: {
      pl: [
        "Przebudowa całego systemu API z legacy do dobrze zaprojektowanego RESTful API",
        "Eliminacja 95% krytycznych błędów",
        "300% szybsza odpowiedź systemu",
        "Rozwój trzeciego API od podstaw z integracją chmurową",
      ],
      en: [
        "Rebuilt entire API system from legacy to well-architected RESTful API",
        "Eliminated 95% of critical bugs",
        "300% faster system response",
        "Developed third API from scratch with cloud-based infrastructure",
      ],
    },
    techStack: [
      "TypeScript",
      "Angular",
      "Node.js",
      "Azure",
      "Azure Pipeline",
      "Jira",
      "NestJS",
    ],
    link: "https://euvic.pl",
  },
  {
    company: "Asroom",
    role: "Full Stack Developer & Team Lead",
    period: "Aug 2018 - May 2022",
    location: "Krakow",
    description: {
      pl: "Budowanie i rozwijanie wewnętrznych narzędzi firmy oraz rozwój marki ITRoom. Szeroki zakres projektów webowych: strony, platformy e-commerce, aplikacje.",
      en: "Building and expanding company's in-house tools and developing ITRoom brand. Wide range of web projects: websites, e-commerce platforms, applications.",
    },
    achievements: {
      pl: [
        "Przywództwo: zatrudnianie i zarządzanie zespołem IT",
        "Planowanie budżetu i zarządzanie sprintami",
        "Architektura i implementacja mikroserwisów i mikrofrontendów",
        "Praca z rozwiązaniami chmurowymi (AWS, Heroku)",
      ],
      en: [
        "Leadership: hiring and managing IT team",
        "Budget planning and sprint management",
        "Architecture and implementation of microservices and micro frontends",
        "Working with cloud solutions (AWS, Heroku)",
      ],
    },
    techStack: [
      "TypeScript",
      "Angular",
      "React",
      "Vue",
      "Node.js",
      "AWS",
      "Jenkins",
      "Jira",
      "NestJS",
      "Heroku",
      "WordPress",
      "PHP",
      "C++",
      "C#",
      "JavaScript",
      "Microservices",
      "Micro Frontends",
    ],
    link: "https://asroom.pl",
  },
  {
    company: "Financeroom",
    role: "Frontend Developer",
    period: "Aug 2015 - Aug 2018",
    location: "Myslenice",
    description: {
      pl: "Projektowanie i tworzenie responsywnych stron i aplikacji webowych. Praca z HTML5, CSS3 i JavaScript z implementacją nowoczesnych zasad UI/UX.",
      en: "Designing and developing responsive websites and web applications. Working with HTML5, CSS3, and JavaScript implementing modern UI/UX principles.",
    },
    achievements: {
      pl: [
        "Tworzenie i utrzymanie stron opartych na WordPress",
        "Zdobywanie doświadczenia w backend development",
        "Praca nad logiką serwerową, integracjami z bazami danych i połączeniami API",
      ],
      en: [
        "Developing and maintaining WordPress-based websites",
        "Gaining experience in backend development",
        "Working on server-side logic, database integrations, and API connections",
      ],
    },
    techStack: ["HTML5", "CSS3", "JavaScript", "WordPress"],
    link: "https://financeroom.pl",
  },
];
