"use client";

import { useTranslations, useLocale } from "next-intl";
import { motion } from "framer-motion";
import { Mail, MapPin, Clock, Github, Linkedin, Send } from "lucide-react";
import Link from "next/link";
import CopyButton from "@/components/ui/CopyButton";

const socialLinks = [
  { name: "GitHub", url: "https://github.com/kamio90", icon: Github },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/kamio90/", icon: Linkedin },
];

export default function Contact() {
  const t = useTranslations("contact");
  const locale = useLocale() as "pl" | "en";

  const contactInfo = [
    {
      icon: Mail,
      label: t("email"),
      value: "kmusial40@gmail.com",
      href: "mailto:kmusial40@gmail.com",
    },
    {
      icon: MapPin,
      label: t("location"),
      value: locale === "pl" ? "Warszawa, Polska" : "Warsaw, Poland",
    },
    {
      icon: Clock,
      label: t("availability"),
      value: t("availableText"),
    },
  ];

  return (
    <section id="contact" className="section bg-card/50">
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
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <p className="text-muted-foreground mb-8">{t("description")}</p>

              <div className="space-y-6">
                {contactInfo.map((item) => (
                  <div key={item.label} className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-primary/10">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{item.label}</p>
                      {item.href ? (
                        <div className="flex items-center gap-2">
                          <Link
                            href={item.href}
                            className="font-medium hover:text-primary transition-colors"
                          >
                            {item.value}
                          </Link>
                          {item.href.startsWith("mailto:") && (
                            <CopyButton text={item.value} />
                          )}
                        </div>
                      ) : (
                        <p className="font-medium">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div className="mt-8">
                <p className="text-sm text-muted-foreground mb-4">{t("social")}</p>
                <div className="flex items-center gap-3">
                  {socialLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-xl border border-border hover:border-primary hover:text-primary transition-colors"
                      aria-label={link.name}
                    >
                      <link.icon className="w-5 h-5" />
                    </Link>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <form className="glass rounded-xl p-6 space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-2"
                  >
                    {t("form.name")}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:outline-none transition-colors"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-2"
                  >
                    {t("form.email")}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:outline-none transition-colors"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-2"
                  >
                    {t("form.message")}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:outline-none transition-colors resize-none"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full btn-primary py-3 rounded-lg font-medium flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  {t("form.send")}
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
