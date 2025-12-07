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
    value: "24",
    label: {
      pl: "Zrealizowanych projektów",
      en: "Projects Delivered",
    },
    suffix: "+",
  },
  {
    value: "7",
    label: {
      pl: "Firm współpracujących",
      en: "Companies Worked With",
    },
  },
  {
    value: "300",
    label: {
      pl: "Szybszy system",
      en: "Faster System",
    },
    suffix: "%",
  },
];
