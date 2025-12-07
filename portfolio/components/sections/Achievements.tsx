"use client";

import { useLocale } from "next-intl";
import { motion } from "framer-motion";
import { Trophy, Star, Zap, Target, TrendingUp, Award, Rocket, Users, Code, Shield } from "lucide-react";
import { achievements } from "@/lib/data/achievements";

const iconMap = {
  trophy: Trophy,
  star: Star,
  zap: Zap,
  target: Target,
  "trending-up": TrendingUp,
  award: Award,
  rocket: Rocket,
  users: Users,
  code: Code,
  shield: Shield,
};

export default function Achievements() {
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
            <span className="gradient-text">
              {locale === "pl" ? "Osiągnięcia" : "Achievements"}
            </span>
          </h2>
          <p className="text-muted-foreground">
            {locale === "pl" ? "Kluczowe sukcesy i wyniki" : "Key accomplishments and results"}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {achievements.map((achievement, index) => {
            const Icon = iconMap[achievement.icon];
            return (
              <motion.div
                key={achievement.title.en}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="glass rounded-xl p-5 card-hover group flex flex-col"
              >
                <div className="flex items-start gap-3 flex-1">
                  <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors shrink-0">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="text-2xl font-bold gradient-text block h-8">
                      {achievement.metric || ""}
                    </span>
                    <h3 className="font-semibold text-sm group-hover:text-primary transition-colors line-clamp-2">
                      {achievement.title[locale]}
                    </h3>
                    <p className="text-muted-foreground text-xs mt-2">
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
