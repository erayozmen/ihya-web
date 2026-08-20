import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { EducationCategory } from "@/lib/home-data";

type EducationCardProps = {
  category: EducationCategory;
  index: number;
};

export function EducationCard({ category, index }: EducationCardProps) {
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
          <div className="education-card__pattern" aria-hidden="true">
            <span />
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
        <Link href="#iletisim" className="education-card__link" aria-label={`${category.title} hakkında bilgi alın`}>
          İncele <ArrowUpRight size={15} aria-hidden="true" />
        </Link>
      </div>
    </article>
  );
}
