"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { Calendar, Clock, LayoutGrid, Star, User, Trophy } from "lucide-react";
import { Facebook, Twitter, Instagram, Youtube, Rss } from "@/components/ui/social-icons";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function SingleCourseSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding py-[100px]" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap -mx-4">
          
          {/* Main Content - Left Column */}
          <div className="w-full lg:w-8/12 px-4 mb-[50px] lg:mb-0">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              {/* Course Header Info */}
              <div className="mb-10">
                <Image 
                  src="/images/all-img/c5.png" 
                  alt="Course Image" 
                  width={800} 
                  height={500} 
                  className="w-full h-auto rounded-[6px] mb-[30px]"
                />
                <div className="mt-5">
                  <h4 className="text-[28px] font-extrabold text-penn-navy mb-4">
                    Professional Ceramic Moulding for Beginners
                  </h4>
                  
                  <div className="flex flex-wrap gap-[20px] text-penn-green text-[15px] font-semibold mb-5">
                    <span className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" /> 10 Oct 2023
                    </span>
                    <span className="flex items-center gap-2">
                      <Clock className="w-4 h-4" /> 7 days
                    </span>
                    <span className="flex items-center gap-2">
                      <LayoutGrid className="w-4 h-4" /> <strong>30 Seats Available</strong>
                    </span>
                  </div>
                  
                  <p className="text-penn-body mb-[15px]">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                  </p>
                  <p className="text-penn-body">
                    It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                  </p>
                </div>
              </div>

              {/* Course Tabs */}
              <div className="bg-[#f9f9f9] p-[30px] rounded-[6px]">
                <Tabs defaultValue="overview" className="w-full">
                  <TabsList className="w-full justify-start bg-transparent border-b border-[#ddd] rounded-none p-0 h-auto mb-[30px] flex-wrap gap-2 sm:gap-0">
                    {["overview", "curriculum", "instructor", "reviews"].map((tab) => (
                      <TabsTrigger 
                        key={tab}
                        value={tab} 
                        className="rounded-none bg-transparent border-none text-[#555] font-bold text-[15px] uppercase py-[12px] px-[25px] data-[state=active]:text-white data-[state=active]:bg-penn-green data-[state=active]:shadow-none transition-all"
                      >
                        {tab}
                      </TabsTrigger>
                    ))}
                  </TabsList>

                  <TabsContent value="overview" className="mt-0">
                    <div className="text-penn-body">
                      <p className="mb-[15px]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                      </p>
                      
                      <div className="my-[30px] relative pb-[56.25%] h-0 overflow-hidden rounded-[6px]">
                        <iframe 
                          src="https://www.youtube.com/embed/RXv_uIN6e-Y" 
                          title="YouTube video player" 
                          className="absolute top-0 left-0 w-full h-full"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                          allowFullScreen
                        ></iframe>
                      </div>
                      
                      <p className="mb-[30px]">
                        Proin et eros varius, ornare turpis ac, dapibus nisi. Morbi luctus arcu non massa consequat, et tristique velit semper. Curabitur interdum vulputate sagittis. Donec erat massa, tincidunt sed feugiat id, suscipit in est. Proin laoreet orci quis augue eleifend varius. Donec hendrerit ex ut lacus blandit euismod.
                      </p>
                      
                      <div className="flex flex-wrap items-center gap-[15px]">
                        <Link href="#" className="bg-penn-green text-white py-[12px] px-[30px] font-bold rounded text-[14px] uppercase transition-all hover:bg-penn-navy">
                          Enroll Now <i className="fa fa-angle-right ml-1"></i>
                        </Link>
                        <Link href="#" className="bg-white text-[#333] border border-[#ddd] py-[12px] px-[30px] font-bold rounded text-[14px] uppercase transition-all hover:text-penn-green hover:border-penn-green">
                          get membership
                        </Link>
                        
                        <div className="flex items-center gap-[10px] ml-auto">
                          <Link href="#" className="w-[40px] h-[40px] rounded-full bg-penn-green text-white flex items-center justify-center transition-all"><Facebook className="w-4 h-4" /></Link>
                          <Link href="#" className="w-[40px] h-[40px] rounded-full bg-[#f4f4f4] text-[#333] flex items-center justify-center transition-all hover:bg-penn-green hover:text-white"><Twitter className="w-4 h-4" /></Link>
                          <Link href="#" className="w-[40px] h-[40px] rounded-full bg-[#f4f4f4] text-[#333] flex items-center justify-center transition-all hover:bg-penn-green hover:text-white"><Instagram className="w-4 h-4" /></Link>
                        </div>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="curriculum" className="mt-0">
                    <div className="text-penn-body">
                      <p className="mb-[15px]">Curriculum content goes here. (Placeholder matching original HTML structure for the other tabs can be added).</p>
                    </div>
                  </TabsContent>

                  <TabsContent value="instructor" className="mt-0">
                    <div className="text-center text-penn-body">
                      <div className="mb-[20px]">
                        <Image src="/images/all-img/ins-details.png" alt="Instructor" width={100} height={100} className="w-[100px] h-[100px] rounded-full mx-auto mb-3" />
                        <h6 className="text-[18px] font-bold text-penn-navy"><Link href="#" className="hover:text-penn-green transition-colors">Manuel Nuer</Link></h6>
                        <span className="text-penn-green font-bold text-[13px] uppercase">TEACHER</span>
                      </div>
                      <p className="mb-[20px]">
                        Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      </p>
                      <div className="flex items-center justify-center gap-[10px]">
                        <Link href="#" className="w-[40px] h-[40px] rounded-full bg-[#f4f4f4] text-[#333] flex items-center justify-center transition-all hover:bg-penn-green hover:text-white"><Facebook className="w-4 h-4" /></Link>
                        <Link href="#" className="w-[40px] h-[40px] rounded-full bg-penn-green text-white flex items-center justify-center transition-all"><Twitter className="w-4 h-4" /></Link>
                        <Link href="#" className="w-[40px] h-[40px] rounded-full bg-[#f4f4f4] text-[#333] flex items-center justify-center transition-all hover:bg-penn-green hover:text-white"><Instagram className="w-4 h-4" /></Link>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="reviews" className="mt-0">
                    <div className="text-penn-body">
                      <h6 className="text-[18px] font-bold text-penn-navy mb-[30px]">Reviews (03)</h6>
                      {/* Review Items */}
                      <div className="space-y-[30px] mb-[40px]">
                        {[1, 2, 3].map((item) => (
                          <div key={item} className="flex gap-[20px]">
                            <Image src={`/images/all-img/client0${item + 1}.png`} alt="Client" width={80} height={80} className="w-[80px] h-[80px] rounded-full" />
                            <div>
                              <h6 className="text-[16px] font-bold text-penn-navy mb-1">User Name</h6>
                              <div className="flex text-yellow-400 mb-2">
                                <Star className="w-3 h-3 fill-current" />
                                <Star className="w-3 h-3 fill-current" />
                                <Star className="w-3 h-3 fill-current" />
                                <Star className="w-3 h-3 fill-current" />
                                <Star className="w-3 h-3 fill-current" />
                              </div>
                              <p className="text-[14px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim unde et culpa voluptatibus repellat voluptates aliquid minima.</p>
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Add Review Form */}
                      <div className="mt-[40px] border-t border-[#ddd] pt-[40px]">
                        <h6 className="text-[18px] font-bold text-penn-navy mb-[20px]">Add a Review</h6>
                        <form className="grid grid-cols-1 md:grid-cols-3 gap-[20px]">
                          <input type="text" placeholder="Full Name" className="w-full h-[50px] px-4 border border-[#ddd] rounded focus:border-penn-green outline-none" />
                          <input type="email" placeholder="Email Address" className="w-full h-[50px] px-4 border border-[#ddd] rounded focus:border-penn-green outline-none" />
                          <div className="flex items-center gap-2">
                            <span className="font-bold text-penn-navy">Your Rating:</span>
                            <div className="flex text-[#ccc]">
                              <Star className="w-4 h-4 hover:text-yellow-400 cursor-pointer transition-colors" />
                              <Star className="w-4 h-4 hover:text-yellow-400 cursor-pointer transition-colors" />
                              <Star className="w-4 h-4 hover:text-yellow-400 cursor-pointer transition-colors" />
                              <Star className="w-4 h-4 hover:text-yellow-400 cursor-pointer transition-colors" />
                              <Star className="w-4 h-4 hover:text-yellow-400 cursor-pointer transition-colors" />
                            </div>
                          </div>
                          <div className="md:col-span-3">
                            <textarea rows={5} placeholder="Type Here Message" className="w-full p-4 border border-[#ddd] rounded focus:border-penn-green outline-none resize-none"></textarea>
                          </div>
                          <div className="md:col-span-3">
                            <button className="bg-penn-green text-white py-[12px] px-[30px] font-bold rounded text-[14px] uppercase transition-all hover:bg-penn-navy">
                              Submit Review
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </TabsContent>

                </Tabs>
              </div>
            </motion.div>
          </div>

          {/* Sidebar - Right Column */}
          <div className="w-full lg:w-4/12 px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {/* Course Features */}
              <div className="bg-[#f9f9f9] p-[30px] rounded-[6px] mb-[30px]">
                <h3 className="text-[20px] font-extrabold text-penn-navy mb-[20px]">Course features</h3>
                <ul className="space-y-[15px] text-[#555]">
                  <li className="flex justify-between border-b border-[#ddd] pb-3">
                    <span className="flex items-center gap-2"><Calendar className="w-4 h-4 text-penn-green" /> Course duration</span>
                    <b className="text-penn-navy">10 days</b>
                  </li>
                  <li className="flex justify-between border-b border-[#ddd] pb-3">
                    <span className="flex items-center gap-2"><User className="w-4 h-4 text-penn-green" /> Total Lectures</span>
                    <b className="text-penn-navy">30</b>
                  </li>
                  <li className="flex justify-between border-b border-[#ddd] pb-3">
                    <span className="flex items-center gap-2"><User className="w-4 h-4 text-penn-green" /> Total Students</span>
                    <b className="text-penn-navy">1000</b>
                  </li>
                  <li className="flex justify-between pb-1">
                    <span className="flex items-center gap-2"><Trophy className="w-4 h-4 text-penn-green" /> Certification</span>
                    <b className="text-penn-navy">YES</b>
                  </li>
                </ul>
              </div>

              {/* Price & Register */}
              <div className="bg-penn-navy text-center p-[20px] rounded-[6px] mb-[20px]">
                <h4 className="text-[24px] font-extrabold text-white m-0">Price - 60$</h4>
              </div>
              <div className="text-center mb-[40px]">
                <Link href="#" className="bg-penn-green text-white w-full block py-[15px] font-bold rounded-[6px] text-[16px] transition-all hover:bg-penn-navy">
                  Register Today
                </Link>
              </div>

              {/* Related Course */}
              <div className="mb-[40px]">
                <h3 className="text-[20px] font-extrabold text-penn-navy mb-[20px] pb-[10px] border-b border-[#ddd]">
                  Related Course
                </h3>
                
                {[1, 2, 3].map((item) => (
                  <div key={item} className="flex gap-[15px] mb-[20px] pb-[20px] border-b border-[#ddd] last:border-0 last:mb-0 last:pb-0">
                    <div className="w-[80px] h-[80px] flex-shrink-0">
                      <Image src={`/images/all-img/rc-${item}.png`} alt="Course" width={80} height={80} className="w-full h-full object-cover rounded" />
                    </div>
                    <div>
                      <div className="flex text-yellow-400 text-[10px] mb-1">
                        <Star className="w-3 h-3 fill-current" />
                        <Star className="w-3 h-3 fill-current" />
                        <Star className="w-3 h-3 fill-current" />
                        <Star className="w-3 h-3 fill-current" />
                        <Star className="w-3 h-3 fill-current" />
                      </div>
                      <h4 className="text-[15px] font-bold text-penn-navy mb-1 leading-tight">
                        <Link href="#" className="hover:text-penn-green transition-colors">
                          {item === 1 ? "UI/UX Design and..." : item === 2 ? "Greatest Passion In..." : "incorporate your art ..."}
                        </Link>
                      </h4>
                      <span className="text-penn-green font-bold text-[14px]">
                        ${item === 1 ? "42.00" : item === 2 ? "37.00" : "21.00"}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Categories */}
              <div className="mb-[40px]">
                <h4 className="text-[18px] font-extrabold text-penn-navy mb-[20px] uppercase border-l-[3px] border-penn-green pl-[15px]">
                  CATEGORIES
                </h4>
                <ul className="space-y-0">
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
                    <Link href="#" className="flex items-center gap-[15px] bg-[#ea4c89] text-white p-[10px] rounded transition-transform hover:-translate-y-[2px]">
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

            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
