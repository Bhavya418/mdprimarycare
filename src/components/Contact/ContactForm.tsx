const ContactForm = () => {
  return (
    <div className='lg:flex-1'>
      <div className='rounded-lg bg-white p-6 shadow-md'>
        <div className='mb-6'>
          <p className='relative mb-2 text-xs font-semibold tracking-wide text-gray-400 uppercase'>
            WHAT WE DO
            <span className='ml-3 inline-block h-[2px] w-10 bg-teal-500'></span>
          </p>
          <h2 className='mb-3 text-2xl font-bold text-slate-800 sm:text-3xl'>
            Get In Touch
          </h2>
          <p className='mb-4 text-sm text-gray-600'>
            We offer extensive medical procedures to outbound and inbound
            patients what it is and we are very proud of achievpatients for
            recovery
          </p>
        </div>
        <form className='space-y-4'>
          <div className='grid grid-cols-1 gap-4 sm:grid-cols-2'>
            <div>
              <label
                htmlFor='name'
                className='mb-1 block text-sm font-medium text-gray-700'
              >
                Full Name
              </label>
              <input
                type='text'
                id='name'
                name='name'
                className='w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-transparent focus:ring-2 focus:ring-teal-500 focus:outline-none'
                placeholder='Enter your full name'
              />
            </div>

            <div>
              <label
                htmlFor='email'
                className='mb-1 block text-sm font-medium text-gray-700'
              >
                Email Address
              </label>
              <input
                type='email'
                id='email'
                name='email'
                className='w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-transparent focus:ring-2 focus:ring-teal-500 focus:outline-none'
                placeholder='Enter your email'
              />
            </div>
          </div>

          <div className='grid grid-cols-1 gap-4 sm:grid-cols-2'>
            <div>
              <label
                htmlFor='phone'
                className='mb-1 block text-sm font-medium text-gray-700'
              >
                Phone Number
              </label>
              <input
                type='tel'
                id='phone'
                name='phone'
                className='w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-transparent focus:ring-2 focus:ring-teal-500 focus:outline-none'
                placeholder='Enter your phone number'
              />
            </div>

            <div>
              <label
                htmlFor='subject'
                className='mb-1 block text-sm font-medium text-gray-700'
              >
                Subject
              </label>
              <input
                type='text'
                id='subject'
                name='subject'
                className='w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-transparent focus:ring-2 focus:ring-teal-500 focus:outline-none'
                placeholder='Enter subject'
              />
            </div>
          </div>

          <div>
            <label
              htmlFor='message'
              className='mb-1 block text-sm font-medium text-gray-700'
            >
              Message
            </label>
            <textarea
              id='message'
              name='message'
              rows={4}
              className='w-full resize-none rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-transparent focus:ring-2 focus:ring-teal-500 focus:outline-none'
              placeholder='Enter your message'
            ></textarea>
          </div>

          <button
            type='submit'
            className='w-full rounded-md bg-teal-500 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-teal-600 focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 focus:outline-none'
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
