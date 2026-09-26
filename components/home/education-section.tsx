import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Container } from "@/components/layout/container";
import { SectionLabel } from "@/components/ui/section-label";
import { educationCategories } from "@/lib/home-data";
import { EducationCard } from "./education-card";

export function EducationSection() {
  return (
    <section className="education section--textured" id="egitimler">
      <span className="section-divider" aria-hidden="true" />
      <Container>
        <div className="education__intro">
          <div>
            <SectionLabel>Eğitimlerimiz</SectionLabel>
            <h2>İlim Yolculuğu</h2>
          </div>
          <div className="education__summary">
            <p>
              Kur’an-ı Kerim’den ilmihale, tecvitten Arapçaya uzanan eğitimlerimizle öğrenmeyi
              hayat boyu süren bir yolculuğa dönüştürüyoruz.
            </p>
            <Link href="/#iletisim" className="education__all-link">
              Eğitimler Hakkında Bilgi Alın <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </div>

        <div className="education__mosaic">
          {educationCategories.map((category, index) => (
            <EducationCard category={category} index={index} key={category.id} />
          ))}
        </div>
      </Container>
    </section>
  );
}
