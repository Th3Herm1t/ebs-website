import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageHeader from "@/components/layout/PageHeader";
import AllEventsSection from "@/components/sections/AllEventsSection";

export default function EventsPage() {
  return (
    <>
      <Header />
      
      <PageHeader 
        title="All Event" 
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Event" }
        ]} 
      />
      
      <AllEventsSection />
      
      <Footer />
    </>
  );
}
