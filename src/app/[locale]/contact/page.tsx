import PageHeader from "@/components/layout/PageHeader";
import ContactInfoSection from "@/components/sections/ContactInfoSection";
import ContactFormSection from "@/components/sections/ContactFormSection";

export default function ContactPage() {
  return (
    <>
      
      <PageHeader 
        title="Get In Touch" 
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Contact" }
        ]} 
      />
      
      <ContactInfoSection />
      
      <ContactFormSection />
      
    </>
  );
}
