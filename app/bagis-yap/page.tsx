import { Droplets, GraduationCap, HeartHandshake, Landmark, MessageCircle, Phone } from "lucide-react";
import type { Metadata } from "next";
import type { LucideIcon } from "lucide-react";
import { Container } from "@/components/layout/container";
import { IbanCopyButton } from "@/components/donate/iban-copy-button";
import { SectionLabel } from "@/components/ui/section-label";
import { getDonationInfo } from "@/lib/data/donation";
import { contactInfo } from "@/lib/home-data";
import { DONATE_PATH } from "@/lib/routes";
import { SITE_NAME, baseOpenGraph } from "@/lib/site";

const title = `Bağış Yap — ${SITE_NAME}`;
const description = "Hafız öğrencilerimize, Afrika'daki kardeşlerimize, su kuyusu ve medrese çalışmalarımıza destek olun.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: DONATE_PATH },
  openGraph: { ...baseOpenGraph, url: DONATE_PATH, title, description },
};

type DonationCategory = {
  title: string;
  description: string;
  icon: LucideIcon;
};

const donationCategories: DonationCategory[] = [
  {
    title: "Hafız Öğrencilere Destek",
    description:
      "Kur'an-ı Kerim'i ezberleyen öğrencilerimizin barınma, iaşe ve eğitim ihtiyaçlarına ortak olun; her bir hafız, sizin desteğinizle yetişiyor.",
    icon: GraduationCap,
  },
  {
    title: "Afrika Kurban",
    description:
      "Kurban bağışınızı Afrika'daki muhtaç ailelere ulaştırıyor, bir sofranın bereketini binlerce kilometre öteye taşıyoruz.",
    icon: HeartHandshake,
  },
  {
    title: "Yurtdışı Su Kuyusu",
    description:
      "Suya erişimi olmayan bölgelerde açtığımız su kuyularıyla, susuzluk çeken bir köye hayat suyu ulaştırın.",
    icon: Droplets,
  },
  {
    title: "Medrese Yardımı",
    description:
      "Medreselerimizin bakım, donanım ve eğitim giderlerine destek olarak ilim yuvalarının ayakta kalmasına katkı sağlayın.",
    icon: Landmark,
  },
];

// Account details come from ihya-admin via Supabase (see lib/data/donation.ts).
// With no IBAN saved there — or Supabase unreachable — the page shows the
// "yakında" note and contact channels instead of any placeholder account.
export default async function DonatePage() {
  const { data: donation } = await getDonationInfo();

  return (
    <main className="donate-page" id="main-content">
      <Container className="donate-page__intro">
        <SectionLabel>Bağış Yap</SectionLabel>
        <h1>Bu Hayra Ortak Olun</h1>
        <p>
          Her bağış, bir hafız öğrencinin ezberine, bir kuyunun sularına, bir sofranın bereketine dönüşüyor.
          Aşağıdaki alanlardan dilediğinizi seçerek ya da doğrudan hesabımıza bağış yaparak bu hayra ortak
          olabilirsiniz.
        </p>
      </Container>

      <Container className="donate-page__layout">
        <div className="donate-categories">
          {donationCategories.map(({ title, description, icon: Icon }) => (
            <article className="donate-category" key={title}>
              <span className="donate-category__icon" aria-hidden="true">
                <Icon size={26} strokeWidth={1.5} />
              </span>
              <h2>{title}</h2>
              <p>{description}</p>
            </article>
          ))}
        </div>

        <aside className="donate-bank">
          <h2>Banka Hesap Bilgileri</h2>
          {donation ? (
            <>
              {donation.description && <p className="donate-bank__lead">{donation.description}</p>}
              <dl>
                <div>
                  <dt>Hesap Sahibi</dt>
                  <dd>{donation.accountHolder}</dd>
                </div>
                <div>
                  <dt>IBAN</dt>
                  <dd className="donate-bank__iban">
                    <span>{donation.ibanDisplay}</span>
                    {donation.ibanForCopy && <IbanCopyButton iban={donation.ibanForCopy} />}
                  </dd>
                </div>
              </dl>
              <p className="donate-bank__note">
                Bağışınızın açıklama kısmına bağış amacını (ör. &quot;Hafız Öğrenci&quot;) belirtmeniz, katkınızın
                doğru alana ulaşmasına yardımcı olur.
              </p>
            </>
          ) : (
            <>
              <p className="donate-bank__pending">
                Banka hesap bilgilerimiz yakında bu sayfada paylaşılacaktır. Bağış yapmak için şimdilik bizimle
                telefon veya WhatsApp üzerinden iletişime geçebilirsiniz.
              </p>
              <div className="donate-bank__contact">
                {contactInfo.whatsappUrl && (
                  <a href={contactInfo.whatsappUrl} target="_blank" rel="noopener noreferrer">
                    <MessageCircle size={17} aria-hidden="true" />
                    WhatsApp ile Yazın
                  </a>
                )}
                {contactInfo.phone && contactInfo.phoneUrl && (
                  <a href={contactInfo.phoneUrl}>
                    <Phone size={17} aria-hidden="true" />
                    {contactInfo.phone}
                  </a>
                )}
              </div>
            </>
          )}
        </aside>
      </Container>
    </main>
  );
}
