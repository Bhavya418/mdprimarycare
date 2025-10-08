'use client';

import { useState } from 'react';
import Navbar from '@/components/Navigation/Navbar';
import TeamHeader from '@/components/Team/TeamHeader';
import TeamTab from '@/components/Team/TeamTab';
import DoctorProfile from '@/components/Team/DoctorProfile';

export default function TeamPage() {
  const [activeDoctor, setActiveDoctor] = useState<string>('dr-chintan-shah');

  const getDoctorName = () => {
    switch (activeDoctor) {
      case 'dr-chintan-shah':
        return 'Dr. Chintan Shah';
      case 'dr-jane-smith':
        return 'Dr. Jane Smith';
      case 'dr-john-doe':
        return 'Dr. John Doe';
      default:
        return 'Dr. Chintan Shah';
    }
  };

  return (
    <>
      <Navbar />
      <TeamHeader doctorName={getDoctorName()} />
      <TeamTab activeDoctor={activeDoctor} onDoctorChange={setActiveDoctor} />
      <DoctorProfile activeDoctor={activeDoctor} />
    </>
  );
}
