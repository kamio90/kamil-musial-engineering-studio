"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Code, Server, Users, Cloud } from "lucide-react";

const highlights = [
  { key: "fullStack", icon: Code },
  { key: "architecture", icon: Server },
  { key: "leadership", icon: Users },
  { key: "cloud", icon: Cloud },
];

export default function About() {
  const t = useTranslations("about");

  return (
    <section id="about" className="section">
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

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              {t("description")}
            </p>

            <div className="grid grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.key}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3 p-4 rounded-xl border border-border hover:border-primary transition-colors card-hover"
                >
                  <div className="p-2 rounded-lg bg-primary/10">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="font-medium text-sm">
                    {t(`highlights.${item.key}`)}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="glass rounded-2xl p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-accent/20 rounded-full blur-2xl" />

              <div className="relative space-y-4">
                <div className="flex items-center gap-2 text-sm font-mono text-primary">
                  <span className="w-3 h-3 rounded-full bg-red-500" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500" />
                  <span className="w-3 h-3 rounded-full bg-green-500" />
                  <span className="ml-2">profile.ts</span>
                </div>

                <pre className="text-sm font-mono text-muted-foreground overflow-x-auto">
                  <code>{`const engineer = {
  name: "Kamil Musiał",
  role: "Senior Software Engineer",
  experience: "9+ years",
  location: "Kraków, Poland",
  specialization: [
    "TypeScript",
    "React",
    "Node.js",
    "Cloud Architecture"
  ],
  passion: "Clean Code"
};`}</code>
                </pre>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
