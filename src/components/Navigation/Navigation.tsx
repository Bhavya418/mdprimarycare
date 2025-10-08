'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

const Navigation = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActive = (path: string) => {
    if (path === '/' && (pathname === '/' || pathname === '/home')) return true;
    return pathname === path;
  };

  const getLinkClassName = (path: string) => {
    return `block px-4 lg:px-8 py-4 font-bold text-white hover:bg-teal-600 transition-colors ${
      isActive(path) ? 'bg-teal-900' : ''
    }`;
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className='relative bg-white shadow-sm lg:bg-teal-500'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='flex items-center justify-between lg:justify-center'>
          {/* Mobile hamburger menu - left side */}
          <div className='lg:hidden'>
            <button
              onClick={toggleMenu}
              className='p-2 text-gray-700 hover:text-gray-900 focus:outline-none'
              aria-label='Toggle menu'
            >
              <svg
                className='h-6 w-6'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M6 18L18 6M6 6l12 12'
                  />
                ) : (
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M4 6h16M4 12h16M4 18h16'
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Logo - centered on mobile, part of desktop menu on lg+ */}
          <div className='flex-shrink-0 py-4 lg:hidden'>
            <Link href='/' className='flex items-center justify-center'>
              <Image
                src='/logo.webp'
                alt='MD Primary Care'
                width={200}
                height={60}
                className='h-12 w-auto object-contain'
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className='hidden w-full lg:block'>
            <ul className='flex justify-center'>
              <li>
                <Link href='/' className={getLinkClassName('/')}>
                  Home
                </Link>
              </li>
              <li>
                <Link href='/about' className={getLinkClassName('/about')}>
                  About Us
                </Link>
              </li>

              <li>
                <Link href='/team' className={getLinkClassName('/team')}>
                  Our Team
                </Link>
              </li>
              <li>
                <Link
                  href='/testimonials'
                  className={getLinkClassName('/testimonials')}
                >
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href='/contact' className={getLinkClassName('/contact')}>
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Empty space on right for mobile to balance the layout */}
          <div className='w-10 lg:hidden'></div>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
          <ul className='space-y-1 px-2 pt-2 pb-3'>
            <li>
              <Link
                href='/'
                className={`${getLinkClassName('/')} rounded-md !text-gray-700 hover:!bg-gray-100 hover:!text-gray-900`}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href='/about'
                className={`${getLinkClassName('/about')} rounded-md !text-gray-700 hover:!bg-gray-100 hover:!text-gray-900`}
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href='/services'
                className={`${getLinkClassName('/services')} rounded-md !text-gray-700 hover:!bg-gray-100 hover:!text-gray-900`}
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href='/team'
                className={`${getLinkClassName('/team')} rounded-md !text-gray-700 hover:!bg-gray-100 hover:!text-gray-900`}
                onClick={() => setIsMenuOpen(false)}
              >
                Our Team
              </Link>
            </li>
            <li>
              <Link
                href='/testimonials'
                className={`${getLinkClassName('/testimonials')} rounded-md !text-gray-700 hover:!bg-gray-100 hover:!text-gray-900`}
                onClick={() => setIsMenuOpen(false)}
              >
                Testimonials
              </Link>
            </li>
            <li>
              <Link
                href='/contact'
                className={`${getLinkClassName('/contact')} rounded-md !text-gray-700 hover:!bg-gray-100 hover:!text-gray-900`}
                onClick={() => setIsMenuOpen(false)}
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
