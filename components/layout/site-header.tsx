"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { FacebookIcon, GooglePlayIcon, InstagramIcon } from "@/components/ui/social-icons";
import { useInquiryModal } from "@/components/ui/inquiry-modal";
import { socialLinks } from "@/lib/home-data";
import { DONATE_PATH, GOOGLE_PLAY_URL } from "@/lib/routes";

const instagram = socialLinks.find((social) => social.platform === "Instagram");
const facebook = socialLinks.find((social) => social.platform === "Facebook");

// Must match the min-width at which .hero__nav takes over in globals.css.
const DESKTOP_NAV_QUERY = "(min-width: 1200px)";

function NavSocialIcons({ className }: { className: string }) {
  return (
    <div className={className}>
      {instagram?.href && (
        <a href={instagram.href} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <InstagramIcon aria-hidden="true" />
        </a>
      )}
      {facebook?.href && (
        <a href={facebook.href} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
          <FacebookIcon aria-hidden="true" />
        </a>
      )}
      <a href={GOOGLE_PLAY_URL} target="_blank" rel="noopener noreferrer" aria-label="İhya Mobil — Google Play">
        <GooglePlayIcon aria-hidden="true" />
      </a>
    </div>
  );
}

// Extracted out of the homepage hero so it can sit in the root layout and
// render on every route (e.g. /bagis-yap), not just the homepage — it must
// stay outside any ancestor with overflow:hidden (like .hero) for
// position:sticky to work.
export function SiteHeader() {
  const { open } = useInquiryModal();
  const [menuOpen, setMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!menuOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.documentElement.dataset.menuOpen = "true";

    // Everything except the header (which keeps the close toggle reachable)
    // and the panel itself is taken out of the tab order and the
    // accessibility tree while the full-screen menu covers it.
    const inerted = [...document.body.children].filter(
      (el): el is HTMLElement =>
        el instanceof HTMLElement && el !== headerRef.current && el !== panelRef.current && !el.inert,
    );
    inerted.forEach((el) => (el.inert = true));

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setMenuOpen(false);
        toggleRef.current?.focus();
      }
    }
    document.addEventListener("keydown", onKeyDown);

    // A menu left open while the window grows past the breakpoint would keep
    // the page scroll-locked behind a panel that is now display:none.
    const desktop = window.matchMedia(DESKTOP_NAV_QUERY);
    function onBreakpoint(event: MediaQueryListEvent) {
      if (event.matches) setMenuOpen(false);
    }
    desktop.addEventListener("change", onBreakpoint);

    return () => {
      document.body.style.overflow = previousOverflow;
      delete document.documentElement.dataset.menuOpen;
      inerted.forEach((el) => (el.inert = false));
      document.removeEventListener("keydown", onKeyDown);
      desktop.removeEventListener("change", onBreakpoint);
    };
  }, [menuOpen]);

  return (
    <>
      <header className="hero__header" ref={headerRef}>
        <Link href="/#anasayfa" className="hero__brand">
          <Image src="/brand/ihya-logo.png" alt="Tekirdağ İhya Derneği" width={40} height={40} className="hero__brand-logo" />
          <span>
            <strong>Tekirdağ İhya Derneği</strong>
            <small>İlim • Hizmet • Yardımlaşma</small>
          </span>
        </Link>

        <nav className="hero__nav" aria-label="Ana menü">
          <Link href="/#anasayfa">Ana Sayfa</Link>
          <Link href="/#hakkimizda">Hakkımızda</Link>
          <Link href="/#faaliyetler">Faaliyetler</Link>
          <Link href="/#egitimler">Eğitimler</Link>
          <button type="button" onClick={() => open("gonullu")}>
            Gönüllü Ol
          </button>
          <Link href="/#iletisim">İletişim</Link>
        </nav>

        <div className="hero__header-actions">
          <NavSocialIcons className="hero__nav-socials" />

          <Link href={DONATE_PATH} className="hero__cta">
            Bağış Yap
          </Link>

          <button
            type="button"
            ref={toggleRef}
            className={`hero__menu-toggle ${menuOpen ? "is-open" : ""}`}
            aria-label={menuOpen ? "Menüyü kapat" : "Menüyü aç"}
            aria-expanded={menuOpen}
            aria-controls="hero-mobile-nav"
            onClick={() => setMenuOpen((value) => !value)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      <div
        id="hero-mobile-nav"
        ref={panelRef}
        className={`hero__mobile-nav ${menuOpen ? "is-open" : ""}`}
        inert={!menuOpen}
      >
        <nav className="hero__mobile-links" aria-label="Mobil menü">
          <Link href="/#anasayfa" onClick={() => setMenuOpen(false)}>Ana Sayfa</Link>
          <Link href="/#hakkimizda" onClick={() => setMenuOpen(false)}>Hakkımızda</Link>
          <Link href="/#faaliyetler" onClick={() => setMenuOpen(false)}>Faaliyetler</Link>
          <Link href="/#egitimler" onClick={() => setMenuOpen(false)}>Eğitimler</Link>
          <button
            type="button"
            onClick={() => {
              setMenuOpen(false);
              open("gonullu");
            }}
          >
            Gönüllü Ol
          </button>
          <Link href="/#iletisim" onClick={() => setMenuOpen(false)}>İletişim</Link>
        </nav>
        <Link href={DONATE_PATH} className="hero__cta hero__mobile-cta" onClick={() => setMenuOpen(false)}>
          Bağış Yap
        </Link>

        <NavSocialIcons className="hero__mobile-socials" />
      </div>
    </>
  );
}
