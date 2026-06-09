import PageHeader from "@/components/layout/PageHeader";
import ShopGridSection from "@/components/sections/ShopGridSection";
import ShopServicesSection from "@/components/sections/ShopServicesSection";

export default function ShopPage() {
  return (
    <>
      
      <PageHeader 
        title="Shop Page" 
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "shop" }
        ]} 
      />
      
      <ShopGridSection />
      
      <ShopServicesSection />
      
    </>
  );
}
