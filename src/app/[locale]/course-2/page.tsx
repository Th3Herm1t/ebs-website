import PageHeader from "@/components/layout/PageHeader";
import CoursesSection from "@/components/sections/CoursesSection";

export default function Course2Page() {
  return (
    <>
      <PageHeader 
        title="Courses 02" 
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Courses 02" }
        ]} 
      />
      <div className="py-[50px]">
        <CoursesSection />
      </div>
    </>
  );
}
