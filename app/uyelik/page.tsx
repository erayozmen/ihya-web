import { ParticipationSection } from "@/components/home/participation-section";
import { ROUTES } from "@/lib/routes";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata(
  ROUTES.membership,
  "Üyelik ve Gönüllülük",
  "Tekirdağ İhya Derneği’ne üye olarak, gönüllü destek vererek veya bağışta bulunarak bu hayra ortak olun.",
);

export default function MembershipPage() {
  return (
    <main id="main-content">
      <ParticipationSection headingLevel="h1" />
    </main>
  );
}
