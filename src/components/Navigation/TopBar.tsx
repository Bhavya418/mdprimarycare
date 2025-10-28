import React from 'react';
import { Mail, MapPin, Phone, Timer } from 'lucide-react';
import Link from 'next/link';

const TopBar = () => {
  return (
    <header>
      <div className='bg-primary-800 font-opensans text-md hidden px-6 py-4 font-semibold text-white lg:block'>
        <div className='flex items-center justify-around'>
          <div className='flex flex-row items-center justify-center gap-6'>
            <div className='flex items-center gap-2'>
              <MapPin className='h-4 w-4' />
              <Link
                href='https://www.google.com/maps?q=2215+Nebraska+avenue#2B,+Fort+Pierce,+FL+34950'
                className='hover:text-teal-200'
                target='_blank'
                rel='noopener noreferrer'
              >
                2215 Nebraska avenue#2B, Fort Pierce, FL 34950
              </Link>
            </div>
            <div className='flex cursor-pointer items-center gap-2'>
              <Timer className='h-4 w-4' />
              <p className='hover:text-teal-200'>Mon - Sat 8 AM – 5 PM</p>
            </div>
          </div>
          <div className='flex flex-row items-center justify-center gap-6'>
            <div className='flex cursor-pointer items-center gap-2'>
              <Mail className='h-4 w-4' />
              <Link
                href='mailto:chintanshah@mdprimarycare.us'
                className='hover:text-teal-200'
                target='_blank'
                rel='noopener noreferrer'
              >
                Email: chintanshah@mdprimarycare.us
              </Link>
            </div>
            <div className='flex cursor-pointer items-center gap-2'>
              <Phone className='h-4 w-4' />
              <Link
                href='tel:772-302-3767'
                className='hover:text-teal-200'
                target='_blank'
                rel='noopener noreferrer'
              >
                Call: 772-302-3767
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default TopBar;
