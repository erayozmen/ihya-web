import { AboutPreviewSection } from "@/components/home/about-preview-section";
import { ROUTES } from "@/lib/routes";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata(
  ROUTES.about,
  "Hakkımızda",
  "Tekirdağ İhya Derneği; ilim, irfan, ahlâk ve gönüllülük ekseninde insanın manevî ve ilmî gelişimine katkı sunmak için çalışmalar yürütür.",
);

export default function AboutPage() {
  return (
    <main id="main-content">
      <AboutPreviewSection headingLevel="h1" />
    </main>
  );
}
