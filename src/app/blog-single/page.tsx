import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageHeader from "@/components/layout/PageHeader";
import SingleBlogSection from "@/components/sections/SingleBlogSection";

export default function SingleBlogPage() {
  return (
    <>
      <Header />
      
      <PageHeader 
        title="Single Blog" 
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Single Blog" }
        ]} 
      />
      
      <SingleBlogSection />
      
      <Footer />
    </>
  );
}
