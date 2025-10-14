 'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

interface ProjectSlide {
  id: string;
  imageSrc: string;
  altText: string;
}

interface SliderProps {
  slides: ProjectSlide[];
}

const Slider: React.FC<SliderProps> = ({ slides }) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const goToNextSlide = () => {
    setCurrentSlideIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrevSlide = () => {
    setCurrentSlideIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  if (!slides || slides.length === 0) {
    return <div className="text-center text-gray-500">No projects to display.</div>;
  }

  const currentSlide = slides[currentSlideIndex];

  return (
     
    <div className="relative w-full aspect-[16/9] bg-white shadow-lg rounded-lg overflow-hidden">
      <Image
        src={currentSlide.imageSrc}
        alt={currentSlide.altText}
        fill
        className="object-contain"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
        priority={currentSlideIndex === 0}
      />

      {/* --- RESPONSIVE PREV BUTTON --- */}
      <button
        onClick={goToPrevSlide}
        className="absolute z-10 top-1/2 -translate-y-1/2 bg-black/50 text-white rounded-full flex items-center justify-center hover:bg-black/70 transition-all duration-300
                   left-2 w-8 h-8  // Mobile styles: small and close to the edge
                   md:left-4 md:w-12 md:h-12"  
        aria-label="Previous Slide"
      >
        <FaChevronLeft className="w-4 h-4 md:w-6 md:h-6" />
      </button>

      {/* --- RESPONSIVE NEXT BUTTON --- */}
      <button
        onClick={goToNextSlide}
        className="absolute z-10 top-1/2 -translate-y-1/2 bg-black/50 text-white rounded-full flex items-center justify-center hover:bg-black/70 transition-all duration-300
                   right-2 w-8 h-8 // Mobile styles
                   md:right-4 md:w-12 md:h-12"  
        aria-label="Next Slide"
      >
        <FaChevronRight className="w-4 h-4 md:w-6 md:h-6" />
      </button>
    </div>
  );
};

export default Slider;