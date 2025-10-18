 
import type { FC } from 'react';
import Image from 'next/image';

const ProjectSection05: FC = () => {
  return ( 
    <section className="bg-white py-10 lg:py-20">
       
      <div className="container mx-auto px-4 mb-12">
        <div className="flex items-start gap-10 max-w-7xl mx-auto">
 
          <div className="bg-brand-red text-white font-serif text-7xl font-bold w-[122px] h-[151px] flex items-center justify-center flex-shrink-0">
            05
          </div>  
          <div className="pt-5">
            <h2 className="font-serif text-brand-red text-6xl">Wearable Musical-Instrument Jacket</h2>
            <p className="font-serif text-black text-3xl mt-2">
              Storyboard & learning design using sound mapping for underserved schools.
            </p>
          </div>
        </div>
      </div>
 
      <div className="container mx-auto px-4"> 
        <div className="flex flex-col md:flex-row justify-center items-center gap-6">
           
          <div>
            <Image
              src="/images/sec5/image1.png"  
              alt="Project context, problem, and role for the Wearable Musical Jacket"
              width={739}
              height={884}
              className="shadow-xl"
            />
          </div>
 
          <div className="hidden md:flex justify-center items-center h-[884px]">
            <div className="flex gap-x-4 h-full">
              <div className="w-px h-full bg-brand-red"></div>
              <div className="w-px h-full bg-brand-red"></div>
              <div className="w-px h-full bg-brand-red"></div>
              <div className="w-px h-full bg-brand-red"></div>
              <div className="w-px h-full bg-brand-red"></div>
            </div>
          </div>
 
          <div>
            <Image
              src="/images/sec5/image.png"  
              alt="Process highlights, app mockups, and outcomes for the project"
              width={739}
              height={884}
              className="shadow-xl"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default ProjectSection05;