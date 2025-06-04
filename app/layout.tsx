import ButtonToTop from "@/components/ButtonToTop";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
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
  title:
    "Majstor Milan Kitanović Beograd – Gips, Moleraj, Tapete, Dekorativne Tehnike",
  description:
    "Iskusan majstor iz Beograda za gips, moleraj, tapete i dekorativne tehnike. Precizan i pouzdan rad, bez kašnjenja. Zakažite besplatnu procenu!",
  icons: {
    icon: "/favicon-96x96.png",
    apple: "/apple-touch-icon.png",
  },
  keywords: [
    "majstor Beograd",
    "gipsarski radovi",
    "moleraj Beograd",
    "krečenje zidova",
    "lepljenje tapeta",
    "dekorativne tehnike",
    "spušteni plafoni",
    "travertino",
    "beton efekat",
    "stucco veneziano",
    "fototapete",
    "postavljanje laminata",
    "postavljanje pločica",
    "kuhinje po meri",
    "plakari po meri",
    "Milan Kitanović",
  ],
  alternates: {
    canonical: "https://www.majstormilan.rs/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased text-muted-foreground bg-muted text-lg md:text-2xl`}
      >
        <Header />
        {children}
        <ButtonToTop />
        <Footer />
      </body>
    </html>
  );
}
