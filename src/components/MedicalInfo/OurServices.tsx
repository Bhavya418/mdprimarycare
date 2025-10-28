import React from 'react';
import Image from 'next/image';

const OurServices = () => {
  const services = [
    { name: 'Diabetes', icon: '/blood-test.webp' },
    { name: 'Back Pain', icon: '/back-pain-1.webp' },
    { name: 'Arthritis', icon: '/arthritis-150x150.webp' },
    { name: 'Hypertension', icon: '/hypertension-150x150.webp' },
    { name: 'Hypothyroidism', icon: '/thyroid.webp' },
    { name: 'Asthma/COPD', icon: '/lungs-150x150.webp' },
    { name: 'Obesity', icon: '/obesity.webp' },
    { name: "Women's Health", icon: '/00D6A3-150x150.webp' },
    { name: 'Depression', icon: '/depression-150x150.webp' },
    { name: 'Liver Problems', icon: '/liver-150x150.webp' },
  ];
  return (
    <section className='bg-teal-900 py-12 sm:py-16'>
      <div className='mx-6 sm:mx-16 md:mx-16 lg:mx-12'>
        <div className='mx-auto flex max-w-5xl flex-col justify-center border-b-2 border-gray-100 pb-8 text-center lg:text-left'>
          <p className='font-montserrat font-bold tracking-wide text-green-400 uppercase'>
            WE OFFER SERVICES
          </p>
          <h2 className='font-montserrat mt-1 text-4xl leading-tight font-bold text-gray-100 sm:text-5xl'>
            We Provide Assistance in Various Directions
          </h2>
          <p className='font-opensans mt-6 leading-relaxed text-gray-100'>
            There is a strong emphasis in the specialty of Family Medicine on
            promoting health and preventing disease, and the physicians at MD
            Primary Care are trained to provide complete health care to patients
            of all ages.
          </p>
        </div>
        <div className='mx-auto mt-10 grid max-w-5xl grid-cols-2 justify-items-center gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5'>
          {services.map((service, index) => (
            <div key={index} className='flex flex-col items-center text-center'>
              <div className='mb-4 flex h-16 w-16 items-center justify-center'>
                <Image
                  src={service.icon}
                  alt={service.name}
                  width={64}
                  height={64}
                  className='text-green-400'
                />
              </div>
              <h3 className='text-md font-opensans font-bold tracking-wide text-white'>
                {service.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServices;
