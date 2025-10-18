 
import type { FC } from 'react';
import Image from 'next/image';

const ProjectSlide12: FC = () => {
  return (
    <div className="relative container mx-auto px-4 py-8 max-h-[1117px] min-h-[900px] flex items-center overflow-hidden">
      
       
      <div className="absolute top-1/2 -translate-y-1/2 -right-1/2 w-[150%] h-[200%] z-0 opacity-50 pointer-events-none">
        <Image
          src="/images/sec3/curve.png"
          alt="Decorative background curve - outer layer"
          layout="fill"
          objectFit="contain"
          objectPosition="center right"
        />
      </div>

 
      <div className="absolute top-1/2 -translate-y-1/2 -right-2/3 w-[150%] h-[200%] z-10 pointer-events-none">
        <Image
          src="/images/sec3/curve.png"
          alt="Decorative background curve - inner layer"
          layout="fill"
          objectFit="contain"
          objectPosition="center right"
        />
      </div>

     
      <div className="relative z-20 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center w-full">
        
        
        <div className="font-serif space-y-12">
          <div>
            <h3 className="text-brand-red text-4xl font-bold mb-3">Context.</h3>
            <p className="text-black text-xl leading-relaxed">
              A 90-minute instructional design workshop delivered to ExxonMobil staff to build shared language, practical habits, and hands-on design capacity for high-impact virtual learning sessions and internal training.
            </p>
          </div>
          <div>
            <h3 className="text-brand-red text-4xl font-bold mb-3">Problem</h3>
            <p className="text-black text-xl leading-relaxed">
              Cross-functional teams lacked a common ID framework and struggled with engagement in virtual environments. Leadership needed tools staff could immediately apply to improve lesson quality and learner interaction.
            </p>
          </div>
          <div>
            <h3 className="text-brand-red text-4xl font-bold mb-3">My Role</h3>
            <p className="text-black text-xl leading-relaxed">
              Designer & facilitator — agenda design, activities, tooling, facilitation, and after-action recommendations.
            </p>
          </div>
        </div>

       
        <div className="flex justify-center items-center">
          <Image
            src="/images/sec3/frame.png"
            alt="Screenshot of the ExxonMobil ID Training presentation"
            width={800}
            height={450}
            layout="intrinsic"
            objectFit="contain"
            className="rounded-2xl shadow-2xl"
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectSlide12;