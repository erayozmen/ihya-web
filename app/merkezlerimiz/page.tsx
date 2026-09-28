import { MedresesSection } from "@/components/home/medreses-section";
import { ROUTES } from "@/lib/routes";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata(
  ROUTES.centers,
  "Merkezlerimiz",
  "Süleymanpaşa’nın farklı noktalarındaki medrese ve hizmet merkezlerimizde eğitim, sohbet ve hizmet faaliyetlerimizi sürdürüyoruz.",
);

export default function CentersPage() {
  return (
    <main id="main-content">
      <MedresesSection headingLevel="h1" />
    </main>
  );
}
