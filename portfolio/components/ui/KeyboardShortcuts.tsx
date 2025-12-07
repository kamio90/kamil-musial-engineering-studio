"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Keyboard } from "lucide-react";
import { useTheme } from "@/components/providers/theme-provider";
import { useTranslations } from "next-intl";

const shortcuts = [
  { keys: ["?"], description: { pl: "Pokaż skróty", en: "Show shortcuts" } },
  { keys: ["g", "h"], description: { pl: "Idź do góry", en: "Go to top" } },
  { keys: ["g", "a"], description: { pl: "Idź do O mnie", en: "Go to About" } },
  { keys: ["g", "s"], description: { pl: "Idź do Umiejętności", en: "Go to Skills" } },
  { keys: ["g", "e"], description: { pl: "Idź do Doświadczenie", en: "Go to Experience" } },
  { keys: ["g", "p"], description: { pl: "Idź do Projekty", en: "Go to Projects" } },
  { keys: ["g", "c"], description: { pl: "Idź do Kontakt", en: "Go to Contact" } },
  { keys: ["t"], description: { pl: "Przełącz motyw", en: "Toggle theme" } },
  { keys: ["Esc"], description: { pl: "Zamknij modal", en: "Close modal" } },
];

export default function KeyboardShortcuts() {
  const [isOpen, setIsOpen] = useState(false);
  const [pendingKey, setPendingKey] = useState<string | null>(null);
  const { toggleTheme } = useTheme();
  const t = useTranslations();

  const locale = typeof window !== "undefined" ?
    (window.location.pathname.startsWith("/en") ? "en" : "pl") : "pl";

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      // Don't trigger shortcuts when typing in inputs
      if (
        e.target instanceof HTMLInputElement ||
        e.target instanceof HTMLTextAreaElement
      ) {
        return;
      }

      const key = e.key.toLowerCase();

      // Handle Escape
      if (key === "escape") {
        setIsOpen(false);
        setPendingKey(null);
        return;
      }

      // Handle ? to show shortcuts
      if (key === "?" || (e.shiftKey && key === "/")) {
        e.preventDefault();
        setIsOpen((prev) => !prev);
        return;
      }

      // Handle theme toggle
      if (key === "t" && !pendingKey) {
        e.preventDefault();
        toggleTheme();
        return;
      }

      // Handle "g" prefix for navigation
      if (key === "g" && !pendingKey) {
        e.preventDefault();
        setPendingKey("g");
        return;
      }

      // Handle second key after "g"
      if (pendingKey === "g") {
        e.preventDefault();
        setPendingKey(null);

        const sectionMap: Record<string, string> = {
          h: "#",
          a: "#about",
          s: "#skills",
          e: "#experience",
          p: "#projects",
          c: "#contact",
        };

        if (sectionMap[key]) {
          const target = document.querySelector(sectionMap[key]) || document.body;
          if (sectionMap[key] === "#") {
            window.scrollTo({ top: 0, behavior: "smooth" });
          } else {
            target.scrollIntoView({ behavior: "smooth" });
          }
        }
      }
    },
    [pendingKey, toggleTheme]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  // Clear pending key after timeout
  useEffect(() => {
    if (pendingKey) {
      const timer = setTimeout(() => setPendingKey(null), 1500);
      return () => clearTimeout(timer);
    }
  }, [pendingKey]);

  return (
    <>
      {/* Pending key indicator */}
      <AnimatePresence>
        {pendingKey && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-24 left-1/2 -translate-x-1/2 z-50 px-4 py-2 rounded-lg glass border border-border shadow-lg"
          >
            <span className="text-sm text-muted-foreground">
              {locale === "pl" ? "Naciśnięto: " : "Pressed: "}
              <kbd className="px-2 py-1 rounded bg-primary/20 text-primary font-mono text-xs ml-1">
                {pendingKey}
              </kbd>
            </span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Shortcuts modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="glass rounded-2xl border border-border shadow-2xl max-w-md w-full max-h-[80vh] overflow-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <Keyboard className="w-6 h-6 text-primary" />
                    <h2 className="text-xl font-bold">
                      {locale === "pl" ? "Skróty klawiszowe" : "Keyboard Shortcuts"}
                    </h2>
                  </div>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-2 rounded-lg hover:bg-muted/50 transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="space-y-3">
                  {shortcuts.map((shortcut, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between py-2 border-b border-border/50 last:border-0"
                    >
                      <span className="text-muted-foreground text-sm">
                        {shortcut.description[locale as "pl" | "en"]}
                      </span>
                      <div className="flex items-center gap-1">
                        {shortcut.keys.map((key, i) => (
                          <span key={i} className="flex items-center">
                            <kbd className="px-2 py-1 rounded bg-muted/50 text-foreground font-mono text-xs min-w-[28px] text-center">
                              {key}
                            </kbd>
                            {i < shortcut.keys.length - 1 && (
                              <span className="text-muted-foreground mx-1 text-xs">then</span>
                            )}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                <p className="mt-6 text-xs text-muted-foreground text-center">
                  {locale === "pl"
                    ? "Naciśnij ? aby pokazać/ukryć te skróty"
                    : "Press ? to show/hide these shortcuts"}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
