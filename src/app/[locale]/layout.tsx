import "../globals.css";
import { getDictionary } from "@/lib/get-dictionary";
import { Footer, Header } from "@/components";
import ScrollToTopOnNavigation from "@/components/ScrollToTopOnNavigation";
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isDE = locale === "de";
  return {
    title: isDE
      ? "F&B Heroes – Strategieberatung für Gastronomie & Robotic Gastronomy"
      : "F&B Heroes – Strategy Consulting for Gastronomy & Robotic Gastronomy",
    description: isDE
      ? "F&B Heroes unterstützt Gastronomiebetriebe mit strategischer Beratung, Netzwerk und innovativen Robotic-Gastronomy-Lösungen für nachhaltigen Markterfolg."
      : "F&B Heroes supports food & beverage businesses with strategic consulting, network access, and innovative robotic gastronomy solutions for lasting market success.",
  };
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale as "en" | "de");

  return (
    <html lang={locale}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Google+Sans:ital,opsz,wght@0,17..18,400..700;1,17..18,400..700&display=optional"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased" suppressHydrationWarning>
        <ScrollToTopOnNavigation />
        <Header dict={dict.navigation} lang={locale} />
        <main>{children}</main>
        <Footer dict={dict} lang={locale} />
      </body>
    </html>
  );
}
