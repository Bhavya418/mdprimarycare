import Navbar from '@/components/Navigation/Navbar';

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <div className='min-h-screen bg-gray-50'>
        <div className='container mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8'>
          <h1 className='mb-6 text-center text-2xl font-bold text-gray-900 sm:text-3xl lg:text-4xl'>
            Contact Us
          </h1>
          <p className='mx-auto mb-8 max-w-2xl text-center text-sm text-gray-600 sm:text-base lg:text-lg'>
            Get in touch with MDPrimaryCare for appointments and inquiries.
            We&apos;re here to help with all your healthcare needs.
          </p>

          <div className='grid grid-cols-1 gap-8 lg:grid-cols-2'>
            {/* Contact Information */}
            <div className='rounded-lg bg-white p-6 shadow-md'>
              <h2 className='mb-4 text-xl font-semibold text-gray-900 sm:text-2xl'>
                Contact Information
              </h2>
              <div className='space-y-4'>
                <div className='flex items-start space-x-3'>
                  <div className='mt-1 h-5 w-5 flex-shrink-0'>
                    <svg
                      className='h-5 w-5 text-teal-500'
                      fill='currentColor'
                      viewBox='0 0 20 20'
                    >
                      <path d='M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z' />
                      <path d='M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z' />
                    </svg>
                  </div>
                  <div>
                    <p className='font-medium text-gray-900'>Email</p>
                    <p className='text-sm break-all text-gray-600 sm:text-base'>
                      cshah@mdprimarycare.us
                    </p>
                  </div>
                </div>

                <div className='flex items-start space-x-3'>
                  <div className='mt-1 h-5 w-5 flex-shrink-0'>
                    <svg
                      className='h-5 w-5 text-teal-500'
                      fill='currentColor'
                      viewBox='0 0 20 20'
                    >
                      <path d='M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z' />
                    </svg>
                  </div>
                  <div>
                    <p className='font-medium text-gray-900'>Phone</p>
                    <p className='text-gray-600'>772-302-3767</p>
                  </div>
                </div>

                <div className='flex items-start space-x-3'>
                  <div className='mt-1 h-5 w-5 flex-shrink-0'>
                    <svg
                      className='h-5 w-5 text-teal-500'
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
                    <p className='font-medium text-gray-900'>Address</p>
                    <p className='text-gray-600'>
                      2215 Nebraska avenue #2B
                      <br />
                      Fort Pierce, FL 34950
                    </p>
                  </div>
                </div>

                <div className='flex items-start space-x-3'>
                  <div className='mt-1 h-5 w-5 flex-shrink-0'>
                    <svg
                      className='h-5 w-5 text-teal-500'
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
                    <p className='font-medium text-gray-900'>Hours</p>
                    <p className='text-gray-600'>
                      Mon - Sat 8 AM – 5 PM
                      <br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className='rounded-lg bg-white p-6 shadow-md'>
              <h2 className='mb-4 text-xl font-semibold text-gray-900 sm:text-2xl'>
                Send us a Message
              </h2>
              <form className='space-y-4'>
                <div>
                  <label
                    htmlFor='name'
                    className='mb-1 block text-sm font-medium text-gray-700'
                  >
                    Full Name
                  </label>
                  <input
                    type='text'
                    id='name'
                    name='name'
                    className='w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-transparent focus:ring-2 focus:ring-teal-500 focus:outline-none sm:text-base'
                    placeholder='Enter your full name'
                  />
                </div>

                <div>
                  <label
                    htmlFor='email'
                    className='mb-1 block text-sm font-medium text-gray-700'
                  >
                    Email Address
                  </label>
                  <input
                    type='email'
                    id='email'
                    name='email'
                    className='w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-transparent focus:ring-2 focus:ring-teal-500 focus:outline-none sm:text-base'
                    placeholder='Enter your email'
                  />
                </div>

                <div>
                  <label
                    htmlFor='phone'
                    className='mb-1 block text-sm font-medium text-gray-700'
                  >
                    Phone Number
                  </label>
                  <input
                    type='tel'
                    id='phone'
                    name='phone'
                    className='w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-transparent focus:ring-2 focus:ring-teal-500 focus:outline-none sm:text-base'
                    placeholder='Enter your phone number'
                  />
                </div>

                <div>
                  <label
                    htmlFor='subject'
                    className='mb-1 block text-sm font-medium text-gray-700'
                  >
                    Subject
                  </label>
                  <input
                    type='text'
                    id='subject'
                    name='subject'
                    className='w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-transparent focus:ring-2 focus:ring-teal-500 focus:outline-none sm:text-base'
                    placeholder='Enter subject'
                  />
                </div>

                <div>
                  <label
                    htmlFor='message'
                    className='mb-1 block text-sm font-medium text-gray-700'
                  >
                    Message
                  </label>
                  <textarea
                    id='message'
                    name='message'
                    rows={4}
                    className='w-full resize-none rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-transparent focus:ring-2 focus:ring-teal-500 focus:outline-none sm:text-base'
                    placeholder='Enter your message'
                  ></textarea>
                </div>

                <button
                  type='submit'
                  className='w-full rounded-md bg-teal-500 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-teal-600 focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 focus:outline-none sm:text-base'
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
