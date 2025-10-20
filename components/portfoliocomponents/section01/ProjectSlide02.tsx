 
import type { FC } from 'react';
import Image from 'next/image';
 
const DecorativeSideBorder: FC = () => (
  <div className="h-full w-[9px] bg-[repeating-linear-gradient(transparent,transparent_40px,theme(colors.brand-red-secondary/50)_40px,theme(colors.brand-red-secondary/50)_122px)]">
  </div>
);
 
const ProjectSlide02: FC = () => {
  return (
    <section className="relative py-16 bg-white overflow-hidden">
       
      <div className="absolute top-0 left-0 h-full hidden lg:block">
        <DecorativeSideBorder />
      </div>
      <div className="absolute top-0 right-0 h-full hidden lg:block">
        <DecorativeSideBorder />
      </div>

    
      <div className="container mx-auto px-4">

         
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 my-16">
          <div className="flex-shrink-0">
            <Image 
              src="/images/sec1/users.png"
              alt="Avatars of target users" 
              width={184}
              height={276}
            />
          </div>
          <div className="font-serif text-left">
            <h3 className="text-brand-red text-4xl font-bold mb-2">Target Users</h3>
            <p className="text-black text-xl leading-relaxed">
              Students (13–30), educators & leaders, NGOs/policymakers, researchers/data scientists, community/diaspora funders.
            </p>
          </div>
        </div>

     
        <div className="bg-brand-red text-white font-serif p-8 rounded-2xl">
          <h3 className="text-4xl font-bold">Tech Snapshot (UIUX)</h3>
          <p className="text-lg mt-2 max-w-4xl">
            Ethereum-compatible chain; modular smart contracts; Snapshot for off-chain voting; AI/NLP for sentiment; optional GIS event integration; web app now, PWA/mobile planned.
          </p>
        </div>

       
        <div className="bg-brand-red px-[30px] py-[123px] border-2 border-none rounded-2xl mt-[-2rem] z-10 relative">
          <Image
            src="/images/sec1/uiux.png"
            alt="A snapshot of the DAOit application UI"
            width={1502}
            height={430}
            className="w-full h-auto rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default ProjectSlide02;