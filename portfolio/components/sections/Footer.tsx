"use client";

import { useTranslations } from "next-intl";
import { Github, Linkedin, Mail, Heart } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/kamio90",
    icon: Github,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/kamio90/",
    icon: Linkedin,
  },
  {
    name: "Email",
    url: "mailto:contact@kamilmusial.dev",
    icon: Mail,
  },
];

export default function Footer() {
  const t = useTranslations("footer");
  const basePath = process.env.NODE_ENV === "production" ? "/kamil-musial-engineering-studio" : "";
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border py-12">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo and Name */}
          <div className="flex items-center gap-3">
            <Image
              src={`${basePath}/logo.svg`}
              alt="Kamil Musiał Logo"
              width={32}
              height={32}
              className="w-8 h-8"
            />
            <span className="font-semibold gradient-text">
              Kamil Musiał Engineering Studio
            </span>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <Link
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg border border-border hover:border-primary hover:text-primary transition-colors"
                aria-label={link.name}
              >
                <link.icon className="w-5 h-5" />
              </Link>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-sm text-muted-foreground text-center md:text-right">
            <p>
              © {currentYear} Kamil Musiał. {t("rights")}.
            </p>
            <p className="flex items-center justify-center md:justify-end gap-1 mt-1">
              {t("builtWith")} <Heart className="w-4 h-4 text-red-500" /> {t("and")} Next.js
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
