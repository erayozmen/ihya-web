"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Container } from "./container";

const links = [
  ["Ana Sayfa", "#anasayfa"],
  ["Hakkımızda", "#hakkimizda"],
  ["Faaliyetler", "#faaliyetler"],
  ["Eğitimler", "#egitimler"],
  ["Merkezlerimiz", "#medreseler"],
  ["İletişim", "#iletisim"],
] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("menu-open", open);
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.classList.remove("menu-open");
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, [open]);

  return (
    <header className="navbar">
      <Container className="navbar__inner">
        <Link href="#anasayfa" className="navbar__brand" aria-label="Tekirdağ İhya Derneği ana sayfa">
          <Image
            src="/brand/ihya-logo.png"
            alt="Tekirdağ İhya Derneği"
            width={182}
            height={64}
            className="navbar__logo"
          />
        </Link>

        <nav id="mobile-menu" className={`navbar__nav ${open ? "is-open" : ""}`} aria-label="Ana menü">
          <div className="navbar__links">
            {links.map(([label, href]) => (
              <Link key={href} href={href} onClick={() => setOpen(false)}>
                {label}
              </Link>
            ))}
          </div>
          <Button href="#destek" className="navbar__cta" onClick={() => setOpen(false)}>
            Bağış Yap
          </Button>
        </nav>

        <button
          type="button"
          className={`menu-toggle ${open ? "is-open" : ""}`}
          aria-label={open ? "Menüyü kapat" : "Menüyü aç"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((value) => !value)}
        >
          <span />
          <span />
        </button>
      </Container>
    </header>
  );
}
