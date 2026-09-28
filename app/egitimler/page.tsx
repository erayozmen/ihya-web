import { EducationSection } from "@/components/home/education-section";
import { ROUTES } from "@/lib/routes";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata(
  ROUTES.education,
  "Eğitimlerimiz",
  "Kur’an-ı Kerim’den ilmihale, tecvitten Arapçaya uzanan eğitimlerimizle öğrenmeyi hayat boyu süren bir yolculuğa dönüştürüyoruz.",
);

export default function EducationPage() {
  return (
    <main id="main-content">
      <EducationSection headingLevel="h1" />
    </main>
  );
}
