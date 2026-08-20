import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { Container } from "@/components/layout/container";
import { participationOptions } from "@/lib/home-data";

export function ParticipationSection() {
  return (
    <section className="participation">
      <Container>
        <div className="participation__heading"><span>Birlikte İhya</span><h2>Bu Hayra Sen de Ortak Ol</h2><p>İhya’nın çalışmalarına üye olarak, gönüllü destek vererek veya imkânların ölçüsünde katkıda bulunarak sen de bu hayra ortak olabilirsin.</p></div>
        <div className="participation__options">
          {participationOptions.map((option, index) => (
            option.href ? (
              <Link id={option.id} href={option.href} className="participation__option" key={option.id}>
                <span>{String(index + 1).padStart(2, "0")}</span><div><h3>{option.title}</h3><p>{option.description}</p></div><ArrowUpRight size={20} aria-hidden="true" />
              </Link>
            ) : (
              <article id={option.id} className="participation__option participation__option--static" key={option.id}>
                <span>{String(index + 1).padStart(2, "0")}</span><div><h3>{option.title}</h3><p>{option.description}</p></div>
              </article>
            )
          ))}
        </div>
      </Container>
    </section>
  );
}
