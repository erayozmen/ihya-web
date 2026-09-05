import { Droplets, GraduationCap, HeartHandshake, Landmark } from "lucide-react";
import type { Metadata } from "next";
import type { LucideIcon } from "lucide-react";
import { Container } from "@/components/layout/container";
import { IbanCopyButton } from "@/components/donate/iban-copy-button";
import { SectionLabel } from "@/components/ui/section-label";

export const metadata: Metadata = {
  title: "Bağış Yap — Tekirdağ İhya Derneği",
  description: "Hafız öğrencilerimize, Afrika'daki kardeşlerimize, su kuyusu ve medrese çalışmalarımıza destek olun.",
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

// TODO: Gerçek IBAN ve banka bilgisi ile değiştirilecek.
const BANK_NAME = "[Banka Adı] Bankası";
// TODO: Gerçek IBAN ve banka bilgisi ile değiştirilecek.
const IBAN = "TR00 0000 0000 0000 0000 0000 00";
const ACCOUNT_HOLDER = "Tekirdağ İhya Derneği";

export default function DonatePage() {
  return (
    <main className="donate-page">
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
          <dl>
            <div>
              <dt>Banka</dt>
              <dd>{BANK_NAME}</dd>
            </div>
            <div>
              <dt>Hesap Sahibi</dt>
              <dd>{ACCOUNT_HOLDER}</dd>
            </div>
            <div>
              <dt>IBAN</dt>
              <dd className="donate-bank__iban">
                <span>{IBAN}</span>
                <IbanCopyButton iban={IBAN} />
              </dd>
            </div>
          </dl>
          <p className="donate-bank__note">
            Bağışınızın açıklama kısmına bağış amacını (ör. &quot;Hafız Öğrenci&quot;) belirtmeniz, katkınızın
            doğru alana ulaşmasına yardımcı olur.
          </p>
        </aside>
      </Container>
    </main>
  );
}
