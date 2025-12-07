export interface Achievement {
  title: {
    pl: string;
    en: string;
  };
  description: {
    pl: string;
    en: string;
  };
  metric?: string;
  icon: "trophy" | "star" | "zap" | "target" | "trending-up" | "award";
}

export const achievements: Achievement[] = [
  {
    title: {
      pl: "Eliminacja 95% krytycznych błędów",
      en: "Eliminated 95% of Critical Bugs",
    },
    description: {
      pl: "Przebudowa całego systemu API w branży lotniczej, eliminując 95% krytycznych błędów",
      en: "Rebuilt entire API system in aviation industry, eliminating 95% of critical bugs",
    },
    metric: "95%",
    icon: "target",
  },
  {
    title: {
      pl: "300% szybsza odpowiedź systemu",
      en: "300% Faster System Response",
    },
    description: {
      pl: "Optymalizacja architektury API prowadząca do 3-krotnego przyspieszenia odpowiedzi systemu",
      en: "API architecture optimization leading to 3x faster system response time",
    },
    metric: "300%",
    icon: "zap",
  },
  {
    title: {
      pl: "Zwycięzca Hackathonu LegalHack 2020",
      en: "LegalHack 2020 Hackathon Winner",
    },
    description: {
      pl: "Pierwsze miejsce w hackathonie LegalHack z aplikacją wykorzystującą Computer Vision i AI",
      en: "First place in LegalHack hackathon with an application using Computer Vision and AI",
    },
    metric: "1st",
    icon: "trophy",
  },
  {
    title: {
      pl: "Mentoring i rozwój zespołu",
      en: "Team Mentoring & Development",
    },
    description: {
      pl: "Mentoring programistów junior i prowadzenie warsztatów technicznych w wielu organizacjach",
      en: "Mentored junior developers and conducted technical workshops across multiple organizations",
    },
    icon: "star",
  },
  {
    title: {
      pl: "Przywództwo techniczne",
      en: "Technical Leadership",
    },
    description: {
      pl: "Zarządzanie zespołem IT, planowanie budżetu i prowadzenie sprintów w Asroom",
      en: "Managing IT team, budget planning, and sprint leadership at Asroom",
    },
    icon: "award",
  },
  {
    title: {
      pl: "Architektura systemów rozproszonych",
      en: "Distributed Systems Architecture",
    },
    description: {
      pl: "Projektowanie i implementacja mikroserwisów i mikrofrontendów dla systemów enterprise",
      en: "Designing and implementing microservices and micro frontends for enterprise systems",
    },
    icon: "trending-up",
  },
];
