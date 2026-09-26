"use client";

import { MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Container } from "@/components/layout/container";
import { SectionLabel } from "@/components/ui/section-label";
import type { CenterItem, ImageAsset } from "@/lib/home-data";

function getCenterImages(center: CenterItem): ImageAsset[] {
  if (!center.image) return [];
  return [{ image: center.image, imageAlt: center.imageAlt, imageObjectPosition: center.imageObjectPosition }, ...(center.galleryImages ?? [])];
}

// The empty/error state lives in MedresesSection; this only renders real centers.
export function MedreseSelector({ centers }: { centers: CenterItem[] }) {
  const [selectedId, setSelectedId] = useState(centers[0]?.id);
  const selected = centers.find((center) => center.id === selectedId) ?? centers[0];
  const [activeImagePath, setActiveImagePath] = useState(selected?.image);

  if (!selected) return null;

  const images = getCenterImages(selected);
  const activeImage = images.find((image) => image.image === activeImagePath) ?? images[0];
  function selectCenter(center: CenterItem) { setSelectedId(center.id); setActiveImagePath(center.image); }

  return (
    <section className="medreses section--textured" id="medreseler">
      <Container>
        <div className="medreses__heading"><SectionLabel>Merkezlerimiz</SectionLabel><h2>İlim ve Hizmet<br />Noktalarımız</h2></div>
        <div className="medreses__composition">
          <div className="medreses__intro"><p>Süleymanpaşa’nın farklı noktalarında eğitim, sohbet ve hizmet faaliyetlerimizi sürdürüyoruz.</p><span className="medreses__scope">Süleymanpaşa · Tekirdağ</span></div>
          <div className="medreses__stage" aria-live="polite">
            <div className={`medreses__visual medreses__visual--${selected.tone}`} key={`${selected.id}-${activeImage?.image ?? "fallback"}`}>
              {activeImage ? (
                <Image src={activeImage.image} alt={activeImage.imageAlt} fill sizes="(max-width: 767px) 100vw, 54vw" style={{ objectPosition: activeImage.imageObjectPosition }} />
              ) : (
                <>
                  <div className="manuscript-motif" aria-hidden="true" />
                  <div className="medreses__architecture" aria-hidden="true"><span className="medreses__dome" /><span className="medreses__door" /><span className="medreses__horizon" /></div>
                </>
              )}
            </div>
            {images.length > 1 && <div className="medreses__gallery" aria-label={`${selected.name} fotoğrafları`}>{images.map((image, index) => { const active = image.image === activeImage?.image; return <button type="button" className={active ? "is-active" : ""} aria-current={active ? "true" : undefined} aria-label={`${index + 1}. fotoğrafı göster`} onClick={() => setActiveImagePath(image.image)} key={image.image}><Image src={image.image} alt="" fill sizes="96px" style={{ objectPosition: image.imageObjectPosition }} /><span aria-hidden="true">{String(index + 1).padStart(2, "0")}</span></button>; })}</div>}
          </div>
          <aside className="medreses__details">
            <div className="medreses__selected" key={selected.id}><span className="medreses__type">{selected.typeLabel}</span><h3>{selected.name}</h3><span className="medreses__location"><MapPin size={16} strokeWidth={1.6} aria-hidden="true" />{selected.location}</span>{selected.description && <p>{selected.description}</p>}{selected.address && selected.address !== selected.location && <p>{selected.address}</p>}{selected.mapUrl && <Link href={selected.mapUrl} className="medreses__directions" target="_blank" rel="noopener noreferrer">Yol Tarifi →</Link>}</div>
            {centers.length > 1 && <div className="medrese-selector" aria-label="Eğitim ve hizmet merkezi seçin">{centers.map((center, index) => { const active = center.id === selected.id; return <button type="button" className={`medrese-selector__item ${active ? "is-active" : ""}`} aria-current={active ? "true" : undefined} onClick={() => selectCenter(center)} key={center.id}><span className="medrese-selector__number">{String(index + 1).padStart(2, "0")}</span><span><strong>{center.name}</strong><small>{center.typeLabel}</small></span></button>; })}</div>}
          </aside>
        </div>
      </Container>
    </section>
  );
}
