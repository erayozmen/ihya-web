import "server-only";

import { getPublicStorageUrl, readPublicView, type PublicDataResult } from "./supabase-public";
import type { CenterItem, ImageAsset } from "@/lib/home-data";

type PublicMadrasaRow = {
  id: string;
  title: string;
  description: string | null;
  image_path: string | null;
  address: string | null;
  phone: string | null;
  latitude: number | null;
  longitude: number | null;
};

const barbarosGallery: ImageAsset[] = [
  { image: "/medreseler/medrese1.jpeg", imageAlt: "Barbaros Erkek Medresesi dış cephesi", imageObjectPosition: "50% 46%" },
  { image: "/medreseler/medrese2.jpeg", imageAlt: "Barbaros Erkek Medresesi dış merdiven görünümü", imageObjectPosition: "54% 44%" },
  { image: "/medreseler/medrese3.jpeg", imageAlt: "Barbaros Erkek Medresesi bahçe kapısı ve ön cephesi", imageObjectPosition: "52% 56%" },
];

function isBarbarosMadrasa(title: string) {
  const normalized = title.toLocaleLowerCase("tr-TR");
  return normalized.includes("barbaros") && normalized.includes("erkek") && normalized.includes("medrese");
}

export async function getActiveCenters(): Promise<PublicDataResult<CenterItem[]>> {
  const query = new URLSearchParams({
    select: "id,title,description,image_path,address,phone,latitude,longitude",
    order: "title.asc",
  });
  const result = await readPublicView<PublicMadrasaRow>("public_madrasas", query, "public-centers");

  return {
    status: result.status,
    data: result.data.map((row, index) => {
      const barbaros = isBarbarosMadrasa(row.title);
      const localImages = barbaros ? barbarosGallery : [];
      const remoteImage = getPublicStorageUrl(row.image_path);
      // The verified local Barbaros photos take precedence over unclassified admin graphics.
      const primary = localImages[0] ?? (remoteImage ? { image: remoteImage, imageAlt: `${row.title} görseli` } : undefined);

      return {
        id: row.id,
        name: row.title,
        typeLabel: barbaros ? "Erkek Medresesi" : "Eğitim ve Hizmet Merkezi",
        location: "Süleymanpaşa / Tekirdağ",
        address: row.address?.trim() || undefined,
        description: row.description?.trim() || undefined,
        latitude: row.latitude ?? undefined,
        longitude: row.longitude ?? undefined,
        tone: (["stone", "sage", "sand", "olive", "clay", "forest"] as const)[index % 6],
        ...(primary ?? {}),
        galleryImages: barbaros ? localImages.slice(1) : undefined,
      };
    }),
  };
}
