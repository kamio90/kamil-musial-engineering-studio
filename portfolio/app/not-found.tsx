"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Home, ArrowLeft, Search } from "lucide-react";

export default function NotFound() {
  return (
    <html lang="en">
      <body className="bg-background text-foreground min-h-screen flex items-center justify-center p-4">
        <div className="text-center max-w-lg">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <span className="text-8xl md:text-9xl font-bold gradient-text">404</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-2xl md:text-3xl font-bold mb-4"
          >
            Page Not Found
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-muted-foreground mb-8"
          >
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              href="/pl"
              className="flex items-center gap-2 btn-primary px-6 py-3 rounded-lg font-medium"
            >
              <Home className="w-5 h-5" />
              Go Home
            </Link>
            <button
              onClick={() => window.history.back()}
              className="flex items-center gap-2 px-6 py-3 rounded-lg font-medium border-2 border-primary text-primary hover:bg-primary hover:text-white transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              Go Back
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-12 text-sm text-muted-foreground"
          >
            <p className="flex items-center justify-center gap-2">
              <Search className="w-4 h-4" />
              Looking for something specific? Try the navigation menu.
            </p>
          </motion.div>
        </div>

        <style jsx global>{`
          :root {
            --background: 0 0% 100%;
            --foreground: 0 0% 3.9%;
            --muted-foreground: 0 0% 45%;
            --primary: 239 84% 67%;
          }

          @media (prefers-color-scheme: dark) {
            :root {
              --background: 0 0% 3.9%;
              --foreground: 0 0% 98%;
              --muted-foreground: 0 0% 63.9%;
            }
          }

          .bg-background {
            background-color: hsl(var(--background));
          }

          .text-foreground {
            color: hsl(var(--foreground));
          }

          .text-muted-foreground {
            color: hsl(var(--muted-foreground));
          }

          .gradient-text {
            background: linear-gradient(135deg, hsl(var(--primary)), hsl(280 84% 67%));
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
          }

          .btn-primary {
            background: linear-gradient(135deg, hsl(var(--primary)), hsl(280 84% 67%));
            color: white;
          }

          .border-primary {
            border-color: hsl(var(--primary));
          }

          .text-primary {
            color: hsl(var(--primary));
          }

          .hover\\:bg-primary:hover {
            background-color: hsl(var(--primary));
          }

          .hover\\:text-white:hover {
            color: white;
          }
        `}</style>
      </body>
    </html>
  );
}
