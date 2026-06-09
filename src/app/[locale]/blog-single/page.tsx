import PageHeader from "@/components/layout/PageHeader";
import SingleBlogSection from "@/components/sections/SingleBlogSection";

export default function SingleBlogPage() {
  return (
    <>
      
      <PageHeader 
        title="Single Blog" 
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Single Blog" }
        ]} 
      />
      
      <SingleBlogSection />
      
    </>
  );
}
