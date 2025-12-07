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
    name: "Code Europe",
    role: {
      pl: "Uczestnik",
      en: "Attendee",
    },
    year: "2023",
    location: "Kraków",
    description: {
      pl: "Największa konferencja programistyczna w Polsce - networking i najnowsze trendy w IT",
      en: "Largest programming conference in Poland - networking and latest IT trends",
    },
  },
  {
    name: "Tech Open X",
    role: {
      pl: "Uczestnik",
      en: "Attendee",
    },
    year: "2023",
    location: "Kraków",
    description: {
      pl: "Konferencja technologiczna skupiona na innowacjach i nowych technologiach",
      en: "Technology conference focused on innovations and emerging technologies",
    },
  },
  {
    name: "RevDev",
    role: {
      pl: "Uczestnik",
      en: "Attendee",
    },
    year: "2022",
    location: "Kraków",
    description: {
      pl: "Konferencja dla programistów skupiona na rozwoju kariery i najlepszych praktykach",
      en: "Developer conference focused on career development and best practices",
    },
  },
  {
    name: "LegalHack 2020",
    role: {
      pl: "Zwycięzca - 1. miejsce",
      en: "Winner - 1st Place",
    },
    year: "2020",
    location: "Online",
    description: {
      pl: "Hackathon prawniczy - zwycięstwo z aplikacją wykorzystującą Computer Vision i AI",
      en: "Legal hackathon - victory with application using Computer Vision and AI",
    },
  },
];
