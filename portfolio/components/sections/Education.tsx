"use client";

import { useTranslations, useLocale } from "next-intl";
import { motion } from "framer-motion";
import { GraduationCap, Award, MapPin, Calendar } from "lucide-react";
import { education, certifications } from "@/lib/data/education";

export default function Education() {
  const t = useTranslations("education");
  const locale = useLocale() as "pl" | "en";

  return (
    <section id="education" className="section bg-card/50">
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

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-primary/10">
                <GraduationCap className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">{t("title")}</h3>
            </div>

            <div className="space-y-6">
              {education.map((edu, index) => (
                <motion.div
                  key={edu.institution}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="glass rounded-xl p-6 card-hover"
                >
                  <h4 className="font-semibold text-lg">{edu.degree[locale]}</h4>
                  <p className="text-primary font-medium mt-1">
                    {edu.institution}
                  </p>
                  <p className="text-muted-foreground text-sm mt-1">
                    {edu.field[locale]}
                  </p>

                  <div className="flex flex-wrap items-center gap-4 mt-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {edu.period}
                    </span>
                    {edu.location && (
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {edu.location}
                      </span>
                    )}
                  </div>

                  {edu.description && (
                    <p className="text-muted-foreground text-sm mt-4">
                      {edu.description[locale]}
                    </p>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-primary/10">
                <Award className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">{t("certifications")}</h3>
            </div>

            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert.name}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="glass rounded-xl p-5 card-hover"
                >
                  <h4 className="font-medium">{cert.name}</h4>
                  <div className="flex items-center justify-between mt-2 text-sm text-muted-foreground">
                    <span>{cert.issuer}</span>
                    {cert.date && <span>{cert.date}</span>}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
