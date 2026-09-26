import { ArrowRight, Landmark } from "lucide-react";
import Link from "next/link";
import { Container } from "@/components/layout/container";
import { SectionLabel } from "@/components/ui/section-label";
import { getActiveCenters } from "@/lib/data/centers";
import { DataFallback } from "./data-fallback";
import { MedreseSelector } from "./medrese-selector";

// Always rendered — the footer's "Merkezlerimiz" link anchors here.
export async function MedresesSection() {
  const result = await getActiveCenters();
  if (result.data.length > 0) return <MedreseSelector centers={result.data} />;

  return (
    <section className="medreses section--textured" id="medreseler">
      <Container>
        <div className="medreses__heading"><SectionLabel>Merkezlerimiz</SectionLabel><h2>İlim ve Hizmet<br />Noktalarımız</h2></div>
        <DataFallback
          icon={Landmark}
          title="Merkez bilgileri güncelleniyor"
          actions={
            <Link href="/#iletisim">
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
