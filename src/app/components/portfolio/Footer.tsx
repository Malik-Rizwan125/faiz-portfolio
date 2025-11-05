"use client";

import React from "react";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="py-8 border-t border-white/20 lg:mt-12 bg-black">
      <div className="container mx-auto !px-0 flex flex-col md:flex-row items-center justify-between text-white space-y-6 md:space-y-0">
        {/* Copyright */}
        <p className="text-sm text-gray-400 text-center md:text-left">
          © {new Date().getFullYear()} Faizmp4. All rights reserved.
        </p>

        {/* Social Icons */}
        <div className="flex space-x-4">
          <Link
            href="https://www.facebook.com/faizvisuals"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-gray-600 rounded-full p-3 hover:bg-[#E12CEC] hover:border-[#E12CEC] transition-all duration-300 flex items-center justify-center"
          >
            <FaFacebookF size={16} />
          </Link>

          <Link
            href="https://www.linkedin.com/in/muhammad-faiz-ansari/"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-gray-600 rounded-full p-3 hover:bg-[#E12CEC] hover:border-[#E12CEC] transition-all duration-300 flex items-center justify-center"
          >
            <FaLinkedinIn size={16} />
          </Link>

          <Link
            href="https://www.instagram.com/faizanimator/reels/"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-gray-600 rounded-full p-3 hover:bg-[#E12CEC] hover:border-[#E12CEC] transition-all duration-300 flex items-center justify-center"
          >
            <FaInstagram size={16} />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
