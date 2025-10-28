import Image from 'next/image';
import Link from 'next/link';

const AboutMedical = () => {
  return (
    <section className='bg-white py-16 sm:py-24'>
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        <div className='flex flex-col items-center gap-12 lg:flex-row lg:gap-20'>
          {/* Left Column: Image */}
          <div className='w-full lg:w-1/2'>
            <div className='relative mx-auto aspect-square h-80 w-80 overflow-hidden rounded-2xl shadow-2xl sm:h-96 sm:w-96 lg:mx-0 lg:h-auto lg:w-full lg:rounded-none'>
              <Image
                src='/about.webp'
                alt='A compassionate medical professional'
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>

          {/* Right Column: Content */}
          <div className='mx-4 text-center sm:mx-8 lg:mx-0 lg:w-1/2 lg:text-left'>
            <p className='font-montserrat text-lg font-bold tracking-wide text-teal-600 uppercase'>
              About Our Clinic
            </p>
            <h2 className='font-montserrat mt-4 text-4xl leading-tight font-bold text-gray-900 sm:text-5xl'>
              Providing The Best Medical Care For Your Family
            </h2>
            <p className='font-opensans mt-6 leading-relaxed text-gray-600 sm:max-w-4xl'>
              We are dedicated to offering top-quality, patient-centered
              healthcare. Our experienced team uses the latest technology and a
              compassionate approach to ensure you and your loved ones receive
              the best possible treatment. Your health and well-being are our
              highest priorities.
            </p>
            <div className='mt-8 flex justify-center lg:justify-start'>
              <Link
                href='/learn-more'
                className='font-montserrat inline-block rounded-lg bg-teal-600 px-8 py-3 font-semibold text-white shadow-md transition-colors hover:bg-teal-700'
              >
                LEARN MORE
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMedical;
