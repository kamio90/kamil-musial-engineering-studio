"use client";

import { useTranslations, useLocale } from "next-intl";
import { motion } from "framer-motion";
import { Trophy, Star, Zap, Target, TrendingUp, Award } from "lucide-react";
import { achievements } from "@/lib/data/achievements";

const iconMap = {
  trophy: Trophy,
  star: Star,
  zap: Zap,
  target: Target,
  "trending-up": TrendingUp,
  award: Award,
};

export default function Achievements() {
  const t = useTranslations("achievements");
  const locale = useLocale() as "pl" | "en";

  return (
    <section id="achievements" className="section">
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
          {achievements.map((achievement, index) => {
            const Icon = iconMap[achievement.icon];
            return (
              <motion.div
                key={achievement.title.en}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass rounded-xl p-6 card-hover group"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    {achievement.metric && (
                      <span className="text-3xl font-bold gradient-text">
                        {achievement.metric}
                      </span>
                    )}
                    <h3 className="font-semibold text-lg mt-1 group-hover:text-primary transition-colors">
                      {achievement.title[locale]}
                    </h3>
                    <p className="text-muted-foreground text-sm mt-2">
                      {achievement.description[locale]}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
