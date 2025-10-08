import React from 'react';
import WhatWeDo from './WhatWeDo';
import { Target, Eye, Brain } from 'lucide-react';

interface AboutContentProps {
  activeTab: string;
}

const AboutContent: React.FC<AboutContentProps> = ({ activeTab }) => {
  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return <WhatWeDo />;

      case 'mission':
        return (
          <div className='bg-gray-50 py-16'>
            <div className='mx-auto max-w-7xl px-6 sm:px-12 md:px-16 lg:px-8'>
              <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3'>
                {/* Mission */}
                <div className='rounded-lg bg-white p-6 text-center shadow-md'>
                  <div className='mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-teal-100'>
                    <Target className='h-8 w-8 text-teal-500' />
                  </div>
                  <h2 className='mb-4 text-xl font-semibold text-gray-900 sm:text-2xl'>
                    Our Mission
                  </h2>
                  <p className='text-sm leading-relaxed text-gray-600 sm:text-base'>
                    Our mission is simple: to provide invaluable diagnostic and
                    treatment recommendations. Our mantra is just as simple:
                    early detection is paramount to prevention. To provide this
                    world-class model, we not only have the most medically
                    qualified doctors, but we also support them with passionate
                    nurses, physicians assistants, and staff to deliver the
                    all-around care that you need.
                  </p>
                </div>

                {/* Vision */}
                <div className='rounded-lg bg-white p-6 text-center shadow-md'>
                  <div className='mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-teal-100'>
                    <Eye className='h-8 w-8 text-teal-500' />
                  </div>
                  <h2 className='mb-4 text-xl font-semibold text-gray-900 sm:text-2xl'>
                    Our Vision
                  </h2>
                  <p className='text-sm leading-relaxed text-gray-600 sm:text-base'>
                    Through our integrative approach, we pride ourselves on
                    spending the time necessary to analyze and treat issues that
                    can often be overlooked in today&apos;s fast-paced
                    healthcare environment. We view our patients like family and
                    offer them the highest quality of care in a warm and
                    friendly environment.
                  </p>
                </div>

                {/* Strategies */}
                <div className='rounded-lg bg-white p-6 text-center shadow-md md:col-span-2 lg:col-span-1'>
                  <div className='mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-teal-100'>
                    <Brain className='h-8 w-8 text-teal-500' />
                  </div>
                  <h2 className='mb-4 text-xl font-semibold text-gray-900 sm:text-2xl'>
                    Our Strategies
                  </h2>
                  <p className='text-sm leading-relaxed text-gray-600 sm:text-base'>
                    We implement comprehensive healthcare strategies focused on
                    preventive care, patient education, and cutting-edge medical
                    technology. Our approach combines evidence-based medicine
                    with personalized treatment plans, ensuring each patient
                    receives optimal care tailored to their unique health needs
                    and lifestyle.
                  </p>
                </div>
              </div>
            </div>
          </div>
        );

      case 'values':
        return (
          <div className='bg-gray-50 py-16'>
            <div className='mx-auto max-w-7xl px-6 sm:px-12 md:px-16 lg:px-8'>
              <div className='rounded-lg bg-white p-6 shadow-md sm:p-8'>
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
                    <h3 className='mb-2 font-semibold text-gray-900'>
                      Excellence
                    </h3>
                    <p className='text-sm text-gray-600'>
                      We are committed to providing the highest quality of care
                      and service.
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
                    <h3 className='mb-2 font-semibold text-gray-900'>
                      Compassion
                    </h3>
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
                    <h3 className='mb-2 font-semibold text-gray-900'>
                      Integrity
                    </h3>
                    <p className='text-sm text-gray-600'>
                      We uphold the highest ethical standards in all our
                      interactions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'history':
        return (
          <div className='bg-gray-50 py-16'>
            <div className='mx-auto max-w-7xl px-6 sm:px-12 md:px-16 lg:px-8'>
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
                      <h3 className='font-semibold text-gray-900'>
                        Foundation
                      </h3>
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
                        patients&apos; needs first and embracing new
                        technologies.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return <WhatWeDo />;
    }
  };

  return <div>{renderContent()}</div>;
};

export default AboutContent;
