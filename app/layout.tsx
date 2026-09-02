import type { Metadata } from "next";
import { Amiri, Aref_Ruqaa, Berkshire_Swash, Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";

const description =
  "Tekirdağ İhya Derneği; eğitim, sohbet, medrese ve sosyal faaliyetlerle Süleymanpaşa’da ilim, irfan ve gönüllülük çalışmalarını sürdürmektedir.";
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

const cormorant = Cormorant_Garamond({
  variable: "--font-heading",
  subsets: ["latin", "latin-ext"],
  display: "swap",
  weight: ["500", "600", "700"],
});

const manrope = Manrope({
  variable: "--font-body",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

const amiri = Amiri({
  variable: "--font-arabic",
  subsets: ["arabic"],
  display: "swap",
  weight: ["400", "700"],
});

const arefRuqaa = Aref_Ruqaa({
  variable: "--font-arabic-display",
  subsets: ["arabic", "latin"],
  display: "swap",
  weight: ["700"],
});

const berkshireSwash = Berkshire_Swash({
  variable: "--font-calligraphy",
  subsets: ["latin", "latin-ext"],
  display: "swap",
  weight: "400",
});

export const metadata: Metadata = {
  title: "Tekirdağ İhya Derneği",
  description,
  metadataBase: siteUrl ? new URL(siteUrl) : undefined,
  openGraph: {
    type: "website",
    locale: "tr_TR",
    siteName: "Tekirdağ İhya Derneği",
    title: "Tekirdağ İhya Derneği",
    description,
  },
  twitter: {
    card: "summary",
    title: "Tekirdağ İhya Derneği",
    description,
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="tr">
      <body className={`${cormorant.variable} ${manrope.variable} ${amiri.variable} ${arefRuqaa.variable} ${berkshireSwash.variable}`}>{children}</body>
    </html>
  );
}
