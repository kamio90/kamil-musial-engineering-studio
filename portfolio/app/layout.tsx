import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kamil Musiał | Senior Software Engineer",
  description:
    "Portfolio Kamila Musiała - Senior Software Engineer z 9+ letnim doświadczeniem w TypeScript, React, Node.js i architekturze chmurowej",
  keywords: [
    "Software Engineer",
    "Full Stack Developer",
    "TypeScript",
    "React",
    "Node.js",
    "AWS",
    "Kraków",
    "Poland",
  ],
  authors: [{ name: "Kamil Musiał" }],
  openGraph: {
    title: "Kamil Musiał | Senior Software Engineer",
    description:
      "Senior Software Engineer z 9+ letnim doświadczeniem w budowaniu skalowalnych aplikacji webowych",
    type: "website",
    locale: "pl_PL",
    alternateLocale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}

export const fontVariables = `${geistSans.variable} ${geistMono.variable}`;
