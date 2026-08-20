import "server-only";

import { getPublicStorageUrl, readPublicView, type PublicDataResult } from "./supabase-public";

type PublicEventRow = {
  id: string;
  title: string;
  description: string | null;
  image_path: string | null;
  location: string | null;
  event_date: string;
  event_time: string | null;
  venue_id: string | null;
  venue_name: string | null;
  venue_short_address: string | null;
  venue_full_address: string | null;
  venue_latitude: number | null;
  venue_longitude: number | null;
};

export type WebsiteEvent = {
  id: string;
  title: string;
  description?: string;
  date: string;
  startTime?: string;
  image?: string;
  imageAlt?: string;
  location?: string;
  address?: string;
  venue?: {
    id: string;
    name?: string;
    latitude?: number;
    longitude?: number;
  };
};

function todayInTurkey() {
  const parts = new Intl.DateTimeFormat("en-CA", {
    timeZone: "Europe/Istanbul",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).formatToParts(new Date());
  const value = Object.fromEntries(parts.map((part) => [part.type, part.value]));
  return `${value.year}-${value.month}-${value.day}`;
}

export async function getUpcomingEvents(limit = 3): Promise<PublicDataResult<WebsiteEvent[]>> {
  const query = new URLSearchParams({
    select: "id,title,description,image_path,location,event_date,event_time,venue_id,venue_name,venue_short_address,venue_full_address,venue_latitude,venue_longitude",
    event_date: `gte.${todayInTurkey()}`,
    order: "event_date.asc,event_time.asc.nullslast",
    limit: String(limit),
  });
  const result = await readPublicView<PublicEventRow>("public_events", query, "public-events");

  return {
    status: result.status,
    data: result.data.map((row) => {
      const image = getPublicStorageUrl(row.image_path);
      return {
        id: row.id,
        title: row.title,
        description: row.description?.trim() || undefined,
        date: row.event_date,
        startTime: row.event_time?.slice(0, 5) || undefined,
        image,
        imageAlt: image ? `${row.title} etkinlik görseli` : undefined,
        location: row.venue_name?.trim() || row.location?.trim() || undefined,
        address: row.venue_full_address?.trim() || row.venue_short_address?.trim() || undefined,
        venue: row.venue_id ? {
          id: row.venue_id,
          name: row.venue_name?.trim() || undefined,
          latitude: row.venue_latitude ?? undefined,
          longitude: row.venue_longitude ?? undefined,
        } : undefined,
      };
    }),
  };
}
