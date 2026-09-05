import Image from "next/image";
import Link from "next/link";
import { FacebookIcon, InstagramIcon } from "@/components/ui/social-icons";
import { contactInfo, socialLinks } from "@/lib/home-data";
import { Container } from "./container";

const footerLinks = [["Eğitimler", "#egitimler"], ["Merkezlerimiz", "#medreseler"], ["Faaliyetler", "#faaliyetler"], ["İletişim", "#iletisim"], ["Üyelik", "#uyelik"], ["Destek", "#destek"]] as const;

const socialIcons = { Instagram: InstagramIcon, Facebook: FacebookIcon, YouTube: null, X: null } as const;

export function Footer() {
  const socialHandles = socialLinks.filter((social) => social.handle);

  return (
    <footer className="footer section--textured-dark">
      <Container>
        <div className="footer__main">
          <div className="footer__brand">
            <Image src="/brand/ihya-logo.png" alt="Tekirdağ İhya Derneği" width={84} height={84} />
            <p>İlim, irfan ve gönüllülük ekseninde gönülleri buluşturan Tekirdağ İhya Derneği.</p>
          </div>
          <div className="footer__contact">
            {contactInfo.address && <address>{contactInfo.address}</address>}
            {contactInfo.phone && contactInfo.phoneUrl && <a href={contactInfo.phoneUrl}>{contactInfo.phone}</a>}
            {contactInfo.email && contactInfo.emailUrl && <a href={contactInfo.emailUrl}>{contactInfo.email}</a>}
            {socialHandles.length > 0 && (
              <div className="footer__socials">
                {socialHandles.map((social) => {
                  const Icon = socialIcons[social.platform];
                  return social.href && Icon ? (
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-icon-link"
                      aria-label={`${social.platform} — ${social.handle}`}
                      key={social.platform}
                    >
                      <Icon aria-hidden="true" />
                    </a>
                  ) : (
                    <span key={social.platform}><small>{social.platform}</small>{social.handle}</span>
                  );
                })}
              </div>
            )}
          </div>
          <nav className="footer__links" aria-label="Alt menü">{footerLinks.map(([label, href]) => <Link href={href} key={label}>{label}</Link>)}</nav>
        </div>
        <div className="footer__bottom"><p>© {new Date().getFullYear()} Tekirdağ İhya Derneği</p></div>
      </Container>
    </footer>
  );
}
