"use client";

import { useTranslations, useLocale } from "next-intl";
import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail, Download } from "lucide-react";
import Link from "next/link";

const socialLinks = [
  { name: "GitHub", url: "https://github.com/kamio90", icon: Github },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/kamio90/", icon: Linkedin },
  { name: "Email", url: "mailto:kmusial40@gmail.com", icon: Mail },
];

const valueProps = {
  pl: [
    "Architektura systemów od 0 do milionów użytkowników",
    "9+ lat w enterprise, fintech, energia, IoT",
    "Nie szukam pracy — poluję na wpływ i autonomię",
  ],
  en: [
    "Architecting systems from 0 to millions of users",
    "9+ years across enterprise, fintech, energy, IoT",
    "Not looking for a job—hunting impact & autonomy",
  ],
};

export default function Hero() {
  const t = useTranslations("hero");
  const locale = useLocale() as "pl" | "en";
  const basePath = process.env.NODE_ENV === "production" ? "/kamil-musial-engineering-studio" : "";

  return (
    <section className="min-h-screen flex items-center justify-center relative pt-20">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-primary font-mono text-sm md:text-base mb-4"
          >
            {t("greeting")}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-2"
          >
            <span className="gradient-text">{t("name")}</span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-xl md:text-2xl lg:text-3xl font-mono font-bold text-primary mb-2"
          >
            ENGINEERING STUDIO
          </motion.h2>

          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground mb-2"
          >
            {t("title")} | System Designer | MBA
          </motion.h3>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="text-base md:text-lg text-muted-foreground/80 italic mb-6"
          >
            &ldquo;Innovating Tomorrow, Today&rdquo;
          </motion.p>

          <motion.ul
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="space-y-2 mb-8"
          >
            {valueProps[locale].map((prop, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.4 + i * 0.1 }}
                className="text-sm md:text-base text-muted-foreground flex items-center justify-center gap-2"
              >
                <span className="text-primary">▸</span>
                {prop}
              </motion.li>
            ))}
          </motion.ul>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8"
          >
            <Link
              href="#projects"
              className="btn-primary px-8 py-3 rounded-lg font-medium text-lg"
            >
              {t("cta.primary")}
            </Link>
            <Link
              href={`${basePath}/cv.pdf`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-8 py-3 rounded-lg font-medium text-lg border-2 border-primary text-primary hover:bg-primary hover:text-white transition-colors"
            >
              <Download className="w-5 h-5" />
              {locale === "pl" ? "Pobierz CV" : "Download CV"}
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="flex items-center justify-center gap-4"
          >
            {socialLinks.map((link) => (
              <Link
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full border border-border hover:border-primary hover:text-primary transition-colors"
                aria-label={link.name}
              >
                <link.icon className="w-6 h-6" />
              </Link>
            ))}
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <Link
          href="#about"
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          aria-label={t("scrollDown")}
        >
          <span className="text-sm font-mono">{t("scrollDown")}</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ArrowDown className="w-5 h-5" />
          </motion.div>
        </Link>
      </motion.div>
    </section>
  );
}
