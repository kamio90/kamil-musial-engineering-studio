"use client";

import { useTranslations, useLocale } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, Search, X, ChevronDown, Filter } from "lucide-react";
import { useState, useMemo, useRef, useEffect } from "react";
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

// Extract unique years and tech from projects
const allYears = [...new Set(projects.map((p) => p.year))].sort((a, b) => b - a);
const allTech = [...new Set(projects.flatMap((p) => p.techStack))].sort();

export default function Projects() {
  const t = useTranslations("projects");
  const locale = useLocale() as "pl" | "en";

  // Filter states
  const [activeCategory, setActiveCategory] = useState<ProjectCategory | "all">("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedYear, setSelectedYear] = useState<number | "all">("all");
  const [selectedTech, setSelectedTech] = useState<string | "all">("all");
  const [showAll, setShowAll] = useState(false);

  // Dropdown states
  const [isYearDropdownOpen, setIsYearDropdownOpen] = useState(false);
  const [isTechDropdownOpen, setIsTechDropdownOpen] = useState(false);

  const yearDropdownRef = useRef<HTMLDivElement>(null);
  const techDropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdowns when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (yearDropdownRef.current && !yearDropdownRef.current.contains(event.target as Node)) {
        setIsYearDropdownOpen(false);
      }
      if (techDropdownRef.current && !techDropdownRef.current.contains(event.target as Node)) {
        setIsTechDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Filter projects
  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      // Category filter
      if (activeCategory !== "all" && project.category !== activeCategory) {
        return false;
      }

      // Year filter
      if (selectedYear !== "all" && project.year !== selectedYear) {
        return false;
      }

      // Tech filter
      if (selectedTech !== "all" && !project.techStack.includes(selectedTech)) {
        return false;
      }

      // Search filter
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const titleMatch = project.title.toLowerCase().includes(query);
        const descMatch = project.description[locale].toLowerCase().includes(query);
        const techMatch = project.techStack.some((tech) =>
          tech.toLowerCase().includes(query)
        );
        if (!titleMatch && !descMatch && !techMatch) {
          return false;
        }
      }

      return true;
    });
  }, [activeCategory, selectedYear, selectedTech, searchQuery, locale]);

  const displayedProjects = showAll ? filteredProjects : filteredProjects.slice(0, 6);

  const hasActiveFilters =
    activeCategory !== "all" ||
    selectedYear !== "all" ||
    selectedTech !== "all" ||
    searchQuery.trim() !== "";

  const clearFilters = () => {
    setActiveCategory("all");
    setSelectedYear("all");
    setSelectedTech("all");
    setSearchQuery("");
    setShowAll(false);
  };

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

        {/* Search & Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="mb-8 space-y-4"
        >
          {/* Search Input */}
          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="text"
              placeholder={t("filters.search")}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-10 py-3 rounded-xl bg-background border border-border focus:border-primary focus:outline-none transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-primary transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            )}
          </div>

          {/* Filter Row */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            {/* Year Dropdown */}
            <div className="relative" ref={yearDropdownRef}>
              <button
                onClick={() => {
                  setIsYearDropdownOpen(!isYearDropdownOpen);
                  setIsTechDropdownOpen(false);
                }}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all border ${
                  selectedYear !== "all"
                    ? "border-primary bg-primary/10 text-primary"
                    : "border-border hover:border-primary text-muted-foreground hover:text-primary"
                }`}
              >
                <span>{selectedYear === "all" ? t("filters.year") : selectedYear}</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${isYearDropdownOpen ? "rotate-180" : ""}`} />
              </button>

              <AnimatePresence>
                {isYearDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute z-50 mt-2 w-40 py-2 rounded-xl glass border border-border shadow-xl max-h-60 overflow-y-auto"
                  >
                    <button
                      onClick={() => {
                        setSelectedYear("all");
                        setIsYearDropdownOpen(false);
                      }}
                      className={`w-full px-4 py-2 text-left text-sm hover:bg-primary/10 transition-colors ${
                        selectedYear === "all" ? "text-primary font-medium" : "text-muted-foreground"
                      }`}
                    >
                      {t("filters.allYears")}
                    </button>
                    {allYears.map((year) => (
                      <button
                        key={year}
                        onClick={() => {
                          setSelectedYear(year);
                          setIsYearDropdownOpen(false);
                        }}
                        className={`w-full px-4 py-2 text-left text-sm hover:bg-primary/10 transition-colors ${
                          selectedYear === year ? "text-primary font-medium" : "text-muted-foreground"
                        }`}
                      >
                        {year}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Tech Dropdown */}
            <div className="relative" ref={techDropdownRef}>
              <button
                onClick={() => {
                  setIsTechDropdownOpen(!isTechDropdownOpen);
                  setIsYearDropdownOpen(false);
                }}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all border ${
                  selectedTech !== "all"
                    ? "border-primary bg-primary/10 text-primary"
                    : "border-border hover:border-primary text-muted-foreground hover:text-primary"
                }`}
              >
                <span>{selectedTech === "all" ? t("filters.tech") : selectedTech}</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${isTechDropdownOpen ? "rotate-180" : ""}`} />
              </button>

              <AnimatePresence>
                {isTechDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute z-50 mt-2 w-48 py-2 rounded-xl glass border border-border shadow-xl max-h-60 overflow-y-auto"
                  >
                    <button
                      onClick={() => {
                        setSelectedTech("all");
                        setIsTechDropdownOpen(false);
                      }}
                      className={`w-full px-4 py-2 text-left text-sm hover:bg-primary/10 transition-colors ${
                        selectedTech === "all" ? "text-primary font-medium" : "text-muted-foreground"
                      }`}
                    >
                      {t("filters.allTech")}
                    </button>
                    {allTech.map((tech) => (
                      <button
                        key={tech}
                        onClick={() => {
                          setSelectedTech(tech);
                          setIsTechDropdownOpen(false);
                        }}
                        className={`w-full px-4 py-2 text-left text-sm hover:bg-primary/10 transition-colors ${
                          selectedTech === tech ? "text-primary font-medium" : "text-muted-foreground"
                        }`}
                      >
                        {tech}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Clear Filters */}
            {hasActiveFilters && (
              <motion.button
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                onClick={clearFilters}
                className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-red-500 hover:bg-red-500/10 transition-colors"
              >
                <X className="w-4 h-4" />
                {t("filters.clearFilters")}
              </motion.button>
            )}
          </div>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2 mb-6"
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

        {/* Results Count */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center text-sm text-muted-foreground mb-6"
        >
          <span className="font-medium text-primary">{filteredProjects.length}</span>{" "}
          {t("filters.results")}
        </motion.div>

        {/* Projects Grid */}
        {filteredProjects.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="wait">
              {displayedProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="glass rounded-xl overflow-hidden card-hover group"
                >
                  <div className="p-6">
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <div className="flex items-center gap-2 shrink-0">
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

                    <span className="inline-block px-2 py-0.5 text-xs rounded-md bg-muted/30 text-muted-foreground mb-3">
                      {project.year}
                    </span>

                    <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                      {project.description[locale]}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.techStack.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          onClick={() => setSelectedTech(tech)}
                          className="px-2 py-1 text-xs rounded-md bg-primary/10 text-primary cursor-pointer hover:bg-primary/20 transition-colors"
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
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-12"
          >
            <Filter className="w-12 h-12 mx-auto text-muted-foreground/50 mb-4" />
            <p className="text-muted-foreground">{t("filters.noResults")}</p>
            <button
              onClick={clearFilters}
              className="mt-4 text-primary hover:underline"
            >
              {t("filters.clearFilters")}
            </button>
          </motion.div>
        )}

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
              {showAll ? t("filters.showLess") : `${t("filters.showMore")} (${filteredProjects.length})`}
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
}
