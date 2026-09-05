// Central place for links that don't have a final destination yet, or that
// are referenced from more than one component, so there is exactly one
// place to update when the real address is ready.

export const DONATE_PATH = "/bagis-yap";

// TODO: Uygulama Google Play'de yayınlandığında gerçek mağaza linkiyle
// değiştirilecek. null olduğu sürece ilgili buton "Çok Yakında" durumunda
// gösterilir.
export const GOOGLE_PLAY_URL: string | null = null;
