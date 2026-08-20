import { Clock3, MapPin } from "lucide-react";
import Image from "next/image";
import type { WebsiteEvent } from "@/lib/data/events";

type EventCardProps = {
  event: WebsiteEvent;
  index: number;
};

const monthFormatter = new Intl.DateTimeFormat("tr-TR", { month: "long", timeZone: "Europe/Istanbul" });

export function EventCard({ event, index }: EventCardProps) {
  const date = new Date(`${event.date}T12:00:00+03:00`);
  const dateDay = new Intl.DateTimeFormat("tr-TR", { day: "2-digit", timeZone: "Europe/Istanbul" }).format(date);
  const dateMonth = monthFormatter.format(date);
  const tone = (["sage", "sand", "forest"] as const)[index % 3];
  return (
    <article className="event-card">
      <div className={`event-card__visual event-card__visual--${tone}`}>
        {event.image ? <Image src={event.image} alt={event.imageAlt ?? ""} fill sizes="(max-width: 767px) 82vw, (max-width: 1100px) 45vw, 22vw" /> : <div aria-hidden="true"><span className="event-card__arch" /><span className="event-card__line" /></div>}
      </div>

      <div className="event-card__body">
        <div className="event-card__date" aria-label={`${dateDay} ${dateMonth}`}>
          <strong>{dateDay}</strong>
          <span>{dateMonth}</span>
        </div>
        <div className="event-card__copy">
          <h3>{event.title}</h3>
          {event.description && <p>{event.description}</p>}
        </div>
      </div>

      <div className="event-card__meta">
        {event.location && (
          <span>
            <MapPin size={15} strokeWidth={1.7} aria-hidden="true" />
            {event.location}
          </span>
        )}
        {event.startTime && <span><Clock3 size={15} strokeWidth={1.7} aria-hidden="true" />{event.startTime}</span>}
      </div>
    </article>
  );
}
