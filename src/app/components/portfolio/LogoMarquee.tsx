"use client";
import Image from "next/image";
import React from "react";

const logos = [
  "/images/image1.png",
  "/images/image2.png",
  "/images/image3.png",
  "/images/image4.png",
  "/images/image5.png",
  "/images/image6.png",
  "/images/image5.avif",
  "/images/process.avif",
];

export default function LogoMarquee() {
  return (
    <section className="w-full overflow-hidden">
      <div className="container mx-auto">
        <div className="relative flex overflow-hidden">
          {/* Animation container */}
          <div className="flex animate-marquee-reverse whitespace-nowrap">
            {[...logos, ...logos].map((logo, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-[40%] sm:w-[25%] md:w-[30%] lg:w-[30%] flex justify-center items-center px-4"
              >
                <Image
                  src={logo}
                  alt={`Logo ${index + 1}`}
                  width={200}
                  height={200}
                  className="opacity-80 w-full h-auto hover:opacity-100 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
