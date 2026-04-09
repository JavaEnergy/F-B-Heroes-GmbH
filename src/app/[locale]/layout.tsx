import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import { getDictionary } from "@/lib/get-dictionary";
import { Footer, Header } from "@/components";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

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
    <html
      lang={locale}
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="antialiased">
        <Header dict={dict.navigation} lang={locale} />
        <main>{children}</main>
        <Footer dict={dict} lang={locale} />
      </body>
    </html>
  );
}
