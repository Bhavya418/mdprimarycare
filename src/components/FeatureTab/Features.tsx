import React from 'react';
import { Stethoscope, CreditCard, ShieldPlus } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Stethoscope className='h-12 w-12 text-teal-500' />,
      title: 'Fort Pierce Doctors',
      description:
        "We're a team of Primary Care Physician In Fort Pierce helping you live and maintain a healthy lifestyle",
    },
    {
      icon: <CreditCard className='h-12 w-12 text-teal-500' />,
      title: 'Major Insurance Accepted',
      description:
        'We accept all major PPO insurance providers. Please contact our office to verify your insurance provider.',
    },
    {
      icon: <ShieldPlus className='h-12 w-12 text-teal-500' />,
      title: 'Urgent Care & Walk-Ins',
      description:
        'Dr. Shah provides urgent care services to walk-in patients from across the east coast of Florida.',
    },
  ];

  return (
    <div className='border-4 border-gray-300 bg-white shadow-lg'>
      <div className='grid grid-cols-1 divide-y divide-gray-200 text-center md:grid-cols-3 md:divide-x-4 md:divide-y-0'>
        {features.map((feature, index) => (
          <div key={index} className='flex flex-col items-center px-12 py-12'>
            <div className='mb-4'>{feature.icon}</div>
            <h3 className='font-montserrat mb-2 text-2xl font-bold text-gray-900'>
              {feature.title}
            </h3>
            <p className='text-md font-opensans max-w-md text-gray-500'>
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
