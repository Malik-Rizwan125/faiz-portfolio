"use client";

import React from "react";
import Link from "next/link";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="py-8 border-t border-white/20 mt-12 bg-black">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between text-white space-y-6 md:space-y-0">
        {/* Copyright */}
        <p className="text-sm text-gray-400 text-center md:text-left">
          © {new Date().getFullYear()} Faizmp4. All rights reserved.
        </p>

        {/* Social Icons */}
        <div className="flex space-x-4">
          <Link
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-gray-600 rounded-full p-3 hover:bg-orange-500 hover:border-orange-500 transition-all duration-300 flex items-center justify-center"
          >
            <FaFacebookF size={16} />
          </Link>

          <Link
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-gray-600 rounded-full p-3 hover:bg-orange-500 hover:border-orange-500 transition-all duration-300 flex items-center justify-center"
          >
            <FaLinkedinIn size={16} />
          </Link>

          <Link
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-gray-600 rounded-full p-3 hover:bg-orange-500 hover:border-orange-500 transition-all duration-300 flex items-center justify-center"
          >
            <FaTwitter size={16} />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
