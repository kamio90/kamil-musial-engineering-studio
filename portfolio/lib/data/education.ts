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
}

export const education: Education[] = [
  {
    institution: "Akademia Górniczo-Hutnicza (AGH)",
    degree: {
      pl: "Mini MBA",
      en: "Mini MBA",
    },
    field: {
      pl: "Zarządzanie projektami IT i innowacjami",
      en: "IT Project Management and Innovation",
    },
    period: "2023 - 2024",
    location: "Kraków",
    description: {
      pl: "Program executive education skupiony na zarządzaniu projektami IT, przywództwie i innowacjach technologicznych",
      en: "Executive education program focused on IT project management, leadership, and technological innovation",
    },
  },
  {
    institution: "Wyższa Szkoła Ekonomii i Informatyki w Krakowie",
    degree: {
      pl: "Licencjat (Inżynier)",
      en: "Bachelor's Degree (Engineer)",
    },
    field: {
      pl: "Informatyka",
      en: "Computer Science",
    },
    period: "2016 - 2020",
    location: "Kraków",
    description: {
      pl: "Studia informatyczne z naciskiem na programowanie, bazy danych i inżynierię oprogramowania",
      en: "Computer Science studies with focus on programming, databases, and software engineering",
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
    name: "Microsoft Technology Associate: Database Fundamentals",
    issuer: "Microsoft",
    date: "2017",
  },
  {
    name: "Microsoft Technology Associate: Software Development Fundamentals",
    issuer: "Microsoft",
    date: "2017",
  },
  {
    name: "Microsoft Technology Associate: Introduction to Programming using HTML and CSS",
    issuer: "Microsoft",
    date: "2017",
  },
  {
    name: "Frontend Developer",
    issuer: "Coders Lab",
    date: "2018",
  },
];
