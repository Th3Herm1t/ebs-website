import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageHeader from "@/components/layout/PageHeader";
import CoursesSection from "@/components/sections/CoursesSection";

export default function Course3Page() {
  return (
    <>
      <Header />
      <PageHeader 
        title="Courses 03" 
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Courses 03" }
        ]} 
      />
      <div className="py-[50px]">
        <CoursesSection />
      </div>
      <Footer />
    </>
  );
}
