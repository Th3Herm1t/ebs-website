import PageHeader from "@/components/layout/PageHeader";
import TopPromo from "@/components/sections/TopPromo";
import AboutSection from "@/components/sections/AboutSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import CounterSection from "@/components/sections/CounterSection";
import TeamSection from "@/components/sections/TeamSection";
import FaqSection from "@/components/sections/FaqSection";
import PartnerLogos from "@/components/sections/PartnerLogos";

export default function AboutPage() {
  return (
    <>
      
      <PageHeader 
        title="About Us" 
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About" }
        ]} 
      />
      
      <TopPromo />
      
      <AboutSection />
      
      <FeaturesSection />
      
      <CounterSection />
      
      <TeamSection />
      
      <FaqSection />
      
      <PartnerLogos />
      
    </>
  );
}
