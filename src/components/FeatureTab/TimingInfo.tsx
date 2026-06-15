import React from 'react';
import { Phone, Mail, Clock } from 'lucide-react';

const TimingInfo = () => {
  return (
    <section className='bg-teal-400 py-12 sm:py-16'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='flex flex-col gap-4 md:flex-row md:items-center md:justify-between'>
          {/* Phone */}
          <div className='flex items-center gap-3 text-white'>
            <div className='flex h-10 w-10 items-center justify-center rounded border-2 border-white'>
              <Phone className='h-5 w-5' />
            </div>
            <div>
              <p className='font-opensans text-lg font-bold'>+1-772-302-3767</p>
              <p className='font-opensans -mt-1 text-sm opacity-90'>
                Have a question? Call us now
              </p>
            </div>
          </div>

          {/* Email */}
          <div className='flex items-center gap-3 text-white'>
            <div className='flex h-10 w-10 items-center justify-center rounded border-2 border-white'>
              <Mail className='h-5 w-5' />
            </div>
            <div>
              <p className='font-opensans text-lg font-bold'>
                cshah@mdprimarycare.us
              </p>
              <p className='font-opensans -mt-1 text-sm opacity-90'>
                Need support? Drop us an email
              </p>
            </div>
          </div>

          {/* Hours */}
          <div className='flex items-center gap-3 text-white'>
            <div className='flex h-10 w-10 items-center justify-center rounded border-2 border-white'>
              <Clock className='h-5 w-5' />
            </div>
            <div>
              <p className='font-opensans text-lg font-bold'>
                Mon - Fri 8 AM - 5 PM
              </p>
              <p className='font-opensans -mt-1 text-sm opacity-90'>
                We are open on
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimingInfo;
