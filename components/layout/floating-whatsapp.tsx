import { contactInfo } from "@/lib/home-data";

export function FloatingWhatsApp() {
  if (!contactInfo.whatsappUrl) return null;

  return (
    <a
      href={contactInfo.whatsappUrl}
      className="floating-whatsapp"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp üzerinden iletişime geç"
    >
      <svg viewBox="0 0 24 24" width="28" height="28" aria-hidden="true" focusable="false">
        <path d="M20.5 11.7a8.3 8.3 0 0 1-12.2 7.4L4 20.2l1.1-4.1a8.3 8.3 0 1 1 15.4-4.4Z" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8.7 7.8c.2-.4.4-.4.7-.4h.4c.2 0 .3.1.4.4l.7 1.7c.1.3 0 .5-.2.7l-.5.6c-.2.2-.1.4 0 .6.7 1.2 1.7 2.1 2.9 2.7.2.1.4.1.6-.1l.7-.9c.2-.2.4-.3.7-.2l1.7.8c.3.1.4.3.4.5 0 .3-.2 1.4-1 1.9-.6.5-1.5.7-2.4.4-1.2-.3-2.8-1-4.5-2.5-1.4-1.3-2.4-2.9-2.7-4.1-.2-.8 0-1.5.3-2.1Z" fill="currentColor" />
      </svg>
    </a>
  );
}
