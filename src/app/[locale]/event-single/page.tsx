import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageHeader from "@/components/layout/PageHeader";
import SingleEventSection from "@/components/sections/SingleEventSection";

export default function SingleEventPage() {
  return (
    <>
      <Header />
      
      <PageHeader 
        title="Single Event" 
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Single Event" }
        ]} 
      />
      
      <SingleEventSection />
      
      <Footer />
    </>
  );
}
