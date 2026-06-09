import PageHeader from "@/components/layout/PageHeader";
import AllBlogSection from "@/components/sections/AllBlogSection";

export default function BlogPage() {
  return (
    <>
      
      <PageHeader 
        title="Latest Blog" 
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Blog" }
        ]} 
      />
      
      <AllBlogSection />
      
    </>
  );
}
