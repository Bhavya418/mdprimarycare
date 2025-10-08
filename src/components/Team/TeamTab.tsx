'use client';

import React from 'react';

interface TeamTabProps {
  activeDoctor: string;
  onDoctorChange: (doctor: string) => void;
}

const TeamTab: React.FC<TeamTabProps> = ({ activeDoctor, onDoctorChange }) => {
  const doctors = [
    { id: 'dr-chintan-shah', label: 'Dr. Chintan Shah' },
    { id: 'dr-jane-smith', label: 'Dr. Jane Smith' },
    { id: 'dr-john-doe', label: 'Dr. John Doe' },
  ];

  return (
    <div className='bg-white py-8'>
      <div className='mx-auto max-w-7xl px-6 sm:px-12 md:px-16 lg:px-8'>
        <div className='flex flex-wrap justify-center gap-2 sm:gap-4'>
          {doctors.map(doctor => (
            <button
              key={doctor.id}
              onClick={() => onDoctorChange(doctor.id)}
              className={`rounded-lg px-4 py-2 text-sm font-medium transition-all duration-200 sm:px-6 sm:py-3 sm:text-base ${
                activeDoctor === doctor.id
                  ? 'bg-teal-500 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {doctor.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamTab;
