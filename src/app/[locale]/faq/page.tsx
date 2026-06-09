import PageHeader from "@/components/layout/PageHeader";
import FaqSection from "@/components/sections/FaqSection";

export default function FaqPage() {
  return (
    <>
      
      <PageHeader 
        title="Faq" 
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Faq" }
        ]} 
      />
      
      <FaqSection showImage={false} />
      
    </>
  );
}
