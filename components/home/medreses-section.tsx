import { ArrowRight, Landmark } from "lucide-react";
import Link from "next/link";
import { Container } from "@/components/layout/container";
import { SectionLabel } from "@/components/ui/section-label";
import { getActiveCenters } from "@/lib/data/centers";
import { ROUTES } from "@/lib/routes";
import { DataFallback } from "./data-fallback";
import { MedreseSelector } from "./medrese-selector";

// Always rendered, with a fallback when there are no centers — /merkezlerimiz
// is a real page and must never come up empty.
export async function MedresesSection({ headingLevel: Heading = "h2" }: { headingLevel?: "h1" | "h2" } = {}) {
  const result = await getActiveCenters();
  if (result.data.length > 0) return <MedreseSelector centers={result.data} headingLevel={Heading} />;

  return (
    <section className="medreses section--textured" id="medreseler">
      <Container>
        <div className="medreses__heading"><SectionLabel>Merkezlerimiz</SectionLabel><Heading>İlim ve Hizmet<br />Noktalarımız</Heading></div>
        <DataFallback
          icon={Landmark}
          title="Merkez bilgileri güncelleniyor"
          actions={
            <Link href={ROUTES.contact}>
              Bize Ulaşın <ArrowRight size={15} aria-hidden="true" />
            </Link>
          }
        >
          Süleymanpaşa’nın farklı noktalarında eğitim, sohbet ve hizmet faaliyetlerimizi sürdürüyoruz. Merkezlerimizin
          adres ve ziyaret bilgileri için bizimle iletişime geçebilirsiniz.
        </DataFallback>
      </Container>
    </section>
  );
}
