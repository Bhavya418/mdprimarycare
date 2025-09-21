import React from 'react'
import { Mail, MapPin, Phone, Timer } from "lucide-react";

const TopBar = () => {
  return (
    <header>
      <div>
        {/* Top bar */}
        <div className="bg-teal-900 text-white text-sm px-6 py-4">
          <div className="flex justify-around items-center">
            <div className="flex flex-row gap-3 justify-center items-center">
              {/* address */}
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <p>2215 Nebraska avenue#2B, Fort Pierce, FL 34950</p>
              </div>
              <div className="flex items-center gap-2">
                <Timer className="h-4 w-4" />
                <p>Mon - Sat 8 AM – 5 PM</p>
              </div>
            </div>
            <div className="flex flex-row gap-3 justify-center items-center">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <p>Email: cshah@mdprimarycare.us</p>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <p>Call: 772-302-3767</p>
              </div>
            </div>
          </div>
        </div>
        {/* Main header */}
        <div></div>
        {/* Navigation bar */}
        <div></div>
      </div>
    </header>
  )
}

export default TopBar
