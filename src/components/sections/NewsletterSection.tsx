"use client";

import { Send } from "lucide-react";

export default function NewsletterSection() {
  return (
    <section className="section-padding">
      <div className="max-w-[1140px] mx-auto px-4 text-center">
        <div className="max-w-[600px] mx-auto">
          <h3 className="text-[36px] max-md:text-[28px] text-penn-navy font-bold mb-[15px] leading-[46px]">
            Subscribe to our newsletter, We don&apos;t make any spam.
          </h3>
          <p className="text-penn-body mb-[30px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elitsed eiusmod tempor enim minim
          </p>
          <form className="flex border border-penn-border rounded-full overflow-hidden shadow-[0px_0px_30px_rgba(1,41,112,0.08)] max-w-[500px] mx-auto">
            <input
              type="email"
              placeholder="Enter Your Email Address"
              className="flex-1 py-4 px-5 text-sm outline-none border-0 font-medium"
            />
            <button type="button" className="bg-penn-green text-white w-[50px] h-[50px] rounded-full flex items-center justify-center m-1 transition-all hover:bg-penn-navy">
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
