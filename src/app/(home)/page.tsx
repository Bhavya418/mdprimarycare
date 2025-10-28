import React from 'react';
import Navbar from '@/components/Navigation/Navbar';
import Hero from '@/components/Hero/Hero';
import Features from '@/components/FeatureTab/Features';
import OurMedical from '@/components/MedicalInfo/OurMedical';
import AboutMedical from '@/components/MedicalInfo/AboutMedical';
import OurServices from '@/components/MedicalInfo/OurServices';
import OurTeam from '@/components/Team/OurTeam';
import AwardsInfo from '@/components/MedicalInfo/AwardsInfo';
import TimingInfo from '@/components/FeatureTab/TimingInfo';
import AppointmentTab from '@/components/Appointment/AppointmentTab';
import Insurance from '@/components/FeatureTab/Insurance';
import AppointmentBook from '@/components/Appointment/AppointmentBook';
import TestimonialCarousel from '@/components/Testimonials/TestimonialCarousel';
import ClientOnly from '@/components/ClientOnly';

const Home = () => {
  return (
    <>
      <Navbar />
      <section id='hero'>
        <Hero />
      </section>
      <Features />
      <section id='medical'>
        <OurMedical />
      </section>
      <section id='about'>
        <AboutMedical />
      </section>
      <section id='services'>
        <OurServices />
      </section>
      <section id='team'>
        <OurTeam />
      </section>
      <section id='awards'>
        <AwardsInfo />
      </section>
      <section id='testimonials'>
        <TestimonialCarousel />
      </section>
      <ClientOnly
        fallback={
          <section className='bg-gray-50 py-16 sm:py-24'>
            <div className='mx-auto max-w-7xl px-6 sm:px-12 md:px-16 lg:px-8'>
              <div className='grid grid-cols-1 gap-8 lg:grid-cols-2'>
                <div className='animate-pulse space-y-4'>
                  <div className='h-8 w-3/4 rounded bg-gray-200'></div>
                  <div className='h-4 w-full rounded bg-gray-200'></div>
                  <div className='h-4 w-2/3 rounded bg-gray-200'></div>
                </div>
                <div className='animate-pulse space-y-4'>
                  <div className='h-12 rounded bg-gray-200'></div>
                  <div className='grid grid-cols-2 gap-4'>
                    <div className='h-12 rounded bg-gray-200'></div>
                    <div className='h-12 rounded bg-gray-200'></div>
                  </div>
                  <div className='h-32 rounded bg-gray-200'></div>
                </div>
              </div>
            </div>
          </section>
        }
      >
        <AppointmentBook />
      </ClientOnly>

      <Insurance />
      <AppointmentTab />
      <section id='contact'>
        <TimingInfo />
      </section>
    </>
  );
};

export default Home;
