import { FieldActivitiesSection } from "@/components/home/field-activities-section";
import { ROUTES } from "@/lib/routes";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata(
  ROUTES.activities,
  "Faaliyetlerimiz",
  "Akşam dersleri, esnaf, ev, hasta ve taziye ziyaretleri ile kahvehane sohbetleri: İhya, hayatın içinde yaşanır.",
);

export default function ActivitiesPage() {
  return (
    <main id="main-content">
      <FieldActivitiesSection headingLevel="h1" />
    </main>
  );
}
