import ContactInfo from './ContactInfo';
import ContactForm from './ContactForm';

const ContactContent = () => {
  return (
    <div className='bg-gray-50 py-16'>
      <div className='mx-auto max-w-7xl px-6 sm:px-12 md:px-16 lg:px-8'>
        <div className='flex flex-col gap-8 lg:flex-row lg:gap-12'>
          <ContactInfo />
          <ContactForm />
        </div>

        {/* Full Width Map Section */}
        <div className='mt-12'>
          <h3 className='mb-6 text-center text-2xl font-bold text-gray-900'>
            Our Location
          </h3>
          <div className='h-96 overflow-hidden rounded-lg shadow-lg'>
            <iframe
              src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d28329.45681451604!2d-80.344896!3d27.432435!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88def1963c5f3d49%3A0x1e4bec2ce145746f!2sDr.%20Chintan%20Shah%2C%20MD!5e0!3m2!1sen!2sin!4v1758648158114!5m2!1sen!2sin'
              width='100%'
              height='100%'
              style={{ border: 0 }}
              allowFullScreen={true}
              loading='lazy'
              referrerPolicy='no-referrer-when-downgrade'
              className='rounded-lg'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactContent;
