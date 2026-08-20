import { AboutPreviewSection } from "@/components/home/about-preview-section";
import { ContactSection } from "@/components/home/contact-section";
import { ContentSection } from "@/components/home/content-section";
import { EducationSection } from "@/components/home/education-section";
import { FieldActivitiesSection } from "@/components/home/field-activities-section";
import { Hero } from "@/components/home/hero";
import { ImpactStats } from "@/components/home/impact-stats";
import { MedresesSection } from "@/components/home/medreses-section";
import { MobileAppSection } from "@/components/home/mobile-app-section";
import { ParticipationSection } from "@/components/home/participation-section";
import { UpcomingEvents } from "@/components/home/upcoming-events";
import { Footer } from "@/components/layout/footer";
import { FloatingWhatsApp } from "@/components/layout/floating-whatsapp";
import { Navbar } from "@/components/layout/navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ImpactStats />
        <UpcomingEvents />
        <MedresesSection />
        <AboutPreviewSection />
        <EducationSection />
        <FieldActivitiesSection />
        <MobileAppSection />
        <ContentSection />
        <ParticipationSection />
        <ContactSection />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
