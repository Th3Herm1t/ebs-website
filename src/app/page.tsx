import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import TopPromo from "@/components/sections/TopPromo";
import AboutSection from "@/components/sections/AboutSection";
import CounterSection from "@/components/sections/CounterSection";
import PartnerLogos from "@/components/sections/PartnerLogos";
import FeaturesSection from "@/components/sections/FeaturesSection";
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
      <Header />
      <HeroSection />
      <TopPromo />
      <AboutSection />
      <CounterSection />
      <PartnerLogos />
      <FeaturesSection />
      <CoursesSection limit={6} />
      <CoursePromoSection />
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
