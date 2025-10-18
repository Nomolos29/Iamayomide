 
'use client';

import { useState, type FC, type ReactNode } from 'react';
import ProjectHeader03 from './section02/ProjectHeader03';  
import ProjectHeader04 from './section02/ProjectHeader04';  
import ProjectSlide08 from './section02/ProjectSlide08'; 
import ProjectSlide09 from './section02/ProjectSlide09';  
import ProjectSlide10 from './section02/ProjectSlide10';  
import ProjectSlide11 from './section02/ProjectSlide11';
 
const slidesData02: { header: ReactNode; content: ReactNode }[] = [
  { header: <ProjectHeader03 />, content: <ProjectSlide08 />, },  
  { header: <ProjectHeader04 />, content: <ProjectSlide09 /> },  
  { header: <ProjectHeader04 />, content: <ProjectSlide11 /> },
  { header: <ProjectHeader04 />, content: <ProjectSlide10 /> }
 
];

const DecorativeSideBorder02: FC = () => (
    <div className="h-full w-[9px] bg-[repeating-linear-gradient(transparent,transparent_40px,theme(colors.brand-red-dark)_40px,theme(colors.brand-red-dark)_122px)]"></div>
);

const ProjectCarousel02: FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const prevSlide = () => setCurrentSlide(currentSlide === 0 ? slidesData02.length - 1 : currentSlide - 1);
  const nextSlide = () => setCurrentSlide(currentSlide === slidesData02.length - 1 ? 0 : currentSlide + 1);

  return (
    <section className="relative bg-white overflow-hidden py-8">  
   
      <div className="container mx-auto px-4 relative h-48">  
        {slidesData02.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-300 ease-in-out ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
          >
            {slide.header}
          </div>
        ))}
      </div>
 
      <div className="relative w-full">
        <div className="overflow-hidden">
          <div 
            className="flex transition-transform ease-out duration-500"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {slidesData02.map((slide, index) => (
              <div key={index} className="min-w-full flex-shrink-0">
                {slide.content}
              </div>
            ))}
          </div>
        </div>
      </div>
 
      <div className="absolute bottom-4 left-0 right-0 flex justify-center p-4 z-20">
        <button onClick={prevSlide} className="bg-black/50 text-white p-2 rounded-full pointer-events-auto mx-2">Prev</button>
        <button onClick={nextSlide} className="bg-black/50 text-white p-2 rounded-full pointer-events-auto mx-2">Next</button>
      </div>
    </section>
  );
};

export default ProjectCarousel02;