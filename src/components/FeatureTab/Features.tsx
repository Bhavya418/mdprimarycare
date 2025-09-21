import React from "react";
import { Stethoscope, CreditCard, ShieldPlus } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <Stethoscope className="w-12 h-12 text-teal-500" />,
      title: "Fort Pierce Doctors",
      description: "We're a team of Primary Care Physician In Fort Pierce helping you live and maintain a healthy lifestyle",
    },
    {
      icon: <CreditCard className="w-12 h-12 text-teal-500" />,
      title: "Major Insurance Accepted",
      description: "We accept all major PPO insurance providers. Please contact our office to verify your insurance provider.",
    },
    {
      icon: <ShieldPlus className="w-12 h-12 text-teal-500" />,
      title: "Urgent Care & Walk-Ins",
      description: "Dr. Shah provides urgent care services to walk-in patients from across the east coast of Florida.",
    },
  ];

  return (
    <div className="bg-white shadow-lg  border-gray-300 border-4">
      <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x-4 divide-gray-200 text-center">
        {features.map((feature, index) => (
          <div key={index} className="flex flex-col items-center px-12 py-12">
            <div className="mb-4">{feature.icon}</div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              {feature.title}
            </h3>
            <p className="text-gray-500 text-sm max-w-xs">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Features;