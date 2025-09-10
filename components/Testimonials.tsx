"use client";

import React, { useState, useEffect } from 'react';
import { TestimonialItem } from '@/lib/types';

interface TestimonialsProps {
  testimonials?: TestimonialItem[];
}

const Testimonials: React.FC<TestimonialsProps> = ({ testimonials }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const defaultTestimonials: TestimonialItem[] = [
    {
      id: '1',
      name: 'Dr. Sarah Johnson',
      role: 'Education Director',
      organization: 'Lagos State Ministry of Education',
      content: 'Ayomide\'s work with KBM has revolutionized how we approach technology education in our schools. Her innovative programs have reached thousands of students, giving them skills for the digital economy.',
      rating: 5
    },
    {
      id: '2',
      name: 'Michael Chen',
      role: 'Program Coordinator',
      organization: 'LA School District STEM Program',
      content: 'The partnership with Ayomide has been transformative. Her ability to make complex technologies accessible to diverse student populations is remarkable. The students are not just learning—they\'re thriving.',
      rating: 5
    },
    {
      id: '3',
      name: 'Amina Abdullahi',
      role: 'Former Student, Now Blockchain Developer',
      organization: 'KBM Alumni',
      content: 'I was introduced to blockchain technology through KBM\'s program when I was in secondary school. Today, I work as a blockchain developer. Ayomide doesn\'t just teach technology—she opens doors to futures we never imagined.',
      rating: 5
    },
    {
      id: '4',
      name: 'Prof. David Williams',
      role: 'Research Director',
      organization: 'Harvard Graduate School of Education',
      content: 'Ayomide\'s approach to educational technology integration is both innovative and deeply impactful. Her work represents the future of inclusive technology education.',
      rating: 5
    },
    {
      id: '5',
      name: 'Grace Okafor',
      role: 'Head Teacher',
      organization: 'Government Secondary School, Abuja',
      content: 'The Web3 Educational Exposition changed everything for our students. Many had never heard of AI or blockchain before. Now, some are pursuing careers in technology. Ayomide gave our students hope and direction.',
      rating: 5
    }
  ];

  const testimonialsToUse = testimonials || defaultTestimonials;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonialsToUse.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonialsToUse.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonialsToUse.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonialsToUse.length) % testimonialsToUse.length);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={`text-xl ${i < rating ? 'text-yellow-500' : 'text-gray-300'}`}>
        ★
      </span>
    ));
  };

  return (
    <section className="w-full bg-gray-50 py-16 md:py-24">
      <div className="max-w-[1440px] w-full mx-auto px-5 md:px-10">
        <div className="text-center mb-16">
          <h2 className="text-[32px] md:text-[48px] font-bold mb-4">What People Say</h2>
          <div className="h-1 w-[150px] bg-red-700 mx-auto mb-4"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Hear from students, educators, and partners who have experienced the impact of our educational initiatives.
          </p>
        </div>

        <div className="relative overflow-hidden">
          {/* Main Testimonial Display with sliding animation */}
          <div className="bg-white rounded-lg shadow-xl p-8 mb-8 overflow-hidden md:p-12 mx-auto max-w-4xl relative">
            <div className="flex transition-transform duration-700 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
              {testimonialsToUse.map((testimonial, index) => (
                <div key={index} className={`w-full flex-shrink-0 text-center ${currentIndex == index ? "opacity-100" : "opacity-0"}`}>
                  {/* Quote Icon */}
                  <div className="text-6xl text-red-200 mb-4">
                    <svg className="w-16 h-16 mx-auto opacity-30" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                    </svg>
                  </div>

                  <p className={`text-lg md:text-xl text-gray-700 leading-relaxed mb-8 italic min-h-[120px] flex items-center justify-center`}>
                    {testimonial.content}
                  </p>

                  {/* Rating */}
                  <div className="flex justify-center mb-6">
                    {renderStars(testimonial.rating || 5)}
                  </div>

                  {/* Author Info */}
                  <div className="flex flex-col items-center text-center justify-center gap-2">
                    <h4 className="font-bold text-xl text-gray-800">
                      {testimonial.name}
                    </h4>
                    <p className="text-red-600 font-semibold text-lg">
                      {testimonial.role}
                    </p>
                    {testimonial.organization && (
                      <p className="text-gray-500">
                        {testimonial.organization}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows with improved positioning */}
          <button
            type="button"
            onClick={prevSlide}
            className="absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 bg-white text-red-700 hover:bg-red-700 hover:text-white p-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 z-10 border-2 border-red-700"
            aria-label="Previous testimonial"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            type="button"
            onClick={nextSlide}
            className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 bg-white text-red-700 hover:bg-red-700 hover:text-white p-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 z-10 border-2 border-red-700"
            aria-label="Next testimonial"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Enhanced Dots Indicator */}
        <div className="flex justify-center mt-8 space-x-3">
          {testimonialsToUse.map((_, index) => (
            <button
              type="button"
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all duration-300 rounded-full ${
                index === currentIndex
                  ? 'w-8 h-3 bg-red-700 shadow-lg'
                  : 'w-3 h-3 bg-gray-300 hover:bg-gray-400 hover:scale-125'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="text-center">
            <div className="text-4xl font-bold text-red-700 mb-2">10,500+</div>
            <p className="text-gray-600">Students Impacted</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-red-700 mb-2">50+</div>
            <p className="text-gray-600">Partner Institutions</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-red-700 mb-2">15+</div>
            <p className="text-gray-600">Countries Reached</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;