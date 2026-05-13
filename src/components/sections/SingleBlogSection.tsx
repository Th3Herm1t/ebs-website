"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { Facebook, Twitter, Instagram, Linkedin, Youtube, Rss } from "@/components/ui/social-icons";

export default function SingleBlogSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding py-[100px]" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap -mx-4">
          
          {/* Main Content - Left Column */}
          <div className="w-full lg:w-7/12 px-4 mb-[50px] lg:mb-0">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              {/* Article Content */}
              <div className="mb-[60px]">
                <div className="mb-[30px]">
                  <Image 
                    src="/images/blog/3.png" 
                    alt="Blog image" 
                    width={800} 
                    height={500} 
                    className="w-full h-auto rounded-[6px]"
                  />
                </div>
                
                <div className="text-penn-body mb-[30px]">
                  <p className="mb-4 text-[15px] leading-[28px]">
                    I almost couldn’t believe it was real! For my first test I had generate some website copy for me. I provided about 50 words to describe my business along with my business name. generated two variants of copy each with several paragraphs of professional sounding copy. I immediately shared the results with a friend who couldn’t believe it was written by an AI. is worth every penny and then some. Describe my business along with my business name. generated two variants of copy each with several paragraphs of professional sounding copy. I immediately shared the results with a friend who couldn’t believe it was written by an AI. is worth every penny and then some!
                  </p>
                </div>
                
                <div className="mb-[30px]">
                  <h2 className="text-[28px] font-extrabold text-penn-navy mb-[20px]">
                    Enhancing Your E-commerce Store With AI Writing Assistants
                  </h2>
                  <Image 
                    src="/images/blog/1.png" 
                    alt="Blog image" 
                    width={800} 
                    height={400} 
                    className="w-full h-auto rounded-[6px] mb-[20px]"
                  />
                  <p className="text-penn-body text-[15px] leading-[28px]">
                    I immediately shared the results with a friend who couldn’t believe it was written by an AI. is worth every penny and then some. Describe my business along with my business name. generated two variants of copy each with several paragraphs of professional sounding copy. I immediately shared the results with a friend who couldn’t believe it was written by an AI. is worth every penny and then some!
                  </p>
                </div>
                
                {/* Share */}
                <div className="mt-[40px] pt-[20px] border-t border-[#ddd] flex items-center gap-[20px]">
                  <h4 className="text-[18px] font-bold text-penn-navy m-0">Share</h4>
                  <ul className="flex flex-wrap gap-[10px] m-0 p-0 list-none">
                    <li><Link href="#" className="flex items-center gap-2 text-penn-body hover:text-penn-green transition-colors"><Facebook className="w-4 h-4" /> Facebook</Link></li>
                    <li><Link href="#" className="flex items-center gap-2 text-penn-body hover:text-penn-green transition-colors"><Twitter className="w-4 h-4" /> Twitter</Link></li>
                    <li><Link href="#" className="flex items-center gap-2 text-penn-body hover:text-penn-green transition-colors"><Instagram className="w-4 h-4" /> Instagram</Link></li>
                    <li><Link href="#" className="flex items-center gap-2 text-penn-body hover:text-penn-green transition-colors"><Linkedin className="w-4 h-4" /> Linkedin</Link></li>
                  </ul>
                </div>
              </div>

              {/* Author */}
              <div className="mb-[60px]">
                <h3 className="text-[22px] font-extrabold text-penn-navy mb-[30px] pb-[15px] border-b border-[#ddd]">
                  About the author
                </h3>
                <div className="flex gap-[20px] bg-[#f9f9f9] p-[30px] rounded-[6px]">
                  <Image src="/images/blog/author.jpg" alt="Author" width={100} height={100} className="w-[100px] h-[100px] rounded-full object-cover flex-shrink-0" />
                  <div>
                    <h4 className="text-[18px] font-bold text-penn-navy mb-[10px]">Marina Mojo</h4>
                    <p className="text-penn-body text-[14px] m-0">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ultricies quam nisi, vel gravida enim accumsan id. Praesent justo quam, auctor et lorem in, pulvinar ornare orci.
                    </p>
                  </div>
                </div>
              </div>

              {/* Comments */}
              <div className="mb-[60px]">
                <h3 className="text-[22px] font-extrabold text-penn-navy mb-[30px] pb-[15px] border-b border-[#ddd]">
                  Comments
                </h3>
                <div className="space-y-[30px]">
                  {[
                    { img: "c1", name: "Ayoub Fennouni", indent: false },
                    { img: "c3", name: "Kader Bhai", indent: true },
                    { img: "c2", name: "Mark Linomi", indent: false },
                  ].map((comment, i) => (
                    <div key={i} className={`flex gap-[20px] ${comment.indent ? "ml-[50px] md:ml-[100px]" : ""}`}>
                      <Image src={`/images/blog/${comment.img}.jpg`} alt={comment.name} width={80} height={80} className="w-[80px] h-[80px] rounded-full object-cover flex-shrink-0" />
                      <div>
                        <h4 className="text-[16px] font-bold text-penn-navy mb-[10px]">{comment.name}</h4>
                        <p className="text-penn-body text-[14px] m-0">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ultricies quam nisi, vel gravida enim accumsan id. Praesent justo quam, auctor et lorem in, pulvinar ornare orci.
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Add Comment Form */}
              <div>
                <h3 className="text-[22px] font-extrabold text-penn-navy mb-[30px] pb-[15px] border-b border-[#ddd]">
                  Add a Comment
                </h3>
                <form className="grid grid-cols-1 md:grid-cols-2 gap-[20px]">
                  <input type="text" placeholder="Name" required className="w-full h-[50px] px-[15px] bg-[#f9f9f9] border border-transparent rounded-[6px] outline-none focus:border-penn-green transition-colors" />
                  <input type="email" placeholder="Email" required className="w-full h-[50px] px-[15px] bg-[#f9f9f9] border border-transparent rounded-[6px] outline-none focus:border-penn-green transition-colors" />
                  <input type="text" placeholder="Subject" required className="w-full h-[50px] px-[15px] bg-[#f9f9f9] border border-transparent rounded-[6px] outline-none focus:border-penn-green transition-colors md:col-span-2" />
                  <textarea rows={6} placeholder="Your Message" required className="w-full p-[15px] bg-[#f9f9f9] border border-transparent rounded-[6px] outline-none focus:border-penn-green transition-colors md:col-span-2 resize-none"></textarea>
                  <div className="md:col-span-2">
                    <button type="submit" className="bg-penn-green text-white py-[12px] px-[30px] font-bold rounded-[6px] text-[16px] uppercase transition-all hover:bg-penn-navy">
                      Submit Comment
                    </button>
                  </div>
                </form>
              </div>

            </motion.div>
          </div>

          {/* Sidebar - Right Column */}
          <div className="w-full lg:w-5/12 px-4 mt-[50px] lg:mt-0">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-[40px]"
            >
              {/* Search */}
              <div>
                <input type="text" placeholder="Type & Press Enter" className="w-full h-[50px] px-[20px] bg-[#f9f9f9] border border-[#ddd] rounded-[6px] outline-none focus:border-penn-green transition-colors" />
              </div>

              {/* Newsletter */}
              <div className="bg-[#f9f9f9] p-[30px] rounded-[6px]">
                <h4 className="text-[20px] font-extrabold text-penn-navy mb-[15px]">Subscribe for get updates</h4>
                <p className="text-penn-body text-[14px] mb-[20px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ultricies quam nisi my business</p>
                <form className="relative">
                  <input type="email" placeholder="Email Address" className="w-full h-[50px] px-[15px] bg-white border border-[#ddd] rounded-[6px] outline-none focus:border-penn-green pr-[110px]" />
                  <button type="submit" className="absolute top-0 right-0 h-full bg-penn-green text-white px-[20px] rounded-r-[6px] font-bold text-[14px] transition-colors hover:bg-penn-navy">
                    Subscribe
                  </button>
                </form>
              </div>

              {/* Popular Posts */}
              <div>
                <h4 className="text-[18px] font-extrabold text-penn-navy mb-[20px] uppercase border-l-[3px] border-penn-green pl-[15px]">
                  Popular post
                </h4>
                <div className="space-y-[20px]">
                  {[
                    { img: "1", title: "Supercharging Your SEO Game with AI Writing Assistants" },
                    { img: "2", title: "AI Writing Assistants and the Future of Content Marketing" },
                    { img: "3", title: "Enhancing Your E-commerce Store With AI Writing Assistants." },
                    { img: "4", title: "Building your content strategy cannot get easier than this." },
                    { img: "5", title: "This is the only read you would need before sitting down to prepare" },
                  ].map((post, i) => (
                    <div key={i} className="flex gap-[15px] items-center">
                      <Link href="/blog-single" className="flex-shrink-0">
                        <Image src={`/images/blog/blog-${post.img}.png`} alt={post.title} width={80} height={80} className="w-[80px] h-[80px] rounded object-cover" />
                      </Link>
                      <h5 className="text-[15px] font-bold text-penn-navy leading-[22px] m-0">
                        <Link href="/blog-single" className="hover:text-penn-green transition-colors">{post.title}</Link>
                      </h5>
                    </div>
                  ))}
                </div>
              </div>

              {/* Follow Us */}
              <div>
                <h4 className="text-[18px] font-extrabold text-penn-navy mb-[20px] uppercase border-l-[3px] border-penn-green pl-[15px]">
                  Follow us
                </h4>
                <ul className="space-y-[10px]">
                  <li>
                    <Link href="#" className="flex items-center gap-[15px] bg-[#3b5998] text-white p-[10px] rounded transition-transform hover:-translate-y-[2px]">
                      <div className="w-[30px] text-center border-r border-[rgba(255,255,255,0.2)] pr-[10px]"><Facebook className="w-4 h-4 mx-auto" /></div>
                      <span className="font-semibold text-[14px]">150K Likes</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="flex items-center gap-[15px] bg-[#00acee] text-white p-[10px] rounded transition-transform hover:-translate-y-[2px]">
                      <div className="w-[30px] text-center border-r border-[rgba(255,255,255,0.2)] pr-[10px]"><Twitter className="w-4 h-4 mx-auto" /></div>
                      <span className="font-semibold text-[14px]">138K Followers</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="flex items-center gap-[15px] bg-[#c4302b] text-white p-[10px] rounded transition-transform hover:-translate-y-[2px]">
                      <div className="w-[30px] text-center border-r border-[rgba(255,255,255,0.2)] pr-[10px]"><Youtube className="w-4 h-4 mx-auto" /></div>
                      <span className="font-semibold text-[14px]">90K Subscribers</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="flex items-center gap-[15px] bg-[#cb2027] text-white p-[10px] rounded transition-transform hover:-translate-y-[2px]">
                      <div className="w-[30px] text-center border-r border-[rgba(255,255,255,0.2)] pr-[10px]"><Instagram className="w-4 h-4 mx-auto" /></div>
                      <span className="font-semibold text-[14px]">350K Followers</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="flex items-center gap-[15px] bg-[#ee802f] text-white p-[10px] rounded transition-transform hover:-translate-y-[2px]">
                      <div className="w-[30px] text-center border-r border-[rgba(255,255,255,0.2)] pr-[10px]"><Rss className="w-4 h-4 mx-auto" /></div>
                      <span className="font-semibold text-[14px]">411 Followers</span>
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Categories */}
              <div>
                <h4 className="text-[18px] font-extrabold text-penn-navy mb-[20px] uppercase border-l-[3px] border-penn-green pl-[15px]">
                  CATEGORIES
                </h4>
                <ul className="space-y-0 border-t border-[#ededed]">
                  {[
                    { name: "Education", count: 11 },
                    { name: "Ai Content", count: 44 },
                    { name: "New Course", count: 33 },
                    { name: "Marketing", count: 14 },
                    { name: "Software", count: 21 },
                    { name: "Design", count: 1 },
                  ].map((cat, idx) => (
                    <li key={idx}>
                      <Link href="#" className="flex justify-between items-center py-[10px] border-b border-[#ededed] text-[#555] font-semibold transition-colors hover:text-penn-green">
                        {cat.name} <sup>{cat.count < 10 ? `0${cat.count}` : cat.count}</sup>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Popular Tags */}
              <div>
                <h4 className="text-[18px] font-extrabold text-penn-navy mb-[20px] uppercase border-l-[3px] border-penn-green pl-[15px]">
                  Popular Tag
                </h4>
                <div className="flex flex-wrap gap-[10px]">
                  {["Education", "Course", "Event", "copywriting", "Graphic", "Clean Design", "Digital Marketing", "All project"].map((tag, i) => (
                    <Link key={i} href="#" className="bg-[#f9f9f9] border border-[#ddd] text-penn-body py-[5px] px-[15px] text-[14px] rounded transition-colors hover:bg-penn-green hover:text-white hover:border-penn-green">
                      {tag}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Ad Banner */}
              <div>
                <h4 className="text-[18px] font-extrabold text-penn-navy mb-[20px] uppercase border-l-[3px] border-penn-green pl-[15px]">
                  Ad Banner
                </h4>
                <Link href="#" className="block">
                  <Image src="/images/blog/banner.jpg" alt="Ad Banner" width={400} height={400} className="w-full h-auto rounded" />
                </Link>
              </div>

            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
