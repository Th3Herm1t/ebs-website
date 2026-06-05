import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageHeader from "@/components/layout/PageHeader";
import NotFoundSection from "@/components/sections/NotFoundSection";

export default function NotFound() {
  return (
    <>
      <Header />
      
      <PageHeader 
        title="Page Not Found" 
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "404" }
        ]} 
      />
      
      <NotFoundSection />
      
      <Footer />
    </>
  );
}
