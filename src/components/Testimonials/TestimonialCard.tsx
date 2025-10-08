import React from 'react';
import { Star, Quote } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  rating: number;
  text: string;
  date?: string;
  location?: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  name,
  rating,
  text,
  date,
  location,
}) => {
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
    <div className='rounded-lg border border-gray-200 bg-white p-6 shadow-md transition-shadow duration-300 hover:shadow-lg'>
      {/* Quote Icon */}
      <div className='mb-4'>
        <Quote className='h-8 w-8 text-teal-500' />
      </div>

      {/* Testimonial Text */}
      <p className='mb-4 leading-relaxed text-gray-700'>&ldquo;{text}&rdquo;</p>

      {/* Rating */}
      <div className='mb-3'>{renderStars(rating)}</div>

      {/* Author Info */}
      <div className='border-t pt-4'>
        <div className='flex items-start justify-between'>
          <div>
            <h4 className='font-semibold text-gray-900'>{name}</h4>
            {location && (
              <p className='mt-1 text-sm text-gray-500'>{location}</p>
            )}
          </div>
          {date && <span className='text-sm text-gray-400'>{date}</span>}
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
