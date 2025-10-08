import React from 'react';
import Image from 'next/image';
import { MapPin } from 'lucide-react';

const Hero = () => {
  return (
    <section className='relative flex h-[75vh] items-center justify-center sm:justify-start'>
      {/* Background Image with Gradient Overlay */}
      <div className='absolute inset-0'>
        <Image
          src='/hero.jpg'
          alt='Medical Services'
          fill
          className='object-cover'
          priority
        />
        <div className='absolute inset-0 bg-gradient-to-r from-gray-900/70 via-gray-900/50 to-transparent'></div>
      </div>

      {/* Content */}
      <div className='relative z-10 w-full max-w-5xl px-6 text-center sm:max-w-3xl sm:px-10 sm:text-left'>
        <p className='mb-6 text-lg tracking-widest text-white uppercase sm:mb-4 sm:text-base'>
          We Give You The Best!
        </p>
        <h1 className='text-5xl leading-tight font-extrabold text-white sm:text-4xl md:text-5xl lg:text-6xl'>
          <span className='text-teal-500'>Medical</span> Services <br />
          That You Can <span className='text-teal-500'>Trust</span>
        </h1>

        <button className='mt-10 rounded border-2 border-white px-8 py-3 text-base font-bold text-white transition hover:bg-white hover:text-teal-600 sm:mt-8 sm:px-8 sm:py-3 sm:text-base'>
          MAKE AN APPOINTMENT
        </button>
      </div>

      {/* Address At Bottom - Only for small screens */}
      <div className='absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 transform flex-col items-center space-y-2 text-white sm:hidden'>
        {/* Icon */}
        <div className='rounded-lg bg-teal-500 p-2 shadow-lg'>
          <MapPin className='h-5 w-5' />
        </div>

        {/* Address */}
        <div className='text-center'>
          <p className='text-sm leading-tight font-semibold'>
            2215 Nebraska avenue #2B, Fort Pierce, FL 34950
          </p>
          <p className='text-xs opacity-80'>Mon - Sat 8 AM – 5 PM</p>
        </div>
      </div>

      {/* Address Bottom Right - For larger screens */}
      <div className='absolute right-4 bottom-4 z-10 hidden items-center space-x-3 text-white sm:flex md:right-10 md:bottom-6 md:space-x-4'>
        {/* Icon */}
        <div className='rounded-lg bg-teal-500 p-2 shadow-lg md:p-3'>
          <MapPin className='h-5 w-5 md:h-6 md:w-6' />
        </div>

        {/* Address */}
        <div>
          <p className='text-sm leading-tight font-semibold md:text-lg'>
            2215 Nebraska avenue #2B, Fort Pierce, FL 34950
          </p>
          <p className='text-xs opacity-80 md:text-sm'>Mon - Sat 8 AM – 5 PM</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
