import { Bell, CalendarDays, Clock3, Landmark } from "lucide-react";
import { Container } from "@/components/layout/container";
import { GooglePlayIcon } from "@/components/ui/social-icons";
import { mobileAppConfig, mobileFeatures, type MobileFeature } from "@/lib/home-data";
import { SectionLabel } from "@/components/ui/section-label";
import { GOOGLE_PLAY_URL } from "@/lib/routes";
import { PhoneMockup } from "./phone-mockup";

const featureIcons: Record<MobileFeature["icon"], typeof Clock3> = {
  clock: Clock3,
  calendar: CalendarDays,
  landmark: Landmark,
  bell: Bell,
};

export function MobileAppSection() {
  const [backScreenshot, frontScreenshot] = mobileAppConfig.screenshots;
  return (
    <section className="mobile-app section--textured-dark" id="ihya-mobil">
      <span className="section-divider" aria-hidden="true" />
      <Container className="mobile-app__layout">
        <div className="mobile-app__devices" role="img" aria-label="İhya Mobil uygulama önizlemesi için iki telefon maketi">
          <span className="mobile-app__halo" aria-hidden="true" />
          <PhoneMockup className="app-phone--back" {...backScreenshot} />
          <PhoneMockup className="app-phone--front" {...frontScreenshot} />
        </div>
        <div className="mobile-app__content">
          <SectionLabel>İhya Mobil</SectionLabel>
          <h2>İhya Her An Yanınızda</h2>
          <p>
            Namaz vakitlerinden etkinliklere, medreselerden bildirimlere kadar İhya’nın dijital
            dünyasını her an yanınızda taşıyın.
          </p>
          <div className="mobile-app__features">
            {mobileFeatures.map((feature) => {
              const Icon = featureIcons[feature.icon];
              return (
                <div className="mobile-app__feature" key={feature.title}>
                  <Icon size={18} strokeWidth={1.5} aria-hidden="true" />
                  <span>{feature.title}</span>
                </div>
              );
            })}
          </div>
          <div className="mobile-app__stores">
            {mobileAppConfig.appStoreUrl && <a href={mobileAppConfig.appStoreUrl} className="store-button"><small>İndirin</small><strong>App Store</strong></a>}
            {GOOGLE_PLAY_URL ? (
              <a href={GOOGLE_PLAY_URL} className="store-button store-button--play">
                <GooglePlayIcon aria-hidden="true" />
                <span><small>Edinin</small><strong>Google Play</strong></span>
              </a>
            ) : (
              <span className="store-button store-button--play store-button--soon" aria-disabled="true">
                <GooglePlayIcon aria-hidden="true" />
                <span><small>Google Play&apos;de</small><strong>Çok Yakında</strong></span>
                <em className="store-button__badge">Yakında</em>
              </span>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
