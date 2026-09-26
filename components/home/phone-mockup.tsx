import Image from "next/image";
import type { ImageAsset } from "@/lib/home-data";

type PhoneMockupProps = ImageAsset & {
  className?: string;
  sizes: string;
};

// A plain bezel around a real İhya Mobil screenshot — the screen content is
// always the actual app capture, never a recreated UI.
export function PhoneMockup({ className = "", image, imageAlt, imageObjectPosition, sizes }: PhoneMockupProps) {
  return (
    <div className={`app-phone ${className}`}>
      <div className="app-phone__screen">
        <Image src={image} alt={imageAlt} fill sizes={sizes} style={{ objectPosition: imageObjectPosition ?? "top center" }} />
      </div>
    </div>
  );
}
