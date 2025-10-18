 
'use client';

import { useState, type FC, type ReactNode } from 'react';
 
import ProjectHeader10 from './section06/ProjectHeader10';
import ProjectSlide19 from './section06/ProjectSlide19';
import ProjectHeader11 from './section06/ProjectHeader11';
import ProjectSlide20 from './section06/ProjectSlide20';

const slidesData06: { header: ReactNode; content: ReactNode }[] = [
  { header: <ProjectHeader10 />, content: <ProjectSlide19 /> },
  { header: <ProjectHeader11 />, content: <ProjectSlide20 /> },
 
];

const ProjectCarousel06: FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const prevSlide = () => setCurrentSlide(currentSlide === 0 ? slidesData06.length - 1 : currentSlide - 1);
  const nextSlide = () => setCurrentSlide(currentSlide === slidesData06.length - 1 ? 0 : currentSlide + 1);

  return (
    <section className="relative bg-white overflow-hidden py-10 min-h-[1200px] flex flex-col">
      {/* Header Area */}
      <div className="container mx-auto px-4 relative h-48 flex-shrink-0">
        {slidesData06.map((slide, index) => (
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
            {slidesData06.map((slide, index) => (
              <div key={index} className="min-w-full flex-shrink-0 h-full">
                {slide.content}
              </div>
            ))}
          </div>
        </div>
      </div>
 
      <div className="absolute bottom-8 left-0 right-0 flex justify-center z-30 pointer-events-none">
        <button onClick={prevSlide} className="bg-black/50 text-white p-2 rounded-full pointer-events-auto mx-2">Prev</button>
        <button onClick={nextSlide} className="bg-black/50 text-white p-2 rounded-full pointer-events-auto mx-2">Next</button>
      </div>
    </section>
  );
};

export default ProjectCarousel06;