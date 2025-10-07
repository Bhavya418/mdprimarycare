'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
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

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      const response = await axios.post('/api/appointment', formData, {
        headers: {
          'Content-Type': 'application/json',
        },
        timeout: 10000, // 10 seconds timeout
      });

      if (response.status === 200) {
        // Show success toast
        toast.success(
          'Appointment request sent successfully! We will contact you shortly to confirm.',
          {
            duration: 5000,
            position: 'top-right',
            style: {
              background: '#10b981',
              color: '#fff',
              fontWeight: '500',
            },
            iconTheme: {
              primary: '#fff',
              secondary: '#10b981',
            },
          }
        );

        setSubmitStatus({
          type: 'success',
          message:
            'Appointment request sent successfully! We will contact you shortly to confirm.',
        });
        // Reset form
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          department: '',
          appointmentDate: '',
          appointmentTime: '',
          smsConsent: false,
        });
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        // Axios-specific error handling
        if (error.response) {
          // Server responded with error status
          const errorMessage =
            error.response.data.error ||
            'Failed to send appointment request. Please try again.';
          toast.error(errorMessage, {
            duration: 4000,
            position: 'top-right',
          });
          setSubmitStatus({
            type: 'error',
            message: errorMessage,
          });
        } else if (error.request) {
          // Request was made but no response received
          const errorMessage =
            'Network error. Please check your connection and try again.';
          toast.error(errorMessage, {
            duration: 4000,
            position: 'top-right',
          });
          setSubmitStatus({
            type: 'error',
            message: errorMessage,
          });
        } else {
          // Something else happened
          const errorMessage =
            'An unexpected error occurred. Please try again.';
          toast.error(errorMessage, {
            duration: 4000,
            position: 'top-right',
          });
          setSubmitStatus({
            type: 'error',
            message: errorMessage,
          });
        }
      } else {
        // Non-Axios error
        const errorMessage = 'An unexpected error occurred. Please try again.';
        toast.error(errorMessage, {
          duration: 4000,
          position: 'top-right',
        });
        setSubmitStatus({
          type: 'error',
          message: errorMessage,
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className='bg-gray-50 py-16 sm:py-24'>
      <div className='mx-auto max-w-7xl px-6 sm:px-12 md:px-16 lg:px-8'>
        <div className='grid grid-cols-1 items-center gap-12 lg:grid-cols-2'>
          {/* Left side - Image - Hidden on md and smaller screens */}
          <div className='relative order-2 hidden lg:order-1 lg:block'>
            <Image
              src='/appointment.webp'
              alt='Doctor with stethoscope'
              width={600}
              height={700}
              className='h-auto w-full rounded-lg object-cover shadow-xl'
            />
          </div>

          {/* Right side - Form */}
          <div className='order-1 rounded-lg bg-white p-6 shadow-xl sm:p-8 lg:order-2 lg:col-span-1 lg:p-12'>
            <div className='mb-8 text-center lg:text-left'>
              <h2 className='mb-4 text-2xl font-bold text-slate-800 sm:text-3xl'>
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

              {/* Status Message */}
              {submitStatus.type && (
                <div
                  className={`rounded-md p-4 ${
                    submitStatus.type === 'success'
                      ? 'border border-green-200 bg-green-50 text-green-800'
                      : 'border border-red-200 bg-red-50 text-red-800'
                  }`}
                >
                  <p className='text-sm font-medium'>{submitStatus.message}</p>
                </div>
              )}

              {/* Submit Button */}
              <button
                type='submit'
                disabled={isSubmitting}
                className={`w-full rounded-md px-6 py-4 text-lg font-semibold text-white transition-colors duration-200 focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 focus:outline-none ${
                  isSubmitting
                    ? 'cursor-not-allowed bg-gray-400'
                    : 'bg-teal-500 hover:bg-teal-600'
                }`}
              >
                {isSubmitting ? (
                  <div className='flex items-center justify-center'>
                    <div className='mr-2 h-5 w-5 animate-spin rounded-full border-b-2 border-white'></div>
                    Sending...
                  </div>
                ) : (
                  'SUBMIT'
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppointmentBook;
