import PageHeader from "@/components/layout/PageHeader";
import SingleTeamSection from "@/components/sections/SingleTeamSection";
import CounterSection from "@/components/sections/CounterSection";
import CoursesSection from "@/components/sections/CoursesSection";

export default function TeamDetailsPage() {
  return (
    <>
      
      <PageHeader 
        title="Instructor Details" 
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Team Details" }
        ]} 
      />
      
      <SingleTeamSection />
      
      <CounterSection />
      <CoursesSection />
      
    </>
  );
}
