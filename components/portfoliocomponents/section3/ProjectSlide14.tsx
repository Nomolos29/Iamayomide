 
import type { FC } from 'react';
import Image from 'next/image';

const ProjectSlide14: FC = () => {
  return ( 
    <div className="w-full h-full p-4 sm:p-6 md:p-8 flex flex-col justify-center">
      
         <div className="w-full h-full rounded-2xl bg-gradient-to-r from-brand-red to-brand-dark-red-gradient relative overflow-hidden flex flex-col">
        
         
        <div className="absolute top-0 right-0 h-full w-1/2 z-10 pointer-events-none">
          <Image
            src="/images/sec2/overlay.png"
            alt="Decorative background curve"
            layout="fill"
            objectFit="cover"
            objectPosition="left center"
          />
        </div>
 
        <div className="relative z-20 text-white font-serif flex flex-col flex-grow p-8 sm:p-12 lg:p-16">
           
          <div className="flex-grow flex flex-col justify-center">
            
             <div className="py-6 lg:py-8">
              <h3 className="text-4xl lg:text-5xl font-bold mb-4">Tools</h3>
              <p className="text-xl lg:text-2xl max-w-4xl">
                Zoom, Slido (polls/word-clouds), timers, Google Forms/Docs for team canvases, Mentimeter
              </p>
            </div>

            <div className="h-px bg-white/50"></div>

             <div className="py-6 lg:py-8">
              <h3 className="text-4xl lg:text-5xl font-bold mb-4">Take-Home Toolkit.</h3>
              <p className="text-xl lg:text-2xl max-w-4xl">
                Lesson blueprint, evaluation grid, activity bank, facilitation checklist.
              </p>
            </div>

            <div className="h-px bg-white/50"></div>
 
            <div className="py-6 lg:py-8">
              <h3 className="text-4xl lg:text-5xl font-bold mb-4">Outcomes</h3>
              <p className="text-xl lg:text-2xl max-w-9xl">
                Shared vocabulary; 5 mini-lessons prototyped; backlog of measurable objectives; follow-on coaching requested.
              </p>
            </div>
          </div>
 
          <div className="absolute bottom-6 right-6 md:bottom-10 md:right-10 z-30 w-32 h-32 sm:w-40 sm:h-40 lg:w-52 lg:h-52 pointer-events-none">
             <Image
                src="/images/sec3/arrow.png"
                alt="Decorative arrow"
                layout="fill"
                objectFit="contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectSlide14;