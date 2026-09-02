import { Mail, MapPin, MessageCircle, Navigation, Phone } from "lucide-react";
import Image from "next/image";
import { Container } from "@/components/layout/container";
import { SectionLabel } from "@/components/ui/section-label";
import { contactInfo, corporateMedia, socialLinks } from "@/lib/home-data";

export function ContactSection() {
  const socialHandles = socialLinks.filter((social) => social.handle);
  const headquartersImage = corporateMedia.find((item) => item.purpose === "headquarters");

  return (
    <section className="contact" id="iletisim">
      <span className="section-divider" aria-hidden="true" />
      <Container className="contact__layout">
        <div className="contact__intro">
          <SectionLabel>Bize Ulaşın</SectionLabel>
          <h2>İletişimde Kalalım</h2>
          {socialHandles.length > 0 && (
            <div className="contact__social-handles" aria-label="Sosyal medya hesapları">
              {socialHandles.map((social) => (
                social.href ? <a href={social.href} target="_blank" rel="noopener noreferrer" key={social.platform}><small>{social.platform}</small>{social.handle}</a> : <span key={social.platform}><small>{social.platform}</small>{social.handle}</span>
              ))}
            </div>
          )}
        </div>

        <div className="contact__details">
          {headquartersImage?.image && (
            <div className="contact__media">
              <Image
                src={headquartersImage.image}
                alt={headquartersImage.imageAlt}
                fill
                sizes="(max-width: 767px) 100vw, 50vw"
                style={{ objectPosition: headquartersImage.imageObjectPosition }}
              />
            </div>
          )}
          <address>
            {contactInfo.address && <span><MapPin size={18} aria-hidden="true" />{contactInfo.address}</span>}
            {contactInfo.phone && contactInfo.phoneUrl && <a href={contactInfo.phoneUrl}><Phone size={18} aria-hidden="true" />{contactInfo.phone}</a>}
            {contactInfo.whatsappUrl && <a href={contactInfo.whatsappUrl} target="_blank" rel="noopener noreferrer"><MessageCircle size={18} aria-hidden="true" />WhatsApp</a>}
            {contactInfo.email && contactInfo.emailUrl && <a href={contactInfo.emailUrl}><Mail size={18} aria-hidden="true" />{contactInfo.email}</a>}
            {contactInfo.mapUrl && <a href={contactInfo.mapUrl} target="_blank" rel="noopener noreferrer"><Navigation size={18} aria-hidden="true" />Yol Tarifi →</a>}
          </address>
        </div>
      </Container>
    </section>
  );
}
