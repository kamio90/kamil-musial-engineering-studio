export interface Conference {
  name: string;
  role: {
    pl: string;
    en: string;
  };
  year: string;
  location?: string;
  description?: {
    pl: string;
    en: string;
  };
}

export const conferences: Conference[] = [
  {
    name: "Code Europe 2024",
    role: {
      pl: "Uczestnik",
      en: "Attendee",
    },
    year: "2024",
    location: "Kraków",
    description: {
      pl: "Największa konferencja programistyczna w Polsce - najnowsze trendy w IT",
      en: "Largest programming conference in Poland - latest IT trends",
    },
  },
  {
    name: "HackYeah 2023",
    role: {
      pl: "Zwycięzca - 1. miejsce",
      en: "Winner - 1st Place",
    },
    year: "2023",
    location: "Kraków",
    description: {
      pl: "Największy hackathon w Europie - zwycięstwo z projektem CIRCLE EDGE",
      en: "Europe's largest hackathon - victory with CIRCLE EDGE project",
    },
  },
  {
    name: "Code Europe 2023",
    role: {
      pl: "Uczestnik",
      en: "Attendee",
    },
    year: "2023",
    location: "Kraków",
    description: {
      pl: "Konferencja programistyczna - networking i najnowsze trendy",
      en: "Programming conference - networking and latest trends",
    },
  },
  {
    name: "Code Europe 2022",
    role: {
      pl: "Uczestnik",
      en: "Attendee",
    },
    year: "2022",
    location: "Kraków",
    description: {
      pl: "Konferencja programistyczna z naciskiem na architekturę i cloud",
      en: "Programming conference focused on architecture and cloud",
    },
  },
  {
    name: "NASA Space Apps Challenge 2022",
    role: {
      pl: "Uczestnik",
      en: "Participant",
    },
    year: "2022",
    location: "Online",
    description: {
      pl: "Globalny hackathon NASA - stworzenie aplikacji ISS Lookout",
      en: "Global NASA hackathon - created ISS Lookout application",
    },
  },
  {
    name: "Tech Open X 2022",
    role: {
      pl: "Uczestnik",
      en: "Attendee",
    },
    year: "2022",
    location: "Kraków",
    description: {
      pl: "Konferencja technologiczna skupiona na innowacjach",
      en: "Technology conference focused on innovations",
    },
  },
  {
    name: "RevDev 2022",
    role: {
      pl: "Uczestnik",
      en: "Attendee",
    },
    year: "2022",
    location: "Kraków",
    description: {
      pl: "Konferencja dla programistów o rozwoju kariery",
      en: "Developer conference about career development",
    },
  },
];
