"use client";

import Image from "next/image";
import { useState } from "react";
import { Container } from "@/components/layout/container";
import { SectionLabel } from "@/components/ui/section-label";
import { fieldActivities } from "@/lib/home-data";
import { FieldActivitySelector } from "./field-activity-selector";

export function FieldActivitiesSection() {
  const [selectedId, setSelectedId] = useState(fieldActivities[0].id);
  const selected = fieldActivities.find((item) => item.id === selectedId) ?? fieldActivities[0];

  return (
    <section className="field-activities" id="faaliyetler">
      <Container>
        <div className="field-activities__heading">
          <div>
            <SectionLabel>Diğer Faaliyetlerimiz</SectionLabel>
            <h2>Hayatın İçinde İhya</h2>
          </div>
          <p>
            İhya, yalnızca bir merkezde değil; evde, sokakta, esnafın yanında, hastanın
            başucunda ve hayatın içinde yaşanır.
          </p>
        </div>

        <div className="field-activities__layout">
          <div className="field-activities__stage" aria-live="polite">
            <div className={`field-activities__visual field-activities__visual--${selected.tone}`} key={selected.id}>
              {selected.image ? (
                <Image
                  src={selected.image}
                  alt={selected.imageAlt}
                  fill
                  sizes="(max-width: 767px) 100vw, 58vw"
                  style={{ objectPosition: selected.imageObjectPosition ?? "center" }}
                />
              ) : (
                <div className="field-activities__pattern" aria-hidden="true">
                  <span />
                  <span />
                </div>
              )}
              <div className="field-activities__caption">
                <span>Seçili Faaliyet</span>
                <h3>{selected.title}</h3>
                <p>{selected.description}</p>
              </div>
            </div>
          </div>

          <FieldActivitySelector
            items={fieldActivities}
            selectedId={selected.id}
            onSelect={setSelectedId}
          />
        </div>
      </Container>
    </section>
  );
}
