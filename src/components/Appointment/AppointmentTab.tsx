import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const AppointmentTab = () => {
  return (
    <section className='relative flex h-[400px] items-center justify-center text-center'>
      {/* Background Image with Gradient Overlay */}
      <div className='absolute inset-0'>
        <Image
          src='/rowbg-third-img.webp'
          alt='A calm and modern medical clinic waiting area'
          fill
          className='object-cover'
          priority
        />
        {/* The overlay is slightly darker in the center to make text pop */}
        <div className='absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/40 to-slate-900/60'></div>
      </div>

      {/* Content */}
      <div className='relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8'>
        <h2 className='font-montserrat mb-4 text-3xl leading-relaxed font-medium text-gray-200 sm:text-3xl'>
          Need a Doctor for Check-up?
        </h2>
        <h1 className='font-montserrat text-4xl leading-tight font-bold text-white drop-shadow-lg sm:text-5xl lg:text-5xl'>
          Walk-in and Same Day Appointments available!
        </h1>
        <div className='font-opensans mt-12 font-bold text-white transition-all duration-300'>
          <Link
            href='https://www.zocdoc.com/practice/md-primary-care-66122?lock=true&isNewPatient=false&referrerType=widget'
            className='rounded border-2 border-white px-8 py-3 hover:bg-white hover:text-slate-900 hover:shadow-lg'
          >
            GET AN APPOINTMENT
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AppointmentTab;
