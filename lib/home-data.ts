export type ImpactStat = {
  value: string;
  label: string;
  icon: "users" | "landmark" | "calendar" | "heart";
};

export type ImageAsset = {
  image: string;
  imageAlt: string;
  imageObjectPosition?: string;
};

export type OptionalImageAsset =
  | { image?: undefined; imageAlt?: undefined; imageObjectPosition?: undefined }
  | ImageAsset;

export type CenterType =
  | "male_madrasa"
  | "female_madrasa"
  | "sibyan_school"
  | "association_center"
  | "womens_quran_course";

export type CenterItem = OptionalImageAsset & {
  id: string;
  name: string;
  typeLabel: string;
  location: string;
  description?: string;
  address?: string;
  mapUrl?: string;
  latitude?: number;
  longitude?: number;
  galleryImages?: ImageAsset[];
  tone: "stone" | "sage" | "sand" | "olive" | "clay" | "forest";
};

export type EducationCategory = OptionalImageAsset & {
  id: string;
  title: string;
  description: string;
  courses: string[];
  variant: "featured" | "vertical" | "wide" | "compact";
  tone: "sage" | "sand" | "stone" | "olive";
};

export type FieldActivity = OptionalImageAsset & {
  id: string;
  title: string;
  description: string;
  tone: "evening" | "artisan" | "home" | "care" | "quiet" | "gathering";
};

export type MobileFeature = {
  title: string;
  icon: "clock" | "calendar" | "landmark" | "bell";
};

export type ContentItem = OptionalImageAsset & {
  id: string;
  title: string;
  type: "Sohbet" | "Ders";
  variant: "featured" | "standard";
  tone: "sage" | "sand" | "stone";
  isPlaceholder: true;
};

export type CorporateMedia = OptionalImageAsset & {
  id: string;
  purpose: "headquarters" | "institutional";
};

export type ParticipationOption = {
  id: string;
  title: string;
  description: string;
  href?: string;
};

export type ContactInfo = {
  phone?: string;
  phoneUrl?: string;
  whatsappUrl?: string;
  email?: string;
  emailUrl?: string;
  address?: string;
  mapUrl?: string;
};

export type SocialLink = {
  platform: "Instagram" | "YouTube" | "Facebook" | "X";
  handle?: string;
  href?: string;
};

export type MobileAppConfig = {
  screenshots: ImageAsset[];
  appStoreUrl?: string;
  googlePlayUrl?: string;
};

// Placeholder metrics: replace with verified institutional figures before launch.
export const impactStats: ImpactStat[] = [
];

export const educationCategories: EducationCategory[] = [
  {
    id: "kuran-yolculugu",
    title: "Kur’an Yolculuğu",
    description: "Kur’an-ı Kerim ile sağlam ve kalıcı bir bağ kurmaya yönelik eğitimler.",
    courses: ["Elif Ba Eğitimi", "Kur’an-ı Kerim Eğitimi", "Ezber Eğitimi"],
    variant: "featured",
    tone: "sage",
  },
  {
    id: "guzel-okuyus",
    title: "Güzel Okuyuş",
    description: "Kur’an tilavetini doğru, özenli ve güzel kılmaya yardımcı çalışmalar.",
    courses: ["Tecvit Eğitimi", "Talim Eğitimi", "Mahreç Eğitimi"],
    variant: "vertical",
    tone: "sand",
  },
  {
    id: "ilmihal-siyer",
    title: "İlmihal ve Siyer",
    description: "İnanç, ibadet ve örnek hayat bilgisini birlikte ele alan eğitimler.",
    courses: ["İlmihal Eğitimi", "Siyer Eğitimi"],
    variant: "wide",
    tone: "stone",
  },
  {
    id: "arapca-egitimleri",
    title: "Arapça Eğitimleri",
    description: "Arapçayı anlamaya ve günlük kullanımda geliştirmeye yönelik programlar.",
    courses: ["Gramer Arapça", "Pratik Arapça", "Talep Edilen Eğitimler"],
    variant: "compact",
    tone: "olive",
  },
];

