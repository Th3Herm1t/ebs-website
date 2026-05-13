import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageHeader from "@/components/layout/PageHeader";
import ShopGridSection from "@/components/sections/ShopGridSection";
import ShopServicesSection from "@/components/sections/ShopServicesSection";

export default function ShopPage() {
  return (
    <>
      <Header />
      
      <PageHeader 
        title="Shop Page" 
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "shop" }
        ]} 
      />
      
      <ShopGridSection />
      
      <ShopServicesSection />
      
      <Footer />
    </>
  );
}
