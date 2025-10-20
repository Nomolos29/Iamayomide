 
import type { FC } from 'react';
import Image from 'next/image';
 
const DecorativeSideBorder: FC = () => (
  <div className="h-full w-[9px] bg-[repeating-linear-gradient(transparent,transparent_40px,theme(colors.brand-red-secondary/50)_40px,theme(colors.brand-red-secondary/50)_122px)]">
  </div>
);
 
const ProjectSlide03: FC = () => {
  return (
    <section className="relative py-16 bg-white overflow-hidden">
       
      <div className="absolute top-0 left-0 h-full hidden lg:block">
        <DecorativeSideBorder />
      </div>
      <div className="absolute top-0 right-0 h-full hidden lg:block">
        <DecorativeSideBorder />
      </div> 
      <div className="container mx-auto px-4">  
        <div className="my-16">
          <Image
            src="/images/sec1/blackgb.png"  
            alt="Tech snapshot showing sentiment analysis UI"
            width={1568}  
            height={761}  
            className="w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default ProjectSlide03;