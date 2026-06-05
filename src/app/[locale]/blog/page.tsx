import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageHeader from "@/components/layout/PageHeader";
import AllBlogSection from "@/components/sections/AllBlogSection";

export default function BlogPage() {
  return (
    <>
      <Header />
      
      <PageHeader 
        title="Latest Blog" 
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Blog" }
        ]} 
      />
      
      <AllBlogSection />
      
      <Footer />
    </>
  );
}
