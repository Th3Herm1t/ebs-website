import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageHeader from "@/components/layout/PageHeader";
import CoursesSection from "@/components/sections/CoursesSection";

export default function Course2Page() {
  return (
    <>
      <Header />
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
      <Footer />
    </>
  );
}
