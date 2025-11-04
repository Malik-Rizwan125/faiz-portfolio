"use client";

import Image from "next/image";
import React from "react";

const logos = [
  // { src: "/images/logo/logo1.png", contain: true },
  { src: "/images/logo/logo2.png", contain: false },
  { src: "/images/logo/logo3.png", contain: true },
  { src: "/images/logo/logo4.jpg", contain: false },
  { src: "/images/logo/logo5.jpg", contain: false },
  { src: "/images/logo/logo6.png", contain: true },
  // { src: "/images/logo/logo7.png", contain: false },
  { src: "/images/logo/logo9.png", contain: true },
  { src: "/images/logo/logo10.png", contain: true },
  { src: "/images/logo/logo14.png", contain: true },
];

export default function LogoMarquee() {
  return (
    <section className="w-full overflow-hidden">
      <div className="relative flex overflow-hidden h-[200px]">
        {/* Marquee Container */}
        <div className="flex animate-marquee whitespace-nowrap">
          {[...logos, ...logos].map((logo, index) => (
            <div
              key={index}
              className="flex-shrink-0 flex justify-center items-center px-5 lg:px-10"
            >
              <Image
                src={logo.src}
                alt={`Logo ${index + 1}`}
                width={150}
                height={150}
                className={`h-[150px] w-[150px] border border-white opacity-80 hover:opacity-100 transition-all duration-300 p-1 rounded-full ${
                  logo.contain ? "object-contain bg-white" : "object-cover"
                }`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
