import React from 'react'
import Navbar from '@/components/Navigation/Navbar';
import Hero from '@/components/Hero/Hero';
import Features from '@/components/FeatureTab/Features';
import OurMedical from '@/components/MedicalInfo/OurMedical';
import AboutMedical from '@/components/MedicalInfo/AboutMedical';
import OurServices from '@/components/MedicalInfo/OurServices';

const Home = () => {
  return (
   <>
   <Navbar/>
   <Hero/>
   <Features/>
   <OurMedical/>
   <AboutMedical/>
   <OurServices/>
   </>
  )
}

export default Home;

 