"use client";

import { useTranslations, useLocale } from "next-intl";
import { motion } from "framer-motion";
import { Calendar, MapPin, Trophy, ExternalLink, Code2, Users, Medal } from "lucide-react";
import { useState } from "react";
import { conferences, ConferenceType, conferenceStats } from "@/lib/data/conferences";
import Link from "next/link";

type TabKey = "all" | "hackathon" | "conference";

const tabs: { key: TabKey; icon: React.ElementType }[] = [
  { key: "all", icon: Users },
  { key: "hackathon", icon: Code2 },
  { key: "conference", icon: Users },
];

const getMedalColor = (result: string) => {
  if (result.includes("1st")) return "text-yellow-500";
  if (result.includes("2nd")) return "text-gray-400";
  if (result.includes("3rd")) return "text-amber-600";
  if (result.includes("Distinction")) return "text-blue-500";
  return "text-muted-foreground";
};

const getMedalIcon = (result: string) => {
  if (result.match(/1st|2nd|3rd/)) return Trophy;
  if (result.includes("Distinction")) return Medal;
  return null;
};

export default function Conferences() {
  const t = useTranslations("conferences");
  const locale = useLocale() as "pl" | "en";
  const [activeTab, setActiveTab] = useState<TabKey>("all");

  const filteredConferences =
    activeTab === "all"
      ? conferences
      : conferences.filter((c) => c.type === activeTab);

  const tabLabels = {
    all: { pl: "Wszystkie", en: "All" },
    hackathon: { pl: "Hackathony", en: "Hackathons" },
    conference: { pl: "Konferencje", en: "Conferences" },
  };

  return (
    <section id="conferences" className="section">
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

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-6 mt-6">
            <div className="text-center">
              <span className="text-2xl font-bold text-primary">{conferenceStats.total}</span>
              <p className="text-sm text-muted-foreground">
                {locale === "pl" ? "Wydarzenia" : "Events"}
              </p>
            </div>
            <div className="text-center">
              <span className="text-2xl font-bold text-yellow-500">{conferenceStats.wins}</span>
              <p className="text-sm text-muted-foreground">
                {locale === "pl" ? "Zwycięstwa" : "Wins"}
              </p>
            </div>
            <div className="text-center">
              <span className="text-2xl font-bold text-primary">{conferenceStats.podiums}</span>
              <p className="text-sm text-muted-foreground">
                {locale === "pl" ? "Na podium" : "Podiums"}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="flex justify-center gap-2 mb-8"
        >
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                activeTab === tab.key
                  ? "btn-primary"
                  : "border border-border hover:border-primary text-muted-foreground hover:text-primary"
              }`}
            >
              <tab.icon className="w-4 h-4" />
              {tabLabels[tab.key][locale]}
            </button>
          ))}
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {filteredConferences.map((conference, index) => {
              const isWinner = conference.result?.en.match(/1st|2nd|3rd|Distinction/);
              const MedalIconComponent = conference.result
                ? getMedalIcon(conference.result.en)
                : null;

              return (
                <motion.div
                  key={`${conference.name}-${conference.year}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className={`glass rounded-xl p-6 card-hover ${
                    isWinner ? "border-l-4 border-l-primary" : ""
                  }`}
                >
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span
                          className={`px-2 py-0.5 text-xs rounded-full ${
                            conference.type === "hackathon"
                              ? "bg-primary/20 text-primary"
                              : "bg-muted/30 text-muted-foreground"
                          }`}
                        >
                          {conference.type === "hackathon"
                            ? "Hackathon"
                            : locale === "pl"
                            ? "Konferencja"
                            : "Conference"}
                        </span>
                        <h3 className="font-semibold text-lg">{conference.name}</h3>
                        {MedalIconComponent && (
                          <MedalIconComponent
                            className={`w-5 h-5 ${getMedalColor(conference.result!.en)}`}
                          />
                        )}
                        {conference.link && (
                          <Link
                            href={conference.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-primary transition-colors"
                          >
                            <ExternalLink className="w-4 h-4" />
                          </Link>
                        )}
                      </div>

                      <p
                        className={`text-sm mt-1 ${
                          isWinner ? "text-primary font-medium" : "text-muted-foreground"
                        }`}
                      >
                        {conference.role[locale]}
                      </p>

                      {conference.result && (
                        <p
                          className={`text-sm mt-1 font-medium ${getMedalColor(
                            conference.result.en
                          )}`}
                        >
                          {conference.result[locale]}
                        </p>
                      )}

                      {conference.description && (
                        <p className="text-muted-foreground text-sm mt-3">
                          {conference.description[locale]}
                        </p>
                      )}

                      {conference.project && (
                        <p className="text-sm mt-2">
                          <span className="text-muted-foreground">
                            {locale === "pl" ? "Projekt: " : "Project: "}
                          </span>
                          <span className="text-primary font-medium">{conference.project}</span>
                        </p>
                      )}
                    </div>

                    <div className="flex flex-row md:flex-col items-start md:items-end gap-2 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {conference.year}
                      </span>
                      {conference.location && (
                        <span className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {conference.location}
                        </span>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
