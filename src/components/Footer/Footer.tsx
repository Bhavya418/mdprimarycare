'use client';
import React from 'react';

const Footer = () => {
  return (
    <footer className='bg-slate-800 py-16 text-white'>
      <div className='mx-auto max-w-7xl px-6 sm:px-12 md:px-16 lg:px-8'>
        <div className='grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4'>
          {/* About MD Primary Care */}
          <div className='sm:col-span-2 lg:col-span-1'>
            <h3 className='mb-4 text-xl font-semibold'>
              About MD Primary Care
            </h3>
            <p className='mb-4 leading-relaxed text-gray-300'>
              MD Primary Care is equipped with board-certified physicians,
              urgent care specialists, and medical equipment to create the
              best-in-class urgent care experience for all.
            </p>
            <p className='leading-relaxed text-gray-300'>
              We constantly strive to match our passion for urgent care into an
              excellent patient experience, whenever you need us. If you&apos;re
              looking for primary care doctors near you, then you may contact
              our office by calling at 772-302-3767.
            </p>
          </div>

          {/* Map Section */}
          <div className='sm:col-span-2 lg:col-span-1'>
            <div className='h-80 overflow-hidden rounded-lg'>
              <iframe
                src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d28329.45681451604!2d-80.344896!3d27.432435!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88def1963c5f3d49%3A0x1e4bec2ce145746f!2sDr.%20Chintan%20Shah%2C%20MD!5e0!3m2!1sen!2sin!4v1758648158114!5m2!1sen!2sin'
                width='100%'
                height='100%'
                style={{ border: 0 }}
                allowFullScreen={true}
                loading='lazy'
                referrerPolicy='no-referrer-when-downgrade'
                className='rounded-lg'
              />
            </div>
          </div>

          {/* Services and Contact Us - Side by side on smaller screens */}
          <div className='flex flex-col gap-4 sm:col-span-2 sm:flex-row sm:gap-6 lg:col-span-2 lg:gap-8'>
            {/* Services */}
            <div className='flex-1'>
              <h3 className='mb-4 text-xl font-semibold'>Services</h3>
              <ul className='space-y-2 text-gray-300'>
                <li>- Family Medicine</li>
                <li>- Primary Care</li>
                <li>- Family Planning</li>
                <li>- Weight Loss</li>
                <li>- Health Checkups</li>
              </ul>
            </div>

            {/* Contact Us */}
            <div className='flex-1'>
              <h3 className='mb-4 text-xl font-semibold'>Contact Us</h3>
              <div className='space-y-3 text-gray-300'>
                <div>
                  <p className='font-medium'>Address:</p>
                  <p>2215 Nebraska avenue#2B,</p>
                  <p>Fort Pierce FL 34950, United States</p>
                </div>

                <div>
                  <p className='font-medium'>Phone:</p>
                  <p>772-302-3767</p>
                </div>

                <div>
                  <p className='font-medium'>Fax:</p>
                  <p>8884367197</p>
                </div>

                <div>
                  <p className='font-medium'>Opening Hours:</p>
                  <p>Mon - Fri: 8 AM – 5 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className='mt-12 border-t border-gray-700 pt-8'>
          <p className='text-center text-sm text-gray-400'>
            Copyright © 2025 |{' '}
            <a
              href='#'
              className='text-teal-400 transition-colors hover:text-teal-300'
            >
              Privacy Policy
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
