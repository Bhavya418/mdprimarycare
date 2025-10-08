import Link from 'next/link';
import { Home } from 'lucide-react';

const ContactHeader = () => {
  return (
    <div className='bg-white py-12 sm:py-16'>
      <div className='mx-auto max-w-7xl px-6 sm:px-12 md:px-16 lg:px-8'>
        <div className='flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center'>
          {/* Left side - Title */}
          <div>
            <h1 className='text-5xl font-bold text-gray-900 sm:text-4xl lg:text-5xl'>
              Contact Us
            </h1>
            <p className='mt-2 text-sm font-medium tracking-wide text-gray-500 uppercase sm:text-base'>
              Book a Complimentary Appointment by Visiting or calling Us!
            </p>
          </div>

          {/* Right side - Breadcrumb */}
          <div className='flex items-center gap-2 text-sm text-gray-600 sm:text-base'>
            <Home className='h-4 w-4' />
            <Link href='/' className='transition-colors hover:text-teal-600'>
              Home
            </Link>
            <span>|</span>
            <span className='font-medium text-gray-900'>Contact Us</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactHeader;
