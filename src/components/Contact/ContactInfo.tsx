const ContactInfo = () => {
  return (
    <div className='lg:flex-1'>
      <div className='rounded-lg bg-teal-500 p-8 text-white shadow-xl'>
        <h2 className='mb-6 text-2xl font-bold sm:text-3xl'>
          Do you want to live a healthy and pain-free life?
        </h2>
        <p className='mb-8 text-teal-100'>
          Book a Complimentary Appointment by Visiting or calling Us!
        </p>

        <div className='space-y-6'>
          <div className='flex items-start space-x-4'>
            <div className='mt-1 h-6 w-6 flex-shrink-0'>
              <svg
                className='h-6 w-6 text-white'
                fill='currentColor'
                viewBox='0 0 20 20'
              >
                <path d='M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z' />
                <path d='M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z' />
              </svg>
            </div>
            <div>
              <p className='font-semibold'>Email</p>
              <p className='break-all text-teal-100'>cshah@mdprimarycare.us</p>
            </div>
          </div>

          <div className='flex items-start space-x-4'>
            <div className='mt-1 h-6 w-6 flex-shrink-0'>
              <svg
                className='h-6 w-6 text-white'
                fill='currentColor'
                viewBox='0 0 20 20'
              >
                <path d='M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z' />
              </svg>
            </div>
            <div>
              <p className='font-semibold'>Phone</p>
              <p className='text-teal-100'>772-302-3767</p>
            </div>
          </div>

          <div className='flex items-start space-x-4'>
            <div className='mt-1 h-6 w-6 flex-shrink-0'>
              <svg
                className='h-6 w-6 text-white'
                fill='currentColor'
                viewBox='0 0 20 20'
              >
                <path
                  fillRule='evenodd'
                  d='M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z'
                  clipRule='evenodd'
                />
              </svg>
            </div>
            <div>
              <p className='font-semibold'>Address</p>
              <p className='text-teal-100'>
                2215 Nebraska avenue #2B
                <br />
                Fort Pierce, FL 34950
              </p>
            </div>
          </div>

          <div className='flex items-start space-x-4'>
            <div className='mt-1 h-6 w-6 flex-shrink-0'>
              <svg
                className='h-6 w-6 text-white'
                fill='currentColor'
                viewBox='0 0 20 20'
              >
                <path
                  fillRule='evenodd'
                  d='M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z'
                  clipRule='evenodd'
                />
              </svg>
            </div>
            <div>
              <p className='font-semibold'>Hours</p>
              <p className='text-teal-100'>
                Mon - Sat 8 AM – 5 PM
                <br />
                Sunday: Closed
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
