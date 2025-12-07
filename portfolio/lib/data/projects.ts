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
  outcome?: {
    pl: string;
    en: string;
  };
}

export const projects: Project[] = [
  // COMMERCIAL PROJECTS (11)
  {
    id: "bank-pipeline-blockchain",
    title: "Bank Pipeline Blockchain",
    year: 2022,
    category: "commercial",
    description: {
      pl: "System natychmiastowych płatności międzynarodowych wykorzystujący technologię blockchain. Składał się z samodzielnego silnika przetwarzania płatności i interfejsu użytkownika umożliwiającego natychmiastowe transakcje między bankami międzynarodowymi.",
      en: "Instant international payment solution leveraging blockchain technology. Consisted of a standalone payment processing engine and user-facing interface enabling instant transactions between international banks.",
    },
    techStack: ["React", "Node.js", "TypeScript", "Python", "Blockchain"],
    outcome: {
      pl: "Projekt dostarczył cenne doświadczenia w technologii finansowej i implementacji blockchain.",
      en: "Project provided valuable insights into financial technology and blockchain implementation.",
    },
  },
  {
    id: "machines-registry",
    title: "Machine Registry System",
    year: 2020,
    category: "commercial",
    description: {
      pl: "System zarządzania i lokalizacji maszyn przemysłowych z modułem mobilnym wykorzystującym C++ dla wydajnego przetwarzania danych w czasie rzeczywistym.",
      en: "Industrial machine management and location system with mobile module using C++ for efficient real-time data processing.",
    },
    techStack: ["React", "Node.js", "C++", "TypeScript", "Mobile"],
  },
  {
    id: "tourist-vacation-finder",
    title: "Tourist Vacation Finder",
    year: 2020,
    category: "commercial",
    description: {
      pl: "Platforma do wyszukiwania i porównywania ofert wakacyjnych. Projekt został przejęty przez większą firmę turystyczną.",
      en: "Platform for searching and comparing vacation offers. The project was acquired by a larger travel company.",
    },
    techStack: ["React", "Node.js", "TypeScript", "PostgreSQL"],
    outcome: {
      pl: "Przejęty przez większą firmę turystyczną",
      en: "Acquired by a larger travel company",
    },
  },
  {
    id: "teaching-programming",
    title: "Teaching Programming Platform",
    year: 2019,
    category: "commercial",
    description: {
      pl: "Platforma edukacyjna do nauki programowania z interaktywnymi lekcjami i ćwiczeniami w JavaScript i C++.",
      en: "Educational platform for learning programming with interactive lessons and exercises in JavaScript and C++.",
    },
    techStack: ["JavaScript", "C++", "React", "Node.js"],
  },
  {
    id: "online-bakery",
    title: "Online Bakery E-commerce",
    year: 2018,
    category: "commercial",
    description: {
      pl: "Platforma e-commerce dla piekarni z systemem zamówień online, płatnościami i zarządzaniem dostawami.",
      en: "E-commerce platform for bakery with online ordering system, payments, and delivery management.",
    },
    techStack: ["React", "Node.js", "MongoDB", "Stripe"],
  },
  {
    id: "pizzeria-app",
    title: "Pizzeria Mobile App",
    year: 2017,
    category: "commercial",
    description: {
      pl: "Mobilna aplikacja do zamawiania pizzy z real-time śledzeniem zamówień i integracją płatności.",
      en: "Mobile pizza ordering app with real-time order tracking and payment integration.",
    },
    techStack: ["Xamarin", "C#", ".NET", "Azure"],
  },
  {
    id: "furniture-platform",
    title: "3D Furniture Platform",
    year: 2021,
    category: "commercial",
    description: {
      pl: "Platforma do wizualizacji mebli w 3D z wykorzystaniem Unity do renderowania i Node.js do backendu.",
      en: "3D furniture visualization platform using Unity for rendering and Node.js for backend.",
    },
    techStack: ["Node.js", "React", "Unity", "C#", "WebGL"],
  },
  {
    id: "electricity-management",
    title: "Electricity Management System",
    year: 2021,
    category: "commercial",
    description: {
      pl: "System zarządzania energią elektryczną z monitoringiem w czasie rzeczywistym, optymalizacją zużycia i integracją IoT.",
      en: "Electricity management system with real-time monitoring, consumption optimization, and IoT integration.",
    },
    techStack: ["Node.js", "React", "C++", "IoT", "MQTT"],
  },
  {
    id: "logistics-system",
    title: "Logistics Management System",
    year: 2021,
    category: "commercial",
    description: {
      pl: "Kompleksowy system zarządzania logistyką z optymalizacją tras, śledzeniem pojazdów i zarządzaniem magazynem.",
      en: "Comprehensive logistics management system with route optimization, vehicle tracking, and warehouse management.",
    },
    techStack: ["Node.js", "React", "C++", "PostgreSQL", "Redis"],
  },
  {
    id: "hotel-booking",
    title: "Hotel Booking Platform Fixes",
    year: 2020,
    category: "commercial",
    description: {
      pl: "Naprawa i optymalizacja istniejącej platformy rezerwacji hotelowych - poprawa wydajności i stabilności.",
      en: "Fixing and optimizing existing hotel booking platform - improved performance and stability.",
    },
    techStack: ["Node.js", "Express", "MongoDB"],
  },
  {
    id: "job-platform",
    title: "Job Portal Platform",
    year: 2019,
    category: "commercial",
    description: {
      pl: "Portal ogłoszeń o pracę z zaawansowanym wyszukiwaniem, systemem dopasowania kandydatów i panelem pracodawcy.",
      en: "Job portal with advanced search, candidate matching system, and employer dashboard.",
    },
    techStack: ["React", "Node.js", "PostgreSQL", "Elasticsearch"],
  },

  // COMPETITION PROJECTS (10)
  {
    id: "circle-edge-hackyeah",
    title: "CIRCLE EDGE - 1st Place HackYeah 2023",
    year: 2023,
    category: "competition",
    description: {
      pl: "Zwycięski projekt hackathonu HackYeah 2023 - największego hackathonu w Europie. Innowacyjne rozwiązanie wykorzystujące najnowsze technologie.",
      en: "Winning project at HackYeah 2023 - Europe's largest hackathon. Innovative solution using cutting-edge technologies.",
    },
    techStack: ["React", "Node.js", "TypeScript", "AI/ML", "Cloud"],
    outcome: {
      pl: "1. miejsce - HackYeah 2023 (największy hackathon w Europie)",
      en: "1st Place - HackYeah 2023 (Europe's largest hackathon)",
    },
  },
  {
    id: "iss-lookout",
    title: "ISS Lookout - NASA Space Apps",
    year: 2022,
    category: "competition",
    description: {
      pl: "Aplikacja do śledzenia Międzynarodowej Stacji Kosmicznej w czasie rzeczywistym, stworzona podczas NASA Space Apps Challenge.",
      en: "Real-time International Space Station tracking application, created during NASA Space Apps Challenge.",
    },
    techStack: ["React", "Node.js", "NASA API", "Three.js", "WebGL"],
  },
  {
    id: "bank-pipeline-asseco",
    title: "Bank Pipeline - 3rd Place Asseco",
    year: 2021,
    category: "competition",
    description: {
      pl: "System pipeline'u bankowego - 3. miejsce w konkursie Asseco. Innowacyjne podejście do procesów bankowych.",
      en: "Banking pipeline system - 3rd place in Asseco competition. Innovative approach to banking processes.",
    },
    techStack: ["TypeScript", "Node.js", "React", "PostgreSQL"],
    outcome: {
      pl: "3. miejsce - Konkurs Asseco",
      en: "3rd Place - Asseco Competition",
    },
  },
  {
    id: "air-pollution-app",
    title: "Air Pollution Monitoring App",
    year: 2021,
    category: "competition",
    description: {
      pl: "Aplikacja do monitorowania jakości powietrza z mapą zanieczyszczeń i alertami zdrowotnymi.",
      en: "Air quality monitoring application with pollution map and health alerts.",
    },
    techStack: ["React", "Node.js", "Python", "Air Quality APIs"],
  },
  {
    id: "webmaster-distinction",
    title: "Website - Webmaster Distinction",
    year: 2019,
    category: "competition",
    description: {
      pl: "Strona internetowa nagrodzona wyróżnieniem w konkursie Webmaster za innowacyjny design i funkcjonalność.",
      en: "Website awarded distinction in Webmaster competition for innovative design and functionality.",
    },
    techStack: ["HTML5", "CSS3", "JavaScript", "PHP"],
    outcome: {
      pl: "Wyróżnienie w konkursie Webmaster",
      en: "Distinction in Webmaster competition",
    },
  },
  {
    id: "digital-olympics",
    title: "Digital Olympics Project",
    year: 2019,
    category: "competition",
    description: {
      pl: "Projekt konkursowy na Olimpiadę Cyfrową - rozwiązanie technologiczne dla edukacji.",
      en: "Digital Olympics competition project - technological solution for education.",
    },
    techStack: ["JavaScript", "React", "Node.js"],
  },
  {
    id: "accessibility-ai-app",
    title: "AI Accessibility App - Distinction",
    year: 2019,
    category: "competition",
    description: {
      pl: "Aplikacja wykorzystująca AI do tłumaczenia języka migowego w czasie rzeczywistym. Wyróżnienie WSEI.",
      en: "Application using AI for real-time sign language translation. WSEI distinction.",
    },
    techStack: ["Python", "TensorFlow", "React", "Computer Vision"],
    outcome: {
      pl: "Wyróżnienie WSEI za innowacyjność",
      en: "WSEI distinction for innovation",
    },
  },
  {
    id: "diabetes-app-comarch",
    title: "Diabetes Management - 1st Place Comarch",
    year: 2017,
    category: "competition",
    description: {
      pl: "Aplikacja do zarządzania cukrzycą z monitoringiem poziomu glukozy i planowaniem posiłków. 1. miejsce Comarch.",
      en: "Diabetes management app with glucose monitoring and meal planning. 1st place Comarch.",
    },
    techStack: ["C#", "Xamarin", ".NET", "Azure"],
    outcome: {
      pl: "1. miejsce - Konkurs Comarch",
      en: "1st Place - Comarch Competition",
    },
  },
  {
    id: "diabetes-v2",
    title: "Diabetes App v2 - 2nd + Audience Award",
    year: 2017,
    category: "competition",
    description: {
      pl: "Rozbudowana wersja aplikacji do zarządzania cukrzycą. 2. miejsce + Nagroda Publiczności.",
      en: "Extended version of diabetes management app. 2nd place + Audience Award.",
    },
    techStack: ["C#", "Xamarin", ".NET", "Azure", "ML"],
    outcome: {
      pl: "2. miejsce + Nagroda Publiczności",
      en: "2nd Place + Audience Award",
    },
  },
  {
    id: "family-notifications",
    title: "Family Notifications - 2nd Place",
    year: 2017,
    category: "competition",
    description: {
      pl: "Aplikacja do komunikacji rodzinnej z powiadomieniami i lokalizacją. 2. miejsce w konkursie.",
      en: "Family communication app with notifications and location sharing. 2nd place in competition.",
    },
    techStack: ["C#", "Xamarin", "Firebase", "Push Notifications"],
    outcome: {
      pl: "2. miejsce",
      en: "2nd Place",
    },
  },

  // UNIVERSITY PROJECT (1)
  {
    id: "5d-game-thesis",
    title: "5D Sci-Fi Game - Thesis",
    year: 2022,
    category: "university",
    description: {
      pl: "Praca dyplomowa: gra science-fiction w 5 wymiarach z własnym silnikiem matematycznym do obliczeń 5D. Unikalne podejście do wizualizacji wyższych wymiarów.",
      en: "Thesis: 5-dimensional science fiction game with custom mathematical engine for 5D calculations. Unique approach to higher dimension visualization.",
    },
    techStack: ["Unity", "C#", "Custom Math Engine", "5D Mathematics", "Shaders"],
    outcome: {
      pl: "Obrona z wyróżnieniem",
      en: "Thesis defended with distinction",
    },
  },

  // PRIVATE PROJECTS (3)
  {
    id: "custom-game-engine",
    title: "Custom Game Engine",
    year: 2022,
    category: "private",
    description: {
      pl: "Własny silnik gier stworzony od podstaw w TypeScript z WebGL. Obsługuje renderowanie 3D, fizykę i system cząsteczek.",
      en: "Custom game engine built from scratch in TypeScript with WebGL. Supports 3D rendering, physics, and particle system.",
    },
    techStack: ["TypeScript", "WebGL", "GLSL", "Custom Physics"],
    github: "https://github.com/kamio90",
  },
  {
    id: "doctor-finder",
    title: "Doctor Finder App",
    year: 2019,
    category: "private",
    description: {
      pl: "Aplikacja do wyszukiwania lekarzy z systemem rezerwacji wizyt i recenzjami pacjentów.",
      en: "Doctor search application with appointment booking system and patient reviews.",
    },
    techStack: ["React", "Node.js", "MongoDB", "Google Maps API"],
  },
  {
    id: "personal-portfolio",
    title: "Personal Portfolio",
    year: 2024,
    category: "private",
    description: {
      pl: "Osobiste portfolio z Next.js, animacjami Framer Motion i wsparciem wielojęzyczności PL/EN.",
      en: "Personal portfolio with Next.js, Framer Motion animations, and PL/EN internationalization support.",
    },
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "next-intl"],
    github: "https://github.com/kamio90/kamil-musial-engineering-studio",
  },

  // COMPANY PROJECTS - ITRoom/Asroom (5)
  {
    id: "eu-funding-website",
    title: "EU Funding Portal",
    year: 2018,
    category: "company",
    description: {
      pl: "Portal informacyjny o funduszach unijnych z systemem wyszukiwania programów i kalkulatorem dotacji.",
      en: "EU funding information portal with program search system and grant calculator.",
    },
    techStack: ["React", "Node.js", "PostgreSQL"],
  },
  {
    id: "financial-platform",
    title: "Financial Services Platform",
    year: 2018,
    category: "company",
    description: {
      pl: "Platforma usług finansowych z kalkulatorami kredytowymi i porównywarka ofert.",
      en: "Financial services platform with loan calculators and offer comparison.",
    },
    techStack: ["React", "Node.js", "PostgreSQL", "Chart.js"],
  },
  {
    id: "womens-travel",
    title: "Women's Travel Platform",
    year: 2018,
    category: "company",
    description: {
      pl: "Platforma podróżnicza dla kobiet z systemem rezerwacji i społecznością. Projekt został przejęty.",
      en: "Travel platform for women with booking system and community features. Project was acquired.",
    },
    techStack: ["React", "WordPress", "PHP", "MySQL"],
    outcome: {
      pl: "Przejęty przez większą firmę",
      en: "Acquired by larger company",
    },
  },
  {
    id: "itroom-cms",
    title: "ITRoom CMS Platform",
    year: 2019,
    category: "company",
    description: {
      pl: "Wewnętrzny system CMS dla klientów agencji z edytorem drag-and-drop i zarządzaniem mediami.",
      en: "Internal CMS system for agency clients with drag-and-drop editor and media management.",
    },
    techStack: ["Angular", "Node.js", "PostgreSQL", "AWS", "Docker"],
  },
  {
    id: "client-portal",
    title: "Client Portal System",
    year: 2020,
    category: "company",
    description: {
      pl: "Portal klienta z zarządzaniem projektami, fakturami i komunikacją z zespołem.",
      en: "Client portal with project management, invoicing, and team communication.",
    },
    techStack: ["React", "Node.js", "MongoDB", "Stripe", "AWS"],
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
