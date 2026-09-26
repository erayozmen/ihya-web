"use client";

import { ArrowUpRight, HandHeart, HeartHandshake, UserPlus, type LucideIcon } from "lucide-react";
import Link from "next/link";
import { Container } from "@/components/layout/container";
import { useInquiryModal } from "@/components/ui/inquiry-modal";
import { participationOptions } from "@/lib/home-data";

const optionIcons: Record<string, LucideIcon> = {
  uyelik: UserPlus,
  gonullu: HandHeart,
  destek: HeartHandshake,
};

export function ParticipationSection() {
  const { open } = useInquiryModal();

  return (
    <section className="participation section--textured-dark">
      <span className="section-divider" aria-hidden="true" />
      <Container>
        <div className="participation__heading"><span>Birlikte İhya</span><h2>Bu Hayra Sen de Ortak Ol</h2><p>İhya’nın çalışmalarına üye olarak, gönüllü destek vererek veya imkânların ölçüsünde katkıda bulunarak sen de bu hayra ortak olabilirsin.</p></div>
        <div className="participation__options">
          {participationOptions.map((option, index) => {
            const Icon = optionIcons[option.id];
            const number = String(index + 1).padStart(2, "0");
            const content = (
              <>
                <span className="participation__option-icon" aria-hidden="true"><Icon size={22} strokeWidth={1.5} /></span>
                <span className="participation__option-number">{number}</span>
                <div><h3>{option.title}</h3><p>{option.description}</p></div>
                <ArrowUpRight size={20} aria-hidden="true" />
              </>
            );

            return option.inquiry ? (
              <button
                type="button"
                id={option.id}
                className="participation__option"
                key={option.id}
                onClick={() => open(option.inquiry)}
              >
                {content}
              </button>
            ) : (
              <Link id={option.id} href={option.href} className="participation__option" key={option.id}>
                {content}
              </Link>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
