import Image from "next/image";
import { Container } from "@/components/layout/container";
import { SectionLabel } from "@/components/ui/section-label";
import { corporateMedia } from "@/lib/home-data";

// headingLevel is "h1" on the standalone /hakkimizda page, "h2" on the homepage.
export function AboutPreviewSection({ headingLevel: Heading = "h2" }: { headingLevel?: "h1" | "h2" } = {}) {
  const institutionalImage = corporateMedia.find((item) => item.purpose === "institutional");

  return (
    <section className="about-preview section--textured" id="hakkimizda">
      <span className="section-divider" aria-hidden="true" />
      <Container>
        <SectionLabel>İhya’yı Tanıyın</SectionLabel>
        <div className="about-preview__layout">
          <Heading>
            Bir Gönlü İhya Etmek,
            <br />
            <em>Bir Toplumu İnşa Etmektir.</em>
          </Heading>

          <div className="about-preview__copy">
            <p>
              Tekirdağ İhya Derneği; ilim, irfan, ahlâk ve gönüllülük ekseninde insanın manevî
              ve ilmî gelişimine katkı sunmak, sahih bilgiyi toplumla buluşturmak ve hayrı
              hayatın her alanına taşımak amacıyla çalışmalar yürütmektedir.
            </p>
            <p>
              Büyüklerinden aldığı manevî mirası koruyarak; sohbetler, eğitimler, ziyaretler ve
              sosyal faaliyetlerle toplumun dinî, ahlâkî ve fikrî ihtiyaçlarına katkı sağlamayı
              hedefler.
            </p>
          </div>
        </div>

        <div className="about-preview__media-row">
          {institutionalImage?.image && (
            <div className="about-preview__media">
              <Image
                src={institutionalImage.image}
                alt={institutionalImage.imageAlt}
                fill
                sizes="(max-width: 767px) 100vw, 72vw"
                style={{ objectPosition: institutionalImage.imageObjectPosition }}
              />
            </div>
          )}
          <div className="about-preview__quote">
            <span aria-hidden="true">“</span>
            <p>İyiliği tavsiye etmek, hayrı çoğaltmak.</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