export const fieldActivities: FieldActivity[] = [
  {
    id: "aksam-dersleri",
    title: "Akşam Dersleri",
    description:
      "Hafta içi belirli akşamlarda düzenlenen derslerle Kur’an, tefsir, hadis ve fıkıh gibi alanlarda ilim ve bilinç kazandırmayı hedefliyoruz.",
    tone: "evening",
  },
  {
    id: "esnaf-ziyaretleri",
    title: "Esnaf Ziyaretleri",
    description:
      "Şehrimizdeki esnaflarımızı ziyaret ediyor, hasbihal ederek derneğimizin çalışmalarını paylaşıyoruz.",
    tone: "artisan",
  },
  {
    id: "ev-ziyaretleri",
    title: "Ev Ziyaretleri",
    description:
      "Gönüllülerimizle ailelerimizi ziyaret ediyor, ihtiyaçlarını dinliyor ve imkânlarımız ölçüsünde destek olmaya çalışıyoruz.",
    tone: "home",
  },
  {
    id: "hasta-ziyaretleri",
    title: "Hasta Ziyaretleri",
    description:
      "Hastanelerde ve evlerinde rahatsızlığı bulunan kardeşlerimizi ziyaret ediyor, dualarımızı ve desteğimizi ulaştırıyoruz.",
    tone: "care",
  },
  {
    id: "taziye-ziyaretleri",
    title: "Taziye Ziyaretleri",
    description:
      "Vefat eden kardeşlerimizin ailelerini ziyaret ederek acılarını paylaşıyor ve yanlarında olmaya gayret ediyoruz.",
    tone: "quiet",
  },
  {
    id: "kahvehane-sohbetleri",
    title: "Kahvehane Sohbetleri",
    description:
      "Halkımızla samimi ortamlarda bir araya geliyor, dinî ve ahlâkî konularda sohbetler gerçekleştiriyoruz.",
    tone: "gathering",
  },
];

export const mobileFeatures: MobileFeature[] = [
  { title: "Namaz Vakitleri", icon: "clock" },
  { title: "Etkinlikler", icon: "calendar" },
  { title: "Medreseler", icon: "landmark" },
  { title: "Bildirimler", icon: "bell" },
];

// TODO: Add verified screenshots and store URLs when the application is published.
export const mobileAppConfig: MobileAppConfig = {
  screenshots: [],
  appStoreUrl: undefined,
  googlePlayUrl: undefined,
};

// Placeholder content: replace these records when verified media is available.
export const contentItems: ContentItem[] = [
  {
    id: "ornek-hayat",
    title: "Peygamber Efendimizin Örnek Hayatı",
    type: "Sohbet",
    variant: "featured",
    tone: "sage",
    isPlaceholder: true,
  },
  {
    id: "kalbi-muhafaza",
    title: "Kalbi Muhafaza Etmek",
    type: "Sohbet",
    variant: "standard",
    tone: "sand",
    isPlaceholder: true,
  },
  {
    id: "ilim-yolunda",
    title: "İlim Yolunda İstikamet",
    type: "Ders",
    variant: "standard",
    tone: "stone",
    isPlaceholder: true,
  },
];

// TODO: Replace anchor targets with real routes or forms when available.
export const participationOptions: ParticipationOption[] = [
  { id: "uyelik", title: "Üye Ol", description: "Derneğimizin çalışmalarında daha aktif yer al." },
  { id: "gonullu", title: "Gönüllü Ol", description: "Faaliyet ve organizasyonlarda desteğinle yanımızda ol." },
  { id: "destek", title: "Bize Destek Ol", description: "Eğitim, faaliyet ve sosyal çalışmaların devamına katkıda bulun." },
];

export const contactInfo: ContactInfo = {
  phone: "+90 (551) 911 24 35",
  phoneUrl: "tel:+905519112435",
  whatsappUrl: "https://wa.me/905519112435",
  email: "bilgi@tekirdagihya.org",
  emailUrl: "mailto:bilgi@tekirdagihya.org",
  address: "Çınarlı Mah. Şehit Osman Cad. No: 100/1 Süleymanpaşa/Tekirdağ",
  mapUrl: "https://maps.app.goo.gl/8UekDkziAkdjajvV9",
};

export const socialLinks: SocialLink[] = [
  // TODO: Instagram hesabı doğrulandı; Facebook adresi henüz teyit edilmedi —
  // dernek yönetimi kesin linki verince güncellenecek.
  { platform: "Instagram", handle: "@ihyadernegi", href: "https://instagram.com/ihyadernegi" },
  { platform: "YouTube" },
  { platform: "Facebook", handle: "@ihyadernegi", href: "https://facebook.com/ihyadernegi" },
  { platform: "X" },
];

export const corporateMedia: CorporateMedia[] = [
  {
    id: "institutional-building",
    purpose: "institutional",
    image: "/dernek/dernek-gorselleri-1.jpeg",
    imageAlt: "Tekirdağ İhya Derneği binasının dışarıdan görünümü",
    imageObjectPosition: "56% 52%",
  },
  {
    id: "headquarters-front",
    purpose: "headquarters",
    image: "/dernek/dernek1.jpeg",
    imageAlt: "Tekirdağ İhya Derneği merkezinin ön cephesi ve giriş kapısı",
    imageObjectPosition: "50% 58%",
  },
];
