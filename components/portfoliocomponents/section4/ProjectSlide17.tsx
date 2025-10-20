  
import type { FC } from 'react';
import Image from 'next/image';
 
const ProjectSlide17: FC = () => {
  return (
    <div className="container p-10 bg-brand-light-pink">
       <div className="relative w-full min-h-[900px] max-h-[1117px] overflow-hidden">
      
      <Image
        src="/images/sec4/cirrriculum-img.png"
        alt="KBM Curriculum"
        fill  
        objectFit="cover" 
        className="pointer-events-none" 
      />
 
    </div>
    </div>
  );
};
 
export default ProjectSlide17;