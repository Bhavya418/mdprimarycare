import React from 'react';
import Image from 'next/image';
import TestimonialCard from '@/components/Testimonials/TestimonialCard';

interface DoctorProfileProps {
  activeDoctor: string;
}

const DoctorProfile: React.FC<DoctorProfileProps> = ({ activeDoctor }) => {
  const getDoctorData = () => {
    switch (activeDoctor) {
      case 'dr-chintan-shah':
        return {
          name: 'DR. CHINTAN SHAH',
          image: '/chintanshah.png', // You'll need to add actual doctor images
          overview: {
            title: 'Overview',
            content: [
              'Dr. Chintan Shah is Board Certified in Family Medicine and recently earned a degree of Fellow in Family Medicine (FAAFP). He earned his medical degree at N.H.L. Municipal Medical College in India and completed his residency at Case Western Reserve University – MetroHealth Medical Center, Cleveland Ohio. Dr. Shah practices hospital-based medicine as well as private practice family medicine. He is affiliated with Lawnwood Regional Medical Center, St Lucie Medical Center, and Tradition Medical Center. He is a provider of hospice and palliative care.',
              'Dr. Shah enjoys spending time with his family of a lovely wife and a beautiful daughter. His interests include running, watching movies, among other activities. In his free time, Dr. Shah loves to work out and stay fit. He is a big proponent of healthy eating and motivates his close friends and family to do the same.',
              'Dr. Shah welcomes the opportunity to care for new patients and he is fluent in Hindi and Gujarati.',
            ],
          },
          honorsAndAwards: [
            {
              title: "Patients' Choice Award",
              description:
                "Patients' Choice recognition reflects the difference a particular physician has made in the lives of his/her patients. The honor is bestowed to physicians who have received near perfect scores, as voted by patients.",
            },
            {
              title: 'On-Time Doctor Award',
              description:
                "Vitals On-Time + Promptness Award recognizes doctors with consistently high ratings for timeliness of appointments. The honor is granted based on a physician's overall and promptness scores.",
            },
            {
              title: 'Compassionate Doctor Recognition',
              description:
                "Compassionate Doctor certification is granted to physicians who treat their patients with the utmost kindness. The honor is granted based on a physician's overall and bedside manner scores.",
            },
          ],
          education: [
            {
              institution: 'N.H.L. Municipal Medical College',
              description:
                'He earned his medical degree at N.H.L. Municipal Medical College in India.',
            },
            {
              institution: 'MetroHealth Medical Center, Cleveland Ohio',
              description:
                'Completed his residency at Case Western Reserve University – MetroHealth Medical Center, Cleveland Ohio.',
            },
          ],
          testimonials: [
            {
              name: 'Sarah Johnson',
              rating: 5,
              text: 'Dr. Shah is an exceptional physician. He takes the time to listen to my concerns and explains everything clearly. The staff is friendly and professional.',
              date: '2 weeks ago',
            },
            {
              name: 'Michael Rodriguez',
              rating: 5,
              text: "I've been a patient here for over 3 years. Dr. Shah and his team provide excellent care. They are always on time, thorough, and genuinely care about their patients' well-being.",
              date: '1 month ago',
            },
            {
              name: 'Linda Thompson',
              rating: 5,
              text: 'Outstanding service! Dr. Shah helped me manage my diabetes effectively. His approach is both professional and compassionate.',
              date: '3 weeks ago',
            },
          ],
        };
      case 'dr-jane-smith':
        return {
          name: 'DR. JANE SMITH',
          image: '/doctor-placeholder.jpg',
          overview: {
            title: 'Overview',
            content: [
              "Dr. Jane Smith is a dedicated family physician with over 15 years of experience in primary care. She is board-certified in Family Medicine and has a special interest in preventive care and women's health.",
              'Dr. Smith completed her medical training at Harvard Medical School and her residency at Massachusetts General Hospital. She is committed to providing comprehensive, patient-centered care.',
              'In her spare time, Dr. Smith enjoys hiking, reading, and volunteering at local community health clinics.',
            ],
          },
          honorsAndAwards: [
            {
              title: 'Excellence in Patient Care',
              description:
                'Recognized for outstanding patient satisfaction scores and dedication to quality healthcare delivery.',
            },
          ],
          education: [
            {
              institution: 'Harvard Medical School',
              description: 'Doctor of Medicine degree with honors.',
            },
            {
              institution: 'Massachusetts General Hospital',
              description: 'Completed Family Medicine residency program.',
            },
          ],
          testimonials: [
            {
              name: 'David Chen',
              rating: 5,
              text: 'Dr. Smith is knowledgeable, caring, and takes time to address all my health concerns. I appreciate the personalized attention I receive.',
              date: '1 week ago',
            },
            {
              name: 'Maria Garcia',
              rating: 5,
              text: 'Excellent healthcare provider! Dr. Smith goes above and beyond. She provides comprehensive care and makes you feel comfortable throughout your visit.',
              date: '2 weeks ago',
            },
          ],
        };
      case 'dr-john-doe':
        return {
          name: 'DR. JOHN DOE',
          image: '/doctor-placeholder.jpg',
          overview: {
            title: 'Overview',
            content: [
              'Dr. John Doe specializes in internal medicine with a focus on chronic disease management and geriatric care. He has been practicing medicine for over 20 years.',
              'Dr. Doe graduated from Johns Hopkins University School of Medicine and completed his internal medicine residency at Mayo Clinic.',
              'He is passionate about helping patients manage complex medical conditions and believes in the importance of building strong doctor-patient relationships.',
            ],
          },
          honorsAndAwards: [
            {
              title: 'Top Doctor Award',
              description:
                'Recognized by peers for exceptional medical knowledge and patient care.',
            },
          ],
          education: [
            {
              institution: 'Johns Hopkins University School of Medicine',
              description: 'Doctor of Medicine degree.',
            },
            {
              institution: 'Mayo Clinic',
              description: 'Internal Medicine residency program.',
            },
          ],
          testimonials: [
            {
              name: 'Robert Wilson',
              rating: 5,
              text: 'Professional, caring, and efficient. Dr. Doe takes the time to explain medical conditions and treatment options clearly.',
              date: '1 month ago',
            },
            {
              name: 'Jennifer Adams',
              rating: 5,
              text: 'Dr. Doe has been excellent in managing my chronic conditions. His expertise in internal medicine is evident in every consultation.',
              date: '2 weeks ago',
            },
          ],
        };
      default:
        return getDoctorData();
    }
  };

  const doctor = getDoctorData();

  return (
    <div className='bg-gray-50 py-16'>
      <div className='mx-auto max-w-7xl px-6 sm:px-12 md:px-16 lg:px-8'>
        {/* Doctor Profile Section */}
        <div className='mb-12 flex flex-col gap-8 lg:flex-row lg:gap-12'>
          {/* Left side - Doctor Image and Name */}
          <div className='lg:w-2/5'>
            <div className='relative'>
              <div className='relative h-96 overflow-hidden rounded-lg bg-gray-200 lg:h-[600px]'>
                <Image
                  src={doctor.image}
                  alt={doctor.name}
                  fill
                  style={{ objectFit: 'cover' }}
                  className='rounded-lg'
                />
              </div>
              <div className='absolute right-0 bottom-0 left-0 bg-teal-500 p-4 text-center'>
                <h2 className='text-2xl font-bold text-white lg:text-3xl'>
                  {doctor.name}
                </h2>
              </div>
            </div>
          </div>

          {/* Right side - Overview */}
          <div className='lg:flex-1'>
            <h3 className='mb-6 text-3xl font-bold text-gray-900'>
              {doctor.overview.title}
            </h3>
            <div className='space-y-4 text-gray-600'>
              {doctor.overview.content.map((paragraph, index) => (
                <p key={index} className='leading-relaxed'>
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>

        {/* Honors and Awards & Education Section */}
        <div className='grid grid-cols-1 gap-8 lg:grid-cols-2'>
          {/* Honors and Awards */}
          <div>
            <h3 className='mb-6 text-2xl font-bold text-gray-900'>
              Honors and Awards
            </h3>
            <div className='space-y-6'>
              {doctor.honorsAndAwards.map((award, index) => (
                <div key={index}>
                  <h4 className='mb-2 font-semibold text-gray-900'>
                    {award.title}
                  </h4>
                  <p className='leading-relaxed text-gray-600'>
                    {award.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className='mb-6 text-2xl font-bold text-gray-900'>Education</h3>
            <div className='space-y-6'>
              {doctor.education.map((edu, index) => (
                <div key={index}>
                  <h4 className='mb-2 font-semibold text-gray-900'>
                    {edu.institution}
                  </h4>
                  <p className='leading-relaxed text-gray-600'>
                    {edu.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Patient Testimonials Section */}
        <div className='mt-16'>
          <h3 className='mb-8 text-center text-3xl font-bold text-gray-900'>
            What Patients Say About {doctor.name.split(' ').slice(1).join(' ')}
          </h3>
          <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
            {doctor.testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                name={testimonial.name}
                rating={testimonial.rating}
                text={testimonial.text}
                date={testimonial.date}
              />
            ))}
          </div>

          {/* Call to Action */}
          <div className='mt-12 text-center'>
            <p className='mb-6 text-gray-600'>
              Ready to experience exceptional healthcare with{' '}
              {doctor.name.split(' ').slice(1).join(' ')}?
            </p>
            <a
              href='/contact'
              className='inline-block rounded-md bg-teal-500 px-6 py-3 font-medium text-white transition-colors duration-200 hover:bg-teal-600'
            >
              Schedule an Appointment
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorProfile;
