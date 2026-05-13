"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion } from "motion/react";
import { Star, Heart, RefreshCw, Search, ShoppingBag, ShoppingCart } from "lucide-react";
import { Facebook, Twitter, Instagram, Linkedin, Youtube } from "@/components/ui/social-icons";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const relatedProducts = [
  { id: 1, img1: "/images/shop/1.jpg", img2: "/images/shop/2.jpg", title: "Product Title", price: 16.00, oldPrice: 20.00, label: "Sale", rating: 5 },
  { id: 2, img1: "/images/shop/3.jpg", img2: "/images/shop/4.jpg", title: "Product Title", price: 16.00, oldPrice: 20.00, label: "-20%", rating: 5 },
  { id: 3, img1: "/images/shop/5.jpg", img2: "/images/shop/6.jpg", title: "Product Title", price: 16.00, oldPrice: 20.00, label: "Sale", rating: 4 },
  { id: 4, img1: "/images/shop/7.jpg", img2: "/images/shop/8.jpg", title: "Product Title", price: 16.00, oldPrice: 20.00, label: "New", rating: 5 },
];

export default function SingleShopSection() {
  const [quantity, setQuantity] = useState(1);
  const [activeSize, setActiveSize] = useState("s");
  const [activeColor, setActiveColor] = useState("color 1");

  return (
    <>
      <section className="prdct_dtls_page_area section-padding py-[100px]">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap -mx-4">
            {/* Product Details Image */}
            <div className="w-full md:w-1/2 px-4 mb-[30px] md:mb-0">
              <div className="pd_img overflow-hidden">
                <Image 
                  src="/images/shop/3.jpg" 
                  alt="Product Image" 
                  width={570} 
                  height={650} 
                  className="w-full h-auto border border-[#ededed] p-[10px]"
                />
              </div>
            </div>
            
            {/* Product Details Content */}
            <div className="w-full md:w-1/2 px-4">
              <div className="prdct_dtls_content">
                <Link href="#" className="pd_title text-[30px] text-[#222] font-semibold mb-[15px] block hover:text-penn-green transition-colors">
                  Best Selling ebook
                </Link>
                
                <div className="pd_price_dtls flex items-center justify-between border-b border-[#ededed] pb-[20px] mb-[20px]">
                  {/* Product Price */}
                  <div className="pd_price">
                    <span className="new text-[24px] text-penn-green font-bold mr-[10px]">$ 20.00</span>
                    <span className="old text-[16px] text-[#999] line-through">(60.00)</span>
                  </div>
                  {/* Product Ratting */}
                  <div className="pd_ratng flex text-[#ffac9a] text-[14px]">
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                  </div>
                </div>
                
                <div className="pd_text mb-[20px]">
                  <h4 className="text-[16px] text-[#333] font-bold uppercase mb-[10px]">overview:</h4>
                  <p className="text-penn-body text-[15px] leading-[26px]">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tem portul indunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.
                  </p>
                </div>
                
                <div className="pd_img_size mb-[20px] flex items-center gap-[10px]">
                  <h4 className="text-[16px] text-[#333] font-bold uppercase m-0 mr-[10px]">size:</h4>
                  {["s", "m", "l", "xl", "xxl"].map(size => (
                    <button 
                      key={size}
                      onClick={() => setActiveSize(size)}
                      className={`w-[40px] h-[40px] border border-[#ededed] uppercase text-[14px] font-bold transition-colors ${activeSize === size ? 'bg-penn-green text-white border-penn-green' : 'text-[#333] hover:bg-penn-green hover:text-white hover:border-penn-green'}`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
                
                <div className="pd_clr_qntty_dtls flex flex-wrap gap-[30px] mb-[30px]">
                  <div className="pd_clr flex items-center gap-[10px]">
                    <h4 className="text-[16px] text-[#333] font-bold uppercase m-0 mr-[10px]">color:</h4>
                    <button 
                      onClick={() => setActiveColor("color 1")}
                      className={`w-[30px] h-[30px] rounded-full indent-[-9999px] border-2 transition-all ${activeColor === "color 1" ? "border-penn-navy shadow-md scale-110" : "border-transparent"}`}
                      style={{ background: "#ffac9a" }}
                    >color 1</button>
                    <button 
                      onClick={() => setActiveColor("color 2")}
                      className={`w-[30px] h-[30px] rounded-full indent-[-9999px] border-2 transition-all ${activeColor === "color 2" ? "border-penn-navy shadow-md scale-110" : "border-transparent"}`}
                      style={{ background: "#ddd" }}
                    >color 2</button>
                    <button 
                      onClick={() => setActiveColor("color 3")}
                      className={`w-[30px] h-[30px] rounded-full indent-[-9999px] border-2 transition-all ${activeColor === "color 3" ? "border-penn-green shadow-md scale-110" : "border-transparent"}`}
                      style={{ background: "#000000" }}
                    >color 3</button>
                  </div>
                  <div className="pd_qntty_area flex items-center gap-[15px]">
                    <h4 className="text-[16px] text-[#333] font-bold uppercase m-0">quantity:</h4>
                    <div className="pd_qty">
                      <input 
                        type="number" 
                        value={quantity} 
                        onChange={(e) => setQuantity(Number(e.target.value))}
                        min="1"
                        className="w-[80px] h-[45px] border border-[#ededed] text-center text-[16px] font-bold outline-none text-[#333]"
                      />
                    </div>
                  </div>
                </div>
                
                {/* Product Action */}
                <div className="pd_btn flex gap-[10px] mb-[30px]">
                  <button className="bg-penn-green text-white text-[14px] font-bold uppercase px-[30px] h-[45px] rounded-[30px] transition-colors hover:bg-penn-navy">
                    add to bag
                  </button>
                  <button className="w-[45px] h-[45px] border border-[#ededed] text-[#333] flex items-center justify-center rounded-[30px] transition-colors hover:bg-penn-green hover:text-white hover:border-penn-green">
                    <Heart className="w-4 h-4" />
                  </button>
                  <button className="w-[45px] h-[45px] border border-[#ededed] text-[#333] flex items-center justify-center rounded-[30px] transition-colors hover:bg-penn-green hover:text-white hover:border-penn-green">
                    <RefreshCw className="w-4 h-4" />
                  </button>
                </div>
                
                <div className="pd_share_area flex items-center gap-[15px]">
                  <h4 className="text-[16px] text-[#333] font-bold uppercase m-0">share this on:</h4>
                  <div className="pd_social_icon flex gap-[10px]">
                    <Link href="#" className="w-[35px] h-[35px] border border-[#ededed] text-[#333] flex items-center justify-center rounded-full transition-colors hover:bg-penn-green hover:text-white hover:border-penn-green">
                      <Facebook className="w-4 h-4" />
                    </Link>
                    <Link href="#" className="w-[35px] h-[35px] border border-[#ededed] text-[#333] flex items-center justify-center rounded-full transition-colors hover:bg-penn-green hover:text-white hover:border-penn-green">
                      <Twitter className="w-4 h-4" />
                    </Link>
                    <Link href="#" className="w-[35px] h-[35px] border border-[#ededed] text-[#333] flex items-center justify-center rounded-full transition-colors hover:bg-penn-green hover:text-white hover:border-penn-green">
                      <Instagram className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="row mt-[60px]">
            <div className="col-xs-12 w-full">					
              <div className="pd_tab_area">									
                <Tabs defaultValue="description" className="w-full">
                  <TabsList className="bg-transparent border-b border-[#ededed] w-full justify-start rounded-none h-auto p-0 flex gap-[20px] mb-[30px]">
                    <TabsTrigger value="description" className="data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:text-penn-green data-[state=active]:border-b-2 data-[state=active]:border-penn-green rounded-none border-b-2 border-transparent px-0 pb-[10px] text-[18px] font-bold uppercase text-[#333] bg-transparent shadow-none hover:text-penn-green">Description</TabsTrigger>
                    <TabsTrigger value="information" className="data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:text-penn-green data-[state=active]:border-b-2 data-[state=active]:border-penn-green rounded-none border-b-2 border-transparent px-0 pb-[10px] text-[18px] font-bold uppercase text-[#333] bg-transparent shadow-none hover:text-penn-green">Information</TabsTrigger>
                    <TabsTrigger value="reviews" className="data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:text-penn-green data-[state=active]:border-b-2 data-[state=active]:border-penn-green rounded-none border-b-2 border-transparent px-0 pb-[10px] text-[18px] font-bold uppercase text-[#333] bg-transparent shadow-none hover:text-penn-green">Reviews</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="description" className="text-penn-body text-[15px] leading-[26px]">
                    <p className="mb-[15px]">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <ul className="list-disc pl-[20px] mb-[15px]">
                      <li>Lorem ipsum dolor sit amet, consectetur product</li>
                      <li>Duis aute irure dolor in reprehenderit in voluptate velit esse</li>
                      <li>Excepteur sinted occaecat cupidatat non proident products</li>
                      <li>Voluptate velit esse cillum.</li>
                    </ul>	
                  </TabsContent>
                  
                  <TabsContent value="information" className="text-penn-body text-[15px] leading-[26px]">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>										  
                  </TabsContent>
                  
                  <TabsContent value="reviews">
                    <div className="flex flex-wrap -mx-[15px]">
                      <div className="w-full md:w-1/2 px-[15px]">
                        <div className="pda_rtng_area mb-[30px]">
                          <h4 className="text-[20px] font-bold text-[#333] m-0">4.5 <span className="text-[14px] text-[#666] font-normal">(Overall)</span></h4>
                          <span className="text-[14px] text-[#666]">Based on 9 Comments</span>
                        </div>
                        <div className="rtng_cmnt_area">
                          <div className="single_rtng_cmnt border border-[#ededed] p-[20px] mb-[20px]">
                            <div className="rtngs flex text-[#ffac9a] text-[12px] mb-[10px]">
                              <Star className="w-3 h-3 fill-current" /><Star className="w-3 h-3 fill-current" /><Star className="w-3 h-3 fill-current" /><Star className="w-3 h-3 fill-current" /><Star className="w-3 h-3 text-[#e3e3e3]" />
                              <span className="ml-[5px] text-[#666]">(4)</span>
                            </div>
                            <div className="rtng_author flex items-center gap-[10px] mb-[10px]">
                              <h3 className="text-[16px] font-bold text-[#333] m-0">John Doe</h3>
                              <span className="text-[12px] text-[#999]">11:20</span>
                              <span className="text-[12px] text-[#999]">6 May 2023</span>
                            </div>
                            <p className="text-penn-body text-[14px] m-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nost rud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                          </div>
                        </div>
                      </div>
                      <div className="w-full md:w-1/2 px-[15px]">
                        <div className="rtng_cmnt_form_area bg-[#f9f9f9] p-[30px]">
                          <h3 className="text-[18px] font-bold text-[#333] uppercase mb-[20px]">Add your Comments</h3>
                          <div className="rtng_form">
                            <form>
                              <div className="mb-[15px]"><input type="text" placeholder="Type your name" className="w-full h-[45px] border border-[#ededed] px-[15px] outline-none" /></div>
                              <div className="mb-[15px]"><input type="text" placeholder="Type your email address" className="w-full h-[45px] border border-[#ededed] px-[15px] outline-none" /></div>
                              <div className="mb-[15px]"><textarea placeholder="Write a review" className="w-full h-[120px] border border-[#ededed] p-[15px] outline-none resize-none"></textarea></div>
                              <button className="bg-penn-green text-white font-bold uppercase px-[30px] h-[45px] rounded-[30px] transition-colors hover:bg-penn-navy w-full">Add Review</button>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Product Area */}
      <div className="related_prdct_area pb-[100px]">
        <div className="container mx-auto px-4">		
          <div className="rp_title text-center mb-[40px]">
            <h3 className="text-[24px] font-bold text-penn-navy uppercase m-0">Related products</h3>
          </div>
          
          <div className="flex flex-wrap -mx-[15px]">
            {relatedProducts.map((product) => (
              <div key={product.id} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-[15px] mb-[30px] lg:mb-0">
                <div className="product-grid bg-white border border-[#ededed] text-center rounded-[6px] overflow-hidden group transition-all duration-300 hover:shadow-[0_10px_20px_rgba(0,0,0,0.05)] relative">
                  <div className="product-image relative overflow-hidden">
                    <Link href="/shop-single" className="block relative">
                      <Image src={product.img1} alt={product.title} width={300} height={350} className="w-full h-auto transition-opacity duration-300 group-hover:opacity-0" />
                      <Image src={product.img2} alt={product.title} width={300} height={350} className="w-full h-auto absolute top-0 left-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    </Link>
                    <ul className="social absolute bottom-[-50px] left-0 w-full p-0 m-0 list-none flex justify-center gap-[5px] transition-all duration-300 group-hover:bottom-[15px] opacity-0 group-hover:opacity-100">
                      <li><Link href="#" className="w-[40px] h-[40px] bg-white text-penn-navy flex items-center justify-center rounded-[3px] transition-colors hover:bg-penn-green hover:text-white" title="Quick View"><Search className="w-4 h-4" /></Link></li>
                      <li><Link href="#" className="w-[40px] h-[40px] bg-white text-penn-navy flex items-center justify-center rounded-[3px] transition-colors hover:bg-penn-green hover:text-white" title="Add to Wishlist"><ShoppingBag className="w-4 h-4" /></Link></li>
                      <li><Link href="#" className="w-[40px] h-[40px] bg-white text-penn-navy flex items-center justify-center rounded-[3px] transition-colors hover:bg-penn-green hover:text-white" title="Add to Cart"><ShoppingCart className="w-4 h-4" /></Link></li>
                    </ul>
                    <span className="product-new-label absolute top-[15px] left-[15px] bg-penn-green text-white text-[12px] font-bold uppercase py-[3px] px-[10px] rounded-[3px]">{product.label}</span>
                  </div>
                  <ul className="rating flex justify-center gap-[2px] mt-[20px] mb-[10px] p-0 list-none">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <li key={star}><Star className={`w-[14px] h-[14px] ${star <= product.rating ? 'fill-[#ffb503] text-[#ffb503]' : 'fill-[#e3e3e3] text-[#e3e3e3]'}`} /></li>
                    ))}
                  </ul>
                  <div className="product-content px-[15px] pb-[25px]">
                    <h3 className="title m-0 text-[18px] font-bold"><Link href="/shop-single" className="text-penn-navy transition-colors hover:text-penn-green">{product.title}</Link></h3>
                    <div className="price text-penn-green font-bold text-[18px] mt-[10px]">${product.price.toFixed(2)} <span className="text-[#999] text-[14px] line-through ml-[5px] font-normal">${product.oldPrice.toFixed(2)}</span></div>
                    <div className="mt-[15px] overflow-hidden"><Link href="/cart" className="add-to-cart inline-block text-[14px] font-bold text-penn-navy uppercase transition-colors hover:text-penn-green">+ Add To Cart</Link></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
