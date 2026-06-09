import PageHeader from "@/components/layout/PageHeader";
import LoginSection from "@/components/sections/LoginSection";

export default function LoginPage() {
  return (
    <>
      
      <PageHeader 
        title="Login Page" 
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Login Page" }
        ]} 
      />
      
      <LoginSection />
      
    </>
  );
}
