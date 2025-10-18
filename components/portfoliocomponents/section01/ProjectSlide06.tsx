 
import type { FC } from 'react';
import Image from 'next/image';

 
const ProjectSlide06: FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
       
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
        
   
        <div className="font-serif lg:pr-8">
          <h3 className="text-brand-red text-4xl font-bold mb-4">Outcome</h3>
          <p className="text-black text-xl leading-relaxed">
            DAOit operationalizes youth voice and transparency via simple, mobile-first flows. The readiness + adoption backbone de-risked launch and clarified iteration.
          </p>
        </div>
 
        <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
          <Image
            src="/images/sec1/3cols.png"  
            alt="Outcome data charts and graphs, part 1"
            width={619}
            height={837}
            className="w-full h-auto"
          />
          <Image
            src="/images/sec1/3colls2.png" 
            alt="Outcome data charts and graphs, part 2"
            width={619}
            height={837}
            className="w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectSlide06;