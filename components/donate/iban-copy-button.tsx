"use client";

import { Check, Copy } from "lucide-react";
import { useState } from "react";

export function IbanCopyButton({ iban }: { iban: string }) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(iban.replace(/\s+/g, ""));
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard API unavailable (e.g. insecure context) — nothing to fall
      // back to here, the IBAN is still selectable/copyable by hand.
    }
  }

  return (
    <button type="button" className="donate-bank__copy" onClick={handleCopy}>
      {copied ? <Check size={16} aria-hidden="true" /> : <Copy size={16} aria-hidden="true" />}
      {copied ? "Kopyalandı" : "Kopyala"}
    </button>
  );
}
