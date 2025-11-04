"use client";

import Image from "next/image";
import React from "react";

const logos = [
  "/images/logo/logo1.png",
  "/images/logo/logo2.png",
  "/images/logo/logo3.png",
  "/images/logo/logo4.jpg",
  "/images/logo/logo5.jpg",
  "/images/logo/logo6.png",
  "/images/logo/logo7.png",
  // "/images/logo/logo8.png",
  "/images/logo/logo9.png",
  "/images/logo/logo10.png",
  // "/images/logo/logo11.png",
  // "/images/logo/logo12.png",
  // "/images/logo/logo13.png",
  // "/images/logo/logo14.png",
];

export default function LogoMarquee() {
  return (
    <section className="w-full overflow-hidden ">
      <div className="relative flex overflow-hidden h-[200px]">
        {/* Marquee Container */}
        <div className="flex animate-marquee whitespace-nowrap">
          {/* Duplicate logos for seamless infinite scroll */}
          {[...logos, ...logos].map((logo, index) => (
            <div
              key={index}
              className="flex-shrink-0 flex justify-center items-center px-10"
            >
              <Image
                src={logo}
                alt={`Logo ${index + 1}`}
                width={160}
                height={100}
                className="opacity-80 hover:opacity-100 transition-all duration-300 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
