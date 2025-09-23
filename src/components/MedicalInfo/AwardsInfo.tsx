import React from 'react';
import Image from 'next/image';

const AwardsInfo = () => {
  const awards = [
    {
      id: 1,
      title: "Patient's Choice 5-Year Award",
      image: '/award1.webp',
      alt: "Vitals Patient's Choice 5-Year Award",
    },
    {
      id: 2,
      title: 'On-Time Doctor Award',
      image: '/award2.webp',
      alt: 'Vitals On-Time Doctor Award',
    },
    {
      id: 3,
      title: 'Compassionate Doctor Award',
      image: '/award3.webp',
      alt: 'Vitals Compassionate Doctor Award',
    },
  ];

  return (
    <section className='bg-gray-100 py-12 sm:py-16'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='flex flex-col items-start gap-8 lg:flex-row lg:items-center lg:gap-16'>
          {/* Left side - Text content */}
          <div className='lg:w-1/2'>
            <h2 className='mb-4 text-3xl font-bold text-gray-900 sm:text-4xl'>
              Awards and Recognition
            </h2>
            <p className='text-lg text-gray-700'>
              From a great work environment to exceptional patient care,
              we&apos;re pleased to say MD Primary Care earns high marks across
              the board.
            </p>
          </div>

          {/* Right side - Awards */}
          <div className='lg:w-1/2'>
            <div className='flex flex-wrap justify-center gap-6 lg:justify-end'>
              {awards.map(award => (
                <div key={award.id} className='flex flex-col items-center'>
                  <div className='relative h-32 w-32'>
                    <Image
                      src={award.image}
                      alt={award.alt}
                      fill
                      className='object-contain'
                    />
                  </div>
                  <p className='mt-2 max-w-[120px] text-center text-sm text-gray-600'>
                    {award.title}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AwardsInfo;
