import "server-only";

import { readPublicView, type PublicDataResult } from "./supabase-public";

type PublicAssociationSettingsRow = {
  name: string;
  donation_description: string | null;
  iban_display_text: string | null;
};

export type DonationInfo = {
  accountHolder: string;
  description?: string;
  // Shown exactly as entered in ihya-admin ("IBAN görüntüleme metni").
  ibanDisplay: string;
  // The bare IBAN pulled out of the display text for the copy button, or
  // undefined when the text holds no recognizable TR IBAN.
  ibanForCopy?: string;
};

// TR + 2 check digits + 22 digits, allowing the usual 4-digit spacing.
const TR_IBAN = /TR\d{2}(?:\s?\d){22}/i;

// Bank details are managed in ihya-admin (Dernek Ayarları → IBAN görüntüleme
// metni / Bağış açıklaması) and exposed through public_association_settings.
export async function getDonationInfo(): Promise<PublicDataResult<DonationInfo | null>> {
  const query = new URLSearchParams({
    select: "name,donation_description,iban_display_text",
    limit: "1",
  });
  const result = await readPublicView<PublicAssociationSettingsRow>("public_association_settings", query, "public-association-settings");
  const row = result.data[0];
  const ibanDisplay = row?.iban_display_text?.trim();
  if (!row || !ibanDisplay) return { status: result.status, data: null };

  return {
    status: result.status,
    data: {
      accountHolder: row.name.trim(),
      description: row.donation_description?.trim() || undefined,
      ibanDisplay,
      ibanForCopy: ibanDisplay.match(TR_IBAN)?.[0].replace(/\s+/g, "").toUpperCase(),
    },
  };
}
