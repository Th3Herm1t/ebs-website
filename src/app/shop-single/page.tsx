import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageHeader from "@/components/layout/PageHeader";
import SingleShopSection from "@/components/sections/SingleShopSection";

export default function SingleShopPage() {
  return (
    <>
      <Header />
      
      <PageHeader 
        title="Single Shop Page" 
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "single shop" }
        ]} 
      />
      
      <SingleShopSection />
      
      <Footer />
    </>
  );
}
