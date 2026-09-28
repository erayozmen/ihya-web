import { UpcomingEvents } from "@/components/home/upcoming-events";
import { ROUTES } from "@/lib/routes";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata(
  ROUTES.events,
  "Sohbet ve Etkinlikler",
  "Tekirdağ İhya Derneği’nin yaklaşan sohbet ve etkinlikleri.",
);

export default function EventsPage() {
  return (
    <main id="main-content">
      <UpcomingEvents headingLevel="h1" />
    </main>
  );
}
