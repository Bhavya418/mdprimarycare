import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { UserSearch, ThumbsUp } from 'lucide-react';

const Header = () => {
  return (
    <header className='hidden lg:block'>
      <div className='flex flex-col items-center justify-between bg-white px-4 py-4 shadow sm:px-6 md:flex-row md:py-6 lg:px-10'>
        {/* Logo */}
        <div className='mb-4 flex items-center transition-transform duration-300 ease-in-out hover:scale-105 md:mb-0'>
          <Link href='/'>
            <Image
              src='/logo.webp'
              alt='MD Primary Care'
              width={200}
              height={60}
              className='h-12 w-auto object-contain md:h-15'
            />
          </Link>
        </div>

        {/* Info Sections */}
        <div className='mb-4 flex flex-col items-center gap-4 sm:flex-row sm:gap-8 md:mb-0 lg:gap-16'>
          {/* Personal Cabinet */}
          <div className='flex items-center gap-1 transition-transform duration-300 ease-in-out hover:scale-105'>
            <div className='flex items-center justify-center rounded-sm bg-gray-100 p-2 sm:p-3'>
              <UserSearch className='text-teal-500' size={36} />
            </div>
            <div className='text-center sm:text-left'>
              <h2 className='font-montserrat text-sm font-semibold text-teal-900 sm:text-lg'>
                Personal Cabinet
              </h2>
              <p className='font-opensans text-xs text-gray-500 sm:text-sm'>
                Qualified Staff
              </p>
            </div>
          </div>

          {/* Get Result Online */}
          <div className='flex items-center gap-1 transition-transform duration-300 ease-in-out hover:scale-105'>
            <div className='flex items-center justify-center rounded-sm bg-gray-100 p-2 sm:p-3'>
              <ThumbsUp className='text-teal-500' size={32} />
            </div>
            <div className='text-center sm:text-left'>
              <h2 className='font-montserrat text-sm font-semibold text-teal-900 sm:text-lg'>
                Get Result Online
              </h2>
              <p className='font-opensans text-xs text-gray-500 sm:text-sm'>
                Satisfied Patients
              </p>
            </div>
          </div>
        </div>

        {/* Book Online Button */}
        <Link
          href='https://www.zocdoc.com/practice/md-primary-care-66122?lock=true&isNewPatient=false&referrerType=widget'
          target='_blank'
          rel='noopener noreferrer'
          className='font-montserrat inline-block w-full rounded-sm bg-yellow-400 px-4 py-2 text-center text-sm font-bold text-gray-800 transition-transform duration-300 ease-in-out hover:scale-105 hover:bg-yellow-300 focus:outline-none sm:w-auto sm:px-6 sm:py-3 sm:text-base'
        >
          REQUEST A CONSULTATION
        </Link>
      </div>
    </header>
  );
};

export default Header;
