import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageHeader from "@/components/layout/PageHeader";
import CoursesSection from "@/components/sections/CoursesSection";

export default function CoursesPage() {
  return (
    <>
      <Header />
      
      <PageHeader 
        title="All Course" 
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Course" }
        ]} 
      />
      <CoursesSection />
      
      <Footer />
    </>
  );
}
