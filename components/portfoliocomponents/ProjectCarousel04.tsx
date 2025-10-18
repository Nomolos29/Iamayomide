 
'use client';

import { useState, type FC, type ReactNode } from 'react';
 
import ProjectHeader07 from './section4/ProjectHeader07';
import ProjectSlide15 from './section4/ProjectSlide15';
import ProjectHeader08 from './section4/ProjectHeader08';
import ProjectSlide16 from './section4/ProjectSlide16';
import ProjectSlide17 from './section4/ProjectSlide17';
import ProjectHeader09 from './section4/ProjectHeader09'; 
import ProjectSlide18 from './section4/ProjectSlide18';

const slidesData04: { header: ReactNode; content: ReactNode }[] = [
  { header: <ProjectHeader07 />, content: <ProjectSlide15 /> },
  { header: <ProjectHeader08 />, content: <ProjectSlide16 /> },
    { header: <ProjectHeader08 />, content: <ProjectSlide17 /> },
    { header: <ProjectHeader09 />, content: <ProjectSlide18 /> },  
   
];

const ProjectCarousel04: FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const prevSlide = () => setCurrentSlide(currentSlide === 0 ? slidesData04.length - 1 : currentSlide - 1);
  const nextSlide = () => setCurrentSlide(currentSlide === slidesData04.length - 1 ? 0 : currentSlide + 1);

  return (
    <section className="relative  overflow-hidden py-10 min-h-[1200px] flex flex-col">
  
      <div className="container mx-auto px-4 relative h-48 flex-shrink-0">
        {slidesData04.map((slide, index) => (
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
            {slidesData04.map((slide, index) => (
              <div key={index} className="min-w-full flex-shrink-0 h-full">
                {slide.content}
              </div>
            ))}
          </div>
        </div>
      </div>
 
      <div className="absolute bottom-8 left-0 right-0 flex flex-col items-center z-30 space-y-4">
        <div className="flex justify-center pointer-events-none">
            {slidesData04.map((_, index) => (
                <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full mx-2 pointer-events-auto transition-colors ${currentSlide === index ? 'bg-brand-red' : 'bg-gray-400'}`}
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

export default ProjectCarousel04;