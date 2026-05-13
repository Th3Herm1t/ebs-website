import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import PartnerLogos from "@/components/sections/PartnerLogos";
import TopPromo2 from "@/components/sections/TopPromo2";
import AboutSection from "@/components/sections/AboutSection";
import CoursesSection from "@/components/sections/CoursesSection";
import TeamSection from "@/components/sections/TeamSection";
import EventsSection from "@/components/sections/EventsSection";
import CounterSection from "@/components/sections/CounterSection";
import CoursePromoSection from "@/components/sections/CoursePromoSection";
import NewsletterSection from "@/components/sections/NewsletterSection";
import FaqSection from "@/components/sections/FaqSection";

export default function Index3Page() {
  return (
    <>
      <Header />
      <HeroSection />
      <PartnerLogos />
      <TopPromo2 />
      <AboutSection />
      <CoursesSection />
      <TeamSection />
      <EventsSection />
      <CounterSection />
      <CoursePromoSection />
      <NewsletterSection />
      <FaqSection />
      <Footer />
    </>
  );
}
