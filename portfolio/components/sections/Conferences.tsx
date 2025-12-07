"use client";

import { useTranslations, useLocale } from "next-intl";
import { motion } from "framer-motion";
import { Calendar, MapPin, Trophy } from "lucide-react";
import { conferences } from "@/lib/data/conferences";

export default function Conferences() {
  const t = useTranslations("conferences");
  const locale = useLocale() as "pl" | "en";

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
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {conferences.map((conference, index) => {
              const isWinner = conference.role.en.toLowerCase().includes("winner");
              return (
                <motion.div
                  key={`${conference.name}-${conference.year}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`glass rounded-xl p-6 card-hover ${
                    isWinner ? "border-primary" : ""
                  }`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <h3 className="font-semibold text-lg">{conference.name}</h3>
                        {isWinner && (
                          <Trophy className="w-5 h-5 text-yellow-500" />
                        )}
                      </div>
                      <p className={`text-sm mt-1 ${isWinner ? "text-primary font-medium" : "text-muted-foreground"}`}>
                        {conference.role[locale]}
                      </p>
                      {conference.description && (
                        <p className="text-muted-foreground text-sm mt-3">
                          {conference.description[locale]}
                        </p>
                      )}
                    </div>

                    <div className="flex flex-col items-end gap-2 text-sm text-muted-foreground">
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
