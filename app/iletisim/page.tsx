import { ContactSection } from "@/components/home/contact-section";
import { ROUTES } from "@/lib/routes";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata(
  ROUTES.contact,
  "İletişim",
  "Tekirdağ İhya Derneği adres, telefon, WhatsApp ve e-posta bilgileri: Çınarlı Mah. Şehit Osman Cad. No: 100/1 Süleymanpaşa/Tekirdağ.",
);

export default function ContactPage() {
  return (
    <main id="main-content">
      <ContactSection headingLevel="h1" />
    </main>
  );
}
