import PageHeader from "@/components/layout/PageHeader";
import CoursesSection from "@/components/sections/CoursesSection";

export default function CoursesPage() {
  return (
    <>
      
      <PageHeader 
        title="All Course" 
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Course" }
        ]} 
      />
      <CoursesSection />
      
    </>
  );
}
