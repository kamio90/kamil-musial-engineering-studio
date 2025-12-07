export interface Stat {
  value: string;
  label: {
    pl: string;
    en: string;
  };
  suffix?: string;
}

export const stats: Stat[] = [
  {
    value: "9",
    label: {
      pl: "Lat doświadczenia",
      en: "Years of Experience",
    },
    suffix: "+",
  },
  {
    value: "30",
    label: {
      pl: "Dostarczonych projektów",
      en: "Projects Delivered",
    },
    suffix: "+",
  },
  {
    value: "1",
    label: {
      pl: "Użytkowników skalowanych",
      en: "Users Scaled",
    },
    suffix: "M+",
  },
  {
    value: "99.9",
    label: {
      pl: "SLA Uptime",
      en: "SLA Uptime",
    },
    suffix: "%",
  },
  {
    value: "45",
    label: {
      pl: "Redukcja kosztów",
      en: "Cost Reduction",
    },
    suffix: "%",
  },
  {
    value: "12",
    label: {
      pl: "Mentorowanych inżynierów",
      en: "Engineers Mentored",
    },
    suffix: "+",
  },
];
