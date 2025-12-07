"use client";

import { useTranslations, useLocale } from "next-intl";
import { motion } from "framer-motion";
import { MapPin, ExternalLink, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import { experiences } from "@/lib/data/experience";
import Link from "next/link";

export default function Experience() {
  const t = useTranslations("experience");
  const locale = useLocale() as "pl" | "en";
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  return (
    <section id="experience" className="section">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">{t("title")}</span>
          </h2>
          <p className="text-muted-foreground">{t("subtitle")}</p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />

            {experiences.map((exp, index) => (
              <motion.div
                key={`${exp.company}-${exp.period}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative pl-8 md:pl-0 mb-8 md:w-1/2 ${
                  index % 2 === 0 ? "md:pr-12 md:ml-0" : "md:pl-12 md:ml-auto"
                }`}
              >
                {/* Timeline dot */}
                <div
                  className={`absolute left-0 md:left-auto w-4 h-4 rounded-full bg-primary border-4 border-background ${
                    index % 2 === 0 ? "md:right-0 md:-mr-2" : "md:left-0 md:-ml-2"
                  } md:top-6 -translate-x-1/2 md:translate-x-0`}
                />

                <div
                  className={`glass rounded-xl p-6 cursor-pointer card-hover ${
                    expandedIndex === index ? "border-primary" : ""
                  }`}
                  onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                >
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div>
                      <h3 className="font-semibold text-lg">{exp.role}</h3>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-primary font-medium">{exp.company}</span>
                        {exp.link && (
                          <Link
                            href={exp.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="text-muted-foreground hover:text-primary"
                          >
                            <ExternalLink className="w-4 h-4" />
                          </Link>
                        )}
                      </div>
                    </div>
                    <button className="text-muted-foreground hover:text-primary">
                      {expandedIndex === index ? (
                        <ChevronUp className="w-5 h-5" />
                      ) : (
                        <ChevronDown className="w-5 h-5" />
                      )}
                    </button>
                  </div>

                  <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-4">
                    <span className="font-mono">{exp.period}</span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {exp.location}
                    </span>
                  </div>

                  <p className="text-muted-foreground text-sm mb-4">
                    {exp.description[locale]}
                  </p>

                  {expandedIndex === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                    >
                      <div className="mb-4">
                        <h4 className="font-medium text-sm mb-2">{t("achievements")}:</h4>
                        <ul className="space-y-2">
                          {exp.achievements[locale].map((achievement, i) => (
                            <li
                              key={i}
                              className="flex items-start gap-2 text-sm text-muted-foreground"
                            >
                              <span className="text-primary mt-1">•</span>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {exp.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 text-xs rounded-md bg-primary/10 text-primary"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
