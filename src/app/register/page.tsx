import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageHeader from "@/components/layout/PageHeader";
import RegisterSection from "@/components/sections/RegisterSection";

export default function RegisterPage() {
  return (
    <>
      <Header />
      
      <PageHeader 
        title="Register Page" 
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Register" }
        ]} 
      />
      
      <RegisterSection />
      
      <Footer />
    </>
  );
}
