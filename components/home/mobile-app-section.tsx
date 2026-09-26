import { CalendarDays, Clock3, Landmark, Sparkles } from "lucide-react";
import { Container } from "@/components/layout/container";
import { GooglePlayIcon } from "@/components/ui/social-icons";
import { mobileAppConfig, mobileFeatures, type MobileFeature } from "@/lib/home-data";
import { SectionLabel } from "@/components/ui/section-label";
import { GOOGLE_PLAY_URL } from "@/lib/routes";
import { PhoneMockup } from "./phone-mockup";

const featureIcons: Record<MobileFeature["icon"], typeof Clock3> = {
  clock: Clock3,
  sparkles: Sparkles,
  calendar: CalendarDays,
  landmark: Landmark,
};

// Mirror the --phone-w / side-phone widths in globals.css.
const FRONT_PHONE_SIZES = "(max-width: 767px) 210px, 262px";
const BACK_PHONE_SIZES = "(max-width: 767px) 165px, 205px";

export function MobileAppSection() {
  const [featured, ...others] = mobileAppConfig.screenshots;
  const backSides = ["app-phone--left", "app-phone--right"];

  return (
    <section className="mobile-app section--textured-dark" id="ihya-mobil">
      <span className="section-divider" aria-hidden="true" />
      <Container className="mobile-app__layout">
        <div className="mobile-app__head">
          <SectionLabel>İhya Mobil</SectionLabel>
          <h2>İhya Her An Yanınızda</h2>
        </div>

        <div className="mobile-app__devices">
          <span className="mobile-app__halo" aria-hidden="true" />
          {others.slice(0, backSides.length).map((screenshot, index) => (
            <PhoneMockup
              className={`app-phone--back ${backSides[index]}`}
              sizes={BACK_PHONE_SIZES}
              key={screenshot.image}
              {...screenshot}
            />
          ))}
          <PhoneMockup className="app-phone--front" sizes={FRONT_PHONE_SIZES} {...featured} />
        </div>

        <div className="mobile-app__body">
          <p>
            Namaz vakitlerinden zikirlerinize, etkinliklerden medreselere kadar İhya’nın dijital dünyasını her an
            yanınızda taşıyın.
          </p>
          <ul className="mobile-app__features">
            {mobileFeatures.map((feature) => {
              const Icon = featureIcons[feature.icon];
              return (
                <li className="mobile-app__feature" key={feature.title}>
                  <Icon size={18} strokeWidth={1.5} aria-hidden="true" />
                  <span>{feature.title}</span>
                </li>
              );
            })}
          </ul>
          <div className="mobile-app__stores">
            <a
              href={GOOGLE_PLAY_URL}
              className="store-button store-button--play"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="İhya Mobil’i Google Play’den indirin (yeni sekmede açılır)"
            >
              <GooglePlayIcon aria-hidden="true" />
              <span><small>Android</small><strong>Google Play’den İndir</strong></span>
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
