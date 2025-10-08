'use client';

import React from 'react';
import Navbar from '@/components/Navigation/Navbar';
import TestimonialHeader from '@/components/Testimonials/TestimonialHeader';
import TestimonialSection from '@/components/Testimonials/TestimonialSection';

export default function TestimonialsPage() {
  return (
    <>
      <Navbar />

      {/* Header Section */}
      <TestimonialHeader />

      {/* Testimonials Section */}
      <TestimonialSection
        title='What Our Patients Say'
        subtitle='Real experiences from real patients who trust MDPrimaryCare for their healthcare needs'
        backgroundColor='white'
      />

      {/* Statistics Section */}
      <div className='bg-gray-50 py-16'>
        <div className='mx-auto max-w-7xl px-6 sm:px-12 md:px-16 lg:px-8'>
          <div className='mb-12 text-center'>
            <h2 className='mb-4 text-3xl font-bold text-gray-900'>
              Trusted by the Community
            </h2>
            <p className='text-lg text-gray-600'>
              Numbers that speak to our commitment to exceptional healthcare
            </p>
          </div>

          <div className='grid grid-cols-1 gap-8 md:grid-cols-4'>
            <div className='text-center'>
              <div className='mb-2 text-4xl font-bold text-teal-500'>1000+</div>
              <div className='text-gray-600'>Happy Patients</div>
            </div>
            <div className='text-center'>
              <div className='mb-2 text-4xl font-bold text-teal-500'>15+</div>
              <div className='text-gray-600'>Years Experience</div>
            </div>
            <div className='text-center'>
              <div className='mb-2 text-4xl font-bold text-teal-500'>4.9</div>
              <div className='text-gray-600'>Average Rating</div>
            </div>
            <div className='text-center'>
              <div className='mb-2 text-4xl font-bold text-teal-500'>24/7</div>
              <div className='text-gray-600'>On-Call Support</div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className='bg-teal-500 py-16'>
        <div className='mx-auto max-w-7xl px-6 text-center sm:px-12 md:px-16 lg:px-8'>
          <h2 className='mb-4 text-3xl font-bold text-white'>
            Ready to Experience Quality Healthcare?
          </h2>
          <p className='mx-auto mb-8 max-w-2xl text-xl text-white opacity-90'>
            Join our family of satisfied patients. Schedule your appointment
            today and experience the difference personalized healthcare makes.
          </p>
          <div className='space-y-4 sm:flex sm:justify-center sm:space-y-0 sm:space-x-4'>
            <a
              href='/contact'
              className='inline-block rounded-md bg-white px-8 py-3 font-medium text-teal-500 transition-colors duration-200 hover:bg-gray-100'
            >
              Schedule Appointment
            </a>
            <a
              href='/about'
              className='inline-block rounded-md border border-white bg-transparent px-8 py-3 font-medium text-white transition-colors duration-200 hover:bg-white hover:text-teal-500'
            >
              Learn More About Us
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
