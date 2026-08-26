import PageHeader from "@/components/layout/PageHeader";
import NotFoundSection from "@/components/sections/NotFoundSection";

export default function NotFound() {
  return (
    <>
      
      <PageHeader 
        title="Page Not Found" 
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "404" }
        ]} 
      />
      
      <NotFoundSection />
      
    </>
  );
}
