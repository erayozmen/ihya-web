import Image from "next/image";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { SectionLabel } from "@/components/ui/section-label";

export function Hero() {
  return (
    <section className="hero" id="anasayfa">
      <Container className="hero__inner">
        <div className="hero__content">
          <SectionLabel>İhya Derneği’ne Hoş Geldiniz</SectionLabel>
          <h1>
            İnsanı İhya,
            <br />
            <em>Toplumu İnşa.</em>
          </h1>
          <p className="hero__description">
            İlim, irfan ve gönüllülük ekseninde gönülleri buluşturarak insanı ihya etmeyi,
            toplumu inşa etmeyi hedefliyoruz.
          </p>
          <div className="hero__actions">
            <Button href="#etkinlikler">Etkinlikleri Keşfet</Button>
            <Button href="#iletisim" variant="secondary">
              Bize Katıl <span aria-hidden="true">↗</span>
            </Button>
          </div>
        </div>

        <div className="hero__visual" aria-label="Mahmut Efendi Hazretleri">
          <div className="hero__motif" aria-hidden="true" />
          <span className="hero__allah" lang="ar" dir="rtl" aria-hidden="true">الله</span>
          <div className="hero__image-wrap">
            <Image
              src="/images/hero/mahmut-efendi.jpg"
              alt="Mahmut Efendi Hazretleri"
              fill
              priority
              sizes="(max-width: 767px) 100vw, 48vw"
              className="hero__image"
            />
          </div>
          <div className="hero__caption" aria-hidden="true">
            <span />
            İlim · İrfan · Hizmet
          </div>
        </div>
      </Container>
    </section>
  );
}
