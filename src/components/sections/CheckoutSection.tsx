"use client";

import Image from "next/image";
import Link from "next/link";

export default function CheckoutSection() {
  return (
    <section className="shop checkout section py-[100px] bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap -mx-[15px]"> 
          
          <div className="w-full lg:w-2/3 px-[15px] mb-[50px] lg:mb-0">
            <div className="checkout-form bg-[#f9f9f9] p-[40px] border border-[#ededed]">
              <h2 className="text-[24px] font-bold text-[#333] mb-[10px] uppercase">Make Your Checkout Here</h2>
              <p className="text-[15px] text-[#666] mb-[30px]">Please register in order to checkout more quickly</p>
              
              {/* Form */}
              <form className="form" method="post" action="#">
                <div className="flex flex-wrap -mx-[15px]">
                  <div className="w-full md:w-1/2 px-[15px] mb-[20px]">
                    <div className="form-group">
                      <label className="text-[14px] text-[#333] font-semibold mb-[10px] block">First Name<span className="text-[#ff0000]">*</span></label>
                      <input type="text" name="name" placeholder="" required className="w-full h-[50px] px-[20px] border border-[#ededed] bg-white outline-none text-[14px] text-[#333] transition-colors focus:border-penn-green" />
                    </div>
                  </div>
                  <div className="w-full md:w-1/2 px-[15px] mb-[20px]">
                    <div className="form-group">
                      <label className="text-[14px] text-[#333] font-semibold mb-[10px] block">Last Name<span className="text-[#ff0000]">*</span></label>
                      <input type="text" name="name" placeholder="" required className="w-full h-[50px] px-[20px] border border-[#ededed] bg-white outline-none text-[14px] text-[#333] transition-colors focus:border-penn-green" />
                    </div>
                  </div>
                  <div className="w-full md:w-1/2 px-[15px] mb-[20px]">
                    <div className="form-group">
                      <label className="text-[14px] text-[#333] font-semibold mb-[10px] block">Email Address<span className="text-[#ff0000]">*</span></label>
                      <input type="email" name="email" placeholder="" required className="w-full h-[50px] px-[20px] border border-[#ededed] bg-white outline-none text-[14px] text-[#333] transition-colors focus:border-penn-green" />
                    </div>
                  </div>
                  <div className="w-full md:w-1/2 px-[15px] mb-[20px]">
                    <div className="form-group">
                      <label className="text-[14px] text-[#333] font-semibold mb-[10px] block">Phone Number<span className="text-[#ff0000]">*</span></label>
                      <input type="number" name="number" placeholder="" required className="w-full h-[50px] px-[20px] border border-[#ededed] bg-white outline-none text-[14px] text-[#333] transition-colors focus:border-penn-green" />
                    </div>
                  </div>
                  <div className="w-full md:w-1/2 px-[15px] mb-[20px]">
                    <div className="form-group">
                      <label className="text-[14px] text-[#333] font-semibold mb-[10px] block">Country<span className="text-[#ff0000]">*</span></label>
                      <select name="country_name" className="w-full h-[50px] px-[20px] border border-[#ededed] bg-white outline-none text-[14px] text-[#333] transition-colors focus:border-penn-green appearance-none">
                        <option value="US">United States</option>
                        <option value="UK">United Kingdom</option>
                        <option value="CA">Canada</option>
                        <option value="AU">Australia</option>
                      </select>
                    </div>
                  </div>
                  <div className="w-full md:w-1/2 px-[15px] mb-[20px]">
                    <div className="form-group">
                      <label className="text-[14px] text-[#333] font-semibold mb-[10px] block">State / Division<span className="text-[#ff0000]">*</span></label>
                      <select name="state-province" className="w-full h-[50px] px-[20px] border border-[#ededed] bg-white outline-none text-[14px] text-[#333] transition-colors focus:border-penn-green appearance-none">
                        <option value="NY">New York</option>
                        <option value="LA">Los Angeles</option>
                        <option value="CH">Chicago</option>
                        <option value="HO">Houston</option>
                      </select>
                    </div>
                  </div>
                  <div className="w-full md:w-1/2 px-[15px] mb-[20px]">
                    <div className="form-group">
                      <label className="text-[14px] text-[#333] font-semibold mb-[10px] block">Address Line 1<span className="text-[#ff0000]">*</span></label>
                      <input type="text" name="address" placeholder="" required className="w-full h-[50px] px-[20px] border border-[#ededed] bg-white outline-none text-[14px] text-[#333] transition-colors focus:border-penn-green" />
                    </div>
                  </div>
                  <div className="w-full md:w-1/2 px-[15px] mb-[20px]">
                    <div className="form-group">
                      <label className="text-[14px] text-[#333] font-semibold mb-[10px] block">Address Line 2<span className="text-[#ff0000]">*</span></label>
                      <input type="text" name="address" placeholder="" required className="w-full h-[50px] px-[20px] border border-[#ededed] bg-white outline-none text-[14px] text-[#333] transition-colors focus:border-penn-green" />
                    </div>
                  </div>
                  <div className="w-full md:w-1/2 px-[15px] mb-[20px]">
                    <div className="form-group">
                      <label className="text-[14px] text-[#333] font-semibold mb-[10px] block">Postal Code<span className="text-[#ff0000]">*</span></label>
                      <input type="text" name="post" placeholder="" required className="w-full h-[50px] px-[20px] border border-[#ededed] bg-white outline-none text-[14px] text-[#333] transition-colors focus:border-penn-green" />
                    </div>
                  </div>
                  <div className="w-full md:w-1/2 px-[15px] mb-[20px]">
                    <div className="form-group">
                      <label className="text-[14px] text-[#333] font-semibold mb-[10px] block">Company<span className="text-[#ff0000]">*</span></label>
                      <select name="company_name" className="w-full h-[50px] px-[20px] border border-[#ededed] bg-white outline-none text-[14px] text-[#333] transition-colors focus:border-penn-green appearance-none">
                        <option value="MS">Microsoft</option>
                        <option value="AP">Apple</option>
                        <option value="GO">Google</option>
                      </select>
                    </div>
                  </div>
                  <div className="w-full px-[15px] mt-[10px]">
                    <div className="form-group create-account flex items-center gap-[10px]">
                      <input id="cbox" type="checkbox" className="w-[16px] h-[16px]" />
                      <label htmlFor="cbox" className="text-[15px] text-[#666] cursor-pointer">Create an account?</label>
                    </div>
                  </div>
                </div>
              </form>
              {/*/ End Form */}
            </div>
          </div>

          <div className="w-full lg:w-1/3 px-[15px]">
            <div className="order-details">
              
              {/* Order Widget */}
              <div className="single-widget mb-[30px] p-[30px] bg-[#f9f9f9] border border-[#ededed]">
                <h2 className="text-[18px] font-bold text-[#333] uppercase border-b border-[#ededed] pb-[15px] mb-[20px]">CART TOTALS</h2>
                <div className="content">
                  <ul className="list-none m-0 p-0">
                    <li className="flex justify-between text-[#666] text-[15px] mb-[15px]">Sub Total<span className="font-bold text-[#333]">$330.00</span></li>
                    <li className="flex justify-between text-[#666] text-[15px] mb-[15px]">(+) Shipping<span className="font-bold text-[#333]">$10.00</span></li>
                    <li className="flex justify-between text-[#666] text-[16px] font-bold border-t border-[#ededed] pt-[15px] mt-[15px]">Total<span className="text-penn-green">$340.00</span></li>
                  </ul>
                </div>
              </div>
              
              {/* Order Widget */}
              <div className="single-widget mb-[30px] p-[30px] bg-[#f9f9f9] border border-[#ededed]">
                <h2 className="text-[18px] font-bold text-[#333] uppercase border-b border-[#ededed] pb-[15px] mb-[20px]">Payments</h2>
                <div className="content">
                  <div className="checkbox flex flex-col gap-[15px]">
                    <label className="flex items-center gap-[10px] text-[15px] text-[#666] cursor-pointer" htmlFor="1">
                      <input name="payment" id="1" type="radio" className="w-[16px] h-[16px]" defaultChecked /> 
                      Check Payments
                    </label>
                    <label className="flex items-center gap-[10px] text-[15px] text-[#666] cursor-pointer" htmlFor="2">
                      <input name="payment" id="2" type="radio" className="w-[16px] h-[16px]" /> 
                      Cash On Delivery
                    </label>
                    <label className="flex items-center gap-[10px] text-[15px] text-[#666] cursor-pointer" htmlFor="3">
                      <input name="payment" id="3" type="radio" className="w-[16px] h-[16px]" /> 
                      PayPal
                    </label>
                  </div>
                </div>
              </div>
              
              {/* Payment Method Widget */}
              <div className="single-widget payment mb-[30px] p-[20px] bg-[#f9f9f9] border border-[#ededed] flex justify-center">
                <div className="content">
                  <Image src="/images/all-img/payment-method.png" width={220} height={30} alt="Payment Methods" className="w-full max-w-[220px] h-auto" />
                </div>
              </div>
              
              {/* Button Widget */}
              <div className="single-widget get-button">
                <div className="content">
                  <div className="button">
                    <Link href="/thank-you" className="block w-full h-[50px] leading-[50px] text-center bg-penn-green text-white text-[14px] font-bold uppercase transition-colors hover:bg-penn-navy">
                      proceed to checkout
                    </Link>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
