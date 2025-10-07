import React from 'react';
import { Mail, MapPin, Phone, Timer } from 'lucide-react';

const TopBar = () => {
  return (
    <header>
      <div>
        <div className='hidden bg-teal-900 px-6 py-4 text-sm text-white lg:block'>
          <div className='flex items-center justify-around'>
            <div className='flex flex-row items-center justify-center gap-3'>
              {/* address */}
              <div className='flex items-center gap-2'>
                <MapPin className='h-4 w-4' />
                <p>2215 Nebraska avenue#2B, Fort Pierce, FL 34950</p>
              </div>
              <div className='flex items-center gap-2'>
                <Timer className='h-4 w-4' />
                <p>Mon - Sat 8 AM – 5 PM</p>
              </div>
            </div>
            <div className='flex flex-row items-center justify-center gap-3'>
              <div className='flex items-center gap-2'>
                <Mail className='h-4 w-4' />
                <p>Email: cshah@mdprimarycare.us</p>
              </div>
              <div className='flex items-center gap-2'>
                <Phone className='h-4 w-4' />
                <p>Call: 772-302-3767</p>
              </div>
            </div>
          </div>
        </div>
        {/* Main header */}
        <div></div>
        {/* Navigation bar */}
        <div></div>
      </div>
    </header>
  );
};

export default TopBar;
