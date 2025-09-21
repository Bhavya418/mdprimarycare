import React from 'react';
import Image from 'next/image';
import { MapPin } from 'lucide-react';

const Hero = () => {
  return (
    <section className='relative flex h-[75vh] items-center justify-start'>
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
      <div className='relative z-10 max-w-3xl px-10'>
        <p className='mb-4 text-sm tracking-widest text-white uppercase'>
          We Give You The Best!
        </p>
        <h1 className='text-5xl leading-tight font-extrabold text-white'>
          <span className='text-teal-500'>Medical</span> Services <br />
          That You Can <span className='text-teal-500'>Trust</span>
        </h1>

        <button className='mt-8 rounded border-2 border-white px-8 py-3 font-bold text-white transition hover:bg-white hover:text-teal-600'>
          MAKE AN APPOINTMENT
        </button>
      </div>

      {/* Address Bottom Right */}
      <div className='absolute right-10 bottom-6 z-10 flex items-center space-x-4 text-white'>
        {/* Icon */}
        <div className='rounded-lg bg-teal-500 p-3 shadow-lg'>
          <MapPin className='h-6 w-6' />
        </div>

        {/* Address */}
        <div>
          <p className='text-lg font-semibold'>
            2215 Nebraska avenue #2B, Fort Pierce, FL 34950
          </p>
          <p className='text-sm opacity-80'>Mon - Sat 8 AM – 5 PM</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
