 
'use client';

import { useState, type FC, type ReactNode } from 'react';
import ProjectHeader05 from './section3/ProjectHeader05';  
import ProjectSlide12 from './section3/ProjectSlide12';    
import ProjectHeader06 from './section3/ProjectHeader06';
import ProjectSlide13 from './section3/ProjectSlide13';
import ProjectSlide14 from './section3/ProjectSlide14';

const slidesData03: { header: ReactNode; content: ReactNode }[] = [
  { header: <ProjectHeader05 />, content: <ProjectSlide12 /> },
  { header: <ProjectHeader06 />, content: <ProjectSlide13 /> },
    { header: <ProjectHeader06 />, content: <ProjectSlide14 /> }
  
  
];

const DecorativeSideBorder03: FC = () => (
    <div className="h-full w-[9px] bg-[repeating-linear-gradient(transparent,transparent_40px,theme(colors.brand-red-secondary/50)_40px,theme(colors.brand-red-secondary/50)_122px)]"></div>
);

const ProjectCarousel03: FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const prevSlide = () => setCurrentSlide(currentSlide === 0 ? slidesData03.length - 1 : currentSlide - 1);
  const nextSlide = () => setCurrentSlide(currentSlide === slidesData03.length - 1 ? 0 : currentSlide + 1);

  return (
    <section className="relative bg-white overflow-hidden py-8 min-h-[1117px] flex flex-col">
      
     
      <div className="container mx-auto px-4 relative h-48 flex-shrink-0">
        {slidesData03.map((slide, index) => (
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
            {slidesData03.map((slide, index) => (
              <div key={index} className="min-w-full flex-shrink-0 h-full">
                {slide.content}
              </div>
            ))}
          </div>
        </div>
      </div>

       
      <div className="absolute bottom-4 left-0 right-0 flex justify-center z-30 pointer-events-none">
        <button onClick={prevSlide} className="bg-black/50 text-white p-2 rounded-full pointer-events-auto mx-2">Prev</button>
        <button onClick={nextSlide} className="bg-black/50 text-white p-2 rounded-full pointer-events-auto mx-2">Next</button>
      </div>
    </section>
  );
};

export default ProjectCarousel03;