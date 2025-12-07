"use client";

import { useTranslations, useLocale } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { useState } from "react";
import { projects, ProjectCategory } from "@/lib/data/projects";
import Link from "next/link";

const categories: { key: ProjectCategory | "all"; labelKey: string }[] = [
  { key: "all", labelKey: "all" },
  { key: "commercial", labelKey: "commercial" },
  { key: "competition", labelKey: "competition" },
  { key: "university", labelKey: "university" },
  { key: "private", labelKey: "private" },
  { key: "company", labelKey: "company" },
];

export default function Projects() {
  const t = useTranslations("projects");
  const locale = useLocale() as "pl" | "en";
  const [activeCategory, setActiveCategory] = useState<ProjectCategory | "all">("all");
  const [showAll, setShowAll] = useState(false);

  const filteredProjects = activeCategory === "all"
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  const displayedProjects = showAll ? filteredProjects : filteredProjects.slice(0, 6);

  return (
    <section id="projects" className="section bg-card/50">
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

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => {
                setActiveCategory(cat.key);
                setShowAll(false);
              }}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                activeCategory === cat.key
                  ? "btn-primary"
                  : "border border-border hover:border-primary text-muted-foreground hover:text-primary"
              }`}
            >
              {t(`categories.${cat.labelKey}`)}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="wait">
            {displayedProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="glass rounded-xl overflow-hidden card-hover group"
              >
                <div className="p-6">
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <div className="flex items-center gap-2">
                      {project.github && (
                        <Link
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-primary transition-colors"
                          aria-label="View code"
                        >
                          <Github className="w-5 h-5" />
                        </Link>
                      )}
                      {project.link && (
                        <Link
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-primary transition-colors"
                          aria-label="View project"
                        >
                          <ExternalLink className="w-5 h-5" />
                        </Link>
                      )}
                    </div>
                  </div>

                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                    {project.description[locale]}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.techStack.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs rounded-md bg-primary/10 text-primary"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 4 && (
                      <span className="px-2 py-1 text-xs rounded-md bg-muted/20 text-muted-foreground">
                        +{project.techStack.length - 4}
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Show More Button */}
        {filteredProjects.length > 6 && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mt-10"
          >
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-6 py-3 rounded-lg font-medium border-2 border-primary text-primary hover:bg-primary hover:text-white transition-colors"
            >
              {showAll ? "Show Less" : `Show All (${filteredProjects.length})`}
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
}
