"use client";

import Image from "next/image";
import { useInquiryModal } from "@/components/ui/inquiry-modal";

export function Hero() {
  const { open } = useInquiryModal();

  return (
    <>
      <div id="anasayfa" className="hero">
        {/* TEZHİP ZEMİNİ — tüm hero alanını kaplayan gerçek doku */}
        <div className="hero__ornament" aria-hidden="true" />

        {/* ANA İÇERİK */}
        <main className="hero__main">
          <div className="hero__content">
            <div className="hero__seals">
              <span className="hero__seal">
                <Image src="/images/hero/Muhammed-muhur.png" alt="Muhammed (s.a.v)" fill sizes="200px" />
              </span>
              <span className="hero__seal">
                <Image src="/images/hero/Allah-muhur.png" alt="Allah (c.c)" fill sizes="200px" />
              </span>
            </div>

            <h2 className="hero__heading">
              İnsanı İhya,
              <br />
              Toplumu İnşa.
            </h2>

            <p className="hero__description">
              İlim, irfan ve gönüllülük ekseninde gönülleri buluşturarak insanı ihya etmeyi, toplumu inşa etmeyi
              hedefliyoruz.
            </p>

            <div className="hero__actions">
              <a href="#etkinlikler" className="hero__button hero__button--primary">
                Etkinlikleri Keşfet
              </a>
              <button type="button" className="hero__button hero__button--secondary" onClick={() => open("katil")}>
                Bize Katıl ↗
              </button>
            </div>
          </div>

          <div className="hero__portrait">
            <span className="hero__portrait-ring">
              <span className="hero__portrait-photo">
                <Image
                  src="/images/mahmut-efendi.jpg"
                  alt="Mahmut Efendi Hazretleri"
                  fill
                  priority
                  sizes="(max-width: 767px) 82vw, (max-width: 1100px) 50vw, 560px"
                />
              </span>
            </span>
          </div>
        </main>
      </div>
    </>
  );
}
