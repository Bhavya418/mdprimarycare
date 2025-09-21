import React from "react";
import Image from "next/image";
import { UserSearch, ThumbsUp } from "lucide-react";

const Header = () => {
  return (
    <header>
      <div className="flex justify-between items-center px-10 py-6 bg-white shadow">
        {/* Logo */}
        <div className="flex items-center">
          <Image
            src="/logo.webp"
            alt="MD Primary Care"
            width={200}
            height={60}
            className="object-contain"
          />
        </div>

        {/* Info Sections */}
        <div className="flex flex-row items-center gap-16">
          {/* Personal Cabinet */}
          <div className="flex items-center gap-3">
            <div className="bg-gray-100 p-3 rounded-sm flex justify-center items-center">
              <UserSearch className="text-teal-500" size={28} />
            </div>
            <div>
              <h2 className="text-lg font-semibold text-teal-900">
                Personal Cabinet
              </h2>
              <p className="text-gray-500 text-sm">Qualified Staff</p>
            </div>
          </div>

          {/* Get Result Online */}
          <div className="flex items-center gap-3">
            <div className="bg-gray-100 p-3 rounded-sm flex justify-center items-center">
              <ThumbsUp className="text-teal-500" size={28} />
            </div>
            <div>
              <h2 className="text-lg font-semibold text-teal-900">
                Get Result Online
              </h2>
              <p className="text-gray-500 text-sm">Satisfied Patients</p>
            </div>
          </div>
        </div>

        {/* Book Online Button */}
        <button className="bg-yellow-400 text-black font-bold px-6 py-3 rounded-sm hover:bg-yellow-300 transition">
          Book Online
        </button>
      </div>
    </header>
  );
};

export default Header;
