import PageHeader from "@/components/layout/PageHeader";
import CartSection from "@/components/sections/CartSection";
import ShopServicesSection from "@/components/sections/ShopServicesSection";

export default function CartPage() {
  return (
    <>
      
      <PageHeader 
        title="Cart" 
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Cart" }
        ]} 
      />
      
      <CartSection />
      
      <ShopServicesSection />
      
    </>
  );
}
