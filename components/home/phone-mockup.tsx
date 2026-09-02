import { Bell, CalendarDays, Clock3, Landmark, type LucideIcon } from "lucide-react";
import Image from "next/image";
import { mobileFeatures, type MobileFeature } from "@/lib/home-data";

type PhoneMockupProps =
  | { className?: string; image?: undefined; imageAlt?: undefined; imageObjectPosition?: undefined }
  | { className?: string; image: string; imageAlt: string; imageObjectPosition?: string };

const placeholderIcons: Record<MobileFeature["icon"], LucideIcon> = {
  clock: Clock3,
  calendar: CalendarDays,
  landmark: Landmark,
  bell: Bell,
};

export function PhoneMockup({ className = "", image, imageAlt, imageObjectPosition }: PhoneMockupProps) {
  return (
    <div className={`app-phone ${className}`}>
      <span className="app-phone__speaker" aria-hidden="true" />
      <div className="app-phone__screen">
        {image ? (
          <Image src={image} alt={imageAlt} fill sizes="(max-width: 767px) 190px, 250px" style={{ objectPosition: imageObjectPosition ?? "center" }} />
        ) : (
          <div className="app-phone__placeholder" aria-hidden="true">
            <div className="app-phone__placeholder-bar">
              <span className="app-phone__placeholder-dot" />
              <span className="app-phone__placeholder-title" />
            </div>
            <div className="app-phone__placeholder-rows">
              {mobileFeatures.map((feature) => {
                const Icon = placeholderIcons[feature.icon];
                return (
                  <div className="app-phone__placeholder-row" key={feature.title}>
                    <span className="app-phone__placeholder-icon">
                      <Icon size={13} strokeWidth={1.7} />
                    </span>
                    <span className="app-phone__placeholder-label">{feature.title}</span>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
