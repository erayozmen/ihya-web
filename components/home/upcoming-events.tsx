import { Container } from "@/components/layout/container";
import { SectionLabel } from "@/components/ui/section-label";
import { getUpcomingEvents } from "@/lib/data/events";
import { EventCard } from "./event-card";

export async function UpcomingEvents() {
  const result = await getUpcomingEvents();
  if (result.status !== "error" && result.data.length === 0) return null;

  return (
    <section className="events" id="etkinlikler">
      <Container className="events__layout">
        <div className="events__intro">
          <SectionLabel>Yaklaşan Etkinlikler</SectionLabel>
          <h2>
            Sohbet ve
            <br />
            <em>Etkinliklerimiz</em>
          </h2>
        </div>

        <div className="events__grid">
          {result.status === "error" ? <p className="events__data-state" role="status">Etkinlik bilgileri şu anda görüntülenemiyor.</p> : result.data.map((event, index) => <EventCard event={event} index={index} key={event.id} />)}
        </div>
      </Container>
    </section>
  );
}
