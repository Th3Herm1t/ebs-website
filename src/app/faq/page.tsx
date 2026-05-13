import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageHeader from "@/components/layout/PageHeader";
import FaqSection from "@/components/sections/FaqSection";

export default function FaqPage() {
  return (
    <>
      <Header />
      
      <PageHeader 
        title="Faq" 
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Faq" }
        ]} 
      />
      
      <FaqSection showImage={false} />
      
      <Footer />
    </>
  );
}
