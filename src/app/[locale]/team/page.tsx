import PageHeader from "@/components/layout/PageHeader";
import AllTeamSection from "@/components/sections/AllTeamSection";

export default function TeamPage() {
  return (
    <>
      
      <PageHeader 
        title="Team Instructor" 
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Team Page" }
        ]} 
      />
      
      <AllTeamSection />
      
    </>
  );
}
