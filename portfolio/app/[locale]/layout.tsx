import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { ThemeProvider } from "@/components/providers/theme-provider";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import ScrollProgress from "@/components/ui/ScrollProgress";
import KeyboardShortcuts from "@/components/ui/KeyboardShortcuts";
import JsonLd from "@/components/seo/JsonLd";
import { fontVariables } from "../layout";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as "pl" | "en")) {
    notFound();
  }

  // Enable static rendering
  setRequestLocale(locale);

  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning className={fontVariables}>
      <head>
        <JsonLd />
      </head>
      <body className="antialiased min-h-screen flex flex-col">
        <ThemeProvider>
          <NextIntlClientProvider messages={messages}>
            <ScrollProgress />
            <KeyboardShortcuts />
            <a href="#main-content" className="skip-to-content">
              Skip to content
            </a>
            <Header />
            <main id="main-content" className="flex-grow">
              {children}
            </main>
            <Footer />
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
