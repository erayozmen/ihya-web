import Image from "next/image";

type PhoneMockupProps =
  | { className?: string; image?: undefined; imageAlt?: undefined; imageObjectPosition?: undefined }
  | { className?: string; image: string; imageAlt: string; imageObjectPosition?: string };

export function PhoneMockup({ className = "", image, imageAlt, imageObjectPosition }: PhoneMockupProps) {
  return (
    <div className={`app-phone ${className}`}>
      <span className="app-phone__speaker" aria-hidden="true" />
      <div className="app-phone__screen">
        {image ? (
          <Image src={image} alt={imageAlt} fill sizes="(max-width: 767px) 190px, 250px" style={{ objectPosition: imageObjectPosition ?? "center" }} />
        ) : (
          <div className="app-phone__placeholder" aria-hidden="true">
            <span className="app-phone__mark" />
            <span className="app-phone__line" />
            <span className="app-phone__line app-phone__line--short" />
            <span className="app-phone__panel" />
          </div>
        )}
      </div>
    </div>
  );
}
