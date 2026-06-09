import PageHeader from "@/components/layout/PageHeader";
import SingleCourseSection from "@/components/sections/SingleCourseSection";

export default function SingleCoursePage() {
  return (
    <>
      
      <PageHeader 
        title="Course Details" 
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Course Details" }
        ]} 
      />
      
      <SingleCourseSection />
      
    </>
  );
}
