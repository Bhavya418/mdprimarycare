import React from "react";
import Image from "next/image";
import { MapPin } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative h-[75vh] flex items-center justify-start">
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0">
        <Image
          src="/hero.jpg"
          alt="Medical Services"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/70 via-gray-900/50 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl px-10">
        <p className="text-white uppercase tracking-widest text-sm mb-4">
          We Give You The Best!
        </p>
        <h1 className="text-5xl font-extrabold leading-tight text-white">
          <span className="text-teal-500">Medical</span> Services <br />
          That You Can <span className="text-teal-500">Trust</span>
        </h1>

        <button className="mt-8 border-2 border-white text-white font-bold px-8 py-3 rounded hover:bg-white hover:text-teal-600 transition">
          MAKE AN APPOINTMENT
        </button>
      </div>

      {/* Address Bottom Right */}
      <div className="absolute bottom-6 right-10 flex items-center space-x-4 text-white z-10">
        {/* Icon */}
        <div className="bg-teal-500 p-3 rounded-lg shadow-lg">
          <MapPin className="w-6 h-6" />
        </div>

        {/* Address */}
        <div>
          <p className="text-lg font-semibold">
            2215 Nebraska avenue #2B, Fort Pierce, FL 34950
          </p>
          <p className="text-sm opacity-80">Mon - Sat 8 AM – 5 PM</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
