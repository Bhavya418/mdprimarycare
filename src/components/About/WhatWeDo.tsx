import React from 'react';
import Image from 'next/image';

const WhatWeDo = () => {
  return (
    <section className='bg-white py-16 sm:py-24'>
      <div className='mx-auto max-w-7xl px-6 sm:px-12 md:px-16 lg:px-8'>
        <div className='flex flex-col gap-8 lg:flex-row lg:items-start lg:gap-12'>
          {/* Left side - Image (smaller width, larger height) */}
          <div className='order-2 lg:order-1 lg:w-100 lg:flex-shrink-0'>
            <div className='relative h-96 w-full overflow-hidden rounded-lg shadow-xl lg:h-[500px]'>
              <Image
                src='/appointment.webp'
                alt='Medical professional with stethoscope'
                fill
                style={{ objectFit: 'cover' }}
                className='rounded-lg'
              />
            </div>
          </div>

          {/* Right side - Content (larger) */}
          <div className='order-1 lg:order-2 lg:w-full'>
            {/* Section Label */}
            <div className='mb-4'>
              <p className='flex items-center text-sm font-semibold tracking-wide text-gray-400 uppercase'>
                WHAT WE DO
                <span className='ml-3 inline-block h-[2px] w-10 bg-teal-500'></span>
              </p>
            </div>

            {/* Main Heading */}
            <h2 className='mb-4 text-2xl leading-tight font-bold text-slate-800 sm:text-3xl lg:text-4xl'>
              Meet our team of Board Certified, clinically and academically
              accomplished Physicians, expert Nurse Practitioners and dedicated
              Staff!
            </h2>

            {/* Description Paragraphs */}
            <div className='space-y-4 leading-relaxed text-gray-600'>
              <p className='text-sm sm:text-base'>
                At MD Primary Care, we work together using the most innovative
                methods and the latest technology to ensure our patients make
                the right decisions and receive the right care.
              </p>

              <p className='text-sm sm:text-base'>
                Humanitarian efforts, participation in healthcare-related
                organizations, and family commitments weigh-in to round their
                professional and personal lives. They &quot;practice what they
                preach&quot; by living a healthy lifestyle through regular
                exercise, a nutritional and smart diet, and staying in tune with
                the balance of their mind and body. Our Doctors are role models
                for our patients and understand the importance of
                &quot;listening&quot; to their bodies.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
