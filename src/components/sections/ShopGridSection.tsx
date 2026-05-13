"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Search, ShoppingBag, ShoppingCart, Star } from "lucide-react";

const products = [
  { id: 1, img1: "/images/shop/1.jpg", img2: "/images/shop/2.jpg", title: "Product Title", price: 16.00, oldPrice: 20.00, label: "Sale", categories: ["sale"], rating: 5 },
  { id: 2, img1: "/images/shop/3.jpg", img2: "/images/shop/4.jpg", title: "Product Title", price: 16.00, oldPrice: 20.00, label: "-20%", categories: ["ftrd"], rating: 5 },
  { id: 3, img1: "/images/shop/5.jpg", img2: "/images/shop/6.jpg", title: "Product Title", price: 16.00, oldPrice: 20.00, label: "Sale", categories: [], rating: 4 },
  { id: 4, img1: "/images/shop/7.jpg", img2: "/images/shop/8.jpg", title: "Product Title", price: 16.00, oldPrice: 20.00, label: "New", categories: ["sale", "bslr"], rating: 5 },
  { id: 5, img1: "/images/shop/5.jpg", img2: "/images/shop/6.jpg", title: "Product Title", price: 16.00, oldPrice: 20.00, label: "Sale", categories: ["ftrd"], rating: 5 },
  { id: 6, img1: "/images/shop/1.jpg", img2: "/images/shop/2.jpg", title: "Product Title", price: 16.00, oldPrice: 20.00, label: "-30%", categories: ["sale", "bslr"], rating: 5 },
  { id: 7, img1: "/images/shop/7.jpg", img2: "/images/shop/8.jpg", title: "Product Title", price: 16.00, oldPrice: 20.00, label: "Sale", categories: ["sale", "bslr"], rating: 5 },
  { id: 8, img1: "/images/shop/3.jpg", img2: "/images/shop/4.jpg", title: "Product Title", price: 16.00, oldPrice: 20.00, label: "-50%", categories: ["sale", "bslr"], rating: 5 },
];

const filters = [
  { label: "All", value: "all" },
  { label: "Sale", value: "sale" },
  { label: "Bestseller", value: "bslr" },
  { label: "Featured", value: "ftrd" },
];

export default function ShopGridSection() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredProducts = products.filter(
    (product) => activeFilter === "all" || product.categories.includes(activeFilter)
  );

  return (
    <section className="section-padding py-[100px]">
      <div className="container mx-auto px-4">
        
        {/* Title */}
        <div className="section-title text-center mb-[50px]">
          <h2>Our Products</h2>
          <p>Check Our <span><u>All Products</u></span></p>
        </div>

        {/* Filters */}
        <div className="text-center mb-[40px]">
          <ul className="flex flex-wrap justify-center gap-[10px] m-0 p-0 list-none">
            {filters.map((filter) => (
              <li
                key={filter.value}
                onClick={() => setActiveFilter(filter.value)}
                className={`cursor-pointer font-bold text-[15px] uppercase py-[8px] px-[20px] rounded-[30px] border transition-all ${
                  activeFilter === filter.value 
                    ? "bg-penn-green text-white border-penn-green" 
                    : "bg-transparent text-penn-navy border-[#ddd] hover:border-penn-green hover:text-penn-green"
                }`}
              >
                {filter.label}
              </li>
            ))}
          </ul>
        </div>

        {/* Grid */}
        <motion.div layout className="flex flex-wrap -mx-[15px]">
          <AnimatePresence>
            {filteredProducts.map((product) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-[15px] mb-[30px]"
              >
                <div className="product-grid bg-white border border-[#ededed] text-center rounded-[6px] overflow-hidden group transition-all duration-300 hover:shadow-[0_10px_20px_rgba(0,0,0,0.05)] relative">
                  
                  {/* Image Area */}
                  <div className="product-image relative overflow-hidden">
                    <Link href="/shop-single" className="block relative">
                      <Image 
                        src={product.img1} 
                        alt={product.title} 
                        width={300} 
                        height={350} 
                        className="w-full h-auto transition-opacity duration-300 group-hover:opacity-0"
                      />
                      <Image 
                        src={product.img2} 
                        alt={product.title} 
                        width={300} 
                        height={350} 
                        className="w-full h-auto absolute top-0 left-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                      />
                    </Link>

                    {/* Social Hover */}
                    <ul className="social absolute bottom-[-50px] left-0 w-full p-0 m-0 list-none flex justify-center gap-[5px] transition-all duration-300 group-hover:bottom-[15px] opacity-0 group-hover:opacity-100">
                      <li>
                        <Link href="#" className="w-[40px] h-[40px] bg-white text-penn-navy flex items-center justify-center rounded-[3px] transition-colors hover:bg-penn-green hover:text-white group/icon" title="Quick View">
                          <Search className="w-4 h-4" />
                        </Link>
                      </li>
                      <li>
                        <Link href="#" className="w-[40px] h-[40px] bg-white text-penn-navy flex items-center justify-center rounded-[3px] transition-colors hover:bg-penn-green hover:text-white group/icon" title="Add to Wishlist">
                          <ShoppingBag className="w-4 h-4" />
                        </Link>
                      </li>
                      <li>
                        <Link href="#" className="w-[40px] h-[40px] bg-white text-penn-navy flex items-center justify-center rounded-[3px] transition-colors hover:bg-penn-green hover:text-white group/icon" title="Add to Cart">
                          <ShoppingCart className="w-4 h-4" />
                        </Link>
                      </li>
                    </ul>

                    {/* Label */}
                    <span className="product-new-label absolute top-[15px] left-[15px] bg-penn-green text-white text-[12px] font-bold uppercase py-[3px] px-[10px] rounded-[3px]">
                      {product.label}
                    </span>
                  </div>

                  {/* Rating */}
                  <ul className="rating flex justify-center gap-[2px] mt-[20px] mb-[10px] p-0 list-none">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <li key={star}>
                        <Star className={`w-[14px] h-[14px] ${star <= product.rating ? 'fill-[#ffb503] text-[#ffb503]' : 'fill-[#e3e3e3] text-[#e3e3e3]'}`} />
                      </li>
                    ))}
                  </ul>

                  {/* Content */}
                  <div className="product-content px-[15px] pb-[25px]">
                    <h3 className="title m-0 text-[18px] font-bold">
                      <Link href="/shop-single" className="text-penn-navy transition-colors hover:text-penn-green">
                        {product.title}
                      </Link>
                    </h3>
                    <div className="price text-penn-green font-bold text-[18px] mt-[10px]">
                      ${product.price.toFixed(2)}
                      {product.oldPrice && (
                        <span className="text-[#999] text-[14px] line-through ml-[5px] font-normal">
                          ${product.oldPrice.toFixed(2)}
                        </span>
                      )}
                    </div>
                    
                    <div className="mt-[15px] overflow-hidden">
                      <Link 
                        href="/cart" 
                        className="add-to-cart inline-block text-[14px] font-bold text-penn-navy uppercase transition-colors hover:text-penn-green"
                      >
                        + Add To Cart
                      </Link>
                    </div>
                  </div>

                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
