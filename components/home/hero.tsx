import Image from "next/image";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { SectionLabel } from "@/components/ui/section-label";

export function Hero() {
  return (
    <section className="hero" id="anasayfa">
      <Container className="hero__inner">
        <div className="hero__arabesque" aria-hidden="true">
          <svg viewBox="0 0 1600 746" focusable="false">
            <defs>
              <g id="hero-botanical-vine">
                <path
                  d="M42 700C64 600 34 505 92 416c47-72 125-97 136-184 6-49-17-91-8-142"
                  fill="none"
                  stroke="rgba(177,119,59,0.16)"
                  strokeWidth="1.15"
                  vectorEffect="non-scaling-stroke"
                />
                <path
                  d="M69 568c54-9 91-42 111-94M87 446c-34-18-53-50-58-91M139 344c51-13 81-45 97-91M177 244c-31-19-46-47-48-81"
                  fill="none"
                  stroke="rgba(185,154,103,0.08)"
                  strokeWidth="1"
                  vectorEffect="non-scaling-stroke"
                />
                <path
                  d="M70 565c20-31 45-43 76-44-7 31-31 48-76 44ZM86 444c-31-7-49-27-57-60 34 2 54 22 57 60ZM140 342c16-30 40-44 73-43-7 34-31 50-73 43ZM176 242c-27-10-43-31-48-62 31 6 47 27 48 62ZM219 139c15-26 34-39 59-39-4 29-24 43-59 39Z"
                  fill="rgba(190,135,75,0.10)"
                  stroke="none"
                />
                <path
                  d="M45 694c42-26 83-30 123-13-31 25-72 29-123 13ZM94 414c42 2 72 21 91 58-43 0-73-20-91-58ZM132 316c-36-1-61-18-76-50 38 0 63 17 76 50Z"
                  fill="rgba(185,154,103,0.08)"
                  stroke="none"
                />
                <path
                  d="M54 624c34-22 61-21 82 4 16 19 36 21 58 7M112 382c27-26 54-32 80-17 18 10 34 7 48-8"
                  fill="none"
                  stroke="rgba(177,119,59,0.14)"
                  strokeWidth="0.9"
                  vectorEffect="non-scaling-stroke"
                />
                <path
                  d="M105 611c13-18 29-24 47-17-10 19-26 25-47 17ZM174 367c12-16 26-21 43-14-10 17-24 22-43 14Z"
                  fill="rgba(190,135,75,0.09)"
                  stroke="none"
                />
              </g>
            </defs>
            <use href="#hero-botanical-vine" transform="translate(-24 70) scale(0.9)" />
            <use href="#hero-botanical-vine" transform="translate(1600 120) scale(-0.72 0.72)" opacity="0.68" />
          </svg>
        </div>

        <div className="hero__muhammed-art" aria-hidden="true">
          <Image
            src="/images/hero/muhammed-calligraphy.png"
            alt=""
            width={1536}
            height={1024}
            sizes="(max-width: 767px) 1px, (max-width: 1200px) 220px, 360px"
            className="hero__muhammed-image"
          />
        </div>

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
          <div className="hero__glow" aria-hidden="true" />
          <div className="hero__architecture" aria-hidden="true">
            <svg viewBox="0 0 780 760" focusable="false">
              <defs>
                <pattern id="hero-lattice" width="64" height="64" patternUnits="userSpaceOnUse">
                  <path
                    className="hero__lattice-line"
                    d="M16 0h32l16 16v32L48 64H16L0 48V16Z M0 32h64M32 0v64 M9 9l46 46M55 9 9 55"
                  />
                </pattern>
                <clipPath id="hero-mihrab-clip">
                  <path d="M80 760V390C80 220 235 166 390 18c155 148 310 202 310 372v370Z" />
                </clipPath>
                <radialGradient id="hero-lattice-fade" cx="58%" cy="38%" r="72%">
                  <stop offset="0" stopColor="white" stopOpacity="0.94" />
                  <stop offset="0.52" stopColor="white" stopOpacity="0.78" />
                  <stop offset="0.82" stopColor="white" stopOpacity="0.3" />
                  <stop offset="1" stopColor="white" stopOpacity="0" />
                </radialGradient>
                <mask id="hero-lattice-mask">
                  <rect x="96" y="66" width="588" height="458" fill="url(#hero-lattice-fade)" />
                </mask>
              </defs>
              <g className="hero__mihrab-lines">
                <path d="M80 760V390C80 220 235 166 390 18c155 148 310 202 310 372v370" />
                <path d="M104 760V398C104 238 248 186 390 48c142 138 286 190 286 350v362" />
                <path d="M128 760V406C128 256 261 207 390 79c129 128 262 177 262 327v354" />
              </g>
              <rect
                className="hero__lattice"
                x="96"
                y="66"
                width="588"
                height="458"
                fill="url(#hero-lattice)"
                clipPath="url(#hero-mihrab-clip)"
                mask="url(#hero-lattice-mask)"
              />
              <g className="hero__tezhip">
                <path d="M236 246c36-42 72-57 106-77 25-15 41-35 48-61 7 26 23 46 48 61 34 20 70 35 106 77" />
                <path d="M268 219c18-5 33-17 44-36 4 20-3 35-21 45M512 219c-18-5-33-17-44-36-4 20 3 35 21 45" />
                <path d="M318 176c13-1 24-8 33-20 1 14-5 24-19 30M462 176c-13-1-24-8-33-20-1 14 5 24 19 30" />
                <path d="M286 235c20 11 37 10 52-4M494 235c-20 11-37 10-52-4M345 151c14 8 29 8 45-2 16 10 31 10 45 2" />
                <path
                  className="hero__tezhip-leaves"
                  d="M302 210c8-13 18-18 30-14-5 14-15 19-30 14ZM478 210c-8-13-18-18-30-14 5 14 15 19 30 14ZM334 169c7-11 15-15 25-11-4 11-12 15-25 11ZM446 169c-7-11-15-15-25-11 4 11 12 15 25 11ZM368 132c6-9 13-12 22-8-4 9-11 12-22 8ZM412 132c-6-9-13-12-22-8 4 9 11 12 22 8Z"
                />
              </g>
            </svg>
          </div>
          <div className="hero__allah-art" aria-hidden="true">
            <Image
              src="/images/hero/allah-calligraphy.png"
              alt=""
              width={1536}
              height={1024}
              sizes="(max-width: 767px) 190px, (max-width: 1024px) 300px, (max-width: 1200px) 370px, 490px"
              className="hero__allah-image"
            />
          </div>
          <div className="hero__image-wrap">
            <Image
              src="/images/hero/mahmut-efendi-cutout.png"
              alt="Mahmut Efendi Hazretleri"
              fill
              priority
              sizes="(max-width: 767px) 92vw, (max-width: 1024px) 680px, (max-width: 1200px) 620px, 720px"
              className="hero__image"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
