import Image from "next/image";


export default function Home() {

  const stats = [
    {
      number: "20k+",
      name: "Students"
    },
    {
      number: "20k+",
      name: "Students"
    },
    {
      number: "20k+",
      name: "Students"
    }
  ]

  return (
    <main className="w-full flex flex-col justify-center items-center">
      <section className="flex justify-between items-center max-w-[1440px] w-full py-20 px-10 bg-slate-50">
        <aside className="w-1/2 flex flex-col gap-y-20">
          <div className="flex flex-col gap-y-6 w-full">
            <h1 className="text-[60px] font-extrabold">Hello, I'm <div className="bg-gradient-to-br from-[#000000] via-[#a0a0a0f5] to-[#9c0000] bg-clip-text"><h1 className="text-transparent text-[58px] leading-tight"><span className="text-[90px] leading-none">A</span>yomide <br /><span className="text-[90px] leading-none">A</span>rowolo-<span className="text-[90px] leading-none">A</span>yodeji</h1></div></h1>
            <p className="text-xl text-[#5a5a5a]">I'm an EdTech innovator, AI literacy advocate, and blockchain educator dedicated to expanding access to emerging technologies for underserved communities.</p>
          </div>

        </aside>
        <Image src="/globe.svg" alt="Image" width={0} height={0} className="h-[450px] w-[400px] bg-white rounded-lg shadow-lg" />
      </section>

      <section className="flex justify-between items-center max-w-[1440px] w-full px-10 -mt-10">
        <div className="w-full bg-transparent shadow-md shadow-[#ffe364ab] rounded-lg backdrop-blur-md h-[120px] flex justify-between items-center">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center text-center w-1/3">
              <h5 className="text-3xl font-bold">{stat.number}</h5>
              <p className="text-lg">{stat.name}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="flex justify-between items-center max-w-[1440px] w-full py-20 px-10">
        <div className="relative">
          <div className="relative z-10">
            <Image src="/globe.svg" alt="Image" width={0} height={0} className="h-[500px] w-[400px] bg-slate-50 rounded-lg shadow-lg" />
            <div className="w-[50px] h-[150px] flex flex-col justify-between items-center p-3 absolute bg-[#ffffff94] top-0 rounded-lg backdrop-blur-lg"></div>
          </div>
          <div className="h-[500px] w-[400px] border-slate-300 border-[5px] absolute top-8 left-8 rounded-md"></div>
        </div>

        <aside className="w-1/2 flex flex-col gap-y-20">
          <div className="flex flex-col gap-y-8">
            <h1 className="text-[40px] leading-none">About Me</h1>
            <span className="h-1 w-[100px] bg-yellow-500">.</span>
            <p className="text-lg text-[#a0a0a0] line-clamp-[7]">As the founder of Know the Blocks Maven (KBM), she leads transformative initiatives that integrate AI, blockchain, and Web3 literacy into traditional education systems, empowering over 10,500 students (and counting) across Africa. Through strategic collaborations, including partnerships with the Nigerian government and the Los Angeles School District's STEM Literacy Editorial Exchange Program, Ayo pioneers efforts to bridge the digital divide and foster financial inclusion across Africa. She is also the first Web3 educator to organize a self-funded Web3 Educational Exposition for underserved communities, introducing emerging technologies to students in government senior secondary schools.</p>
            <div className="flex gap-x-10">
              <button type="button" className="py-2 px-6 bg-gradient-to-r from-yellow-500 to-yellow-300 text-lg font-medium rounded-md">Contact Me</button>
              <button type="button" className="py-2 px-6 bg-gradient-to-r from-yellow-500 to-yellow-300 text-lg font-medium rounded-md">Read More</button>
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
    </main>
  );
}
