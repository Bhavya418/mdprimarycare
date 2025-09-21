import Image from 'next/image';

const AboutMedical = () => {
  return (
    <section className='bg-white py-16 sm:py-24'>
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        <div className='flex flex-col items-center gap-12 lg:flex-row lg:gap-20'>
          {/* Left Column: Image */}
          <div className='w-full lg:w-1/2'>
            <div className='relative aspect-square overflow-hidden shadow-2xl'>
              <Image
                src='/about.webp'
                alt='A compassionate medical professional'
                layout='fill'
                objectFit='cover'
              />
            </div>
          </div>

          {/* Right Column: Content */}
          <div className='lg:w-1/2'>
            <p className='font-semibold tracking-wide text-teal-600 uppercase'>
              About Our Clinic
            </p>
            <h2 className='mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
              Providing The Best Medical Care For Your Family
            </h2>
            <p className='mt-6 text-lg leading-8 text-gray-600'>
              We are dedicated to offering top-quality, patient-centered
              healthcare. Our experienced team uses the latest technology and a
              compassionate approach to ensure you and your loved ones receive
              the best possible treatment. Your health and well-being are our
              highest priorities.
            </p>
            <div className='mt-8'>
              <a
                href='/learn-more'
                className='inline-block rounded-lg bg-teal-600 px-8 py-3 font-semibold text-white shadow-md transition-colors hover:bg-teal-700'
              >
                LEARN MORE
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMedical;
