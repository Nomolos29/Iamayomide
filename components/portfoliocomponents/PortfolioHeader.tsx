 
import React from "react";

const PortfolioHeader: React.FC = () => {
  return ( 
    <section className="relative overflow-x-hidden bg-white">
       
      <div className="hidden lg:block relative h-[1117px]"> 
        <div
          className="absolute border-[50px] border-brand-red rounded-[20px] bg-white"
          style={{
            width: "1896px",
            height: "670px",
            left: "-84px",
            top: "225px",
          }}
        />

        <svg
          className="absolute"
          style={{
            width: "696px",
            height: "361px",
            left: "80px",
            top: "416px",
          }}
          viewBox="0 0 697 363"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M366.277 1H1V362H697" stroke="black" strokeWidth="1" />
        </svg>
        
        
        <div
          className="absolute font-bricolage"
          style={{
            width: "723px",
            left: "121px",
            top: "448px",
            fontSize: "95px",
            lineHeight: "1.2",
          }}
        >
          <span className="font-bold">Ayomide </span>
          <span className="font-normal">Arowolo-Ayodeji</span>
        </div>

        <div
          className="absolute font-bricolage font-normal"
          style={{ left: "121px", top: "686px", fontSize: "36px" }}
        >
          Portfolio
        </div>


        <div
          className="absolute"
          style={{
            width: "368px",
            height: "624px",
            left: "1280px",
            top: "0px",
          }}
        > 
          <div
            className="absolute bg-[#000000]"
            style={{
              width: "368px",
              height: "440px",
              left: "0px",
              top: "0px",
              filter: "drop-shadow(20px 20px 54px rgba(0, 0, 0, 0.25))",
            }}
          /> 
          <div
            className="absolute rounded-full bg-brand-red flex flex-col items-center justify-center"
            style={{
              width: "325px",
              height: "325px",
              left: "22px",
              top: "277px",
            }}
          >
            <div
              className="text-white font-display font-bold"
              style={{ fontSize: "66px", lineHeight: "1" }}
            >
              2025
            </div>
            <div
              className="text-white font-display font-normal"
              style={{ fontSize: "47px", lineHeight: "1.2", marginTop: "8px" }}
            >
              Portfolio
            </div>
          </div>
        </div> 
        <div
          className="absolute text-brand-red text-center font-serif"
          style={{
            width: "235px",
            left: "1346px",
            top: "777px",
            fontSize: "20px",
            lineHeight: "1.15",
          }}
        >
          Learning Design & EdTech Portfolio — 2025 Edition
        </div>
      </div> 
      <div className="hidden md:block lg:hidden relative min-h-screen py-16 px-8">
        <div className="relative max-w-5xl mx-auto">
          <div className="absolute left-0 top-32 w-full h-[500px] border-[40px] border-brand-red rounded-[20px]" />

          <div className="relative z-10 pt-40">
            <h1 className="font-bricolage text-6xl md:text-7xl leading-tight">
              <span className="font-bold">Ayomide </span>
              <span className="font-normal">Arowolo-Ayodeji</span>
            </h1>
            <div className="font-bricolage text-3xl md:text-4xl font-normal mt-6">
              Portfolio
            </div>
          </div>

          <div className="absolute right-8 top-0 w-[300px]">
            <div className="w-full h-[360px] bg-[#D9D9D9] shadow-2xl" />
            <div className="absolute left-1/2 -translate-x-1/2 top-[220px] w-[280px] h-[280px] rounded-full bg-brand-red flex flex-col items-center justify-center shadow-xl">
              <div className="text-white font-display text-5xl font-bold">
                2025
              </div>
              <div className="text-white font-display text-4xl font-normal mt-2">
                Portfolio
              </div>
            </div>
            <div
              className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-full text-center text-brand-red text-lg font-serif"
            >
              Learning Design & EdTech Portfolio — 2025 Edition
            </div>
          </div>
        </div>
      </div>
 
      <div className="md:hidden relative min-h-screen py-12 px-6">
        <div className="space-y-8">
          <div>
            <h1 className="font-display text-4xl sm:text-5xl leading-tight">
              <span className="font-bold">Ayomide </span>
              <span className="font-normal">Arowolo-Ayodeji</span>
            </h1>
            <div className="font-display text-2xl sm:text-3xl font-normal mt-4">
              Portfolio
            </div>
          </div>

          <div className="w-full h-[200px] border-[20px] border-brand-red rounded-[12px]" />

          <div className="relative w-full max-w-[300px] mx-auto mt-12">
            <div className="w-full h-[300px] bg-[#D9D9D9] shadow-xl" />
            <div className="absolute left-1/2 -translate-x-1/2 top-[150px] w-[240px] h-[240px] rounded-full bg-brand-red flex flex-col items-center justify-center shadow-lg">
              <div className="text-white font-display text-5xl font-bold">
                2025
              </div>
              <div className="text-white font-display text-3xl font-normal mt-2">
                Portfolio
              </div>
            </div>
            <div
              className="mt-20 text-center text-brand-red text-base font-serif"
            >
              Learning Design & EdTech Portfolio — 2025 Edition
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioHeader;