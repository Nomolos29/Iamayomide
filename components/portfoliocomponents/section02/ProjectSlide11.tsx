import type { FC } from 'react';
import Image from 'next/image';

const ProjectSlide11: FC = () => {
  return (
    <div className="container mx-auto px-4 py-8 max-h-[1117px] min-h-[900px] flex flex-col justify-center">
    
      <div className="w-full h-full min-h-[700px] rounded-2xl bg-gradient-to-r from-brand-red to-brand-dark-red-gradient relative overflow-hidden">
        
         
        <div className="absolute top-0 right-0 h-full w-1/2 z-10 pointer-events-none">
          <Image
            src="/images/sec2/overlay.png"  
            alt="Decorative background curve"
            layout="fill"
            objectFit="cover"
            objectPosition="left center"
          />
        </div>

        
        <div className="relative z-20 text-white font-serif flex flex-col justify-between h-full">
       
          <div>
           
            <div className="px-8 lg:px-12 pt-8 lg:pt-12 pb-6">
              <h3 className="text-3xl lg:text-4xl font-bold mb-4">Outcomes.</h3>
              <ul className="list-disc pl-5 space-y-2 text-lg lg:text-xl">
                <li>A reusable, evidence-aligned decision system CPI can apply across programs.</li>
                <li>Clear implementation roadmap</li>
                <li>(Foundation & Planning → Design & Development → Implementation & Scaling → Sustainability & Innovation).</li>
              </ul>
              <button className="mt-6 px-6 py-2 text-lg font-bold rounded-lg border-2 border-white bg-transparent hover:bg-white hover:text-brand-red transition-colors duration-300">
                Read more
              </button>
            </div>

      
            <div className="h-[2px] bg-white"></div>
 
            <div className="px-8 lg:px-12 py-6">
              <h3 className="text-3xl lg:text-4xl font-bold mb-4">Tools Used In The Project</h3>
              <ul className="list-disc pl-5 space-y-2 text-lg lg:text-xl">
                <li>A reusable, evidence-aligned decision system CPI can apply across programs.</li>
                <li>Clear implementation roadmap</li>
                <li>(Foundation & Planning → Design & Development → Implementation & Scaling → Sustainability & Innovation).</li>
              </ul>
            </div>
 
            <div className="h-[2px] bg-white"></div>
          </div>

        
          <div className="px-8 lg:px-12 pt-6 pb-8 lg:pb-12">
            <p className="text-lg lg:text-xl italic">
              The shift from &quot;pick a tool&quot; to explicit decision levels helped CPI link pedagogy to operations — and made scale + quality a both/and, not a trade-off.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectSlide11;