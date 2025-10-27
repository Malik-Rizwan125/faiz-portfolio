"use client";
import React from 'react';
import { ImWhatsapp } from 'react-icons/im';

const WhatsAppButton = () => {
  const phoneNumber = "923308195892"; // Include country code without +
  const openWhatsApp = () => {
    window.open(`https://wa.me/${phoneNumber}`, '_blank');
  };

  return (
    <button
      onClick={openWhatsApp}
      className="fixed bottom-8 right-8 z-50 bg-[#25D366] p-2.5 rounded-full shadow-lg hover:scale-110 transition-transform duration-300 group"
      aria-label="Contact on WhatsApp"
    >
      {/* WhatsApp SVG Icon */}
      <div className="relative">
        <ImWhatsapp className="w-10 h-10 text-white" />
        {/* Tooltip */}
        <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-gray-900 text-white p-1 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          Chat on WhatsApp
        </div>
      </div>
    </button>
  );
};

export default WhatsAppButton;