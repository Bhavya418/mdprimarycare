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

const Home = () => {
  return (
    <>
      <Navbar />
      <section id='hero'>
        <Hero />
      </section>
      <Features />
      <OurMedical />
      <section id='about'>
        <AboutMedical />
      </section>
      <section id='services'>
        <OurServices />
      </section>
      <section id='team'>
        <OurTeam />
      </section>
      <AwardsInfo />
      <section id='testimonials'>
        <TestimonialCarousel />
      </section>
      <AppointmentBook />
      <Insurance />
      <AppointmentTab />
      <section id='contact'>
        <TimingInfo />
      </section>
    </>
  );
};

export default Home;
