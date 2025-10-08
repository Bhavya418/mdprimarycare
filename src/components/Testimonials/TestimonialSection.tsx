import React from 'react';
import { Star, Quote } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  rating: number;
  text: string;
  date: string;
  location?: string;
}

interface TestimonialSectionProps {
  title?: string;
  subtitle?: string;
  backgroundColor?: 'white' | 'gray' | 'teal';
}

const TestimonialSection: React.FC<TestimonialSectionProps> = ({
  title = 'What Our Patients Say',
  subtitle = 'Read testimonials from our satisfied patients',
  backgroundColor = 'gray',
}) => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'Sarah Johnson',
      rating: 5,
      text: 'Dr. Shah is an exceptional physician. He takes the time to listen to my concerns and explains everything clearly. The staff is friendly and professional. I highly recommend MDPrimaryCare to anyone looking for quality healthcare.',
      date: '2 weeks ago',
      location: 'Port St. Lucie, FL',
    },
    {
      id: 2,
      name: 'Michael Rodriguez',
      rating: 5,
      text: "I've been a patient here for over 3 years. Dr. Shah and his team provide excellent care. They are always on time, thorough, and genuinely care about their patients' well-being. Best medical practice in the area!",
      date: '1 month ago',
      location: 'Stuart, FL',
    },
    {
      id: 3,
      name: 'Linda Thompson',
      rating: 5,
      text: 'Outstanding service! Dr. Shah helped me manage my diabetes effectively. His approach is both professional and compassionate. The office staff is always helpful and scheduling appointments is easy.',
      date: '3 weeks ago',
      location: 'Jupiter, FL',
    },
    {
      id: 4,
      name: 'David Chen',
      rating: 5,
      text: 'Dr. Shah is knowledgeable, caring, and takes time to address all my health concerns. The clinic is clean and well-organized. I appreciate the personalized attention I receive here.',
      date: '1 week ago',
      location: 'Palm Beach Gardens, FL',
    },
    {
      id: 5,
      name: 'Maria Garcia',
      rating: 5,
      text: 'Excellent healthcare provider! Dr. Shah and his team go above and beyond. They provide comprehensive care and make you feel comfortable throughout your visit. Highly recommend!',
      date: '2 months ago',
      location: 'West Palm Beach, FL',
    },
    {
      id: 6,
      name: 'Robert Wilson',
      rating: 5,
      text: 'Professional, caring, and efficient. Dr. Shah takes the time to explain medical conditions and treatment options. The staff is courteous and the facility is modern and clean.',
      date: '3 weeks ago',
      location: 'Hobe Sound, FL',
    },
  ];

  const getBackgroundClasses = () => {
    switch (backgroundColor) {
      case 'white':
        return 'bg-white';
      case 'teal':
        return 'bg-teal-50';
      default:
        return 'bg-gray-50';
    }
  };

  const renderStars = (rating: number) => {
    return (
      <div className='flex items-center space-x-1'>
        {[...Array(5)].map((_, index) => (
          <Star
            key={index}
            className={`h-4 w-4 ${
              index < rating
                ? 'fill-yellow-400 text-yellow-400'
                : 'text-gray-300'
            }`}
          />
        ))}
      </div>
    );
  };

  return (
    <section className={`py-16 ${getBackgroundClasses()}`}>
      <div className='mx-auto max-w-7xl px-6 sm:px-12 md:px-16 lg:px-8'>
        {/* Header */}
        <div className='mb-12 text-center'>
          <h2 className='mb-4 text-3xl font-bold text-gray-900 sm:text-4xl'>
            {title}
          </h2>
          <p className='mx-auto max-w-2xl text-lg text-gray-600'>{subtitle}</p>
        </div>

        {/* Testimonials Grid */}
        <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3'>
          {testimonials.map(testimonial => (
            <div
              key={testimonial.id}
              className='rounded-lg border border-gray-200 bg-white p-6 shadow-md transition-shadow duration-300 hover:shadow-lg'
            >
              {/* Quote Icon */}
              <div className='mb-4'>
                <Quote className='h-8 w-8 text-teal-500' />
              </div>

              {/* Testimonial Text */}
              <p className='mb-4 text-sm leading-relaxed text-gray-700'>
                &ldquo;{testimonial.text}&rdquo;
              </p>

              {/* Rating */}
              <div className='mb-3'>{renderStars(testimonial.rating)}</div>

              {/* Author Info */}
              <div className='border-t pt-4'>
                <div className='flex items-start justify-between'>
                  <div>
                    <h4 className='text-sm font-semibold text-gray-900'>
                      {testimonial.name}
                    </h4>
                    {testimonial.location && (
                      <p className='mt-1 text-xs text-gray-500'>
                        {testimonial.location}
                      </p>
                    )}
                  </div>
                  <span className='text-xs text-gray-400'>
                    {testimonial.date}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className='mt-12 text-center'>
          <p className='mb-6 text-gray-600'>
            Join hundreds of satisfied patients who trust MDPrimaryCare for
            their healthcare needs.
          </p>
          <div className='space-y-4 sm:flex sm:justify-center sm:space-y-0 sm:space-x-4'>
            <a
              href='/contact'
              className='inline-block rounded-md bg-teal-500 px-6 py-3 font-medium text-white transition-colors duration-200 hover:bg-teal-600'
            >
              Schedule Appointment
            </a>
            <a
              href='/about'
              className='inline-block rounded-md border border-teal-500 bg-white px-6 py-3 font-medium text-teal-500 transition-colors duration-200 hover:bg-teal-50'
            >
              Learn More About Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
