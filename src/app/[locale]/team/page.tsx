import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageHeader from "@/components/layout/PageHeader";
import AllTeamSection from "@/components/sections/AllTeamSection";

export default function TeamPage() {
  return (
    <>
      <Header />
      
      <PageHeader 
        title="Team Instructor" 
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Team Page" }
        ]} 
      />
      
      <AllTeamSection />
      
      <Footer />
    </>
  );
}
