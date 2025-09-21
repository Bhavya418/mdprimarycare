import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-teal-500">
      <ul className="flex">
        {/* Home - active */}
        <li className="px-8 py-4 bg-teal-900 text-white font-bold cursor-pointer">
          Home
        </li>
        <li className="px-8 py-4 text-white font-bold hover:bg-teal-600 cursor-pointer">
          About Us
        </li>
        <li className="px-8 py-4 text-white font-bold hover:bg-teal-600 cursor-pointer">
          Providers
        </li>
        <li className="px-8 py-4 text-white font-bold hover:bg-teal-600 cursor-pointer">
          Testimonials
        </li>
        <li className="px-8 py-4 text-white font-bold hover:bg-teal-600 cursor-pointer">
          Contact Us
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
