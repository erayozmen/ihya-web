import { CalendarDays, HeartHandshake, Landmark, UsersRound } from "lucide-react";
import { Container } from "@/components/layout/container";
import { impactStats, type ImpactStat } from "@/lib/home-data";

const statIcons: Record<ImpactStat["icon"], typeof UsersRound> = {
  users: UsersRound,
  landmark: Landmark,
  calendar: CalendarDays,
  heart: HeartHandshake,
};

export function ImpactStats() {
  if (impactStats.length === 0) return null;

  return (
    <section className="impact" aria-label="İhya'nın etkisi">
      <Container>
        <div className="impact__surface">
          {impactStats.map((stat) => {
            const Icon = statIcons[stat.icon];

            return (
              <div className="impact__item" key={stat.label}>
                <Icon className="impact__icon" size={24} strokeWidth={1.5} aria-hidden="true" />
                <div>
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
