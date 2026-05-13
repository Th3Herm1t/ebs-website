import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageHeader from "@/components/layout/PageHeader";
import CheckoutSection from "@/components/sections/CheckoutSection";
import ShopServicesSection from "@/components/sections/ShopServicesSection";

export default function CheckoutPage() {
  return (
    <>
      <Header />
      
      <PageHeader 
        title="Checkout page" 
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Checkout" }
        ]} 
      />
      
      <CheckoutSection />
      
      <ShopServicesSection />
      
      <Footer />
    </>
  );
}
