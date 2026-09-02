import { BookOpen, Coffee, Heart, Home, Leaf, Store, type LucideIcon } from "lucide-react";
import { Container } from "@/components/layout/container";
import { SectionLabel } from "@/components/ui/section-label";
import { fieldActivities } from "@/lib/home-data";

const activityIcons: Record<string, LucideIcon> = {
  "aksam-dersleri": BookOpen,
  "esnaf-ziyaretleri": Store,
  "ev-ziyaretleri": Home,
  "hasta-ziyaretleri": Heart,
  "taziye-ziyaretleri": Leaf,
  "kahvehane-sohbetleri": Coffee,
};

export function FieldActivitiesSection() {
  return (
    <section className="field-activities section--textured" id="faaliyetler">
      <span className="section-divider" aria-hidden="true" />
      <Container>
        <div className="field-activities__heading">
          <div>
            <SectionLabel>Diğer Faaliyetlerimiz</SectionLabel>
            <h2>Hayatın İçinde İhya</h2>
          </div>
          <p>
            İhya, yalnızca bir merkezde değil; evde, sokakta, esnafın yanında, hastanın
            başucunda ve hayatın içinde yaşanır.
          </p>
        </div>

        <div className="field-activities__grid">
          {fieldActivities.map((activity) => {
            const Icon = activityIcons[activity.id];
            return (
              <article className="field-activity-card" key={activity.id}>
                <span className="field-activity-card__icon" aria-hidden="true">
                  <Icon size={22} strokeWidth={1.5} />
                </span>
                <h3>{activity.title}</h3>
                <p>{activity.description}</p>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
