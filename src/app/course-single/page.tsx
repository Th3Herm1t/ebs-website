import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageHeader from "@/components/layout/PageHeader";
import SingleCourseSection from "@/components/sections/SingleCourseSection";

export default function SingleCoursePage() {
  return (
    <>
      <Header />
      
      <PageHeader 
        title="Course Details" 
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Course Details" }
        ]} 
      />
      
      <SingleCourseSection />
      
      <Footer />
    </>
  );
}
