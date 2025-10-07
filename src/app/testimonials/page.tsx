import Navbar from '@/components/Navigation/Navbar';

export default function TestimonialsPage() {
  return (
    <>
      <Navbar />
      <div className='container mx-auto px-4 py-8'>
        <h1 className='mb-6 text-3xl font-bold'>Testimonials</h1>
        <p className='text-gray-600'>
          Read what our patients have to say about their experience at
          MDPrimaryCare.
        </p>
      </div>
    </>
  );
}
