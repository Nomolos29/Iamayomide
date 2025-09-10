import Image from "next/image";
import React from "react";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import Testimonials from "@/components/Testimonials";
import AnimatedCounter from "@/components/AnimatedCounter";
import { SOCIAL_ICONS, STATS, SITE_CONFIG } from "@/lib/constants";
import { SocialIcon, StatItem } from "@/lib/types";


export default function Home() {

  const stats: StatItem[] = STATS;

  const socialIcons: SocialIcon[] = SOCIAL_ICONS;

  return (
    <main className="w-full flex flex-col justify-center items-center scroll-smooth">
      <section className="flex justify-between items-center max-w-[1440px] w-full px-5 md:px-10 bg-gradient-to-br from-blue-50 via-white to-red-50 pt-10 md:pt-0 md:pb-10 pb-40">
        <aside className="w-full md:w-1/2 flex flex-col gap-y-8">
          <div className="flex flex-col text-center md:text-left gap-y-8 w-full">
            <div className="space-y-4">
              <h3 className="text-xl md:text-2xl font-bold text-red-700 leading-relaxed animate-fade-in-up">Hello, I&apos;m</h3>
              <h1 className="text-4xl md:text-5xl xl:text-6xl font-extrabold leading-tight text-gray-900 animate-fade-in-up">
                <span className="block">Ayomide</span>
                <span className="block">Arowolo-Ayodeji</span>
              </h1>
            </div>

            <div className="h-1 w-20 bg-red-700 mx-auto md:mx-0 animate-slide-in-right"></div>

            <p className="text-lg md:text-xl leading-relaxed text-gray-700 max-w-lg animate-fade-in">
              EdTech innovator, AI literacy advocate, and blockchain educator dedicated to expanding access to emerging technologies for underserved communities worldwide.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href={SITE_CONFIG.bookingUrl} target="_blank">
                <button type="button" className="py-4 px-8 bg-gradient-to-r from-red-700 to-red-600 hover:from-red-800 hover:to-red-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  Book Consultation
                </button>
              </Link>
              <Link href="/more-about-me">
                <button type="button" className="py-4 px-8 border-2 border-red-700 text-red-700 hover:bg-red-700 hover:text-white font-semibold rounded-lg transition-all duration-300">
                  Learn More About Me
                </button>
              </Link>
            </div>
          </div>
        </aside>

        <div className="hidden md:flex w-1/2 justify-center items-center">
          <div className="">
            <Image
              src="/HeroImage-removebg.png"
              alt="Ayomide Arowolo-Ayodeji EdTech Innovator"
              width={450}
              height={450}
              className="object-contain animate-fade-in"
              priority
            />
          </div>
        </div>
      </section>


      <section className="w-full pb-20 md:pb-32 bg-gray-50 relative">
        <section className="w-full -mt-28 z-10 absolute">
          <div className="max-w-[1440px] w-full mx-auto px-5 md:px-10">
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 md:p-12">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                {stats.map((stat, index) => {
                  const numericValue = parseInt(stat.number.replace(/[^0-9]/g, ''));
                  const suffix = stat.number.replace(/[0-9]/g, '');
                  return (
                    <div key={index} className="flex flex-col items-center justify-center text-center group hover:scale-105 transition-all duration-300">
                      <div className={`text-5xl md:text-6xl font-extrabold mb-4 ${index === 0 ? "text-red-700" : index === 1 ? "text-blue-700" : "text-gray-700"}`}>
                        <AnimatedCounter
                          end={numericValue}
                          suffix={suffix}
                          className="block"
                        />
                      </div>
                      <div className="h-1 w-12 bg-red-700 mb-4 group-hover:w-16 transition-all duration-300"></div>
                      <p className="text-lg font-semibold text-gray-800 capitalize leading-relaxed max-w-xs">
                        {stat.name}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>


        <div className="max-w-[1440px] w-full mx-auto px-5 md:px-10 md:pt-48 pt-[100%]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="relative z-10">
                <Image
                  src="/personalImage2.jpeg"
                  alt="Ayomide Arowolo-Ayodeji Professional Photo"
                  width={400}
                  height={500}
                  className="w-full max-w-[400px] h-[500px] object-cover rounded-2xl shadow-2xl mx-auto"
                />

                <div className="absolute top-6 -right-6 bg-white rounded-2xl p-4 shadow-xl">
                  <div className="flex flex-col items-center space-y-4">
                    {socialIcons.map((social, index) => (
                      <Link
                        href={social.link}
                        key={index}
                        target="_blank"
                        className="text-2xl text-red-700 hover:text-red-600 hover:scale-110 transition-all duration-300"
                      >
                        {social.icon}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              <div className="absolute -top-6 -left-6 w-full h-full border-4 border-red-700 rounded-2xl -z-10"></div>
            </div>

            <div className="space-y-8 order-1 lg:order-2">
              <div className="space-y-6">
                <div className="space-y-4">
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
                    About Me
                  </h2>
                  <div className="h-1 w-20 bg-red-700"></div>
                </div>

                <p className="text-lg md:text-xl leading-relaxed text-gray-700">
                  As the founder of <span className="font-semibold text-red-700">Know the Blocks Maven (KBM)</span>, I lead transformative initiatives that integrate AI, blockchain, and Web3 literacy into traditional education systems, empowering over <span className="font-semibold">10,500 students</span> across Africa.
                </p>

                <p className="text-lg leading-relaxed text-gray-700">
                  Through strategic collaborations with the Nigerian government and the Los Angeles School District&apos;s STEM Literacy Editorial Exchange Program, I pioneer efforts to bridge the digital divide and foster financial inclusion across Africa. I&apos;m also the first Web3 educator to organize a self-funded Web3 Educational Exposition for underserved communities.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link href={SITE_CONFIG.bookingUrl} target="_blank">
                  <button type="button" className="py-4 px-8 bg-gradient-to-r from-red-700 to-red-600 hover:from-red-800 hover:to-red-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                    Schedule Meeting
                  </button>
                </Link>
                <Link href="/more-about-me">
                  <button type="button" className="py-4 px-8 border-2 border-red-700 text-red-700 hover:bg-red-700 hover:text-white font-semibold rounded-lg transition-all duration-300">
                    Read Full Story
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="w-full py-20 md:py-32 bg-white">
        <div className="max-w-[1440px] w-full mx-auto px-5 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="space-y-4">
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
                    KBM Abuja <span className="text-red-700">Expo</span>
                  </h2>
                  <div className="h-1 w-20 bg-red-700"></div>
                </div>

                <p className="text-lg md:text-xl leading-relaxed text-gray-700">
                  Organized a self-funded Web3 Educational Exposition for underserved communities and senior government secondary schools with the participation of over <span className="font-semibold text-red-700">2,000 students</span> in the hybrid event.
                </p>

                <div className="bg-red-50 border-l-4 border-red-700 p-6 rounded-r-lg">
                  <p className="text-gray-800 font-medium">
                    First of its kind in Nigeria - bridging the gap between emerging technologies and traditional education systems in underserved communities.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative flex justify-center items-center">
              <div className="relative">
                <div className="h-[400px] w-[400px] rounded-full bg-[url(/communityImage1.jpeg)] bg-cover bg-center shadow-2xl border-8 border-white"></div>

                <div className="absolute -bottom-8 -left-8 h-[200px] w-[200px] rounded-full bg-[url(/communityImage2.jpeg)] bg-cover bg-center shadow-xl border-4 border-white"></div>

                <div className="absolute -top-8 -right-8 h-[150px] w-[150px] rounded-full bg-[url(/communityImage3.jpeg)] bg-cover bg-center shadow-xl border-4 border-white"></div>

                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-2xl px-6 py-4 shadow-xl">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-red-700">2,000+</div>
                    <div className="text-sm text-gray-600 font-medium">Students Reached</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="w-full py-20 md:py-32 bg-gray-50">
        <div className="max-w-[1440px] w-full mx-auto px-5 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="relative flex justify-center items-center">
                <div className="relative">
                  <div className="h-[450px] w-[450px] rounded-full bg-[url(/personalImage3.jpeg)] bg-cover bg-center shadow-2xl border-8 border-white"></div>

                  <div className="absolute top-8 left-8 bg-white rounded-2xl px-6 py-4 shadow-xl">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-red-700">First</div>
                      <div className="text-sm text-gray-600 font-medium">in Nigeria</div>
                    </div>
                  </div>

                  <div className="absolute bottom-8 right-8 bg-white rounded-2xl px-6 py-4 shadow-xl">
                    <div className="text-center">
                      <div className="text-lg font-bold text-blue-700">DKG</div>
                      <div className="text-sm text-gray-600 font-medium">Member</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-8 order-1 lg:order-2">
              <div className="space-y-6">
                <div className="space-y-4">
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
                    DKG <span className="text-red-700">Alumnus</span>
                  </h2>
                  <div className="h-1 w-20 bg-red-700"></div>
                </div>

                <p className="text-lg md:text-xl leading-relaxed text-gray-700">
                  <span className="font-semibold text-red-700">First Female educator in Nigeria</span> to be inducted into the DKG (Delta Kappa Gamma Society International), a prestigious platform of women educators collaborating on ways to make an impact in the world of education.
                </p>

                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-red-700 rounded-full mt-3 flex-shrink-0"></div>
                    <p className="text-lg text-gray-700">Providing support and service to active teachers</p>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-red-700 rounded-full mt-3 flex-shrink-0"></div>
                    <p className="text-lg text-gray-700">Shaping educational policy at the state level</p>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-red-700 rounded-full mt-3 flex-shrink-0"></div>
                    <p className="text-lg text-gray-700">Connecting international women educators</p>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-red-700 rounded-full mt-3 flex-shrink-0"></div>
                    <p className="text-lg text-gray-700">Pioneering the first chapter in Nigeria</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Testimonials />

      <section className="w-full py-20 md:py-32 bg-white">
        <div className="max-w-[1440px] w-full mx-auto px-5 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-start">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="space-y-4">
                  <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
                    As <span className="text-red-700">KBM</span> Founder
                  </h2>
                  <div className="h-1 w-20 bg-red-700"></div>
                </div>

                <div className="space-y-6 text-gray-700 leading-relaxed">
                  <p className="text-lg">
                    My passion in founding KBM stems from a personal and professional commitment to leveraging educational technology for social impact. As an EdTech educator and AI literacy advocate, I have witnessed how disparities in technological education not only limit career aspirations but also hinder personal and cognitive development.
                  </p>

                  <p className="text-lg">
                    I understand that access to emerging technologies is not just about infrastructure but also about fostering a mindset shift. Many students in underserved communities face structural and psychological barriers that limit their ability to see themselves as future professionals in these technologies.
                  </p>

                  <div className="bg-red-50 border-l-4 border-red-700 p-6 rounded-r-lg">
                    <p className="text-gray-800 font-medium italic">
                      &ldquo;Career development interventions must consider how digital transformation is reshaping job markets and create pathways that bridge traditional education with emerging opportunities.&rdquo;
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:pl-8">
              <ContactForm socialIcons={socialIcons} />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
