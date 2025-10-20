 
import type { FC } from 'react';
import Image from 'next/image';
 
const ProjectSlide07: FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col items-center text-center gap-8">
         
        <div className="font-serif">
          <h3 className="text-brand-red text-4xl font-bold mb-4">Outcome</h3>
          <p className="text-black text-xl leading-relaxed max-w-3xl">
            DAOit operationalizes youth voice and transparency via simple, mobile-first flows. The readiness + adoption backbone de-risked launch and clarified iteration.
          </p>
        </div>

       
        <div>
          <Image
            src="/images/sec1/2rows1.png" 
            alt="Outcome data charts and graphs, part 3"
            width={819}
            height={787}
             
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectSlide07;