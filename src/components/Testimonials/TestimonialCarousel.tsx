'use client';
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  rating: number;
  text: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Jason Berk',
    rating: 5,
    text: 'Dr. Shah has been my family physician for over 4 years now. He is an excellent choice along with his great staff. They are always willing to answer all of your questions and spend as much time as needed. I am very satisfied.',
  },
  {
    id: 2,
    name: 'Sarah Johnson',
    rating: 5,
    text: "Dr. Shah is the best doctor I've ever had. He takes the time to ensure that all of my concerns are addressed with his appointments. He is thorough, caring, and a pleasure to work with.",
  },
  {
    id: 3,
    name: 'Michael Rodriguez',
    rating: 5,
    text: 'Exceptional care and professionalism. The entire staff is friendly and accommodating. Dr. Shah provides comprehensive healthcare with a personal touch that makes all the difference.',
  },
  {
    id: 4,
    name: 'Emily Chen',
    rating: 5,
    text: "Outstanding primary care experience. Dr. Shah is knowledgeable, patient, and truly cares about his patients' wellbeing. The office runs efficiently and the staff is always helpful.",
  },
];

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % testimonials.length);
    }, 5000);

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [isAutoPlaying]);

  const goToPrevious = () => {
    setCurrentIndex(
      prev => (prev - 1 + testimonials.length) % testimonials.length
    );
    setIsAutoPlaying(false);
  };

  const goToNext = () => {
    setCurrentIndex(prev => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  const renderStars = (rating: number) => {
    return (
      <div className='mb-4 flex justify-center'>
        {[...Array(5)].map((_, index) => (
          <Star
            key={index}
            className={`h-5 w-5 ${
              index < rating ? 'fill-current text-yellow-400' : 'text-gray-300'
            }`}
          />
        ))}
      </div>
    );
  };

  return (
    <section className='relative overflow-hidden bg-slate-800 py-16 sm:py-24'>
      {/* Background Pattern */}
      <div className='absolute inset-0 opacity-5'>
        <div className='absolute inset-0 bg-gradient-to-br from-teal-400 to-blue-600'></div>
      </div>

      <div className='relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8'>
        {/* Header */}
        <div className='mb-12 text-center'>
          <div className='mb-4 flex items-center justify-center'>
            <div className='h-px w-16 bg-teal-400'></div>
            <span className='px-4 text-sm font-medium tracking-wider text-teal-400 uppercase'>
              Happy Clients
            </span>
            <div className='h-px w-16 bg-teal-400'></div>
          </div>
          <h2 className='mb-4 text-3xl font-bold text-white md:text-4xl'>
            What Our Patients Are Saying
          </h2>
        </div>

        {/* Carousel Container */}
        <div className='relative'>
          {/* Quote Icon */}
          <div className='absolute top-0 left-1/2 z-10 -translate-x-1/2 -translate-y-4 transform'>
            <div className='rounded-full bg-teal-500 p-3'>
              <Quote className='h-6 w-6 text-white' />
            </div>
          </div>

          {/* Main Carousel */}
          <div className='mx-auto max-w-4xl rounded-2xl bg-white/10 p-8 backdrop-blur-sm md:p-12'>
            <div className='relative flex h-64 items-center md:h-48'>
              {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  className={`absolute inset-0 transition-all duration-500 ease-in-out ${
                    index === currentIndex
                      ? 'translate-x-0 transform opacity-100'
                      : index < currentIndex
                        ? '-translate-x-full transform opacity-0'
                        : 'translate-x-full transform opacity-0'
                  }`}
                >
                  <div className='flex h-full flex-col justify-center text-center'>
                    {renderStars(testimonial.rating)}

                    <blockquote className='mb-6 text-lg leading-relaxed text-white italic md:text-xl'>
                      &ldquo;{testimonial.text}&rdquo;
                    </blockquote>

                    <cite className='text-lg font-semibold text-teal-300 not-italic'>
                      {testimonial.name}
                    </cite>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={goToPrevious}
            className='group absolute top-1/2 left-4 -translate-y-1/2 transform rounded-full bg-white/20 p-2 backdrop-blur-sm transition-all duration-200 hover:bg-white/30'
            aria-label='Previous testimonial'
          >
            <ChevronLeft className='h-6 w-6 text-white group-hover:text-teal-300' />
          </button>

          <button
            onClick={goToNext}
            className='group absolute top-1/2 right-4 -translate-y-1/2 transform rounded-full bg-white/20 p-2 backdrop-blur-sm transition-all duration-200 hover:bg-white/30'
            aria-label='Next testimonial'
          >
            <ChevronRight className='h-6 w-6 text-white group-hover:text-teal-300' />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className='mt-8 flex justify-center space-x-2'>
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-3 w-3 rounded-full transition-all duration-200 ${
                index === currentIndex
                  ? 'scale-110 bg-teal-400'
                  : 'bg-white/40 hover:bg-white/60'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>

        {/* Progress Bar */}
        <div className='mx-auto mt-6 h-1 w-full max-w-md rounded-full bg-white/20'>
          <div
            className='h-1 rounded-full bg-teal-400 transition-all duration-1000 ease-linear'
            style={{
              width: `${((currentIndex + 1) / testimonials.length) * 100}%`,
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default TestimonialCarousel;
