
import Image from 'next/image';
import { Building } from 'lucide-react';

const OurMedical = () => {
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-stretch gap-12 lg:gap-16">
          
          {/* Left Column: Text Content */}
          <div className="lg:w-1/2 flex flex-col justify-center">
            <p className="font-semibold text-teal-600 uppercase tracking-wide">
              OUR MEDICAL
            </p>
            <h1 className="mt-4 text-4xl sm:text-5xl font-bold text-gray-900 leading-tight">
              Family Primary Care Physician In Fort Pierce, FL
            </h1>
            <p className="mt-6 text-gray-600 leading-relaxed">
              MD Primary Care Inc is a full-service traditional primary care physician in Fort Pierce, 
              FL. Dr. Shah and Sherise Molten (ARNP) provide patient-centered quality care to 
              relieve symptoms and promote improved health, including treatment for 
              hypertension, diabetes, back pain, depression, and anxiety disorders, as well as 
              preventive services like annual checkups and physical exams, geriatric medicine, 
              joint injections, and skin biopsies.
            </p>
            <p className="mt-4 text-gray-600 leading-relaxed">
              We always welcome walk-in and urgent care appointments. Dr. Shah is also affiliated 
              with major hospitals, skilled nursing facilities, and rehabilitation in the area to 
              provide continuity of care to his patients. We provide Medical Assisted Treatment 
              (MAT) for substance use disorders.
            </p>
            <div className="mt-10 flex items-center gap-4">
              <button
                className=" inline-block px-8 py-3 font-semibold text-teal-500 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
              >
                VIEW MORE
              </button>
              <button
                className="inline-block px-8 py-3 font-semibold text-white bg-teal-600 rounded-lg hover:bg-teal-700 transition-colors shadow-md"
              >
                CONTACT US
              </button>
            </div>
          </div>

          {/* Right Column: Image, Grid, and Experience Card */}
          <div className="lg:w-1/2 relative mt-10 lg:mt-0 min-h-[500px] lg:min-h-0">
            {/* Dotted Grid Background */}
            <div
              className="absolute inset-0 z-0"
              style={{
                backgroundImage: 'radial-gradient(circle at 1px 1px, #d1d5db 1px, transparent 0)',
                backgroundSize: '1.25rem 1.25rem'
              }}
            ></div>

            {/* Image Container */}
            <div className="relative h-full w-full p-8 z-10">
              <div className="relative h-full w-full overflow-hidden shadow-2xl">
                <Image
                  src="/stethoscope.webp" // IMPORTANT: Add your image to the /public directory
                  alt="Stethoscope on a medical chart"
                  layout="fill"
                  objectFit="cover"
                  
                />

                {/* Experience Card (now at bottom center) */}
                <div 
                  className="absolute bottom-6 left-1/2 -translate-x-3/4 translate-y-1 
                             bg-white p-6 rounded-lg shadow-xl flex items-center gap-5 w-max"
                >
                  <div className="bg-teal-50 p-4 rounded-md">
                    <Building className="w-8 h-8 text-teal-500" />
                  </div>
                  <div>
                    <p className="text-4xl font-bold text-gray-900">20<span className="text-teal-500">+</span></p>
                    <p className="text-sm text-gray-500">Years Of Experience</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default OurMedical;