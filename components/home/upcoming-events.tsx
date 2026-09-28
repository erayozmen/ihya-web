import { ArrowUpRight, CalendarClock } from "lucide-react";
import { Container } from "@/components/layout/container";
import { SectionLabel } from "@/components/ui/section-label";
import { getUpcomingEvents } from "@/lib/data/events";
import { socialLinks } from "@/lib/home-data";
import { GOOGLE_PLAY_URL } from "@/lib/routes";
import { DataFallback } from "./data-fallback";
import { EventCard } from "./event-card";

const instagram = socialLinks.find((social) => social.platform === "Instagram");

// Always rendered, with a fallback when there is nothing to list — the hero's
// "Etkinlikleri Keşfet" CTA leads to /etkinlikler, which must never come up empty.
export async function UpcomingEvents({ headingLevel: Heading = "h2" }: { headingLevel?: "h1" | "h2" } = {}) {
  const result = await getUpcomingEvents();
  const hasEvents = result.status === "success" && result.data.length > 0;

  return (
    <section className="events" id="etkinlikler">
      <Container className="events__layout">
        <div className="events__intro">
          <SectionLabel>Yaklaşan Etkinlikler</SectionLabel>
          <Heading>
            Sohbet ve
            <br />
            <em>Etkinliklerimiz</em>
          </Heading>
        </div>

        <div className="events__grid">
          {hasEvents ? (
            result.data.map((event, index) => <EventCard event={event} index={index} key={event.id} />)
          ) : (
            <DataFallback
              icon={CalendarClock}
              title={result.status === "success" ? "Yeni etkinlikler yakında" : "Etkinlik takvimi güncelleniyor"}
              actions={
                <>
                  {instagram?.href && (
                    <a href={instagram.href} target="_blank" rel="noopener noreferrer">
                      Instagram’da Takip Edin <ArrowUpRight size={15} aria-hidden="true" />
                    </a>
                  )}
                  <a href={GOOGLE_PLAY_URL} target="_blank" rel="noopener noreferrer">
                    İhya Mobil’i İndirin <ArrowUpRight size={15} aria-hidden="true" />
                  </a>
                </>
              }
            >
              {result.status === "success"
                ? "Şu anda planlanmış yaklaşan bir etkinlik bulunmuyor. Yeni sohbet ve etkinliklerimiz duyurulduğunda burada yer alacak."
                : "Etkinlik bilgilerine şu anda ulaşılamıyor. Güncel sohbet ve etkinlik duyurularımızı Instagram hesabımızdan veya İhya Mobil uygulamasından takip edebilirsiniz."}
            </DataFallback>
          )}
        </div>
      </Container>
    </section>
  );
}
