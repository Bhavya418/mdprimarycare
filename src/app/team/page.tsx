import Navbar from '@/components/Navigation/Navbar';

export default function TeamPage() {
  return (
    <>
      <Navbar />
      <div className='container mx-auto px-4 py-8'>
        <h1 className='mb-6 text-3xl font-bold'>Our Team</h1>
        <p className='text-gray-600'>
          Meet our dedicated healthcare professionals at MDPrimaryCare.
        </p>
      </div>
    </>
  );
}
