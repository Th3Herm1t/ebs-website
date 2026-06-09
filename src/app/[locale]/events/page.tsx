import PageHeader from "@/components/layout/PageHeader";
import AllEventsSection from "@/components/sections/AllEventsSection";

export default function EventsPage() {
  return (
    <>
      
      <PageHeader 
        title="All Event" 
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Event" }
        ]} 
      />
      
      <AllEventsSection />
      
    </>
  );
}
