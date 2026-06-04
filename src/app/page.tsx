import TopBar from "@/components/layout/TopBar";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import TopPromo from "@/components/sections/TopPromo";
import AboutSection from "@/components/sections/AboutSection";
import PillarsSection from "@/components/sections/PillarsSection";
import InfoSliderSection from "@/components/sections/InfoSliderSection";
import CounterSection from "@/components/sections/CounterSection";
import PartnerLogos from "@/components/sections/PartnerLogos";
import AcademicPartners from "@/components/sections/AcademicPartners";
import FeaturesSection from "@/components/sections/FeaturesSection";
import CareerSection from "@/components/sections/CareerSection";
import CoursesSection from "@/components/sections/CoursesSection";
import CoursePromoSection from "@/components/sections/CoursePromoSection";
import NewsletterSection from "@/components/sections/NewsletterSection";
import TopicsSection from "@/components/sections/TopicsSection";
import EventsSection from "@/components/sections/EventsSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import TeamSection from "@/components/sections/TeamSection";
import BlogSection from "@/components/sections/BlogSection";

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
      <TeamSection />
      <BlogSection />
      <Footer />
    </>
  );
}
