import React from "react";
import Image from "next/image";

const OurServices = () => {
  const services = [
    { name: "Diabetes", icon: "/blood-test.webp" },
    { name: "Back Pain", icon: "/back-pain-1.webp" },
    { name: "Arthritis", icon: "/arthritis-150x150.webp" },
    { name: "Hypertension", icon: "/hypertension-150x150.webp" },
    { name: "Hypothyroidism", icon: "/thyroid.webp" },
    { name: "Asthma/COPD", icon: "/lungs.webp" },
    { name: "Obesity", icon: "/obesity.webp" },
    { name: "Women's Health", icon: "/00D6A3-150x150.webp" },
    { name: "Depression", icon: "/depression-150x150.webp" },
    { name: "Liver Problems", icon: "/liver-150x150.webp" },
  ];
  return (
    <section className="bg-teal-800 py-12 sm:py-16">
      <div>
        <div className="flex flex-col justify-center border-b-2 border-gray-100 max-w-5xl mx-auto pb-8">
          <p className="font-semibold text-white uppercase tracking-wide">
            WE OFFER SERVICES
          </p>
          <h2 className="mt-1 text-3xl  sm:text-4xl font-bold text-gray-100 tracking-tight">
            We Provide Assistance in Various Directions
          </h2>
          <p className="mt-4 text-md text-gray-100">
            There is a strong emphasis in the specialty of Family Medicine on
            promoting health and preventing disease, and the physicians at MD
            Primary Care are trained to provide complete health care to patients
            of all ages.
          </p>
        </div>
        <div className="mt-10 max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8">
          {services.map((service, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="w-16 h-16 mb-4 flex items-center justify-center">
                <Image
                  src={service.icon}
                  alt={service.name}
                  width={64}
                  height={64}
                  className="text-green-400"
                />
              </div>
              <h3 className="text-white font-bold text-md">{service.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServices;
