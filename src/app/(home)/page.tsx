import React from 'react';
import Navbar from '@/components/Navigation/Navbar';
import Hero from '@/components/Hero/Hero';
import Features from '@/components/FeatureTab/Features';
import OurMedical from '@/components/MedicalInfo/OurMedical';
import AboutMedical from '@/components/MedicalInfo/AboutMedical';
import OurServices from '@/components/MedicalInfo/OurServices';
import OurTeam from '@/components/Team/OurTeam';
import AwardsInfo from '@/components/MedicalInfo/AwardsInfo';

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <OurMedical />
      <AboutMedical />
      <OurServices />
      <OurTeam />
      <AwardsInfo />
    </>
  );
};

export default Home;
