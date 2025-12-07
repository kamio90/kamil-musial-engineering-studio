"use client";

import { useTranslations, useLocale } from "next-intl";
import { motion } from "framer-motion";
import { Layout, Server, Cloud, Database, Box, Settings } from "lucide-react";
import { skillCategories } from "@/lib/data/skills";

const iconMap = {
  layout: Layout,
  server: Server,
  cloud: Cloud,
  database: Database,
  box: Box,
  settings: Settings,
  code: Layout,
  terminal: Server,
};

export default function Skills() {
  const t = useTranslations("skills");
  const locale = useLocale() as "pl" | "en";

  return (
    <section id="skills" className="section bg-card/50">
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = iconMap[category.icon];
            return (
              <motion.div
                key={category.name.en}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass rounded-xl p-6 card-hover"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg">
                    {category.name[locale]}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary border border-primary/20 hover:border-primary transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
