 
'use client';

import { useState, type FC, type ReactNode } from 'react';
import ProjectHeader01 from './section01/ProjectHeader01';
import ProjectHeader02 from './section01/ProjectHeader02';
import ProjectSlideContent01 from './section01/ProjectSlide01';
import ProjectSlideContent02 from './section01/ProjectSlide02';
import ProjectSlideContent03 from './section01/ProjectSlide03';
import ProjectSlideContent04 from './section01/ProjectSlideContent04';
import ProjectSlide05 from './section01/ProjectSlide05'; 
import ProjectSlide06 from './section01/ProjectSlide06';
import ProjectSlide07 from './section01/ProjectSlide07';

const slidesData: { header: ReactNode; content: ReactNode }[] = [
   { header: <ProjectHeader01 />, content: <ProjectSlideContent01 /> },
   { header: <ProjectHeader02 />, content: <ProjectSlideContent02 /> },
   { header: <ProjectHeader02 />, content: <ProjectSlideContent03 /> },
  { header: <ProjectHeader02 />, content: <ProjectSlideContent04 /> }, 
  { header: <ProjectHeader02 />, content: <ProjectSlide05 /> },
  { header: <ProjectHeader02 />, content: <ProjectSlide06 /> },
  { header: <ProjectHeader02 />, content: <ProjectSlide07 /> },
];

const DecorativeSideBorder: FC = () => (
    <div className="h-full w-[9px] bg-[repeating-linear-gradient(transparent,transparent_40px,theme(colors.brand-red-secondary/50)_40px,theme(colors.brand-red-secondary/50)_122px)]"></div>
);

const ProjectCarousel: FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const prevSlide = () => setCurrentSlide(currentSlide === 0 ? slidesData.length - 1 : currentSlide - 1);
  const nextSlide = () => setCurrentSlide(currentSlide === slidesData.length - 1 ? 0 : currentSlide + 1);

  return (
    
    <section className="relative bg-white overflow-hidden py-8 min-h-[1117px] flex flex-col">
    
       
      <div className="container mx-auto px-4 relative h-48 flex-shrink-0">
        {slidesData.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-300 ease-in-out ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
          >
            {slide.header}
          </div>
        ))}
      </div>
 
      <div className="relative w-full flex-grow">
        <div className="overflow-hidden h-full">
          <div 
             
            className="flex transition-transform ease-out duration-500 h-full"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {slidesData.map((slide, index) => (
              <div key={index} className="min-w-full flex-shrink-0 h-full">
                {slide.content}
              </div>
            ))}
          </div>
        </div>
      </div>

 
      <div className="absolute bottom-8 left-0 right-0 flex flex-col items-center z-30 space-y-4">
      
        <div className="flex justify-center pointer-events-none">
            {slidesData.map((_, index) => (
                <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full mx-2 pointer-events-auto transition-colors ${currentSlide === index ? 'bg-brand-red' : 'bg-gray-400'}`}
                    aria-label={`Go to slide ${index + 1}`}
                ></button>
            ))}
        </div>
   
        <div className="flex justify-center pointer-events-none">
          <button onClick={prevSlide} className="bg-black/50 text-white p-2 rounded-full pointer-events-auto mx-2">Prev</button>
          <button onClick={nextSlide} className="bg-black/50 text-white p-2 rounded-full pointer-events-auto mx-2">Next</button>
        </div>
      </div>
    </section>
  );
};

export default ProjectCarousel;