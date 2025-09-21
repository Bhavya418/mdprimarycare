import React from 'react';

const Navbar = () => {
  return (
    <nav className='bg-teal-500'>
      <ul className='flex'>
        {/* Home - active */}
        <li className='cursor-pointer bg-teal-900 px-8 py-4 font-bold text-white'>
          Home
        </li>
        <li className='cursor-pointer px-8 py-4 font-bold text-white hover:bg-teal-600'>
          About Us
        </li>
        <li className='cursor-pointer px-8 py-4 font-bold text-white hover:bg-teal-600'>
          Providers
        </li>
        <li className='cursor-pointer px-8 py-4 font-bold text-white hover:bg-teal-600'>
          Testimonials
        </li>
        <li className='cursor-pointer px-8 py-4 font-bold text-white hover:bg-teal-600'>
          Contact Us
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
