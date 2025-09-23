'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import { User, Mail, Phone, Calendar, Clock, Heart } from 'lucide-react';

const AppointmentBook = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    department: '',
    appointmentDate: '',
    appointmentTime: '',
    smsConsent: false,
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      setFormData(prev => ({
        ...prev,
        [name]: (e.target as HTMLInputElement).checked,
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Appointment form submitted:', formData);
  };

  return (
    <section className='bg-gray-50 py-16 sm:py-24'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='grid grid-cols-1 items-center gap-12 lg:grid-cols-2'>
          {/* Left side - Image */}
          <div className='relative'>
            <Image
              src='/appointment.webp'
              alt='Doctor with stethoscope'
              width={600}
              height={700}
              className='h-auto w-full rounded-lg object-cover shadow-xl'
            />
          </div>

          {/* Right side - Form */}
          <div className='rounded-lg bg-white p-12 shadow-xl'>
            <div className='mb-8'>
              <h2 className='mb-4 text-3xl font-bold text-slate-800'>
                Make an Appointment
              </h2>
              <p className='leading-relaxed text-gray-600'>
                Contact us any suitable way and make an appointment with the
                doctor whose help you need! Visit us at the scheduled time.
              </p>
            </div>

            <form onSubmit={handleSubmit} className='space-y-8'>
              {/* Full Name and Email Row */}
              <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
                <div className='relative'>
                  <div className='pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3'>
                    <User className='h-5 w-5 text-teal-500' />
                  </div>
                  <input
                    type='text'
                    name='fullName'
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder='Full Name'
                    className='w-full rounded-md border border-gray-300 py-3 pr-3 pl-10 focus:border-transparent focus:ring-2 focus:ring-teal-500 focus:outline-none'
                    required
                  />
                </div>
                <div className='relative'>
                  <div className='pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3'>
                    <Mail className='h-5 w-5 text-teal-500' />
                  </div>
                  <input
                    type='email'
                    name='email'
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder='Email Address'
                    className='w-full rounded-md border border-gray-300 py-3 pr-3 pl-10 focus:border-transparent focus:ring-2 focus:ring-teal-500 focus:outline-none'
                    required
                  />
                </div>
              </div>

              {/* Phone and Department Row */}
              <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
                <div className='relative'>
                  <div className='pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3'>
                    <Phone className='h-5 w-5 text-teal-500' />
                  </div>
                  <input
                    type='tel'
                    name='phone'
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder='Phone'
                    className='w-full rounded-md border border-gray-300 py-3 pr-3 pl-10 focus:border-transparent focus:ring-2 focus:ring-teal-500 focus:outline-none'
                    required
                  />
                </div>
                <div className='relative'>
                  <div className='pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3'>
                    <Heart className='h-5 w-5 text-teal-500' />
                  </div>
                  <select
                    name='department'
                    value={formData.department}
                    onChange={handleInputChange}
                    className='w-full appearance-none rounded-md border border-gray-300 bg-white py-3 pr-3 pl-10 focus:border-transparent focus:ring-2 focus:ring-teal-500 focus:outline-none'
                    required
                  >
                    <option value=''>Select Department</option>
                    <option value='family-medicine'>Family Medicine</option>
                    <option value='primary-care'>Primary Care</option>
                    <option value='family-planning'>Family Planning</option>
                    <option value='weight-loss'>Weight Loss</option>
                    <option value='health-checkups'>Health Checkups</option>
                  </select>
                </div>
              </div>

              {/* Date and Time Row */}
              <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
                <div className='relative'>
                  <div className='pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3'>
                    <Calendar className='h-5 w-5 text-teal-500' />
                  </div>
                  <input
                    type='date'
                    name='appointmentDate'
                    value={formData.appointmentDate}
                    onChange={handleInputChange}
                    className='w-full rounded-md border border-gray-300 py-3 pr-3 pl-10 focus:border-transparent focus:ring-2 focus:ring-teal-500 focus:outline-none'
                    required
                  />
                </div>
                <div className='relative'>
                  <div className='pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3'>
                    <Clock className='h-5 w-5 text-teal-500' />
                  </div>
                  <input
                    type='time'
                    name='appointmentTime'
                    value={formData.appointmentTime}
                    onChange={handleInputChange}
                    className='w-full rounded-md border border-gray-300 py-3 pr-3 pl-10 focus:border-transparent focus:ring-2 focus:ring-teal-500 focus:outline-none'
                    required
                  />
                </div>
              </div>

              {/* SMS Consent Checkbox */}
              <div className='flex items-center'>
                <input
                  type='checkbox'
                  name='smsConsent'
                  id='smsConsent'
                  checked={formData.smsConsent}
                  onChange={handleInputChange}
                  className='h-4 w-4 rounded border-gray-300 text-teal-600 focus:ring-teal-500'
                />
                <label
                  htmlFor='smsConsent'
                  className='ml-3 text-sm text-gray-600'
                >
                  by clicking SUBMIT you consent to receiving SMS messages
                </label>
              </div>

              {/* Submit Button */}
              <button
                type='submit'
                className='w-full rounded-md bg-teal-500 px-6 py-4 text-lg font-semibold text-white transition-colors duration-200 hover:bg-teal-600 focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 focus:outline-none'
              >
                SUBMIT
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppointmentBook;
