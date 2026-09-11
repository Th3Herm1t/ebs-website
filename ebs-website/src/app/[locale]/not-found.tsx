import PageHeader from "@/components/layout/PageHeader";
import NotFoundSection from "@/components/sections/NotFoundSection";
import { LocalizedRoute } from "@/components/shared";

export default function NotFound() {
  return (
    <LocalizedRoute>
      
      <PageHeader 
        title="Page Not Found" 
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "404" }
        ]} 
      />
      
      <NotFoundSection />
      
    </LocalizedRoute>
  );
}
