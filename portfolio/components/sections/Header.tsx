"use client";

import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon, Download } from "lucide-react";
import { useTheme } from "@/components/providers/theme-provider";
import Link from "next/link";
import Image from "next/image";

const navItems = [
  { key: "about", href: "#about" },
  { key: "skills", href: "#skills" },
  { key: "experience", href: "#experience" },
  { key: "projects", href: "#projects" },
  { key: "education", href: "#education" },
  { key: "contact", href: "#contact" },
];

export default function Header() {
  const t = useTranslations("nav");
  const { theme, toggleTheme, mounted } = useTheme();
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const currentLocale = pathname.startsWith("/en") ? "en" : "pl";
  const switchLocale = currentLocale === "pl" ? "en" : "pl";
  const basePath = process.env.NODE_ENV === "production" ? "/kamil-musial-engineering-studio" : "";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass py-3" : "py-5"
      }`}
    >
      <nav className="container-custom flex items-center justify-between">
        <Link href={`/${currentLocale}`} className="flex items-center gap-3">
          <Image
            src={`${basePath}/logo.svg`}
            alt="Kamil Musiał Logo"
            width={40}
            height={40}
            className="w-10 h-10"
          />
          <span className="font-semibold text-lg hidden sm:block gradient-text">
            Kamil Musiał
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.key}
              href={item.href}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              {t(item.key)}
            </Link>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <Link
            href={`/${switchLocale}`}
            className="px-3 py-1.5 text-sm font-medium border border-border rounded-lg hover:border-primary transition-colors"
          >
            {t("language")}
          </Link>

          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg border border-border hover:border-primary transition-colors"
            aria-label="Toggle theme"
          >
            {mounted && theme === "dark" ? (
              <Sun className="w-5 h-5" />
            ) : (
              <Moon className="w-5 h-5" />
            )}
          </button>

          <Link
            href={`${basePath}/cv.pdf`}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-2 btn-primary px-4 py-2 rounded-lg text-sm font-medium"
          >
            <Download className="w-4 h-4" />
            {t("downloadCV")}
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg border border-border hover:border-primary transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden glass mt-2 mx-4 rounded-xl overflow-hidden"
          >
            <div className="p-4 flex flex-col gap-3">
              {navItems.map((item) => (
                <Link
                  key={item.key}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors py-2"
                >
                  {t(item.key)}
                </Link>
              ))}
              <Link
                href={`${basePath}/cv.pdf`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 btn-primary px-4 py-2 rounded-lg text-sm font-medium mt-2"
              >
                <Download className="w-4 h-4" />
                {t("downloadCV")}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
