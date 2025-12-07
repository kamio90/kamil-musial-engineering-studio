export type ConferenceType = "conference" | "hackathon" | "workshop" | "meetup";

export interface Conference {
  name: string;
  type: ConferenceType;
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
  result?: {
    pl: string;
    en: string;
  };
  project?: string;
  link?: string;
}

export const conferences: Conference[] = [
  // 2024
  {
    name: "Code Europe 2024",
    type: "conference",
    role: {
      pl: "Uczestnik",
      en: "Attendee",
    },
    year: "2024",
    location: "Kraków",
    description: {
      pl: "Największa konferencja programistyczna w Polsce - najnowsze trendy w IT, architektura systemów, AI/ML",
      en: "Largest programming conference in Poland - latest IT trends, system architecture, AI/ML",
    },
    link: "https://www.codeeurope.pl",
  },

  // 2023
  {
    name: "HackYeah 2023",
    type: "hackathon",
    role: {
      pl: "Zwycięzca - 1. miejsce",
      en: "Winner - 1st Place",
    },
    year: "2023",
    location: "Kraków",
    description: {
      pl: "Największy hackathon w Europie (3000+ uczestników) - 48h intensywnego kodowania",
      en: "Europe's largest hackathon (3000+ participants) - 48h of intensive coding",
    },
    result: {
      pl: "1. miejsce - projekt CIRCLE EDGE",
      en: "1st Place - CIRCLE EDGE project",
    },
    project: "CIRCLE EDGE",
    link: "https://hackyeah.pl",
  },
  {
    name: "Code Europe 2023",
    type: "conference",
    role: {
      pl: "Uczestnik",
      en: "Attendee",
    },
    year: "2023",
    location: "Kraków",
    description: {
      pl: "Konferencja programistyczna - cloud architecture, DevOps, microservices",
      en: "Programming conference - cloud architecture, DevOps, microservices",
    },
    link: "https://www.codeeurope.pl",
  },

  // 2022
  {
    name: "NASA Space Apps Challenge 2022",
    type: "hackathon",
    role: {
      pl: "Uczestnik",
      en: "Participant",
    },
    year: "2022",
    location: "Online/Global",
    description: {
      pl: "Globalny hackathon NASA - 48h rozwiązywanie problemów kosmicznych z wykorzystaniem otwartych danych NASA",
      en: "Global NASA hackathon - 48h solving space problems using NASA open data",
    },
    project: "ISS Lookout",
    link: "https://www.spaceappschallenge.org",
  },
  {
    name: "Code Europe 2022",
    type: "conference",
    role: {
      pl: "Uczestnik",
      en: "Attendee",
    },
    year: "2022",
    location: "Kraków",
    description: {
      pl: "Konferencja programistyczna z naciskiem na architekturę systemów i cloud computing",
      en: "Programming conference focused on system architecture and cloud computing",
    },
    link: "https://www.codeeurope.pl",
  },
  {
    name: "Tech Open X 2022",
    type: "conference",
    role: {
      pl: "Uczestnik",
      en: "Attendee",
    },
    year: "2022",
    location: "Kraków",
    description: {
      pl: "Konferencja technologiczna skupiona na innowacjach i startupach",
      en: "Technology conference focused on innovations and startups",
    },
  },
  {
    name: "RevDev 2022",
    type: "conference",
    role: {
      pl: "Uczestnik",
      en: "Attendee",
    },
    year: "2022",
    location: "Kraków",
    description: {
      pl: "Konferencja dla programistów o rozwoju kariery i soft skills",
      en: "Developer conference about career development and soft skills",
    },
  },

  // 2021
  {
    name: "Asseco Innovation Day 2021",
    type: "hackathon",
    role: {
      pl: "Laureat - 3. miejsce",
      en: "Winner - 3rd Place",
    },
    year: "2021",
    location: "Online",
    description: {
      pl: "Hackathon organizowany przez Asseco - innowacyjne rozwiązania fintech",
      en: "Hackathon organized by Asseco - innovative fintech solutions",
    },
    result: {
      pl: "3. miejsce - Bank Pipeline",
      en: "3rd Place - Bank Pipeline",
    },
    project: "Bank Pipeline",
  },
  {
    name: "Air Quality Hackathon 2021",
    type: "hackathon",
    role: {
      pl: "Uczestnik",
      en: "Participant",
    },
    year: "2021",
    location: "Online",
    description: {
      pl: "Hackathon poświęcony rozwiązaniom monitoringu jakości powietrza",
      en: "Hackathon dedicated to air quality monitoring solutions",
    },
    project: "Air Pollution Monitoring App",
  },

  // 2019
  {
    name: "WSEI Tech Day 2019",
    type: "hackathon",
    role: {
      pl: "Laureat - Wyróżnienie",
      en: "Winner - Distinction",
    },
    year: "2019",
    location: "Kraków",
    description: {
      pl: "Hackathon uczelniany WSEI - innowacyjne rozwiązania AI dla dostępności",
      en: "WSEI university hackathon - innovative AI solutions for accessibility",
    },
    result: {
      pl: "Wyróżnienie za innowacyjność",
      en: "Distinction for innovation",
    },
    project: "AI Accessibility App (Sign Language Translation)",
  },
  {
    name: "Webmaster Competition 2019",
    type: "hackathon",
    role: {
      pl: "Laureat - Wyróżnienie",
      en: "Winner - Distinction",
    },
    year: "2019",
    location: "Online",
    description: {
      pl: "Konkurs na najlepszą stronę internetową - design i funkcjonalność",
      en: "Best website competition - design and functionality",
    },
    result: {
      pl: "Wyróżnienie za innowacyjny design",
      en: "Distinction for innovative design",
    },
  },
  {
    name: "Digital Olympics 2019",
    type: "hackathon",
    role: {
      pl: "Uczestnik",
      en: "Participant",
    },
    year: "2019",
    location: "Online",
    description: {
      pl: "Olimpiada Cyfrowa - rozwiązania technologiczne dla edukacji",
      en: "Digital Olympics - technological solutions for education",
    },
    project: "Educational Platform",
  },

  // 2017
  {
    name: "Comarch Hackathon 2017",
    type: "hackathon",
    role: {
      pl: "Zwycięzca - 1. miejsce",
      en: "Winner - 1st Place",
    },
    year: "2017",
    location: "Kraków",
    description: {
      pl: "Hackathon organizowany przez Comarch - aplikacje mobilne dla zdrowia",
      en: "Hackathon organized by Comarch - mobile health applications",
    },
    result: {
      pl: "1. miejsce - aplikacja do zarządzania cukrzycą",
      en: "1st Place - diabetes management app",
    },
    project: "Diabetes Management App",
  },
  {
    name: "Health Tech Challenge 2017",
    type: "hackathon",
    role: {
      pl: "Laureat - 2. miejsce + Nagroda Publiczności",
      en: "Winner - 2nd Place + Audience Award",
    },
    year: "2017",
    location: "Kraków",
    description: {
      pl: "Konkurs na aplikacje zdrowotne - rozszerzona wersja aplikacji diabetologicznej",
      en: "Health app competition - extended diabetes application version",
    },
    result: {
      pl: "2. miejsce + Nagroda Publiczności",
      en: "2nd Place + Audience Award",
    },
    project: "Diabetes App v2",
  },
  {
    name: "Family App Challenge 2017",
    type: "hackathon",
    role: {
      pl: "Laureat - 2. miejsce",
      en: "Winner - 2nd Place",
    },
    year: "2017",
    location: "Online",
    description: {
      pl: "Konkurs na aplikacje rodzinne - komunikacja i bezpieczeństwo",
      en: "Family app competition - communication and safety",
    },
    result: {
      pl: "2. miejsce",
      en: "2nd Place",
    },
    project: "Family Notifications App",
  },
];

// Helper to get conferences by type
export const getConferencesByType = (type: ConferenceType) =>
  conferences.filter((c) => c.type === type);

// Helper to get hackathons with results
export const getHackathonResults = () =>
  conferences.filter((c) => c.type === "hackathon" && c.result);

// Stats
export const conferenceStats = {
  total: conferences.length,
  hackathons: conferences.filter((c) => c.type === "hackathon").length,
  conferences: conferences.filter((c) => c.type === "conference").length,
  wins: conferences.filter((c) => c.result?.en.includes("1st")).length,
  podiums: conferences.filter(
    (c) => c.result?.en.match(/1st|2nd|3rd/)
  ).length,
};
