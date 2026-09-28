// Central place for links that are referenced from more than one component,
// so there is exactly one place to update when an address changes.

export const DONATE_PATH = "/bagis-yap";

// Every navigable section has its own crawlable URL. The homepage still shows
// the sections one after another, but links always point here — never at
// "/#section" fragments, which search engines don't treat as separate pages.
export const ROUTES = {
  home: "/",
  about: "/hakkimizda",
  activities: "/faaliyetler",
  education: "/egitimler",
  centers: "/merkezlerimiz",
  events: "/etkinlikler",
  contact: "/iletisim",
  membership: "/uyelik",
  donate: DONATE_PATH,
} as const;

// Old "/#id" links (bookmarks, shared URLs) → the section's real route.
// Fragments never reach the server, so this mapping is applied in the browser.
export const LEGACY_HASH_ROUTES: Record<string, string> = {
  hakkimizda: ROUTES.about,
  faaliyetler: ROUTES.activities,
  egitimler: ROUTES.education,
  medreseler: ROUTES.centers,
  merkezlerimiz: ROUTES.centers,
  etkinlikler: ROUTES.events,
  iletisim: ROUTES.contact,
  uyelik: ROUTES.membership,
  destek: ROUTES.donate,
};

// İhya Mobil — Google Play'de yayında.
export const GOOGLE_PLAY_URL = "https://play.google.com/store/apps/details?id=com.tekirdagihya.app";
