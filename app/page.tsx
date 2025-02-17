import Image from "next/image";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import React from "react";
import Link from "next/link";


export default function Home() {

  const stats = [
    {
      number: "10k+",
      name: "plus students impacted"
    },
    {
      number: "20k+",
      name: "community members"
    },
    {
      number: "10+",
      name: "projects completed"
    }
  ]

  type SocialIconProp = {
    icon: React.ReactNode;
    link: string;
  };

  const socialIcons: SocialIconProp[] = [
    {
      icon: <FaFacebook />,
      link: "#"
    },
    {
      icon: <FaLinkedin />,
      link: "https://www.linkedin.com/in/ayomidearowoloayodeji?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
    },
    {
      icon: <FaSquareXTwitter />,
      link: "https://x.com/knowtheblocks_?t=VNjLr__AVfJPoU219GCj1w&s=08"
    },
    {
      icon: <FaFacebook />,
      link: "#"
    }
  ]

  return (
    <main className="w-full flex flex-col justify-center items-center">
      <section className="flex justify-between items-center max-w-[1440px] w-full px-10 bg-blue-50">
        <aside className="w-1/2 flex flex-col gap-y-20">
          <div className="flex flex-col gap-y-6 w-full">
            <h3 className="text-[40px] font-extrabold text-red-700 leading-none">Hello, I&apos;m <br /></h3>
            <h1 className="text-[60px] font-extrabold leading-none"><span className="text-[90px] leading-none">A</span>yomide <br /><span className="text-[90px] leading-none">A</span>rowolo-<span className="text-[80px] leading-none">A</span>yodeji</h1>
            <p className="text-xl">I&apos;m an EdTech innovator, AI literacy advocate, and blockchain educator dedicated to expanding access to emerging technologies for underserved communities.</p>

            <div className="flex gap-x-5">
            <Link
              href="https://outlook.office.com/bookwithme/user/7d3c3f6ee4e9414296cdcdc8704495b6@gse.harvard.edu?anonymous&ep=plink" target="_blank"
            >
              <button type="button" className="py-4 px-8 bg-gradient-to-r from-red-700 to-red-500 text-xl font-medium rounded-md text-white">Book Appointment</button>
            </Link>
              <button type="button" className="py-2 px-8 text-lg font-medium rounded-md border-2 border-red-700">Read More</button>
            </div>
          </div>

        </aside>
        <img src="/HeroImage-removebg.png" alt="Image" width={0} height={0} className="w-[500px] bg-contain" />
      </section>

      <section className="flex justify-between items-center max-w-[1440px] w-full px-10 -mt-20">
        <div className="w-full bg-white shadow-2xl shadow-gray-200 rounded-lg backdrop-blur-md h-[180px] flex justify-between items-center overflow-hidden">
          {stats.map((stat, index) => (
            <div key={index} className={`flex flex-col items-center justify-center text-center w-1/3 gap-y-3 h-full ${index == 0 ? "bg-red-200" : index == 1 ? "bg-blue-100" : "bg-white"}`}>
              <h5 className="text-5xl font-bold text-red-700">{stat.number}</h5>
              <p className="text-xl capitalize font-medium">{stat.name}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="flex justify-center items-center max-w-[1440px] gap-x-[150px] w-full py-28 px-10">
        <div className="relative w-[300px] flex">
          <div className="relative z-10">
            <img src="/personalImage2.jpeg" alt="Image" width={0} height={0} className="h-[500px] w-[300px] bg-white backdrop-blur-sm rounded-lg shadow-md" />
            <div className="w-[50px] h-[180px] flex flex-col justify-between items-center absolute bg-red-300/20 top-0 rounded-tl-md backdrop-blur-lg overflow-hidden">
              {socialIcons.map((social, index) => (
                <Link href={social.link} key={index} target="_blank" className="text-2xl flex justify-center items-center text-white hover:bg-red-400/50 h-1/4 w-full">{social.icon}</Link>
              ))}
            </div>
          </div>
          <div className="h-[500px] w-[300px] border-red-700 border-[5px] absolute top-8 left-8 rounded-md"></div>
        </div>

        <aside className="w-1/2 flex flex-col gap-y-20">
          <div className="flex flex-col gap-y-8">
            <h1 className="text-[40px] leading-none">About Me</h1>
            <span className="h-1 w-[100px] bg-red-700">.</span>
            <p className="text-lg line-clamp-[7]">As the founder of Know the Blocks Maven (KBM), she leads transformative initiatives that integrate AI, blockchain, and Web3 literacy into traditional education systems, empowering over 10,500 students (and counting) across Africa. Through strategic collaborations, including partnerships with the Nigerian government and the Los Angeles School District&apos;s STEM Literacy Editorial Exchange Program, Ayo pioneers efforts to bridge the digital divide and foster financial inclusion across Africa. She is also the first Web3 educator to organize a self-funded Web3 Educational Exposition for underserved communities, introducing emerging technologies to students in government senior secondary schools.</p>
            <div className="flex gap-x-5">
              <Link
                href="https://outlook.office.com/bookwithme/user/7d3c3f6ee4e9414296cdcdc8704495b6@gse.harvard.edu?anonymous&ep=plink" target="_blank"
              >
                <button type="button" className="py-4 px-8 bg-gradient-to-r from-red-700 to-red-500 text-xl font-medium rounded-md text-white">Book Appointment</button>
              </Link>
              <button type="button" className="py-2 px-8 text-lg font-medium rounded-md border-2 border-red-700">Read More</button>
            </div>
          </div>
        </aside>
      </section>


      <section className="flex justify-between items-center max-w-[1440px] w-full py-20 px-10 bg-slate-50">
        <aside className="w-2/5 flex flex-col gap-y-20">
          <div className="flex flex-col gap-y-6 w-full">
            <h1 className="text-[60px] font-extrabold">KBM Abuja Expo</h1>
            <p className="text-xl text-[#5a5a5a]">organized a self funded Web3 Educational 
            Exposition for the undeserved communities and senior government secondary schools with the participation of over two thousand students  in the hybrid event. </p>
          </div>

        </aside>
        
        <aside className="relative w-1/2 flex flex-col items-end">
          <Image src="/globe.svg" alt="Image" width={0} height={0} className="h-[450px] w-[400px]" />

            <div className="h-20 w-80 bg-[#ffffffd5] rounded-lg backdrop-blur-md shadow-2xl absolute left-40"></div>
            <div className="h-20 w-80 bg-[#ffffffa4] rounded-lg backdrop-blur-sm shadow-2xl absolute bottom-10 right-20"></div>
        </aside>
      </section>


      <section className="flex justify-between items-center max-w-[1440px] w-full py-20 px-10 bg-white">
        <aside className="relative w-1/2 flex flex-col">
          <Image src="/globe.svg" alt="Image" width={0} height={0} className="h-[450px] w-[400px]" />

            <div className="h-20 w-80 bg-[#ffffff] rounded-lg backdrop-blur-md shadow-2xl absolute left-40"></div>
            <div className="h-20 w-80 bg-[#ffffff] rounded-lg backdrop-blur-sm shadow-2xl absolute bottom-10 left-20"></div>
        </aside>

        <aside className="w-2/5 flex flex-col gap-y-20">
          <div className="flex flex-col gap-y-6 w-full">
            <h1 className="text-[60px] font-extrabold">DKG Alumnus</h1>
            <p className="text-xl text-[#5a5a5a]">First Female educator in Nigeria to be inducted into the DKG, a strong platform of women educators in the USA collaborating on ways to make an impact in the world of education by providing support or service to active teachers, shaping educational policy at the state level, and connecting international women educators, while pioneering the first chapter in Nigeria.</p>
          </div>
        </aside>
      </section>

      <section className="flex justify-center items-center max-w-[1440px] w-full py-20 px-10 bg-white">
        <div className="border-[2px] border-red-700 rounded-lg w-2/3 flex flex-col gap-y-10 p-10 pr-[300px]">
          <h2 className="text-[60px] font-extrabold">As KBM Founder</h2>
          <p className="">
            
            My passion in founding KBM stems from a personal and professional commitment to leveraging educational technology for social impact. As an EdTech educator and AI literacy advocate, I have seen how disparities in technological education not only limit career aspirations but also hinder personal and cognitive development. 
            I already understand that access to emerging technologies is not just about infrastructure but also about fostering a mindset shift. Many students in underserved communities face structural and psychological barriers that limit their ability to see themselves as future professionals in these technologies. Additionally, career development interventions often focus on traditional pathways without fully considering how digital transformation is reshaping job markets.
          </p>
        </div>
        <div className="bg-white rounded-md shadow-2xl my-10 border-b-[2px] border-red-700 w-fit p-10 -ml-[200px] flex flex-col items-center gap-5">
          <h1 className="text-[34px]">Contact Me</h1>
          <form className="flex flex-col gap-5">
            <div className="flex gap-5">
              <input required type="text" name="" id="" placeholder="Firstname" className="border-[#d2d2d2] outline-red-700 hover:bg-[#f7f7f7c9] hover:cursor-pointer border px-2 py-2 rounded-md" />

              <input required type="text" name="" id="" placeholder="Firstname" className="border-[#d2d2d2] outline-red-700 hover:bg-[#f7f7f7c9] hover:cursor-pointer border px-2 py-2 rounded-md" />
            </div>

            <input required type="email" name="" id="" placeholder="Email Address" className="border-[#d2d2d2] outline-red-700 hover:bg-[#f7f7f7c9] hover:cursor-pointer border px-2 py-2 rounded-md w-full" />

            <input required type="text" name="" id="" placeholder="Location" className="border-[#d2d2d2] outline-red-700 hover:bg-[#f7f7f7c9] hover:cursor-pointer border px-2 py-2 rounded-md w-full" />

            <textarea name="" id="" rows={5} required placeholder="Reason for contacting" className="border-[#d2d2d2] outline-red-700 hover:bg-[#f7f7f7c9] hover:cursor-pointer border p-2 rounded-md"></textarea>
          </form>

          <div className="h-[50px] flex justify-between items-center p-3 gap-5">
            {socialIcons.map((social, index) => (
              <Link href={social.link} key={index} className="text-2xl text-red-700">{social.icon}</Link>
            ))}
          </div>

          <div className="h-[2px] w-20 bg-red-700"></div>
        </div>
      </section>
    </main>
  );
}
