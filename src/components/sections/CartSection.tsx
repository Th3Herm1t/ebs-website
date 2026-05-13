"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Trash, Minus, Plus } from "lucide-react";

export default function CartSection() {
  const [cartItems, setCartItems] = useState([
    { id: 1, image: "/images/shop/cart1.jpg", name: "Top Selling Book", desc: "Maboriosam in a tonto nesciung eget distingy magndapibus.", price: 110.00, qty: 1 },
    { id: 2, image: "/images/shop/cart2.jpg", name: "Best Seller", desc: "Maboriosam in a tonto nesciung eget distingy magndapibus.", price: 110.00, qty: 2 },
    { id: 3, image: "/images/shop/cart3.jpg", name: "Most Wanted", desc: "Maboriosam in a tonto nesciung eget distingy magndapibus.", price: 110.00, qty: 3 },
  ]);

  const updateQty = (id: number, increment: number) => {
    setCartItems(items => 
      items.map(item => {
        if (item.id === id) {
          const newQty = Math.max(1, item.qty + increment);
          return { ...item, qty: newQty };
        }
        return item;
      })
    );
  };

  const removeItem = (id: number) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  return (
    <div className="shopping-cart py-[100px] bg-white">
      <div className="container mx-auto px-4">
        <div className="row flex flex-wrap -mx-[15px]">
          <div className="w-full px-[15px]">
            {/* Shopping Summery */}
            <div className="overflow-x-auto">
              <table className="table-auto w-full text-left bg-white">
                <thead>
                  <tr className="bg-[#222] text-white">
                    <th className="py-[12px] px-[20px] font-semibold text-[15px] uppercase">PRODUCT</th>
                    <th className="py-[12px] px-[20px] font-semibold text-[15px] uppercase">NAME</th>
                    <th className="py-[12px] px-[20px] font-semibold text-[15px] uppercase text-center">UNIT PRICE</th>
                    <th className="py-[12px] px-[20px] font-semibold text-[15px] uppercase text-center">QUANTITY</th>
                    <th className="py-[12px] px-[20px] font-semibold text-[15px] uppercase text-center">TOTAL</th> 
                    <th className="py-[12px] px-[20px] font-semibold text-[15px] uppercase text-center"><Trash className="w-4 h-4 mx-auto" /></th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems.map((item) => (
                    <tr key={item.id} className="border-b border-[#ededed]">
                      <td className="py-[20px] px-[20px]">
                        <Image src={item.image} alt={item.name} width={80} height={80} className="rounded" />
                      </td>
                      <td className="py-[20px] px-[20px]">
                        <p className="font-bold text-[#333] text-[16px] mb-[5px]"><Link href="/shop-single" className="hover:text-penn-green transition-colors">{item.name}</Link></p>
                        <p className="text-penn-body text-[14px] leading-[22px] max-w-[300px]">{item.desc}</p>
                      </td>
                      <td className="py-[20px] px-[20px] text-center">
                        <span className="text-[#333] font-bold">${item.price.toFixed(2)}</span>
                      </td>
                      <td className="py-[20px] px-[20px] text-center">
                        <div className="inline-flex border border-[#ededed] rounded overflow-hidden">
                          <button 
                            onClick={() => updateQty(item.id, -1)} 
                            className="w-[40px] h-[40px] flex items-center justify-center bg-[#f9f9f9] text-[#333] transition-colors hover:bg-penn-green hover:text-white"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <input 
                            type="text" 
                            readOnly 
                            value={item.qty} 
                            className="w-[50px] h-[40px] text-center border-x border-[#ededed] text-[#333] font-bold outline-none"
                          />
                          <button 
                            onClick={() => updateQty(item.id, 1)} 
                            className="w-[40px] h-[40px] flex items-center justify-center bg-[#f9f9f9] text-[#333] transition-colors hover:bg-penn-green hover:text-white"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                      </td>
                      <td className="py-[20px] px-[20px] text-center">
                        <span className="text-[#333] font-bold">${(item.price * item.qty).toFixed(2)}</span>
                      </td>
                      <td className="py-[20px] px-[20px] text-center">
                        <button onClick={() => removeItem(item.id)} className="text-[#666] hover:text-[#ff0000] transition-colors">
                          <Trash className="w-4 h-4 mx-auto" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {/*/ End Shopping Summery */}
          </div>
        </div>
        
        <div className="row flex flex-wrap -mx-[15px] mt-[50px]">
          <div className="w-full px-[15px]">
            {/* Total Amount */}
            <div className="total-amount p-[30px] bg-[#f9f9f9] border border-[#ededed]">
              <div className="flex flex-wrap -mx-[15px]">
                <div className="w-full lg:w-2/3 md:w-5/12 px-[15px] mb-[30px] md:mb-0">
                  <div className="left">
                    <div className="coupon flex flex-wrap gap-[10px] mb-[20px]">
                      <input 
                        name="Coupon" 
                        placeholder="Enter Your Coupon" 
                        className="h-[50px] px-[20px] border border-[#ededed] outline-none text-[14px] text-[#333] w-full max-w-[250px]"
                      />
                      <button className="h-[50px] px-[30px] bg-[#333] text-white font-bold uppercase transition-colors hover:bg-penn-green">
                        Apply
                      </button>
                    </div>
                    <div className="checkbox flex items-center gap-[10px]">
                      <input name="news" id="2" type="checkbox" className="w-[16px] h-[16px]" />
                      <label htmlFor="2" className="text-penn-body text-[15px] cursor-pointer">Shipping (+10$)</label>
                    </div>
                  </div>
                </div>
                <div className="w-full lg:w-1/3 md:w-7/12 px-[15px]">
                  <div className="right">
                    <ul className="list-none p-0 m-0 border-b border-[#ededed] pb-[20px] mb-[20px]">
                      <li className="flex justify-between text-[#333] text-[15px] font-semibold mb-[15px]">
                        Cart Subtotal <span className="font-bold">$330.00</span>
                      </li>
                      <li className="flex justify-between text-[#333] text-[15px] font-semibold mb-[15px]">
                        Shipping <span className="font-bold">Free</span>
                      </li>
                      <li className="flex justify-between text-[#333] text-[15px] font-semibold mb-[15px]">
                        You Save <span className="font-bold">$20.00</span>
                      </li>
                      <li className="flex justify-between text-[#333] text-[18px] font-bold mt-[20px] pt-[20px] border-t border-[#ededed]">
                        You Pay <span className="text-penn-green">$310.00</span>
                      </li>
                    </ul>
                    <div className="button5 flex flex-wrap gap-[15px]">
                      <Link href="/checkout" className="inline-block px-[30px] h-[50px] leading-[48px] bg-penn-green text-white font-bold uppercase transition-colors hover:bg-penn-navy text-center">
                        Checkout
                      </Link>
                      <Link href="/shop" className="inline-block px-[30px] h-[50px] leading-[48px] bg-[#333] text-white font-bold uppercase transition-colors hover:bg-penn-green text-center">
                        Continue shopping
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*/ End Total Amount */}
          </div>
        </div>
      </div>
    </div>
  );
}
