 
import type { FC } from 'react';
import Image from 'next/image';

const ProjectSlide09: FC = () => {
  return (
    <div className="container mx-auto px-4 py-8 max-h-[1117px] overflow-hidden flex flex-col items-center">
      
      <div className="relative grid grid-cols-1 lg:grid-cols-3 gap-8 w-full max-w-7xl px-4 mt-8">  
        <div className="absolute hidden lg:block" style={{ left: 'calc(33.333% + 4px)', top: '10%', height: '80%', width: '4px', backgroundColor: '#BD1842' }}></div>
        <div className="absolute hidden lg:block" style={{ left: 'calc(66.666% + 4px)', top: '10%', height: '80%', width: '4px', backgroundColor: '#BD1842' }}></div>

        {/* Flowchart 1 */}
        <div className="lg:col-span-1 flex justify-center">
          <Image
            src="/images/sec2/flowchart11.png"  
            alt="Learning Objective Assessment Flowchart"
            width={400} 
            height={800}  
            layout="intrinsic" 
            objectFit="contain"
            className="w-full h-auto max-h-[950px] object-contain"  
          />
        </div>
 
        <div className="lg:col-span-1 flex justify-center">
          <Image
            src="/images/sec2/flowchart12.png"  
            alt="Framework for Delivery Form Flowchart"
            width={400}
            height={800}  
            layout="intrinsic"
            objectFit="contain"
            className="w-full h-auto max-h-[950px] object-contain"
          />
        </div>
 
        <div className="lg:col-span-1 flex justify-center">
          <Image
            src="/images/sec2/flowchart13.png" 
            alt="Framework for Delivery Mode Flowchart"
            width={400}
            height={800}  
            layout="intrinsic"
            objectFit="contain"
            className="w-full h-auto max-h-[950px] object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectSlide09;