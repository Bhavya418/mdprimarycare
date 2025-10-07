import Navbar from '@/components/Navigation/Navbar';

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <div className='min-h-screen bg-gray-50'>
        <div className='container mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8'>
          <h1 className='mb-6 text-center text-2xl font-bold text-gray-900 sm:text-3xl lg:text-4xl'>
            About Us
          </h1>
          <p className='mx-auto mb-12 max-w-3xl text-center text-sm text-gray-600 sm:text-base lg:text-lg'>
            Learn more about MDPrimaryCare and our mission to provide excellent
            healthcare services to our community.
          </p>

          <div className='mb-12 grid grid-cols-1 gap-8 lg:grid-cols-2'>
            {/* Mission */}
            <div className='rounded-lg bg-white p-6 shadow-md'>
              <h2 className='mb-4 text-xl font-semibold text-gray-900 sm:text-2xl'>
                Our Mission
              </h2>
              <p className='text-sm leading-relaxed text-gray-600 sm:text-base'>
                At MDPrimaryCare, we are dedicated to providing comprehensive,
                compassionate, and accessible healthcare services to individuals
                and families in our community. Our mission is to promote health,
                prevent illness, and enhance the quality of life for all our
                patients.
              </p>
            </div>

            {/* Vision */}
            <div className='rounded-lg bg-white p-6 shadow-md'>
              <h2 className='mb-4 text-xl font-semibold text-gray-900 sm:text-2xl'>
                Our Vision
              </h2>
              <p className='text-sm leading-relaxed text-gray-600 sm:text-base'>
                We envision a healthier community where every individual has
                access to high-quality healthcare services. We strive to be the
                trusted healthcare partner that empowers patients to take
                control of their health and well-being.
              </p>
            </div>
          </div>

          {/* Values */}
          <div className='mb-12 rounded-lg bg-white p-6 shadow-md sm:p-8'>
            <h2 className='mb-6 text-center text-xl font-semibold text-gray-900 sm:text-2xl'>
              Our Values
            </h2>
            <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3'>
              <div className='text-center'>
                <div className='mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-teal-100'>
                  <svg
                    className='h-8 w-8 text-teal-500'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                  >
                    <path d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z' />
                  </svg>
                </div>
                <h3 className='mb-2 font-semibold text-gray-900'>Excellence</h3>
                <p className='text-sm text-gray-600'>
                  We are committed to providing the highest quality of care and
                  service.
                </p>
              </div>

              <div className='text-center'>
                <div className='mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-teal-100'>
                  <svg
                    className='h-8 w-8 text-teal-500'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                  >
                    <path
                      fillRule='evenodd'
                      d='M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z'
                      clipRule='evenodd'
                    />
                  </svg>
                </div>
                <h3 className='mb-2 font-semibold text-gray-900'>Compassion</h3>
                <p className='text-sm text-gray-600'>
                  We treat every patient with empathy, respect, and
                  understanding.
                </p>
              </div>

              <div className='text-center sm:col-span-2 lg:col-span-1'>
                <div className='mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-teal-100'>
                  <svg
                    className='h-8 w-8 text-teal-500'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                  >
                    <path
                      fillRule='evenodd'
                      d='M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z'
                      clipRule='evenodd'
                    />
                  </svg>
                </div>
                <h3 className='mb-2 font-semibold text-gray-900'>Integrity</h3>
                <p className='text-sm text-gray-600'>
                  We uphold the highest ethical standards in all our
                  interactions.
                </p>
              </div>
            </div>
          </div>

          {/* History */}
          <div className='rounded-lg bg-white p-6 shadow-md sm:p-8'>
            <h2 className='mb-6 text-center text-xl font-semibold text-gray-900 sm:text-2xl'>
              Our History
            </h2>
            <div className='space-y-6'>
              <div className='flex flex-col items-start space-y-2 sm:flex-row sm:space-y-0 sm:space-x-4'>
                <div className='w-20 flex-shrink-0 text-sm font-semibold text-teal-600'>
                  2010
                </div>
                <div>
                  <h3 className='font-semibold text-gray-900'>Foundation</h3>
                  <p className='text-sm text-gray-600 sm:text-base'>
                    MDPrimaryCare was established with a vision to provide
                    accessible healthcare to the community.
                  </p>
                </div>
              </div>

              <div className='flex flex-col items-start space-y-2 sm:flex-row sm:space-y-0 sm:space-x-4'>
                <div className='w-20 flex-shrink-0 text-sm font-semibold text-teal-600'>
                  2015
                </div>
                <div>
                  <h3 className='font-semibold text-gray-900'>Expansion</h3>
                  <p className='text-sm text-gray-600 sm:text-base'>
                    We expanded our services to include specialized care and
                    added state-of-the-art medical equipment.
                  </p>
                </div>
              </div>

              <div className='flex flex-col items-start space-y-2 sm:flex-row sm:space-y-0 sm:space-x-4'>
                <div className='w-20 flex-shrink-0 text-sm font-semibold text-teal-600'>
                  2020
                </div>
                <div>
                  <h3 className='font-semibold text-gray-900'>
                    Digital Innovation
                  </h3>
                  <p className='text-sm text-gray-600 sm:text-base'>
                    We launched our digital health platform and telemedicine
                    services to better serve our patients.
                  </p>
                </div>
              </div>

              <div className='flex flex-col items-start space-y-2 sm:flex-row sm:space-y-0 sm:space-x-4'>
                <div className='w-20 flex-shrink-0 text-sm font-semibold text-teal-600'>
                  Today
                </div>
                <div>
                  <h3 className='font-semibold text-gray-900'>
                    Continued Growth
                  </h3>
                  <p className='text-sm text-gray-600 sm:text-base'>
                    We continue to grow and adapt, always putting our
                    patients&apos; needs first and embracing new technologies.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
