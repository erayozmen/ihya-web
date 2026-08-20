import { ArrowRight, Play } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/layout/container";
import { SectionLabel } from "@/components/ui/section-label";
import { contentItems } from "@/lib/home-data";

export function ContentSection() {
  const verifiedContent = contentItems.filter((item) => !item.isPlaceholder);
  if (verifiedContent.length === 0) return null;

  return (
    <section className="contents" id="icerikler">
      <Container>
        <div className="contents__heading">
          <div><SectionLabel>İçerikler</SectionLabel><h2>Gönüllere Dokunan Sohbetler</h2></div>
          <div><p>İlim, irfan ve maneviyat ekseninde hazırlanan sohbet ve içeriklerle her yerde istifade edin.</p><Link href="#icerikler">Tüm İçerikleri Gör <ArrowRight size={16} aria-hidden="true" /></Link></div>
        </div>
        <div className="contents__masonry">
          {verifiedContent.map((item) => (
            <Link href="#icerikler" className={`content-item content-item--${item.variant}`} key={item.id}>
              <div className={`content-item__visual content-item__visual--${item.tone}`}>
                {item.image ? <Image src={item.image} alt={item.imageAlt} fill sizes="(max-width: 767px) 100vw, 60vw" style={{ objectPosition: item.imageObjectPosition ?? "center" }} /> : <span className="content-item__pattern" aria-hidden="true" />}
                <span className="content-item__play" aria-hidden="true"><Play size={18} fill="currentColor" /></span>
              </div>
              <div className="content-item__copy"><span>{item.type}</span><h3>{item.title}</h3></div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
