import Image from 'next/image';

const OurTeam = () => {
  const teamMembers = [
    {
      name: 'Dr. Chintan Shah',
      title: 'Primary Care Physician',
      image: '/chintanshah.png',
      description:
        'Board-certified family medicine physician with extensive experience in primary care.',
    },
    {
      name: 'Dr. Ilee Fagarass',
      title: 'Family Nurse Practitioner',
      image: '/ileefagarass.jpg',
      description:
        'Family nurse practitioner caring for patients with common illnesses, chronic diseases, and minor injuries.',
    },
    {
      name: 'Meredith McCoy',
      title: 'Nurse Practitioner',
      image: '/meredithmcoy.jpg',
      // TODO: Replace with real bio once provided by client.
      description:
        'Experienced nurse practitioner focused on preventive care and supporting patients through every stage of wellness.',
    },
  ];

  return (
    <section className='bg-white py-12 sm:py-16'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='mx-auto flex max-w-5xl flex-col justify-center pb-12 text-center'>
          <p className='font-montserrat text-lg font-bold tracking-wide text-teal-600 uppercase'>
            OUR TEAM
          </p>
          <h2 className='font-montserrat mt-4 text-4xl leading-tight font-bold text-gray-900 sm:text-5xl'>
            Meet Our Healthcare Professionals
          </h2>
          <p className='font-opensans mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-gray-600'>
            Our experienced team of healthcare professionals is dedicated to
            providing exceptional medical care and support to help you achieve
            optimal health and wellness.
          </p>
        </div>

        <div className='grid grid-cols-1 gap-8 md:grid-cols-3 lg:gap-12'>
          {teamMembers.map((member, index) => (
            <div key={index} className='group text-center'>
              <div className='relative mb-6 h-80 w-full overflow-hidden rounded-lg bg-teal-50'>
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  sizes='(max-width: 768px) 100vw, 33vw'
                  className='object-cover object-top transition-transform duration-300 group-hover:scale-105'
                />
              </div>
              <h3 className='font-montserrat text-2xl font-bold text-gray-900'>
                {member.name}
              </h3>
              <p className='font-montserrat mb-3 text-lg font-semibold tracking-wide text-teal-600'>
                {member.title}
              </p>
              <p className='text-md font-opensans leading-relaxed text-gray-600'>
                {member.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
