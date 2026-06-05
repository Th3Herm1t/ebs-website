import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function ThankYouPage() {
  return (
    <>
      <Header />
      <section className="welcome-area relative h-[600px] bg-[#FFFAEE] flex items-center justify-center">
        <div className="container mx-auto px-4">
          <div className="row flex justify-center">
            <div className="w-full lg:w-2/3 text-center">
              <div className="hero-text">
                <h1 className="text-penn-green text-[60px] font-medium leading-[70px] mb-[20px] capitalize">Thank you for your e-mail.</h1>
                <h3 className="text-[#232434] text-[28px] font-semibold mb-[60px]">We Will contact you very soon.</h3>
                <Link href="/" className="back-home inline-block bg-transparent border-2 border-penn-green rounded-[500px] text-penn-green font-semibold uppercase px-[36px] py-[12px] transition-all duration-200 hover:bg-penn-green hover:text-white">
                  Back To Home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
