import PageHeader from "@/components/layout/PageHeader";
import SingleShopSection from "@/components/sections/SingleShopSection";

export default function SingleShopPage() {
  return (
    <>
      
      <PageHeader 
        title="Single Shop Page" 
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "single shop" }
        ]} 
      />
      
      <SingleShopSection />
      
    </>
  );
}
