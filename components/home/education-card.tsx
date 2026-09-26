import { ArrowUpRight, BookOpen, Languages, ScrollText, Volume2, type LucideIcon } from "lucide-react";
import Image from "next/image";
import { contactInfo, type EducationCategory } from "@/lib/home-data";

type EducationCardProps = {
  category: EducationCategory;
  index: number;
};

const categoryIcons: Record<string, LucideIcon> = {
  "kuran-yolculugu": BookOpen,
  "guzel-okuyus": Volume2,
  "ilmihal-siyer": ScrollText,
  "arapca-egitimleri": Languages,
};

export function EducationCard({ category, index }: EducationCardProps) {
  const Icon = categoryIcons[category.id] ?? BookOpen;
  // There is no per-course detail page, so the card asks about this course
  // directly on WhatsApp instead of pretending to open one.
  const inquiryUrl = contactInfo.whatsappUrl
    ? `${contactInfo.whatsappUrl}?text=${encodeURIComponent(`Merhaba, ${category.title} hakkında bilgi almak istiyorum.`)}`
    : undefined;

  return (
    <article className={`education-card education-card--${category.variant}`}>
      <div className={`education-card__visual education-card__visual--${category.tone}`}>
        {category.image ? (
          <Image
            src={category.image}
            alt={category.imageAlt}
            fill
            sizes="(max-width: 767px) 100vw, 45vw"
            style={{ objectPosition: category.imageObjectPosition ?? "center" }}
          />
        ) : (
          <div className="manuscript-motif" aria-hidden="true">
            <span className="manuscript-motif__icon"><Icon size={22} strokeWidth={1.4} /></span>
          </div>
        )}
        <span className="education-card__index" aria-hidden="true">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>
      <div className="education-card__body">
        <div>
          <h3>{category.title}</h3>
          <p>{category.description}</p>
        </div>
        <ul aria-label={`${category.title} dersleri`}>
          {category.courses.map((course) => (
            <li key={course}>{course}</li>
          ))}
        </ul>
        {inquiryUrl && (
          <a
            href={inquiryUrl}
            className="education-card__link"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${category.title} hakkında WhatsApp üzerinden bilgi alın`}
          >
            Bilgi Al <ArrowUpRight size={15} aria-hidden="true" />
          </a>
        )}
      </div>
    </article>
  );
}
