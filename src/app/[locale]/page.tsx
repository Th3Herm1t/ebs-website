import dynamic from "next/dynamic";
import TopBar from "@/components/layout/TopBar";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import TopPromo from "@/components/sections/TopPromo";

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
const TopicsSection = dynamic(() => import("@/components/sections/TopicsSection"));
const EventsSection = dynamic(() => import("@/components/sections/EventsSection"));
const TestimonialsSection = dynamic(() => import("@/components/sections/TestimonialsSection"));
const BlogSection = dynamic(() => import("@/components/sections/BlogSection"));

export default function Home() {
  return (
    <>
      <TopBar />
      <Header />
      <HeroSection />
      <TopPromo />
      <PillarsSection />
      <InfoSliderSection />
      <AboutSection />
      <CounterSection />
      <PartnerLogos />
      <CareerSection />
      <AcademicPartners />
      <CoursePromoSection />
      <CoursesSection />
      <FeaturesSection />
      <NewsletterSection />
      <TopicsSection />
      <EventsSection />
      <TestimonialsSection />
      <BlogSection />
      <Footer />
    </>
  );
}
