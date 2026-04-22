import "../globals.css";
import { getDictionary } from "@/lib/get-dictionary";
import { Footer, Header } from "@/components";
import ScrollToTopOnNavigation from "@/components/ScrollToTopOnNavigation";

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
          href="https://fonts.googleapis.com/css2?family=Google+Sans:ital,opsz,wght@0,17..18,400..700;1,17..18,400..700&display=swap"
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
