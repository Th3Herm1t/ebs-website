"use client";

import Link from "next/link";

export default function RegisterSection() {
  return (
    <section className="login_register section-padding py-[100px] bg-[#f9f9f9]">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center -mx-[15px]">				
          <div className="w-full lg:w-1/2 px-[15px]">
            <div className="register bg-white p-[50px] shadow-[0_0_20px_rgba(0,0,0,0.05)] rounded-[6px]">
              <h4 className="login_register_title text-[24px] font-bold text-penn-navy mb-[30px]">Create a new account:</h4>
              <form>
                <div className="form-group mb-[20px]">
                  <label className="block text-[#333] text-[15px] font-semibold mb-[10px]">Username</label>
                  <input type="text" className="w-full h-[50px] px-[20px] bg-[#f9f9f9] border border-[#ededed] outline-none transition-colors focus:border-penn-green text-[#333]" name="username" required />
                </div>
                <div className="form-group mb-[20px]">
                  <label className="block text-[#333] text-[15px] font-semibold mb-[10px]">Full Name</label>
                  <input type="text" className="w-full h-[50px] px-[20px] bg-[#f9f9f9] border border-[#ededed] outline-none transition-colors focus:border-penn-green text-[#333]" name="name" required />
                </div>
                <div className="form-group mb-[20px]">
                  <label className="block text-[#333] text-[15px] font-semibold mb-[10px]">Email Address</label>
                  <input type="email" className="w-full h-[50px] px-[20px] bg-[#f9f9f9] border border-[#ededed] outline-none transition-colors focus:border-penn-green text-[#333]" name="email" required />
                </div>
                <div className="form-group mb-[30px]">
                  <label className="block text-[#333] text-[15px] font-semibold mb-[10px]">Password</label>
                  <input type="password" className="w-full h-[50px] px-[20px] bg-[#f9f9f9] border border-[#ededed] outline-none transition-colors focus:border-penn-green text-[#333]" name="password" required />
                </div>
                <div className="form-group w-full mb-[20px]">
                  <button className="bg-penn-green text-white text-[16px] font-bold uppercase px-[40px] h-[50px] rounded-[30px] transition-colors hover:bg-penn-navy w-full" type="submit" name="submit">Signup now</button>
                </div>
                <p className="text-penn-body text-[15px] m-0 text-center">Already have an account? <Link href="/login" className="text-penn-green font-bold hover:underline">Login</Link></p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
