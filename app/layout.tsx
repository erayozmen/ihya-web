import type { Metadata } from "next";
import { Berkshire_Swash, Cormorant_Garamond, Manrope } from "next/font/google";
import { FloatingWhatsApp } from "@/components/layout/floating-whatsapp";
import { Footer } from "@/components/layout/footer";
import { SiteHeader } from "@/components/layout/site-header";
import { InquiryModalProvider } from "@/components/ui/inquiry-modal";
import { SITE_DESCRIPTION, SITE_NAME, SITE_URL, baseOpenGraph } from "@/lib/site";
import "./globals.css";

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

const berkshireSwash = Berkshire_Swash({
  variable: "--font-calligraphy",
  subsets: ["latin", "latin-ext"],
  display: "swap",
  weight: "400",
});

export const metadata: Metadata = {
  title: SITE_NAME,
  description: SITE_DESCRIPTION,
  metadataBase: new URL(SITE_URL),
  openGraph: {
    ...baseOpenGraph,
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="tr">
      <body className={`${cormorant.variable} ${manrope.variable} ${berkshireSwash.variable}`}>
        <InquiryModalProvider>
          <a href="#main-content" className="skip-link">
            İçeriğe geç
          </a>
          <SiteHeader />
          {children}
          <Footer />
          <FloatingWhatsApp />
        </InquiryModalProvider>
      </body>
    </html>
  );
}
