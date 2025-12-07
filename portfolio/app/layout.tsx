import type { Metadata, Viewport } from "next";
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

const siteUrl = process.env.NODE_ENV === "production"
  ? "https://kamio90.github.io/kamil-musial-engineering-studio"
  : "http://localhost:3000";

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Kamil Musiał | Senior Software Engineer & System Designer",
    template: "%s | Kamil Musiał",
  },
  description:
    "Senior Software Engineer with 9+ years of experience building scalable applications. Expertise in TypeScript, React, Node.js, and cloud architecture. Winner of HackYeah 2023.",
  keywords: [
    "Kamil Musiał",
    "Senior Software Engineer",
    "Full Stack Developer",
    "System Designer",
    "TypeScript",
    "React",
    "Node.js",
    "AWS",
    "Cloud Architecture",
    "Warsaw",
    "Poland",
    "Software Architect",
    "Tech Lead",
    "HackYeah Winner",
  ],
  authors: [{ name: "Kamil Musiał", url: siteUrl }],
  creator: "Kamil Musiał",
  publisher: "Kamil Musiał Engineering Studio",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    siteName: "Kamil Musiał Engineering Studio",
    title: "Kamil Musiał | Senior Software Engineer & System Designer",
    description:
      "Senior Software Engineer with 9+ years of experience. Architecting systems from 0 to millions of users. Winner of HackYeah 2023.",
    url: siteUrl,
    locale: "pl_PL",
    alternateLocale: "en_US",
    images: [
      {
        url: `${siteUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Kamil Musiał - Senior Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kamil Musiał | Senior Software Engineer",
    description: "Senior Software Engineer with 9+ years of experience building scalable applications.",
    images: [`${siteUrl}/og-image.png`],
  },
  alternates: {
    canonical: siteUrl,
    languages: {
      "pl-PL": `${siteUrl}/pl`,
      "en-US": `${siteUrl}/en`,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.png", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}

export const fontVariables = `${geistSans.variable} ${geistMono.variable}`;
