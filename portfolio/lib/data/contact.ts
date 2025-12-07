export interface SocialLink {
  name: string;
  url: string;
  icon: "github" | "linkedin" | "mail" | "phone" | "globe";
}

export const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    url: "https://github.com/kamio90",
    icon: "github",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/kamio90/",
    icon: "linkedin",
  },
  {
    name: "Email",
    url: "mailto:kmusial40@gmail.com",
    icon: "mail",
  },
];

export const contactInfo = {
  email: "kmusial40@gmail.com",
  location: {
    pl: "Warszawa, Polska",
    en: "Warsaw, Poland",
  },
  availability: {
    pl: "Dostępny dla nowych projektów",
    en: "Available for new projects",
  },
};
