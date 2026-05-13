import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageHeader from "@/components/layout/PageHeader";
import LoginSection from "@/components/sections/LoginSection";

export default function LoginPage() {
  return (
    <>
      <Header />
      
      <PageHeader 
        title="Login Page" 
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Login Page" }
        ]} 
      />
      
      <LoginSection />
      
      <Footer />
    </>
  );
}
