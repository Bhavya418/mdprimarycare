'use client';

import React from 'react';

interface AboutTabProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const AboutTab: React.FC<AboutTabProps> = ({ activeTab, onTabChange }) => {
  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'mission', label: 'Mission & Vision' },
    { id: 'values', label: 'Our Values' },
    { id: 'history', label: 'Our History' },
  ];

  return (
    <div className='bg-white py-8'>
      <div className='mx-auto max-w-7xl px-6 sm:px-12 md:px-16 lg:px-8'>
        <div className='flex flex-wrap justify-center gap-2 sm:gap-4'>
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`rounded-lg px-4 py-2 text-sm font-medium transition-all duration-200 sm:px-6 sm:py-3 sm:text-base ${
                activeTab === tab.id
                  ? 'bg-teal-500 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutTab;
