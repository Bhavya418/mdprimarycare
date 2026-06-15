import Image from 'next/image';
import TestimonialCard from '@/components/Testimonials/TestimonialCard';

interface DoctorProfileProps {
  activeDoctor: string;
}

interface DoctorData {
  name: string;
  image: string;
  overview: { title: string; content: string[] };
  honorsAndAwards: { title: string; description: string }[];
  education: { institution: string; description: string }[];
  testimonials: { name: string; rating: number; text: string; date: string }[];
  bookingNote?: string;
}

const DoctorProfile: React.FC<DoctorProfileProps> = ({ activeDoctor }) => {
  const getDoctorData = (): DoctorData => {
    switch (activeDoctor) {
      case 'dr-chintan-shah':
      default:
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
      case 'dr-ilee-fagarass':
        return {
          name: 'DR. ILEE FAGARASS',
          image: '/ileefagarass.jpg',
          overview: {
            title: 'Overview',
            content: [
              'Ms. Ilee Fagarass is a family nurse practitioner who sees patients at MD Primary Care in Fort Pierce, FL. She can help with common illnesses, chronic diseases, and minor injuries.',
              "Ms. Fagarass explains patients' conditions and prepares individualized treatment plans. In addition to writing prescriptions, she discusses lifestyle and dietary tips for lasting outcomes. She also answers queries, encourages preventive care, schedules follow-up appointments, and writes referrals, if needed.",
              'Ms. Fagarass earned her master’s degree in adult nurse practitioner from Chamberlain University - Chicago.',
            ],
          },
          bookingNote:
            'Expect a call from our office after booking to verify your insurance, payment, and appointment details. This will ensure you are set up for a successful appointment.',
          // TODO: Add honors and awards once provided by client.
          honorsAndAwards: [],
          education: [
            {
              institution: 'Chamberlain University - Chicago',
              description: 'Master’s degree in Adult Nurse Practitioner.',
            },
          ],
          testimonials: [],
        };
      case 'dr-meredith-mccoy':
        return {
          name: 'MEREDITH MCCOY',
          image: '/meredithmcoy.jpg',
          // TODO: Replace overview with real bio once provided by client.
          overview: {
            title: 'Overview',
            content: [
              'Meredith McCoy is an experienced Nurse Practitioner focused on preventive care and supporting patients through every stage of wellness. She believes in building strong, trusting relationships with the patients she serves.',
              'Her areas of focus include routine wellness visits, chronic condition management, and patient education, always with an emphasis on clear communication.',
              'In her free time, Meredith enjoys spending time with family and pursuing an active, healthy lifestyle.',
            ],
          },
          honorsAndAwards: [],
          education: [],
          testimonials: [
            {
              name: 'Megan M.',
              rating: 5,
              text: 'Great experience! Meredith McCoy is the most organized, informed and forthcoming of any Healthcare provider I’ve ever had! She listened to my concerns, ordered appropriate labs, and laid out the next steps to be taken. Explained the different options depending on my test results.',
              date: 'June 9, 2026',
            },
            {
              name: 'Jaclynn M.',
              rating: 5,
              text: 'I have been looking for a new primary doctor and I am glad I came across this practice. The staff was very nice and I was able to make an appointment without having to wait months. I had my annual exam and it was thorough and I felt heard. I am going back for my bloodwork and follow up to review the results.',
              date: 'June 1, 2026',
            },
            {
              name: 'Frances P.',
              rating: 5,
              text: 'Dr McCoy is thorough, expert, and compassionate. Her care over the last 4 years has delivered great results in the health of the 105 year old patient. Couldn’t ask for more. Thank you Dr McCoy.',
              date: 'May 22, 2026',
            },
          ],
        };
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
        {(doctor.honorsAndAwards.length > 0 || doctor.education.length > 0) && (
          <div className='grid grid-cols-1 gap-8 lg:grid-cols-2'>
            {/* Honors and Awards */}
            {doctor.honorsAndAwards.length > 0 && (
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
            )}

            {/* Education */}
            {doctor.education.length > 0 && (
              <div>
                <h3 className='mb-6 text-2xl font-bold text-gray-900'>
                  Education
                </h3>
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
            )}
          </div>
        )}

        {/* Patient Testimonials Section */}
        {doctor.testimonials.length > 0 && (
          <div className='mt-16'>
            <h3 className='mb-8 text-center text-3xl font-bold text-gray-900'>
              What Patients Say About{' '}
              {doctor.name.split(' ').slice(1).join(' ')}
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
          </div>
        )}

        {/* Booking Note & Call to Action */}
        <div className='mt-16 text-center'>
          {doctor.bookingNote && (
            <div className='mx-auto mb-8 max-w-3xl rounded-lg border-l-4 border-teal-500 bg-teal-50 p-4 text-left'>
              <p className='leading-relaxed text-gray-700'>
                {doctor.bookingNote}
              </p>
            </div>
          )}
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
  );
};

export default DoctorProfile;
