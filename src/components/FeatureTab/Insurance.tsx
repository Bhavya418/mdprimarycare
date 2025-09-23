'use client';
import React from 'react';
import Image from 'next/image';
import Marquee from 'react-fast-marquee';

const Insurance = () => {
  const insuranceLogos = [
    { src: '/humana.webp', alt: 'Humana' },
    { src: '/bluecross.webp', alt: 'BlueCross BlueShield' },
    { src: '/wellcare.webp', alt: 'WellCare' },
    { src: '/medicaid.webp', alt: 'Medicaid' },
  ];
  return (
    <section className='bg-gray-100 py-16 sm:py-24'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        {/* Text Content */}
        <div className='mx-auto max-w-5xl text-center'>
          <h2 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
            Insurances accepted
          </h2>
          <p className='mt-4 text-lg leading-8 text-gray-600'>
            MD Primary Care accepts most major insurance plans. New patients are
            always welcome, and we accept most major medical insurance plans. If
            you have any questions about the type of insurances we accept,
            please call our office. Our office also offers self-pay prices for
            those who do not have or choose not to use their insurance.
          </p>
        </div>

        {/* Marquee powered by the library */}
        <div className='mt-16'>
          <Marquee
            gradient={true}
            gradientColor='#F9FAFB'
            gradientWidth={100}
            speed={50}
            pauseOnHover={true}
          >
            {insuranceLogos.map((logo, index) => (
              <div key={index} className='mx-12'>
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={300}
                  height={150}
                  className='h-20 w-auto object-contain'
                />
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
};

export default Insurance;
