"use client";

import { createContext, useCallback, useContext, useEffect, useRef, useState, type FormEvent, type ReactNode } from "react";

export type InquirySource = "gonullu" | "katil";

type InquiryModalContextValue = {
  open: (source: InquirySource) => void;
};

const InquiryModalContext = createContext<InquiryModalContextValue | null>(null);

export function useInquiryModal() {
  const ctx = useContext(InquiryModalContext);
  if (!ctx) throw new Error("useInquiryModal must be used within an InquiryModalProvider");
  return ctx;
}

const copy: Record<InquirySource, { title: string; description: string }> = {
  gonullu: {
    title: "Gönüllü Olun",
    description: "Bilgilerinizi bırakın, faaliyetlerimizde sizinle en kısa sürede iletişime geçelim.",
  },
  katil: {
    title: "Bize Katılın",
    description: "Bilgilerinizi bırakın, İhya ailesine katılmanız için sizinle en kısa sürede iletişime geçelim.",
  },
};

export function InquiryModalProvider({ children }: { children: ReactNode }) {
  const [source, setSource] = useState<InquirySource | null>(null);
  const triggerRef = useRef<HTMLElement | null>(null);

  const open = useCallback((next: InquirySource) => {
    triggerRef.current = document.activeElement as HTMLElement | null;
    setSource(next);
  }, []);

  const close = useCallback(() => {
    setSource(null);
    triggerRef.current?.focus?.();
    triggerRef.current = null;
  }, []);

  return (
    <InquiryModalContext.Provider value={{ open }}>
      {children}
      {source && <InquiryModal source={source} onClose={close} />}
    </InquiryModalContext.Provider>
  );
}

function InquiryModal({ source, onClose }: { source: InquirySource; onClose: () => void }) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const firstFieldRef = useRef<HTMLInputElement>(null);
  const { title, description } = copy[source];

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    firstFieldRef.current?.focus();

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") onClose();
    }
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [onClose]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");

    const form = event.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: data.get("name"),
      phone: data.get("phone"),
      email: data.get("email"),
      message: data.get("message") || null,
      source,
    };

    try {
      const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
      const key = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;
      if (!url || !key) throw new Error("Supabase yapılandırması eksik");

      const response = await fetch(`${url.replace(/\/$/, "")}/rest/v1/contact_requests`, {
        method: "POST",
        headers: {
          apikey: key,
          Authorization: `Bearer ${key}`,
          "Content-Type": "application/json",
          Prefer: "return=minimal",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const details = await response.text().catch(() => "");
        throw new Error(`Gönderim başarısız (${response.status}): ${details}`);
      }
      setStatus("success");
      form.reset();
    } catch (error) {
      console.error("Gönüllü/İletişim formu gönderim hatası:", error);
      setStatus("error");
    }
  }

  return (
    <div
      className="inquiry-modal-backdrop"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div className="inquiry-modal" role="dialog" aria-modal="true" aria-labelledby="inquiry-modal-title">
        <button type="button" className="inquiry-modal__close" onClick={onClose} aria-label="Kapat">
          ×
        </button>

        {status === "success" ? (
          <div className="inquiry-modal__success">
            <h2 id="inquiry-modal-title">Teşekkür ederiz!</h2>
            <p>Bilgileriniz bize ulaştı, en kısa sürede sizinle iletişime geçeceğiz.</p>
            <button type="button" className="hero__button hero__button--primary" onClick={onClose}>
              Kapat
            </button>
          </div>
        ) : (
          <>
            <h2 id="inquiry-modal-title">{title}</h2>
            <p className="inquiry-modal__description">{description}</p>
            <form className="inquiry-modal__form" onSubmit={handleSubmit}>
              <label>
                Ad Soyad
                <input ref={firstFieldRef} type="text" name="name" autoComplete="name" required />
              </label>
              <label>
                Telefon
                <input type="tel" name="phone" autoComplete="tel" required />
              </label>
              <label>
                E-posta
                <input type="email" name="email" autoComplete="email" required />
              </label>
              <label>
                Not <span>(opsiyonel)</span>
                <textarea name="message" rows={3} />
              </label>

              {status === "error" && (
                <p className="inquiry-modal__error">
                  Bir şeyler ters gitti, lütfen tekrar deneyin ya da bizi WhatsApp’tan bulun.
                </p>
              )}

              <button type="submit" className="inquiry-modal__submit" disabled={status === "loading"}>
                {status === "loading" ? "Gönderiliyor…" : "Gönder"}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
