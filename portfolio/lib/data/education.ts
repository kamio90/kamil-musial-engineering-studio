export interface Education {
  institution: string;
  degree: {
    pl: string;
    en: string;
  };
  field: {
    pl: string;
    en: string;
  };
  period: string;
  description?: {
    pl: string;
    en: string;
  };
  location?: string;
  details?: {
    pl: string[];
    en: string[];
  };
}

export const education: Education[] = [
  {
    institution: "Warsaw Business School",
    degree: {
      pl: "MBA",
      en: "MBA",
    },
    field: {
      pl: "Master of Business Administration",
      en: "Master of Business Administration",
    },
    period: "2024 - 2025",
    location: "Warszawa",
    description: {
      pl: "Program MBA skupiony na przywództwie, strategii, zarządzaniu projektami i HR",
      en: "MBA program focused on leadership, strategy, project management, and HR",
    },
    details: {
      pl: ["180h programu", "Przywództwo", "Strategia", "Zarządzanie projektami", "HR"],
      en: ["180h program", "Leadership", "Strategy", "Project Management", "HR"],
    },
  },
  {
    institution: "WSEI Kraków",
    degree: {
      pl: "Studia (nieukończone)",
      en: "Studies (not finished)",
    },
    field: {
      pl: "Informatyka i Ekonometria",
      en: "Computer Science & Econometrics",
    },
    period: "2019 - 2023",
    location: "Kraków",
    description: {
      pl: "Studia informatyczne z naciskiem na programowanie, matematykę i tworzenie gier",
      en: "Computer Science studies with focus on programming, mathematics, and game development",
    },
    details: {
      pl: ["Praca dyplomowa: 5. wymiar w grach", "C#", "Matematyka", "Game Dev"],
      en: ["Thesis: 5th dimension in games", "C#", "Mathematics", "Game Dev"],
    },
  },
  {
    institution: "Technikum Informatyczne",
    degree: {
      pl: "Technik Informatyk",
      en: "IT Technician",
    },
    field: {
      pl: "Technik Informatyk",
      en: "IT Technician",
    },
    period: "2015 - 2019",
    location: "Myślenice",
    description: {
      pl: "Kwalifikacje zawodowe E12, E13, E14 w zakresie informatyki",
      en: "Professional qualifications E12, E13, E14 in IT",
    },
    details: {
      pl: ["Kwalifikacja E12", "Kwalifikacja E13", "Kwalifikacja E14"],
      en: ["Qualification E12", "Qualification E13", "Qualification E14"],
    },
  },
];

export interface Certification {
  name: string;
  issuer: string;
  date?: string;
  credentialId?: string;
  link?: string;
}

export const certifications: Certification[] = [
  {
    name: "MTA: Database Fundamentals (98-364)",
    issuer: "Microsoft",
    date: "2017",
    credentialId: "wL8uY-FMLX",
  },
  {
    name: "MTA: HTML5 Application Development (98-375)",
    issuer: "Microsoft",
    date: "2017",
    credentialId: "e3MX-4Tkj",
  },
  {
    name: "MTA: Software Development Fundamentals (98-361)",
    issuer: "Microsoft",
    date: "2017",
    credentialId: "wy54W-4Smb",
  },
  {
    name: "MTA: Security Fundamentals (98-367)",
    issuer: "Microsoft",
    date: "2017",
    credentialId: "J26m-FVpD",
  },
  {
    name: "Front-End Developer",
    issuer: "Academy 108",
    date: "2017",
  },
];
