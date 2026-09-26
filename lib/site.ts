import type { Metadata } from "next";

// Canonical production origin. The apex domain (tekirdagihya.org) 308-redirects
// here, so canonical/og:url/sitemap URLs must use the www host directly —
// pointing them at a redirecting URL is what search engines penalise.
export const SITE_URL = "https://www.tekirdagihya.org";
export const SITE_NAME = "Tekirdağ İhya Derneği";
export const SITE_DESCRIPTION =
  "Tekirdağ İhya Derneği; eğitim, sohbet, medrese ve sosyal faaliyetlerle Süleymanpaşa’da ilim, irfan ve gönüllülük çalışmalarını sürdürmektedir.";

// Page-level `openGraph` replaces the layout's object instead of merging with
// it (nested routes then also lose app/opengraph-image.jpg), so every page
// spreads this base and only adds its own url/title.
export const baseOpenGraph = {
  type: "website",
  locale: "tr_TR",
  siteName: SITE_NAME,
  images: [{ url: "/opengraph-image.jpg", width: 1200, height: 630, alt: "Tekirdağ İhya Derneği merkezinin logolu ön cephesi" }],
} satisfies Metadata["openGraph"];
