import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageHeader from "@/components/layout/PageHeader";
import CoursesSection from "@/components/sections/CoursesSection";

export default function CourseSidebarPage() {
  return (
    <>
      <Header />
      <PageHeader 
        title="Course Sidebar" 
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Course Sidebar" }
        ]} 
      />
      <div className="py-[50px]">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full lg:w-8/12 px-4">
              <CoursesSection />
            </div>
            <div className="w-full lg:w-4/12 px-4 mt-8 lg:mt-0">
              {/* Basic Sidebar Mock */}
              <div className="sidebar border border-[#ededed] p-6 rounded-lg bg-[#f9f9f9]">
                <h3 className="text-[20px] font-bold text-penn-navy mb-4 border-b border-[#ededed] pb-3">Search</h3>
                <input type="text" placeholder="Search Courses..." className="w-full h-[50px] px-4 border border-[#ededed] mb-8 outline-none focus:border-penn-green transition-colors" />
                
                <h3 className="text-[20px] font-bold text-penn-navy mb-4 border-b border-[#ededed] pb-3">Categories</h3>
                <ul className="list-none p-0 m-0 space-y-3">
                  <li><a href="#" className="text-penn-body hover:text-penn-green transition-colors flex justify-between"><span>Web Design</span> <span>(12)</span></a></li>
                  <li><a href="#" className="text-penn-body hover:text-penn-green transition-colors flex justify-between"><span>Development</span> <span>(25)</span></a></li>
                  <li><a href="#" className="text-penn-body hover:text-penn-green transition-colors flex justify-between"><span>Graphic Design</span> <span>(08)</span></a></li>
                  <li><a href="#" className="text-penn-body hover:text-penn-green transition-colors flex justify-between"><span>Marketing</span> <span>(15)</span></a></li>
                  <li><a href="#" className="text-penn-body hover:text-penn-green transition-colors flex justify-between"><span>Photography</span> <span>(05)</span></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
