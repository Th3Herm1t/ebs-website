import PageHeader from "@/components/layout/PageHeader";
import RegisterSection from "@/components/sections/RegisterSection";

export default function RegisterPage() {
  return (
    <>
      
      <PageHeader 
        title="Register Page" 
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Register" }
        ]} 
      />
      
      <RegisterSection />
      
    </>
  );
}
