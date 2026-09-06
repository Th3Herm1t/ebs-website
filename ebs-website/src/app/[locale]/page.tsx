import dynamic from "next/dynamic";
import HeroSection from "@/components/sections/HeroSection";
import TopPromo from "@/components/sections/TopPromo";
import HomeCertificationsSection from "@/components/sections/HomeCertificationsSection";
import OrientationSection from "@/components/sections/OrientationSection";
import { pageMetadata } from "@/lib/seo";

// Lazy-loaded components below the fold
const PillarsSection = dynamic(() => import("@/components/sections/PillarsSection"));
const InfoSliderSection = dynamic(() => import("@/components/sections/InfoSliderSection"));
const AboutSection = dynamic(() => import("@/components/sections/AboutSection"));
const CounterSection = dynamic(() => import("@/components/sections/CounterSection"));
const PartnerLogos = dynamic(() => import("@/components/sections/PartnerLogos"));
const AcademicPartners = dynamic(() => import("@/components/sections/AcademicPartners"));
const FeaturesSection = dynamic(() => import("@/components/sections/FeaturesSection"));
const CareerSection = dynamic(() => import("@/components/sections/CareerSection"));
const CoursesSection = dynamic(() => import("@/components/sections/CoursesSection"));
const CoursePromoSection = dynamic(() => import("@/components/sections/CoursePromoSection"));
const NewsletterSection = dynamic(() => import("@/components/sections/NewsletterSection"));
const EventsSection = dynamic(() => import("@/components/sections/EventsSection"));
const TestimonialsSection = dynamic(() => import("@/components/sections/TestimonialsSection"));

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return pageMetadata({
    title: "Université privée en Tunisie tournée vers l'IA",
     description: "Espima Business School propose des Licences, Masters, parcours internationaux et un catalogue de certifications internationales gratuites en management, finance, marketing, informatique, IA et cybersécurité.",
    path: `/${locale}`,
  });
}

export default function Home() {
  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Espima Business School",
    url: "https://ebs.tn",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://ebs.tn/fr/nos-programmes?search={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }} />
      <HeroSection />
      <TopPromo />
      <PillarsSection />
      <InfoSliderSection />
      <AboutSection />
       <CounterSection />
       <HomeCertificationsSection />
       <CoursePromoSection />
      <AcademicPartners />

      <CareerSection />
      <PartnerLogos />
       <CoursesSection />
       <OrientationSection />
       <FeaturesSection />
      <EventsSection />
      <TestimonialsSection />
      <NewsletterSection />
    </>
  );
}
