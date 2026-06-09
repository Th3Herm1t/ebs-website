import PageHeader from "@/components/layout/PageHeader";
import SingleEventSection from "@/components/sections/SingleEventSection";

export default function SingleEventPage() {
  return (
    <>
      
      <PageHeader 
        title="Single Event" 
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Single Event" }
        ]} 
      />
      
      <SingleEventSection />
      
    </>
  );
}
