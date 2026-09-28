import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/layout/container";
import { SectionLabel } from "@/components/ui/section-label";
import { ROUTES } from "@/lib/routes";
import { SITE_NAME } from "@/lib/site";

export const metadata: Metadata = {
  title: `Sayfa Bulunamadı — ${SITE_NAME}`,
  robots: { index: false },
};

export default function NotFound() {
  return (
    <main className="not-found section--textured" id="main-content">
      <Container className="not-found__inner">
        <span className="not-found__code" aria-hidden="true">404</span>
        <SectionLabel>Sayfa Bulunamadı</SectionLabel>
        <h1>Aradığınız Sayfaya Ulaşılamadı</h1>
        <p className="not-found__text">
          Bağlantı değişmiş ya da sayfa kaldırılmış olabilir. Ana sayfamızdan eğitimlerimize, faaliyetlerimize ve
          merkezlerimize ulaşabilirsiniz.
        </p>
        <div className="not-found__actions">
          <Link href={ROUTES.home} className="hero__button hero__button--primary">
            Ana Sayfaya Dön
          </Link>
          <Link href={ROUTES.contact} className="hero__button hero__button--secondary">
            Bize Ulaşın
          </Link>
        </div>
      </Container>
    </main>
  );
}
