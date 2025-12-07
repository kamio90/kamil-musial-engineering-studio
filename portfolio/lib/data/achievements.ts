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
  icon: "trophy" | "star" | "zap" | "target" | "trending-up" | "award" | "rocket" | "users" | "code" | "shield";
}

export const achievements: Achievement[] = [
  {
    title: {
      pl: "1. miejsce HackYeah 2023",
      en: "1st Place HackYeah 2023",
    },
    description: {
      pl: "Zwycięstwo w największym hackathonie w Europie z projektem CIRCLE EDGE",
      en: "Victory at Europe's largest hackathon with CIRCLE EDGE project",
    },
    metric: "1st",
    icon: "trophy",
  },
  {
    title: {
      pl: "Skalowanie do 1M+ użytkowników",
      en: "Scaled to 1M+ Users",
    },
    description: {
      pl: "Skalowanie systemów od 10k do 1M+ użytkowników z czasem odpowiedzi <2s i 99.99% uptime",
      en: "Scaled systems from 10k to 1M+ users with <2s response time and 99.99% uptime",
    },
    metric: "1M+",
    icon: "rocket",
  },
  {
    title: {
      pl: "45% redukcja kosztów infrastruktury",
      en: "45% Infrastructure Cost Reduction",
    },
    description: {
      pl: "Optymalizacja infrastruktury chmurowej prowadząca do 45% redukcji kosztów",
      en: "Cloud infrastructure optimization leading to 45% cost reduction",
    },
    metric: "45%",
    icon: "trending-up",
  },
  {
    title: {
      pl: "Przebudowa API lotniczego",
      en: "Aviation API Rebuild",
    },
    description: {
      pl: "Przebudowa backendu lotniczego w 2 miesiące: eliminacja 95% błędów, 300% szybsza odpowiedź",
      en: "Aviation backend rewrite in 2 months: 95% bugs eliminated, 300% faster response",
    },
    metric: "300%",
    icon: "zap",
  },
  {
    title: {
      pl: "15+ produktów fullstack",
      en: "15+ Fullstack Products",
    },
    description: {
      pl: "Dostarczenie ponad 15 kompletnych produktów fullstack od koncepcji do produkcji",
      en: "Delivered over 15 complete fullstack products from concept to production",
    },
    metric: "15+",
    icon: "code",
  },
  {
    title: {
      pl: "50+ API zbudowanych/zrefaktoryzowanych",
      en: "50+ APIs Built/Refactored",
    },
    description: {
      pl: "Budowa i refaktoryzacja ponad 50 API w różnych technologiach",
      en: "Built and refactored over 50 APIs across various technologies",
    },
    metric: "50+",
    icon: "target",
  },
  {
    title: {
      pl: "Mentoring 12+ inżynierów",
      en: "Mentored 12+ Engineers",
    },
    description: {
      pl: "Mentoring i rozwój ponad 12 inżynierów, prowadzenie warsztatów technicznych",
      en: "Mentored and developed over 12 engineers, conducted technical workshops",
    },
    metric: "12+",
    icon: "users",
  },
  {
    title: {
      pl: "Zero-downtime CI/CD",
      en: "Zero-downtime CI/CD",
    },
    description: {
      pl: "Implementacja zero-downtime CI/CD w całej organizacji",
      en: "Implemented zero-downtime CI/CD across entire organization",
    },
    icon: "shield",
  },
  {
    title: {
      pl: "3 ekosystemy mikroserwisów",
      en: "3 Microservice Ecosystems",
    },
    description: {
      pl: "Architektura i wdrożenie 3 ekosystemów mikroserwisów dla 4+ zespołów",
      en: "Architected and deployed 3 microservice ecosystems for 4+ teams",
    },
    metric: "3",
    icon: "star",
  },
  {
    title: {
      pl: "Własny silnik gier",
      en: "Custom Game Engine",
    },
    description: {
      pl: "Stworzenie własnego silnika gier w TypeScript + WebGL z fizyką i cząsteczkami",
      en: "Created custom game engine in TypeScript + WebGL with physics and particles",
    },
    icon: "code",
  },
];

export const competitionResults = [
  { place: "1st", event: "HackYeah 2023", description: "Europe's largest hackathon" },
  { place: "1st", event: "Comarch 2017", description: "Diabetes management app" },
  { place: "2nd", event: "Diabetes v2", description: "+ Audience Award" },
  { place: "2nd", event: "Family App 2017", description: "Communication app" },
  { place: "3rd", event: "Asseco 2021", description: "Bank Pipeline" },
  { place: "Distinction", event: "WSEI", description: "AI Accessibility App" },
  { place: "Distinction", event: "Webmaster 2019", description: "Website design" },
  { place: "Participant", event: "NASA Space Apps", description: "ISS Lookout" },
  { place: "Participant", event: "Digital Olympics", description: "Education tech" },
];
